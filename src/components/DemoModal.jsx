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
    notes: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your name';
    }
    if (!formData.company.trim()) {
      errs.company = 'Please enter your business name';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please enter your work email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    if (formData.phone.trim() && !/^[\d\s()+-]{7,}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate realistic async network request with client-side persistence
    setTimeout(() => {
      try {
        const existing = JSON.parse(localStorage.getItem('formexai_demo_leads') || '[]');
        existing.push({
          ...formData,
          submittedAt: new Date().toISOString(),
        });
        localStorage.setItem('formexai_demo_leads', JSON.stringify(existing));
      } catch {
        // Safe fallback if local storage is restricted
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 650);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      company: '',
      industry: 'hvac',
      email: '',
      phone: '',
      callVolume: '50-150',
      notes: '',
    });
    setErrors({});
    onClose();
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
              HVAC &amp; Home Services Consultation
            </span>
            <h3 id="modal-title" style={{ marginBottom: 'var(--space-2)', fontSize: 'var(--font-size-2xl)', letterSpacing: '-0.02em' }}>
              Book a FormexAI Product Demo
            </h3>
            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-6)' }}>
              See how FormexAI answers calls, qualifies service requests, and books jobs directly into your dispatch workflow.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="modal-name" className="form-label">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="modal-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`form-input ${errors.name ? 'input-error' : ''}`}
                  placeholder="e.g. David Miller"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'modal-name-error' : undefined}
                  required
                />
                {errors.name && (
                  <span id="modal-name-error" className="field-error-msg">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="modal-company" className="form-label">
                  Company / Business Name *
                </label>
                <input
                  type="text"
                  id="modal-company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className={`form-input ${errors.company ? 'input-error' : ''}`}
                  placeholder="e.g. Northstar Heating & Air"
                  aria-invalid={!!errors.company}
                  aria-describedby={errors.company ? 'modal-company-error' : undefined}
                  required
                />
                {errors.company && (
                  <span id="modal-company-error" className="field-error-msg">
                    {errors.company}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="modal-industry" className="form-label">
                  Primary Service Vertical *
                </label>
                <select
                  id="modal-industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="form-select"
                  required
                >
                  <option value="hvac">HVAC (Heating, Ventilation &amp; AC) ★</option>
                  <option value="plumbing">Plumbing Services</option>
                  <option value="electrical">Electrical Contracting</option>
                  <option value="roofing">Roofing &amp; Exteriors</option>
                  <option value="other-home-services">Other Home Services</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="modal-email" className="form-label">
                  Work Email *
                </label>
                <input
                  type="email"
                  id="modal-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-input ${errors.email ? 'input-error' : ''}`}
                  placeholder="david@northstarhvac.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'modal-email-error' : undefined}
                  required
                />
                {errors.email && (
                  <span id="modal-email-error" className="field-error-msg">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="modal-phone" className="form-label">
                  Phone Number (For test call)
                </label>
                <input
                  type="tel"
                  id="modal-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`form-input ${errors.phone ? 'input-error' : ''}`}
                  placeholder="(214) 555-0182"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? 'modal-phone-error' : undefined}
                />
                {errors.phone && (
                  <span id="modal-phone-error" className="field-error-msg">
                    {errors.phone}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="modal-volume" className="form-label">
                  Estimated Monthly Inbound Calls
                </label>
                <select
                  id="modal-volume"
                  name="callVolume"
                  value={formData.callVolume}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="under-50">Under 50 calls/month</option>
                  <option value="50-150">50 – 150 calls/month</option>
                  <option value="150-500">150 – 500 calls/month</option>
                  <option value="500+">500+ calls/month</option>
                </select>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                style={{ width: '100%', marginTop: 'var(--space-4)', minHeight: '48px' }}
              >
                {isSubmitting ? 'Processing Request...' : 'Schedule 15-Minute Demo →'}
              </Button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: 'var(--space-6) 0' }}>
            <span className="status-pill status-pill-success" style={{ marginBottom: 'var(--space-4)' }}>
              ✓ Demo Request Recorded
            </span>
            <h4 style={{ fontSize: 'var(--font-size-xl)', marginBottom: 'var(--space-2)' }}>
              Thank You, {formData.name || 'there'}!
            </h4>
            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)', maxWidth: '400px', margin: '0 auto 16px auto', lineHeight: 1.5 }}>
              Your inquiry for <strong>{formData.company}</strong> has been saved. Our team will reach out to schedule your live voice walkthrough and calendar binding.
            </p>
            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '8px', padding: '12px', fontSize: '0.78rem', color: '#64748B', maxWidth: '380px', margin: '0 auto 20px auto' }}>
              ℹ️ <strong>System Note:</strong> Demo data is stored locally for this browser session. Need immediate assistance? Call us directly or test the live voice demo on this page.
            </div>
            <Button
              type="button"
              variant="outline"
              size="md"
              onClick={handleReset}
            >
              Close Window
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
