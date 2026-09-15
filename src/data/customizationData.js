/**
 * FORMEXAI — Customization Studio Data
 * Shows realistic receptionist configuration parameters adapting across different business models.
 */

export const CUSTOMIZATION_PROFILES = [
  {
    id: 'hvac',
    industry: 'HVAC & Mechanical',
    tag: 'Home Services',
    businessName: 'Northstar Heating & Air',
    receptionist: {
      name: 'Maya',
      role: 'Service Dispatch Receptionist',
      voiceTone: 'Practical, professional, service-oriented',
      language: 'English (US)',
      accent: 'Neutral Midwest',
      speakingRate: '1.0x'
    },
    greeting: "Thanks for calling Northstar Heating & Air. This is Maya, how can I help with your heating or cooling system today?",
    services: [
      { name: 'Emergency No-Heat / AC Failure', urgency: 'Same-Day Urgent', dispatch: 'On-Call Tech' },
      { name: 'Seasonal System Tune-Up', urgency: 'Standard Booking', dispatch: 'Next Open Slot' },
      { name: 'System Replacement Quote', urgency: 'High Value', dispatch: 'Senior Estimator' },
      { name: 'Refrigerant Leak Diagnostic', urgency: 'Standard Booking', dispatch: 'Certified Tech' }
    ],
    businessHours: {
      schedule: 'Monday – Friday: 7:00 AM – 7:00 PM · Saturday: 8:00 AM – 4:00 PM',
      timezone: 'Central Time (CT)',
      afterHoursAction: 'Emergency Triage & Human Escalation'
    },
    transferRules: [
      { condition: 'Active water leak through ceiling or total freeze warning', action: 'Direct warm transfer to On-Duty Supervisor' },
      { condition: 'Commercial property or multi-family complex', action: 'Route to Commercial Dispatch Desk' },
      { condition: 'Caller requests specific technician by name', action: 'Check field route status and offer callback' }
    ],
    bookingRules: {
      calendar: 'ServiceTitan & Google Calendar Sync',
      bufferTime: '45 minutes between service zones',
      windowType: '2-hour arrival arrival windows',
      maxBookingsPerDay: 14
    },
    knowledgeBase: [
      'Disclose $89 diagnostic fee credited toward approved repairs',
      'Service zip codes: 75001 through 75099 (Greater Metro Area)',
      'We do not service commercial ammonia chillers',
      'Carrier, Trane, Lennox, and Mitsubishi Diamond certified'
    ]
  },
  {
    id: 'dental',
    industry: 'Dental Care',
    tag: 'Healthcare',
    businessName: 'Brightline Dental Studio',
    receptionist: {
      name: 'Sarah',
      role: 'Patient Coordinator Receptionist',
      voiceTone: 'Calm, reassuring, empathetic',
      language: 'English (US)',
      accent: 'Warm Coastal',
      speakingRate: '0.98x'
    },
    greeting: "Thank you for calling Brightline Dental Studio. This is Sarah, how can I assist you with your appointment today?",
    services: [
      { name: 'Acute Dental Pain / Broken Tooth', urgency: 'Emergency Daily Slot', dispatch: 'Operatory 2 (Dr. Chen)' },
      { name: 'Comprehensive Exam & Hygiene', urgency: 'Standard Intake', dispatch: 'Hygienist Schedule' },
      { name: 'Cosmetic Consultation (Invisalign)', urgency: 'Consultation', dispatch: 'Treatment Coordinator' },
      { name: 'Crown / Restorative Follow-Up', urgency: 'Specific Provider', dispatch: 'Primary Dentist' }
    ],
    businessHours: {
      schedule: 'Monday – Thursday: 8:00 AM – 5:00 PM · Friday: 8:00 AM – 2:00 PM',
      timezone: 'Eastern Time (ET)',
      afterHoursAction: 'Emergency On-Call Dental Hotline'
    },
    transferRules: [
      { condition: 'Severe facial swelling or trauma with difficulty swallowing', action: 'Instruct ER visit and alert On-Call Doctor' },
      { condition: 'Referring specialist calling regarding patient records', action: 'Transfer immediately to Practice Manager' },
      { condition: 'Insurance verification dispute', action: 'Route to Billing Specialist during business hours' }
    ],
    bookingRules: {
      calendar: 'Dentrix Ascend PMS & Curve Dental',
      bufferTime: '15 minutes sterilization turnaround',
      windowType: 'Exact chair appointment times',
      maxBookingsPerDay: 22
    },
    knowledgeBase: [
      'In-network with Delta Dental Premier, MetLife, Cigna PPO, and Guardian',
      'Intake documents dispatched automatically via HIPAA-compliant SMS',
      'Sedation dentistry options available for anxious patients upon request',
      'New patient first visit fee: $149 comprehensive special'
    ]
  },
  {
    id: 'retail',
    industry: 'Retail & Commerce',
    tag: 'Local Commerce',
    businessName: 'Maple & Main Outfitters',
    receptionist: {
      name: 'Chloe',
      role: 'Store Concierge Receptionist',
      voiceTone: 'Energetic, helpful, efficient',
      language: 'English (US)',
      accent: 'Friendly Metropolitan',
      speakingRate: '1.02x'
    },
    greeting: "Thanks for calling Maple & Main Outfitters on 5th Street. This is Chloe, how can I help you today?",
    services: [
      { name: 'Floor Inventory & Size Availability', urgency: 'Instant Lookup', dispatch: 'Shop POS API' },
      { name: 'Customer Hold Request (24-Hour)', urgency: 'Instant Confirmation', dispatch: 'Front Register Shelf' },
      { name: 'Online Order In-Store Pickup Status', urgency: 'Order Verification', dispatch: 'Fulfillment Desk' },
      { name: 'Return Policy & Gift Card Balance', urgency: 'Knowledge Lookup', dispatch: 'Automated Answer' }
    ],
    businessHours: {
      schedule: 'Monday – Saturday: 10:00 AM – 8:00 PM · Sunday: 11:00 AM – 6:00 PM',
      timezone: 'Eastern Time (ET)',
      afterHoursAction: 'Store Hours, Location & Online Pickup FAQ'
    },
    transferRules: [
      { condition: 'Bulk corporate orders (>25 units)', action: 'Transfer to Corporate Accounts Director' },
      { condition: 'Lost property left in fitting rooms', action: 'Connect directly to Floor Manager on duty' },
      { condition: 'Supplier / Delivery driver at loading bay', action: 'Page Receiving Bay intercom' }
    ],
    bookingRules: {
      calendar: 'Shopify POS & Lightspeed Retail Inventory',
      bufferTime: 'Holds automatically expire 24 hours from call',
      windowType: 'Same-day counter reservation',
      maxBookingsPerDay: 50
    },
    knowledgeBase: [
      'Returns accepted within 30 days with receipt in unworn condition',
      'Parking validated for 2 hours in adjacent municipal garage',
      'Curbside pickup available in reserved bays 3 and 4 behind store',
      'Current promotion: End-of-season outerwear clearance 20% off'
    ]
  },
  {
    id: 'real-estate',
    industry: 'Real Estate & Brokerage',
    tag: 'Professional Services',
    businessName: 'Oakwood Realty Group',
    receptionist: {
      name: 'Elena',
      role: 'Brokerage Intake Receptionist',
      voiceTone: 'Polished, authoritative, articulate',
      language: 'English (US)',
      accent: 'Refined Contemporary',
      speakingRate: '1.0x'
    },
    greeting: "Thanks for calling Oakwood Realty Group. This is Elena, how can I direct your inquiry today?",
    services: [
      { name: 'Active Listing Inquiries & Viewings', urgency: 'High Intent', dispatch: 'Listing Agent Round-Robin' },
      { name: 'Home Valuation & Selling Inquiries', urgency: 'Listing Opportunity', dispatch: 'Senior Managing Broker' },
      { name: 'Rental Application Status', urgency: 'Standard Intake', dispatch: 'Property Management Desk' },
      { name: 'Commercial Leasing Opportunities', urgency: 'Specialist Required', dispatch: 'Commercial Division' }
    ],
    businessHours: {
      schedule: 'Monday – Sunday: 8:30 AM – 7:30 PM (Receptionist Active 24/7)',
      timezone: 'Pacific Time (PT)',
      afterHoursAction: 'Full Showing Scheduling & Agent Dispatch'
    },
    transferRules: [
      { condition: 'Caller is verified pre-approved buyer with budget >$1.5M', action: 'Warm phone transfer directly to Lead Broker' },
      { condition: 'Escrow, title company, or appraisal urgent deadline', action: 'Priority transfer to Transaction Coordinator' },
      { condition: 'Media or public relations inquiry', action: 'Direct to Communications Director' }
    ],
    bookingRules: {
      calendar: 'ShowingTime, Calendly & Follow Up Boss CRM',
      bufferTime: '30 minutes travel buffer between property viewings',
      windowType: 'Confirmed 45-minute private showings',
      maxBookingsPerDay: 18
    },
    knowledgeBase: [
      'All private viewings require pre-qualification confirmation or proof of funds',
      'MLS listings updated via direct RETS feed every 15 minutes',
      'Exclusive buyer representation agreements explained on initial showing',
      'Office location: 400 Grand Ave, Suite 300'
    ]
  }
];
