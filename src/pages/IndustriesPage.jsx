/**
 * FORMEXAI — Industries Page (/industries and /industries/:sector)
 * Shows how Formexai adapts its conversation, business rules, and actions
 * across Home Services, Healthcare, Real Estate, and Retail.
 */

import React from 'react';
import { useRouter, Link } from '../router.jsx';
import { IndustriesSection } from '../sections/IndustriesSection.jsx';

export function IndustriesPage({ onOpenDemoModal }) {
  const { currentPath } = useRouter();

  let sectorTitle = 'One Receptionist. Different Businesses.';
  let sectorSub = 'Every industry has different conversations, rules, and urgency requirements. Formexai adapts its conversation to fit how your customers actually talk.';

  if (currentPath.includes('hvac')) {
    sectorTitle = 'AI Receptionist for Home Services & HVAC';
    sectorSub = 'Never miss an emergency cooling outage or heating failure. Formexai triages symptoms, checks technician routes, and schedules arrivals in real time.';
  } else if (currentPath.includes('dental')) {
    sectorTitle = 'AI Receptionist for Dental & Healthcare Clinics';
    sectorSub = 'Empathetic patient intake, acute pain triage, and automated scheduling into your practice management schedule.';
  } else if (currentPath.includes('real-estate')) {
    sectorTitle = 'AI Receptionist for Real Estate & Brokerages';
    sectorSub = 'Capture high-intent buyers, qualify financing status, and book private property walkthroughs directly with your listing agents.';
  } else if (currentPath.includes('retail')) {
    sectorTitle = 'AI Receptionist for Retail & Local Commerce';
    sectorSub = 'Instant floor inventory lookups, 24-hour register hold reservations, and store policy answers with zero customer hold time.';
  }

  return (
    <div className="subpage-root">
      {/* Header */}
      <section className="subpage-hero-section">
        <div className="container text-center">
          <span className="eyebrow">Industry Solutions</span>
          <h1 className="subpage-display-title">{sectorTitle}</h1>
          <p className="subpage-lead-para">{sectorSub}</p>
          <div className="subpage-header-actions">
            <Link to="/get-started" className="btn btn-primary btn-md">
              Configure for Your Industry
            </Link>
            <Link to="/hear-formexai" className="btn btn-secondary btn-md">
              Hear Voice Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Explorer Component */}
      <IndustriesSection onOpenDemoModal={onOpenDemoModal} />

      {/* Reassurance Callout */}
      <section className="industry-bottom-banner">
        <div className="container">
          <div className="subpage-cta-box">
            <h2>Don't See Your Exact Specialty?</h2>
            <p>Formexai's underlying conversation engine is fully customizable. We build tailored intake flows for any service-based or appointment-driven business.</p>
            <Link to="/get-started" className="btn btn-primary btn-lg">
              Talk to Our Onboarding Team →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
