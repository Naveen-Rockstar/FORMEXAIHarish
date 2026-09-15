/**
 * FORMEXAI — Result Section
 * Section 38: "More calls answered. More customers helped. Less repetitive work for your team."
 * Crisp, high-impact business outcomes before the final CTA.
 */

import React from 'react';
import { Link } from '../router.jsx';

export function ResultSection() {
  const outcomes = [
    {
      metric: '100%',
      title: 'Inbound Response Rate',
      desc: 'Every customer reaches an intelligent, polite receptionist within one ring. Zero hold time, zero missed opportunities.'
    },
    {
      metric: '0.4s',
      title: 'Average Pickup Time',
      desc: 'Under a half-second connection latency. Customers speak naturally without being trapped in numeric keypad phone trees.'
    },
    {
      metric: '24/7',
      title: 'Continuous Availability',
      desc: 'After-hours, weekend, and holiday call coverage that qualifies requests and books confirmed slots while your office is closed.'
    }
  ];

  return (
    <section className="result-section-root" aria-label="Business Results">
      <div className="container">
        
        <div className="result-header-cluster">
          <span className="eyebrow">The Business Result</span>
          <h2 className="result-headline">
            More calls answered. <br />
            More customers helped. <br />
            <span className="result-headline-accent">Less repetitive work for your team.</span>
          </h2>
          <p className="result-subhead">
            Formexai turns inbound phone chaos into predictable, organized business operations.
          </p>
        </div>

        {/* 3 Outcome Pillars */}
        <div className="result-pillars-grid">
          {outcomes.map((item, idx) => (
            <div key={idx} className="result-pillar-card">
              <div className="pillar-metric-tag">{item.metric}</div>
              <h3 className="pillar-title">{item.title}</h3>
              <p className="pillar-desc">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>

      {/* Downward Conduit into Final CTA */}
      <div className="section-conduit-strip" aria-hidden="true">
        <div className="conduit-line">
          <span className="conduit-glow-dot" />
        </div>
      </div>

    </section>
  );
}
