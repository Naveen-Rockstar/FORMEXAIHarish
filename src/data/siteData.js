/**
 * FORMEXAI — Site Data & Brand Content
 * Professional B2B Positioning: Honest capabilities, real product architecture,
 * zero fake customer metrics, zero fabricated testimonials.
 */

export const VALUE_PROPOSITIONS = [
  {
    step: '01',
    title: 'Every call gets a response.',
    lead: 'Customers do not have to wait on hold or get lost in voicemail dead-ends.',
    description: 'When a customer calls your business, they speak with a receptionist immediately. Formexai answers in under one second with your custom greeting, ensuring you never miss a service opportunity.'
  },
  {
    step: '02',
    title: 'Every conversation has a purpose.',
    lead: 'Formexai understands the reason for the call and captures what matters.',
    description: 'Rather than reading rigid phone-tree scripts, Formexai understands natural speech. It identifies the customer’s problem, assesses urgency, collects contact and service location details, and verifies requirements.'
  },
  {
    step: '03',
    title: 'Every workflow leads to action.',
    lead: 'Appointments, warm transfers, team alerts, and CRM records happen automatically.',
    description: 'A conversation is only valuable if it drives work forward. Formexai checks your live calendar, confirms appointments, transfers urgent calls to on-duty staff, and logs complete call notes into your systems.'
  }
];

export const CORE_CAPABILITIES = [
  {
    id: 'answer',
    stepNumber: '01',
    phase: 'ANSWER',
    title: 'Natural, Immediate Pickup',
    subtitle: 'Zero hold times, zero phone tree menus.',
    description: 'Calls are answered within one second with your company’s custom greeting, tone, and brand persona. Callers speak naturally from their first word.'
  },
  {
    id: 'understand',
    stepNumber: '02',
    phase: 'UNDERSTAND',
    title: 'Contextual Speech Comprehension',
    subtitle: 'Understands industry terminology and urgency.',
    description: 'Recognizes symptom variations—whether a customer describes "AC blowing warm air" or "a furnace not turning on in freezing weather"—and separates routine inquiries from critical emergencies.'
  },
  {
    id: 'qualify',
    stepNumber: '03',
    phase: 'QUALIFY',
    title: 'Targeted Information Intake',
    subtitle: 'Asks the right questions before committing resources.',
    description: 'Naturally collects caller identity, callback numbers, service addresses, property type, and specific job parameters according to your business criteria.'
  },
  {
    id: 'act',
    stepNumber: '04',
    phase: 'ACT',
    title: 'Real-Time Schedule & Route Execution',
    subtitle: 'Two-way calendar sync and priority routing.',
    description: 'Scans your technician or provider calendars in real time, offers available windows, locks in the booking, or initiates warm phone transfers to on-call staff.'
  },
  {
    id: 'follow-up',
    stepNumber: '05',
    phase: 'FOLLOW UP',
    title: 'Automated Confirmation & Sync',
    subtitle: 'Keeps customers and field teams in lockstep.',
    description: 'Sends instant SMS confirmations with directions or arrival windows, writes work orders into your CRM, and alerts your team via dispatch notifications.'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    number: '01',
    title: 'Tell Formexai about your business.',
    description: 'Define your services, service areas, operating hours, pricing guidance, and common customer questions in your Formexai knowledge base.'
  },
  {
    number: '02',
    title: 'Configure your receptionist.',
    description: 'Choose your receptionist’s name, tone, greeting, and custom business rules—such as when to transfer urgent calls and how to qualify inquiries.'
  },
  {
    number: '03',
    title: 'Connect your workflows.',
    description: 'Link your calendar system, CRM, phone routing, and team notification channels for seamless two-way scheduling and dispatch.'
  },
  {
    number: '04',
    title: 'Let Formexai handle the conversation.',
    description: 'Forward your inbound business phone line. Formexai answers every call, qualifies requests, and takes action according to your rules.'
  }
];

export const INTEGRATION_CATEGORIES = [
  {
    id: 'calendars',
    name: 'Calendars & Scheduling',
    description: 'Two-way slot synchronization and instant appointment booking without double-booking.',
    items: ['Google Calendar', 'Microsoft Outlook / Office 365', 'Apple iCloud Calendar', 'Calendly']
  },
  {
    id: 'crms',
    name: 'Field & Business Software',
    description: 'Automated contact creation, job ticket updates, and call transcript logging.',
    items: ['ServiceTitan', 'Jobber', 'HubSpot CRM', 'Salesforce', 'Dentrix PMS', 'Follow Up Boss']
  },
  {
    id: 'telephony',
    name: 'Telephony & Carrier Networks',
    description: 'Works with existing business phone systems via unconditional forwarding or SIP trunking.',
    items: ['SIP Trunking', 'Twilio Voice', 'RingCentral', 'Vonage', 'Standard Carrier Forwarding']
  },
  {
    id: 'messaging',
    name: 'Alerts & Communications',
    description: 'Immediate appointment confirmation text to customer and dispatch route updates.',
    items: ['Direct SMS Confirmations', 'Email Work Orders', 'Slack Dispatch Channels', 'Webhook Automation']
  }
];


