import React, { useState } from 'react';

export default function MobileServices({ isTablet = false, onBookTest }) {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'workplace', label: 'Workplace Drug' },
    { id: 'dot', label: 'Federal DOT' },
    { id: 'dna', label: 'DNA Paternity' },
    { id: 'mobile', label: 'Mobile On-Site' },
  ];

  const services = [
    {
      id: 'workplace-10',
      category: 'workplace',
      name: '10-Panel Occupational Drug Screen',
      badge: 'Rapid / Lab GC-MS',
      badgeColor: 'bg-blue-100 text-primary',
      turnaround: 'Same-Day',
      sample: 'Urine Specimen',
      price: '$65.00',
      desc: 'Standard pre-employment and random workplace compliance screening.',
      tags: ['Pre-Employment', 'Random Pool'],
    },
    {
      id: 'dot-5',
      category: 'dot',
      name: 'Federal DOT 5-Panel Safety Screen',
      badge: '49 CFR Part 40',
      badgeColor: 'bg-emerald-100 text-status-compliant',
      turnaround: '24-48h MRO',
      sample: 'Split Urine Specimen',
      price: '$75.00',
      desc: 'Mandated commercial driver safety compliance screening.',
      tags: ['FMCSA Clearinghouse', 'MRO Verified'],
    },
    {
      id: 'dna-court',
      category: 'dna',
      name: 'Court-Ready Legal DNA Paternity',
      badge: 'Court Admissible',
      badgeColor: 'bg-amber-100 text-amber-900',
      turnaround: '2-3 Days',
      sample: 'Cheek Swab',
      price: '$249.00',
      desc: 'Strict chain-of-custody paternity testing with notarized legal findings.',
      tags: ['Legal Seals', '99.99% Match'],
    },
    {
      id: 'hair-follicle',
      category: 'workplace',
      name: 'Hair Follicle 90-Day Extended Screen',
      badge: '90-Day Window',
      badgeColor: 'bg-purple-100 text-purple-900',
      turnaround: '48-72 Hours',
      sample: 'Hair Specimen',
      price: '$120.00',
      desc: 'Extended 3-month detection window for historical substance screening.',
      tags: ['Extended Window', 'Zero Tampering'],
    },
    {
      id: 'breath-alcohol',
      category: 'workplace',
      name: 'Evidential Breath Alcohol Test (BAT)',
      badge: 'Instant Result',
      badgeColor: 'bg-blue-100 text-secondary',
      turnaround: '15 Minutes',
      sample: 'Evidential Breathalyzer',
      price: '$45.00',
      desc: 'DOT-approved breathalyzer with immediate printed verification receipt.',
      tags: ['Post-Accident', 'On-Demand'],
    },
    {
      id: 'mobile-collector',
      category: 'mobile',
      name: '24/7 Mobile Collector On-Site Dispatch',
      badge: '24/7 Emergency',
      badgeColor: 'bg-rose-100 text-rose-900',
      turnaround: '< 60 Mins',
      sample: 'On-Site Field',
      price: 'Custom Quote',
      desc: 'Emergency post-incident and scheduled group collection at your facility.',
      tags: ['Rapid Dispatch', 'Zero Downtime'],
    },
  ];

  const filteredServices = filter === 'all' ? services : services.filter((s) => s.category === filter);

  return (
    <div className="flex flex-col w-full px-4 py-3 pb-8 space-y-3">
      {/* Header */}
      <div>
        <div className="flex items-center gap-1.5 mb-1">
          <span className="font-label-caps text-[10px] text-primary tracking-wider uppercase font-bold">
            Clinical Catalog
          </span>
          <span className="text-slate-300 text-[10px]">•</span>
          <span className="text-[10px] text-on-surface-variant font-medium">London Central Lab</span>
        </div>
        <h2 className="text-lg font-bold text-on-surface tracking-tight">
          Diagnostic Testing Suites
        </h2>
        <p className="text-xs text-on-surface-variant mt-0.5">
          Select an accredited clinical panel for clinic walk-in or mobile dispatch.
        </p>

        {/* Filter Chips Scroll */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-2.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setFilter(cat.id)}
              className={`shrink-0 px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                filter === cat.id
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-surface-card border border-border-subtle text-on-surface hover:bg-surface-container'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Services List - FULL WIDTH ON MOBILE, 2-COLUMN ON TABLET */}
      <div className={isTablet ? "grid grid-cols-2 gap-4" : "flex flex-col gap-3"}>
        {filteredServices.map((svc) => (
          <div
            key={svc.id}
            className="bg-surface-card rounded-2xl p-4 border border-border-subtle shadow-sm flex flex-col justify-between hover:border-primary/30 transition-all"
          >
            <div>
              {/* Top Row: Title & Price */}
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${svc.badgeColor}`}>
                      {svc.badge}
                    </span>
                    <span className="text-[10px] text-on-surface-variant font-medium">
                      • {svc.turnaround}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm text-on-surface leading-snug">
                    {svc.name}
                  </h3>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-base font-bold text-primary block">
                    {svc.price}
                  </span>
                </div>
              </div>

              {/* Minimal Description */}
              <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                {svc.desc}
              </p>

              {/* Spec & Tags row */}
              <div className="mt-2.5 flex items-center gap-1.5 flex-wrap">
                <span className="px-2 py-0.5 rounded-md bg-surface-container text-on-surface-variant text-[10px] font-medium">
                  {svc.sample}
                </span>
                {svc.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded-md bg-surface-canvas border border-border-subtle/60 text-slate-600 text-[10px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Row */}
            <div className="mt-3.5 pt-2.5 border-t border-border-subtle flex items-center gap-2">
              <button
                type="button"
                onClick={() => onBookTest(svc.category)}
                className="flex-1 py-2 bg-primary hover:bg-secondary text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">calendar_month</span>
                <span>Schedule This Test</span>
              </button>
              <a
                href="tel:6062600413"
                className="px-3 py-2 bg-surface-container hover:bg-surface-variant text-primary rounded-xl text-xs font-bold flex items-center justify-center gap-1 transition-colors"
                title="Call 24/7 Hotline"
              >
                <span className="material-symbols-outlined text-[16px]">call</span>
                <span>Call</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
