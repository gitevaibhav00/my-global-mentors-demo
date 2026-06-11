<?php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode([
        "success" => false,
        "message" => "Invalid request."
    ]);
    exit;
}

// Honeypot — bots fill this hidden field; pretend success, send nothing
if (!empty($_POST['_honey'])) {
    echo json_encode(["success" => true]);
    exit;
}

$first_name  = trim($_POST['firstName'] ?? '');
$last_name   = trim($_POST['lastName'] ?? '');
$email       = trim($_POST['email'] ?? '');
$phone       = trim($_POST['phone'] ?? '');
$destination = trim($_POST['destination'] ?? '');
$start_when  = trim($_POST['startWhen'] ?? '');
$consent     = ($_POST['consent'] ?? '') === 'Yes' ? 'Yes' : 'No';

if ($first_name === '' || $last_name === '' || $email === '' || $phone === '' || $destination === '' || $start_when === '') {
    echo json_encode([
        "success" => false,
        "message" => "Please fill all required fields."
    ]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode([
        "success" => false,
        "message" => "Please enter a valid email address."
    ]);
    exit;
}

date_default_timezone_set('Asia/Kolkata');

$to = "myglobalmentorsindia@gmail.com";
$subject = "New Counselling Request - " . $first_name . " " . $last_name;

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

if (mail($to, $subject, $body, $headers)) {
    echo json_encode([
        "success" => true,
        "message" => "Message sent successfully."
    ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => "Mail sending failed."
    ]);
}
