import React from 'react';

export default function Footer({ onNavigate }) {
  const clinicalServices = [
    { label: 'Occupational Drug Screening', pageId: 'drug-testing' },
    { label: 'Court-Admissible DNA Paternity', pageId: 'dna-testing' },
    { label: 'DOT / FAA Random Testing', pageId: 'drug-testing' },
    { label: 'Clinical Toxicology Panels', pageId: 'drug-testing' },
    { label: 'Breath Alcohol & ETG Screening', pageId: 'drug-testing' },
    { label: 'Mobile & On-Site Collection', pageId: 'what-we-do' },
  ];

  const solutions = [
    { label: 'Why UPIC & Business Protection', pageId: 'why-upic', isPage: true },
    { label: 'Workplace Solutions & Risk', pageId: 'workplace-solutions', isPage: true },
    { label: 'About Us & Founder Story', pageId: 'about-us', isPage: true },
    { label: 'Shop Diagnostic Panels', sectionId: 'consultation-booking', isPage: false },
    { label: 'Schedule Specimen Drop-Off', sectionId: 'consultation-booking', isPage: false },
    { label: 'Physician & Employer Portal', sectionId: 'consultation-booking', isPage: false },
  ];

  const handleLinkClick = (pageId) => {
    if (onNavigate) {
      onNavigate(pageId);
    } else {
      document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-navy-dark text-surface-white border-t border-navy-deep">
      <div className="max-w-[1320px] mx-auto px-space-md lg:px-space-xl py-space-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-xl">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 flex flex-col gap-space-md pr-space-md">
            <div className="flex items-center">
              <a 
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) onNavigate('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-surface-white px-3.5 py-2 rounded-xl shadow-md inline-flex items-center hover:opacity-95 transition-opacity cursor-pointer"
                title="UPIC - United Partners In Care"
              >
                <img 
                  src="/logo.webp" 
                  alt="UPIC - United Partners In Care" 
                  className="h-11 sm:h-12 w-auto object-contain contrast-[1.1] brightness-[1.01]" 
                />
              </a>
            </div>
            <p className="font-body-md text-body-md text-surface-container-highest max-w-sm">
              United Partners In Care (UPIC Labs) delivers forensic-grade clinical diagnostics, certified occupational drug screening, and legal DNA testing with 24/7 on-call rapid turnaround.
            </p>
            <div className="flex flex-wrap gap-space-xs pt-space-xs">
              <span className="inline-flex items-center px-space-xs py-1 rounded bg-navy-deep text-secondary-fixed font-badge-caps text-badge-caps uppercase tracking-wider">
                SAMHSA Certified Protocols
              </span>
              <span className="inline-flex items-center px-space-xs py-1 rounded bg-navy-deep text-tertiary-fixed font-badge-caps text-badge-caps uppercase tracking-wider">
                DOT 49 CFR Part 40
              </span>
              <span className="inline-flex items-center px-space-xs py-1 rounded bg-navy-deep text-surface-clinical font-badge-caps text-badge-caps uppercase tracking-wider">
                AABB Accredited DNA
              </span>
            </div>
          </div>

          {/* Clinical Services */}
          <div className="flex flex-col gap-space-sm">
            <h4 className="font-label-md text-label-md uppercase tracking-wider text-secondary-fixed font-bold">
              Clinical Services
            </h4>
            <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-surface-container-highest">
              {clinicalServices.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(item.pageId)}
                    className="hover:text-surface-white transition-colors cursor-pointer text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions & Care */}
          <div className="flex flex-col gap-space-sm">
            <h4 className="font-label-md text-label-md uppercase tracking-wider text-secondary-fixed font-bold">
              Solutions & Care
            </h4>
            <ul className="flex flex-col gap-space-xs font-body-sm text-body-sm text-surface-container-highest">
              {solutions.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      if (item.isPage) {
                        if (onNavigate) onNavigate(item.pageId);
                      } else {
                        if (onNavigate) onNavigate('home', item.sectionId);
                        else document.getElementById(item.sectionId)?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="hover:text-surface-white transition-colors cursor-pointer text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Laboratory Contact */}
          <div className="flex flex-col gap-space-sm">
            <h4 className="font-label-md text-label-md uppercase tracking-wider text-secondary-fixed font-bold">
              Headquarters
            </h4>
            <address className="not-italic font-body-sm text-body-sm text-surface-container-highest flex flex-col gap-space-xs">
              <span className="text-surface-white font-semibold">UPIC Labs LLC</span>
              <span>360 Spring Street, Suite 2</span>
              <span>London, KY 40741</span>
              <div className="pt-space-xs flex flex-col gap-1">
                <a 
                  className="text-secondary-fixed hover:underline font-bold" 
                  href="tel:6062600413"
                >
                  P: (606) 260-0413
                </a>
                <span className="text-slate-muted">F: (606) 260-8451</span>
                <a 
                  className="text-royal-blue hover:underline text-surface-container-highest" 
                  href="mailto:jeffhensley@upiclabs.com"
                >
                  jeffhensley@upiclabs.com
                </a>
              </div>
            </address>
          </div>

        </div>

        {/* Legal Sub-footer */}
        <div className="mt-space-2xl pt-space-md border-t border-navy-deep flex flex-col sm:flex-row items-center justify-between gap-space-sm text-slate-muted font-body-sm text-body-sm">
          <p>
            &copy; 2026 United Partners In Care (UPIC). All rights reserved. Strict chain-of-custody protocols observed.
          </p>
          <div className="flex items-center gap-space-md">
            <a className="hover:text-surface-white transition-colors" href="#">Privacy Shield</a>
            <span>•</span>
            <a className="hover:text-surface-white transition-colors" href="#">HIPAA Compliance</a>
            <span>•</span>
            <a className="hover:text-surface-white transition-colors" href="#">Terms of Diagnostics</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
