/**
 * FORMEXAI — Trust & Business Rules Section
 * Section: Product Truth & Contractor Control
 * Heading: Designed around your business rules.
 * 
 * Strict Product Trust (Zero fake testimonials, fake logos, fake ratings):
 * - Your services
 * - Your service area
 * - Your availability
 * - Your escalation rules
 * - Your FAQs
 * - Your booking workflow
 * - You approve before FormexAI goes live
 */

import React from 'react';

export function TrustSection() {
  const trustPillars = [
    {
      num: '01',
      title: 'Your Exact Services Catalog',
      detail: 'FormexAI only offers the services your company provides. If you do residential AC repair but not commercial chillers, FormexAI knows and sets expectations accordingly.'
    },
    {
      num: '02',
      title: 'Your Defined Service Territory',
      detail: 'Strict zip code or radius boundaries prevent wasted technician truck rolls. Callers outside your territory are politely notified and not booked.'
    },
    {
      num: '03',
      title: 'Your Real-Time Availability',
      detail: 'Direct two-way calendar sync guarantees FormexAI only offers arrival slots that match your actual dispatch board capacity. Never double-books.'
    },
    {
      num: '04',
      title: 'Your Custom Escalation Rules',
      detail: 'You decide what constitutes an emergency (e.g. water leaks, freezing weather without heat) and exactly which technician or manager gets transferred.'
    },
    {
      num: '05',
      title: 'Your Verified Business FAQs',
      detail: 'Answers diagnostic fees, licensing questions, and service warranties strictly from your pre-approved knowledge base. Never hallucinates rates or promises.'
    },
    {
      num: '06',
      title: 'You Approve Before Go-Live',
      detail: 'Before a single live customer call forwards to FormexAI, our onboarding team runs test calls with your staff. You inspect the audio and give final signoff.'
    }
  ];

  return (
    <section className="trust-section-root" id="trust" aria-label="Product Trust and Business Rules">
      <div className="container">
        
        {/* Section Header */}
        <div className="trust-header-cluster">
          <span className="eyebrow">Control &amp; Verification</span>
          <h2 className="trust-headline">
            Designed around your business rules.
          </h2>
          <p className="trust-subhead">
            We don't hand your hard-won customer relationships to an uncontrolled black box. FormexAI operates strictly within the boundaries, policies, and workflows you define.
          </p>
        </div>

        {/* 6 Product Trust Pillars */}
        <div className="trust-pillars-grid">
          {trustPillars.map((pillar) => (
            <div key={pillar.num} className="trust-pillar-card">
              <div className="pillar-num-row">
                <span className="pillar-num-badge">{pillar.num}</span>
                <span className="pillar-check">✓</span>
              </div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-detail">{pillar.detail}</p>
            </div>
          ))}
        </div>

        {/* Signoff Reassurance Banner */}
        <div className="trust-signoff-banner">
          <div className="signoff-shield-icon">🛡️</div>
          <div className="signoff-content">
            <h4>No surprises. Complete visibility.</h4>
            <p>
              Every conversation produces an instant audio recording and verbatim transcript. You can review calls, adjust receptionist rules, or update FAQs at any time from your management dashboard.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
