import React, { useState, useEffect } from 'react';
import DeviceFrameWrapper from './components/DeviceFrameWrapper';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustHighlights from './components/TrustHighlights';
import ServicesGrid from './components/ServicesGrid';
import RiskIntelligence from './components/RiskIntelligence';
import ComplianceProtocols from './components/ComplianceProtocols';
import BookingConsultation from './components/BookingConsultation';
import FaqSection from './components/FaqSection';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import ShopTestsModal from './components/ShopTestsModal';

// Separate Service Pages
import WhatWeDo from './pages/WhatWeDo';
import DrugTesting from './pages/DrugTesting';
import DnaTesting from './pages/DnaTesting';
import AboutUs from './pages/AboutUs';
import WorkplaceSolutions from './pages/WorkplaceSolutions';
import WhyUpic from './pages/WhyUpic';

function App() {
  // Mode toggle: 'app' (Mobile & Tablet Experience) vs 'desktop' (Classic Desktop Site)
  const [viewMode, setViewMode] = useState(() => {
    const hash = window.location.hash.toLowerCase();
    if (hash.includes('desktop')) return 'desktop';
    return 'app';
  });

  const [selectedService, setSelectedService] = useState('');
  const [shopModalOpen, setShopModalOpen] = useState(false);

  // Initialize page from URL hash
  const getInitialPage = () => {
    const hash = window.location.hash.replace(/^#\/?/, '');
    if (['what-we-do', 'drug-testing', 'dna-testing', 'about-us', 'workplace-solutions', 'why-upic'].includes(hash)) {
      return hash;
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState(getInitialPage);

  // Handle browser back / forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
      if (hash.includes('desktop')) {
        setViewMode('desktop');
      }
      if (['what-we-do', 'drug-testing', 'dna-testing', 'about-us', 'workplace-solutions', 'why-upic'].includes(hash)) {
        setCurrentPage(hash);
      } else if (hash === '' || hash === 'home') {
        setCurrentPage('home');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (pageId, sectionId = '') => {
    if (pageId === 'home') {
      window.location.hash = '#/';
      setCurrentPage('home');
      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.location.hash = `#/${pageId}`;
      setCurrentPage(pageId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceId) => {
    setSelectedService(serviceId);
    handleNavigate('home', 'consultation-booking');
  };

  const scrollToBooking = (serviceId = '') => {
    if (serviceId) {
      setSelectedService(serviceId);
    }
    handleNavigate('home', 'consultation-booking');
  };

  const scrollToServices = () => {
    handleNavigate('home', 'services-grid');
  };

  // 1. PRIMARY VIEW: MOBILE APP EXPERIENCE (Centered Phone on Blank Screen)
  if (viewMode === 'app') {
    return <DeviceFrameWrapper />;
  }

  // 2. SECONDARY VIEW: CLASSIC DESKTOP LANDING SITE
  return (
    <div className="min-h-screen bg-surface font-body-md text-body-md text-on-surface antialiased flex flex-col selection:bg-secondary-fixed selection:text-navy-dark relative">
      
      {/* Floating Return to Mobile App Button */}
      <button
        type="button"
        onClick={() => setViewMode('app')}
        className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-secondary text-white px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2 font-bold transition-transform hover:scale-105 active:scale-95 border-2 border-white/20 cursor-pointer"
      >
        <span className="material-symbols-outlined text-[20px]">smartphone</span>
        <span>Open Mobile &amp; Tablet App</span>
      </button>

      {/* Fixed Navigation Header with Services Dropdown */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onBookTestClick={() => scrollToBooking()}
        onShopTestsClick={() => setShopModalOpen(true)}
      />

      {/* Main Content Layout offset for fixed header */}
      <main className="w-full pt-[120px] bg-surface min-h-[calc(100vh-120px)] flex flex-col">
        {currentPage === 'home' && (
          <>
            {/* Hero Section */}
            <Hero
              onScheduleClick={() => scrollToBooking()}
              onExploreClick={() => scrollToServices()}
            />

            {/* Trust Highlights Strip */}
            <TrustHighlights />

            {/* Specialized Services Grid */}
            <ServicesGrid onSelectService={handleSelectService} />

            {/* Data Callout: Workplace Substance Abuse Impact */}
            <RiskIntelligence onBuildPlanClick={() => scrollToBooking('workplace')} />

            {/* Multi-Modal Regulatory Compliance Tiles */}
            <ComplianceProtocols />

            {/* Interactive Consultation & Appointment Booking + HQ Info */}
            <BookingConsultation initialService={selectedService} />

            {/* Frequently Asked Questions */}
            <FaqSection />

            {/* Final Conversion Action Banner */}
            <CtaBanner onRequestClick={() => scrollToBooking('mobile')} />
          </>
        )}

        {/* Separate Page 1: WHAT WE DO */}
        {currentPage === 'what-we-do' && (
          <WhatWeDo
            onBookClick={(svc) => scrollToBooking(svc)}
            onNavigateHome={() => handleNavigate('home')}
            onSelectServicePage={(pageId) => handleNavigate(pageId)}
          />
        )}

        {/* Separate Page 2: DRUG TESTING */}
        {currentPage === 'drug-testing' && (
          <DrugTesting
            onBookClick={(svc) => scrollToBooking(svc)}
            onNavigateHome={() => handleNavigate('home')}
          />
        )}

        {/* Separate Page 3: DNA PATERNITY TESTING */}
        {currentPage === 'dna-testing' && (
          <DnaTesting
            onBookClick={(svc) => scrollToBooking(svc)}
            onNavigateHome={() => handleNavigate('home')}
          />
        )}

        {/* Separate Page 4: ABOUT US */}
        {currentPage === 'about-us' && (
          <AboutUs
            onBookClick={(svc) => scrollToBooking(svc)}
            onNavigateHome={() => handleNavigate('home')}
          />
        )}

        {/* Separate Page 5: WORKPLACE SOLUTIONS */}
        {currentPage === 'workplace-solutions' && (
          <WorkplaceSolutions
            onBookClick={(svc) => scrollToBooking(svc)}
            onNavigateHome={() => handleNavigate('home')}
          />
        )}

        {/* Separate Page 6: WHY UPIC */}
        {currentPage === 'why-upic' && (
          <WhyUpic
            onBookClick={(svc) => scrollToBooking(svc)}
            onNavigateHome={() => handleNavigate('home')}
            onNavigateWorkplace={() => handleNavigate('workplace-solutions')}
          />
        )}
      </main>

      {/* Footer */}
      <Footer 
        onServiceSelect={handleSelectService}
        onNavigate={handleNavigate}
      />

      {/* Quick Test Catalog Modal */}
      <ShopTestsModal
        isOpen={shopModalOpen}
        onClose={() => setShopModalOpen(false)}
        onSelectTest={(cat) => handleSelectService(cat)}
      />
    </div>
  );
}

export default App;
