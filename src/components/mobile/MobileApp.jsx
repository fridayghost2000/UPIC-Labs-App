import React, { useState } from 'react';
import MobileDashboard from './MobileDashboard';
import MobileServices from './MobileServices';
import MobileBookTest from './MobileBookTest';
import MobileReports from './MobileReports';
import CustodyFormModal from './CustodyFormModal';
import EmployerHubModal from './EmployerHubModal';
import NotificationsDropdown from './NotificationsDropdown';

export default function MobileApp() {
  const [activeTab, setActiveTab] = useState('home'); // 'home' | 'services' | 'book' | 'reports'
  const [custodyModalOpen, setCustodyModalOpen] = useState(false);
  const [employerHubOpen, setEmployerHubOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [selectedServiceCategory, setSelectedServiceCategory] = useState('workplace');

  // Scroll to top on tab change
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    const mainEl = document.getElementById('mobile-scroll-container');
    if (mainEl) mainEl.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookTestCategory = (category = 'workplace') => {
    setSelectedServiceCategory(category);
    handleTabChange('book');
  };

  return (
    <div className="relative w-full h-full flex flex-col bg-surface font-body-md text-on-surface overflow-hidden select-none">
      
      {/* 1. CLEAN APP HEADER (Fixed at top of phone screen) */}
      <header className="sticky top-0 w-full z-30 shrink-0 bg-surface/95 backdrop-blur-md border-b border-border-subtle/50 shadow-[0_1px_4px_rgba(0,0,0,0.03)]">
        <div className="h-14 px-4 flex items-center justify-between gap-2 w-full">
          
          {/* Brand & Location with Official UPIC Logo */}
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <img
              src="/upic-logo.webp"
              alt="UPIC Labs Logo"
              onClick={() => handleTabChange('home')}
              className="h-8 w-auto object-contain shrink-0 cursor-pointer"
            />
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5">
                <span
                  onClick={() => handleTabChange('home')}
                  className="text-[14px] font-bold text-primary-container truncate cursor-pointer hover:text-primary transition-colors leading-tight"
                >
                  UPIC Labs
                </span>
                <span className="text-[8.5px] font-bold uppercase px-1.5 py-0.2 rounded bg-blue-100 text-primary tracking-wider inline-block">
                  CLINICAL
                </span>
              </div>
              <div className="flex items-center gap-1 text-on-surface-variant text-[10.5px] leading-tight mt-0.5">
                <span className="material-symbols-outlined text-[12px] text-secondary">
                  location_on
                </span>
                <span className="truncate">London, KY</span>
                <span className="text-slate-300">•</span>
                <a
                  className="inline-flex items-center gap-1 px-1.5 py-0.2 rounded-full bg-blue-50 text-primary hover:bg-blue-100 transition-colors"
                  href="tel:6062600413"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-status-compliant animate-pulse"></span>
                  <span className="text-[9.5px] font-bold">24/7 Hotline</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Header: Alerts & Clean Initials Profile */}
          <div className="flex items-center gap-1 shrink-0 relative">
            <button
              type="button"
              aria-label="Notifications"
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              className="w-8 h-8 flex items-center justify-center rounded-full text-slate-600 hover:text-primary hover:bg-slate-100 transition-colors relative cursor-pointer outline-none"
            >
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-status-alert ring-2 ring-white"></span>
            </button>

            <button
              type="button"
              onClick={() => setProfileModalOpen(true)}
              className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs ring-2 ring-blue-100 shadow-sm cursor-pointer outline-none hover:bg-secondary transition-colors"
              title="Authorized Account"
            >
              JH
            </button>

            {/* Notifications Dropdown */}
            <NotificationsDropdown
              isOpen={notificationsOpen}
              onClose={() => setNotificationsOpen(false)}
              onSelectNotification={() => handleTabChange('reports')}
            />
          </div>
        </div>
      </header>

      {/* 2. SCROLLABLE INNER VIEWPORT (Smooth scrolling, zero scrollbar clutter) */}
      <main id="mobile-scroll-container" className="flex-1 overflow-y-auto no-scrollbar relative w-full bg-surface">
        {activeTab === 'home' && (
          <MobileDashboard
            onNavigateTab={handleTabChange}
            onOpenBooking={() => handleTabChange('book')}
            onOpenTracker={() => handleTabChange('reports')}
            onOpenResults={() => handleTabChange('reports')}
            onOpenEmployerHub={() => setEmployerHubOpen(true)}
            onOpenCustodyForm={() => setCustodyModalOpen(true)}
            onSelectServiceCategory={handleBookTestCategory}
          />
        )}

        {activeTab === 'services' && (
          <MobileServices
            onBookTest={handleBookTestCategory}
          />
        )}

        {activeTab === 'book' && (
          <MobileBookTest
            initialCategory={selectedServiceCategory}
            onComplete={() => handleTabChange('home')}
            onCancel={() => handleTabChange('home')}
          />
        )}

        {activeTab === 'reports' && (
          <MobileReports
            onOpenCustodyForm={() => setCustodyModalOpen(true)}
          />
        )}
      </main>

      {/* 3. PINNED BOTTOM NAVIGATION (Clean iOS/Material 3, no ugly box outlines) */}
      <nav className="sticky bottom-0 left-0 right-0 z-30 shrink-0 bg-white/95 backdrop-blur-md shadow-[0_-2px_10px_rgba(0,0,0,0.05)] border-t border-slate-200">
        <div className="flex justify-around items-center h-14 px-3 w-full">
          
          {/* Tab 1: Home */}
          <button
            type="button"
            onClick={() => handleTabChange('home')}
            className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all cursor-pointer outline-none focus:outline-none border-0 ${
              activeTab === 'home'
                ? 'text-primary font-bold'
                : 'text-slate-500 hover:text-primary'
            }`}
          >
            <span className={`material-symbols-outlined text-[22px] leading-none ${activeTab === 'home' ? 'material-symbols-fill' : ''}`}>
              home
            </span>
            <span className="text-[10px] mt-0.5 tracking-normal">Home</span>
          </button>

          {/* Tab 2: Services */}
          <button
            type="button"
            onClick={() => handleTabChange('services')}
            className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all cursor-pointer outline-none focus:outline-none border-0 ${
              activeTab === 'services'
                ? 'text-primary font-bold'
                : 'text-slate-500 hover:text-primary'
            }`}
          >
            <span className={`material-symbols-outlined text-[22px] leading-none ${activeTab === 'services' ? 'material-symbols-fill' : ''}`}>
              assignment
            </span>
            <span className="text-[10px] mt-0.5 tracking-normal">Services</span>
          </button>

          {/* Tab 3: Center Elevated Book Test Button */}
          <button
            type="button"
            onClick={() => handleTabChange('book')}
            className="flex flex-col items-center justify-center -mt-4 text-on-primary group cursor-pointer outline-none focus:outline-none border-0"
          >
            <div className={`w-11 h-11 rounded-full text-white shadow-[0_4px_12px_rgba(30,58,138,0.35)] flex items-center justify-center transition-all active:scale-95 ${
              activeTab === 'book' ? 'bg-secondary ring-2 ring-primary/20' : 'bg-primary hover:bg-secondary'
            }`}>
              <span className="material-symbols-outlined text-[22px]">calendar_month</span>
            </div>
            <span className="text-[10px] text-primary mt-0.5 font-bold">
              Book Test
            </span>
          </button>

          {/* Tab 4: Reports */}
          <button
            type="button"
            onClick={() => handleTabChange('reports')}
            className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all cursor-pointer outline-none focus:outline-none border-0 ${
              activeTab === 'reports'
                ? 'text-primary font-bold'
                : 'text-slate-500 hover:text-primary'
            }`}
          >
            <span className={`material-symbols-outlined text-[22px] leading-none ${activeTab === 'reports' ? 'material-symbols-fill' : ''}`}>
              lock
            </span>
            <span className="text-[10px] mt-0.5 tracking-normal">Reports</span>
          </button>

        </div>
      </nav>

      {/* 4. MODALS (Pop up strictly inside the phone screen) */}
      <CustodyFormModal
        isOpen={custodyModalOpen}
        onClose={() => setCustodyModalOpen(false)}
      />

      <EmployerHubModal
        isOpen={employerHubOpen}
        onClose={() => setEmployerHubOpen(false)}
        onScheduleRosterTest={() => handleBookTestCategory('workplace')}
      />

      {/* User Profile Modal */}
      {profileModalOpen && (
        <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div
            className="w-full max-w-sm bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 text-slate-900 animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="text-sm font-bold">Authorized Account</span>
              <button
                type="button"
                onClick={() => setProfileModalOpen(false)}
                className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-800"
              >
                <span className="material-symbols-outlined text-[15px]">close</span>
              </button>
            </div>

            <div className="py-3 text-center">
              <div className="w-14 h-14 rounded-full bg-primary text-white mx-auto mb-2 flex items-center justify-center font-bold text-lg shadow-md">
                JH
              </div>
              <div className="font-bold text-sm text-slate-900">Jeff Hensley</div>
              <div className="text-xs text-slate-500">Director of Operations • UPIC Labs</div>
              <div className="mt-1.5 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50 text-primary text-[10px] font-semibold">
                <span className="material-symbols-outlined text-[13px] text-status-compliant">verified</span>
                <span>Licensed Administrator</span>
              </div>
            </div>

            <div className="space-y-1.5 text-xs">
              <div className="p-2 bg-slate-50 rounded-lg flex justify-between">
                <span className="text-slate-500">Facility ID:</span>
                <span className="font-bold text-slate-800">UPIC-LDN-01</span>
              </div>
              <div className="p-2 bg-slate-50 rounded-lg flex justify-between">
                <span className="text-slate-500">Hotline:</span>
                <a href="tel:6062600413" className="font-bold text-secondary">(606) 260-0413</a>
              </div>
              <div className="p-2 bg-slate-50 rounded-lg flex justify-between">
                <span className="text-slate-500">Location:</span>
                <span className="font-semibold text-slate-800">London, KY 40741</span>
              </div>
            </div>

            <div className="mt-3 pt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => setProfileModalOpen(false)}
                className="w-full py-2 bg-primary text-white rounded-xl text-xs font-bold hover:bg-secondary transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
