/**
 * FORMEXAI — Industries Data
 * Comprehensive use cases across Home Services, Healthcare, Professional Services, and Local Business.
 */

export const INDUSTRY_CATEGORIES = [
  { id: 'home-services', name: 'Home Services' },
  { id: 'healthcare', name: 'Healthcare' },
  { id: 'professional', name: 'Professional Services' },
  { id: 'local-business', name: 'Local Business' }
];

export const INDUSTRIES_LIST = [
  {
    id: 'hvac',
    categoryId: 'home-services',
    name: 'HVAC & Mechanical',
    tagline: 'Never miss another emergency no-cool or no-heat call.',
    commonCalls: [
      'AC blowing warm air / fan running',
      'Furnace not igniting in cold weather',
      'Pre-season system tune-up request',
      'Refrigerant leak or frozen coil inquiry',
      'New high-efficiency system replacement quote'
    ],
    handledActions: [
      'Identifies symptom severity and classifies triage level',
      'Verifies residential vs. commercial equipment',
      'Checks live route zones in ServiceTitan or Google Calendar',
      'Books confirmed arrival windows',
      'Warmly escalates after-hours flooding or freeze emergencies'
    ],
    dialogue: {
      caller: "My AC stopped cooling this morning and the house is already 82 degrees.",
      receptionist: "I can help with that right away. Is your outside condenser running, or has the system stopped completely? We treat cooling outages as same-day priority."
    },
    rule: 'IF cooling failure AND temperature > 85°F → Offer priority same-day dispatch window'
  },
  {
    id: 'plumbing',
    categoryId: 'home-services',
    name: 'Plumbing Services',
    tagline: 'Instant triage for burst pipes, water heaters, and drain stoppages.',
    commonCalls: [
      'Water heater leaking from base',
      'Main sewer line backup or gurgling drains',
      'Low water pressure throughout home',
      'Faucet or garbage disposal replacement',
      'Emergency burst pipe shutoff guidance'
    ],
    handledActions: [
      'Provides immediate water shutoff instructions on emergency calls',
      'Captures physical address and verifies service territory',
      'Dispatches nearest licensed plumber on-call',
      'Sends customer SMS tracker with arrival window'
    ],
    dialogue: {
      caller: "Water is spraying from under my kitchen sink and flooding the floor!",
      receptionist: "Please turn off the shutoff valve underneath the sink immediately. I am paging our nearest on-call plumber for emergency dispatch right now."
    },
    rule: 'IF active water spray → Provide shutoff guidance and transfer immediately to emergency dispatch'
  },
  {
    id: 'dental',
    categoryId: 'healthcare',
    name: 'Dental Care & Clinics',
    tagline: 'Compassionate patient triage, emergency slot reservation, and intake.',
    commonCalls: [
      'Acute toothache or cracked tooth',
      'New patient cleaning and comprehensive exam',
      'Pediatric dental checkup booking',
      'Insurance coverage and copay questions',
      'Post-operative swelling or prescription inquiry'
    ],
    handledActions: [
      'Screens for urgent clinical symptoms (swelling, fever, trauma)',
      'Offers reserved emergency chair time',
      'Dispatches digital HIPAA-compliant intake forms via SMS',
      'Syncs directly with Dentrix, Curve, or Eaglesoft PMS'
    ],
    dialogue: {
      caller: "I cracked a molar chewing lunch and it's throbbing terribly.",
      receptionist: "I'm very sorry to hear that. We reserve emergency slots every afternoon. Dr. Chen can see you at 3:15 PM today to take an x-ray and relieve the pain. Would you like me to reserve that chair?"
    },
    rule: 'IF acute pain reported → Book into designated daily emergency buffer block and text intake packet'
  },
  {
    id: 'clinics',
    categoryId: 'healthcare',
    name: 'Medical & Wellness Clinics',
    tagline: 'Seamless intake, appointment scheduling, and patient routing.',
    commonCalls: [
      'Annual wellness exam scheduling',
      'Physical therapy intake and referral booking',
      'Clinic hours, parking, and telehealth options',
      'Prescription refill request forwarding',
      'Lab result arrival inquiry'
    ],
    handledActions: [
      'Guides new patients through provider selection',
      'Collects insurance and referral authorization status',
      'Books confirmed calendar consultation slots',
      'Routes clinical questions to triage nurse desk'
    ],
    dialogue: {
      caller: "I have a referral from my doctor for post-knee surgery physical therapy.",
      receptionist: "We would be glad to help you begin your rehabilitation. Let's schedule an initial 60-minute evaluation with our physical therapy director. Do you prefer mornings or afternoons?"
    },
    rule: 'IF referral provided → Request doctor name and schedule comprehensive initial evaluation'
  },
  {
    id: 'real-estate',
    categoryId: 'professional',
    name: 'Real Estate & Brokerage',
    tagline: 'Capture high-intent buyers, qualify listings, and book private showings.',
    commonCalls: [
      'Private property viewing request',
      'Listing price, HOA, and disclosure inquiries',
      'Home valuation and selling consultations',
      'Leasing and rental application status',
      'Broker-to-broker showing authorization'
    ],
    handledActions: [
      'Identifies specific MLS property address or listing ID',
      'Qualifies buyer timeline and pre-approval status',
      'Books confirmed showing windows with listing agent',
      'Dispatches property packet and alerts agent via CRM'
    ],
    dialogue: {
      caller: "Hi, I'm calling about the 4-bedroom on 42 Oak Ridge. Can we view it this weekend?",
      receptionist: "Yes, 42 Oak Ridge Terrace is actively listed. Our listing agent has private viewing slots open this Saturday at 10:30 AM or 2:00 PM. Are you currently pre-approved for financing?"
    },
    rule: 'IF buyer pre-approved AND showing requested → Lock calendar slot and dispatch agent notification'
  },
  {
    id: 'legal',
    categoryId: 'professional',
    name: 'Legal Services & Law Firms',
    tagline: 'Professional client intake, practice triage, and consultation booking.',
    commonCalls: [
      'New matter intake and case evaluation',
      'Commercial contract or lease dispute',
      'Personal injury or accident consultation',
      'Court date or filing deadline inquiry',
      'Retainer and billing department routing'
    ],
    handledActions: [
      'Maintains strict confidentiality and professional boundaries',
      'Gathers preliminary matter facts without giving legal advice',
      'Schedules case review with appropriate practice attorney',
      'Emails conflict check questionnaire and secure document portal'
    ],
    dialogue: {
      caller: "Our business received a 14-day cure notice from our commercial landlord.",
      receptionist: "I understand the urgency. While I cannot offer legal counsel over the phone, our commercial leasing practice group handles tenant protections. Can I schedule a case review with partner Katherine Ross tomorrow at 11:00 AM?"
    },
    rule: 'IF new matter intake → Collect basic facts, state legal disclaimer, and schedule attorney review'
  },
  {
    id: 'automotive',
    categoryId: 'local-business',
    name: 'Automotive Repair & Care',
    tagline: 'Keep service bays filled and customer repair requests organized.',
    commonCalls: [
      'Brake grinding or squeaking inspection',
      'Check engine light diagnostic appointment',
      'Factory scheduled 30k/60k mile maintenance',
      'Tire replacement and wheel alignment',
      'Vehicle status update during repair'
    ],
    handledActions: [
      'Captures vehicle make, model, year, and mileage',
      'Triage symptoms into diagnostic or routine categories',
      'Schedules drop-off time slots matching bay capacity',
      'Sends automated drop-off directions and tracking via SMS'
    ],
    dialogue: {
      caller: "My 2021 Honda CR-V started making a grinding noise when I hit the brakes.",
      receptionist: "That grinding usually indicates the brake pads have worn down to the wear indicator. We recommend having it inspected promptly. We have a diagnostic bay open tomorrow morning at 8:30 AM. Can I reserve that for your CR-V?"
    },
    rule: 'IF brake or safety issue → Offer earliest morning drop-off bay and send check-in instructions'
  },
  {
    id: 'retail',
    categoryId: 'local-business',
    name: 'Retail & Local Commerce',
    tagline: 'Instant product lookups, in-store holds, and store information.',
    commonCalls: [
      'Specific product and size in-stock verification',
      '24-hour counter hold reservation',
      'Curbside pickup status and bay location',
      'Store hours, directions, and parking validation',
      'Return and exchange policy inquiries'
    ],
    handledActions: [
      'Queries store inventory system for live SKU stock',
      'Generates counter hold tag for store staff',
      'Dispatches instant digital pickup pass to customer phone',
      'Answers store policy questions with zero hold time'
    ],
    dialogue: {
      caller: "Do you have the Trailhead Shell jacket in Forest Green, Men's Medium in stock?",
      receptionist: "Let me check our floor inventory. Yes, we have two units of the Trailhead Shell in Forest Green, Medium in stock at our 5th Street store. Would you like me to place one on hold behind the counter for you?"
    },
    rule: 'IF item in stock AND customer requests hold → Create 24-hour register hold tag and send SMS pass'
  }
];
