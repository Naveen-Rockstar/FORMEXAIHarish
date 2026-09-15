/**
 * Formexai - Natural Conversation Engine
 * Handles natural speech intent parsing, multi-turn dialogue progression,
 * and dynamic service ticket generation for HVAC and expansion scenarios.
 */

export const SCENARIOS = {
  HVAC: 'hvac',
  SPA: 'spa',
  DENTAL: 'dental',
  PLUMBING: 'plumbing',
};

export const INITIAL_GREETINGS = {
  [SCENARIOS.HVAC]: "Thank you for calling Apex Heating & Air. How can I help you with your system today?",
  [SCENARIOS.SPA]: "Thank you for calling Serenity Wellness Spa. How can I assist you with your booking today?",
  [SCENARIOS.DENTAL]: "Thank you for calling City Dental Care. How can I help with your appointment today?",
  [SCENARIOS.PLUMBING]: "Thank you for calling Rapid Plumbing Services. How can I help with your plumbing issue today?",
};

export const INITIAL_TICKETS = {
  [SCENARIOS.HVAC]: {
    industry: 'HVAC & Home Services',
    serviceType: 'Inbound Inquiry',
    issue: 'Awaiting caller details',
    property: 'Pending',
    address: 'Pending',
    priority: 'Normal',
    appointment: 'Not scheduled',
    status: 'LISTENING',
    escalationReady: false,
  },
  [SCENARIOS.SPA]: {
    industry: 'Spa & Wellness',
    serviceType: 'Treatment Booking',
    issue: 'Awaiting appointment choice',
    duration: 'Pending',
    priority: 'Normal',
    appointment: 'Not scheduled',
    status: 'LISTENING',
    escalationReady: false,
  },
  [SCENARIOS.DENTAL]: {
    industry: 'Dental Care',
    serviceType: 'Dental Appointment',
    issue: 'Routine / Diagnostic',
    priority: 'Normal',
    appointment: 'Not scheduled',
    status: 'LISTENING',
    escalationReady: false,
  },
  [SCENARIOS.PLUMBING]: {
    industry: 'Plumbing Services',
    serviceType: 'Plumbing Diagnostic',
    issue: 'Awaiting issue details',
    priority: 'Normal',
    appointment: 'Not scheduled',
    status: 'LISTENING',
    escalationReady: false,
  },
};

/**
 * Process a caller's natural language input within the current conversation state
 */
