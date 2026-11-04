import React from 'react';

export default function AboutUs({ onBookClick, onNavigateHome }) {
  const milestones = [
    {
      year: '2007',
      title: 'First-Hand Clinical Insight',
      desc: 'While running a suboxone rehab clinic, Jeff Hensley saw first-hand the operational and human struggles that businesses endured due to substance abuse. Seeing the critical need for a reliable, business-friendly screening partner, he began drug screening part-time.',
    },
    {
      year: '2012',
      title: 'UPIC Labs LLC Officially Founded',
      desc: 'Responding to rapid regional demand, Jeff officially opened UPIC Labs LLC as a full-time diagnostic screening facility, dedicated to delivering optimum, customized testing services for local and regional employers.',
    },
    {
      year: '2018',
      title: 'Legal DNA & Federal DOT Expansion',
      desc: 'Expanded testing capabilities to include AABB-aligned legal DNA paternity verification for family courts, alongside comprehensive DOT 49 CFR Part 40 consortium pools and 24/7 mobile emergency dispatch.',
    },
    {
      year: 'Present',
      title: 'Over 13 Years of Trusted Science',
      desc: 'Today, UPIC Labs is Eastern Kentucky’s premier independent diagnostic and legal screening facility—trusted by regional corporations, court systems, and families for rapid, court-admissible results.',
    },
  ];

  const values = [
    {
      icon: 'handshake',
      title: 'Tailored Business Partnerships',
      desc: 'We do not believe in one-size-fits-all testing. We work directly with owners and HR teams to design screening protocols tailored specifically to their shift patterns, safety thresholds, and industry mandates.',
    },
    {
      icon: 'verified_user',
      title: 'Uncompromising Chain-of-Custody',
      desc: 'Every single sample follows strict forensic protocols—from photographic identity verification to dual-initial tamper-evident seals—ensuring 100% legal defensibility.',
    },
    {
      icon: 'schedule',
      title: 'Zero Downtime, Rapid Turnaround',
      desc: 'We know that paused machinery or delayed hires cost businesses money. Our rapid 15-minute screens and 24/7 emergency dispatch keep operations running smoothly.',
    },
    {
      icon: 'home_health',
      title: 'Community-Rooted Care',
      desc: 'Based right here in London, Kentucky, we treat every donor, business, and family with dignity, confidentiality, and prompt personal attention.',
    },
  ];

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
            <span className="text-primary font-bold">About Us</span>
          </nav>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-rich/15 text-amber-rich font-badge-caps text-badge-caps uppercase font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-rich animate-pulse"></span>
            Over 13 Years of Experience
          </span>
        </div>
      </div>

      {/* Hero / Founder Story Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-surface-clinical via-surface to-surface-container-low">
        <div className="max-w-[1320px] mx-auto px-space-md lg:px-space-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Jeff Hensley Photo Card */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-md">
                {/* Decorative Backdrop Glow */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-royal-blue/20 to-secondary-container/30 rounded-3xl blur-2xl -z-10"></div>
                
                <div className="bg-surface-white rounded-3xl p-5 border border-border-subtle shadow-xl overflow-hidden">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-square bg-surface-container">
                    <img 
                      src="/jeff-hensley.webp" 
                      alt="Jeff Hensley - Owner & Operator of UPIC Labs LLC" 
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-surface-white">
                      <span className="px-2.5 py-0.5 rounded bg-amber-rich text-slate-charcoal font-badge-caps text-badge-caps uppercase font-bold inline-block mb-1">
                        Owner & Operator
                      </span>
                      <h3 className="font-headline-md text-headline-md font-bold text-surface-white leading-tight">
                        Jeff Hensley
                      </h3>
                      <p className="font-label-sm text-surface-container-highest">
                        Founder, UPIC Labs LLC
                      </p>
                    </div>
                  </div>

                  {/* Direct Contact Card */}
                  <div className="mt-4 pt-4 border-t border-border-subtle flex flex-col gap-2 font-body-sm text-body-sm">
                    <div className="flex items-center justify-between text-navy-dark">
                      <span className="text-slate-muted">Headquarters:</span>
                      <span className="font-semibold">London, Kentucky</span>
                    </div>
                    <div className="flex items-center justify-between text-navy-dark">
                      <span className="text-slate-muted">Direct Phone:</span>
                      <a href="tel:6062600413" className="font-bold text-royal-blue hover:underline">
                        (606) 260-0413
                      </a>
                    </div>
                    <div className="flex items-center justify-between text-navy-dark">
                      <span className="text-slate-muted">Email:</span>
                      <a href="mailto:jeffhensley@upiclabs.com" className="font-medium text-royal-blue hover:underline">
                        jeffhensley@upiclabs.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: The Inspiring Story & Mission */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-light text-secondary font-label-sm text-label-sm w-fit font-bold border border-gold-accent/30 shadow-sm">
                <span className="material-symbols-outlined text-[18px]">workspace_premium</span>
                Over 13 Years of Drug Testing Experience!
              </div>

              <h1 className="font-display-hero text-headline-xl-mobile sm:text-display-hero text-navy-dark tracking-tight leading-tight">
                Dedicated to Keeping Businesses Safe, Efficient & Compliant
              </h1>

              {/* Exact user-provided narrative spotlight */}
              <div className="bg-surface-white rounded-2xl p-6 lg:p-8 border-l-4 border-l-royal-blue border border-border-subtle shadow-sm flex flex-col gap-4">
                <p className="font-body-lg text-body-lg text-on-surface leading-relaxed font-medium">
                  <strong>Jeff Hensley</strong> is the owner and operator of UPIC Labs LLC. He became interested in drug testing while running a suboxone rehab clinic, where he saw first hand the struggles that businesses endured because of drug problems.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  He saw the need for a reliable drug screening lab, which would work with businesses to meet their specific needs. In 2007 he began drug screening part time, and in 2012 he officially opened UPIC Labs LLC as a full time lab.
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  He has a passion for helping businesses run as efficiently as possible and prides himself in giving the optimum services to his clients.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onBookClick()}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-amber-rich hover:bg-secondary text-slate-charcoal hover:text-surface-white font-label-md text-label-md shadow-md transition-all cursor-pointer font-bold"
                >
                  <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                  Schedule an Appointment
                </button>
                <a
                  href="tel:6062600413"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-surface-white text-royal-blue hover:bg-blue-subtle font-label-md text-label-md shadow-sm transition-all border border-border-subtle font-semibold"
                >
                  <span className="material-symbols-outlined text-[20px]">call</span>
                  Speak with Jeff: (606) 260-0413
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The Journey Timeline */}
      <section className="py-16 lg:py-24 bg-surface-white border-y border-border-subtle">
        <div className="max-w-[1320px] mx-auto px-space-md lg:px-space-xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-label-md text-label-md uppercase tracking-wider text-royal-blue font-bold">
              Our Journey
            </span>
            <h2 className="font-display-hero text-headline-lg lg:text-headline-xl text-navy-dark mt-2 tracking-tight">
              A Proven Track Record of Clinical Integrity
            </h2>
            <p className="font-body-md text-body-md text-slate-muted mt-3">
              From our origins addressing community addiction to becoming Eastern Kentucky’s premier independent diagnostic partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div 
                key={idx}
                className="bg-surface-clinical rounded-2xl p-6 border border-border-subtle shadow-sm flex flex-col relative group hover:border-royal-blue/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-subtle text-royal-blue flex items-center justify-center font-bold text-headline-sm mb-4 group-hover:bg-royal-blue group-hover:text-surface-white transition-colors">
                  {m.year}
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-navy-dark mb-2">
                  {m.title}
                </h3>
                <p className="font-body-sm text-body-sm text-slate-muted leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24 bg-surface-clinical">
        <div className="max-w-[1320px] mx-auto px-space-md lg:px-space-xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-label-md text-label-md uppercase tracking-wider text-royal-blue font-bold">
              Our Core Principles
            </span>
            <h2 className="font-display-hero text-headline-lg lg:text-headline-xl text-navy-dark mt-2 tracking-tight">
              Why Regional Employers Rely on UPIC
            </h2>
            <p className="font-body-md text-body-md text-slate-muted mt-3">
              Built on empathy, scientific precision, and rapid personal responsiveness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <div 
                key={i}
                className="bg-surface-white rounded-2xl p-8 border border-border-subtle shadow-sm flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-subtle text-royal-blue flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[24px]">{v.icon}</span>
                </div>
                <div>
                  <h3 className="font-headline-sm text-headline-sm font-bold text-navy-dark mb-2">
                    {v.title}
                  </h3>
                  <p className="font-body-md text-body-md text-slate-muted leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Conversion Banner */}
      <section className="py-16 bg-navy-dark text-surface-white">
        <div className="max-w-[1320px] mx-auto px-space-md lg:px-space-xl">
          <div className="rounded-3xl bg-navy-deep p-8 md:p-12 border border-navy-deep flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="max-w-xl">
              <span className="text-secondary-fixed uppercase text-label-sm font-bold tracking-wider">
                Speak Directly with Leadership
              </span>
              <h3 className="font-headline-lg text-headline-lg font-bold text-surface-white mt-2">
                Ready to Streamline Your Testing Protocols?
              </h3>
              <p className="font-body-md text-surface-container-highest mt-2">
                Connect directly with Jeff Hensley and our clinical coordinator team to review your company’s drug screening policy or book an individual test.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => onBookClick()}
                className="px-6 py-3.5 rounded-lg bg-amber-rich hover:bg-secondary text-slate-charcoal hover:text-surface-white font-label-md font-bold transition-all shadow-md cursor-pointer"
              >
                Schedule Appointment
              </button>
              <button
                onClick={onNavigateHome}
                className="px-6 py-3.5 rounded-lg bg-navy-dark hover:bg-navy-dark/80 text-surface-white font-label-md font-semibold transition-all border border-border-subtle/20 cursor-pointer"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

