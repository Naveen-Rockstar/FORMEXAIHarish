import React from 'react';

export function ServiceTicketCard({ ticket, className = '' }) {
  if (!ticket) return null;

  const isHighPriority = ticket.priority === 'HIGH';

  return (
    <div className={`service-ticket-card ${isHighPriority ? 'ticket-urgent' : ''} ${className}`.trim()}>
      <div className="ticket-header">
        <div>
          <span className="ticket-label">LIVE SERVICE TICKET</span>
          <h4 className="ticket-title">{ticket.serviceType || 'Service Request'}</h4>
        </div>
        <span className={`status-pill ${isHighPriority ? 'status-pill-danger' : ticket.status.includes('CONFIRMED') || ticket.status.includes('DISPATCHED') ? 'status-pill-success' : 'status-pill-primary'}`}>
          {ticket.status || 'IN PROGRESS'}
        </span>
      </div>

      <div className="ticket-body">
        <div className="ticket-field-row">
          <span className="ticket-field-label">Detected Need</span>
          <span className="ticket-field-val">{ticket.issue || 'Pending analysis'}</span>
        </div>

        {ticket.property && ticket.property !== 'Pending' && (
          <div className="ticket-field-row">
            <span className="ticket-field-label">Property</span>
            <span className="ticket-field-val">{ticket.property}</span>
          </div>
        )}

        {ticket.address && ticket.address !== 'Pending' && (
          <div className="ticket-field-row">
            <span className="ticket-field-label">Service Address</span>
            <span className="ticket-field-val">{ticket.address}</span>
          </div>
        )}

        <div className="ticket-field-row">
          <span className="ticket-field-label">Priority Level</span>
          <span className={`ticket-field-val ${isHighPriority ? 'text-urgent' : ''}`}>
            {ticket.priority} {isHighPriority && '⚠️ Same-Day Emergency'}
          </span>
        </div>

        <div className="ticket-field-row highlight-row">
          <span className="ticket-field-label">Appointment</span>
          <span className="ticket-field-val appointment-time">
            {ticket.appointment || 'Selecting slot...'}
          </span>
        </div>

        {ticket.escalationReady && (
          <div className="ticket-escalation-banner">
            <span>● Human Escalation Flagged: Priority Dispatch Route</span>
          </div>
        )}
      </div>

      <div className="ticket-footer">
        <span>Google Calendar Sync: {ticket.appointment !== 'Not scheduled' ? '✓ Locked' : 'Pending'}</span>
        <span>CRM: Work Order #8842</span>
      </div>
    </div>
  );
}
