import React from 'react';

export default function TrustHighlights() {
  const highlights = [
    {
      icon: 'support_agent',
      title: '24/7 On-Call Support',
      desc: 'Emergency on-site collection',
    },
    {
      icon: 'link',
      title: '100% Chain-of-Custody',
      desc: 'Secure forensic tracking',
    },
    {
      icon: 'balance',
      title: 'Court-Ready Legal',
      desc: 'Admissible paternity & toxic screens',
    },
    {
      icon: 'timer',
      title: 'Rapid Turnaround',
      desc: 'Digital MRO reporting delivery',
    },
  ];

  return (
    <section className="w-full bg-navy-dark text-surface-white py-space-lg shadow-inner">
      <div className="max-w-[1320px] mx-auto px-space-md lg:px-space-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-space-lg items-center">
          {highlights.map((item, index) => (
            <div key={index} className="flex items-center gap-space-sm group">
              <div className="w-12 h-12 rounded-xl bg-royal-blue/60 group-hover:bg-royal-blue flex items-center justify-center text-secondary-fixed shrink-0 transition-colors">
                <span className="material-symbols-outlined text-[28px]">{item.icon}</span>
              </div>
              <div>
                <h4 className="font-label-md text-label-md text-surface-white font-bold leading-tight">
                  {item.title}
                </h4>
                <p className="font-body-sm text-body-sm text-surface-container-highest">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
