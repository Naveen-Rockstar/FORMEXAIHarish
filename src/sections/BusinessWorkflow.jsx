/**
 * FORMEXAI — Business Workflow Section
 * Section: Operational Comparison
 * Heading: The difference between a lost lead and a booked job.
 * 
 * Side-by-Side Comparison:
 * BEFORE:
 * Customer calls → Team is busy → Call missed → Customer moves on
 * 
 * WITH FORMEXAI:
 * Customer calls → FormexAI answers → Understands request → Qualifies customer →
 * Books / transfers → Team receives details → Job opportunity continues
 */

import React from 'react';

export function BusinessWorkflow() {
  const beforeSteps = [
    { step: '01', title: 'Customer calls', detail: 'Homeowner calls during a hot afternoon or weekend with an urgent repair need.' },
    { step: '02', title: 'Team is busy', detail: 'Front desk is already on another line; technicians are working in attics.' },
    { step: '03', title: 'Call rolls to voicemail', detail: 'Automated beep asks the caller to leave a message and wait for a callback.' },
    { step: '04', title: 'Customer moves on', detail: '80% of residential callers do not leave a message — they call your nearest competitor.' }
  ];

  const afterSteps = [
    { step: '01', title: 'Customer calls', detail: 'Homeowner calls your business phone number at any hour of the day or night.' },
    { step: '02', title: 'FormexAI answers', detail: 'Picks up in under one second with your custom brand greeting and professional tone.' },
    { step: '03', title: 'Understands request', detail: 'Identifies service type, equipment problem, urgency, and homeowner details.' },
    { step: '04', title: 'Qualifies customer', detail: 'Checks service boundary, equipment age, and residential qualification rules.' },
    { step: '05', title: 'Books or transfers', detail: 'Locks confirmed 2:30 PM slot into your calendar, or escalates emergencies directly.' },
    { step: '06', title: 'Team receives details', detail: 'Complete call audio, transcript, and work order details sent to your dispatch board.' },
    { step: '07', title: 'Job opportunity continues', detail: 'Customer receives confirmation SMS; technician arrives to a qualified job.' }
  ];

  return (
    <section className="workflow-comparison-section-root" id="workflow" aria-label="Before and After Workflow">
      <div className="container">
        
        {/* Section Header */}
        <div className="workflow-header-cluster">
          <span className="eyebrow">Operational Comparison</span>
          <h2 className="workflow-headline">
            The difference between a lost lead and a booked job.
          </h2>
          <p className="workflow-subhead">
            Most HVAC marketing dollars are lost after the phone rings. See how FormexAI stops caller leakage and protects your revenue:
          </p>
        </div>

        {/* Side-by-Side Comparison Container */}
        <div className="comparison-columns-grid">
          
          {/* Left: Without FormexAI (Before) */}
          <div className="comparison-col before-col">
            <div className="col-header-box">
              <span className="col-status-tag red-tag">WITHOUT FORMEXAI</span>
              <h3 className="col-title">The Typical Missed-Call Cycle</h3>
              <p className="col-desc">How service businesses leak revenue during busy hours and after 5:00 PM.</p>
            </div>

            <div className="flow-steps-stack">
              {beforeSteps.map((s, idx) => (
                <div key={idx} className="flow-step-item step-negative">
                  <div className="step-num-col">
                    <span className="step-badge">{s.step}</span>
                    {idx < beforeSteps.length - 1 && <span className="step-line" />}
                  </div>
                  <div className="step-body-col">
                    <h4 className="step-title">{s.title}</h4>
                    <p className="step-detail">{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-outcome-banner outcome-negative">
              <span className="outcome-icon">✕</span>
              <div className="outcome-text">
                <strong>Result: Lost Service Opportunity</strong>
                <span>Homeowner hires another company. Marketing spend wasted.</span>
              </div>
            </div>
          </div>

          {/* Right: With FormexAI (After) */}
          <div className="comparison-col after-col">
            <div className="col-header-box">
              <span className="col-status-tag green-tag">WITH FORMEXAI</span>
              <h3 className="col-title">The Continuous Intake Pipeline</h3>
              <p className="col-desc">How modern home-service companies capture every caller automatically.</p>
            </div>

            <div className="flow-steps-stack">
              {afterSteps.map((s, idx) => (
                <div key={idx} className="flow-step-item step-positive">
                  <div className="step-num-col">
                    <span className="step-badge">{s.step}</span>
                    {idx < afterSteps.length - 1 && <span className="step-line active-line" />}
                  </div>
                  <div className="step-body-col">
                    <h4 className="step-title">{s.title}</h4>
                    <p className="step-detail">{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-outcome-banner outcome-positive">
              <span className="outcome-icon">✓</span>
              <div className="outcome-text">
                <strong>Result: Qualified &amp; Booked Job</strong>
                <span>Calendar slot filled, SMS dispatched, dispatcher briefed.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
