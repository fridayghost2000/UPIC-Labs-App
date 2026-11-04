import React from 'react';

export default function Hero({ onScheduleClick, onExploreClick }) {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-surface-clinical via-surface to-surface-container-low py-space-2xl lg:py-space-3xl">
      <div className="max-w-[1320px] mx-auto px-space-md lg:px-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col gap-space-md z-10">
            {/* Hero Heading */}
            <h1 className="text-2xl sm:text-4xl lg:text-[44px] lg:leading-[52px] font-extrabold text-navy-dark tracking-tight">
              Accurate, Fast & <br className="hidden sm:inline" />
              <span className="text-royal-blue">Court-Ready</span> Diagnostic Testing Solutions
            </h1>

            {/* Hero Paragraph */}
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Specializing in custom workplace drug testing programs, DOT/FAA compliance testing, and certified DNA paternity testing in London, KY. Backed by strict chain-of-custody protocols and 24/7 on-call dispatch.
            </p>

            {/* Hero Action Buttons */}
            <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
              <a
                href="#consultation-booking"
                onClick={(e) => {
                  e.preventDefault();
                  if (onScheduleClick) {
                    onScheduleClick();
                  } else {
                    document.querySelector('#consultation-booking')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-space-lg py-3 rounded-lg bg-amber-rich hover:bg-secondary text-slate-charcoal hover:text-surface-white font-label-md text-label-md shadow-md transition-all cursor-pointer font-semibold"
              >
                <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                Schedule a Test / Order Online
              </a>
              <a
                href="#services-grid"
                onClick={(e) => {
                  e.preventDefault();
                  if (onExploreClick) {
                    onExploreClick();
                  } else {
                    document.querySelector('#services-grid')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-space-lg py-3 rounded-lg bg-surface-white text-royal-blue hover:bg-blue-subtle font-label-md text-label-md shadow-sm transition-all cursor-pointer border border-border-subtle font-semibold"
              >
                <span className="material-symbols-outlined text-[20px]">biotech</span>
                Explore Testing Services
              </a>
            </div>

            {/* Trust Micro-Bullets */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-space-md pt-space-sm text-slate-muted font-body-sm text-body-sm">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-status-success text-[18px]">verified</span>
                <span className="font-medium text-slate-charcoal">100% Chain-of-Custody</span>
              </div>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-border-subtle"></span>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-royal-blue text-[18px]">gavel</span>
                <span className="font-medium text-slate-charcoal">Legally Admissible</span>
              </div>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-border-subtle"></span>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-amber-rich text-[18px]">bolt</span>
                <span className="font-medium text-slate-charcoal">Same-Day & 24h Results</span>
              </div>
            </div>
          </div>

          {/* Right Visual Showcase / Specimen Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Backing Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-royal-blue/15 to-secondary-container/20 rounded-3xl blur-2xl -z-10"></div>
              
              <div className="bg-surface-white rounded-2xl p-space-lg shadow-xl border border-border-subtle flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-space-xs">
                    <div className="w-8 h-8 rounded-lg bg-blue-subtle text-royal-blue flex items-center justify-center">
                      <span className="material-symbols-outlined text-[20px]">verified_user</span>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-[17px] font-bold text-navy-dark leading-tight">UPIC Labs Direct</h3>
                      <p className="text-xs text-slate-muted">Laboratory Order & Specimen Verification</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-gold-light text-secondary font-badge-caps text-badge-caps uppercase font-bold">
                    CLIA Grade
                  </span>
                </div>

                {/* Specimen photo visual */}
                <div className="relative w-full h-56 rounded-xl overflow-hidden bg-surface-container group">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    alt="A clean, professional laboratory bench showing medical diagnostics equipment, securely sealed specimen collection tubes with blue and gold barcode labels, clinical pipettes, and certified documentation in crisp cool daylight"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA14hreXno1orn69__rm5Jsp5a11Tx1Uaz-FblKcjZCNRkl1ZoAkPuiXvGIDcFl4m-Rf83E9-KcP2cLLoQf2gzdCJysIY90DEC0IMNCMdec3vZ_5RlUgCWbM-4byVISEex-Y_3Hrm79_kB4fw8tZnE_iO8qmRC4c5VXvip3SE0R22orziu1UcOmOjCBZzn--G-pB346sb9JacOtJ3cMMKXcf4OPTQaLALwLYJIF-Frw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/85 via-navy-dark/30 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-surface-white">
                    <div>
                      <p className="font-label-md text-label-md font-bold">Rapid Verification Hub</p>
                      <p className="font-body-sm text-body-sm text-surface-container-highest">London, KY Facility Diagnostics</p>
                    </div>
                    <span className="flex items-center gap-1 text-gold-accent font-label-sm text-label-sm font-semibold bg-navy-dark/50 px-2 py-0.5 rounded backdrop-blur-sm">
                      <span className="material-symbols-outlined text-[16px]">speed</span> 24h MRO Turnaround
                    </span>
                  </div>
                </div>

                {/* Quick Live Capabilities Ticker */}
                <div className="grid grid-cols-2 gap-space-xs pt-space-2xs">
                  <div className="p-2 sm:p-2.5 rounded-lg bg-surface-clinical border border-border-subtle flex flex-col">
                    <span className="text-[11px] text-slate-muted font-medium">Collection Modality</span>
                    <span className="text-[13px] sm:text-[14px] text-navy-dark font-bold leading-tight mt-0.5">Urine, Hair & Oral</span>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-lg bg-surface-clinical border border-border-subtle flex flex-col">
                    <span className="text-[11px] text-slate-muted font-medium">Legal Compliance</span>
                    <span className="text-[13px] sm:text-[14px] text-navy-dark font-bold leading-tight mt-0.5">DOT 49 CFR Part 40</span>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-lg bg-surface-clinical border border-border-subtle flex flex-col">
                    <span className="text-[11px] text-slate-muted font-medium">DNA Admissibility</span>
                    <span className="text-[13px] sm:text-[14px] text-navy-dark font-bold leading-tight mt-0.5">AABB Chain Custody</span>
                  </div>
                  <div className="p-2 sm:p-2.5 rounded-lg bg-surface-clinical border border-border-subtle flex flex-col">
                    <span className="text-[11px] text-slate-muted font-medium">On-Call Readiness</span>
                    <span className="text-[13px] sm:text-[14px] text-status-success font-bold flex items-center gap-1 leading-tight mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-status-success inline-block"></span>
                      Active 24/7 Mobile
                    </span>
                  </div>
                </div>

                {/* Immediate Post-Accident Callout */}
                <div className="pt-space-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-blue-subtle/80 rounded-xl p-space-sm border border-royal-blue/20">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-royal-blue text-[24px]">phone_in_talk</span>
                    <div>
                      <p className="font-label-sm text-label-sm text-navy-dark font-bold">Need Immediate Post-Accident Testing?</p>
                      <p className="font-body-sm text-body-sm text-slate-muted">Dispatch an on-call collector anytime</p>
                    </div>
                  </div>
                  <a
                    className="self-start sm:self-auto px-space-sm py-1.5 rounded-lg bg-royal-blue text-surface-white font-label-md text-label-md hover:bg-navy-deep transition-colors text-center"
                    href="tel:6062600413"
                  >
                    Call Direct
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
