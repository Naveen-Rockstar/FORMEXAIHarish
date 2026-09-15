/**
 * FORMEXAI — Workflow Builder Data
 * Models business logic pipelines from incoming ring to verified outcome.
 */

export const WORKFLOW_FLOWS = [
  {
    id: 'service_booking',
    name: 'Service Appointment & Route Dispatch',
    category: 'Home Services & Healthcare',
    description: 'Standard inbound customer inquiry triage, calendar verification, appointment booking, and dispatch.',
    nodes: [
      {
        id: 'n1',
        type: 'trigger',
        stepNumber: '01',
        label: 'Inbound Ring',
        sublabel: 'Primary DID Number',
        detail: 'Caller dials your business number. Answered in < 1 second with custom brand greeting.',
        tag: 'Sub-Second Pickup'
      },
      {
        id: 'n2',
        type: 'intent',
        stepNumber: '02',
        label: 'Intent Classification',
        sublabel: 'Natural Language Triage',
        detail: 'Classifies issue (e.g. AC blowing warm air, tooth pain, product availability) without numeric keypad menus.',
        tag: 'Intent Verified'
      },
      {
        id: 'n3',
        type: 'condition',
        stepNumber: '03',
        label: 'Business Rule Evaluation',
        sublabel: 'Urgency & Territory Check',
        detail: 'Evaluates service territory, system warranty, customer qualification, and appointment availability.',
        tag: 'Rule: Standard Booking'
      },
      {
        id: 'n4',
        type: 'action',
        stepNumber: '04',
        label: 'Live Calendar Check',
        sublabel: 'Two-Way Integration',
        detail: 'Queries live technician calendar routes to offer verified appointment windows without double-booking.',
        tag: 'Calendar Synced'
      },
      {
        id: 'n5',
        type: 'output',
        stepNumber: '05',
        label: 'Confirmation & Follow-Up',
        sublabel: 'CRM & SMS Dispatch',
        detail: 'Locks appointment in calendar, creates work order in CRM, and texts customer arrival window details.',
        tag: 'Job Secured'
      }
    ]
  },
  {
    id: 'emergency_escalation',
    name: 'High-Priority Emergency Escalation',
    category: 'Urgent Intervention',
    description: 'Automated triage detecting water leaks, total heat loss, or medical acute pain, escalating to human staff.',
    nodes: [
      {
        id: 'e1',
        type: 'trigger',
        stepNumber: '01',
        label: 'Inbound Ring',
        sublabel: '24/7 Live Line',
        detail: 'Answered immediately, regardless of time of day or weekend schedule.',
        tag: '24/7 Availability'
      },
      {
        id: 'e2',
        type: 'intent',
        stepNumber: '02',
        label: 'Symptom Triage',
        sublabel: 'Critical Hazard Detection',
        detail: 'Recognizes danger keywords (flooding, furnace out in freezing weather, electrical sparking).',
        tag: 'Emergency Triggered'
      },
      {
        id: 'e3',
        type: 'condition',
        stepNumber: '03',
        label: 'Safety Guidance',
        sublabel: 'Caller Protocol',
        detail: 'Provides immediate instructions (shut off main water valve, isolate power) while maintaining line.',
        tag: 'Protocol Enacted'
      },
      {
        id: 'e4',
        type: 'action',
        stepNumber: '04',
        label: 'Warm Phone Transfer',
        sublabel: 'SIP Ring-Group',
        detail: 'Directly dials on-call technician or manager phone with caller briefing on whisper line.',
        tag: 'Live Escalation'
      },
      {
        id: 'e5',
        type: 'output',
        stepNumber: '05',
        label: 'Emergency Alert Sent',
        sublabel: 'Priority SMS Alert',
        detail: 'Broadcasts urgent dispatch ticket with address, audio recording, and symptoms to field team.',
        tag: 'Team Mobilized'
      }
    ]
  },
  {
    id: 'retail_inventory',
    name: 'Inventory Verification & In-Store Hold',
    category: 'Retail & Local Commerce',
    description: 'Direct POS stock lookup, customer identity capture, hold tag reservation, and automated pickup pass dispatch.',
    nodes: [
      {
        id: 'r1',
        type: 'trigger',
        stepNumber: '01',
        label: 'Inbound Ring',
        sublabel: 'Store Location Phone',
        detail: 'Greets customer with current store location and immediate assistance.',
        tag: 'Zero Hold Time'
      },
      {
        id: 'r2',
        type: 'intent',
        stepNumber: '02',
        label: 'SKU & Variant Query',
        sublabel: 'Product Match',
        detail: 'Understands colloquial product names, sizes, colors, and variant availability.',
        tag: 'Product Identified'
      },
      {
        id: 'r3',
        type: 'condition',
        stepNumber: '03',
        label: 'Stock Verification',
        sublabel: 'POS Inventory Query',
        detail: 'Confirms live unit count on floor and reserve inventory threshold.',
        tag: 'Stock Confirmed'
      },
      {
        id: 'r4',
        type: 'action',
        stepNumber: '04',
        label: 'Counter Hold Tag',
        sublabel: 'Register Tagging',
        detail: 'Places 24-hour hold in register system under caller name and creates print tag.',
        tag: 'Held for Customer'
      },
      {
        id: 'r5',
        type: 'output',
        stepNumber: '05',
        label: 'Digital Pickup Pass',
        sublabel: 'Customer SMS',
        detail: 'Texts customer immediate barcode/pass with store hours, directions, and expiration window.',
        tag: 'Ready for Pickup'
      }
    ]
  }
];

export const BUSINESS_RULES_EXAMPLES = [
  {
    id: 'rule-emergency',
    condition: 'IF symptom is "water leak" OR "no heat below 32°F"',
    action: 'THEN flag HIGH PRIORITY and initiate warm transfer to On-Call Technician'
  },
  {
    id: 'rule-appointment',
    condition: 'IF caller requests service appointment',
    action: 'THEN query live route calendar and offer earliest 2-hour arrival windows'
  },
  {
    id: 'rule-afterhours',
    condition: 'IF call occurs outside 7:00 AM – 7:00 PM business hours',
    action: 'THEN execute after-hours triage: book next morning slot or route urgent calls'
  },
  {
    id: 'rule-faq',
    condition: 'IF caller asks about pricing, service areas, or warranty',
    action: 'THEN answer directly from verified knowledge base with zero hallucination'
  }
];
