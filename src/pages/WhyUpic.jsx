import React from 'react';

export default function WhyUpic({ onBookClick, onNavigateHome, onNavigateWorkplace }) {
  const threePillars = [
    {
      stat: '2.5x',
      statLabel: 'Higher Absence Rate',
      title: 'ABSENTEEISM',
      quote: 'Substance abusers are 2.5 times more likely to be absent 8 or more days a year.',
      desc: 'Unannounced call-outs, chronic monday-morning absences, and extended sick leave disrupt operational schedules, overburden sober coworkers, and drive costly overtime expenditures.',
      icon: 'event_busy',
      color: 'text-amber-rich',
      borderAccent: 'border-t-amber-rich',
    },
    {
      stat: '1/3',
      statLabel: 'Productivity Deficit',
      title: 'LOST PRODUCTIVITY',
      quote: 'Substance abusers are 1/3 Less Productive.',
      desc: 'Cognitive haze, morning hangovers, and lack of concentration significantly reduce job-site efficiency, leading to missed deadlines, damaged equipment, and preventable operational errors.',
      icon: 'trending_down',
      color: 'text-royal-blue',
      borderAccent: 'border-t-royal-blue',
    },
    {
      stat: '3x-5x',
      statLabel: 'Claims Surge',
      title: "WORKER'S COMPENSATION",
      quote: "Substance abusers file 3 to 5 times more Worker's Compensation claims.",
      desc: 'Impaired motor skills and compromised risk assessment directly correlate with catastrophic industrial injuries, drastically inflating your company’s insurance premiums and legal liability.',
      icon: 'shield_with_heart',
      color: 'text-status-critical',
      borderAccent: 'border-t-status-critical',
    },
  ];

  const upicAdvantages = [
    {
      icon: 'verified',
      title: 'Over 13 Years of Clinical Experience',
      desc: 'Led by owner & operator Jeff Hensley, UPIC Labs has worked directly with regional Kentucky businesses since 2007 to craft practical, defensible screening solutions.',
    },
    {
      icon: 'speed',
      title: 'Rapid 15-Minute Screens & 24h Results',
      desc: 'Keep hiring timelines fast and machine downtime minimal with instant point-of-care testing backed by certified Medical Review Officer (MRO) portal release.',
    },
    {
      icon: 'local_shipping',
      title: '24/7 Emergency Mobile Dispatch',
      desc: 'Post-accident or reasonable-suspicion testing dispatched directly to your job site, manufacturing plant, or distribution center within a 2-hour window.',
    },
    {
      icon: 'gavel',
      title: 'Court-Ready Chain of Custody',
      desc: 'Strict SAMHSA and DOT 49 CFR Part 40 compliant procedures ensure every test result firmly withstands union arbitration, legal hearings, and insurance audits.',
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
            <span className="text-primary font-bold">Why UPIC</span>
          </nav>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-rich/15 text-amber-rich font-badge-caps text-badge-caps uppercase font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-rich animate-pulse"></span>
            Employer Protection & Safety
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-20 bg-gradient-to-b from-surface-clinical via-surface to-surface-container-low">
        <div className="max-w-[1320px] mx-auto px-space-md lg:px-space-xl">
          <div className="max-w-3xl flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-subtle text-royal-blue font-label-sm text-label-sm w-fit font-bold border border-primary/15 shadow-sm">
              <span className="material-symbols-outlined text-[18px]">verified_user</span>
              Business Risk Mitigation
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-[42px] lg:leading-[50px] font-extrabold text-navy-dark tracking-tight">
              Why Your Business Needs a <span className="text-royal-blue">Drug Screening</span> Program
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed font-medium">
              Alcohol and drug use among employees can be an expensive problem for business and industry, with issues ranging from lost productivity, absenteeism, injuries, fatalities, theft and low employee morale, to an increase in health care, legal liabilities and workers' compensation costs.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onBookClick('workplace')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-amber-rich hover:bg-secondary text-slate-charcoal hover:text-surface-white font-label-md text-label-md shadow-md transition-all cursor-pointer font-bold"
              >
                <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                Schedule Employer Consultation
              </button>
              <button
                onClick={onNavigateWorkplace}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-surface-white text-royal-blue hover:bg-blue-subtle font-label-md text-label-md shadow-sm transition-all border border-border-subtle font-semibold cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                Visit the Workplace Page
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* The 3 Core Impact Pillars */}
      <section className="py-16 bg-surface-white border-y border-border-subtle">
        <div className="max-w-[1320px] mx-auto px-space-md lg:px-space-xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-label-md text-label-md uppercase tracking-wider text-royal-blue font-bold">
              The Critical Costs
            </span>
            <h2 className="text-2xl sm:text-3xl text-navy-dark mt-1 font-bold tracking-tight">
              Three Major Threats to Your Bottom Line
            </h2>
            <p className="font-body-md text-body-md text-slate-muted mt-2">
              Statistically validated data demonstrating why proactive drug testing is an essential investment for modern employers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {threePillars.map((pillar, idx) => (
              <div 
                key={idx}
                className={`bg-surface-clinical rounded-3xl p-8 border border-border-subtle shadow-sm hover:shadow-md transition-all flex flex-col justify-between border-t-4 ${pillar.borderAccent}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-surface-white text-royal-blue flex items-center justify-center shadow-sm">
                      <span className="material-symbols-outlined text-[26px]">{pillar.icon}</span>
                    </div>
                    <span className="text-[12px] uppercase font-bold tracking-wider text-slate-muted">
                      {pillar.statLabel}
                    </span>
                  </div>

                  <span className={`font-display-hero text-headline-xl sm:text-[44px] font-extrabold ${pillar.color} block leading-tight mb-2`}>
                    {pillar.stat}
                  </span>

                  <h3 className="text-[16px] sm:text-[18px] uppercase tracking-wider text-navy-dark font-extrabold mb-3">
                    {pillar.title}
                  </h3>

                  <div className="p-3.5 rounded-xl bg-surface-white border border-border-subtle mb-4 shadow-2xs">
                    <p className="font-body-sm text-body-sm font-bold text-navy-dark italic">
                      "{pillar.quote}"
                    </p>
                  </div>

                  <p className="font-body-sm text-body-sm text-slate-muted leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT THE WORKPLACE PAGE FOR MORE DETAILS (Featured Card) */}
      <section className="py-16 bg-surface">
        <div className="max-w-[1320px] mx-auto px-space-md lg:px-space-xl">
          <div className="rounded-3xl bg-gradient-to-tr from-blue-subtle/80 via-surface-white to-surface-clinical border-2 border-royal-blue/20 p-8 sm:p-12 shadow-md flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl flex flex-col gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-royal-blue text-surface-white font-badge-caps text-badge-caps uppercase font-bold w-fit">
                <span className="material-symbols-outlined text-[16px]">domain</span>
                VISIT THE WORKPLACE PAGE FOR MORE DETAILS
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-navy-dark leading-snug">
                Comprehensive Substance Abuse Impact & Industry Data
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Alcohol and drug use among employees can be an expensive problem for business and industry, with issues ranging from lost productivity, absenteeism, injuries, fatalities, theft and low employee morale, to an increase in health care, legal liabilities and workers' compensation costs.
              </p>
            </div>
            
            <div className="shrink-0 flex flex-col gap-3 w-full sm:w-auto">
              <button
                onClick={onNavigateWorkplace}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-royal-blue hover:bg-navy-deep text-surface-white font-label-md font-bold transition-all shadow-md cursor-pointer text-center"
              >
                <span>Explore Full Workplace Analysis</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>
              <span className="text-[12px] text-center text-slate-muted font-medium">
                Includes NCADD national statistics & high-risk industry breakdowns
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* The UPIC Difference Section */}
      <section className="py-16 lg:py-24 bg-surface-white border-t border-border-subtle">
        <div className="max-w-[1320px] mx-auto px-space-md lg:px-space-xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-label-md text-label-md uppercase tracking-wider text-royal-blue font-bold">
              The UPIC Advantage
            </span>
            <h2 className="text-2xl sm:text-3xl text-navy-dark mt-1 font-bold tracking-tight">
              Why Kentucky Employers Trust UPIC Labs
            </h2>
            <p className="font-body-md text-body-md text-slate-muted mt-2">
              Combining forensic laboratory rigor with personalized local convenience right here in London, KY.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {upicAdvantages.map((adv, i) => (
              <div 
                key={i}
                className="bg-surface-clinical rounded-2xl p-6 border border-border-subtle flex flex-col justify-between hover:border-royal-blue/30 transition-colors"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-subtle text-royal-blue flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-[24px]">{adv.icon}</span>
                  </div>
                  <h4 className="text-[16px] sm:text-[17px] font-bold text-navy-dark mb-2 leading-snug">
                    {adv.title}
                  </h4>
                  <p className="font-body-sm text-body-sm text-slate-muted leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Conversion CTA */}
      <section className="py-16 bg-navy-dark text-surface-white">
        <div className="max-w-[1320px] mx-auto px-space-md lg:px-space-xl">
          <div className="rounded-3xl bg-navy-deep p-8 md:p-12 border border-navy-deep flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="max-w-xl">
              <span className="text-secondary-fixed uppercase text-label-sm font-bold tracking-wider">
                Custom Corporate Accounts
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-surface-white mt-1">
                Protect Your Workforce & Eliminate Hidden Liabilities
              </h3>
              <p className="font-body-md text-surface-container-highest mt-2 leading-relaxed">
                Contact Jeff Hensley and our client coordination team today to configure a turnkey drug screening policy tailored to your operational shift schedule.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => onBookClick('workplace')}
                className="px-6 py-3.5 rounded-lg bg-amber-rich hover:bg-secondary text-slate-charcoal hover:text-surface-white font-label-md font-bold transition-all shadow-md cursor-pointer"
              >
                Set Up Testing Program
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

