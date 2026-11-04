import React from 'react';

export default function ServicesGrid({ onSelectService }) {
  const services = [
    {
      id: 'workplace',
      category: 'Comprehensive Panels',
      badgeStatus: 'Instant Available',
      badgeColor: 'text-status-success',
      icon: 'science',
      iconBg: 'bg-blue-subtle text-royal-blue',
      title: 'Custom Workplace Drug & Alcohol Testing',
      description: 'Shield your company from risk with customizable 5, 10, and 12-panel toxicological screens tailored to your hiring protocols and ongoing safety standards.',
      features: [
        'Urine, Hair Follicle & Oral Fluid Modalities',
        'Rapid Instant Screening + GC/MS Confirmation',
        'Pre-employment, Random, & Post-Accident',
      ],
      metricLabel: 'Turnaround',
      metricValue: 'Rapid (15m) to 24h',
      buttonText: 'Order Panel',
      buttonBg: 'bg-royal-blue text-surface-white hover:bg-navy-deep',
    },
    {
      id: 'dna',
      category: 'AABB Accredited',
      badgeStatus: '99.99%+ Conclusive',
      badgeColor: 'text-royal-blue',
      icon: 'fingerprint',
      iconBg: 'bg-gold-light text-secondary',
      title: 'Court-Ready Legal DNA Paternity Testing',
      description: 'Legally binding relationship determination certified for family court proceedings, child custody, birth certificate amendments, and immigration petitions.',
      features: [
        'Strict Chain-of-Custody Documented Collection',
        'Paternity, Maternity, Grandparentage, & Avuncular',
        'Certified Results Recognized Across Kentucky Courts',
      ],
      metricLabel: 'Legal Format',
      metricValue: 'Admissible Filing',
      buttonText: 'Book DNA Test',
      buttonBg: 'bg-amber-rich hover:bg-secondary text-slate-charcoal hover:text-surface-white',
    },
    {
      id: 'dot',
      category: '49 CFR Part 40',
      badgeStatus: 'Federal Mandate',
      badgeColor: 'text-royal-blue',
      icon: 'local_shipping',
      iconBg: 'bg-surface-container text-navy-dark',
      title: 'DOT & Federal Agency Compliance',
      description: 'Full-service consortium management and certified drug/alcohol collections adhering to strict U.S. Department of Transportation standards and agency rules.',
      features: [
        'FMCSA, FAA, FRA, FTA, PHMSA & USCG Protocols',
        'Certified Breath Alcohol Technicians (BAT)',
        'Random Pool Management & Clearinghouse Reporting',
      ],
      metricLabel: 'Audit Readiness',
      metricValue: '100% DOT Compliant',
      buttonText: 'Get Compliant',
      buttonBg: 'bg-royal-blue text-surface-white hover:bg-navy-deep',
    },
  ];

  const handleCardClick = (serviceId) => {
    if (onSelectService) {
      onSelectService(serviceId);
    } else {
      const el = document.getElementById('consultation-booking');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-space-3xl bg-surface" id="services-grid">
      <div className="max-w-[1320px] mx-auto px-space-md lg:px-space-xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-2xl">
          <div className="max-w-2xl">
            <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-royal-blue font-bold">
              Diagnostic Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] text-navy-dark mt-1 font-bold tracking-tight">
              Custom Diagnostic Testing Services Designed for Total Certainty
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
              From industrial workplace safety programs to legally conclusive DNA verification, UPIC Labs combines accredited laboratory science with local Kentucky convenience.
            </p>
          </div>
          <div className="flex items-center gap-space-xs shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-subtle text-royal-blue font-label-sm text-label-sm font-semibold">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              Partnered with SAMHSA & AABB Labs
            </span>
          </div>
        </div>

        {/* Services 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-surface-white border border-border-subtle rounded-2xl p-space-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="flex flex-col gap-space-md">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${service.iconBg} flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform`}>
                  <span className="material-symbols-outlined text-[32px]">{service.icon}</span>
                </div>

                {/* Badges & Title */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded bg-blue-subtle text-royal-blue font-badge-caps text-badge-caps uppercase font-semibold">
                      {service.category}
                    </span>
                    <span className={`${service.badgeColor} font-label-sm text-label-sm flex items-center gap-1 font-semibold`}>
                      {service.badgeStatus === 'Instant Available' && (
                        <span className="w-1.5 h-1.5 rounded-full bg-status-success animate-pulse"></span>
                      )}
                      {service.badgeStatus}
                    </span>
                  </div>
                  <h3 className="text-[17px] sm:text-[18px] lg:text-[19px] text-navy-dark font-bold mt-1 leading-snug">
                    {service.title}
                  </h3>
                </div>

                <p className="font-body-md text-body-md text-on-surface-variant">
                  {service.description}
                </p>

                {/* Features list */}
                <div className="space-y-2 pt-2 border-t border-border-subtle/60">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-charcoal font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-amber-rich text-[18px] shrink-0">check_circle</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-space-lg mt-space-md bg-surface-clinical rounded-xl p-space-sm flex items-center justify-between border border-border-subtle/80">
                <div>
                  <span className="font-label-sm text-label-sm text-slate-muted block">{service.metricLabel}</span>
                  <span className="font-label-md text-label-md text-navy-dark font-bold">{service.metricValue}</span>
                </div>
                <button
                  onClick={() => handleCardClick(service.id)}
                  className={`px-space-md py-2 rounded-lg font-label-md text-label-md transition-colors inline-flex items-center gap-1 shadow-sm cursor-pointer font-semibold ${service.buttonBg}`}
                >
                  {service.buttonText} <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
