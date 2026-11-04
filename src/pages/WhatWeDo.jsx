import React from 'react';

export default function WhatWeDo({ onBookClick, onNavigateHome, onSelectServicePage }) {
  const corePillars = [
    {
      icon: 'science',
      title: 'Clinical & Forensic Toxicology',
      desc: 'High-complexity screening and LC-MS/MS confirmation for over 50 substance metabolites, from standard workplace panels to synthetic opioids.',
      tags: ['5-14 Panel Urine', 'Hair Follicle (90-Day)', 'Oral Fluid Rapid', 'Breath Alcohol & ETG'],
    },
    {
      icon: 'dna',
      title: 'Court-Admissible DNA Verification',
      desc: 'Legally conclusive relationship diagnostics with documented chain-of-custody, photographic donor identity verification, and court-ready documentation.',
      tags: ['Paternity & Maternity', 'Non-Invasive Prenatal', 'Immigration USCIS', 'Grandparentage & Sibling'],
    },
    {
      icon: 'security',
      title: 'Employer & DOT Compliance Programs',
      desc: 'Comprehensive consortium management, automated random pool draws, and 24/7 on-call post-accident response meeting DOT 49 CFR Part 40 standards.',
      tags: ['FAA / FMCSA / PHMSA', 'Pre-Employment', 'Reasonable Suspicion', 'MRO Certified Reports'],
    },
    {
      icon: 'local_shipping',
      title: '24/7 Mobile & On-Site Collection Fleet',
      desc: 'Certified specimen collectors dispatched directly to your job site, distribution center, court facility, or residential address across Eastern Kentucky.',
      tags: ['Under 2-Hour Response', 'Shift-Change Sweeps', 'Zero Downtime', 'Confidential Handling'],
    },
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'Verified Donor Intake',
      desc: 'Strict government photo ID validation, donor biometric logging, and tamper-resistant chain-of-custody generation.',
    },
    {
      step: '02',
      title: 'Tamper-Evident Specimen Seal',
      desc: 'Collections performed by certified technicians adhering strictly to temperature checks, adulteration screening, and dual-initial seals.',
    },
    {
      step: '03',
      title: 'Advanced Laboratory Assay',
      desc: 'Immunoassay screening backed by secondary Gas Chromatography / Mass Spectrometry (GC-MS) or LC-MS/MS verification.',
    },
    {
      step: '04',
      title: 'Certified MRO Portal Release',
      desc: 'Independent Medical Review Officer evaluation of non-negative results followed by instant encrypted delivery to your client portal.',
    },
  ];

  return (
    <div className="w-full bg-surface">
      {/* Page Breadcrumb Header */}
      <div className="bg-surface-clinical border-b border-border-subtle">
        <div className="max-w-[1320px] mx-auto px-space-md lg:px-space-xl py-4 flex items-center justify-between">
          <nav className="flex items-center gap-2 text-label-sm font-label-sm text-slate-muted">
            <button 
              onClick={onNavigateHome}
              className="hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">home</span>
              Home
            </button>
            <span>/</span>
            <span className="text-slate-muted">Services</span>
            <span>/</span>
            <span className="text-primary font-bold">What We Do</span>
          </nav>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-badge-caps text-badge-caps uppercase font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            CLIA & SAMHSA Aligned
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-20 bg-gradient-to-b from-surface-clinical via-surface to-surface-container-low">
        <div className="max-w-[1320px] mx-auto px-space-md lg:px-space-xl">
          <div className="max-w-3xl flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-subtle text-royal-blue font-label-sm text-label-sm w-fit font-semibold border border-primary/15">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              Forensic-Grade Diagnostic Science • London, KY
            </div>
            <h1 className="font-display-hero text-headline-xl-mobile sm:text-display-hero text-navy-dark tracking-tight leading-tight">
              What We Do at <span className="text-royal-blue">UPIC</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              United Partners In Care (UPIC Labs) bridges the gap between high-complexity clinical science and fast, accessible community testing. From courtroom-ready DNA determinations to federally mandated workplace drug testing programs, we provide certified, defensible diagnostics with rapid local turnaround.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onBookClick()}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-amber-rich hover:bg-secondary text-slate-charcoal hover:text-surface-white font-label-md text-label-md shadow-md transition-all cursor-pointer font-bold"
              >
                <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                Book a Diagnostic Screen
              </button>
              <a
                href="tel:6062600413"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-surface-white text-royal-blue hover:bg-blue-subtle font-label-md text-label-md shadow-sm transition-all border border-border-subtle font-semibold"
              >
                <span className="material-symbols-outlined text-[20px]">call</span>
                24/7 Dispatch: (606) 260-0413
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Service Category Jump Cards */}
      <section className="py-12 bg-surface border-y border-border-subtle">
        <div className="max-w-[1320px] mx-auto px-space-md lg:px-space-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Drug Testing Jump Card */}
            <div 
              onClick={() => onSelectServicePage('drug-testing')}
              className="p-6 rounded-2xl bg-surface-white border border-border-subtle hover:border-royal-blue/40 shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-subtle text-royal-blue flex items-center justify-center group-hover:bg-royal-blue group-hover:text-surface-white transition-colors">
                    <span className="material-symbols-outlined text-[26px]">medication</span>
                  </div>
                  <span className="text-label-sm font-bold text-royal-blue group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Explore Drug Testing <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-navy-dark font-bold mb-2">Drug & Alcohol Testing</h3>
                <p className="font-body-md text-body-md text-slate-muted">
                  Urine, hair, saliva, and breath alcohol screenings with 15-minute rapid results and full MRO lab confirmations.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-border-subtle/60 flex items-center gap-2 text-label-sm text-navy-dark font-semibold">
                <span className="material-symbols-outlined text-status-success text-[18px]">check_circle</span>
                DOT / FAA • Pre-Employment • Court-Ordered • Random Pools
              </div>
            </div>

            {/* DNA Testing Jump Card */}
            <div 
              onClick={() => onSelectServicePage('dna-testing')}
              className="p-6 rounded-2xl bg-surface-white border border-border-subtle hover:border-royal-blue/40 shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gold-light text-secondary flex items-center justify-center group-hover:bg-amber-rich group-hover:text-slate-charcoal transition-colors">
                    <span className="material-symbols-outlined text-[26px]">biotech</span>
                  </div>
                  <span className="text-label-sm font-bold text-secondary group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Explore DNA Testing <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-navy-dark font-bold mb-2">DNA Paternity Testing</h3>
                <p className="font-body-md text-body-md text-slate-muted">
                  AABB-aligned legal and peace of mind paternity verification with 99.999% accuracy and 2-3 business day turnaround.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-border-subtle/60 flex items-center gap-2 text-label-sm text-navy-dark font-semibold">
                <span className="material-symbols-outlined text-status-success text-[18px]">check_circle</span>
                Court-Admissible • Non-Invasive Prenatal • Immigration • Sibling
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Grid */}
      <section className="py-16 lg:py-24 bg-surface-clinical">
        <div className="max-w-[1320px] mx-auto px-space-md lg:px-space-xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-label-md text-label-md uppercase tracking-wider text-royal-blue font-bold">
              Our Comprehensive Capabilities
            </span>
            <h2 className="font-display-hero text-headline-lg lg:text-headline-xl text-navy-dark mt-2 tracking-tight">
              Rigorous Laboratory Science, Delivered Locally
            </h2>
            <p className="font-body-md text-body-md text-slate-muted mt-3">
              We operate under uncompromising forensic protocols so that every test result stands firm in corporate compliance audits, legal courtrooms, or personal peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {corePillars.map((pillar, idx) => (
              <div 
                key={idx}
                className="bg-surface-white rounded-2xl p-8 border border-border-subtle shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-subtle text-royal-blue flex items-center justify-center mb-5">
                    <span className="material-symbols-outlined text-[26px]">{pillar.icon}</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-navy-dark font-bold mb-3">
                    {pillar.title}
                  </h3>
                  <p className="font-body-md text-body-md text-slate-muted mb-6 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border-subtle">
                  {pillar.tags.map((t, i) => (
                    <span 
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-surface-clinical text-slate-charcoal border border-border-subtle font-label-sm text-label-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The 4-Step Chain of Custody Protocol */}
      <section className="py-16 lg:py-20 bg-navy-dark text-surface-white">
        <div className="max-w-[1320px] mx-auto px-space-md lg:px-space-xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-label-md text-label-md uppercase tracking-wider text-secondary-fixed font-bold">
              Unbroken Integrity
            </span>
            <h2 className="font-display-hero text-headline-lg lg:text-headline-xl text-surface-white mt-2 tracking-tight">
              Our 4-Stage Forensic Testing Process
            </h2>
            <p className="font-body-md text-body-md text-surface-container-highest mt-3">
              Every specimen is tracked from donor intake to laboratory reporting with strict Chain of Custody documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step, idx) => (
              <div 
                key={idx}
                className="bg-navy-deep/60 border border-navy-deep rounded-2xl p-6 flex flex-col relative"
              >
                <span className="font-headline-md text-headline-md font-bold text-secondary-container mb-3">
                  {step.step}
                </span>
                <h4 className="font-headline-sm text-headline-sm font-bold text-surface-white mb-2">
                  {step.title}
                </h4>
                <p className="font-body-sm text-body-sm text-surface-container-highest leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-surface">
        <div className="max-w-[1320px] mx-auto px-space-md lg:px-space-xl">
          <div className="rounded-3xl bg-gradient-to-r from-royal-blue to-navy-dark p-8 md:p-12 text-surface-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="max-w-xl">
              <h3 className="font-headline-lg text-headline-lg font-bold text-surface-white">
                Have a Question or Need Custom Screening?
              </h3>
              <p className="font-body-md text-surface-container-highest mt-2">
                Our specimen coordinators are available 24/7 to answer testing questions, configure employer accounts, or schedule emergency collections.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => onBookClick()}
                className="px-6 py-3.5 rounded-lg bg-secondary-container text-navy-dark font-label-md font-bold hover:bg-gold-accent transition-colors shadow-md cursor-pointer"
              >
                Schedule Appointment
              </button>
              <button
                onClick={onNavigateHome}
                className="px-6 py-3.5 rounded-lg bg-navy-deep/70 hover:bg-navy-deep text-surface-white font-label-md font-semibold transition-colors border border-navy-deep cursor-pointer"
              >
                Return to Home
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

