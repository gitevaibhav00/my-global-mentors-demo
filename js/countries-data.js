/* =====================================================
   COUNTRIES DATA
   Used by index.html (destination grid) and
   countries/country.html (detail page)
   ===================================================== */

const COUNTRIES = [
  {
    id: 'us', name: 'United States', code: 'us', capital: 'Washington, D.C.', currency: 'USD',
    tagline: 'Home to the world\'s most prestigious universities',
    intake: 'Fall (Aug-Sep), Spring (Jan), Summer (May)',
    cost: '$25,000 – $55,000 / year',
    avgFee: '$35,000', avgLiving: '$12,000', visaType: 'F-1 Student Visa',
    universities: [
      { name: 'Harvard University', city: 'Cambridge, MA', rank: 'QS #4' },
      { name: 'Massachusetts Institute of Technology (MIT)', city: 'Cambridge, MA', rank: 'QS #1' },
      { name: 'Stanford University', city: 'Stanford, CA', rank: 'QS #6' },
      { name: 'University of California, Berkeley', city: 'Berkeley, CA', rank: 'QS #12' },
      { name: 'Columbia University', city: 'New York, NY', rank: 'QS #23' },
      { name: 'Carnegie Mellon University', city: 'Pittsburgh, PA', rank: 'QS #58' },
      { name: 'University of Pennsylvania', city: 'Philadelphia, PA', rank: 'QS #11' },
      { name: 'Yale University', city: 'New Haven, CT', rank: 'QS #16' },
      { name: 'Princeton University', city: 'Princeton, NJ', rank: 'QS #22' },
      { name: 'New York University (NYU)', city: 'New York, NY', rank: 'QS #38' },
      { name: 'University of Michigan, Ann Arbor', city: 'Ann Arbor, MI', rank: 'QS #44' },
      { name: 'University of California, Los Angeles', city: 'Los Angeles, CA', rank: 'QS #42' },
      { name: 'University of Chicago', city: 'Chicago, IL', rank: 'QS #21' },
      { name: 'Cornell University', city: 'Ithaca, NY', rank: 'QS #16' },
      { name: 'Arizona State University', city: 'Tempe, AZ', rank: 'QS #198' }
    ],
    courses: ['Computer Science', 'Data Science', 'MBA', 'Engineering', 'Biotechnology', 'Business Analytics', 'Finance'],
    why: [
      'World leader in research and innovation',
      'Optional Practical Training (OPT) — work up to 3 years post-study',
      'Diverse campus culture with global exposure',
      'Generous scholarships & assistantships',
      'Strong industry-academia connect (Silicon Valley, Wall Street)'
    ]
  },
  {
    id: 'ca', name: 'Canada', code: 'ca', capital: 'Ottawa', currency: 'CAD',
    tagline: 'Quality education with clear PR pathways',
    intake: 'Fall (Sep), Winter (Jan), Summer (May)',
    cost: 'CAD 20,000 – 35,000 / year',
    avgFee: 'CAD 28,000', avgLiving: 'CAD 12,000', visaType: 'Study Permit',
    universities: [
      { name: 'University of Toronto', city: 'Toronto', rank: 'QS #21' },
      { name: 'McGill University', city: 'Montreal', rank: 'QS #29' },
      { name: 'University of British Columbia (UBC)', city: 'Vancouver', rank: 'QS #34' },
      { name: 'University of Alberta', city: 'Edmonton', rank: 'QS #111' },
      { name: 'McMaster University', city: 'Hamilton', rank: 'QS #189' },
      { name: 'University of Waterloo', city: 'Waterloo', rank: 'QS #112' },
      { name: 'Western University', city: 'London, ON', rank: 'QS #114' },
      { name: 'Queen\'s University', city: 'Kingston', rank: 'QS #209' },
      { name: 'University of Calgary', city: 'Calgary', rank: 'QS #182' },
      { name: 'York University', city: 'Toronto', rank: 'QS #353' },
      { name: 'Simon Fraser University', city: 'Burnaby', rank: 'QS #318' },
      { name: 'Concordia University', city: 'Montreal', rank: 'QS #415' }
    ],
    courses: ['Computer Science', 'Business Management', 'Engineering', 'Healthcare', 'Hospitality', 'Data Analytics'],
    why: [
      'Post-Graduation Work Permit (PGWP) up to 3 years',
      'Clear pathway to Permanent Residency',
      'High quality of life, safety & multicultural society',
      'Affordable tuition compared to US/UK',
      'Co-op programs combining study & paid work'
    ]
  },
  {
    id: 'gb', name: 'United Kingdom', code: 'gb', capital: 'London', currency: 'GBP',
    tagline: 'Globally respected degrees with 1-year master\'s',
    intake: 'Autumn (Sep), Spring (Jan)',
    cost: '£15,000 – £35,000 / year',
    avgFee: '£22,000', avgLiving: '£12,000', visaType: 'Student Visa (Tier 4)',
    universities: [
      { name: 'University of Oxford', city: 'Oxford', rank: 'QS #3' },
      { name: 'University of Cambridge', city: 'Cambridge', rank: 'QS #2' },
      { name: 'Imperial College London', city: 'London', rank: 'QS #6' },
      { name: 'UCL — University College London', city: 'London', rank: 'QS #9' },
      { name: 'London School of Economics (LSE)', city: 'London', rank: 'QS #50' },
      { name: 'King\'s College London', city: 'London', rank: 'QS #40' },
      { name: 'University of Edinburgh', city: 'Edinburgh', rank: 'QS #27' },
      { name: 'University of Manchester', city: 'Manchester', rank: 'QS #32' },
      { name: 'University of Warwick', city: 'Coventry', rank: 'QS #69' },
      { name: 'University of Bristol', city: 'Bristol', rank: 'QS #55' },
      { name: 'University of Glasgow', city: 'Glasgow', rank: 'QS #76' },
      { name: 'University of Birmingham', city: 'Birmingham', rank: 'QS #80' }
    ],
    courses: ['MBA', 'Finance', 'Data Science', 'Law', 'Engineering', 'Medicine', 'Creative Arts'],
    why: [
      '1-year master\'s programs save time & cost',
      'Graduate Route — 2 years post-study work visa',
      'Globally recognized degrees & rich academic heritage',
      'Diverse scholarships including Chevening, Commonwealth',
      'Gateway to Europe with strong global networks'
    ]
  },
  {
    id: 'au', name: 'Australia', code: 'au', capital: 'Canberra', currency: 'AUD',
    tagline: 'World-class education with lifestyle to match',
    intake: 'February, July',
    cost: 'AUD 25,000 – 45,000 / year',
    avgFee: 'AUD 32,000', avgLiving: 'AUD 21,000', visaType: 'Student Visa (Subclass 500)',
    universities: [
      { name: 'University of Melbourne', city: 'Melbourne', rank: 'QS #14' },
      { name: 'Australian National University (ANU)', city: 'Canberra', rank: 'QS #30' },
      { name: 'University of Sydney', city: 'Sydney', rank: 'QS #18' },
      { name: 'UNSW Sydney', city: 'Sydney', rank: 'QS #19' },
      { name: 'Monash University', city: 'Melbourne', rank: 'QS #37' },
      { name: 'University of Queensland', city: 'Brisbane', rank: 'QS #40' },
      { name: 'University of Western Australia', city: 'Perth', rank: 'QS #72' },
      { name: 'University of Adelaide', city: 'Adelaide', rank: 'QS #82' },
      { name: 'University of Technology Sydney', city: 'Sydney', rank: 'QS #88' },
      { name: 'RMIT University', city: 'Melbourne', rank: 'QS #123' },
      { name: 'Macquarie University', city: 'Sydney', rank: 'QS #130' },
      { name: 'Deakin University', city: 'Geelong', rank: 'QS #197' }
    ],
    courses: ['Engineering', 'Business', 'Healthcare', 'IT', 'Hospitality', 'Agriculture'],
    why: [
      'Group of Eight (Go8) prestigious universities',
      'Post-study work visa up to 4 years',
      '8 of world\'s top 100 student cities',
      'Strong international student support systems',
      'Pathway to skilled migration & PR'
    ]
  },
  {
    id: 'de', name: 'Germany', code: 'de', capital: 'Berlin', currency: 'EUR',
    tagline: 'Free / low-fee public universities with strong engineering legacy',
    intake: 'Winter (Oct), Summer (April)',
    cost: '€0 – €20,000 / year (public mostly free)',
    avgFee: '€500/sem at public', avgLiving: '€10,800', visaType: 'National Visa for Studies',
    universities: [
      { name: 'Technical University of Munich (TUM)', city: 'Munich', rank: 'QS #28' },
      { name: 'Ludwig Maximilian University Munich', city: 'Munich', rank: 'QS #59' },
      { name: 'Heidelberg University', city: 'Heidelberg', rank: 'QS #84' },
      { name: 'RWTH Aachen University', city: 'Aachen', rank: 'QS #99' },
      { name: 'Free University of Berlin', city: 'Berlin', rank: 'QS #97' },
      { name: 'TU Berlin', city: 'Berlin', rank: 'QS #154' },
      { name: 'Humboldt University Berlin', city: 'Berlin', rank: 'QS #126' },
      { name: 'University of Freiburg', city: 'Freiburg', rank: 'QS #192' },
      { name: 'KIT — Karlsruhe Institute of Technology', city: 'Karlsruhe', rank: 'QS #105' },
      { name: 'University of Hamburg', city: 'Hamburg', rank: 'QS #205' }
    ],
    courses: ['Mechanical Engineering', 'Automotive', 'Computer Science', 'Renewable Energy', 'Physics', 'Data Science'],
    why: [
      'Most public universities charge no tuition',
      '18-month post-study job-search visa',
      'Strong industry: BMW, Siemens, SAP, Bosch hire',
      'Path to EU Blue Card & PR',
      'High R&D investment & innovation culture'
    ]
  },
  {
    id: 'nz', name: 'New Zealand', code: 'nz', capital: 'Wellington', currency: 'NZD',
    tagline: 'Safe, scenic and student-friendly',
    intake: 'February, July',
    cost: 'NZD 22,000 – 35,000 / year',
    avgFee: 'NZD 28,000', avgLiving: 'NZD 15,000', visaType: 'Fee-Paying Student Visa',
    universities: [
      { name: 'University of Auckland', city: 'Auckland', rank: 'QS #65' },
      { name: 'University of Otago', city: 'Dunedin', rank: 'QS #214' },
      { name: 'Victoria University of Wellington', city: 'Wellington', rank: 'QS #241' },
      { name: 'University of Canterbury', city: 'Christchurch', rank: 'QS #261' },
      { name: 'Massey University', city: 'Palmerston North', rank: 'QS #239' },
      { name: 'University of Waikato', city: 'Hamilton', rank: 'QS #250' },
      { name: 'AUT — Auckland University of Technology', city: 'Auckland', rank: 'QS #412' },
      { name: 'Lincoln University', city: 'Lincoln', rank: 'QS #362' }
    ],
    courses: ['Agriculture', 'Engineering', 'Hospitality', 'Animation & VFX', 'Healthcare'],
    why: [
      'All 8 universities ranked among world\'s top 3%',
      'Post-study work visa up to 3 years',
      'High safety & welcoming culture',
      'Beautiful natural environment',
      'Pathway to skilled migration'
    ]
  },
  {
    id: 'ie', name: 'Ireland', code: 'ie', capital: 'Dublin', currency: 'EUR',
    tagline: 'Europe\'s tech hub — Google, Meta, Apple HQs',
    intake: 'September, January',
    cost: '€10,000 – €25,000 / year',
    avgFee: '€18,000', avgLiving: '€11,000', visaType: 'Stamp 2 Student Visa',
    universities: [
      { name: 'Trinity College Dublin', city: 'Dublin', rank: 'QS #87' },
      { name: 'University College Dublin', city: 'Dublin', rank: 'QS #126' },
      { name: 'University of Galway', city: 'Galway', rank: 'QS #289' },
      { name: 'University College Cork', city: 'Cork', rank: 'QS #292' },
      { name: 'Dublin City University', city: 'Dublin', rank: 'QS #436' },
      { name: 'University of Limerick', city: 'Limerick', rank: 'QS #501' },
      { name: 'Maynooth University', city: 'Maynooth', rank: 'QS #801' },
      { name: 'Technological University Dublin', city: 'Dublin', rank: 'QS #851' }
    ],
    courses: ['Computer Science', 'Pharma & Biotech', 'Finance', 'Data Analytics', 'AI/ML'],
    why: [
      '2-year Stay Back Visa for Master\'s graduates',
      'Top global tech & pharma companies based here',
      'English-speaking country in EU',
      'Friendly visa policies for Indian students',
      'Strong cultural ties with India'
    ]
  },
  {
    id: 'fr', name: 'France', code: 'fr', capital: 'Paris', currency: 'EUR',
    tagline: 'Land of Grandes Écoles & global business schools',
    intake: 'September, January',
    cost: '€3,000 – €25,000 / year',
    avgFee: '€12,000', avgLiving: '€11,000', visaType: 'Long-Stay Student Visa (VLS-TS)',
    universities: [
      { name: 'Université PSL', city: 'Paris', rank: 'QS #24' },
      { name: 'Institut Polytechnique de Paris', city: 'Palaiseau', rank: 'QS #38' },
      { name: 'Sorbonne University', city: 'Paris', rank: 'QS #59' },
      { name: 'HEC Paris', city: 'Jouy-en-Josas', rank: 'Top MBA' },
      { name: 'INSEAD', city: 'Fontainebleau', rank: 'Top MBA' },
      { name: 'École Polytechnique', city: 'Palaiseau', rank: 'QS #38' },
      { name: 'ESSEC Business School', city: 'Cergy', rank: 'Top B-School' },
      { name: 'Sciences Po', city: 'Paris', rank: 'QS #319' }
    ],
    courses: ['MBA', 'Luxury Management', 'Fashion', 'Engineering', 'Hospitality', 'Culinary Arts'],
    why: [
      'Affordable public universities',
      '5-year post-study residence permit option',
      'Home to world\'s top business schools',
      'Erasmus+ & rich cultural exchange',
      'Gateway to EU job market'
    ]
  },
  {
    id: 'nl', name: 'Netherlands', code: 'nl', capital: 'Amsterdam', currency: 'EUR',
    tagline: 'Innovation-driven, English-taught programs',
    intake: 'September, February',
    cost: '€8,000 – €20,000 / year',
    avgFee: '€14,000', avgLiving: '€11,500', visaType: 'MVV / Residence Permit',
    universities: [
      { name: 'University of Amsterdam', city: 'Amsterdam', rank: 'QS #53' },
      { name: 'Delft University of Technology', city: 'Delft', rank: 'QS #47' },
      { name: 'Utrecht University', city: 'Utrecht', rank: 'QS #107' },
      { name: 'Leiden University', city: 'Leiden', rank: 'QS #119' },
      { name: 'Erasmus University Rotterdam', city: 'Rotterdam', rank: 'QS #176' },
      { name: 'University of Groningen', city: 'Groningen', rank: 'QS #117' },
      { name: 'Wageningen University', city: 'Wageningen', rank: 'QS #119' },
      { name: 'Eindhoven University of Technology', city: 'Eindhoven', rank: 'QS #124' }
    ],
    courses: ['Engineering', 'Agriculture', 'Business', 'Logistics', 'Data Science', 'Sustainability'],
    why: [
      '2,000+ programs taught entirely in English',
      'Orientation year for job seeking after graduation',
      'Highly innovative & startup-friendly',
      'Excellent quality of life & safety',
      'Multinational HQs (Philips, Shell, ASML)'
    ]
  },
  {
    id: 'sg', name: 'Singapore', code: 'sg', capital: 'Singapore', currency: 'SGD',
    tagline: 'Asia\'s education powerhouse',
    intake: 'August, January',
    cost: 'SGD 17,000 – 50,000 / year',
    avgFee: 'SGD 30,000', avgLiving: 'SGD 12,000', visaType: 'Student Pass',
    universities: [
      { name: 'National University of Singapore (NUS)', city: 'Singapore', rank: 'QS #8' },
      { name: 'Nanyang Technological University (NTU)', city: 'Singapore', rank: 'QS #15' },
      { name: 'Singapore Management University (SMU)', city: 'Singapore', rank: 'QS #545' },
      { name: 'Singapore University of Technology and Design', city: 'Singapore', rank: 'QS Top 50 young' },
      { name: 'INSEAD Asia Campus', city: 'Singapore', rank: 'Top MBA' },
      { name: 'James Cook University Singapore', city: 'Singapore', rank: 'QS #486' }
    ],
    courses: ['MBA', 'Finance', 'Computer Science', 'Hospitality', 'Maritime Studies'],
    why: [
      'NUS & NTU ranked among world\'s top 15',
      'Global financial hub — strong placements',
      'Indian community & cuisine make it home-like',
      'Safe, clean, world-class infrastructure',
      'English as primary language'
    ]
  },
  {
    id: 'ae-dubai', name: 'Dubai', code: 'ae', capital: 'Dubai', currency: 'AED',
    tagline: 'Global business hub with branch campuses of top unis',
    intake: 'September, January',
    cost: 'AED 30,000 – 95,000 / year',
    avgFee: 'AED 55,000', avgLiving: 'AED 30,000', visaType: 'Student Residence Visa',
    universities: [
      { name: 'University of Birmingham Dubai', city: 'Dubai', rank: 'UK QS #80' },
      { name: 'Heriot-Watt University Dubai', city: 'Dubai', rank: 'UK QS #235' },
      { name: 'Middlesex University Dubai', city: 'Dubai', rank: 'UK Top 50' },
      { name: 'Manipal Academy of Higher Education Dubai', city: 'Dubai', rank: 'Indian Top' },
      { name: 'Murdoch University Dubai', city: 'Dubai', rank: 'Aus QS #431' },
      { name: 'Curtin University Dubai', city: 'Dubai', rank: 'Aus QS #183' },
      { name: 'BITS Pilani Dubai', city: 'Dubai', rank: 'Indian Top' },
      { name: 'American University in Dubai', city: 'Dubai', rank: '—' }
    ],
    courses: ['Business', 'Tourism', 'Aviation', 'Engineering', 'IT', 'Hospitality'],
    why: [
      'Tax-free environment',
      'Top global universities at lower cost than home campuses',
      'Proximity to India — short flights, no jet lag',
      'Vibrant Indian community',
      'Strong job market in finance, tourism, real estate'
    ]
  },
  {
    id: 'ae', name: 'United Arab Emirates', code: 'ae', capital: 'Abu Dhabi', currency: 'AED',
    tagline: 'Modern hubs across Abu Dhabi, Sharjah, Dubai',
    intake: 'September, January',
    cost: 'AED 30,000 – 90,000 / year',
    avgFee: 'AED 50,000', avgLiving: 'AED 28,000', visaType: 'Student Residence Visa',
    universities: [
      { name: 'Khalifa University', city: 'Abu Dhabi', rank: 'QS #202' },
      { name: 'United Arab Emirates University', city: 'Al Ain', rank: 'QS #290' },
      { name: 'NYU Abu Dhabi', city: 'Abu Dhabi', rank: 'Top liberal arts' },
      { name: 'American University of Sharjah', city: 'Sharjah', rank: 'QS #401' },
      { name: 'Zayed University', city: 'Abu Dhabi/Dubai', rank: 'QS #581' },
      { name: 'University of Sharjah', city: 'Sharjah', rank: 'QS #491' },
      { name: 'Abu Dhabi University', city: 'Abu Dhabi', rank: 'QS #701' }
    ],
    courses: ['Engineering', 'Business', 'IT', 'Architecture', 'Health Sciences'],
    why: [
      'Tax-free salaries post-graduation',
      'Diverse, expat-friendly culture',
      '2-year post-study residence option',
      'Booming job market across sectors',
      'Cultural & geographic proximity to India'
    ]
  },
  {
    id: 'se', name: 'Sweden', code: 'se', capital: 'Stockholm', currency: 'SEK',
    tagline: 'Innovation, sustainability & creativity',
    intake: 'August, January',
    cost: 'SEK 80,000 – 295,000 / year',
    avgFee: 'SEK 130,000', avgLiving: 'SEK 100,000', visaType: 'Residence Permit for Studies',
    universities: [
      { name: 'Lund University', city: 'Lund', rank: 'QS #75' },
      { name: 'KTH Royal Institute of Technology', city: 'Stockholm', rank: 'QS #73' },
      { name: 'Uppsala University', city: 'Uppsala', rank: 'QS #105' },
      { name: 'Stockholm University', city: 'Stockholm', rank: 'QS #153' },
      { name: 'Chalmers University of Technology', city: 'Gothenburg', rank: 'QS #129' },
      { name: 'KI — Karolinska Institute', city: 'Stockholm', rank: 'World top medical' },
      { name: 'University of Gothenburg', city: 'Gothenburg', rank: 'QS #185' }
    ],
    courses: ['Sustainable Engineering', 'Computer Science', 'Design', 'Medicine', 'Innovation Management'],
    why: [
      'Pioneering research & innovation',
      '1-year post-study residence permit',
      'High English proficiency nationwide',
      'Free healthcare for residents',
      'Work-life balance & social equality'
    ]
  },
  {
    id: 'ch', name: 'Switzerland', code: 'ch', capital: 'Bern', currency: 'CHF',
    tagline: 'World-class hospitality & finance education',
    intake: 'September, February',
    cost: 'CHF 1,500 – 45,000 / year',
    avgFee: 'CHF 22,000', avgLiving: 'CHF 22,000', visaType: 'D-Visa for Studies',
    universities: [
      { name: 'ETH Zurich', city: 'Zurich', rank: 'QS #7' },
      { name: 'EPFL — École Polytechnique Fédérale de Lausanne', city: 'Lausanne', rank: 'QS #36' },
      { name: 'University of Zurich', city: 'Zurich', rank: 'QS #91' },
      { name: 'University of Geneva', city: 'Geneva', rank: 'QS #125' },
      { name: 'University of Bern', city: 'Bern', rank: 'QS #146' },
      { name: 'EHL Hospitality Business School', city: 'Lausanne', rank: 'World #1 Hospitality' },
      { name: 'Glion Institute of Higher Education', city: 'Glion', rank: 'Top Hospitality' },
      { name: 'Les Roches', city: 'Bluche', rank: 'Top Hospitality' }
    ],
    courses: ['Hospitality Management', 'Banking & Finance', 'Engineering', 'Biotech', 'Pharma'],
    why: [
      'ETH Zurich among world\'s top 10',
      'Global leader in hospitality education',
      'High wages & quality of life',
      'Central European location',
      '6-month job search visa post-graduation'
    ]
  },
  {
    id: 'it', name: 'Italy', code: 'it', capital: 'Rome', currency: 'EUR',
    tagline: 'Art, design, fashion & heritage education',
    intake: 'September, February',
    cost: '€900 – €20,000 / year',
    avgFee: '€4,500', avgLiving: '€10,000', visaType: 'National Visa for Study',
    universities: [
      { name: 'Politecnico di Milano', city: 'Milan', rank: 'QS #123' },
      { name: 'Università Bocconi', city: 'Milan', rank: 'Top B-School' },
      { name: 'Sapienza University of Rome', city: 'Rome', rank: 'QS #134' },
      { name: 'University of Bologna', city: 'Bologna', rank: 'QS #154' },
      { name: 'University of Padua', city: 'Padua', rank: 'QS #219' },
      { name: 'Politecnico di Torino', city: 'Turin', rank: 'QS #252' },
      { name: 'Università Cattolica del Sacro Cuore', city: 'Milan', rank: 'QS #436' },
      { name: 'Domus Academy', city: 'Milan', rank: 'Top Design' }
    ],
    courses: ['Fashion Design', 'Architecture', 'Automotive', 'Culinary Arts', 'Fine Arts', 'Business'],
    why: [
      'Affordable public university fees',
      'Cradle of design, fashion & art',
      'Italian government scholarships',
      '12-month residence permit for job search',
      'Rich cultural & culinary heritage'
    ]
  },
  {
    id: 'es', name: 'Spain', code: 'es', capital: 'Madrid', currency: 'EUR',
    tagline: 'Vibrant culture meets affordable European education',
    intake: 'September, February',
    cost: '€1,000 – €18,000 / year',
    avgFee: '€7,000', avgLiving: '€10,000', visaType: 'National Student Visa',
    universities: [
      { name: 'University of Barcelona', city: 'Barcelona', rank: 'QS #143' },
      { name: 'Universidad Autónoma de Madrid', city: 'Madrid', rank: 'QS #181' },
      { name: 'Universitat Pompeu Fabra', city: 'Barcelona', rank: 'QS #287' },
      { name: 'Complutense University of Madrid', city: 'Madrid', rank: 'QS #198' },
      { name: 'IE University', city: 'Madrid', rank: 'Top B-School' },
      { name: 'ESADE Business School', city: 'Barcelona', rank: 'Top B-School' },
      { name: 'IESE Business School', city: 'Barcelona', rank: 'Top MBA' },
      { name: 'University of Navarra', city: 'Pamplona', rank: 'QS #251' }
    ],
    courses: ['MBA', 'Hospitality', 'Architecture', 'International Business', 'Renewable Energy'],
    why: [
      'Affordable & high quality of life',
      'Strong business schools (IESE, IE, ESADE)',
      'Year-round pleasant climate',
      'Post-study job search permit',
      'Gateway to Latin American markets'
    ]
  },
  {
    id: 'pl', name: 'Poland', code: 'pl', capital: 'Warsaw', currency: 'PLN',
    tagline: 'Affordable EU degrees with strong tech roots',
    intake: 'October, February',
    cost: '€2,000 – €6,000 / year',
    avgFee: '€3,500', avgLiving: '€6,000', visaType: 'National Visa (D-type)',
    universities: [
      { name: 'University of Warsaw', city: 'Warsaw', rank: 'QS #262' },
      { name: 'Jagiellonian University', city: 'Krakow', rank: 'QS #309' },
      { name: 'Warsaw University of Technology', city: 'Warsaw', rank: 'QS #511' },
      { name: 'AGH University of Science and Technology', city: 'Krakow', rank: 'QS #801' },
      { name: 'Poznan University of Technology', city: 'Poznan', rank: 'QS #1001' },
      { name: 'Lodz University of Technology', city: 'Lodz', rank: 'QS #1001' },
      { name: 'Kozminski University', city: 'Warsaw', rank: 'Top Business' }
    ],
    courses: ['Computer Science', 'Medicine (MBBS)', 'Engineering', 'Business Administration'],
    why: [
      'Highly affordable tuition & living',
      'EU degrees recognized worldwide',
      'English-taught programs available',
      'Growing tech & gaming industry',
      'Easy travel across Europe'
    ]
  },
  {
    id: 'mt', name: 'Malta', code: 'mt', capital: 'Valletta', currency: 'EUR',
    tagline: 'Mediterranean island with English-medium degrees',
    intake: 'October, February',
    cost: '€8,000 – €17,000 / year',
    avgFee: '€11,000', avgLiving: '€9,500', visaType: 'National Long-Stay Visa',
    universities: [
      { name: 'University of Malta', city: 'Msida', rank: 'QS #801' },
      { name: 'American University of Malta', city: 'Cospicua', rank: 'AUM' },
      { name: 'Malta College of Arts, Science and Technology (MCAST)', city: 'Paola', rank: 'Vocational top' },
      { name: 'Institute of Tourism Studies', city: 'Luqa', rank: 'Hospitality' }
    ],
    courses: ['IT & Gaming', 'Maritime Studies', 'Finance', 'Tourism', 'English Language'],
    why: [
      'English is an official language',
      'Sunny, safe Mediterranean lifestyle',
      'Strong iGaming & blockchain industry',
      '9-month post-study job search',
      'Schengen access for travel'
    ]
  },
  {
    id: 'cy', name: 'Cyprus', code: 'cy', capital: 'Nicosia', currency: 'EUR',
    tagline: 'Sun-soaked EU education at affordable prices',
    intake: 'October, February',
    cost: '€3,500 – €15,000 / year',
    avgFee: '€8,000', avgLiving: '€8,500', visaType: 'Student Pink Slip',
    universities: [
      { name: 'University of Cyprus', city: 'Nicosia', rank: 'QS #411' },
      { name: 'Cyprus University of Technology', city: 'Limassol', rank: 'QS #511' },
      { name: 'European University Cyprus', city: 'Nicosia', rank: 'QS #801' },
      { name: 'University of Nicosia', city: 'Nicosia', rank: 'Top private' },
      { name: 'Frederick University', city: 'Nicosia', rank: 'Private' }
    ],
    courses: ['Business', 'Hospitality', 'Maritime Studies', 'Computer Science', 'Medicine'],
    why: [
      'Affordable tuition & cost of living',
      '20 hrs/week part-time work permitted',
      'English-taught programs',
      'Beautiful Mediterranean location',
      'Path to EU mobility'
    ]
  },
  {
    id: 'lt', name: 'Lithuania', code: 'lt', capital: 'Vilnius', currency: 'EUR',
    tagline: 'Baltic gem with low costs and EU access',
    intake: 'September, February',
    cost: '€1,500 – €6,000 / year',
    avgFee: '€3,500', avgLiving: '€5,500', visaType: 'National Visa (D-type)',
    universities: [
      { name: 'Vilnius University', city: 'Vilnius', rank: 'QS #481' },
      { name: 'Kaunas University of Technology', city: 'Kaunas', rank: 'QS #801' },
      { name: 'Vilnius Gediminas Technical University', city: 'Vilnius', rank: 'QS #801' },
      { name: 'ISM University of Management and Economics', city: 'Vilnius', rank: 'Business' },
      { name: 'Vytautas Magnus University', city: 'Kaunas', rank: 'Top humanities' }
    ],
    courses: ['Aviation', 'IT', 'Business', 'Medicine', 'Engineering'],
    why: [
      'Very low tuition & living costs',
      'Recognized EU degrees',
      'Strong fintech ecosystem',
      'Safe & welcoming culture',
      'Schengen access'
    ]
  },
  {
    id: 'lv', name: 'Latvia', code: 'lv', capital: 'Riga', currency: 'EUR',
    tagline: 'Affordable EU education with great quality of life',
    intake: 'September, February',
    cost: '€2,000 – €8,000 / year',
    avgFee: '€4,500', avgLiving: '€6,500', visaType: 'D-Visa for Studies',
    universities: [
      { name: 'University of Latvia', city: 'Riga', rank: 'QS #801' },
      { name: 'Riga Technical University', city: 'Riga', rank: 'QS #771' },
      { name: 'Stockholm School of Economics in Riga', city: 'Riga', rank: 'Top B-School' },
      { name: 'Riga Stradiņš University', city: 'Riga', rank: 'Medical top' },
      { name: 'Latvia University of Life Sciences', city: 'Jelgava', rank: 'Agri top' }
    ],
    courses: ['Medicine', 'Business', 'Aviation', 'IT', 'Engineering'],
    why: [
      'Quality MBBS programs in English',
      'Affordable living in Riga',
      'Schengen membership',
      'High safety index',
      'Post-study job search permit'
    ]
  },
  {
    id: 'fi', name: 'Finland', code: 'fi', capital: 'Helsinki', currency: 'EUR',
    tagline: 'World\'s best education system & happiest country',
    intake: 'August, January',
    cost: '€6,000 – €18,000 / year',
    avgFee: '€11,000', avgLiving: '€9,500', visaType: 'Residence Permit for Studies',
    universities: [
      { name: 'University of Helsinki', city: 'Helsinki', rank: 'QS #115' },
      { name: 'Aalto University', city: 'Espoo', rank: 'QS #109' },
      { name: 'University of Turku', city: 'Turku', rank: 'QS #321' },
      { name: 'Tampere University', city: 'Tampere', rank: 'QS #321' },
      { name: 'University of Oulu', city: 'Oulu', rank: 'QS #391' },
      { name: 'Hanken School of Economics', city: 'Helsinki', rank: 'Business top' },
      { name: 'LUT University', city: 'Lappeenranta', rank: 'QS #361' }
    ],
    courses: ['Engineering', 'Computer Science', 'Education', 'Design', 'Sustainable Tech'],
    why: [
      'Globally renowned education system',
      'Happiest country (7 years running)',
      '2-year post-graduation residence permit',
      'Free healthcare for residents',
      'Strong startup ecosystem'
    ]
  },
  {
    id: 'dk', name: 'Denmark', code: 'dk', capital: 'Copenhagen', currency: 'DKK',
    tagline: 'Design, innovation & "Hygge" living',
    intake: 'September, February',
    cost: 'DKK 45,000 – 120,000 / year',
    avgFee: 'DKK 80,000', avgLiving: 'DKK 78,000', visaType: 'Residence Permit',
    universities: [
      { name: 'University of Copenhagen', city: 'Copenhagen', rank: 'QS #100' },
      { name: 'Technical University of Denmark (DTU)', city: 'Lyngby', rank: 'QS #121' },
      { name: 'Aarhus University', city: 'Aarhus', rank: 'QS #146' },
      { name: 'Aalborg University', city: 'Aalborg', rank: 'QS #331' },
      { name: 'University of Southern Denmark', city: 'Odense', rank: 'QS #340' },
      { name: 'Copenhagen Business School', city: 'Copenhagen', rank: 'Top B-School' },
      { name: 'IT University of Copenhagen', city: 'Copenhagen', rank: 'IT specialist' }
    ],
    courses: ['Engineering', 'Design', 'Business', 'Renewable Energy', 'Architecture'],
    why: [
      'Cutting-edge research in green energy',
      'Excellent work-life balance',
      'High safety, English widely spoken',
      'Innovation-driven economy',
      'Top design & architecture schools'
    ]
  },
  {
    id: 'no', name: 'Norway', code: 'no', capital: 'Oslo', currency: 'NOK',
    tagline: 'Free public universities & breathtaking nature',
    intake: 'August, January',
    cost: 'NOK 0 (public) – 200,000 / year',
    avgFee: 'Free at public', avgLiving: 'NOK 130,000', visaType: 'Student Residence Permit',
    universities: [
      { name: 'University of Oslo', city: 'Oslo', rank: 'QS #117' },
      { name: 'NTNU — Norwegian University of Science and Technology', city: 'Trondheim', rank: 'QS #259' },
      { name: 'University of Bergen', city: 'Bergen', rank: 'QS #237' },
      { name: 'BI Norwegian Business School', city: 'Oslo', rank: 'Top B-School' },
      { name: 'University of Stavanger', city: 'Stavanger', rank: 'QS #501' },
      { name: 'UiT The Arctic University of Norway', city: 'Tromsø', rank: 'QS #521' }
    ],
    courses: ['Petroleum Engineering', 'Marine Tech', 'Computer Science', 'Renewable Energy'],
    why: [
      'No tuition fees at public universities',
      'Stunning fjords & natural beauty',
      'High wages & living standards',
      'Strong oil & marine tech industry',
      'English-taught masters programs'
    ]
  },
  {
    id: 'at', name: 'Austria', code: 'at', capital: 'Vienna', currency: 'EUR',
    tagline: 'Classical heritage with modern education',
    intake: 'October, March',
    cost: '€726 – €15,000 / year',
    avgFee: '€2,000', avgLiving: '€11,400', visaType: 'Residence Permit for Studies',
    universities: [
      { name: 'University of Vienna', city: 'Vienna', rank: 'QS #131' },
      { name: 'TU Wien', city: 'Vienna', rank: 'QS #169' },
      { name: 'Graz University of Technology', city: 'Graz', rank: 'QS #246' },
      { name: 'University of Innsbruck', city: 'Innsbruck', rank: 'QS #324' },
      { name: 'WU Vienna University of Economics and Business', city: 'Vienna', rank: 'Top B-School' },
      { name: 'Medical University of Vienna', city: 'Vienna', rank: 'Medical top' }
    ],
    courses: ['Music & Arts', 'Engineering', 'Business', 'Medicine', 'Architecture'],
    why: [
      'Affordable tuition (~€726/sem at public)',
      'Vienna ranked #1 most livable city',
      'Rich classical music & arts heritage',
      'Path to EU jobs',
      'High safety & quality of life'
    ]
  },
  {
    id: 'hu', name: 'Hungary', code: 'hu', capital: 'Budapest', currency: 'HUF',
    tagline: 'Affordable EU medical & engineering degrees',
    intake: 'September, February',
    cost: '€3,000 – €17,000 / year',
    avgFee: '€7,500', avgLiving: '€7,000', visaType: 'Student Residence Permit',
    universities: [
      { name: 'Eötvös Loránd University (ELTE)', city: 'Budapest', rank: 'QS #581' },
      { name: 'Semmelweis University', city: 'Budapest', rank: 'Top medical' },
      { name: 'University of Szeged', city: 'Szeged', rank: 'QS #601' },
      { name: 'University of Debrecen', city: 'Debrecen', rank: 'QS #601' },
      { name: 'Budapest University of Technology and Economics', city: 'Budapest', rank: 'QS #851' },
      { name: 'Corvinus University of Budapest', city: 'Budapest', rank: 'Top Business' }
    ],
    courses: ['Medicine (MBBS)', 'Dentistry', 'Veterinary', 'Engineering', 'Business'],
    why: [
      'High-quality MBBS at affordable cost',
      'Stipendium Hungaricum scholarship',
      'Beautiful capital — Budapest',
      'EU degree, Schengen access',
      'Welcoming culture for Indian students'
    ]
  },
  {
    id: 'cz', name: 'Czech Republic', code: 'cz', capital: 'Prague', currency: 'CZK',
    tagline: 'Heart of Europe with rich academic tradition',
    intake: 'September, February',
    cost: '€0 – €20,000 / year (Czech-taught free)',
    avgFee: '€7,000 (English)', avgLiving: '€7,500', visaType: 'Long-Stay Visa for Studies',
    universities: [
      { name: 'Charles University', city: 'Prague', rank: 'QS #270' },
      { name: 'Czech Technical University in Prague', city: 'Prague', rank: 'QS #432' },
      { name: 'Masaryk University', city: 'Brno', rank: 'QS #426' },
      { name: 'Brno University of Technology', city: 'Brno', rank: 'QS #751' },
      { name: 'Palacký University Olomouc', city: 'Olomouc', rank: 'QS #601' },
      { name: 'University of Economics Prague', city: 'Prague', rank: 'Top B-School' }
    ],
    courses: ['Medicine', 'Engineering', 'Computer Science', 'Architecture', 'Business'],
    why: [
      'Tuition-free in Czech language',
      'Affordable English programs',
      'Beautiful, historic country',
      'Prague — a top student city',
      'Strong central European location'
    ]
  },
  {
    id: 'ru', name: 'Russia', code: 'ru', capital: 'Moscow', currency: 'RUB',
    tagline: 'Affordable globally recognized medical & technical education',
    intake: 'September, February',
    cost: 'USD 3,000 – 8,000 / year',
    avgFee: 'USD 5,000', avgLiving: 'USD 4,500', visaType: 'Russian Student Visa',
    universities: [
      { name: 'Lomonosov Moscow State University', city: 'Moscow', rank: 'QS #87' },
      { name: 'Saint Petersburg State University', city: 'St. Petersburg', rank: 'QS #314' },
      { name: 'Bauman Moscow State Technical University', city: 'Moscow', rank: 'QS #266' },
      { name: 'Novosibirsk State University', city: 'Novosibirsk', rank: 'QS #221' },
      { name: 'Tomsk State University', city: 'Tomsk', rank: 'QS #239' },
      { name: 'Peoples\' Friendship University of Russia', city: 'Moscow', rank: 'QS #295' },
      { name: 'MGIMO University', city: 'Moscow', rank: 'QS #294' }
    ],
    courses: ['MBBS', 'Aerospace', 'Engineering', 'Physics', 'Languages'],
    why: [
      'Highly affordable MBBS recognized by NMC',
      'Rich science & engineering heritage',
      'No entrance exam for many programs',
      'Indian student-friendly environment',
      'Globally recognized degrees'
    ]
  },
  {
    id: 'cn', name: 'China', code: 'cn', capital: 'Beijing', currency: 'CNY',
    tagline: 'Asia\'s rising education superpower',
    intake: 'September, March',
    cost: 'CNY 20,000 – 80,000 / year',
    avgFee: 'CNY 35,000', avgLiving: 'CNY 30,000', visaType: 'X1 / X2 Student Visa',
    universities: [
      { name: 'Tsinghua University', city: 'Beijing', rank: 'QS #20' },
      { name: 'Peking University', city: 'Beijing', rank: 'QS #14' },
      { name: 'Fudan University', city: 'Shanghai', rank: 'QS #50' },
      { name: 'Shanghai Jiao Tong University', city: 'Shanghai', rank: 'QS #51' },
      { name: 'Zhejiang University', city: 'Hangzhou', rank: 'QS #44' },
      { name: 'University of Science and Technology of China', city: 'Hefei', rank: 'QS #133' },
      { name: 'Nanjing University', city: 'Nanjing', rank: 'QS #133' }
    ],
    courses: ['MBBS', 'Engineering', 'Business', 'Mandarin Studies', 'AI/ML'],
    why: [
      'Top Asian universities (Tsinghua, Peking)',
      'Generous Chinese Government Scholarships',
      'MBBS programs taught in English',
      'Booming economy & job opportunities',
      'Rich culture & history'
    ]
  },
  {
    id: 'jp', name: 'Japan', code: 'jp', capital: 'Tokyo', currency: 'JPY',
    tagline: 'Innovation, robotics, anime & technology',
    intake: 'April, September',
    cost: 'JPY 535,000 – 1,800,000 / year',
    avgFee: 'JPY 820,000', avgLiving: 'JPY 1,000,000', visaType: 'Student Visa (College Student)',
    universities: [
      { name: 'University of Tokyo', city: 'Tokyo', rank: 'QS #28' },
      { name: 'Kyoto University', city: 'Kyoto', rank: 'QS #46' },
      { name: 'Osaka University', city: 'Osaka', rank: 'QS #80' },
      { name: 'Tokyo Institute of Technology', city: 'Tokyo', rank: 'QS #91' },
      { name: 'Tohoku University', city: 'Sendai', rank: 'QS #113' },
      { name: 'Waseda University', city: 'Tokyo', rank: 'QS #181' },
      { name: 'Keio University', city: 'Tokyo', rank: 'QS #214' }
    ],
    courses: ['Robotics', 'Engineering', 'Animation & Design', 'Japanese Studies', 'Business'],
    why: [
      'Top in robotics, automotive & tech',
      'MEXT scholarship for international students',
      'Safe society, world-class infrastructure',
      'Rich blend of tradition & innovation',
      'Post-graduation work visa pathways'
    ]
  },
  {
    id: 'kr', name: 'South Korea', code: 'kr', capital: 'Seoul', currency: 'KRW',
    tagline: 'K-Culture meets cutting-edge tech education',
    intake: 'March, September',
    cost: 'KRW 4,000,000 – 18,000,000 / year',
    avgFee: 'KRW 8,000,000', avgLiving: 'KRW 12,000,000', visaType: 'D-2 Student Visa',
    universities: [
      { name: 'Seoul National University', city: 'Seoul', rank: 'QS #41' },
      { name: 'KAIST — Korea Advanced Institute of Science & Tech', city: 'Daejeon', rank: 'QS #56' },
      { name: 'Korea University', city: 'Seoul', rank: 'QS #74' },
      { name: 'Yonsei University', city: 'Seoul', rank: 'QS #76' },
      { name: 'POSTECH', city: 'Pohang', rank: 'QS #98' },
      { name: 'Sungkyunkwan University', city: 'Seoul', rank: 'QS #145' },
      { name: 'Hanyang University', city: 'Seoul', rank: 'QS #164' }
    ],
    courses: ['Computer Science', 'Engineering', 'Korean Studies', 'Game Design', 'Business'],
    why: [
      'World-class research, esp. tech & semiconductors',
      'Global Korea Scholarship (GKS)',
      'Vibrant student life & K-Culture',
      'Top employers — Samsung, LG, Hyundai',
      'Safe, modern cities with great transport'
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = COUNTRIES;
}
