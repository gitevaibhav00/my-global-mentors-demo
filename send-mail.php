<?php
header('Content-Type: application/json');

function respond($success, $message = '') {
    echo json_encode(["success" => $success, "message" => $message]);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    respond(false, "Invalid request.");
}

// Honeypot — bots fill this hidden field; pretend success, store/send nothing
if (!empty($_POST['_honey'])) {
    respond(true);
}

$first_name  = trim($_POST['firstName'] ?? '');
$last_name   = trim($_POST['lastName'] ?? '');
$email       = trim($_POST['email'] ?? '');
$phone       = trim($_POST['phone'] ?? '');
$destination = trim($_POST['destination'] ?? '');
$start_when  = trim($_POST['startWhen'] ?? '');
$consent     = ($_POST['consent'] ?? '') === 'Yes' ? 'Yes' : 'No';

if ($first_name === '' || $last_name === '' || $email === '' || $phone === '' || $destination === '' || $start_when === '') {
    respond(false, "Please fill all required fields.");
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(false, "Please enter a valid email address.");
}

// Reject absurdly long values (defence-in-depth vs oversized/abusive payloads).
// Limits mirror the DB column sizes in the CREATE TABLE below.
if (strlen($first_name) > 100 || strlen($last_name) > 100 || strlen($email) > 190 ||
    strlen($phone) > 30 || strlen($destination) > 100 || strlen($start_when) > 100) {
    respond(false, "One of the fields is too long.");
}

date_default_timezone_set('Asia/Kolkata');
$received_at = date('Y-m-d H:i:s');

/* ---- 1. Store the lead in our own database (durable, self-owned record) ----
   Credentials live in db-config.php (gitignored, uploaded to the host manually).
   If that file or the DB is unavailable, we skip storage and still email. */
$stored = false;
// Prefer db-config.php ONE LEVEL ABOVE public_html (outside the web root, so it can
// never be served even if PHP execution breaks); fall back to the same folder.
$config_file = dirname(__DIR__) . '/db-config.php';
if (!is_file($config_file)) {
    $config_file = __DIR__ . '/db-config.php';
}
if (is_file($config_file)) {
    $db = require $config_file;
    $mysqli = @new mysqli($db['host'], $db['user'], $db['pass'], $db['name']);
    if (!$mysqli->connect_errno) {
        $mysqli->set_charset('utf8mb4');
        $ip = $_SERVER['REMOTE_ADDR'] ?? null;

        // The `inquiries` table is created once in phpMyAdmin (one-time setup SQL),
        // so the hot path is a single INSERT — we DON'T run CREATE TABLE on every
        // request. That's one fewer round-trip per submission and it lets the DB user
        // stay least-privilege (INSERT/SELECT only, no CREATE/DROP/ALTER).
        $insert = function () use ($mysqli, $first_name, $last_name, $email, $phone,
                                   $destination, $start_when, $consent, $received_at, $ip) {
            $stmt = $mysqli->prepare(
                "INSERT INTO inquiries
                 (first_name, last_name, email, phone, destination, start_when, consent, created_at, ip_address)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)"
            );
            if (!$stmt) {
                return false;
            }
            $stmt->bind_param('sssssssss',
                $first_name, $last_name, $email, $phone,
                $destination, $start_when, $consent, $received_at, $ip);
            $ok = $stmt->execute();
            $stmt->close();
            return $ok;
        };

        $stored = $insert();

        // Self-heal ONLY if the table is genuinely missing (MySQL errno 1146): create
        // it once, then retry. Normal requests never enter this branch. If the DB user
        // is least-privilege (no CREATE), this no-ops and we fall back to emailing.
        if (!$stored && $mysqli->errno === 1146) {
            $mysqli->query(
                "CREATE TABLE IF NOT EXISTS inquiries (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    first_name  VARCHAR(100) NOT NULL,
                    last_name   VARCHAR(100) NOT NULL,
                    email       VARCHAR(190) NOT NULL,
                    phone       VARCHAR(30)  NOT NULL,
                    destination VARCHAR(100) NOT NULL,
                    start_when  VARCHAR(100) NOT NULL,
                    consent     VARCHAR(3)   NOT NULL,
                    created_at  DATETIME     NOT NULL,
                    ip_address  VARCHAR(45)  DEFAULT NULL
                ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4"
            );
            $stored = $insert();
        }

        if (!$stored) {
            error_log("MGM inquiry DB insert failed: " . $mysqli->error);
        }
        $mysqli->close();
    } else {
        error_log("MGM inquiry DB connect failed: " . $mysqli->connect_error);
    }
}

/* ---- 2. Email the lead to the team (immediate notification) ---- */
$to = "myglobalmentorsindia@gmail.com";

// Strip CR/LF from name parts before they enter the Subject header (anti-injection)
$clean_first = str_replace(["\r", "\n"], '', $first_name);
$clean_last  = str_replace(["\r", "\n"], '', $last_name);
$subject = "New Counselling Request - " . $clean_first . " " . $clean_last;

$body  = "New counselling request received from the website:\n\n";
$body .= "Name: " . $first_name . " " . $last_name . "\n";
$body .= "Email: " . $email . "\n";
$body .= "Mobile: " . $phone . "\n";
$body .= "Preferred Destination: " . $destination . "\n";
$body .= "When To Start: " . $start_when . "\n";
$body .= "Consent To Contact: " . $consent . "\n";
$body .= "Received: " . date('d M Y, h:i A') . " IST\n";

// From must be a mailbox on the site's own domain, or most hosts reject it / mark it spam
$headers  = "From: info@myglobalmentors.com\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$emailed = @mail($to, $subject, $body, $headers);

/* ---- 3. Respond: success if the lead was captured at least once ---- */
if ($stored || $emailed) {
    respond(true, "Message sent successfully.");
}
respond(false, "Mail sending failed.");
