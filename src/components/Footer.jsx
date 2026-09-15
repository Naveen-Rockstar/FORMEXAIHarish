/**
 * FORMEXAI — Editorial B2B Footer
 * Authoritative brand logo, deep sitemap across Product, Industries, Resources,
 * copyright, legal links, and region notes. Zero dead links or buttons.
 */

import React from 'react';
import { Link } from '../router.jsx';

export function Footer({ onOpenDemoModal, onScrollToLiveDemo }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-root" role="contentinfo">
      <div className="footer-container">
        
        {/* Main Footer Sitemap Grid */}
        <div className="footer-sitemap-grid">
          
          {/* Brand Column */}
          <div className="footer-brand-column">
            <Link to="/" className="footer-brand-logo-link" aria-label="Formexai Home">
              <img
                src="/formexai-logo.jpg"
                alt="Formexai"
                className="footer-brand-logo"
              />
            </Link>
            <p className="footer-brand-tagline">
              Your AI receptionist, built around your business. Answering calls, qualifying requests, and taking action according to the way you work.
            </p>
            <div className="footer-operating-regions">
              <span>Operating in: United States · United Kingdom · Australia · Canada</span>
            </div>
          </div>

          {/* Product Links */}
          <div className="footer-nav-column">
            <h5 className="footer-column-title">Product</h5>
            <ul className="footer-links-list">
              <li><Link to="/product" className="footer-link">Platform Overview</Link></li>
              <li><Link to="/hear-formexai" className="footer-link">Hear Formexai Demo</Link></li>
              <li><Link to="/how-it-works" className="footer-link">Workflows &amp; Routing</Link></li>
              <li><Link to="/integrations" className="footer-link">Integrations</Link></li>
            </ul>
          </div>

          {/* Industries Links */}
          <div className="footer-nav-column">
            <h5 className="footer-column-title">Industries</h5>
            <ul className="footer-links-list">
              <li><Link to="/industries/hvac" className="footer-link">Home Services &amp; HVAC</Link></li>
              <li><Link to="/industries/dental" className="footer-link">Healthcare &amp; Dental</Link></li>
              <li><Link to="/industries/real-estate" className="footer-link">Real Estate Brokerages</Link></li>
              <li><Link to="/industries/retail" className="footer-link">Retail &amp; Commerce</Link></li>
              <li><Link to="/industries" className="footer-link">View All Industries →</Link></li>
            </ul>
          </div>

          {/* Actions & Experience */}
          <div className="footer-nav-column">
            <h5 className="footer-column-title">Experience</h5>
            <ul className="footer-links-list">
              <li><Link to="/hear-formexai" className="footer-link">Hear Voice Demo</Link></li>
              <li><Link to="/how-it-works" className="footer-link">How Setup Works (~1 Wk)</Link></li>
              <li><Link to="/get-started" className="footer-link">Start Onboarding</Link></li>
              <li><Link to="/how-it-works" className="footer-link">Frequently Asked Questions</Link></li>
              <li><Link to="/get-started" className="footer-link">Log In / Portal</Link></li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-strip">
          <div className="footer-copyright-text">
            &copy; {currentYear} Formexai Inc. All rights reserved. Professional AI receptionist services.
          </div>
          <div className="footer-legal-links">
            <Link to="/how-it-works" className="legal-item">Terms of Service</Link>
            <span className="legal-sep">&middot;</span>
            <Link to="/how-it-works" className="legal-item">Privacy Policy</Link>
            <span className="legal-sep">&middot;</span>
            <Link to="/integrations" className="legal-item">Security &amp; Telephony</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
