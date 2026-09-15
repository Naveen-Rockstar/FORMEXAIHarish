/**
 * FORMEXAI — Home Page
 * Master Single Flow Sequence (Section 5 & 25):
 * 1. HERO
 * 2. HOW FORMEXAI HELPS YOUR BUSINESS
 * 3. OPERATIONAL LIFECYCLE
 * 4. PRODUCT WORKSPACE
 * 5. IMPLEMENTATION PROCESS
 * 6. ECOSYSTEM & CONNECTIVITY
 * 7. FINAL CTA
 */

import React from 'react';
import { Hero } from '../sections/Hero.jsx';
import { BusinessHelpSection } from '../sections/BusinessHelpSection.jsx';
import { OperationalLifecycle } from '../sections/OperationalLifecycle.jsx';
import { ProductWorkspace } from '../sections/ProductWorkspace.jsx';
import { HowItWorks } from '../sections/HowItWorks.jsx';
import { Integrations } from '../sections/Integrations.jsx';
import { FinalCta } from '../sections/FinalCta.jsx';

export function HomePage() {
  return (
    <>
      {/* 1. HERO: Two-column product-led interface with live call state animation */}
      <Hero />

      {/* 2. HOW FORMEXAI HELPS YOUR BUSINESS: Signal flow into business action */}
      <BusinessHelpSection />

      {/* 3. OPERATIONAL LIFECYCLE: Continuous 5-stage journey rail */}
      <OperationalLifecycle />

      {/* 4. PRODUCT WORKSPACE: Live operations console showing state changes */}
      <ProductWorkspace />

      {/* 5. IMPLEMENTATION PROCESS: Vertical timeline with dynamic visual states */}
      <HowItWorks />

      {/* 6. ECOSYSTEM & CONNECTIVITY: Central connection hub graph */}
      <Integrations />

      {/* 7. FINAL CTA: Clean editorial call to action */}
      <FinalCta />
    </>
  );
}

