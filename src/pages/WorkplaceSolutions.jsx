import React from 'react';

export default function WorkplaceSolutions({ onBookClick, onNavigateHome }) {
  const primaryImpacts = [
    {
      icon: 'heart_broken',
      title: 'Premature Death / Fatal Accidents',
      desc: 'Severe substance impairment on the job dramatically escalates catastrophic fatal events, equipment failure, and vehicular collisions.',
    },
    {
      icon: 'personal_injury',
      title: 'Elevated Injuries & Accident Rates',
      desc: 'Impaired reflexes and sensory distortion lead to surge in OSHA-recordable injuries and complex workers’ compensation claims.',
    },
    {
      icon: 'event_busy',
      title: 'Chronic Absenteeism & Sick Leave',
      desc: 'Substance-related health complications, hangovers, and unannounced absences place extreme strain on operational schedules.',
    },
    {
      icon: 'trending_down',
      title: 'Massive Loss of Production',
      desc: 'Decreased work speed, unfinished tasks, and machinery downtime drain enterprise profitability and customer delivery timelines.',
    },
  ];

  const additionalAreas = [
    { icon: 'bedtime', text: 'Tardiness and sleeping on the job' },
    { icon: 'sick', text: 'After-effects of substance use (hangover, withdrawal) affecting job performance' },
    { icon: 'psychology_alt', text: 'Poor decision-making and impaired judgment' },
    { icon: 'speed', text: 'Loss of day-to-day workplace efficiency' },
    { icon: 'lock', text: 'Workplace theft and inventory shrinkage' },
    { icon: 'sentiment_dissatisfied', text: 'Lower overall morale among sober co-workers' },
    { icon: 'group_off', text: 'Increased friction and conflict with co-workers and supervisors' },
    { icon: 'center_focus_weak', text: 'Preoccupation with obtaining and using substances while on shift' },
    { icon: 'warning', text: 'Illegal activities at work, including selling illicit drugs to other staff' },
    { icon: 'person_remove', text: 'Higher employee turnover rates' },
    { icon: 'school', text: 'Continuous and costly retraining of replacement employees' },
    { icon: 'gavel', text: 'Time-consuming and legally sensitive disciplinary procedures' },
  ];

  const highRiskIndustries = [
    { name: 'Food Service', icon: 'restaurant' },
    { name: 'Construction', icon: 'construction' },
    { name: 'Mining and Drilling', icon: 'oil_barrel' },
    { name: 'Excavation', icon: 'handyman' },
    { name: 'Installation, Maintenance & Repair', icon: 'build' },
  ];

  const alcoholFacts = [
    {
      stat: '2.7x',
      label: 'Higher Injury Absences',
      detail: 'Workers with alcohol problems were 2.7 times more likely than workers without drinking problems to have injury-related absences.',
    },
    {
      stat: '35%',
      label: 'ER Occupational Injuries',
      detail: 'A hospital emergency department study showed that 35 percent of patients with an occupational injury were at-risk drinkers.',
    },
    {
      stat: '16%',
      label: 'Breathalyzer ER Detection',
      detail: 'Breathalyzer tests detected alcohol in 16% of emergency room patients injured on the job.',
    },
    {
      stat: '11%+',
      label: 'Workplace Fatalities',
      detail: 'Analyses of workplace fatalities showed that at least 11% of the victims had been drinking prior to the incident.',
    },
    {
      stat: '24%',
      label: 'Workday Drinking Reported',
      detail: 'Large federal surveys show that 24% of workers report drinking during the workday at least once in the past year.',
    },
    {
      stat: '1 in 5',
      label: 'Coworker Safety Compromised',
      detail: 'One-fifth of workers and managers report that a coworker’s drinking jeopardized their own productivity and physical safety.',
    },
  ];

  const drugFacts = [
    {
      stat: '70%',
      label: 'Employed Users',
      detail: '70% of the estimated 14.8 million Americans who use illegal drugs are actively employed in the workforce.',
    },
    {
      stat: '#1',
      label: 'Marijuana & Cocaine',
      detail: 'Marijuana is the most commonly used and abused illegal drug by employees, followed by cocaine, with prescription drug misuse steadily increasing.',
    },
    {
      stat: '2x',
      label: 'High-Turnover Correlation',
      detail: 'Workers who report having three or more jobs in the previous five years are about twice as likely to be current or past-year illicit drug users.',
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
            <span className="text-primary font-bold">Workplace Solutions</span>
          </nav>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-royal-blue/10 text-royal-blue font-badge-caps text-badge-caps uppercase font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-royal-blue animate-pulse"></span>
            NCADD Sourced Risk Intelligence
          </span>
        </div>
      </div>

      {/* Hero Header Section */}
      <section className="relative overflow-hidden py-16 lg:py-20 bg-gradient-to-b from-surface-clinical via-surface to-surface-container-low">
        <div className="max-w-[1320px] mx-auto px-space-md lg:px-space-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 flex flex-col gap-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-subtle text-royal-blue font-label-sm text-label-sm w-fit font-bold border border-primary/15 shadow-sm">
                <span className="material-symbols-outlined text-[18px]">domain</span>
                THE WORKPLACE
              </div>
              <h1 className="font-display-hero text-headline-xl-mobile sm:text-display-hero text-navy-dark tracking-tight leading-tight">
                The Impact of <span className="text-royal-blue">Substance Abuse</span> in the Workplace
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Substance abuse directly threatens worker safety, enterprise productivity, and organizational stability. Unaddressed alcohol and drug impairment introduces profound liabilities into daily operations across Kentucky and American industry.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onBookClick('workplace')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-amber-rich hover:bg-secondary text-slate-charcoal hover:text-surface-white font-label-md text-label-md shadow-md transition-all cursor-pointer font-bold"
                >
                  <span className="material-symbols-outlined text-[20px]">security</span>
                  Build a Drug-Free Workplace Program
                </button>
                <a
                  href="tel:6062600413"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-surface-white text-royal-blue hover:bg-blue-subtle font-label-md text-label-md shadow-sm transition-all border border-border-subtle font-semibold"
                >
                  <span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
                  Consult a Coordinator: (606) 260-0413
                </a>
              </div>
            </div>

            {/* Right: Laboratory Testing Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border-subtle bg-surface-white group">
                <img 
                  src="/workplace-lab-testing.webp" 
                  alt="Certified laboratory technician pipetting specimen into testing vial under sterile conditions" 
                  className="w-full h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/85 via-navy-dark/25 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-surface-white">
                  <span className="px-2.5 py-0.5 rounded bg-royal-blue text-surface-white font-badge-caps text-badge-caps uppercase font-bold inline-block mb-1">
                    Defensible Science
                  </span>
                  <h4 className="font-headline-sm text-headline-sm font-bold text-surface-white">
                    Clinical Specimen Integrity
                  </h4>
                  <p className="font-body-sm text-surface-container-highest">
                    Forensic GC-MS/LC-MS toxicology confirmation ensuring accuracy for employers.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Primary Impact Pillars */}
      <section className="py-16 bg-surface-white border-y border-border-subtle">
        <div className="max-w-[1320px] mx-auto px-space-md lg:px-space-xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-label-md text-label-md uppercase tracking-wider text-royal-blue font-bold">
              Core Liabilities
            </span>
            <h2 className="font-display-hero text-headline-lg lg:text-headline-xl text-navy-dark mt-2 tracking-tight">
              Major Consequences on Workforce Operations
            </h2>
            <p className="font-body-md text-body-md text-slate-muted mt-2">
              The primary physical and financial risks confronting employers without an active testing protocol.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {primaryImpacts.map((item, idx) => (
              <div 
                key={idx}
                className="bg-surface-clinical rounded-2xl p-6 border border-border-subtle shadow-sm hover:shadow-md transition-all flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-subtle text-royal-blue flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[26px]">{item.icon}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm font-bold text-navy-dark mb-2">
                  {item.title}
                </h3>
                <p className="font-body-sm text-body-sm text-slate-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Areas Affected Grid */}
      <section className="py-16 lg:py-24 bg-surface-clinical">
        <div className="max-w-[1320px] mx-auto px-space-md lg:px-space-xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-label-md text-label-md uppercase tracking-wider text-amber-rich font-bold">
              Systemic Organizational Drag
            </span>
            <h2 className="font-display-hero text-headline-lg lg:text-headline-xl text-navy-dark mt-2 tracking-tight">
              Additional Areas Affected in the Workplace
            </h2>
            <p className="font-body-md text-body-md text-slate-muted mt-2">
              Beyond catastrophic accidents, workplace substance abuse degrades daily performance, team morale, and management overhead.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {additionalAreas.map((area, idx) => (
              <div 
                key={idx}
                className="bg-surface-white rounded-2xl p-5 border border-border-subtle shadow-sm flex items-start gap-4 hover:border-royal-blue/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-surface-container text-royal-blue flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[20px]">{area.icon}</span>
                </div>
                <p className="font-body-md text-body-md text-slate-charcoal font-medium leading-snug">
                  {area.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive: Alcohol Use in the Workplace */}
      <section className="py-16 lg:py-24 bg-surface-white border-b border-border-subtle">
        <div className="max-w-[1320px] mx-auto px-space-md lg:px-space-xl">
          <div className="max-w-3xl mb-12">
            <span className="font-label-md text-label-md uppercase tracking-wider text-royal-blue font-bold">
              Substance Profile
            </span>
            <h2 className="font-display-hero text-headline-lg lg:text-headline-xl text-navy-dark mt-2 tracking-tight">
              Alcohol Use in the Workplace
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-4 leading-relaxed">
              Two specific kinds of drinking behavior significantly contribute to the level of work-performance problems: <strong>drinking right before or during working hours</strong> (including drinking at lunch and at company functions), and <strong>heavy drinking the night before</strong> that causes hangovers during work the next day.
            </p>
            <div className="mt-4 p-5 rounded-2xl bg-gold-light border-l-4 border-amber-rich border border-gold-accent/20">
              <p className="font-body-md text-slate-charcoal font-medium leading-relaxed">
                And it isn’t just alcoholics who can generate problems in the workplace. Research has shown that the majority of alcohol-related work-performance problems are associated with <strong>nondependent drinkers who may occasionally drink too much</strong>—not exclusively by alcohol-dependent employees.
              </p>
            </div>
          </div>

          {/* High Prevalence Industries */}
          <div className="mb-14">
            <h3 className="font-headline-sm text-headline-sm font-bold text-navy-dark uppercase tracking-wider mb-5">
              Alcoholism is Especially Prevalent in These Particular Industries:
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {highRiskIndustries.map((ind, i) => (
                <div 
                  key={i}
                  className="bg-surface-clinical rounded-2xl p-5 border border-border-subtle flex flex-col items-center text-center gap-2 hover:border-royal-blue/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-subtle text-royal-blue flex items-center justify-center">
                    <span className="material-symbols-outlined text-[24px]">{ind.icon}</span>
                  </div>
                  <span className="font-label-md text-label-md font-bold text-navy-dark">
                    {ind.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Facts About Alcohol Stats Cards */}
          <div>
            <h3 className="font-headline-sm text-headline-sm font-bold text-navy-dark uppercase tracking-wider mb-6">
              Facts About Alcohol in the Workplace
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {alcoholFacts.map((fact, idx) => (
                <div 
                  key={idx}
                  className="bg-surface-clinical rounded-2xl p-6 border border-border-subtle flex flex-col justify-between"
                >
                  <div>
                    <span className="font-display-hero text-headline-lg font-bold text-royal-blue block mb-1">
                      {fact.stat}
                    </span>
                    <h4 className="font-label-md text-label-md uppercase font-bold text-navy-dark tracking-wider mb-2">
                      {fact.label}
                    </h4>
                  </div>
                  <p className="font-body-sm text-body-sm text-slate-muted leading-relaxed mt-2 pt-2 border-t border-border-subtle">
                    {fact.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Deep Dive: Prescription Drugs & Illegal Drugs */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-[1320px] mx-auto px-space-md lg:px-space-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            
            {/* Left Image: Vials */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-navy-deep bg-navy-dark group">
                <img 
                  src="/workplace-vials.webp" 
                  alt="Sterile pharmaceutical vials on reflective dark background representing medication and toxicology analysis" 
                  className="w-full h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-surface-white">
                  <span className="px-2.5 py-0.5 rounded bg-secondary-container text-navy-dark font-badge-caps text-badge-caps uppercase font-bold inline-block mb-1">
                    Therapeutic & Illicit Risk
                  </span>
                  <h4 className="font-headline-sm text-headline-sm font-bold text-surface-white">
                    Prescription & Synthetic Screenings
                  </h4>
                  <p className="font-body-sm text-surface-container-highest">
                    Detecting benzodiazepines, opioids, fentanyl, and controlled therapeutics.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Prescription Drugs Overview */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-5">
              <span className="font-label-md text-label-md uppercase tracking-wider text-royal-blue font-bold">
                Therapeutic Considerations
              </span>
              <h2 className="font-display-hero text-headline-lg lg:text-headline-xl text-navy-dark tracking-tight leading-tight">
                Prescription Drugs in the Workplace
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                There is always a level of risk when using any drug including prescription or over-the-counter medications.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Drug reactions vary from person to person. If you are taking a drug for the first time, you won’t know how it will affect you. It’s important to follow your doctor’s advice when taking prescription drugs and discuss any side-effects and how this might impact your work.
              </p>
              <div className="p-5 rounded-2xl bg-surface-white border border-border-subtle shadow-sm">
                <h4 className="font-label-md text-label-md font-bold text-navy-dark mb-1">
                  Benzodiazepines & Sedative Risks:
                </h4>
                <p className="font-body-md text-body-md text-slate-muted leading-relaxed">
                  The effects of prescription drugs such as benzodiazepines (e.g. Xanax&reg;) can have an impact on your work and you should discuss these with your doctor. Long term use in particular may become problematic.
                </p>
              </div>
            </div>

          </div>

          {/* Facts About Drugs in the Workplace */}
          <div>
            <h3 className="font-headline-sm text-headline-sm font-bold text-navy-dark uppercase tracking-wider mb-6">
              Facts About Drugs in the Workplace
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {drugFacts.map((fact, idx) => (
                <div 
                  key={idx}
                  className="bg-surface-white rounded-2xl p-6 border border-border-subtle shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <span className="font-display-hero text-headline-lg font-bold text-amber-rich block mb-1">
                      {fact.stat}
                    </span>
                    <h4 className="font-label-md text-label-md uppercase font-bold text-navy-dark tracking-wider mb-2">
                      {fact.label}
                    </h4>
                  </div>
                  <p className="font-body-sm text-body-sm text-slate-muted leading-relaxed mt-2 pt-2 border-t border-border-subtle">
                    {fact.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Official Source Attribution Callout */}
          <div className="mt-12 p-6 rounded-2xl bg-blue-subtle/50 border border-royal-blue/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-royal-blue text-[28px] shrink-0">library_books</span>
              <div>
                <p className="font-label-md text-label-md font-bold text-navy-dark">
                  Information Sourced From:
                </p>
                <p className="font-body-sm text-body-sm text-slate-muted">
                  National Council on Alcoholism and Drug Dependence (NCADD)
                </p>
              </div>
            </div>
            <a 
              href="https://www.ncadd.org/about-addiction/addiction-update/drugs-and-alcohol-in-the-workplace" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-surface-white text-royal-blue hover:text-navy-dark font-label-sm font-bold border border-border-subtle transition-colors shadow-sm shrink-0"
            >
              <span>View Original NCADD Source</span>
              <span className="material-symbols-outlined text-[16px]">open_in_new</span>
            </a>
          </div>

        </div>
      </section>

      {/* How UPIC Protects Your Business CTA */}
      <section className="py-16 bg-navy-dark text-surface-white">
        <div className="max-w-[1320px] mx-auto px-space-md lg:px-space-xl">
          <div className="rounded-3xl bg-navy-deep p-8 md:p-12 border border-navy-deep flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="max-w-2xl">
              <span className="text-secondary-fixed uppercase text-label-sm font-bold tracking-wider">
                Partner with UPIC Labs
              </span>
              <h3 className="font-headline-lg text-headline-lg font-bold text-surface-white mt-2">
                Establish an Airtight, Certified Drug-Free Workplace
              </h3>
              <p className="font-body-md text-surface-container-highest mt-3 leading-relaxed">
                UPIC Labs delivers customized testing panels, 24/7 on-call rapid collector dispatch (under 2 hours), DOT consortium management, and confidential MRO-certified reporting to safeguard your employees and bottom line.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => onBookClick('workplace')}
                className="px-6 py-3.5 rounded-lg bg-secondary-container hover:bg-gold-accent text-navy-dark font-label-md font-bold transition-all shadow-md cursor-pointer"
              >
                Set Up Employer Account
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

