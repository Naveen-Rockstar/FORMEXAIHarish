/**
 * FORMEXAI — Demo / Get Started Modal
 * Accessible dialog for booking guided onboarding or requesting a custom receptionist configuration.
 * Multi-industry selector, zero fake hype.
 */

import React, { useState, useEffect, useRef } from 'react';
import { Button } from './Button.jsx';

export function DemoModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    industry: 'hvac',
    email: '',
    phone: '',
    callVolume: '50-150',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', company: '', industry: 'hvac', email: '', phone: '', callVolume: '50-150' });
      onClose();
    }, 2800);
  };

  return (
    <div
      className="modal-backdrop open"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-dialog" ref={modalRef}>
        <button
          type="button"
          className="modal-close"
          aria-label="Close dialog"
          onClick={onClose}
        >
          ✕
        </button>

        {!isSubmitted ? (
          <div>
            <span className="eyebrow" style={{ marginBottom: 'var(--space-2)' }}>
              Onboarding &amp; Configuration
            </span>
            <h3 id="modal-title" style={{ marginBottom: 'var(--space-2)', fontSize: 'var(--font-size-2xl)', letterSpacing: '-0.02em' }}>
              Configure Formexai for Your Business
            </h3>
            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-6)' }}>
              Tell us about your business services and call flow. We'll set up your custom receptionist, connect your calendar, and test before launch (~1 week).
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="modal-name" className="form-label">Full Name *</label>
                <input
                  type="text"
                  id="modal-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="e.g. Alex Turner"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="modal-company" className="form-label">Business Name *</label>
                <input
                  type="text"
                  id="modal-company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="e.g. Northstar Heating & Air"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="modal-industry" className="form-label">Industry Sector *</label>
                <select
                  id="modal-industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  <option value="hvac">Home Services &amp; HVAC</option>
                  <option value="plumbing">Plumbing &amp; Mechanical</option>
                  <option value="dental">Healthcare &amp; Dental</option>
                  <option value="real-estate">Real Estate &amp; Brokerage</option>
                  <option value="legal">Legal &amp; Professional Services</option>
                  <option value="automotive">Automotive &amp; Fleet</option>
                  <option value="retail">Retail &amp; Local Commerce</option>
                  <option value="hospitality">Hospitality &amp; Dining</option>
                  <option value="other">Other Appointment Business</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="modal-email" className="form-label">Business Email *</label>
                <input
                  type="email"
                  id="modal-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="alex@yourbusiness.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="modal-phone" className="form-label">Phone Number (For test call)</label>
                <input
                  type="tel"
                  id="modal-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="(555) 000-0000"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                style={{ width: '100%', marginTop: 'var(--space-4)' }}
              >
                Request Custom Configuration →
              </Button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: 'var(--space-8) 0' }}>
            <span className="status-pill status-pill-success" style={{ marginBottom: 'var(--space-4)' }}>
              Configuration Request Received
            </span>
            <h4 style={{ fontSize: 'var(--font-size-xl)', marginBottom: 'var(--space-2)' }}>
              Thank You, {formData.name || 'there'}!
            </h4>
            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', maxWidth: '360px', margin: '0 auto' }}>
              Our onboarding specialist will review your business specifications and reach out with your custom voice setup and test schedule.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
