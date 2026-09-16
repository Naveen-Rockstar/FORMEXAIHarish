/**
 * FORMEXAI — Real HVAC Scenarios Section
 * Section: Specific Home-Service Scenarios
 * Heading: Built for the calls your team actually gets.
 * 
 * 4 Concrete Scenarios:
 * 1. AC Emergency ("My AC stopped working and it's extremely hot.")
 * 2. Service Call ("My system isn't cooling properly.")
 * 3. Replacement ("I need a quote for a new AC.")
 * 4. Maintenance ("I need my annual AC maintenance.")
 */

import React, { useState } from 'react';

export function RealHvacScenarios() {
  const [activeScenarioId, setActiveScenarioId] = useState('emergency');

  const scenarios = [
    {
      id: 'emergency',
      title: 'AC Emergency',
      tabLabel: '1. AC Emergency',
      quote: '"My AC stopped working and it’s extremely hot inside."',
      priority: 'HIGH PRIORITY',
      badgeClass: 'badge-emergency',
      detected: [
        { label: 'URGENCY DETECTION', value: 'High priority cooling outage (Heat threshold exceeded)' },
        { label: 'ADDRESS COLLECTION', value: '742 Highland Terrace, Dallas, TX (Verified territory)' },
        { label: 'SAFETY TRIAGE', value: 'Confirmed fan not spinning; advised breaker check' }
      ],
      resolutionTitle: 'Automated Team Escalation',
      resolutionDetail: 'FormexAI applies Rule #04 for emergency cooling failure. Immediately initiates warm telephone transfer to on-call service supervisor and logs priority alert to technician dispatch channel.'
    },
    {
      id: 'service',
      title: 'Standard Service Call',
      tabLabel: '2. Service Diagnostic',
      quote: '"My system isn’t cooling properly and blowing warm air."',
      priority: 'STANDARD REPAIR',
      badgeClass: 'badge-service',
      detected: [
        { label: 'SERVICE IDENTIFICATION', value: 'Diagnostic AC service (Compressor / Refrigerant check)' },
        { label: 'CUSTOMER QUALIFICATION', value: 'Residential single-family home; system age 8 years' },
        { label: 'TERRITORY CHECK', value: 'Inside primary 25-mile service boundary' }
      ],
      resolutionTitle: 'Direct Calendar Booking',
      resolutionDetail: 'FormexAI checks live technician route availability in Google Calendar. Books diagnostic arrival window for 2:30 PM today and texts confirmation directly to homeowner.'
    },
    {
      id: 'replacement',
      title: 'System Replacement',
      tabLabel: '3. Quote / Replacement',
      quote: '"I need a quote for a brand new air conditioning system."',
      priority: 'HIGH-VALUE OPPORTUNITY',
      badgeClass: 'badge-sales',
      detected: [
        { label: 'OPPORTUNITY VALUE', value: 'Complete HVAC system replacement ($8,000–$14,000 ticket)' },
        { label: 'TECHNICAL QUALIFICATION', value: '2,600 sqft home; existing R-22 system is 16 years old' },
        { label: 'CUSTOMER TIMELINE', value: 'Seeking installation before peak summer' }
      ],
      resolutionTitle: 'Sales Estimate Consultation Scheduled',
      resolutionDetail: 'FormexAI routes lead to the senior comfort advisor\'s calendar. Schedules a 60-minute in-home load calculation visit and creates a new opportunity record in CRM.'
    },
    {
      id: 'maintenance',
      title: 'Annual Tune-Up',
      tabLabel: '4. Routine Maintenance',
      quote: '"I need my annual spring AC maintenance tune-up."',
      priority: 'ROUTINE SERVICE',
      badgeClass: 'badge-maintenance',
      detected: [
        { label: 'SERVICE IDENTIFICATION', value: 'Seasonal 21-point precision cooling tune-up' },
        { label: 'AVAILABILITY MATCH', value: 'Optimized into existing neighborhood cluster route' },
        { label: 'MEMBERSHIP STATUS', value: 'Customer confirms annual service club membership' }
      ],
      resolutionTitle: 'Cluster Route Scheduled',
      resolutionDetail: 'FormexAI groups appointment with nearby morning jobs, locks Friday 9:00 AM slot, and dispatches calendar invite to customer with zero human phone time.'
    }
  ];

  const current = scenarios.find((s) => s.id === activeScenarioId) || scenarios[0];

  return (
    <section className="hvac-scenarios-section-root" id="scenarios" aria-label="Real HVAC Scenarios">
      <div className="container">
        
        {/* Section Header */}
        <div className="scenarios-header-cluster">
          <span className="eyebrow">Real Field Scenarios</span>
          <h2 className="scenarios-headline">
            Built for the calls your team actually gets.
          </h2>
          <p className="scenarios-subhead">
            Not a generic conversational chatbot. FormexAI is calibrated specifically for HVAC and home-service calls — identifying urgency, collecting equipment details, and taking decisive action.
          </p>
        </div>

        {/* 4-Scenario Interactive Container */}
        <div className="scenarios-interactive-frame">
          
          {/* Scenario Tab Switcher */}
          <div className="scenarios-tabs-bar" role="tablist" aria-label="HVAC Call Scenarios">
            {scenarios.map((scen) => {
              const isActive = scen.id === activeScenarioId;
              return (
                <button
                  key={scen.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`scenario-tab-item ${isActive ? 'tab-active' : ''}`}
                  onClick={() => setActiveScenarioId(scen.id)}
                >
                  <span className="scen-tab-title">{scen.tabLabel}</span>
                  <span className={`scen-mini-pill ${scen.badgeClass}`}>{scen.priority}</span>
                </button>
              );
            })}
          </div>

          {/* Scenario Active Showcase Display */}
          <div className="scenario-showcase-content">
            
            {/* Caller Utterance Speech Banner */}
            <div className="showcase-quote-strip">
              <span className="quote-mark">“</span>
              <p className="caller-speech-text">{current.quote}</p>
              <span className={`scenario-priority-badge ${current.badgeClass}`}>{current.priority}</span>
            </div>

            {/* Extracted Detection Grid */}
            <div className="showcase-detection-grid">
              <div className="grid-label-row">
                <span className="grid-title">WHAT FORMEXAI DETECTS &amp; EXTRACTS</span>
                <span className="grid-meta">Autonomous Classification</span>
              </div>

              <div className="detection-items-list">
                {current.detected.map((item, idx) => (
                  <div key={idx} className="detected-item-box">
                    <span className="detected-k">{item.label}</span>
                    <span className="detected-v">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Resolution Box */}
            <div className="showcase-resolution-box">
              <div className="res-header">
                <span className="res-icon">⚡</span>
                <span className="res-title">OPERATIONAL OUTCOME: {current.resolutionTitle}</span>
              </div>
              <p className="res-body">{current.resolutionDetail}</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
