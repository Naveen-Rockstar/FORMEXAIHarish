/**
 * FORMEXAI — useConversationDemo Hook
 * Orchestrates two-speaker interactive conversations with VoiceEngine.
 * Manages call lifecycle: Connecting → Customer Speaking → Formexai Listening → Formexai Speaking → Action Taken → Call Completed.
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import { VoiceEngine } from '../utils/voiceEngine.js';

export const CONVERSATION_SCENARIOS = {
  hvac: {
    id: 'hvac',
    name: 'HVAC',
    businessName: 'Northstar Heating & Air',
    receptionistName: 'Sarah',
    scenarioTitle: 'Emergency AC Cooling Diagnostic',
    turns: [
      {
        id: 1,
        role: 'caller',
        speaker: 'Customer',
        text: "Hi, I need to schedule a service appointment for my AC. It's running, but it's not cooling properly.",
        action: 'Symptom Reported: AC Warm Air'
      },
      {
        id: 2,
        role: 'receptionist',
        speaker: 'Formexai (Sarah)',
        text: "I can help with that. Is the system blowing warm air continuously, or does it shut off after a few minutes?",
        action: 'Triage: Qualifying Symptom Severity'
      },
      {
        id: 3,
        role: 'caller',
        speaker: 'Customer',
        text: "It's blowing warm air continuously. The house is already 82 degrees.",
        action: 'Urgency: High (Elevated Indoor Temp)'
      },
      {
        id: 4,
        role: 'receptionist',
        speaker: 'Formexai (Sarah)',
        text: "I understand how uncomfortable that is. Looking at our technician routes, I have a priority opening tomorrow at 2:30 PM. Would you like me to book that for you?",
        action: 'Checking Dispatch Routes'
      },
      {
        id: 5,
        role: 'caller',
        speaker: 'Customer',
        text: "Yes, tomorrow at 2:30 PM works great.",
        action: 'Customer Confirmed Window'
      },
      {
        id: 6,
        role: 'receptionist',
        speaker: 'Formexai (Sarah)',
        text: "Perfect. You're confirmed for tomorrow at 2:30 PM. I've texted you arrival tracking details. Is there anything else I can assist with today?",
        action: 'Calendar Locked · SMS Sent'
      },
      {
        id: 7,
        role: 'caller',
        speaker: 'Customer',
        text: "No, that's all. Thank you!",
        action: 'Customer Satisfied'
      },
      {
        id: 8,
        role: 'receptionist',
        speaker: 'Formexai (Sarah)',
        text: "You're very welcome. Stay cool, and have a wonderful day!",
        action: 'Call Completed'
      }
    ],
    outcome: {
      title: 'Service Appointment Confirmed',
      details: [
        { label: 'Service', value: 'AC Diagnostic & Cooling Repair' },
        { label: 'Schedule', value: 'Tomorrow · 2:30 PM Window' },
        { label: 'Action Taken', value: 'Calendar Route Locked, SMS Sent, CRM Ticket Created' }
      ]
    }
  },

  dental: {
    id: 'dental',
    name: 'Dental',
    businessName: 'Brightline Dental Studio',
    receptionistName: 'Sarah',
    scenarioTitle: 'Acute Tooth Pain & New Patient Intake',
    turns: [
      {
        id: 1,
        role: 'caller',
        speaker: 'Customer',
        text: "Hi, I'd like to schedule an appointment. I've been having sharp tooth pain since last night.",
        action: 'Emergency Triage: Acute Dental Pain'
      },
      {
        id: 2,
        role: 'receptionist',
        speaker: 'Formexai (Sarah)',
        text: "I'm sorry to hear that you're in pain. We reserve emergency slots every afternoon. Are you a new patient with us?",
        action: 'Clinical Screening & Intake'
      },
      {
        id: 3,
        role: 'caller',
        speaker: 'Customer',
        text: "Yes, I'm a new patient.",
        action: 'New Patient Record Initiated'
      },
      {
        id: 4,
        role: 'receptionist',
        speaker: 'Formexai (Sarah)',
        text: "Understood. Dr. Chen has an emergency opening today at 3:15 PM to take an x-ray and relieve the pain. Shall I reserve that for you?",
        action: 'Emergency Buffer Slot Offered'
      },
      {
        id: 5,
        role: 'caller',
        speaker: 'Customer',
        text: "Yes, 3:15 PM today works great.",
        action: 'Patient Confirmed Chair Time'
      },
      {
        id: 6,
        role: 'receptionist',
        speaker: 'Formexai (Sarah)',
        text: "You're all set for 3:15 PM today. I've just texted you our digital intake form to fill out before you arrive. We'll take good care of you.",
        action: 'Chair Reserved · Digital Intake Dispatched'
      }
    ],
    outcome: {
      title: 'Emergency Exam Reserved',
      details: [
        { label: 'Patient', value: 'New Patient Intake' },
        { label: 'Provider', value: 'Dr. Chen · Operatory 2' },
        { label: 'Appointment', value: 'Today · 3:15 PM' },
        { label: 'Action Taken', value: 'PMS Schedule Synced, Intake Link Dispatched' }
      ]
    }
  },

  home_services: {
    id: 'home_services',
    name: 'Home Services',
    businessName: 'Apex Plumbing & Drains',
    receptionistName: 'Sarah',
    scenarioTitle: 'Plumbing Leak Intake & Dispatch',
    turns: [
      {
        id: 1,
        role: 'caller',
        speaker: 'Customer',
        text: "Hi, I have a leaking pipe under my kitchen sink and I need someone to come take a look.",
        action: 'Issue Identified: Plumbing Leak'
      },
      {
        id: 2,
        role: 'receptionist',
        speaker: 'Formexai (Sarah)',
        text: "I can help get that scheduled right away. Is it an active spray, or a steady drip into a container?",
        action: 'Safety Assessment'
      },
      {
        id: 3,
        role: 'caller',
        speaker: 'Customer',
        text: "It's a steady drip into a bucket, but getting faster.",
        action: 'Symptom: Managed Drip'
      },
      {
        id: 4,
        role: 'receptionist',
        speaker: 'Formexai (Sarah)',
        text: "Got it. We have a licensed plumber with an opening tomorrow morning between 9:00 AM and 11:00 AM. Does that work for your schedule?",
        action: 'Dispatch Window Offered'
      },
      {
        id: 5,
        role: 'caller',
        speaker: 'Customer',
        text: "Yes, tomorrow morning between 9:00 and 11:00 AM works well.",
        action: 'Window Accepted'
      },
      {
        id: 6,
        role: 'receptionist',
        speaker: 'Formexai (Sarah)',
        text: "You're confirmed for tomorrow morning. Our plumber will call 20 minutes before arriving. Have a great day!",
        action: 'Dispatch Locked · Arrival Alert Set'
      }
    ],
    outcome: {
      title: 'Plumbing Dispatch Scheduled',
      details: [
        { label: 'Service', value: 'Under-Sink Pipe Inspection & Repair' },
        { label: 'Window', value: 'Tomorrow · 9:00 AM – 11:00 AM' },
        { label: 'Action Taken', value: 'Work Order Dispatched to Field Technician' }
      ]
    }
  },

  retail: {
    id: 'retail',
    name: 'Retail',
    businessName: 'Maple & Main Outfitters',
    receptionistName: 'Sarah',
    scenarioTitle: 'Floor Inventory Lookup & 24-Hour Hold',
    turns: [
      {
        id: 1,
        role: 'caller',
        speaker: 'Customer',
        text: "Hi, I wanted to check if you have the Trailhead Waterproof Jacket in Forest Green, Men's Medium in stock?",
        action: 'SKU & Variant Query'
      },
      {
        id: 2,
        role: 'receptionist',
        speaker: 'Formexai (Sarah)',
        text: "Let me check our store inventory for you. Yes, we currently have two units of that jacket in Men's Medium on the floor.",
        action: 'POS Query: 2 Units Available'
      },
      {
        id: 3,
        role: 'caller',
        speaker: 'Customer',
        text: "That's great! Could you hold one behind the counter for me to pick up after work today?",
        action: 'Hold Request'
      },
      {
        id: 4,
        role: 'receptionist',
        speaker: 'Formexai (Sarah)',
        text: "I would be glad to hold it for you. May I have your name to put on the hold tag?",
        action: 'Hold Tag Details'
      },
      {
        id: 5,
        role: 'caller',
        speaker: 'Customer',
        text: "Julian Miller.",
        action: 'Customer Identity Captured'
      },
      {
        id: 6,
        role: 'receptionist',
        speaker: 'Formexai (Sarah)',
        text: "It's held behind the front register under Julian Miller until 7:00 PM closing today. I've texted you a digital pickup pass. See you this afternoon!",
        action: 'Register Hold Tag Created · SMS Sent'
      }
    ],
    outcome: {
      title: 'Item Held for In-Store Pickup',
      details: [
        { label: 'Item', value: 'Trailhead Waterproof Jacket (Forest Green / M)' },
        { label: 'Customer', value: 'Julian Miller' },
        { label: 'Hold Expiration', value: 'Today · 7:00 PM Closing' },
        { label: 'Action Taken', value: 'POS Hold Created, Barcode Text Dispatched' }
      ]
    }
  },

  real_estate: {
    id: 'real_estate',
    name: 'Real Estate',
    businessName: 'Oakwood Realty Group',
    receptionistName: 'Sarah',
    scenarioTitle: 'Listing Inquiry & Private Walkthrough',
    turns: [
      {
        id: 1,
        role: 'caller',
        speaker: 'Customer',
        text: "Hi, I'm interested in viewing one of your listed properties on 42 Oak Ridge Terrace.",
        action: 'Listing Inquiry: 42 Oak Ridge Terrace'
      },
      {
        id: 2,
        role: 'receptionist',
        speaker: 'Formexai (Sarah)',
        text: "Yes, 42 Oak Ridge Terrace is actively listed. Listing agent Marcus Vance has private viewing slots this Saturday at 10:30 AM or 2:00 PM. Which works best?",
        action: 'Showing Availability Verified'
      },
      {
        id: 3,
        role: 'caller',
        speaker: 'Customer',
        text: "Saturday at 10:30 AM would be perfect for us.",
        action: 'Preferred Window Selected'
      },
      {
        id: 4,
        role: 'receptionist',
        speaker: 'Formexai (Sarah)',
        text: "Wonderful. I have reserved the private walkthrough for you this Saturday at 10:30 AM. I've sent the property disclosure packet to your phone and alerted Marcus.",
        action: 'Showing Locked · Agent Briefed'
      },
      {
        id: 5,
        role: 'caller',
        speaker: 'Customer',
        text: "Thank you so much for the quick help.",
        action: 'Customer Satisfied'
      },
      {
        id: 6,
        role: 'receptionist',
        speaker: 'Formexai (Sarah)',
        text: "You're very welcome. Enjoy your walkthrough on Saturday!",
        action: 'Call Completed'
      }
    ],
    outcome: {
      title: 'Private Showing Confirmed',
      details: [
        { label: 'Property', value: '42 Oak Ridge Terrace ($890,000)' },
        { label: 'Showing Time', value: 'Saturday · 10:30 AM' },
        { label: 'Listing Agent', value: 'Marcus Vance (Assigned)' },
        { label: 'Action Taken', value: 'Showing Calendar Booked, Property Packet Delivered' }
      ]
    }
  }
};

export function useConversationDemo(defaultIndustry = 'hvac') {
  const [industryKey, setIndustryKey] = useState(defaultIndustry);
  const [callStatus, setCallStatus] = useState('IDLE'); // 'IDLE' | 'CONNECTING' | 'ACTIVE' | 'PAUSED' | 'COMPLETED'
  const [activeSpeaker, setActiveSpeaker] = useState('none'); // 'none' | 'customer' | 'receptionist'
  const [currentTurnIndex, setCurrentTurnIndex] = useState(-1);
  const [revealedTurns, setRevealedTurns] = useState([]);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  const scenario = CONVERSATION_SCENARIOS[industryKey] || CONVERSATION_SCENARIOS.hvac;

  const timerRef = useRef(null);
  const turnTimeoutRef = useRef(null);
  const isPlayingRef = useRef(false);

  // Stop everything cleanly
  const stopExecution = useCallback(() => {
    isPlayingRef.current = false;
    VoiceEngine.cancel();
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (turnTimeoutRef.current) {
      clearTimeout(turnTimeoutRef.current);
      turnTimeoutRef.current = null;
    }
    setActiveSpeaker('none');
  }, []);

  // Play dialogue turn by turn
  const playTurn = useCallback((turnIdx, turnsList) => {
    if (!isPlayingRef.current) return;

    if (turnIdx >= turnsList.length) {
      // Conversation completed
      setActiveSpeaker('none');
      setCallStatus('COMPLETED');
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    const currentTurn = turnsList[turnIdx];
    setCurrentTurnIndex(turnIdx);
    setActiveSpeaker(currentTurn.role === 'receptionist' ? 'receptionist' : 'customer');

    // Add to revealed transcript if not already present
    setRevealedTurns((prev) => {
      if (prev.some((t) => t.id === currentTurn.id)) return prev;
      return [...prev, currentTurn];
    });

    VoiceEngine.speakTurn({
      role: currentTurn.role,
      text: currentTurn.text,
      onStart: () => {
        if (!isPlayingRef.current) return;
        setActiveSpeaker(currentTurn.role === 'receptionist' ? 'receptionist' : 'customer');
      },
      onEnd: () => {
        if (!isPlayingRef.current) return;
        setActiveSpeaker('none');

        // Natural conversational pause between speakers (400ms)
        turnTimeoutRef.current = setTimeout(() => {
          if (isPlayingRef.current) {
            playTurn(turnIdx + 1, turnsList);
          }
        }, 450);
      }
    });
  }, []);

  // Start Call
  const startCall = useCallback(() => {
    stopExecution();
    setRevealedTurns([]);
    setCurrentTurnIndex(-1);
    setElapsedSeconds(0);
    setCallStatus('CONNECTING');
    isPlayingRef.current = true;

    // Start call duration timer
    timerRef.current = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);

    // Connecting delay (650ms)
    turnTimeoutRef.current = setTimeout(() => {
      if (!isPlayingRef.current) return;
      setCallStatus('ACTIVE');
      playTurn(0, scenario.turns);
    }, 700);
  }, [scenario.turns, stopExecution, playTurn]);

  // Pause Call
  const pauseCall = useCallback(() => {
    isPlayingRef.current = false;
    VoiceEngine.pause();
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (turnTimeoutRef.current) {
      clearTimeout(turnTimeoutRef.current);
      turnTimeoutRef.current = null;
    }
    setCallStatus('PAUSED');
  }, []);

  // Resume Call
  const resumeCall = useCallback(() => {
    if (callStatus !== 'PAUSED') return;
    isPlayingRef.current = true;
    setCallStatus('ACTIVE');

    // Resume duration timer
    timerRef.current = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);

    // If turn was in progress, re-play from currentTurnIndex or next
    const idx = currentTurnIndex >= 0 ? currentTurnIndex : 0;
    playTurn(idx, scenario.turns);
  }, [callStatus, currentTurnIndex, scenario.turns, playTurn]);

  // Restart Call
  const restartCall = useCallback(() => {
    startCall();
  }, [startCall]);

  // Select Industry
  const handleSelectIndustry = useCallback((newIndustryKey) => {
    stopExecution();
    setIndustryKey(newIndustryKey);
    setCallStatus('IDLE');
    setRevealedTurns([]);
    setCurrentTurnIndex(-1);
    setElapsedSeconds(0);
  }, [stopExecution]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopExecution();
    };
  }, [stopExecution]);

  const activeTurn = currentTurnIndex >= 0 && currentTurnIndex < scenario.turns.length
    ? scenario.turns[currentTurnIndex]
    : null;

  return {
    scenario,
    industryKey,
    callStatus,
    activeSpeaker,
    currentTurnIndex,
    revealedTurns,
    elapsedSeconds,
    activeTurn,
    startCall,
    pauseCall,
    resumeCall,
    restartCall,
    selectIndustry: handleSelectIndustry,
  };
}
