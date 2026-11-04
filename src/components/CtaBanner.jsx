import React from 'react';

export default function CtaBanner({ onRequestClick }) {
  return (
    <section className="w-full py-space-2xl bg-gradient-to-r from-navy-dark via-royal-blue to-navy-deep text-surface-white shadow-inner">
      <div className="max-w-[1320px] mx-auto px-space-md lg:px-space-xl text-center flex flex-col items-center gap-space-md">
        <span className="px-3 py-1 rounded-full bg-secondary-fixed text-slate-charcoal font-badge-caps text-badge-caps uppercase font-bold">
          Fast Local Service
        </span>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold max-w-2xl leading-tight">
          Need Certified Specimen Collection or Court-Ready DNA in London, KY?
        </h2>
        <p className="font-body-lg text-body-lg text-surface-container-highest max-w-xl">
          Visit our facility at 360 Spring Street or speak directly with our diagnostics supervisor right now.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-space-sm pt-space-xs">
          <a
            className="inline-flex items-center gap-2 px-space-xl py-3.5 rounded-lg bg-amber-rich hover:bg-secondary text-slate-charcoal hover:text-surface-white font-label-md text-label-md shadow-lg transition-all font-bold"
            href="tel:6062600413"
          >
            <span className="material-symbols-outlined text-[20px]">call</span> Call (606) 260-0413
          </a>
          <button
            onClick={() => {
              if (onRequestClick) {
                onRequestClick();
              } else {
                document.getElementById('consultation-booking')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center gap-2 px-space-xl py-3.5 rounded-lg bg-surface-white/10 hover:bg-surface-white/20 text-surface-white font-label-md text-label-md transition-all border border-surface-white/20 cursor-pointer font-semibold"
          >
            <span className="material-symbols-outlined text-[20px]">event_available</span> Request On-Site Testing
          </button>
        </div>
      </div>
    </section>
  );
}
