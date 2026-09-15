/**
 * FORMEXAI — Final Call to Action Section
 * Minimalist, powerful, high-conversion section.
 * "YOUR CUSTOMERS ARE CALLING. LET FORMEXAI HANDLE THE CONVERSATION."
 */

import React from 'react';
import { Link } from '../router.jsx';

export function FinalCta() {
  return (
    <section className="final-cta-root" aria-label="Final Call to Action">
      <div className="final-cta-container">
        
        <div className="final-cta-box">
          <div className="cta-badge-indicator">
            <span className="cta-bullet" />
            <span className="cta-badge-label">Start Your One-Week Onboarding</span>
          </div>

          <h2 className="final-cta-headline">
            Your customers are calling. <br />
            <span className="final-cta-emphasis">Let Formexai handle the conversation.</span>
          </h2>

          <p className="final-cta-supporting">
            A professional AI receptionist configured around the way your business works.
          </p>

          <div className="final-cta-buttons">
            <Link
              to="/get-started"
              className="btn btn-primary btn-lg"
            >
              Get Started
            </Link>
            <Link
              to="/hear-formexai"
              className="btn btn-secondary btn-lg"
            >
              Hear Formexai
            </Link>
          </div>

          <div className="final-cta-reassurance">
            <span>Setup &amp; testing in ~1 week</span>
            <span className="reassurance-divider">•</span>
            <span>Zero phone number changes</span>
            <span className="reassurance-divider">•</span>
            <span>Keep your team focused</span>
          </div>
        </div>

      </div>
    </section>
  );
}
