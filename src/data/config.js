/**
 * Formexai - Central Configuration
 * Application metadata, contact placeholders, confirmed integrations, and pricing model.
 */

export const CONFIG = {
  brand: {
    name: 'Formexai',
    tagline: 'AI-Powered Business Solutions',
    flagshipProduct: 'AI Voice Receptionist',
    initialMarket: 'HVAC Businesses',
    targetRegions: ['United States', 'United Kingdom', 'Australia'],
    establishedYear: 2025,
  },

  contact: {
    displayPhone: '+1 (800) FORMEX-AI',
    phoneNumber: null, // Assign active telecom number when available
    isLiveCallingEnabled: false,
    email: 'contact@formexai.com',
  },


  integrations: [
    {
      id: 'calendar',
      name: 'Google Calendar',
      category: 'Scheduling',
      description: 'Two-way slot synchronization and instant appointment booking without double-booking.'
    },
    {
      id: 'crm',
      name: 'CRM Systems',
      category: 'Customer Records',
      description: 'Automated contact creation, job ticket updates, and transcript logging directly in your CRM.'
    },
    {
      id: 'sheets',
      name: 'Google Sheets',
      category: 'Data Logging',
      description: 'Instant spreadsheet backup of caller details, timestamps, and service categories.'
    },
    {
      id: 'dispatch',
      name: 'Team Alerts',
      category: 'Dispatch Notifications',
      description: 'Instant SMS and app notifications to on-duty technicians and office dispatchers.'
    }
  ]
};
