/**
 * Formexai - HVAC Scenarios Data
 * Interactive scenario explorer showcasing typical high-volume HVAC calls.
 */

export const HVAC_SCENARIOS = [
  {
    id: 'ac-cooling',
    label: 'AC Not Cooling',
    tag: 'Peak Summer',
    customerQuery: "My AC is running but the house isn't getting cold. It's 82 degrees inside.",
    receptionistResponse: "I understand how uncomfortable that is. We treat cooling failures as same-day priority. Let me check the next available dispatch route for your neighborhood.",
    ticket: {
      serviceType: 'AC Diagnostic & Repair',
      issue: 'Unit running, blowing warm air',
      priority: 'Normal',
      appointment: 'Today · 3:30 PM Window',
      status: 'DISPATCH READY',
      equipment: 'Central Air Condenser',
    }
  },
  {
    id: 'heating-failure',
    label: 'Heating Failure',
    tag: 'Urgent',
    customerQuery: "My furnace stopped working completely and it's freezing in the bedrooms.",
    receptionistResponse: "I'm very sorry you're dealing with that in freezing conditions. I've flagged this as an urgent emergency heating call. Let me assign our priority on-call technician.",
    ticket: {
      serviceType: 'Emergency Heating Triage',
      issue: 'Furnace completely inoperative',
      priority: 'HIGH',
      appointment: 'Immediate Priority Window (1-2 Hours)',
      status: 'ESCALATION READY',
      equipment: 'Gas Furnace / Igniter',
    }
  },
  {
    id: 'emergency-service',
    label: 'Emergency Service',
    tag: '24/7 Triage',
    customerQuery: "Our rooftop unit is leaking water through the ceiling into our hallway!",
    receptionistResponse: "Please place a bucket under the leak if safe to do so. I am routing an urgent dispatch ticket directly to our on-call commercial tech and notifying your dispatcher.",
    ticket: {
      serviceType: 'Urgent Leak Intervention',
      issue: 'Condensate overflow dripping through ceiling',
      priority: 'HIGH',
      appointment: 'Immediate Dispatch',
      status: 'HUMAN ESCALATED',
      equipment: 'Condensate Drain Line',
    }
  },
  {
    id: 'maintenance',
    label: 'Annual Tune-Up',
    tag: 'Routine',
    customerQuery: "I'd like to schedule our yearly summer AC tune-up before the heat wave starts.",
    receptionistResponse: "Smart move to get ahead of the heat. Our 24-point tune-up includes refrigerant check, coil clean, and electrical inspection. Does Thursday at 10 AM suit you?",
    ticket: {
      serviceType: '24-Point AC Maintenance',
      issue: 'Pre-season system optimization',
      priority: 'Normal',
      appointment: 'Thursday · 10:00 AM',
      status: 'CONFIRMED',
      equipment: 'Full HVAC System',
    }
  },
  {
    id: 'installation',
    label: 'System Replacement',
    tag: 'High Value',
    customerQuery: "Our heat pump is 18 years old and we're looking to get a quote for a new inverter system.",
    receptionistResponse: "We can arrange a complimentary home comfort consultation with our senior estimator. We have consultation slots this Friday morning or Monday afternoon.",
    ticket: {
      serviceType: 'System Replacement Consultation',
      issue: 'Aging heat pump upgrade quote',
      priority: 'Normal',
      appointment: 'Friday · 11:00 AM',
      status: 'ESTIMATOR ASSIGNED',
      equipment: 'High-Efficiency Heat Pump',
    }
  },
  {
    id: 'rescheduling',
    label: 'Rescheduling',
    tag: 'Frictionless',
    customerQuery: "Hi, I have an appointment for 2 PM today under John Smith, but I need to move it to tomorrow.",
    receptionistResponse: "No problem at all, John. I found your 2 PM booking for 742 Evergreen Terrace. I can reschedule you for tomorrow morning at 10 AM. Would that work?",
    ticket: {
      serviceType: 'Appointment Reschedule',
      issue: 'Customer requested next-day move',
      priority: 'Normal',
      appointment: 'Tomorrow · 10:00 AM',
      status: 'CALENDAR UPDATED',
      equipment: 'Service Ticket #8842',
    }
  },
];
