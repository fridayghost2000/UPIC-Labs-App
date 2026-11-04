import React from 'react';

export default function DnaTesting({ onBookClick, onNavigateHome }) {
  const testingCategories = [
    {
      title: 'Court-Admissible Legal Paternity',
      icon: 'gavel',
      accuracy: '99.999% Probability of Paternity',
      turnaround: '2 to 3 Business Days',
      badge: 'Legally Binding',
      desc: 'Officially documented test following strict chain-of-custody protocols required by family courts, child support enforcement, and government agencies.',
      features: [
        'Mandatory government-issued photo ID verification for all adult donors',
        'In-person professional buccal swab collection by certified technicians',
        'Tamper-evident photographic and fingerprint documentation',
        'Notarized legal report accepted by courts and Vital Statistics',
      ],
    },
    {
      title: 'Peace-of-Mind Informational DNA',
      icon: 'sentiment_satisfied',
      accuracy: '99.999% Laboratory Accuracy',
      turnaround: '2 to 3 Business Days',
      badge: 'Confidential & Private',
      desc: 'Identical scientific precision as our legal test, designed for personal clarity and family reassurance without the court documentation overhead.',
      features: [
        '100% confidential and private laboratory testing',
        'Same high-complexity 24-locus genetic analysis',
        'Convenient clinic collection or discreet home kit pickup',
        'Fast online portal access to definitive results',
      ],
    },
    {
      title: 'Non-Invasive Prenatal Paternity (NIPP)',
      icon: 'pregnant_woman',
      accuracy: '99.9% Conclusive Prior to Birth',
      turnaround: '5 to 7 Business Days',
      badge: 'Early as 7 Weeks',
      desc: 'Determine biological paternity safely during pregnancy using cell-free fetal DNA isolated from the expectant mother’s blood, with zero risk to the baby.',
      features: [
        'Requires only a simple blood draw from mother & cheek swab from father',
        'Completely non-invasive—no amniocentesis or CVS procedure risks',
        'Available starting as early as the 7th week of pregnancy',
        'Court-admissible legal options available',
      ],
    },
    {
      title: 'Extended Family & Immigration DNA',
      icon: 'diversity_3',
      accuracy: 'USCIS & Embassy Accepted',
      turnaround: '3 to 5 Business Days',
      badge: 'Official Kinship',
      desc: 'Establish biological lineage when the alleged father is unavailable, or satisfy consular requirements for visa and passport citizenship petitions.',
      features: [
        'Grandparentage, avuncular (aunt/uncle), and sibling DNA reconstruction',
        'Strict adherence to USCIS and US Embassy AABB chain-of-custody rules',
        'Direct coordination with foreign consular collection sites',
        'Official notarized kinship probability report',
      ],
    },
  ];

  const legalUses = [
    {
      icon: 'balance',
      title: 'Child Support & Custody',
      desc: 'Legally establish parental rights, visitation schedules, or support obligations in court.',
    },
    {
      icon: 'badge',
      title: 'Birth Certificate Amending',
      desc: 'Add or remove an alleged biological father on an official Kentucky Certificate of Live Birth.',
    },
    {
      icon: 'real_estate_agent',
      title: 'Estate, Wills & Probate',
      desc: 'Settle inheritance claims, Social Security survivor benefits, or military pensions.',
    },
    {
      icon: 'flight',
      title: 'Immigration & Citizenship',
      desc: 'Fulfill USCIS and consular evidentiary requirements for biological parentage.',
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
            <span className="text-slate-muted">Services</span>
            <span>/</span>
            <span className="text-primary font-bold">DNA Paternity Testing</span>
          </nav>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-badge-caps text-badge-caps uppercase font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            AABB Standards • 99.999% Accurate
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-20 bg-gradient-to-b from-surface-clinical via-surface to-surface-container-low">
        <div className="max-w-[1320px] mx-auto px-space-md lg:px-space-xl">
          <div className="max-w-3xl flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-subtle text-royal-blue font-label-sm text-label-sm w-fit font-semibold border border-primary/15">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              Court-Admissible & Informational Genetic Verification
            </div>
            <h1 className="font-display-hero text-headline-xl-mobile sm:text-display-hero text-navy-dark tracking-tight leading-tight">
              Definitive <span className="text-royal-blue">DNA Paternity</span> & Relationship Testing
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              When parental certainty matters for your family or legal proceedings, UPIC Labs delivers forensic-grade 24-locus DNA testing with 99.999% conclusive accuracy and rapid 2 to 3 business day turnaround at our London, KY clinic or on-site.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onBookClick('dna')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-amber-rich hover:bg-secondary text-slate-charcoal hover:text-surface-white font-label-md text-label-md shadow-md transition-all cursor-pointer font-bold"
              >
                <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                Schedule a DNA Paternity Test
              </button>
              <a
                href="tel:6062600413"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-surface-white text-royal-blue hover:bg-blue-subtle font-label-md text-label-md shadow-sm transition-all border border-border-subtle font-semibold"
              >
                <span className="material-symbols-outlined text-[20px]">contact_support</span>
                Confidential Guidance: (606) 260-0413
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Categories Grid */}
      <section className="py-16 lg:py-24 bg-surface-white border-b border-border-subtle">
        <div className="max-w-[1320px] mx-auto px-space-md lg:px-space-xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-label-md text-label-md uppercase tracking-wider text-royal-blue font-bold">
              Comprehensive DNA Solutions
            </span>
            <h2 className="font-display-hero text-headline-lg lg:text-headline-xl text-navy-dark mt-2 tracking-tight">
              Legal Admissibility or Personal Peace of Mind
            </h2>
            <p className="font-body-md text-body-md text-slate-muted mt-2">
              All assays analyze 24 primary genetic markers plus the amelogenin gender identifier for absolute certainty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testingCategories.map((cat, idx) => (
              <div 
                key={idx}
                className="bg-surface-clinical rounded-3xl p-8 border border-border-subtle shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-subtle text-royal-blue flex items-center justify-center">
                      <span className="material-symbols-outlined text-[26px]">{cat.icon}</span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-gold-light text-secondary font-badge-caps text-badge-caps uppercase font-bold border border-gold-accent/20">
                      {cat.badge}
                    </span>
                  </div>

                  <h3 className="font-headline-sm text-headline-sm text-navy-dark font-bold mb-2">
                    {cat.title}
                  </h3>
                  <p className="font-body-md text-body-md text-slate-muted mb-4">
                    {cat.desc}
                  </p>

                  <div className="flex items-center gap-4 py-3 px-4 rounded-xl bg-surface-white border border-border-subtle mb-5">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-slate-muted font-bold block">Probability</span>
                      <span className="font-label-md font-bold text-status-success">{cat.accuracy}</span>
                    </div>
                    <div className="w-px h-8 bg-border-subtle"></div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-slate-muted font-bold block">Turnaround</span>
                      <span className="font-label-md font-bold text-navy-dark">{cat.turnaround}</span>
                    </div>
                  </div>

                  <h5 className="font-label-sm text-label-sm uppercase font-bold text-navy-dark mb-2">Key Criteria:</h5>
                  <ul className="space-y-2 font-body-sm text-body-sm text-slate-charcoal">
                    {cat.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-royal-blue text-[18px] mt-0.5 shrink-0">check</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-5 border-t border-border-subtle flex items-center justify-between">
                  <span className="font-body-sm text-slate-muted">Discreet & Gentle Swabbing</span>
                  <button
                    onClick={() => onBookClick(cat.title)}
                    className="px-5 py-2 rounded-lg bg-royal-blue hover:bg-primary text-surface-white font-label-md font-bold transition-all shadow-sm cursor-pointer"
                  >
                    Schedule Test
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where Results Stand Up (Legal Acceptance) */}
      <section className="py-16 bg-surface">
        <div className="max-w-[1320px] mx-auto px-space-md lg:px-space-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-label-md text-label-md uppercase tracking-wider text-royal-blue font-bold">
              Legal Recognition
            </span>
            <h2 className="font-display-hero text-headline-lg lg:text-headline-xl text-navy-dark mt-2 tracking-tight">
              Where Our Legal Results Are Accepted
            </h2>
            <p className="font-body-md text-body-md text-slate-muted mt-2">
              Our chain-of-custody documentation strictly complies with Kentucky Family Court rules, federal standards, and international consular regulations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {legalUses.map((use, idx) => (
              <div 
                key={idx}
                className="bg-surface-white rounded-2xl p-6 border border-border-subtle shadow-sm flex flex-col"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-subtle text-royal-blue flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[22px]">{use.icon}</span>
                </div>
                <h4 className="font-headline-sm text-headline-sm font-bold text-navy-dark mb-2">
                  {use.title}
                </h4>
                <p className="font-body-sm text-body-sm text-slate-muted">
                  {use.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Painless Collection Process */}
      <section className="py-16 bg-navy-dark text-surface-white">
        <div className="max-w-[1320px] mx-auto px-space-md lg:px-space-xl">
          <div className="max-w-3xl mx-auto text-center flex flex-col gap-4">
            <span className="font-label-md text-label-md uppercase tracking-wider text-secondary-fixed font-bold">
              Painless & Safe
            </span>
            <h3 className="font-display-hero text-headline-lg lg:text-headline-xl text-surface-white tracking-tight">
              Gentle Buccal Swab Collection
            </h3>
            <p className="font-body-md text-surface-container-highest leading-relaxed">
              Standard DNA collection requires zero needles and zero blood draws. A soft cotton swab is gently rubbed against the inside of each cheek for 30 seconds to collect cheek epithelial cells. It is completely painless and 100% safe for newborns, infants, children, and adults.
            </p>
            <div className="pt-4 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => onBookClick('dna')}
                className="px-8 py-3.5 rounded-lg bg-secondary-container hover:bg-gold-accent text-navy-dark font-label-md font-bold transition-all shadow-md cursor-pointer"
              >
                Book Appointment at London, KY Clinic
              </button>
              <button
                onClick={onNavigateHome}
                className="px-8 py-3.5 rounded-lg bg-navy-deep/80 hover:bg-navy-deep text-surface-white font-label-md font-semibold transition-all border border-navy-deep cursor-pointer"
              >
                Back to Main Services
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

