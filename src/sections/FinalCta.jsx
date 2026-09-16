/**
 * FORMEXAI — Final Call to Action Section
 * Heading: Stop sending customers to voicemail.
 * Primary CTA: Hear FormexAI
 * Secondary CTA: Book a Demo
 */

import React from 'react';

export function FinalCta({ onOpenDemoModal }) {
  const handleScrollToDemo = (e) => {
    e.preventDefault();
    const demoEl = document.getElementById('demo');
    if (demoEl) {
      demoEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/hear-formexai';
    }
  };

  return (
    <section className="final-cta-root" id="cta" aria-label="Final Call to Action">
      <div className="final-cta-container">
        
        <div className="final-cta-box">
          <div className="cta-badge-indicator">
            <span className="cta-bullet" />
            <span className="cta-badge-label">Stop Losing Revenue to Voicemail</span>
          </div>

          <h2 className="final-cta-headline">
            Stop sending customers to voicemail.<br />
            <span className="final-cta-emphasis">Turn missed calls into booked jobs.</span>
          </h2>

          <p className="final-cta-supporting">
            FormexAI answers your inbound lines 24/7, qualifies the repair, and books the appointment directly into your schedule — so your team stays focused on the job.
          </p>

          <div className="final-cta-buttons">
            <a
              href="#demo"
              onClick={handleScrollToDemo}
              className="btn btn-primary btn-lg"
            >
              Hear FormexAI
            </a>
            <button
              type="button"
              onClick={onOpenDemoModal}
              className="btn btn-secondary btn-lg"
            >
              Book a Demo
            </button>
          </div>

          <div className="final-cta-reassurance">
            <span>Under 1-second pickup</span>
            <span className="reassurance-divider">•</span>
            <span>Zero phone number changes</span>
            <span className="reassurance-divider">•</span>
            <span>You approve before go-live</span>
          </div>
        </div>

      </div>
    </section>
  );
}
