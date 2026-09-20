/**
 * FORMEXAI — Master Industries Data System
 * Editorial B2B SaaS data for Overview and 6 Dedicated Sector Pages:
 * - home-services
 * - healthcare
 * - dental
 * - beauty-wellness
 * - professional-services
 * - trades
 */

export const SECTOR_MAP = {
  'home-services': {
    id: 'home-services',
    name: 'Home Services',
    tagline: 'Service calls, emergency triage & field dispatch.',
    heroHeadline: 'Never miss another high-value emergency or service call.',
    heroSubhead: 'When technicians are on job sites, attic spaces, or under sinks, FormexAI answers every ringing line instantly, qualifies property needs, checks schedule availability, and dispatches urgent requests.',
    image: '/images/home_services.jpg',
    alt: 'HVAC technician inspecting residential system equipment on site',
    badge: 'Home Services & Contracting',
    stats: [
      { value: '< 2 Rings', label: 'Average Response Time' },
      { value: '100%', label: 'Emergency Triage Coverage' },
      { value: '24/7', label: 'Dispatch & Booking' }
    ],
    overviewParagraphs: [
      'In home services, unanswered calls are immediate lost revenue. When a homeowner discovers a leaking water heater at 6:00 AM or a blowing AC unit on a 95-degree summer afternoon, they do not leave voicemails—they call the next contractor on Google. FormexAI acts as your firm’s dedicated 24/7 receptionist, taking incoming calls when your office staff is occupied or off duty.',
      'Unlike generic call centers or simple answering services that write vague messages, FormexAI understands HVAC, plumbing, roofing, and electrical service language. It asks relevant clarifying questions—such as system type, active symptoms, and property address—before scheduling appointments directly into your calendar or alerting your on-call technician.'
    ],
    editorialSections: [
      {
        title: 'Intelligent Triage & Priority Escalation',
        subtitle: 'Differentiate between routine quotes and active property emergencies.',
        paragraph: 'FormexAI evaluates the urgency of every incoming request in real time. Standard maintenance inquiries and non-urgent estimate requests are guided into routine appointment slots, while critical emergencies—such as active pipe bursts, furnace failures in freezing temperatures, or gas odors—trigger instant text alerts and warm phone transfers to designated on-call technicians.',
        bullets: [
          'Immediate water shutoff and emergency instruction delivery',
          'Zip-code and service-territory verification',
          'Integration with field calendars and dispatch software',
          'Automatic SMS confirmation sent to homeowners'
        ],
        metricNumber: '0',
        metricLabel: 'Missed emergency calls during peak hours or after-hours shifts.'
      },
      {
        title: 'Seamless Field & Office Integration',
        subtitle: 'Keep your techs in the field while your schedule stays filled.',
        paragraph: 'Your field staff should focus on delivering quality craftsmanship, not juggling phone calls on ladder steps. FormexAI logs every caller interaction with transcripts, audio recordings, and key customer details directly into your management portal, eliminating phone tag and administrative overhead.',
        bullets: [
          'Captures equipment age, brand, and symptom history',
          'Provides clear drop-off or arrival window confirmation',
          'Reduces receptionist burnout during seasonal demand surges',
          'Allows custom call script adjustments for specific promotions'
        ],
        metricNumber: '100%',
        metricLabel: 'Visibility into caller intent, address details, and urgency ratings.'
      }
    ],
    workflows: [
      'Emergency Leak & Outage Triage',
      'Seasonal Tune-up & Maintenance Booking',
      'Address & Service Zone Qualification',
      'On-Call Technician Escalation',
      'Customer SMS Status Follow-ups'
    ],
    callScenario: {
      caller: "My air conditioner stopped cooling this morning and the house is already over 82 degrees. Can someone come out today?",
      receptionist: "I can assist you with that right away. To get the right technician to your property, is your outside condenser fan running, or has the system stopped completely? We treat indoor cooling outages as same-day priority.",
      ruleApplied: 'IF cooling failure AND temperature > 80°F → Priority same-day slot allocation + SMS technician alert'
    },
    customWorkflowSteps: [
      { step: '01', title: 'Instant Greeting', desc: 'Answers within 2 rings with your company custom voice and branding.' },
      { step: '02', title: 'Symptom Triage', desc: 'Identifies service category, severity level, and property location.' },
      { step: '03', title: 'Live Scheduling', desc: 'Finds available technician arrival windows in your calendar.' },
      { step: '04', title: 'Dispatch & Alert', desc: 'Dispatches job summary to CRM and sends SMS confirmation to customer.' }
    ],
    humanAiIntegration: 'FormexAI works alongside your office staff. If a homeowner has a complex commercial billing question or requests a custom quote outside standard parameters, FormexAI seamlessly transfers the live call or alerts your office manager with full conversation notes.'
  },

  'healthcare': {
    id: 'healthcare',
    name: 'Healthcare',
    tagline: 'Patient intake, appointment triage & inquiry routing.',
    heroHeadline: 'Compassionate, clear caller intake for medical clinics & practices.',
    heroSubhead: 'Provide incoming patients with immediate, attentive care over the phone. FormexAI handles appointment booking, general clinic questions, and patient intake without leaving callers stuck on hold.',
    image: '/images/healthcare.jpg',
    alt: 'Modern healthcare clinic reception area welcoming patients',
    badge: 'Healthcare & Medical Practices',
    stats: [
      { value: 'Zero Hold', label: 'Patient Queue Times' },
      { value: '24/7', label: 'After-Hours Availability' },
      { value: '100%', label: 'Structured Intake Logging' }
    ],
    overviewParagraphs: [
      'Front-desk staff at medical clinics face constant multi-tasking—greeting arriving patients in person while answering continuously ringing phone lines. This creates long hold times, frustrated callers, and missed appointment opportunities.',
      'FormexAI acts as an intelligent initial receptionist, answering patient calls warmly, providing clinic hours and location details, capturing intake information, and booking consultation slots while allowing clinical staff to prioritize in-person patient care.'
    ],
    editorialSections: [
      {
        title: 'Attentive Patient Triage & Guidance',
        subtitle: 'Streamline patient calls while maintaining professional care standards.',
        paragraph: 'FormexAI gathers essential caller details, distinguishes between new patient inquiries and existing appointment modifications, and guides patients through pre-appointment preparation procedures seamlessly.',
        bullets: [
          'Pre-screens caller needs and intake details',
          'Provides clear clinic location, parking, and insurance guidelines',
          'Schedules consultations into designated provider calendar blocks',
          'Routes clinical or prescription questions to designated desk lines'
        ],
        metricNumber: '0',
        metricLabel: 'Patients left waiting on hold during peak front-desk hours.'
      },
      {
        title: 'Structured Intake & Administrative Relief',
        subtitle: 'Eliminate repetitive front-desk phone friction.',
        paragraph: 'By automating standard administrative inquiries—such as office location, accepted insurance lists, and appointment scheduling—FormexAI frees front-desk personnel to dedicate full attention to in-clinic patient experiences.',
        bullets: [
          'Consistent, empathetic conversational tone',
          'Captures insurance provider names and referral sources',
          'Sends automated SMS intake links prior to appointments',
          'Logs detailed interaction records for administrative review'
        ],
        metricNumber: '24/7',
        metricLabel: 'Continuous coverage for after-hours patient inquiries.'
      }
    ],
    workflows: [
      'New Patient Intake & Scheduling',
      'Insurance & Office Policy Clarifications',
      'Referral & Provider Triage',
      'Prescription Refill Request Forwarding',
      'After-Hours Clinic Guidance'
    ],
    callScenario: {
      caller: "Hello, I have a doctor referral for physical therapy after my knee surgery. Do you have openings this week?",
      receptionist: "We would be glad to help you begin your recovery. I can schedule your initial 60-minute evaluation with our physical therapy director. Do you prefer morning or afternoon appointment times?",
      ruleApplied: 'IF referral provided → Confirm provider specialty + Reserve initial evaluation block'
    },
    customWorkflowSteps: [
      { step: '01', title: 'Empathetic Greeting', desc: 'Welcomes caller with a natural, professional tone.' },
      { step: '02', title: 'Need Verification', desc: 'Determines whether caller is a new patient, returning patient, or emergency.' },
      { step: '03', title: 'Intake Collection', desc: 'Collects referral status, contact info, and schedule preference.' },
      { step: '04', title: 'Confirmation & Route', desc: 'Locks appointment time and routes clinical inquiries to office desk.' }
    ],
    humanAiIntegration: 'FormexAI does not offer medical advice. Whenever a patient describes acute medical symptoms or requests urgent advice, FormexAI immediately transfers the call to your nurse triage desk or directs them to emergency services according to your clinic protocols.'
  },

  'dental': {
    id: 'dental',
    name: 'Dental',
    tagline: 'Emergency slot booking, patient intake & hygiene scheduling.',
    heroHeadline: 'Keep your chairs filled and patients cared for around the clock.',
    heroSubhead: 'Dental practice receptionists balance patient check-outs, insurance verifications, and phone lines. FormexAI manages incoming calls, answers treatment questions, and reserves emergency chair time.',
    image: '/images/dental.jpg',
    alt: 'Dentist consulting with a patient in a modern dental office practice',
    badge: 'Dental Clinics & Specialists',
    stats: [
      { value: '100%', label: 'Emergency Chair Reservation' },
      { value: '0 Hold', label: 'Caller Wait Time' },
      { value: '24/7', label: 'Hygiene & Intake Booking' }
    ],
    overviewParagraphs: [
      'In a busy dental practice, every missed call is potential revenue walking to a competing clinic. Patients experiencing sudden toothaches or seeking cosmetic evaluations expect immediate answers when they call.',
      'FormexAI handles patient scheduling, hygiene appointments, emergency toothache triage, and insurance questions smoothly. It ensures your practice never misses high-value new patient calls even during lunch breaks or after office hours.'
    ],
    editorialSections: [
      {
        title: 'Emergency Toothache & Chair Triage',
        subtitle: 'Reserve buffer slots for urgent patient pain relief.',
        paragraph: 'Dental emergencies require rapid response. FormexAI identifies urgent symptoms such as severe pain, dental trauma, or swelling, and places patients into designated daily emergency chair blocks.',
        bullets: [
          'Differentiates between routine checkups and acute dental pain',
          'Reserves dedicated emergency chair time blocks',
          'Collects insurance provider details during intake',
          'Dispatches instant digital intake forms via SMS'
        ],
        metricNumber: '100%',
        metricLabel: 'Capture rate on after-hours emergency toothache inquiries.'
      },
      {
        title: 'Hygiene & New Patient Growth',
        subtitle: 'Fill your appointment books with zero extra staff burden.',
        paragraph: 'New patients frequently evaluate multiple dental offices based on phone responsiveness. FormexAI provides warm, clear answers about comprehensive exams, cleanings, and whitening options, securing commitments instantly.',
        bullets: [
          'Answers common copay, parking, and hygiene inquiries',
          'Schedules family and pediatric exam slots',
          'Reduces last-minute schedule gaps with rapid booking',
          'Provides clear post-op instruction reminders'
        ],
        metricNumber: '0',
        metricLabel: 'Calls lost during staff meetings or front-desk checkouts.'
      }
    ],
    workflows: [
      'Emergency Toothache Slot Triage',
      'New Patient Comprehensive Exam Booking',
      'Hygiene Recare & Follow-up Scheduling',
      'Insurance & Payment Option Guidance',
      'Post-Treatment Care Instruction Delivery'
    ],
    callScenario: {
      caller: "I cracked a molar while eating lunch and it is throbbing. Can Dr. Chen see me today?",
      receptionist: "I am very sorry to hear that you are in pain. We keep emergency slots reserved every afternoon for urgent cases. Dr. Chen can examine your tooth at 3:15 PM today. May I reserve that slot for you now?",
      ruleApplied: 'IF acute dental pain reported → Allocate daily emergency buffer block + Send SMS digital intake'
    },
    customWorkflowSteps: [
      { step: '01', title: 'Warm Intake', desc: 'Greets patient with professional dental practice persona.' },
      { step: '02', title: 'Symptom Triage', desc: 'Screens for acute discomfort, trauma, or routine hygiene needs.' },
      { step: '03', title: 'Chair Lock', desc: 'Reserves appointment in calendar according to procedure type.' },
      { step: '04', title: 'Intake Packet', desc: 'Sends digital intake paperwork via text message prior to visit.' }
    ],
    humanAiIntegration: 'If a patient calls regarding complex surgical follow-up care or insurance dispute questions, FormexAI immediately routes the conversation directly to your office manager or clinical assistant.'
  },

  'beauty-wellness': {
    id: 'beauty-wellness',
    name: 'Beauty & Wellness',
    tagline: 'Appointment booking, service questions & client scheduling.',
    heroHeadline: 'Fill your appointment calendar while remaining focused on clients.',
    heroSubhead: 'Estheticians, stylists, and spa therapists cannot stop mid-service to answer ringing phones. FormexAI handles appointment requests, service consultations, and pricing inquiries 24/7.',
    image: '/images/beauty_wellness.jpg',
    alt: 'Serene modern beauty salon and wellness spa reception area',
    badge: 'Salons, Spas & Wellness Studios',
    stats: [
      { value: '100%', label: 'Booking Conversion Focus' },
      { value: '24/7', label: 'Self-Service Scheduling' },
      { value: '0 Interruptions', label: 'For In-Session Specialists' }
    ],
    overviewParagraphs: [
      'In the beauty and wellness industry, personal attention during treatments is paramount. When an esthetician or massage therapist has to leave a client room to answer a phone, the client experience suffers—and if they ignore the phone, the caller books elsewhere.',
      'FormexAI resolves this dilemma by serving as your studio’s flawless digital concierge. It answers caller questions regarding treatments, practitioner availability, deposit policies, and service durations, locking in bookings round-the-clock.'
    ],
    editorialSections: [
      {
        title: 'Seamless Service Consultation & Booking',
        subtitle: 'Turn phone inquiries into confirmed appointments effortlessly.',
        paragraph: 'Clients calling beauty salons and spas often have specific questions about service details, practitioner experience, or pre-treatment guidelines. FormexAI provides knowledgeable answers and secures booking deposits automatically.',
        bullets: [
          'Explains service descriptions, durations, and pricing',
          'Checks live practitioner calendar availability',
          'Enforces studio deposit and cancellation policies',
          'Sends instant SMS appointment booking links'
        ],
        metricNumber: '24/7',
        metricLabel: 'Appointment booking window for late-night caller decisions.'
      },
      {
        title: 'Uninterrupted Client Services',
        subtitle: 'Protect studio tranquility and team focus.',
        paragraph: 'Keep your spa environment quiet and relaxing. With FormexAI answering calls, front-desk chimes and phone ringing are eliminated, preserving the serene atmosphere your clients pay to experience.',
        bullets: [
          'Zero phone ring noise in treatment areas',
          'Automates routine reschedule and parking inquiries',
          'Captures client preferences and special requests',
          'Integrates with leading salon management software'
        ],
        metricNumber: '0',
        metricLabel: 'Treatment interruptions for therapists and stylists.'
      }
    ],
    workflows: [
      'Treatment & Service Price Consultations',
      'Practitioner Availability Check & Booking',
      'Studio Location & Parking Directions',
      'Pre-Appointment Preparation Reminders',
      'Cancellation & Reschedule Handling'
    ],
    callScenario: {
      caller: "Hi! Do you have any openings for a 60-minute deep tissue massage or facial this Saturday afternoon?",
      receptionist: "We do! We have a 60-minute deep tissue massage available with Sarah at 2:00 PM this Saturday, or a signature hydrating facial with Maya at 3:30 PM. Which treatment would you prefer?",
      ruleApplied: 'IF weekend availability requested → Match practitioner schedule + Reserve slot with SMS confirmation'
    },
    customWorkflowSteps: [
      { step: '01', title: 'Studio Welcome', desc: 'Greets caller with upscale, welcoming concierge tone.' },
      { step: '02', title: 'Service Selection', desc: 'Identifies desired treatment, practitioner preference, and time.' },
      { step: '03', title: 'Calendar Reserve', desc: 'Checks live availability and locks in appointment time.' },
      { step: '04', title: 'SMS Confirmation', desc: 'Sends booking confirmation and studio arrival instructions.' }
    ],
    humanAiIntegration: 'When a caller requests a custom wedding party package or specialized aesthetic consultation requiring staff approval, FormexAI captures all event details and notifies your studio lead.'
  },

  'professional-services': {
    id: 'professional-services',
    name: 'Professional Services',
    tagline: 'Lead qualification, intake screening & consultation booking.',
    heroHeadline: 'Protect attorney and consultant focus while capturing qualified leads.',
    heroSubhead: 'Law firms, financial advisors, and executive consultants require polished, professional caller interactions. FormexAI conducts initial inquiry screening, collects case details, and books consultations.',
    image: '/images/professional_services.jpg',
    alt: 'Executive consultant meeting with client across modern boardroom desk',
    badge: 'Legal, Financial & Consulting Firms',
    stats: [
      { value: '100%', label: 'Professional Caller Screening' },
      { value: 'Zero Loss', label: 'High-Intent Inquiries' },
      { value: '24/7', label: 'Consultation Intake' }
    ],
    overviewParagraphs: [
      'For professional service firms, incoming calls often represent high-value potential retainers. Distracting senior partners with unvetted calls wastes billable hours, yet missing a prospective client call can mean losing a major contract to a competitor.',
      'FormexAI acts as your firm’s executive intake receptionist. It greets caller inquiries with authoritative professionalism, gathers essential preliminary details, screens for firm practice fit, and schedules consultation calls.'
    ],
    editorialSections: [
      {
        title: 'Executive Lead Qualification & Intake',
        subtitle: 'Filter high-intent inquiries from distracting sales calls.',
        paragraph: 'FormexAI conducts structured initial screening questions without giving legal or financial advice. It captures caller contact information, matter overview, and timeline expectations before assigning consultation slots.',
        bullets: [
          'Professional, authoritative voice persona',
          'Structured matter intake and client background screening',
          'Schedules consultations directly into partner calendars',
          'Dispatches intake summaries to firm CRM platforms'
        ],
        metricNumber: '100%',
        metricLabel: 'Capture of high-intent client calls during trial or travel.'
      },
      {
        title: 'Billable Time Protection',
        subtitle: 'Keep partners focused on client deliverables.',
        paragraph: 'Unscheduled phone interruptions destroy focus and erode billable hours. FormexAI ensures that only pre-qualified, scheduled consultation calls reach partner calendars.',
        bullets: [
          'Eliminates phone tag with prospective clients',
          'Provides office location and billing policy details',
          'Maintains strict confidentiality standards',
          'Logs call recordings and structured intake transcripts'
        ],
        metricNumber: '0',
        metricLabel: 'Unvetted cold calls interrupting billable work hours.'
      }
    ],
    workflows: [
      'New Client Matter Intake & Screening',
      'Partner Consultation Scheduling',
      'Office Location & Deposition Directions',
      'Document Portal & Intake Form Guidance',
      'Existing Client Message Routing'
    ],
    callScenario: {
      caller: "Our company received a commercial contract notice yesterday and we need to speak with a business attorney immediately.",
      receptionist: "I understand the importance of this matter. While I cannot provide legal advice over the phone, our commercial practice group handles contract dispute reviews. Partner Katherine Ross has a consultation window tomorrow at 10:00 AM. May I schedule that for your team?",
      ruleApplied: 'IF new matter intake → Collect matter overview + Disclaimer + Lock partner consultation slot'
    },
    customWorkflowSteps: [
      { step: '01', title: 'Executive Greeting', desc: 'Answers with refined, professional firm reception persona.' },
      { step: '02', title: 'Matter Screening', desc: 'Gathers client details, matter summary, and urgency timeline.' },
      { step: '03', title: 'Calendar Match', desc: 'Matches inquiry with appropriate practice leader calendar.' },
      { step: '04', title: 'Portal Dispatch', desc: 'Sends intake questionnaire and confirmation email to client.' }
    ],
    humanAiIntegration: 'FormexAI maintains strict boundary disclosures. If a caller demands immediate legal or financial advice, FormexAI clearly explains firm policy and schedules a formal consultation with a qualified professional.'
  },

  'trades': {
    id: 'trades',
    name: 'Trades',
    tagline: 'Field job scheduling, estimate triage & emergency calls.',
    heroHeadline: 'Never lose a trade job while working with your hands on site.',
    heroSubhead: 'Electricians, plumbers, roofers, and HVAC technicians work in high-noise environments where answering phones is dangerous or impossible. FormexAI handles every call, captures job specs, and books site visits.',
    image: '/images/trades.jpg',
    alt: 'Professional electrician working on main electrical breaker panel',
    badge: 'Trades & Speciality Contractors',
    stats: [
      { value: '100%', label: 'Hands-Free Job Intake' },
      { value: '< 2 Rings', label: 'Call Answer Speed' },
      { value: '24/7', label: 'Field Dispatch Coverage' }
    ],
    overviewParagraphs: [
      'Tradespeople build, repair, and maintain vital infrastructure. An electrician wired into an open electrical breaker panel or a plumber under a subfloor cannot pause work every ten minutes to answer calls.',
      'FormexAI acts as your mobile office manager. It answers every call immediately, collects job location and scope details, screens out spam calls, and books site estimate appointments directly into your calendar.'
    ],
    editorialSections: [
      {
        title: 'Rugged Field Call Handling',
        subtitle: 'Capture commercial and residential service leads effortlessly.',
        paragraph: 'When property owners need electrical upgrades, panel replacements, or roofing repairs, they want fast answers. FormexAI gathers job scope details, photos/descriptions, and address verification hands-free.',
        bullets: [
          'Hands-free client intake while on job sites',
          'Address and service territory validation',
          'Schedules estimate visits matching technician routes',
          'Sends job detail alerts straight to technician mobile devices'
        ],
        metricNumber: '100%',
        metricLabel: 'Lead capture efficiency while operating power equipment.'
      },
      {
        title: 'Emergency Triage & Routing',
        subtitle: 'Never let critical hazards go unanswered.',
        paragraph: 'Electrical sparks, main line sewer backups, and storm damage require immediate action. FormexAI identifies emergency trade calls instantly and triggers direct phone transfers to your primary field phone line.',
        bullets: [
          'Immediate safety guidance delivery',
          'Direct live transfer for active hazards',
          'Differentiates small repairs from major replacements',
          'Eliminates voicemail backlog at the end of the workday'
        ],
        metricNumber: '0',
        metricLabel: 'Missed emergency job calls during active job site work.'
      }
    ],
    workflows: [
      'Trade Estimate & Job Scope Intake',
      'Emergency Hazard Triage & Transfer',
      'Site Visit & Inspection Scheduling',
      'Service Territory & Address Qualification',
      'Automated SMS Job Confirmations'
    ],
    callScenario: {
      caller: "Hi, I need an electrician to replace our main 200-amp breaker panel because it keeps tripping during heavy usage.",
      receptionist: "We can certainly help with your panel upgrade. To make sure we send the right master electrician, is this for a single-family home or a commercial building, and what zip code is the property located in?",
      ruleApplied: 'IF panel upgrade request → Verify property type + Validate zip code zone + Book estimate slot'
    },
    customWorkflowSteps: [
      { step: '01', title: 'Prompt Answer', desc: 'Answers instantly so callers never hang up to call a competitor.' },
      { step: '02', title: 'Scope Gathering', desc: 'Asks key job questions: issue, property address, and urgency.' },
      { step: '03', title: 'Route Scheduling', desc: 'Places estimate visit into your regional service route.' },
      { step: '04', title: 'Tech Alert', desc: 'Pushes full job record to contractor phone app via SMS/CRM.' }
    ],
    humanAiIntegration: 'When a general contractor calls regarding a multi-trade bid or custom architectural blueprint quote, FormexAI collects project details and schedules a direct phone call back when you return to your office.'
  }
};

export const ALL_SECTORS = Object.values(SECTOR_MAP);
