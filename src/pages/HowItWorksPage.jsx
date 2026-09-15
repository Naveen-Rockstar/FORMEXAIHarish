/**
 * FORMEXAI — How It Works Page (/how-it-works)
 * Detailed guide on onboarding, calendar connection, phone forwarding, and testing.
 */

import React from 'react';
import { HowItWorks } from '../sections/HowItWorks.jsx';
import { BusinessHelpSection } from '../sections/BusinessHelpSection.jsx';
import { FaqSection } from '../sections/FaqSection.jsx';
import { Link } from '../router.jsx';

export function HowItWorksPage({ onOpenDemoModal }) {
  return (
    <div className="subpage-root">
      {/* Header */}
      <section className="subpage-hero-section">
        <div className="container text-center">
          <span className="eyebrow">Implementation Guide</span>
          <h1 className="subpage-display-title">
            From Setup to Live Calls in One Week
          </h1>
          <p className="subpage-lead-para">
            Zero changes to your phone numbers. We configure your knowledge base, connect your calendar and CRM, and conduct verified test calls before launching.
          </p>
          <div className="subpage-header-actions">
            <Link to="/get-started" className="btn btn-primary btn-md">
              Start One-Week Onboarding
            </Link>
            <Link to="/hear-formexai" className="btn btn-secondary btn-md">
              Hear Live Voice Demo
            </Link>
          </div>
        </div>
      </section>

      {/* 4 Steps */}
      <HowItWorks />

      {/* How it Helps */}
      <BusinessHelpSection />

      {/* FAQ */}
      <FaqSection />

      {/* Bottom CTA */}
      <section className="subpage-bottom-cta">
        <div className="container">
          <div className="subpage-cta-box">
            <h2>Ready to Never Miss Another Call?</h2>
            <p>Our team handles your custom voice setup, calendar connection, and staff test calls.</p>
            <Link to="/get-started" className="btn btn-primary btn-lg">
              Get Started with Formexai →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
