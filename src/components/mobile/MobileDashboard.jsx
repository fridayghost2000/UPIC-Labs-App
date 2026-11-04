import React from 'react';

export default function MobileDashboard({
  onNavigateTab,
  onOpenBooking,
  onOpenTracker,
  onOpenResults,
  onOpenEmployerHub,
  onOpenCustodyForm,
  onSelectServiceCategory,
}) {
  return (
    <div className="flex flex-col w-full px-4 py-3 space-y-3.5 pb-6">
      
      {/* 1. 24/7 RAPID RESPONSE BANNER (Compact, refined text) */}
      <div className="bg-primary text-on-primary rounded-2xl p-3.5 shadow-md relative overflow-hidden">
        {/* Subtle glow */}
        <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-amber-400/15 rounded-full blur-2xl pointer-events-none"></div>

        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-status-compliant animate-pulse"></span>
            <span className="font-label-caps text-[10px] text-amber-200 uppercase font-bold tracking-wider">
              24/7 Rapid Response
            </span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-white/10 text-white text-[9px] font-semibold">
            Walk-Ins OK
          </span>
        </div>

        <div className="flex items-center justify-between gap-2.5">
          <div>
            <div className="text-[17px] font-bold text-white tracking-tight leading-none">
              (606) 260-0413
            </div>
            <div className="text-[10.5px] text-blue-200 mt-1 flex items-center gap-1">
              <span className="material-symbols-outlined text-[13px]">location_on</span>
              <span>360 Spring St, Ste 2 • London, KY</span>
            </div>
          </div>

          <a
            href="tel:6062600413"
            className="shrink-0 px-3 py-1.5 bg-amber-400 hover:bg-amber-300 active:scale-95 text-slate-900 rounded-xl font-bold text-[11px] flex items-center gap-1 shadow-sm transition-all"
          >
            <span className="material-symbols-outlined text-[14px]">call</span>
            <span>Call Now</span>
          </a>
        </div>
      </div>

      {/* 2. LIVE SPECIMEN CUSTODY TRACKER (Minimal, clear progress, zero text overlap) */}
      <div className="bg-surface-card rounded-2xl p-4 border border-border-subtle shadow-sm space-y-3">
        {/* Card Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-[18px]">biotech</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-xs font-bold text-primary">#UPIC-8842-DK</span>
                <span className="px-1.5 py-0.2 rounded bg-surface-container text-[10px] font-bold text-primary">ST-47</span>
              </div>
              <div className="text-xs text-on-surface-variant font-medium">10-Panel Rapid Urine Screen</div>
            </div>
          </div>

          <span className="px-2.5 py-1 rounded-full bg-blue-50 text-primary border border-blue-200 text-[10px] font-bold uppercase tracking-wider shrink-0">
            In Analysis
          </span>
        </div>

        {/* 4-Stage Clean Visual Progress Line */}
        <div className="pt-1">
          <div className="grid grid-cols-4 gap-1.5 mb-1.5">
            <div className="h-1.5 rounded-full bg-status-compliant"></div>
            <div className="h-1.5 rounded-full bg-status-compliant"></div>
            <div className="h-1.5 rounded-full bg-primary relative overflow-hidden">
              <div className="absolute inset-0 bg-amber-300 opacity-80 animate-pulse"></div>
            </div>
            <div className="h-1.5 rounded-full bg-surface-container"></div>
          </div>
          <div className="grid grid-cols-4 text-center text-[10px] font-bold">
            <span className="text-status-compliant">Collected</span>
            <span className="text-status-compliant">Logged</span>
            <span className="text-primary">Analysis</span>
            <span className="text-slate-400">Released</span>
          </div>
        </div>

        {/* Footer Link */}
        <div className="pt-2 border-t border-border-subtle flex items-center justify-between text-xs">
          <span className="text-on-surface-variant flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px] text-status-compliant">verified</span>
            <span>London Central Lab</span>
          </span>
          <button
            type="button"
            onClick={onOpenCustodyForm}
            className="text-primary hover:text-secondary font-bold flex items-center gap-0.5 cursor-pointer"
          >
            <span>Custody Form</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          </button>
        </div>
      </div>

      {/* 3. DIAGNOSTIC PORTALS (Spacious 2x2 Grid with short, crisp labels) */}
      <div>
        <div className="flex items-center justify-between mb-2 px-0.5">
          <span className="text-xs font-bold text-on-surface uppercase tracking-wider">
            Diagnostic Portals
          </span>
          <span className="text-[10px] text-on-surface-variant font-semibold">Direct Access</span>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {/* Portal 1: Book Test */}
          <button
            type="button"
            onClick={onOpenBooking}
            className="p-3.5 bg-surface-card rounded-2xl border border-border-subtle hover:border-primary/40 shadow-sm flex flex-col justify-between text-left active:scale-[0.98] transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              </div>
              <span className="px-1.5 py-0.5 rounded bg-blue-100 text-primary text-[9px] font-bold uppercase">
                Rapid
              </span>
            </div>
            <div>
              <div className="font-bold text-xs text-on-surface">Book a Test</div>
              <div className="text-[10px] text-on-surface-variant mt-0.5">Walk-in or On-site</div>
            </div>
          </button>

          {/* Portal 2: Track Status */}
          <button
            type="button"
            onClick={onOpenTracker}
            className="p-3.5 bg-surface-card rounded-2xl border border-border-subtle hover:border-secondary/40 shadow-sm flex flex-col justify-between text-left active:scale-[0.98] transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 text-status-compliant flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">qr_code_scanner</span>
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-status-compliant"></span>
            </div>
            <div>
              <div className="font-bold text-xs text-on-surface">Track Status</div>
              <div className="text-[10px] text-on-surface-variant mt-0.5">Live custody &amp; log</div>
            </div>
          </button>

          {/* Portal 3: View Results */}
          <button
            type="button"
            onClick={onOpenResults}
            className="p-3.5 bg-surface-card rounded-2xl border border-border-subtle hover:border-primary/40 shadow-sm flex flex-col justify-between text-left active:scale-[0.98] transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">verified</span>
              </div>
              <span className="px-1.5 py-0.5 rounded bg-indigo-100 text-indigo-800 text-[9px] font-bold uppercase">
                HIPAA
              </span>
            </div>
            <div>
              <div className="font-bold text-xs text-on-surface">View Results</div>
              <div className="text-[10px] text-on-surface-variant mt-0.5">Physician approved</div>
            </div>
          </button>

          {/* Portal 4: Employer Hub */}
          <button
            type="button"
            onClick={onOpenEmployerHub}
            className="p-3.5 bg-surface-card rounded-2xl border border-border-subtle hover:border-amber-500/40 shadow-sm flex flex-col justify-between text-left active:scale-[0.98] transition-all cursor-pointer"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">corporate_fare</span>
              </div>
              <span className="px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 text-[9px] font-bold uppercase">
                B2B
              </span>
            </div>
            <div>
              <div className="font-bold text-xs text-on-surface">Employer Hub</div>
              <div className="text-[10px] text-on-surface-variant mt-0.5">Workforce rosters</div>
            </div>
          </button>
        </div>
      </div>

      {/* 4. TESTING SUITES (Clean single-column cards with image banner, zero clutter) */}
      <div className="space-y-3 pt-1">
        <div className="flex items-center justify-between px-0.5">
          <span className="text-xs font-bold text-on-surface uppercase tracking-wider">
            Clinical Testing Suites
          </span>
          <button
            type="button"
            onClick={() => onNavigateTab('services')}
            className="text-[11px] text-secondary hover:text-primary font-bold cursor-pointer"
          >
            View All →
          </button>
        </div>

        {/* Suite 1: Workplace Drug & Alcohol */}
        <div className="bg-surface-card rounded-2xl border border-border-subtle overflow-hidden shadow-sm flex flex-col">
          <div className="h-28 w-full relative overflow-hidden bg-surface-container">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuzjOeUF6sJAnFtMthpxiwReXQWfvka53LShWl7N3SBDXarD01vamW27vxCZZEjyCSuYEwFT3yKi6gzRrYie4ylixgS4NGU-oSFI7431RRiT2mpeZP8Nk1n5ouF070GvCPqw-muevf-DUJ3iLFc4dbsZ0WXfSKp6eghKLvmMflOS7TBP7MAywB1KRq_PJ3hbnVAJqfo1-G2zkr091LAtGiFFNPWewCgPxPviLyTQ"
              alt="Workplace screening laboratory"
              className="w-full h-full object-cover"
              onError={(e) => { e.target.src = '/workplace-lab-testing.webp'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-wider">
              Workforce Safety
            </span>
          </div>

          <div className="p-3.5 flex flex-col">
            <h3 className="font-bold text-sm text-on-surface">Workplace Drug &amp; Alcohol Screening</h3>
            <p className="text-[11px] text-on-surface-variant mt-1 leading-snug">
              Pre-employment, random, and post-incident screening. Fast same-day negative reports.
            </p>

            <div className="mt-2.5 flex flex-wrap gap-1">
              <span className="px-2 py-0.5 rounded-md bg-surface-container text-primary text-[10px] font-semibold">5 &amp; 10 Panel</span>
              <span className="px-2 py-0.5 rounded-md bg-surface-container text-primary text-[10px] font-semibold">Hair Follicle</span>
              <span className="px-2 py-0.5 rounded-md bg-surface-container text-primary text-[10px] font-semibold">Breath Alcohol</span>
            </div>

            <div className="mt-3 pt-2.5 border-t border-border-subtle flex items-center justify-between">
              <span className="text-[10px] font-bold text-status-compliant">● Same-Day Results</span>
              <button
                type="button"
                onClick={() => {
                  if (onSelectServiceCategory) onSelectServiceCategory('workplace');
                  if (onNavigateTab) onNavigateTab('services');
                }}
                className="text-xs font-bold text-secondary hover:text-primary flex items-center gap-0.5 cursor-pointer"
              >
                <span>Explore Panels</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Suite 2: Court-Ready DNA Testing */}
        <div className="bg-surface-card rounded-2xl border border-border-subtle overflow-hidden shadow-sm flex flex-col">
          <div className="h-28 w-full relative overflow-hidden bg-surface-container">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4Zi4P2EVhGEJmIjHb0j2FXVisSVMAjNWOx0EttoAOgpaSASi_JiyyorO6bnoEMHxly7tKprj8u22gPq6e0rNqb0Ht0sliW11O0DV6efxdOgSdhnZEjbdj4gPkJX-ibwYCSaEjxQ87DIlahHGoE-a8MJsfXV8abvT8W0DBAPLX1YfH0GSKHq2Ik7QsYpatupiCrGL5TfBeiOu2eUmKbA3CDMttTO10JsuQUImQOQ"
              alt="DNA Sequencing testing"
              className="w-full h-full object-cover"
              onError={(e) => { e.target.src = '/workplace-vials.webp'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-amber-500 text-slate-900 text-[10px] font-bold uppercase tracking-wider">
              Court Admissible
            </span>
          </div>

          <div className="p-3.5 flex flex-col">
            <h3 className="font-bold text-sm text-on-surface">Court-Ready DNA Paternity Testing</h3>
            <p className="text-[11px] text-on-surface-variant mt-1 leading-snug">
              Strict chain-of-custody protocols for custody litigation, child support, and immigration.
            </p>

            <div className="mt-2.5 flex flex-wrap gap-1">
              <span className="px-2 py-0.5 rounded-md bg-surface-container text-amber-900 text-[10px] font-semibold">AABB Accredited</span>
              <span className="px-2 py-0.5 rounded-md bg-surface-container text-amber-900 text-[10px] font-semibold">99.99%+ Match</span>
              <span className="px-2 py-0.5 rounded-md bg-surface-container text-amber-900 text-[10px] font-semibold">Legal Seals</span>
            </div>

            <div className="mt-3 pt-2.5 border-t border-border-subtle flex items-center justify-between">
              <span className="text-[10px] font-bold text-primary">● Notarized Findings</span>
              <button
                type="button"
                onClick={() => {
                  if (onSelectServiceCategory) onSelectServiceCategory('dna');
                  if (onOpenBooking) onOpenBooking();
                }}
                className="text-xs font-bold text-secondary hover:text-primary flex items-center gap-0.5 cursor-pointer"
              >
                <span>Schedule DNA</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Suite 3: Federal DOT Compliance */}
        <div className="bg-surface-card rounded-2xl border border-border-subtle p-3.5 shadow-sm flex flex-col">
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-status-compliant flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-[18px]">local_shipping</span>
              </div>
              <div>
                <h3 className="font-bold text-sm text-on-surface">Federal DOT Compliance</h3>
                <span className="text-[10px] text-on-surface-variant">Mandated 49 CFR Part 40</span>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded bg-emerald-100 text-status-compliant text-[9px] font-bold uppercase">
              DOT Ready
            </span>
          </div>

          <p className="text-[11px] text-on-surface-variant mt-1 leading-snug">
            FMCSA, FAA, FTA, FRA, PHMSA, and US Coast Guard safety screening programs with certified MRO review.
          </p>

          <div className="mt-3 pt-2.5 border-t border-border-subtle flex items-center justify-between">
            <span className="text-[10px] font-semibold text-on-surface-variant">Random Pools &amp; Clearinghouse</span>
            <button
              type="button"
              onClick={() => {
                if (onSelectServiceCategory) onSelectServiceCategory('dot');
                if (onOpenBooking) onOpenBooking();
              }}
              className="px-2.5 py-1 bg-primary text-white rounded-lg text-xs font-bold hover:bg-secondary transition-colors"
            >
              Enroll Fleet
            </button>
          </div>
        </div>
      </div>

      {/* 5. LONDON TESTING FACILITY (Clean & Compact) */}
      <div className="bg-surface-card rounded-2xl border border-border-subtle p-3.5 shadow-sm space-y-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[18px] text-secondary">pin_drop</span>
            <span className="font-bold text-xs text-on-surface">London Testing Facility</span>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-status-compliant text-[10px] font-bold">
            Open Today
          </span>
        </div>

        <div className="text-xs text-on-surface-variant">
          <div className="font-semibold text-on-surface">380 Spring St, Suite 2 • London, KY 40741</div>
          <div className="text-[11px] mt-0.5">Mon–Fri 9AM–5PM • 24/7 Mobile Dispatch Available</div>
        </div>

        <div className="flex items-center gap-2 pt-1">
          <a
            href="tel:6062600413"
            className="flex-1 py-2 bg-primary hover:bg-secondary text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1 transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">call</span>
            <span>(606) 260-0413</span>
          </a>
          <a
            href="https://maps.google.com/?q=360+Spring+Street+Suite+2+London+KY"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-2 bg-surface-container text-primary rounded-xl text-xs font-bold hover:bg-surface-variant flex items-center justify-center gap-1"
          >
            <span className="material-symbols-outlined text-[15px]">directions</span>
            <span>Directions</span>
          </a>
        </div>
      </div>

    </div>
  );
}
