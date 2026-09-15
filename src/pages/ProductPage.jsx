/**
 * FORMEXAI — Product Overview Page (/product)
 * Detailed breakdown of the receptionist platform:
 * Capabilities, decision pipelines, and operations console.
 */

import React from 'react';
import { OperationalLifecycle } from '../sections/OperationalLifecycle.jsx';
import { ProductWorkspace } from '../sections/ProductWorkspace.jsx';
import { BusinessHelpSection } from '../sections/BusinessHelpSection.jsx';
import { Link } from '../router.jsx';

export function ProductPage({ onOpenDemoModal }) {
  return (
    <div className="subpage-root">
      
      {/* Page Header */}
      <section className="subpage-hero-section">
        <div className="container text-center">
          <span className="eyebrow">Platform Overview</span>
          <h1 className="subpage-display-title">
            The AI Receptionist Engineered for Business Workflows
          </h1>
          <p className="subpage-lead-para">
            Formexai answers inbound phone calls, triages customer needs, books appointments into your calendar, and transfers urgent situations to your staff.
          </p>
          <div className="subpage-header-actions">
            <Link to="/get-started" className="btn btn-primary btn-md">
              Get Started
            </Link>
            <Link to="/hear-formexai" className="btn btn-secondary btn-md">
              Hear Live Voice Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Universal Business Value */}
      <BusinessHelpSection />

      {/* Continuous 5-Stage Operational Lifecycle */}
      <OperationalLifecycle />

      {/* Operations Console Preview */}
      <ProductWorkspace />

      {/* Page Bottom CTA */}
      <section className="subpage-bottom-cta">
        <div className="container">
          <div className="subpage-cta-box">
            <h2>Start Answering Every Call Today</h2>
            <p>Our onboarding specialists configure your receptionist rules, calendar sync, and phone routing in ~1 week.</p>
            <Link to="/get-started" className="btn btn-primary btn-lg">
              Configure Formexai →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
