/**
 * FORMEXAI — Editorial B2B Footer
 * HVAC & Home Services Focus
 */

import React from 'react';
import { Link } from '../router.jsx';

export function Footer({ onOpenDemoModal }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-root" role="contentinfo">
      <div className="footer-container">
        
        {/* Main Footer Sitemap Grid */}
        <div className="footer-sitemap-grid">
          
          {/* Brand Column */}
          <div className="footer-brand-column">
            <Link to="/" className="footer-brand-logo-link" aria-label="FormexAI Home">
              <img
                src="/formexai-logo.jpg"
                alt="FormexAI Logo"
                className="footer-brand-logo"
              />
            </Link>
            <p className="footer-brand-tagline">
              The AI receptionist built for HVAC and home-service businesses. Answering every customer call, qualifying service requests, and booking jobs into your schedule 24/7.
            </p>
            <div className="footer-operating-regions">
              <span>Operating across North America · Carrier SIP forwarding compatible (*72)</span>
            </div>
          </div>

          {/* Product Links */}
          <div className="footer-nav-column">
            <h5 className="footer-column-title">Product</h5>
            <ul className="footer-links-list">
              <li><Link to="/product" className="footer-link">Product Overview</Link></li>
              <li><Link to="/hear-formexai" className="footer-link">Live Voice Demo</Link></li>
              <li><Link to="/how-it-works" className="footer-link">How It Works (7 Stages)</Link></li>
              <li><Link to="/integrations" className="footer-link">Integrations &amp; Webhooks</Link></li>
            </ul>
          </div>

          {/* Industries Links */}
          <div className="footer-nav-column">
            <h5 className="footer-column-title">Industries</h5>
            <ul className="footer-links-list">
              <li><Link to="/industries" className="footer-link">HVAC &amp; Heating/Cooling ★</Link></li>
              <li><Link to="/industries" className="footer-link">Plumbing Services</Link></li>
              <li><Link to="/industries" className="footer-link">Electrical Contracting</Link></li>
              <li><Link to="/industries" className="footer-link">Roofing &amp; Exteriors</Link></li>
              <li><Link to="/industries" className="footer-link">All Home-Service Verticals →</Link></li>
            </ul>
          </div>

          {/* Actions & Experience */}
          <div className="footer-nav-column">
            <h5 className="footer-column-title">Get Started</h5>
            <ul className="footer-links-list">
              <li><Link to="/hear-formexai" className="footer-link">Hear Voice Demo</Link></li>
              <li>
                <button
                  type="button"
                  className="footer-link-btn"
                  onClick={onOpenDemoModal}
                >
                  Book a Product Demo
                </button>
              </li>
              <li>
                <a
                  href="/#faq"
                  className="footer-link"
                  onClick={(e) => {
                    if (window.location.pathname === '/') {
                      e.preventDefault();
                      const el = document.getElementById('faq');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Contractor FAQs
                </a>
              </li>
              <li><Link to="/get-started" className="footer-link">Onboarding Consultation</Link></li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-strip">
          <div className="footer-copyright-text">
            &copy; {currentYear} FormexAI Inc. All rights reserved. Professional AI front desk software for home-service contractors.
          </div>
          <div className="footer-legal-links">
            <Link to="/how-it-works" className="legal-item">Terms of Service</Link>
            <span className="legal-sep">&middot;</span>
            <Link to="/how-it-works" className="legal-item">Privacy Policy</Link>
            <span className="legal-sep">&middot;</span>
            <Link to="/integrations" className="legal-item">Security &amp; Compliance</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
