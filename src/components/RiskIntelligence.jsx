import React from 'react';

export default function RiskIntelligence({ onBuildPlanClick }) {
  return (
    <section className="w-full py-space-3xl bg-surface-clinical relative overflow-hidden" id="risk-intelligence">
      <div className="max-w-[1320px] mx-auto px-space-md lg:px-space-xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-space-2xl">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gold-light text-secondary font-badge-caps text-badge-caps uppercase font-bold">
            Workplace Risk Intelligence
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] text-navy-dark mt-2 font-bold tracking-tight">
            The Hidden Cost of Substance Abuse in Industry
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
            Substance impairment is directly correlated with catastrophic job site injuries, lost productivity, and soaring insurance claims. Systematic testing is your first line of defense.
          </p>
        </div>

        {/* Bento Grid: Stats and Visuals */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-space-lg items-stretch">
          
          {/* Card 1: Fatalities & Injuries */}
          <div className="md:col-span-6 bg-surface-white border border-border-subtle rounded-2xl p-space-xl shadow-lg flex flex-col justify-between relative overflow-hidden">
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded bg-error-container text-status-critical font-badge-caps text-badge-caps uppercase font-bold">
                  OSHA & Industrial Safety
                </span>
                <span className="material-symbols-outlined text-status-critical text-[28px]">warning</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
                <div className="p-space-md rounded-xl bg-surface-clinical border border-border-subtle/80 flex flex-col">
                  <span className="font-display-hero text-[44px] leading-none font-bold text-navy-dark">
                    40<span className="text-amber-rich">%</span>
                  </span>
                  <span className="font-label-md text-label-md text-navy-dark font-bold mt-2">Industrial Fatalities</span>
                  <p className="font-body-sm text-body-sm text-slate-muted mt-1">Directly linked to alcohol and illicit drug consumption.</p>
                </div>
                <div className="p-space-md rounded-xl bg-surface-clinical border border-border-subtle/80 flex flex-col">
                  <span className="font-display-hero text-[44px] leading-none font-bold text-navy-dark">
                    47<span className="text-royal-blue">%</span>
                  </span>
                  <span className="font-label-md text-label-md text-navy-dark font-bold mt-2">Workplace Injuries</span>
                  <p className="font-body-sm text-body-sm text-slate-muted mt-1">Involve substance use, elevating compensation payouts.</p>
                </div>
              </div>

              <p className="font-body-md text-body-md text-on-surface-variant">
                Comprehensive drug and alcohol screening eliminates preventable hazards before equipment operators, drivers, and frontline technicians enter active job zones.
              </p>
            </div>

            {/* Risk Ratio Visual Illustration */}
            <div className="pt-space-md mt-space-md bg-surface-container-low rounded-xl p-space-md border border-border-subtle/80">
              <div className="flex justify-between text-label-sm font-label-sm text-navy-dark mb-1 font-bold">
                <span>Substance-Linked Incident Reduction with Testing</span>
                <span className="text-status-success font-bold">-67% Incident Rate</span>
              </div>
              <div className="w-full bg-border-subtle h-3 rounded-full overflow-hidden flex">
                <div className="bg-status-success h-full rounded-full transition-all duration-1000" style={{ width: '67%' }}></div>
                <div className="bg-error-container h-full" style={{ width: '33%' }}></div>
              </div>
              <div className="flex justify-between items-center text-body-sm font-body-sm text-slate-muted mt-2">
                <span>Standard Random Program</span>
                <span className="text-status-success font-semibold">Immediate Risk Mitigation</span>
              </div>
            </div>
          </div>

          {/* Card 2: Productivity & Turnover Graphic */}
          <div className="md:col-span-6 bg-surface-white border border-border-subtle rounded-2xl p-space-xl shadow-lg flex flex-col justify-between">
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded bg-gold-light text-secondary font-badge-caps text-badge-caps uppercase font-bold">
                  Business Efficiency
                </span>
                <span className="material-symbols-outlined text-amber-rich text-[28px]">trending_down</span>
              </div>

              <h3 className="text-[18px] sm:text-[20px] lg:text-[22px] text-navy-dark font-bold leading-snug">
                Protect Productivity & Reduce High Employee Turnover
              </h3>

              <p className="font-body-md text-body-md text-on-surface-variant">
                Employees struggling with undetected substance abuse are statistically 3.6 times more likely to be involved in a workplace accident and exhibit 300% higher absenteeism rates. Routine testing establishes accountability and boosts company morale.
              </p>

              {/* Visual Metric Comparison Chart */}
              <div className="space-y-3 pt-space-xs">
                <div>
                  <div className="flex justify-between text-label-sm font-label-sm mb-1">
                    <span className="text-slate-charcoal font-semibold">Worker Absenteeism</span>
                    <span className="text-status-critical font-bold">3.5x Higher Without Policy</span>
                  </div>
                  <div className="w-full bg-surface-clinical h-2.5 rounded-full overflow-hidden border border-border-subtle">
                    <div className="bg-amber-rich h-full rounded-full" style={{ width: '82%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-label-sm font-label-sm mb-1">
                    <span className="text-slate-charcoal font-semibold">Workers' Comp Claims</span>
                    <span className="text-status-critical font-bold">5x Higher Average Payout</span>
                  </div>
                  <div className="w-full bg-surface-clinical h-2.5 rounded-full overflow-hidden border border-border-subtle">
                    <div className="bg-royal-blue h-full rounded-full" style={{ width: '76%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-label-sm font-label-sm mb-1">
                    <span className="text-slate-charcoal font-semibold">Turnover Mitigation</span>
                    <span className="text-status-success font-bold">+41% Retention Stability</span>
                  </div>
                  <div className="w-full bg-surface-clinical h-2.5 rounded-full overflow-hidden border border-border-subtle">
                    <div className="bg-status-success h-full rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-space-lg flex items-center justify-between border-t border-border-subtle/60 mt-4">
              <span className="font-body-sm text-body-sm text-slate-muted">Custom corporate packages available</span>
              <button
                onClick={() => {
                  if (onBuildPlanClick) {
                    onBuildPlanClick();
                  } else {
                    document.getElementById('consultation-booking')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-royal-blue font-label-md text-label-md font-bold hover:text-navy-deep inline-flex items-center gap-1 cursor-pointer"
              >
                Build Employer Plan <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial / Assurance Banner */}
        <div className="mt-space-lg bg-navy-dark text-surface-white rounded-2xl p-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md shadow-xl">
          <div className="flex items-center gap-space-md">
            <div className="w-12 h-12 rounded-full bg-royal-blue text-secondary-fixed flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[24px]">verified</span>
            </div>
            <div>
              <h4 className="font-title-md text-title-md font-bold text-surface-white">
                Certified Medical Review Officer (MRO) Verification
              </h4>
              <p className="font-body-sm text-body-sm text-surface-container-highest">
                Every non-negative diagnostic screen undergoes medical review to ensure zero false positives and legal defensibility.
              </p>
            </div>
          </div>
          <a
            className="shrink-0 px-space-md py-2.5 rounded-lg bg-secondary-fixed text-slate-charcoal hover:bg-amber-rich font-label-md text-label-md transition-all font-semibold shadow"
            href="tel:6062600413"
          >
            Speak to a Specialist
          </a>
        </div>

      </div>
    </section>
  );
}
