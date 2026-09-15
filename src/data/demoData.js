/**
 * FORMEXAI — Multi-Industry Demo Engine Data
 * Includes exact audio timestamps matching public/audio/formexai-hvac-demo.wav
 * and original conversation scripts with timeline events for each industry.
 */

export const DEMO_INDUSTRIES = [
  {
    id: 'hvac',
    name: 'Home Services',
    subLabel: 'HVAC & Mechanical',
    businessName: 'Iced Air Heating & Cooling',
    receptionistName: 'Tora',
    scenario: 'Emergency AC Replacement & Installation',
    hasRealAudio: true,
    audioSrc: '/audio/formexai-hvac-demo.wav',
    duration: 87, // Duration in seconds
    transcript: [
      {
        id: 1,
        speaker: 'Formexai',
        role: 'receptionist',
        text: "Thanks for calling Iced Air Heating & Cooling. This is Tora, how can I help you today?",
        startTime: 0.0,
        endTime: 6.2,
        action: 'Inbound Call Connected'
      },
      {
        id: 2,
        speaker: 'Steve Harrington',
        role: 'caller',
        text: "I'm looking for an AC installation.",
        startTime: 6.2,
        endTime: 9.2,
        action: 'Service Need Identified: AC Installation'
      },
      {
        id: 3,
        speaker: 'Formexai',
        role: 'receptionist',
        text: "Thanks for letting me know you need an AC installation. Can I get your full name to get started with scheduling your appointment?",
        startTime: 9.2,
        endTime: 15.8,
        action: 'Requesting Customer Identity'
      },
      {
        id: 4,
        speaker: 'Steve Harrington',
        role: 'caller',
        text: "My name is Steve Harrington.",
        startTime: 15.8,
        endTime: 19.1,
        action: 'Identity Captured: Steve Harrington'
      },
      {
        id: 5,
        speaker: 'Formexai',
        role: 'receptionist',
        text: "Thanks Steve. Can I get the best phone number to reach you?",
        startTime: 19.1,
        endTime: 23.3,
        action: 'Requesting Direct Phone'
      },
      {
        id: 6,
        speaker: 'Steve Harrington',
        role: 'caller',
        text: "586-374-6758.",
        startTime: 23.3,
        endTime: 27.2,
        action: 'Contact Verified: (586) 374-6758'
      },
      {
        id: 7,
        speaker: 'Formexai',
        role: 'receptionist',
        text: "Thanks Steve. What's the address where you'd like the AC installed?",
        startTime: 27.2,
        endTime: 32.2,
        action: 'Requesting Service Location'
      },
      {
        id: 8,
        speaker: 'Steve Harrington',
        role: 'caller',
        text: "36th Avenue, Apartment 214, Door 93, Manhattan, New York 10012.",
        startTime: 32.2,
        endTime: 41.5,
        action: 'Address Recorded: Manhattan, NY 10012'
      },
      {
        id: 9,
        speaker: 'Formexai',
        role: 'receptionist',
        text: "Got it Steve. Can you tell me your preferred date and time for the AC installation?",
        startTime: 41.5,
        endTime: 47.3,
        action: 'Checking Dispatch Schedule'
      },
      {
        id: 10,
        speaker: 'Steve Harrington',
        role: 'caller',
        text: "Tomorrow morning 10:00 AM.",
        startTime: 47.3,
        endTime: 51.0,
        action: 'Customer Requested: Sunday 10:00 AM'
      },
      {
        id: 11,
        speaker: 'Formexai',
        role: 'receptionist',
        text: "Sunday September 6th at 10:00 AM is available for your AC installation. Can you briefly describe any specific requirements or issues with your current setup?",
        startTime: 51.0,
        endTime: 64.2,
        action: 'Slot Verified · Qualifying Technical Scope'
      },
      {
        id: 12,
        speaker: 'Steve Harrington',
        role: 'caller',
        text: "It's a brand new setup.",
        startTime: 64.2,
        endTime: 68.0,
        action: 'Scope Qualified: Brand New Installation'
      },
      {
        id: 13,
        speaker: 'Formexai',
        role: 'receptionist',
        text: "Your AC installation is scheduled for Sunday September 6th at 10:00 AM. Thanks for choosing Iced Air Heating & Cooling Steve. If you have any other questions, just let me know.",
        startTime: 68.0,
        endTime: 85.0,
        action: 'Appointment Locked · Work Order Created'
      },
      {
        id: 14,
        speaker: 'Call System',
        role: 'system',
        text: "Call completed. Confirmation text and technician route dispatch dispatched.",
        startTime: 85.0,
        endTime: 87.0,
        action: 'SMS Sent & CRM Updated'
      }
    ],
    timelineEvents: [
      { time: 0, label: 'Incoming Call', status: 'Connected' },
      { time: 8, label: 'Intent Classified', status: 'AC_INSTALLATION' },
      { time: 26, label: 'Contact Verified', status: '(586) 374-6758' },
      { time: 40, label: 'Address Recorded', status: 'Manhattan, NY' },
      { time: 52, label: 'Live Calendar Check', status: 'Slot Available' },
      { time: 70, label: 'Booking Locked', status: 'Sunday 10:00 AM' },
      { time: 85, label: 'Completed', status: 'Dispatched' }
    ],
    outcome: {
      status: 'Appointment Confirmed',
      summary: 'AC Installation scheduled for Sunday, Sep 6 at 10:00 AM',
      badge: 'Technician Route Scheduled',
      data: [
        { label: 'Customer', value: 'Steve Harrington' },
        { label: 'Phone', value: '(586) 374-6758' },
        { label: 'Address', value: '36th Ave, Manhattan, NY 10012' },
        { label: 'Service', value: 'Brand New AC Installation' },
        { label: 'Appointment', value: 'Sunday, Sep 6 · 10:00 AM' },
        { label: 'Action Taken', value: 'Calendar Locked, SMS Sent, CRM Updated' }
      ]
    }
  },
  {
    id: 'dental',
    name: 'Healthcare',
    subLabel: 'Dental & Clinics',
    businessName: 'Brightline Dental Studio',
    receptionistName: 'Sarah',
    scenario: 'Emergency Tooth Pain & New Patient Intake',
    hasRealAudio: false,
    audioSrc: null,
    duration: 54,
    transcript: [
      {
        id: 1,
        speaker: 'Formexai',
        role: 'receptionist',
        text: "Thanks for calling Brightline Dental. This is Sarah, how can I help you today?",
        startTime: 0.0,
        endTime: 4.5,
        action: 'Greeting & Clinical Intake'
      },
      {
        id: 2,
        speaker: 'Caller',
        role: 'caller',
        text: "Hi, I have severe throbbing pain in my lower molar that started last night. I'm a new patient.",
        startTime: 4.5,
        endTime: 11.2,
        action: 'Triage: Acute Discomfort · New Patient'
      },
      {
        id: 3,
        speaker: 'Formexai',
        role: 'receptionist',
        text: "I'm very sorry you're dealing with that pain. We reserve emergency slots every afternoon for acute issues. Are you experiencing any swelling or fever?",
        startTime: 11.2,
        endTime: 20.0,
        action: 'Clinical Safety Screen'
      },
      {
        id: 4,
        speaker: 'Caller',
        role: 'caller',
        text: "A little swelling along the gum line, but no fever yet.",
        startTime: 20.0,
        endTime: 24.5,
        action: 'Symptom Logged: Local Swelling'
      },
      {
        id: 5,
        speaker: 'Formexai',
        role: 'receptionist',
        text: "Understood. Dr. Chen has an emergency opening today at 3:15 PM to take an x-ray and relieve the pain. Can I reserve that for you under your full name?",
        startTime: 24.5,
        endTime: 34.0,
        action: 'Emergency Reserve Slot Offered'
      },
      {
        id: 6,
        speaker: 'Caller',
        role: 'caller',
        text: "Yes, please. My name is Michael Vance.",
        startTime: 34.0,
        endTime: 38.0,
        action: 'Patient Identity Captured'
      },
      {
        id: 7,
        speaker: 'Formexai',
        role: 'receptionist',
        text: "You're scheduled for 3:15 PM today, Michael. I've sent an SMS with our digital intake form and directions. Please bring your insurance card. We'll take good care of you today.",
        startTime: 38.0,
        endTime: 51.5,
        action: 'Reserved · Digital Intake Dispatched'
      },
      {
        id: 8,
        speaker: 'Call System',
        role: 'system',
        text: "Call completed. Patient card created in Dentrix PMS.",
        startTime: 51.5,
        endTime: 54.0,
        action: 'PMS Sync Completed'
      }
    ],
    timelineEvents: [
      { time: 0, label: 'Incoming Call', status: 'Connected' },
      { time: 11, label: 'Triage Evaluation', status: 'Acute Dental Pain' },
      { time: 24, label: 'Safety Screen', status: 'No Fever Reported' },
      { time: 34, label: 'Emergency Slot Reserved', status: 'Today 3:15 PM' },
      { time: 51, label: 'Intake Dispatched', status: 'SMS Link Sent' }
    ],
    outcome: {
      status: 'Emergency Reserved',
      summary: 'Emergency exam scheduled with Dr. Chen today at 3:15 PM',
      badge: 'Priority Emergency Slot',
      data: [
        { label: 'Patient', value: 'Michael Vance (New Patient)' },
        { label: 'Condition', value: 'Acute lower molar pain / mild swelling' },
        { label: 'Provider', value: 'Dr. Chen · Operatory 2' },
        { label: 'Appointment', value: 'Today · 3:15 PM' },
        { label: 'Action Taken', value: 'Digital Intake Sent via SMS, PMS Synced' }
      ]
    }
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    subLabel: 'Agency & Brokerage',
    businessName: 'Oakwood Realty Group',
    receptionistName: 'Elena',
    scenario: 'High-Intent Property Inquiry & Showing Request',
    hasRealAudio: false,
    audioSrc: null,
    duration: 50,
    transcript: [
      {
        id: 1,
        speaker: 'Formexai',
        role: 'receptionist',
        text: "Thanks for calling Oakwood Realty. This is Elena, how can I assist you today?",
        startTime: 0.0,
        endTime: 4.8,
        action: 'Inbound Inquiries Greeting'
      },
      {
        id: 2,
        speaker: 'Caller',
        role: 'caller',
        text: "Hi, I'm calling about the 4-bedroom property on 42 Oak Ridge Terrace. Is it still available for a private viewing?",
        startTime: 4.8,
        endTime: 12.0,
        action: 'Listing Located: 42 Oak Ridge Terrace'
      },
      {
        id: 3,
        speaker: 'Formexai',
        role: 'receptionist',
        text: "Yes, 42 Oak Ridge Terrace is actively listed. The listing agent, Marcus Vance, is hosting private appointments this Thursday afternoon and Saturday morning. Are you looking to buy or lease?",
        startTime: 12.0,
        endTime: 23.5,
        action: 'Listing Status Confirmed · Buyer Intent'
      },
      {
        id: 4,
        speaker: 'Caller',
        role: 'caller',
        text: "Looking to buy. We're already pre-approved and looking to move in by November.",
        startTime: 23.5,
        endTime: 29.0,
        action: 'Lead Qualified: Pre-approved Buyer'
      },
      {
        id: 5,
        speaker: 'Formexai',
        role: 'receptionist',
        text: "That's fantastic. I can book a private walkthrough for you this Saturday at 10:30 AM with Marcus. May I have your name and best mobile number?",
        startTime: 29.0,
        endTime: 38.5,
        action: 'Showing Slot Reserved'
      },
      {
        id: 6,
        speaker: 'Caller',
        role: 'caller',
        text: "Rachel Adams, 415-829-3012.",
        startTime: 38.5,
        endTime: 42.0,
        action: 'Lead Contact Verified'
      },
      {
        id: 7,
        speaker: 'Formexai',
        role: 'receptionist',
        text: "You're all set for Saturday at 10:30 AM at 42 Oak Ridge Terrace, Rachel. I've sent the property disclosure packet to your phone and alerted Marcus directly.",
        startTime: 42.0,
        endTime: 50.0,
        action: 'Showing Confirmed · Packet Dispatched'
      }
    ],
    timelineEvents: [
      { time: 0, label: 'Incoming Call', status: 'Connected' },
      { time: 12, label: 'MLS Lookup', status: 'Active Listing' },
      { time: 29, label: 'Buyer Qualified', status: 'Pre-Approved ($850k+)' },
      { time: 42, label: 'Showing Locked', status: 'Saturday 10:30 AM' },
      { time: 50, label: 'Agent Alerted', status: 'Marcus Vance Notified' }
    ],
    outcome: {
      status: 'Showing Scheduled',
      summary: 'Private walkthrough booked for Saturday at 10:30 AM',
      badge: 'Pre-Approved Buyer Lead',
      data: [
        { label: 'Client', value: 'Rachel Adams' },
        { label: 'Listing', value: '42 Oak Ridge Terrace ($890,000)' },
        { label: 'Showing Time', value: 'Saturday · 10:30 AM' },
        { label: 'Listing Agent', value: 'Marcus Vance (Assigned)' },
        { label: 'Action Taken', value: 'Calendar Invite Sent, Property Packet Delivered' }
      ]
    }
  },
  {
    id: 'retail',
    name: 'Retail & Commerce',
    subLabel: 'Store Front & Inventory',
    businessName: 'Maple & Main Outfitters',
    receptionistName: 'Chloe',
    scenario: 'In-Store Product Inventory & Customer Hold',
    hasRealAudio: false,
    audioSrc: null,
    duration: 44,
    transcript: [
      {
        id: 1,
        speaker: 'Formexai',
        role: 'receptionist',
        text: "Thanks for calling Maple and Main on 5th Street. This is Chloe, how can I help you?",
        startTime: 0.0,
        endTime: 4.8,
        action: 'Store Location Identified'
      },
      {
        id: 2,
        speaker: 'Caller',
        role: 'caller',
        text: "Hi! Do you have the Trailhead Waterproof Shell jacket in Forest Green in a men's medium in stock right now?",
        startTime: 4.8,
        endTime: 12.0,
        action: 'SKU & Variant Search'
      },
      {
        id: 3,
        speaker: 'Formexai',
        role: 'receptionist',
        text: "Let me check our floor inventory. Yes, we have two units of the Trailhead Shell in Forest Green, Men's Medium at our 5th Street shop. Would you like me to hold one behind the counter for you today?",
        startTime: 12.0,
        endTime: 24.5,
        action: 'Inventory Verified (2 Units) · Hold Offered'
      },
      {
        id: 4,
        speaker: 'Caller',
        role: 'caller',
        text: "That would be incredible. I can pick it up around 4:30 PM today.",
        startTime: 24.5,
        endTime: 29.0,
        action: 'Customer Pickup Window Agreed'
      },
      {
        id: 5,
        speaker: 'Formexai',
        role: 'receptionist',
        text: "What name should I place on the hold tag, and what number can I text the confirmation to?",
        startTime: 29.0,
        endTime: 34.0,
        action: 'Customer Identity Verification'
      },
      {
        id: 6,
        speaker: 'Caller',
        role: 'caller',
        text: "Julian Miller, 212-901-4433.",
        startTime: 34.0,
        endTime: 38.0,
        action: 'Hold Tag Created'
      },
      {
        id: 7,
        speaker: 'Formexai',
        role: 'receptionist',
        text: "It's held behind the front register under Julian Miller until 7:00 PM closing. I just texted you a pickup pass. See you this afternoon!",
        startTime: 38.0,
        endTime: 44.0,
        action: 'Hold Reserved · POS Alerted'
      }
    ],
    timelineEvents: [
      { time: 0, label: 'Incoming Call', status: 'Connected' },
      { time: 12, label: 'Inventory Query', status: 'Trailhead Shell - Green / M' },
      { time: 24, label: 'Stock Confirmed', status: '2 Units Available' },
      { time: 38, label: 'Hold Tag Logged', status: 'Julian Miller' },
      { time: 44, label: 'Pickup SMS Sent', status: 'Held until 7:00 PM' }
    ],
    outcome: {
      status: 'Inventory Held',
      summary: 'Trailhead Shell held behind counter for Julian Miller until 7 PM',
      badge: 'POS Hold Created',
      data: [
        { label: 'Customer', value: 'Julian Miller' },
        { label: 'Item', value: 'Trailhead Waterproof Shell (Forest Green / M)' },
        { label: 'Price', value: '$189.00' },
        { label: 'Location', value: '5th Street Flagship Store' },
        { label: 'Hold Status', value: 'Active until 7:00 PM today' },
        { label: 'Action Taken', value: 'Register Alert Created, Pickup Pass SMS Sent' }
      ]
    }
  },
  {
    id: 'legal',
    name: 'Professional Services',
    subLabel: 'Legal & Consulting',
    businessName: 'Crestview Law Partners',
    receptionistName: 'David',
    scenario: 'Commercial Lease Dispute & Consultation Intake',
    hasRealAudio: false,
    audioSrc: null,
    duration: 52,
    transcript: [
      {
        id: 1,
        speaker: 'Formexai',
        role: 'receptionist',
        text: "Thank you for calling Crestview Law Partners. This is David, how may I direct your call?",
        startTime: 0.0,
        endTime: 5.0,
        action: 'Professional Intake Greeting'
      },
      {
        id: 2,
        speaker: 'Caller',
        role: 'caller',
        text: "I run a small retail business and our commercial landlord is attempting an improper lease termination. We need legal advice right away.",
        startTime: 5.0,
        endTime: 13.5,
        action: 'Matter Triage: Commercial Real Estate Dispute'
      },
      {
        id: 3,
        speaker: 'Formexai',
        role: 'receptionist',
        text: "I understand the urgency of commercial lease disputes. While I cannot provide legal advice over the phone, our commercial real estate practice group handles lease enforcements regularly. Have you received a formal notice to quit?",
        startTime: 13.5,
        endTime: 27.0,
        action: 'Boundary Stated · Preliminary Intake'
      },
      {
        id: 4,
        speaker: 'Caller',
        role: 'caller',
        text: "Yes, a 14-day cure letter that we believe violates our original contract lease terms.",
        startTime: 27.0,
        endTime: 32.5,
        action: 'Timeline Logged: 14-Day Cure Notice'
      },
      {
        id: 5,
        speaker: 'Formexai',
        role: 'receptionist',
        text: "Understood. Senior partner Katherine Ross has an introductory case review opening tomorrow at 11:00 AM via telephone or secure video. Can I schedule this for your company?",
        startTime: 32.5,
        endTime: 42.0,
        action: 'Partner Consultation Offered'
      },
      {
        id: 6,
        speaker: 'Caller',
        role: 'caller',
        text: "Yes, tomorrow at 11:00 AM works. This is Greg Palmer from Palmer Provisions.",
        startTime: 42.0,
        endTime: 47.0,
        action: 'Entity & Contact Recorded'
      },
      {
        id: 7,
        speaker: 'Formexai',
        role: 'receptionist',
        text: "You're confirmed for tomorrow at 11:00 AM with Katherine Ross. I've emailed our conflict check intake form and secure upload link for your lease document.",
        startTime: 47.0,
        endTime: 52.0,
        action: 'Consultation Locked · Intake Link Sent'
      }
    ],
    timelineEvents: [
      { time: 0, label: 'Incoming Call', status: 'Connected' },
      { time: 13, label: 'Practice Area', status: 'Commercial Lease Dispute' },
      { time: 32, label: 'Urgency Evaluation', status: '14-Day Notice Window' },
      { time: 42, label: 'Partner Slot Booked', status: 'Tomorrow 11:00 AM' },
      { time: 52, label: 'Conflict Check', status: 'Intake Dispatched' }
    ],
    outcome: {
      status: 'Consultation Booked',
      summary: 'Case review scheduled with Katherine Ross for tomorrow at 11:00 AM',
      badge: 'Priority Intake Case',
      data: [
        { label: 'Client', value: 'Greg Palmer · Palmer Provisions' },
        { label: 'Matter Type', value: 'Commercial Tenancy / Lease Termination Dispute' },
        { label: 'Attorney', value: 'Katherine Ross (Senior Partner)' },
        { label: 'Consultation', value: 'Tomorrow · 11:00 AM' },
        { label: 'Action Taken', value: 'Calendar Synced, Conflict Check & Document Portal Dispatched' }
      ]
    }
  },
  {
    id: 'automotive',
    name: 'Automotive',
    subLabel: 'Auto Care & Fleet',
    businessName: 'Metro Auto Care',
    receptionistName: 'Marcus',
    scenario: 'Brake Inspection & Workshop Bay Scheduling',
    hasRealAudio: false,
    audioSrc: null,
    duration: 46,
    transcript: [
      {
        id: 1,
        speaker: 'Formexai',
        role: 'receptionist',
        text: "Thanks for calling Metro Auto Care. This is Marcus, how can we help with your vehicle today?",
        startTime: 0.0,
        endTime: 4.8,
        action: 'Shop Greeting'
      },
      {
        id: 2,
        speaker: 'Caller',
        role: 'caller',
        text: "Hi, my 2021 Honda CR-V started making a grinding sound when I press the brakes, especially coming down hills.",
        startTime: 4.8,
        endTime: 12.5,
        action: 'Vehicle & Symptom Triage: Brake Rotor Grind'
      },
      {
        id: 3,
        speaker: 'Formexai',
        role: 'receptionist',
        text: "That grinding usually indicates the brake pads have worn down to the wear indicator or rotor. For your safety, we recommend having it inspected right away. Are the brakes feeling spongy or pulling to one side?",
        startTime: 12.5,
        endTime: 23.5,
        action: 'Safety Qualification'
      },
      {
        id: 4,
        speaker: 'Caller',
        role: 'caller',
        text: "No pulling, just a harsh scraping sound.",
        startTime: 23.5,
        endTime: 27.0,
        action: 'Symptom Refined'
      },
      {
        id: 5,
        speaker: 'Formexai',
        role: 'receptionist',
        text: "Understood. We have a diagnostic bay open tomorrow morning at 8:30 AM or 1:00 PM. Our master tech can inspect the pads and rotors and give you a digital inspection report before any work begins.",
        startTime: 27.0,
        endTime: 38.0,
        action: 'Bay Slot Offered'
      },
      {
        id: 6,
        speaker: 'Caller',
        role: 'caller',
        text: "8:30 AM tomorrow works great. My name is Thomas Wright.",
        startTime: 38.0,
        endTime: 42.0,
        action: 'Customer Identity Captured'
      },
      {
        id: 7,
        speaker: 'Formexai',
        role: 'receptionist',
        text: "You're scheduled for 8:30 AM tomorrow for your 2021 Honda CR-V. I've sent a text confirmation with our drop-off bay instructions. Drive safely, Thomas.",
        startTime: 42.0,
        endTime: 46.0,
        action: 'Bay Reserved · Drop-off SMS Sent'
      }
    ],
    timelineEvents: [
      { time: 0, label: 'Incoming Call', status: 'Connected' },
      { time: 12, label: 'Vehicle Logged', status: '2021 Honda CR-V' },
      { time: 23, label: 'Safety Qualification', status: 'Brake Inspection Recommended' },
      { time: 38, label: 'Bay Reserved', status: 'Tomorrow 8:30 AM' },
      { time: 46, label: 'Drop-off Dispatched', status: 'SMS Delivered' }
    ],
    outcome: {
      status: 'Diagnostic Bay Reserved',
      summary: 'Brake inspection scheduled for 2021 Honda CR-V tomorrow at 8:30 AM',
      badge: 'Shop Bay Confirmed',
      data: [
        { label: 'Customer', value: 'Thomas Wright' },
        { label: 'Vehicle', value: '2021 Honda CR-V' },
        { label: 'Service', value: 'Comprehensive Brake Pad & Rotor Inspection' },
        { label: 'Appointment', value: 'Tomorrow · 8:30 AM Drop-off' },
        { label: 'Action Taken', value: 'Shop Bay Locked, Drop-off SMS Instructions Sent' }
      ]
    }
  },
  {
    id: 'hospitality',
    name: 'Hospitality',
    subLabel: 'Dining & Events',
    businessName: 'The Rowan Table',
    receptionistName: 'Julian',
    scenario: 'Private Table Reservation & Dietary Accommodations',
    hasRealAudio: false,
    audioSrc: null,
    duration: 42,
    transcript: [
      {
        id: 1,
        speaker: 'Formexai',
        role: 'receptionist',
        text: "Good afternoon, thank you for calling The Rowan Table. This is Julian, how may I assist you?",
        startTime: 0.0,
        endTime: 4.8,
        action: 'Dining Greeting'
      },
      {
        id: 2,
        speaker: 'Caller',
        role: 'caller',
        text: "Hi, I'd like to book a table for 6 people this Friday evening around 7:30 PM. One of our guests has a severe celiac gluten allergy.",
        startTime: 4.8,
        endTime: 13.5,
        action: 'Reservation Parameters & Dietary Flag'
      },
      {
        id: 3,
        speaker: 'Formexai',
        role: 'receptionist',
        text: "We would be delighted to host you. We have a dining room table available at 7:30 PM this Friday. Our culinary team has a dedicated allergen protocol and can prepare a complete gluten-free menu for your guest.",
        startTime: 13.5,
        endTime: 26.0,
        action: 'Table Availability Checked · Dietary Confirmed'
      },
      {
        id: 4,
        speaker: 'Caller',
        role: 'caller',
        text: "That is wonderful to hear, thank you so much.",
        startTime: 26.0,
        endTime: 29.5,
        action: 'Customer Confirmation'
      },
      {
        id: 5,
        speaker: 'Formexai',
        role: 'receptionist',
        text: "May I have your name and telephone number to finalize the reservation?",
        startTime: 29.5,
        endTime: 34.0,
        action: 'Host Details Verification'
      },
      {
        id: 6,
        speaker: 'Caller',
        role: 'caller',
        text: "Elena Gomez, 312-555-8820.",
        startTime: 34.0,
        endTime: 37.5,
        action: 'Party Contact Recorded'
      },
      {
        id: 7,
        speaker: 'Formexai',
        role: 'receptionist',
        text: "You are confirmed for a party of 6 this Friday at 7:30 PM, Elena. I've noted the celiac accommodation directly on the kitchen order ticket. We look forward to welcoming you.",
        startTime: 37.5,
        endTime: 42.0,
        action: 'Table Confirmed · Kitchen Allergen Ticket Dispatched'
      }
    ],
    timelineEvents: [
      { time: 0, label: 'Incoming Call', status: 'Connected' },
      { time: 13, label: 'Party Specification', status: '6 Guests · Celiac Allergy' },
      { time: 26, label: 'Table Reserved', status: 'Friday 7:30 PM' },
      { time: 37, label: 'Guest Contact', status: 'Elena Gomez' },
      { time: 42, label: 'Kitchen Alerted', status: 'Allergen Protocol Flagged' }
    ],
    outcome: {
      status: 'Table Reserved',
      summary: 'Dinner table for party of 6 confirmed for Friday at 7:30 PM',
      badge: 'Host Stand Confirmed',
      data: [
        { label: 'Host', value: 'Elena Gomez' },
        { label: 'Party Size', value: '6 Guests' },
        { label: 'Date & Time', value: 'This Friday · 7:30 PM' },
        { label: 'Special Notes', value: 'Celiac Disease / Dedicated Gluten-Free Protocol' },
        { label: 'Action Taken', value: 'Table Locked in Resy / SevenRooms, Kitchen Alert Dispatched' }
      ]
    }
  }
];
