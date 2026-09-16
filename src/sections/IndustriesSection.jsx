/**
 * FORMEXAI — Industries Section
 * Section: Industry Positioning
 * Heading: Built for HVAC. Designed for home services.
 * 
 * Primary: HVAC (Flagship)
 * Secondary: Plumbing, Electrical, Roofing, General Home Services
 */

import React, { useState } from 'react';

export function IndustriesSection() {
  const [activeVertical, setActiveVertical] = useState('hvac');

  const verticals = [
    {
      id: 'hvac',
      name: 'HVAC & Cooling ★',
      flagship: true,
      tagline: 'Built specifically for heating and air conditioning contractors.',
      callsPitched: [
        'AC blowing warm air in peak summer heat',
        'Furnace not igniting during winter freeze',
        'Seasonal 21-point preventative maintenance tune-up',
        'New equipment replacement quote and estimate booking'
      ],
      whyHomeServices: 'HVAC tickets average $350–$1,200 for repairs and $8,000+ for replacements. Missing even two calls a day during a heat wave costs thousands in unrecoverable revenue.'
    },
    {
      id: 'plumbing',
      name: 'Plumbing Services',
      flagship: false,
      tagline: 'Triage emergency leaks and dispatch scheduled drain clearing.',
      callsPitched: [
        'Active water pipe burst requiring immediate main valve shutoff',
        'Backed-up main sewer line or toilet overflow',
        'Water heater leaking or failing to produce hot water',
        'Scheduled fixture installation and camera inspection'
      ],
      whyHomeServices: 'Plumbing emergencies require immediate reassurance and urgent on-call dispatch before water damages the home.'
    },
    {
      id: 'electrical',
      name: 'Electrical Contracting',
      flagship: false,
      tagline: 'Qualify panel upgrades, circuit diagnostic calls, and service visits.',
      callsPitched: [
        'Breaker tripping constantly under HVAC/appliance load',
        'Burning electrical smell or sparking outlet triage',
        'Whole-home generator quote or EV charger installation',
        '200-amp panel upgrade consultation scheduling'
      ],
      whyHomeServices: 'Safety-critical triage separates hazardous panel failures from routine lighting upgrades.'
    },
    {
      id: 'roofing',
      name: 'Roofing & Exteriors',
      flagship: false,
      tagline: 'Handle storm damage spikes and schedule roof inspections.',
      callsPitched: [
        'Active roof leak dripping through ceiling drywall after heavy rain',
        'Hail or wind storm damage inspection request',
        'Full roof replacement estimate scheduling',
        'Gutter cleaning and preventative inspection booking'
      ],
      whyHomeServices: 'Storm surges create 50+ calls in an afternoon. FormexAI qualifies address, insurance claim status, and roof age automatically.'
    }
  ];

  const current = verticals.find((v) => v.id === activeVertical) || verticals[0];

  return (
    <section className="industries-section-root" id="industries" aria-label="Industries Focus">
      <div className="container">
        
        {/* Section Header */}
        <div className="industries-header-cluster">
          <span className="eyebrow">Industry Focus</span>
          <h2 className="industries-headline">
            Built for HVAC.<br />
            <span className="industries-headline-accent">Designed for home services.</span>
          </h2>
          <p className="industries-subhead">
            We don't try to build a receptionist for dentists, lawyers, and dog groomers all at once. FormexAI is built for the dispatch rhythms, equipment problems, and urgent calls of the trades.
          </p>
        </div>

        {/* Vertical Tabs Switcher */}
        <div className="industries-tabs-nav" role="tablist" aria-label="Home Service Verticals">
          {verticals.map((v) => {
            const isActive = v.id === activeVertical;
            return (
              <button
                key={v.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`vertical-tab-btn ${isActive ? 'tab-active' : ''}`}
                onClick={() => setActiveVertical(v.id)}
              >
                <span>{v.name}</span>
                {v.flagship && <span className="flagship-mini-badge">FLAGSHIP</span>}
              </button>
            );
          })}
        </div>

        {/* Active Vertical Deep Card */}
        <div className="vertical-detail-card">
          <div className="vertical-detail-grid">
            
            {/* Left: Common Call Types Handled */}
            <div className="vertical-calls-col">
              <span className="v-tag">{current.name.toUpperCase()}</span>
              <h3 className="v-tagline">{current.tagline}</h3>
              
              <div className="v-calls-box">
                <span className="v-box-title">FREQUENT CALL TYPES HANDLED:</span>
                <ul className="v-calls-list">
                  {current.callsPitched.map((call, idx) => (
                    <li key={idx} className="v-call-item">
                      <span className="v-bullet">●</span>
                      <span>"{call}"</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Operational Rationale & ROI */}
            <div className="vertical-impact-col">
              <div className="v-impact-card">
                <div className="impact-head">
                  <span className="impact-icon">💼</span>
                  <span className="impact-title">OPERATIONAL REALITY</span>
                </div>
                <p className="impact-body">{current.whyHomeServices}</p>
                <div className="impact-footer">
                  <span className="check-green">✓</span>
                  <span>Configured with trade-specific equipment terminology and service codes</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
