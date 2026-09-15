/**
 * FORMEXAI — Get Started / Onboarding Consultation Page (/get-started)
 * Zero payment processing, zero credit card requests.
 * Direct onboarding intake with clear next steps.
 */

import React, { useState } from 'react';
import { Button } from '../components/Button.jsx';
import { Link } from '../router.jsx';

export function GetStartedPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    industry: 'hvac',
    email: '',
    phone: '',
    volume: '50-150',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;
    setIsSubmitted(true);
  };

  return (
    <div className="subpage-root">
      
      {/* Header */}
      <section className="subpage-hero-section">
        <div className="container text-center">
          <span className="eyebrow">Get Started</span>
          <h1 className="subpage-display-title">
            Configure Formexai for Your Business
          </h1>
          <p className="subpage-lead-para">
            Tell us about your services and operating rules. Our specialists set up your receptionist, connect your calendar, and run test calls before your first live conversation.
          </p>
        </div>
      </section>

      {/* Intake Form Section */}
      <section className="onboarding-form-section">
        <div className="container">
          <div className="onboarding-form-card">
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="onboarding-form">
                <div className="form-header-row">
                  <h3>Receptionist Specification Intake</h3>
                  <span className="form-step-badge">Setup ~1 Week</span>
                </div>

                <div className="form-grid-two-col">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="e.g. Alex Turner"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="company" className="form-label">Business Name *</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="e.g. Northstar Heating & Air"
                      required
                    />
                  </div>
                </div>

                <div className="form-grid-two-col">
                  <div className="form-group">
                    <label htmlFor="industry" className="form-label">Industry / Field *</label>
                    <select
                      id="industry"
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
                    <label htmlFor="volume" className="form-label">Estimated Weekly Inbound Calls</label>
                    <select
                      id="volume"
                      name="volume"
                      value={formData.volume}
                      onChange={handleChange}
                      className="form-select"
                    >
                      <option value="under-50">Under 50 calls/week</option>
                      <option value="50-150">50 – 150 calls/week</option>
                      <option value="150-350">150 – 350 calls/week</option>
                      <option value="350-plus">350+ calls/week (High Volume)</option>
                    </select>
                  </div>
                </div>

                <div className="form-grid-two-col">
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Business Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="alex@yourbusiness.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Direct Phone Number (For test calls)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="(555) 000-0000"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="notes" className="form-label">Specific Services, Hours, or Transfer Instructions (Optional)</label>
                  <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    className="form-textarea"
                    rows="3"
                    placeholder="e.g. We use Google Calendar. Emergency calls outside 8am-6pm should be transferred to our on-call manager."
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" style={{ width: '100%' }}>
                  Submit Onboarding Request →
                </Button>

                <div className="form-reassurance">
                  <span>✓ Zero credit card required</span>
                  <span>✓ 100% human-guided onboarding</span>
                  <span>✓ Keep your existing phone number</span>
                </div>
              </form>
            ) : (
              <div className="submission-success-panel">
                <span className="success-icon">✓</span>
                <h3>Onboarding Request Received!</h3>
                <p>
                  Thank you, <strong>{formData.name}</strong>. Our onboarding team has received the specifications for <strong>{formData.company}</strong>.
                </p>
                <div className="next-steps-card">
                  <h4>What happens next:</h4>
                  <ol>
                    <li><strong>Review:</strong> Our onboarding specialist reviews your business rules and scheduling requirements.</li>
                    <li><strong>Voice Configuration:</strong> We generate your custom receptionist greeting and knowledge base.</li>
                    <li><strong>Test Call:</strong> We call your direct line so your team can hear and test Formexai live before connecting to customers.</li>
                  </ol>
                </div>
                <Link to="/" className="btn btn-primary btn-md">
                  Return to Home Page
                </Link>
              </div>
            )}

          </div>
        </div>
      </section>

    </div>
  );
}
