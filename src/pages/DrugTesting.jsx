import React, { useState } from 'react';

export default function DrugTesting({ onBookClick, onNavigateHome }) {
  const [activeTab, setActiveTab] = useState('urine');

  const modalities = [
    {
      id: 'urine',
      title: 'Urine Drug Testing',
      icon: 'science',
      detectionWindow: '1 to 7 Days (up to 30 days for chronic THC)',
      bestFor: 'Workplace screening, pre-employment, DOT compliance, and court probation.',
      turnaround: 'Rapid: 15 Minutes | Lab Confirmation: 24 - 48 Hours',
      features: [
        '5, 10, 12, and 14-panel standard and custom configurations',
        'Built-in specimen adulteration & temperature integrity verification',
        'Secondary LC-MS/MS confirmation on all presumptive non-negatives',
        'Certified Medical Review Officer (MRO) review included',
      ],
    },
    {
      id: 'hair',
      title: 'Hair Follicle Screening',
      icon: 'biotech',
      detectionWindow: 'Up to 90 Days (Historical Profile)',
      bestFor: 'Safety-sensitive positions, executive hiring, child custody, and legal disputes.',
      turnaround: '2 to 3 Business Days',
      features: [
        'Virtually impossible to cheat, detox, or substitute',
        'Standard 1.5 inch head or body hair specimen collection',
        'Detects repetitive substance patterns rather than isolated single-day use',
        'Full forensic chain-of-custody documentation',
      ],
    },
    {
      id: 'oral',
      title: 'Oral Fluid (Saliva) Rapid Testing',
      icon: 'water_drop',
      detectionWindow: '1 to 48 Hours (Recent Use)',
      bestFor: 'Post-accident investigations, reasonable suspicion, and rapid roadside/job-site testing.',
      turnaround: 'Rapid: 10 - 15 Minutes | Lab Confirmation: 24 - 48 Hours',
      features: [
        '100% directly observed collection eliminates donor adulteration or substitution',
        'Excellent indicator of active influence or very recent substance consumption',
        'Non-invasive and comfortable for the donor',
        'Meets newly authorized federal DOT oral fluid guidelines',
      ],
    },
    {
      id: 'alcohol',
      title: 'Breath Alcohol & ETG Testing',
      icon: 'speed',
      detectionWindow: 'Breath: Immediate (BAC) | Urine ETG: Up to 80 Hours',
      bestFor: 'DOT post-accident, zero-tolerance programs, and sober-living compliance.',
      turnaround: 'Breathalyzer: Immediate on-site printout | ETG: 24 Hours',
      features: [
        'DOT-approved evidential breath testing devices (Lifeloc / Intoximeters)',
        'Certified Breath Alcohol Technicians (BAT)',
        'Urine ETG (Ethyl Glucuronide) detects alcohol metabolites for up to 80 hours',
        'Strict confirmation calibration protocols',
      ],
    },
  ];

  const panels = [
    {
      name: '5-Panel Standard (DOT Compliant)',
      substances: ['THC (Cannabis)', 'Cocaine (Benzoylecgonine)', 'Opiates (Codeine, Morphine, 6-AM)', 'Amphetamines (Meth/MDMA)', 'Phencyclidine (PCP)'],
      commonUse: 'Federal DOT, FMCSA, FAA, and general pre-employment.',
      tag: 'DOT Standard',
    },
    {
      name: '10-Panel Expanded Workplace',
      substances: ['5-Panel Substances', 'Benzodiazepines (Xanax, Valium)', 'Barbiturates', 'Methadone', 'Propoxyphene', 'Oxycodone (OxyContin, Percocet)'],
      commonUse: 'Corporate hiring, healthcare workers, and industrial facilities.',
      tag: 'Most Popular',
    },
    {
      name: '12-Panel Safety Sensitive + Opiates',
      substances: ['10-Panel Substances', 'Buprenorphine (Suboxone)', 'Fentanyl & Norfentanyl'],
      commonUse: 'High-risk manufacturing, heavy equipment operators, law enforcement.',
      tag: 'High Security',
    },
    {
      name: '14-Panel Comprehensive Forensic',
      substances: ['12-Panel Substances', 'Tramadol', 'Hydrocodone / Hydromorphone', 'Ecstasy (MDMA/MDA)', 'Synthetic Cannabinoids'],
      commonUse: 'Court probation, custody hearings, and addiction treatment monitoring.',
      tag: 'Maximum Coverage',
    },
  ];

  const currentModality = modalities.find((m) => m.id === activeTab) || modalities[0];

  return (
    <div className="w-full bg-surface">
      {/* Breadcrumb Header */}
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
            <span className="text-primary font-bold">Drug Testing</span>
          </nav>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-rich/15 text-amber-rich font-badge-caps text-badge-caps uppercase font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-rich animate-pulse"></span>
            SAMHSA Certified & MRO Reviewed
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-20 bg-gradient-to-b from-surface-clinical via-surface to-surface-container-low">
        <div className="max-w-[1320px] mx-auto px-space-md lg:px-space-xl">
          <div className="max-w-3xl flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-subtle text-royal-blue font-label-sm text-label-sm w-fit font-semibold border border-primary/15">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              Occupational, DOT & Court-Admissible Screening
            </div>
            <h1 className="font-display-hero text-headline-xl-mobile sm:text-display-hero text-navy-dark tracking-tight leading-tight">
              Certified <span className="text-royal-blue">Drug & Alcohol</span> Testing Services
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Fast, defensible toxicology solutions for employers, legal representatives, and individuals across Kentucky. From 15-minute point-of-care rapid screens to full SAMHSA-certified laboratory confirmations reviewed by licensed Medical Review Officers.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onBookClick('drug')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-amber-rich hover:bg-secondary text-slate-charcoal hover:text-surface-white font-label-md text-label-md shadow-md transition-all cursor-pointer font-bold"
              >
                <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                Schedule a Drug Screen
              </button>
              <a
                href="tel:6062600413"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-surface-white text-royal-blue hover:bg-blue-subtle font-label-md text-label-md shadow-sm transition-all border border-border-subtle font-semibold"
              >
                <span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
                24/7 Rapid Dispatch: (606) 260-0413
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Modality Tabs */}
      <section className="py-16 bg-surface-white border-b border-border-subtle">
        <div className="max-w-[1320px] mx-auto px-space-md lg:px-space-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-label-md text-label-md uppercase tracking-wider text-royal-blue font-bold">
              Collection Modalities
            </span>
            <h2 className="font-display-hero text-headline-lg lg:text-headline-xl text-navy-dark mt-2 tracking-tight">
              Testing Options Tailored to Your Timeline
            </h2>
            <p className="font-body-md text-body-md text-slate-muted mt-2">
              Select a screening methodology to review detection windows, turnaround times, and recommended use cases.
            </p>
          </div>

          {/* Tab Selection Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {modalities.map((m) => (
              <button
                key={m.id}
                onClick={() => setActiveTab(m.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-label-md text-label-md transition-all cursor-pointer ${
                  activeTab === m.id
                    ? 'bg-primary text-surface-white font-bold shadow-md'
                    : 'bg-surface-clinical text-on-surface-variant hover:bg-surface-container border border-border-subtle'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">{m.icon}</span>
                {m.title}
              </button>
            ))}
          </div>

          {/* Active Tab Content Card */}
          <div className="bg-surface-clinical border border-border-subtle rounded-3xl p-8 lg:p-12 shadow-sm max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-border-subtle">
              <div>
                <span className="text-label-sm uppercase font-bold tracking-wider text-royal-blue">Specimen Profile</span>
                <h3 className="font-headline-md text-headline-md text-navy-dark font-bold mt-1">
                  {currentModality.title}
                </h3>
              </div>
              <div className="flex flex-col items-start md:items-end">
                <span className="text-label-sm text-slate-muted font-medium">Detection Window</span>
                <span className="text-headline-sm font-bold text-amber-rich">
                  {currentModality.detectionWindow}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
              <div>
                <h4 className="font-label-md text-label-md font-bold text-navy-dark mb-2">Ideal Use Cases</h4>
                <p className="font-body-md text-body-md text-slate-muted mb-6">
                  {currentModality.bestFor}
                </p>

                <h4 className="font-label-md text-label-md font-bold text-navy-dark mb-2">Results Turnaround</h4>
                <p className="font-body-md text-body-md text-slate-muted">
                  {currentModality.turnaround}
                </p>
              </div>

              <div>
                <h4 className="font-label-md text-label-md font-bold text-navy-dark mb-3">Key Testing Features</h4>
                <ul className="space-y-3 font-body-sm text-body-sm text-slate-charcoal">
                  {currentModality.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-status-success text-[18px] mt-0.5 shrink-0">check_circle</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border-subtle flex flex-wrap items-center justify-between gap-4">
              <span className="font-body-sm text-slate-muted">Need this test administered today?</span>
              <button
                onClick={() => onBookClick(currentModality.id)}
                className="px-6 py-2.5 rounded-lg bg-primary hover:bg-royal-blue text-surface-white font-label-md font-bold transition-all shadow-sm cursor-pointer"
              >
                Book {currentModality.title}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Panels Breakdown Table */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="max-w-[1320px] mx-auto px-space-md lg:px-space-xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-label-md text-label-md uppercase tracking-wider text-royal-blue font-bold">
              Diagnostic Toxicology Panels
            </span>
            <h2 className="font-display-hero text-headline-lg lg:text-headline-xl text-navy-dark mt-2 tracking-tight">
              Standard & Custom Substance Panels
            </h2>
            <p className="font-body-md text-body-md text-slate-muted mt-2">
              All non-negative immunoassay screens are backed by secondary gas chromatography-mass spectrometry (GC-MS) or LC-MS/MS verification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {panels.map((panel, idx) => (
              <div 
                key={idx}
                className="bg-surface-white rounded-2xl p-6 lg:p-8 border border-border-subtle shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-headline-sm text-headline-sm text-navy-dark font-bold">
                      {panel.name}
                    </h3>
                    <span className="px-2.5 py-1 rounded bg-blue-subtle text-royal-blue font-badge-caps text-badge-caps uppercase font-bold">
                      {panel.tag}
                    </span>
                  </div>
                  <p className="font-body-sm text-slate-muted mb-4">
                    <strong>Recommended for:</strong> {panel.commonUse}
                  </p>
                  <div className="border-t border-border-subtle pt-4">
                    <h5 className="font-label-sm text-label-sm uppercase font-bold text-slate-charcoal mb-2">
                      Substances Screened:
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {panel.substances.map((sub, sIdx) => (
                        <span 
                          key={sIdx}
                          className="px-2 py-1 rounded bg-surface-clinical text-slate-charcoal border border-border-subtle text-[12px] font-medium"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border-subtle flex items-center justify-between">
                  <span className="text-label-sm text-slate-muted">Same-Day Results Available</span>
                  <button
                    onClick={() => onBookClick('panel')}
                    className="text-royal-blue hover:text-primary font-label-md font-bold inline-flex items-center gap-1 cursor-pointer"
                  >
                    Select Panel <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workplace Programs Callout */}
      <section className="py-16 bg-navy-dark text-surface-white">
        <div className="max-w-[1320px] mx-auto px-space-md lg:px-space-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col gap-4">
              <span className="font-label-md text-label-md uppercase tracking-wider text-secondary-fixed font-bold">
                Workplace Drug-Free Compliance
              </span>
              <h3 className="font-display-hero text-headline-lg lg:text-headline-xl text-surface-white tracking-tight">
                DOT Consortium & Employer Testing Accounts
              </h3>
              <p className="font-body-md text-surface-container-highest leading-relaxed">
                Protect your fleet and workforce with fully managed random drug testing pools, rapid pre-employment turnaround, and emergency 24/7 post-accident collector dispatch within a 2-hour window.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-container">check_circle</span>
                  <span>49 CFR Part 40 Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-container">check_circle</span>
                  <span>MRO Portal Results</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-container">check_circle</span>
                  <span>On-Site Mobile Dispatch</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-navy-deep rounded-2xl p-8 border border-navy-deep flex flex-col gap-4">
              <h4 className="font-headline-sm text-headline-sm font-bold text-surface-white">
                Open a Corporate Account
              </h4>
              <p className="font-body-sm text-surface-container-highest">
                Set up automated employer billing, volume panel discounts, and secure web portal access for your HR safety team.
              </p>
              <button
                onClick={() => onBookClick('workplace')}
                className="w-full py-3.5 rounded-lg bg-amber-rich hover:bg-secondary text-slate-charcoal hover:text-surface-white font-label-md font-bold transition-all shadow-md cursor-pointer text-center"
              >
                Request Employer Account Setup
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

