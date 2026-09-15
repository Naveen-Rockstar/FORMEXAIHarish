/**
 * FORMEXAI — Application Root
 * High-performance client-side routed architecture:
 * - Full HTML5 History API routing (/hear-formexai, /product, /industries, /how-it-works, /integrations, /get-started)
 * - Single master Navbar & Editorial Footer
 * - Zero payment, pricing, or checkout code
 */

import React, { useState } from 'react';
import { RouterProvider, useRouter, Link } from './router.jsx';
import { Navbar } from './components/Navbar.jsx';
import { Footer } from './components/Footer.jsx';
import { DemoModal } from './components/DemoModal.jsx';

// Pages
import { HomePage } from './pages/HomePage.jsx';
import { HearFormexaiPage } from './pages/HearFormexaiPage.jsx';
import { ProductPage } from './pages/ProductPage.jsx';
import { IndustriesPage } from './pages/IndustriesPage.jsx';
import { HowItWorksPage } from './pages/HowItWorksPage.jsx';
import { IntegrationsPage } from './pages/IntegrationsPage.jsx';
import { GetStartedPage } from './pages/GetStartedPage.jsx';

function AppContent() {
  const { currentPath, navigate } = useRouter();
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleOpenDemoModal = () => setIsDemoModalOpen(true);
  const handleCloseDemoModal = () => setIsDemoModalOpen(false);

  // Route Resolution
  const renderCurrentPage = () => {
    if (currentPath === '/hear-formexai') {
      return <HearFormexaiPage onOpenDemoModal={handleOpenDemoModal} />;
    }
    if (currentPath === '/product') {
      return <ProductPage onOpenDemoModal={handleOpenDemoModal} />;
    }
    if (currentPath === '/industries' || currentPath.startsWith('/industries/')) {
      return <IndustriesPage onOpenDemoModal={handleOpenDemoModal} />;
    }
    if (currentPath === '/how-it-works') {
      return <HowItWorksPage onOpenDemoModal={handleOpenDemoModal} />;
    }
    if (currentPath === '/integrations') {
      return <IntegrationsPage onOpenDemoModal={handleOpenDemoModal} />;
    }
    if (currentPath === '/get-started') {
      return <GetStartedPage />;
    }
    // Default Home
    return <HomePage onOpenDemoModal={handleOpenDemoModal} />;
  };

  return (
    <div className="app-container">
      {/* Primary Global Header */}
      <Navbar onOpenDemoModal={handleOpenDemoModal} />

      {/* Dynamic Main Page Content */}
      <main id="main-content" tabIndex="-1">
        {renderCurrentPage()}
      </main>

      {/* Global Editorial Footer */}
      <Footer onOpenDemoModal={handleOpenDemoModal} />

      {/* Onboarding / Configuration Intake Modal Dialog */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={handleCloseDemoModal}
      />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}