export const FAQ_ITEMS = [
  {
    id: 'faq-1',
    question: 'How is Formexai different from a standard phone answering service?',
    answer: 'Traditional answering services rely on off-site operators reading generic scripts who can rarely answer specific questions or book live appointments. Formexai is configured specifically around your business rules: it understands trade and industry terminology, checks live calendar availability, answers verified FAQs, and locks bookings or routes calls instantly—with zero hold time.'
  },
  {
    id: 'faq-2',
    question: 'Can Formexai actually book appointments into our existing schedule?',
    answer: 'Yes. Formexai connects directly with your calendar and dispatch software (such as Google Calendar, Microsoft Outlook, ServiceTitan, or Jobber). When a customer requests an appointment, Formexai checks open slots in real time and confirms an arrival window without double-booking.'
  },
  {
    id: 'faq-3',
    question: 'What happens when a caller has an emergency or asks for a person?',
    answer: 'Formexai includes human escalation logic. If a caller reports an emergency outside automated parameters (such as an active pipe burst or furnace failure in freezing weather), or explicitly asks to speak with your team, Formexai initiates a warm transfer directly to your designated on-call phone number.'
  },
  {
    id: 'faq-4',
    question: 'How does Formexai adapt to different industries?',
    answer: 'Formexai is built on an adaptable conversation engine. We configure the receptionist’s terminology, triage questions, qualification criteria, and business logic specifically for your field—whether you run an HVAC company, dental clinic, law office, real estate agency, or retail shop.'
  },
  {
    id: 'faq-5',
    question: 'Can I customize the greeting and receptionist voice?',
    answer: 'Yes. You can specify the exact receptionist name, greeting phrasing, speaking pace, and conversational style to match your brand. You also control business rules, service catalog details, and after-hours behavior.'
  },
  {
    id: 'faq-6',
    question: 'How long does onboarding and setup take?',
    answer: 'Setup typically takes approximately one week. During this phase, we configure your business knowledge base, connect your calendar and CRM, configure your phone forwarding, and conduct live test calls with your team before going live.'
  },
  {
    id: 'faq-7',
    question: 'Do we have to change our existing business phone number?',
    answer: 'No. You keep your existing business number. You simply set up call forwarding with your carrier (unconditional forwarding or conditional after-hours/busy forwarding) to your dedicated Formexai line.'
  },
  {
    id: 'faq-8',
    question: 'How does Formexai ensure it does not provide incorrect information?',
    answer: 'Formexai operates strictly within the verified knowledge base and business rules you configure. If a caller asks a question outside your approved guidelines, Formexai politely acknowledges the question, captures the caller’s details, and routes the inquiry to your staff for follow-up rather than guessing.'
  }
];

export const WORKSPACE_RECENT_CALLS = [
  {
    id: 'call-1049',
    callerName: 'Steve Harrington',
    phone: '(586) 374-6758',
    service: 'AC Installation',
    business: 'Iced Air Heating & Cooling',
    time: '10:42 AM',
    duration: '1m 27s',
    status: 'Booked',
    statusClass: 'status-success',
    appointment: 'Sunday, Sep 6 · 10:00 AM',
    summary: 'Customer called requesting brand-new AC installation for Manhattan apartment. Verified address, qualified setup, and locked Sunday 10 AM dispatch slot.'
  },
  {
    id: 'call-1048',
    callerName: 'Michael Vance',
    phone: '(212) 489-0129',
    service: 'Acute Dental Pain',
    business: 'Brightline Dental Studio',
    time: '10:18 AM',
    duration: '0m 54s',
    status: 'Emergency Reserved',
    statusClass: 'status-warning',
    appointment: 'Today · 3:15 PM (Dr. Chen)',
    summary: 'New patient reporting severe lower molar pain and mild swelling. Screened for fever, reserved daily emergency buffer chair, and texted digital intake.'
  },
  {
    id: 'call-1047',
    callerName: 'Rachel Adams',
    phone: '(415) 829-3012',
    service: 'Property Showing',
    business: 'Oakwood Realty Group',
    time: '9:55 AM',
    duration: '0m 50s',
    status: 'Qualified & Scheduled',
    statusClass: 'status-success',
    appointment: 'Saturday · 10:30 AM',
    summary: 'Pre-approved buyer inquiry for 42 Oak Ridge Terrace. Confirmed private showing window with Marcus Vance and delivered property disclosure packet.'
  },
  {
    id: 'call-1046',
    callerName: 'Julian Miller',
    phone: '(212) 901-4433',
    service: 'Inventory Hold',
    business: 'Maple & Main Outfitters',
    time: '9:30 AM',
    duration: '0m 44s',
    status: 'Held for Pickup',
    statusClass: 'status-neutral',
    appointment: 'Today · Held until 7:00 PM',
    summary: 'Verified floor stock for Trailhead Waterproof Shell in Forest Green / Medium (2 in stock). Reserved behind register and sent pickup barcode pass.'
  }
];
