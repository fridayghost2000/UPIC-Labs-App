import React from 'react';

export default function ShopTestsModal({ isOpen, onClose, onSelectTest }) {
  if (!isOpen) return null;

  const testCatalog = [
    {
      id: 'workplace-10',
      name: '10-Panel Occupational Drug Screen',
      type: 'Urine / Instant or Lab GC-MS',
      price: '$65.00',
      tag: 'Most Popular',
      desc: 'Detects AMP, BAR, BZO, COC, mAMP, MTD, OPI, PCP, PPX, THC.',
      category: 'workplace',
    },
    {
      id: 'dot-5',
      name: 'DOT 5-Panel Federal Safety Screen',
      type: 'Urine / SAMHSA Certified',
      price: '$75.00',
      tag: 'Federal Mandate',
      desc: 'Compliant with FMCSA, FAA, FRA, FTA, PHMSA 49 CFR Part 40 standards.',
      category: 'dot',
    },
    {
      id: 'dna-court',
      name: 'Legal Court-Admissible DNA Paternity',
      type: 'Buccal Swab / AABB Certified',
      price: '$249.00',
      tag: 'Court Ready',
      desc: 'Includes child & alleged father with full Chain-of-Custody and notary verification.',
      category: 'dna',
    },
    {
      id: 'hair-follicle',
      name: 'Hair Follicle Extended 90-Day Screen',
      type: 'Hair Specimen',
      price: '$120.00',
      tag: 'Long Detection Window',
      desc: 'Forensic evaluation showing historical drug usage over past 90 days.',
      category: 'workplace',
    },
    {
      id: 'bat-alcohol',
      name: 'Certified Breath Alcohol Testing (BAT)',
      type: 'DOT Evidential Breathalyzer',
      price: '$45.00',
      tag: 'Immediate',
      desc: 'Instant confirmation with printed evidentiary test strip.',
      category: 'workplace',
    },
    {
      id: 'mobile-dispatch',
      name: '24/7 Mobile Collector On-Site Dispatch',
      type: 'Emergency Response',
      price: 'Custom Quote',
      tag: '24/7 Available',
      desc: 'Post-accident or reasonable suspicion collector dispatched to your facility.',
      category: 'mobile',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-dark/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-surface-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl border border-border-subtle max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between border-b border-border-subtle pb-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-royal-blue text-[28px]">shopping_cart</span>
            <div>
              <h3 className="font-headline-sm font-bold text-navy-dark">Clinical Diagnostic Test Catalog</h3>
              <p className="font-label-sm text-slate-muted">Order or schedule diagnostic screens with UPIC Labs</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-muted hover:text-navy-dark hover:bg-surface-clinical transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {testCatalog.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-xl border border-border-subtle bg-surface-clinical hover:border-royal-blue hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-subtle text-royal-blue">
                    {item.tag}
                  </span>
                  <span className="font-bold text-navy-dark text-sm">{item.price}</span>
                </div>
                <h4 className="font-bold text-navy-dark text-sm mb-1">{item.name}</h4>
                <p className="text-xs text-slate-muted mb-2">{item.desc}</p>
              </div>
              <button
                onClick={() => {
                  onSelectTest(item.category);
                  onClose();
                }}
                className="w-full mt-2 py-1.5 px-3 rounded-lg bg-royal-blue hover:bg-navy-deep text-surface-white text-xs font-semibold flex items-center justify-center gap-1 transition-colors"
              >
                <span>Select & Book</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-border-subtle flex items-center justify-between">
          <span className="text-xs text-slate-muted">Need custom corporate panel rates?</span>
          <a href="tel:6062600413" className="text-xs font-bold text-royal-blue hover:underline">
            Call (606) 260-0413
          </a>
        </div>
      </div>
    </div>
  );
}
