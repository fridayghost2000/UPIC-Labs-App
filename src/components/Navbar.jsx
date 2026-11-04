import React, { useState } from 'react';

export default function Navbar({ 
  currentPage = 'home', 
  onNavigate, 
  onBookTestClick, 
  onShopTestsClick 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);

  const serviceDropdownItems = [
    {
      id: 'what-we-do',
      label: 'WHAT WE DO',
      sublabel: 'Accredited Diagnostics & Mobile Fleet',
      icon: 'science',
    },
    {
      id: 'drug-testing',
      label: 'Drug Testing',
      sublabel: 'Urine, Hair, Oral Fluid & DOT Screenings',
      icon: 'medication',
    },
    {
      id: 'dna-testing',
      label: 'DNA Paternity Testing',
      sublabel: 'Legal Court-Admissible & Informational',
      icon: 'biotech',
    },
  ];

  const otherNavLinks = [
    { id: 'why-upic', label: 'Why UPIC', pageId: 'why-upic', isPage: true },
    { id: 'workplace-solutions', label: 'Workplace Solutions', pageId: 'workplace-solutions', isPage: true },
    { id: 'about-us', label: 'About Us', pageId: 'about-us', isPage: true },
    { id: 'contact', label: 'Contact', sectionId: 'consultation-booking', isPage: false },
  ];

  const isServicesActive = ['what-we-do', 'drug-testing', 'dna-testing'].includes(currentPage);

  const handleLinkClick = (pageId, sectionId = '') => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    if (onNavigate) {
      onNavigate(pageId, sectionId);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      {/* Top Bar */}
      <div className="bg-navy-dark text-surface-white">
        <div className="max-w-[1320px] mx-auto px-space-md lg:px-space-xl h-10 flex items-center justify-between font-label-sm text-label-sm">
          <div className="flex items-center gap-space-xs truncate">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-container opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-container"></span>
            </span>
            <span className="font-semibold text-secondary-fixed">24/7 On-Call Support:</span>
            <a 
              className="hover:text-secondary-fixed transition-colors font-bold" 
              href="tel:6062600413"
            >
              (606) 260-0413
            </a>
            <span className="hidden md:inline text-slate-muted">|</span>
            <span className="hidden md:inline text-surface-container-highest truncate">
              360 Spring Street, Suite 2, London, KY
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-space-md">
            <span className="bg-primary-container/80 text-surface-white px-space-xs py-0.5 rounded font-badge-caps text-badge-caps uppercase tracking-wider">
              SAMHSA & CLIA Partner Lab
            </span>
            <span className="text-surface-container-highest font-label-sm text-label-sm">
              Mon-Fri: 9:00AM - 5:00PM
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="h-20 bg-surface-white/95 backdrop-blur-xl border-b border-border-subtle">
        <div className="max-w-[1320px] mx-auto px-space-md lg:px-space-xl h-20 flex items-center justify-between gap-space-md">
          {/* Logo */}
          <div className="flex items-center shrink-0">
            <a 
              className="flex items-center group py-0.5 cursor-pointer" 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('home');
              }}
              title="UPIC - United Partners In Care"
            >
              <img 
                src="/logo.webp" 
                alt="UPIC - United Partners In Care" 
                className="h-9 sm:h-12 md:h-14 lg:h-16 w-auto object-contain transition-all duration-200 group-hover:scale-[1.03] contrast-[1.12] brightness-[1.01] drop-shadow-[0_1px_1px_rgba(0,0,0,0.06)]"
              />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-space-lg">
            {/* Home Link */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('home');
              }}
              className={`py-2 transition-colors cursor-pointer ${
                currentPage === 'home'
                  ? 'text-primary font-headline-sm font-bold border-b-2 border-primary'
                  : 'font-label-md text-label-md text-on-surface-variant hover:text-primary'
              }`}
            >
              Home
            </a>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className={`py-2 flex items-center gap-1 transition-colors cursor-pointer ${
                  isServicesActive
                    ? 'text-primary font-headline-sm font-bold border-b-2 border-primary'
                    : 'font-label-md text-label-md text-on-surface-variant hover:text-primary'
                }`}
                aria-expanded={servicesDropdownOpen}
              >
                <span>Services</span>
                <span className={`material-symbols-outlined text-[18px] transition-transform duration-200 ${
                  servicesDropdownOpen ? 'rotate-180 text-primary' : 'text-slate-muted'
                }`}>
                  keyboard_arrow_down
                </span>
              </button>

              {/* Dropdown Floating Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-80 z-50 animate-fadeIn">
                  <div className="bg-surface-white border border-border-subtle rounded-2xl shadow-2xl p-2.5 flex flex-col gap-1.5 backdrop-blur-xl">
                    <div className="px-3 py-1.5 border-b border-border-subtle/60 flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-muted">
                        Diagnostic Offerings
                      </span>
                      <span className="text-[11px] font-semibold text-royal-blue bg-blue-subtle px-1.5 py-0.5 rounded">
                        Accredited
                      </span>
                    </div>

                    {serviceDropdownItems.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleLinkClick(item.id)}
                        className={`w-full text-left p-3 rounded-xl transition-all flex items-start gap-3 cursor-pointer group/item ${
                          currentPage === item.id
                            ? 'bg-blue-subtle text-primary font-bold'
                            : 'hover:bg-surface-clinical text-navy-dark'
                        }`}
                      >
                        <div className="w-10 h-10 rounded-xl bg-blue-subtle/80 text-royal-blue flex items-center justify-center shrink-0 group-hover/item:bg-royal-blue group-hover/item:text-surface-white transition-colors mt-0.5">
                          <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className={`text-[14px] leading-tight ${
                            item.id === 'what-we-do' 
                              ? 'font-bold uppercase tracking-wider text-royal-blue group-hover/item:text-primary' 
                              : 'font-bold text-navy-dark'
                          }`}>
                            {item.label}
                          </span>
                          <span className="text-[12px] text-slate-muted mt-1 leading-snug">
                            {item.sublabel}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Other Navigation Links */}
            {otherNavLinks.map((link) => (
              <a
                key={link.id}
                href={link.isPage ? `#/${link.pageId}` : `#${link.sectionId}`}
                onClick={(e) => {
                  e.preventDefault();
                  if (link.isPage) {
                    handleLinkClick(link.pageId);
                  } else {
                    handleLinkClick('home', link.sectionId);
                  }
                }}
                className={`py-2 transition-colors cursor-pointer ${
                  link.isPage && currentPage === link.pageId
                    ? 'text-primary font-headline-sm font-bold border-b-2 border-primary'
                    : 'font-label-md text-label-md text-on-surface-variant hover:text-primary'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons & Profile */}
          <div className="flex items-center gap-2 sm:gap-space-md shrink-0">
            <button
              onClick={onShopTestsClick}
              className="hidden md:inline-flex items-center gap-1.5 px-space-md py-2.5 rounded-lg bg-surface-clinical text-primary border border-primary/20 hover:bg-surface-container font-label-md text-label-md transition-all cursor-pointer whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-[18px]">shopping_cart</span>
              Shop Tests
            </button>
            <button
              onClick={onBookTestClick}
              className="inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-amber-rich hover:bg-secondary text-slate-charcoal hover:text-surface-white font-label-md text-xs sm:text-label-md shadow-sm transition-all cursor-pointer font-bold whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-[16px] sm:text-[18px]">call</span>
              <span>Book Test</span>
            </button>

            {/* Client Portal / Profile Button (visible on sm+) */}
            <div className="hidden sm:flex items-center pl-space-xs">
              <button
                type="button"
                title="Client & Physician Portal"
                className="w-9 h-9 rounded-full bg-blue-subtle hover:bg-surface-container border border-primary/20 flex items-center justify-center text-primary transition-colors cursor-pointer ring-2 ring-primary/10 shadow-sm"
              >
                <span className="material-symbols-outlined text-[20px]">person</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-1.5 sm:p-2 rounded-lg text-navy-dark hover:bg-surface-clinical transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-surface-white border-b border-border-subtle px-space-md py-space-md shadow-lg animate-fadeIn max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col gap-2">
            {/* Home Mobile Link */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('home');
              }}
              className={`py-2 px-3 rounded-lg text-left transition-colors ${
                currentPage === 'home'
                  ? 'bg-blue-subtle text-primary font-bold'
                  : 'text-on-surface-variant hover:bg-surface-clinical'
              }`}
            >
              Home
            </a>

            {/* Services Accordion in Mobile */}
            <div className="flex flex-col">
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={`py-2 px-3 rounded-lg text-left flex items-center justify-between transition-colors cursor-pointer ${
                  isServicesActive
                    ? 'bg-blue-subtle text-primary font-bold'
                    : 'text-on-surface-variant hover:bg-surface-clinical'
                }`}
              >
                <span className="font-semibold">Services</span>
                <span className={`material-symbols-outlined text-[20px] transition-transform ${
                  mobileServicesOpen ? 'rotate-180 text-primary' : ''
                }`}>
                  keyboard_arrow_down
                </span>
              </button>

              {mobileServicesOpen && (
                <div className="pl-3 pr-1 py-1.5 flex flex-col gap-1 border-l-2 border-primary/25 ml-4 mt-1">
                  {serviceDropdownItems.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleLinkClick(item.id)}
                      className={`py-2 px-3 rounded-lg text-left text-sm transition-colors flex items-center gap-2.5 cursor-pointer ${
                        currentPage === item.id
                          ? 'text-primary font-bold bg-blue-subtle/80'
                          : 'text-on-surface-variant hover:text-primary hover:bg-surface-clinical'
                      }`}
                    >
                      <span className="material-symbols-outlined text-[18px] text-royal-blue">{item.icon}</span>
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Other Mobile Nav Links */}
            {otherNavLinks.map((link) => (
              <a
                key={link.id}
                href={link.isPage ? `#/${link.pageId}` : `#${link.sectionId}`}
                onClick={(e) => {
                  e.preventDefault();
                  if (link.isPage) {
                    handleLinkClick(link.pageId);
                  } else {
                    handleLinkClick('home', link.sectionId);
                  }
                }}
                className={`py-2 px-3 rounded-lg text-left transition-colors cursor-pointer ${
                  link.isPage && currentPage === link.pageId
                    ? 'bg-blue-subtle text-primary font-bold'
                    : 'text-on-surface-variant hover:bg-surface-clinical'
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 flex flex-col gap-2 border-t border-border-subtle mt-2 sm:hidden">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookTestClick();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-space-md py-2.5 rounded-lg bg-amber-rich hover:bg-secondary text-slate-charcoal hover:text-surface-white font-label-md font-bold shadow-sm"
              >
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                Book Appointment / Consultation
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onShopTestsClick();
                }}
                className="w-full inline-flex items-center justify-center gap-1.5 px-space-md py-2.5 rounded-lg bg-surface-clinical text-primary border border-primary/20 font-label-md font-semibold"
              >
                <span className="material-symbols-outlined text-[18px]">shopping_cart</span>
                Shop Diagnostic Tests
              </button>
              <div className="pt-1 flex items-center justify-between px-2 text-xs text-slate-muted">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px] text-royal-blue">account_circle</span>
                  Client & Physician Portal
                </span>
                <span className="text-royal-blue font-semibold">Sign In &rarr;</span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
