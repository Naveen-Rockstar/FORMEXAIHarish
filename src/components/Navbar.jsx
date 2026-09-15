/**
 * FORMEXAI — Master Navigation Bar
 * Features:
 * - Actual uploaded Formexai Logo asset
 * - Real client-side routing with Link component
 * - Product & Industries dropdowns
 * - Zero dead buttons or broken links
 * - Polished mobile drawer that closes on navigation and restores scrolling
 */

import React, { useState, useEffect, useRef } from 'react';
import { Link, useRouter } from '../router.jsx';
import { Button } from './Button.jsx';

export function Navbar({ onOpenDemoModal }) {
  const { currentPath, navigate } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleMobileNav = (to) => {
    closeMobileMenu();
    navigate(to);
  };

  return (
    <header
      ref={navRef}
      className={`navbar-root ${isScrolled ? 'navbar-scrolled' : ''}`}
      role="banner"
    >
      <div className="navbar-container">
        
        {/* Actual Uploaded Formexai Logo Asset */}
        <Link
          to="/"
          className="brand-logo-link"
          aria-label="Formexai Home"
          onClick={closeMobileMenu}
        >
          <img
            src="/formexai-logo.jpg"
            alt="Formexai Logo"
            className="brand-logo-image"
          />
        </Link>

        {/* Desktop Primary Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          
          {/* Product Dropdown */}
          <div
            className="nav-dropdown-wrapper"
            onMouseEnter={() => setActiveDropdown('product')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              type="button"
              className={`nav-link nav-dropdown-trigger ${activeDropdown === 'product' ? 'active' : ''}`}
              aria-expanded={activeDropdown === 'product'}
              onClick={() => setActiveDropdown((prev) => (prev === 'product' ? null : 'product'))}
            >
              <span>Product</span>
              <svg className="chevron-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {activeDropdown === 'product' && (
              <div className="nav-dropdown-menu" role="menu">
                <Link
                  to="/product"
                  className="dropdown-item"
                  role="menuitem"
                  onClick={() => setActiveDropdown(null)}
                >
                  <div className="item-title">Product Overview</div>
                  <div className="item-desc">24/7 intelligent call answering &amp; scheduling</div>
                </Link>
                <Link
                  to="/hear-formexai"
                  className="dropdown-item"
                  role="menuitem"
                  onClick={() => setActiveDropdown(null)}
                >
                  <div className="item-title">Hear Formexai Demo</div>
                  <div className="item-desc">Listen to live two-speaker conversation calls</div>
                </Link>
                <Link
                  to="/how-it-works"
                  className="dropdown-item"
                  role="menuitem"
                  onClick={() => setActiveDropdown(null)}
                >
                  <div className="item-title">Workflows &amp; Routing</div>
                  <div className="item-desc">From first ring to booked appointment</div>
                </Link>
                <Link
                  to="/integrations"
                  className="dropdown-item"
                  role="menuitem"
                  onClick={() => setActiveDropdown(null)}
                >
                  <div className="item-title">Integrations</div>
                  <div className="item-desc">Connect with your CRM, calendar, and phone lines</div>
                </Link>
              </div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div
            className="nav-dropdown-wrapper"
            onMouseEnter={() => setActiveDropdown('industries')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              type="button"
              className={`nav-link nav-dropdown-trigger ${activeDropdown === 'industries' ? 'active' : ''}`}
              aria-expanded={activeDropdown === 'industries'}
              onClick={() => setActiveDropdown((prev) => (prev === 'industries' ? null : 'industries'))}
            >
              <span>Industries</span>
              <svg className="chevron-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {activeDropdown === 'industries' && (
              <div className="nav-dropdown-menu industries-grid-menu" role="menu">
                <Link
                  to="/industries/hvac"
                  className="dropdown-item"
                  role="menuitem"
                  onClick={() => setActiveDropdown(null)}
                >
                  <div className="item-title">Home Services &amp; HVAC</div>
                  <div className="item-desc">AC repair, plumbing triage, technician dispatch</div>
                </Link>
                <Link
                  to="/industries/dental"
                  className="dropdown-item"
                  role="menuitem"
                  onClick={() => setActiveDropdown(null)}
                >
                  <div className="item-title">Healthcare &amp; Dental</div>
                  <div className="item-desc">Patient intake, acute pain triage, chair booking</div>
                </Link>
                <Link
                  to="/industries/real-estate"
                  className="dropdown-item"
                  role="menuitem"
                  onClick={() => setActiveDropdown(null)}
                >
                  <div className="item-title">Real Estate &amp; Brokerage</div>
                  <div className="item-desc">Listing inquiries, showing booking, buyer triage</div>
                </Link>
                <Link
                  to="/industries/retail"
                  className="dropdown-item"
                  role="menuitem"
                  onClick={() => setActiveDropdown(null)}
                >
                  <div className="item-title">Retail &amp; Commerce</div>
                  <div className="item-desc">Inventory lookups, counter holds, store info</div>
                </Link>
                <Link
                  to="/industries"
                  className="dropdown-item view-all-item"
                  role="menuitem"
                  onClick={() => setActiveDropdown(null)}
                >
                  <div className="item-title">View All Industries →</div>
                </Link>
              </div>
            )}
          </div>

          <Link to="/how-it-works" className="nav-link">
            How It Works
          </Link>

          <Link to="/integrations" className="nav-link">
            Integrations
          </Link>

          <Link to="/hear-formexai" className="nav-link nav-highlight-link">
            Hear Formexai
          </Link>

        </nav>

        {/* Right Actions Cluster */}
        <div className="navbar-actions">
          
          <Link
            to="/get-started"
            className="nav-login-btn"
          >
            Log In
          </Link>

          <Link
            to="/get-started"
            className="btn btn-primary btn-sm"
          >
            Get Started
          </Link>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>

        </div>

      </div>

      {/* Mobile Menu Drawer (rendered only when explicitly opened) */}
      {mobileMenuOpen && (
        <div className="mobile-drawer drawer-open" role="dialog" aria-modal="true" aria-label="Mobile Navigation Menu">
          <div className="drawer-container">
            
            <div className="drawer-header">
              <Link to="/" onClick={closeMobileMenu}>
                <img
                  src="/formexai-logo.jpg"
                  alt="Formexai"
                  className="drawer-logo-image"
                />
              </Link>
              <button
                type="button"
                className="drawer-close-btn"
                onClick={closeMobileMenu}
                aria-label="Close menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <nav className="mobile-nav-links">
              <button
                type="button"
                className="mobile-nav-item"
                onClick={() => handleMobileNav('/product')}
              >
                <span>Product Overview</span>
                <span className="item-arrow">→</span>
              </button>

              <button
                type="button"
                className="mobile-nav-item"
                onClick={() => handleMobileNav('/hear-formexai')}
              >
                <span>Hear Formexai Demo</span>
                <span className="item-arrow">→</span>
              </button>

              <button
                type="button"
                className="mobile-nav-item"
                onClick={() => handleMobileNav('/industries')}
              >
                <span>Industries</span>
                <span className="item-arrow">→</span>
              </button>

              <button
                type="button"
                className="mobile-nav-item"
                onClick={() => handleMobileNav('/how-it-works')}
              >
                <span>How It Works</span>
                <span className="item-arrow">→</span>
              </button>

              <button
                type="button"
                className="mobile-nav-item"
                onClick={() => handleMobileNav('/integrations')}
              >
                <span>Integrations</span>
                <span className="item-arrow">→</span>
              </button>

              <button
                type="button"
                className="mobile-nav-item mobile-nav-cta"
                onClick={() => handleMobileNav('/get-started')}
              >
                <span>Get Started</span>
                <span className="item-arrow">→</span>
              </button>
            </nav>

          </div>
        </div>
      )}

    </header>
  );
}