export function processUserInput(input, currentScenario, dialogueState, currentTicket) {
  const text = (input || '').trim().toLowerCase();
  const step = dialogueState.step || 0;

  // ------------------------------------------------------------------------
  // 1. PRIMARY SCENARIO: HVAC
  // ------------------------------------------------------------------------
  if (currentScenario === SCENARIOS.HVAC) {
    // Check for Urgent Heating Emergency at any point
    const isUrgentHeating = /furnace|heater|no heat|freezing|cold inside|shut off.*cold|freezing inside/.test(text);
    if (isUrgentHeating && step < 3) {
      const updatedTicket = {
        ...currentTicket,
        serviceType: 'Urgent Heating Failure',
        issue: 'Furnace down / No heat during cold weather',
        priority: 'HIGH',
        escalationReady: true,
        status: 'URGENT QUALIFIED',
      };
      return {
        response: "I'm sorry to hear that. Because your home has no heat, I'll flag this as an emergency heating service call. Let me check the earliest priority slot for you today. Can I confirm your service address?",
        nextStep: 2,
        updatedTicket,
        isCompleted: false,
      };
    }

    // Step 0 or 1: Initial problem identification
    if (step === 0 || step === 1) {
      // AC Not Cooling / Hot air / Blowing warm
      if (/ac|air condition|not cooling|hot air|warm air|cooling|not cold|fan running|warm|stopped working|won't turn on/.test(text)) {
        const isWarmAir = /warm|hot|blowing/.test(text);
        const updatedTicket = {
          ...currentTicket,
          serviceType: 'AC Diagnostic & Repair',
          issue: isWarmAir ? 'AC running but blowing warm air' : 'AC cooling failure / Inoperative',
          priority: 'Normal',
          status: 'ISSUE IDENTIFIED',
        };
        return {
          response: "I can help with that. Is your AC unit running but blowing warm air, or is the system not turning on at all?",
          nextStep: 2,
          updatedTicket,
          isCompleted: false,
        };
      }

      // Maintenance / Tune-up
      if (/maintenance|tune up|tune-up|inspection|check up|service check|annual/.test(text)) {
        const updatedTicket = {
          ...currentTicket,
          serviceType: 'Seasonal Maintenance Tune-Up',
          issue: 'Preventative HVAC inspection',
          priority: 'Normal',
          status: 'SERVICE QUALIFIED',
        };
        return {
          response: "We'd be glad to perform a comprehensive system maintenance inspection. Is this for your home or a commercial location?",
          nextStep: 2,
          updatedTicket,
          isCompleted: false,
        };
      }

      // Water leak or strange noise
      if (/leak|water|dripping|noise|rattling|screeching|sound/.test(text)) {
        const updatedTicket = {
          ...currentTicket,
          serviceType: 'HVAC Mechanical Diagnostic',
          issue: /leak|water/.test(text) ? 'Water leaking around unit' : 'Unusual equipment noise',
          priority: 'Normal',
          status: 'DIAGNOSTIC QUALIFIED',
        };
        return {
          response: "Understood. Our certified technician can perform a complete diagnostic on the unit. Is this for a residential home or a commercial building?",
          nextStep: 2,
          updatedTicket,
          isCompleted: false,
        };
      }

      // General appointment request
      if (/schedule|appointment|book|technician|someone to come|visit/.test(text)) {
        return {
          response: "I can definitely schedule a technician for you. Could you briefly describe what's happening with your heating or cooling system?",
          nextStep: 1,
          updatedTicket: currentTicket,
          isCompleted: false,
        };
      }

      // Generic fallback for initial step
      return {
        response: "Got it. I'll make sure our team takes care of that. Is this for your home or a commercial property?",
        nextStep: 2,
        updatedTicket: {
          ...currentTicket,
          serviceType: 'HVAC Service Call',
          issue: input,
          status: 'QUALIFYING',
        },
        isCompleted: false,
      };
    }

    // Step 2: Property Type & Address Confirmation
    if (step === 2) {
      const isResidential = /home|house|residential|my place|condo|apartment/.test(text);
      const isCommercial = /commercial|business|office|store|shop/.test(text);
      const propertyType = isCommercial ? 'Commercial' : 'Residential';

      // Check if they also provided an address or street name
      const hasStreet = /\d+.*(st|street|ave|avenue|rd|road|dr|drive|lane|ln|way|blvd)/.test(text);
      const extractedAddress = hasStreet ? input : '123 Main Street';

      const updatedTicket = {
        ...currentTicket,
        property: propertyType,
        address: hasStreet ? input : currentTicket.address === 'Pending' ? '123 Main Street' : currentTicket.address,
        status: 'PROPERTY QUALIFIED',
      };

      return {
        response: `Thanks. I've noted that as a ${propertyType.toLowerCase()} property at ${updatedTicket.address}. Looking at our live calendar, we have openings tomorrow at 10:00 AM or 2:00 PM. Which time works best for you?`,
        nextStep: 3,
        updatedTicket,
        isCompleted: false,
      };
    }

    // Step 3: Time Selection & Final Confirmation
    if (step === 3) {
      const is10AM = /10|morning|first|earlier|ten|10:00|10am/.test(text);
      const is2PM = /2|afternoon|two|2:00|2pm|second/.test(text);
      const chosenTime = is2PM ? 'Tomorrow · 2:00 PM' : 'Tomorrow · 10:00 AM';

      const updatedTicket = {
        ...currentTicket,
        appointment: chosenTime,
        status: 'CONFIRMED & DISPATCHED',
      };

      return {
        response: `Perfect. You're confirmed for ${chosenTime} for your ${updatedTicket.serviceType}. A confirmation text has been dispatched to your number and our on-duty technician is notified. Have a wonderful day!`,
        nextStep: 4,
        updatedTicket,
        isCompleted: true,
      };
    }

    // Post completion
    return {
      response: "Your appointment is already confirmed on our schedule. Is there anything else I can help you with today?",
      nextStep: 4,
      updatedTicket: currentTicket,
      isCompleted: true,
    };
  }

  // ------------------------------------------------------------------------
  // 2. SECONDARY SCENARIO: SPA & WELLNESS
  // ------------------------------------------------------------------------
  if (currentScenario === SCENARIOS.SPA) {
    if (step === 0 || step === 1) {
      const updatedTicket = {
        ...currentTicket,
        issue: 'Deep Tissue / Swedish Massage',
        status: 'TIME QUALIFYING',
      };
      return {
        response: "I'd be happy to reserve that for you. We have openings this Saturday at 2:00 PM or 4:30 PM. Would you prefer a 60-minute or 90-minute session?",
        nextStep: 2,
        updatedTicket,
        isCompleted: false,
      };
    }

    if (step === 2) {
      const is90 = /90|ninety|hour and a half|1.5/.test(text);
      const duration = is90 ? '90-Minute Session' : '60-Minute Session';
      const updatedTicket = {
        ...currentTicket,
        duration,
        appointment: 'Saturday · 2:00 PM',
        status: 'RESERVATION CONFIRMED',
      };
      return {
        response: `Wonderful. I have reserved a ${duration} for you this Saturday at 2:00 PM. We'll send a reminder text the morning of your visit. Have a relaxing day!`,
        nextStep: 3,
        updatedTicket,
        isCompleted: true,
      };
    }

    return {
      response: "Your spa appointment is booked for Saturday at 2:00 PM. We look forward to seeing you!",
      nextStep: 3,
      updatedTicket: currentTicket,
      isCompleted: true,
    };
  }

  // ------------------------------------------------------------------------
  // 3. SECONDARY SCENARIO: DENTAL CARE
  // ------------------------------------------------------------------------
  if (currentScenario === SCENARIOS.DENTAL) {
    if (step === 0 || step === 1) {
      const isUrgent = /pain|ache|broken|emergency|swollen/.test(text);
      const updatedTicket = {
        ...currentTicket,
        issue: isUrgent ? 'Acute Dental Discomfort' : 'Comprehensive Cleaning & Checkup',
        priority: isUrgent ? 'HIGH' : 'Normal',
        status: 'QUALIFYING',
      };
      return {
        response: isUrgent
          ? "I'm sorry you're experiencing pain. We reserve emergency slots every day. Can you come in today at 3:15 PM?"
          : "We would love to get you in for a cleaning and exam. Does this Friday at 11:00 AM work with your schedule?",
        nextStep: 2,
        updatedTicket,
        isCompleted: false,
      };
    }

    if (step === 2) {
      const updatedTicket = {
        ...currentTicket,
        appointment: currentTicket.priority === 'HIGH' ? 'Today · 3:15 PM' : 'Friday · 11:00 AM',
        status: 'CONFIRMED ON SCHEDULE',
      };
      return {
        response: `Excellent. You're booked for ${updatedTicket.appointment}. Please remember to bring your insurance card and arrive five minutes early.`,
        nextStep: 3,
        updatedTicket,
        isCompleted: true,
      };
    }

    return {
      response: "Your dental appointment has been recorded. See you soon!",
      nextStep: 3,
      updatedTicket: currentTicket,
      isCompleted: true,
    };
  }

  // ------------------------------------------------------------------------
  // 4. SECONDARY SCENARIO: PLUMBING
  // ------------------------------------------------------------------------
  if (currentScenario === SCENARIOS.PLUMBING) {
    if (step === 0 || step === 1) {
      const isLeak = /leak|burst|flood|water everywhere|pipe/.test(text);
      const updatedTicket = {
        ...currentTicket,
        issue: isLeak ? 'Active Water Line Leak' : 'Drain Clearing / Fixture Repair',
        priority: isLeak ? 'HIGH' : 'Normal',
        status: 'INTAKE COMPLETE',
      };
      return {
        response: isLeak
          ? "If there's active water spraying, please shut off your main water valve right away. We have an on-call plumber who can arrive between 1:00 PM and 3:00 PM today. What is your street address?"
          : "We can certainly dispatch a technician to inspect and clear that. We have an opening today between 3:00 PM and 5:00 PM. What is your address?",
        nextStep: 2,
        updatedTicket,
        isCompleted: false,
      };
    }

    if (step === 2) {
      const updatedTicket = {
        ...currentTicket,
        address: input || '742 Evergreen Terrace',
        appointment: 'Today · 3:00 PM - 5:00 PM Window',
        status: 'DISPATCHED',
      };
      return {
        response: `Got it. Our plumber is assigned to ${updatedTicket.address} for today between 3:00 PM and 5:00 PM. You'll receive an SMS with technician tracking when they're en route.`,
        nextStep: 3,
        updatedTicket,
        isCompleted: true,
      };
    }

    return {
      response: "Your plumbing dispatch request is confirmed for today. Thank you for calling Rapid Plumbing!",
      nextStep: 3,
      updatedTicket: currentTicket,
      isCompleted: true,
    };
  }

  return {
    response: "I can help with that. Could you tell me a little more about what you need?",
    nextStep: 1,
    updatedTicket: currentTicket,
    isCompleted: false,
  };
}
