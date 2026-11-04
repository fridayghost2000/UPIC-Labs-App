import React from 'react';

export default function ComplianceProtocols() {
  const protocols = [
    {
      code: 'DOT',
      name: 'Dept. of Transportation',
      badge: 'Part 40 Rule',
      icon: 'traffic',
    },
    {
      code: 'FAA',
      name: 'Federal Aviation Admin',
      badge: 'Aviation Crew',
      icon: 'flight',
    },
    {
      code: 'FRA',
      name: 'Railroad Administration',
      badge: 'Post-Accident',
      icon: 'train',
    },
    {
      code: 'FTA',
      name: 'Transit Administration',
      badge: 'Public Fleet',
      icon: 'directions_bus',
    },
    {
      code: 'USCG',
      name: 'U.S. Coast Guard',
      badge: 'Maritime Safety',
      icon: 'sailing',
    },
    {
      code: 'PHMSA',
      name: 'Pipeline & Hazardous',
      badge: 'Hazmat Ops',
      icon: 'oil_barrel',
    },
  ];

  return (
    <section className="w-full py-space-2xl bg-surface" id="compliance-section">
      <div className="max-w-[1320px] mx-auto px-space-md lg:px-space-xl">
        <div className="text-center max-w-2xl mx-auto mb-space-xl">
          <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-royal-blue font-bold">
            Federal Agency Protocols
          </span>
          <h2 className="text-2xl sm:text-[28px] text-navy-dark mt-1 font-bold tracking-tight">
            Multi-Modal Regulatory Compliance
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">
            Our collectors and certified processes strictly comply with federal guidelines across all transportation agencies under 49 CFR Part 40.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-space-sm">
          {protocols.map((item, index) => (
            <div
              key={index}
              className="bg-surface-white border border-border-subtle rounded-xl p-space-md flex flex-col items-center text-center shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-blue-subtle text-royal-blue group-hover:bg-royal-blue group-hover:text-surface-white flex items-center justify-center mb-space-xs transition-colors">
                <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm font-bold text-navy-dark">
                {item.code}
              </h4>
              <p className="font-label-sm text-label-sm text-slate-muted mt-0.5 min-h-[32px] flex items-center justify-center">
                {item.name}
              </p>
              <span className="mt-2 text-[10px] uppercase font-bold text-royal-blue bg-blue-subtle px-2 py-0.5 rounded">
                {item.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
