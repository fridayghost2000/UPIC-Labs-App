import React, { useState } from 'react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: 'What makes DNA testing "Court-Admissible"?',
      a: 'To be accepted by legal authorities, family courts, and the Department of Vital Statistics, the sample must follow an unbroken Chain of Custody. At UPIC Labs, all donors are verified via government ID, photographed, fingerprinted (when required), and swabbed by a certified technician. Home self-test kits lack chain-of-custody and cannot be used in legal proceedings.',
    },
    {
      q: 'How fast do we receive occupational drug testing results?',
      a: 'Negative rapid point-of-care screens can provide preliminary results in as little as 15 minutes. Laboratory-based SAMHSA confirmations and DOT panels typically report through our Medical Review Officer (MRO) within 24 to 48 hours via secure encrypted digital portal delivery.',
    },
    {
      q: 'How does 24/7 on-call emergency post-accident testing work?',
      a: 'Whenever an industrial incident or post-accident situation occurs outside regular clinic hours (Mon-Fri 9AM-5PM), employers can call our dedicated 24/7 line at (606) 260-0413. A certified mobile specimen collector will be dispatched directly to your facility, hospital, or work site to execute mandated federal or company testing.',
    },
    {
      q: 'Can UPIC Labs manage our ongoing DOT Consortium pool?',
      a: 'Yes. We provide complete random selection consortium management for motor carriers, bus lines, and maritime operators, meeting annual percentage thresholds required by FMCSA, FAA, and USCG, including FMCSA Clearinghouse queries and record maintenance.',
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-space-3xl bg-surface" id="faq-section">
      <div className="max-w-[1320px] mx-auto px-space-md lg:px-space-xl">
        <div className="text-center max-w-2xl mx-auto mb-space-2xl">
          <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-royal-blue font-bold">
            Clear Guidance
          </span>
          <h2 className="text-2xl sm:text-3xl text-navy-dark mt-1 font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Everything you need to know about our drug screening protocols, DNA legality, and on-call collection windows.
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-space-sm">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-surface-white border border-border-subtle rounded-xl shadow-sm overflow-hidden transition-all"
              >
                <button
                  type="button"
                  className="w-full p-space-md flex items-center justify-between text-left font-title-md text-title-md text-navy-dark font-bold hover:text-royal-blue transition-colors cursor-pointer"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                >
                  <span className="pr-4">{faq.q}</span>
                  <span
                    className={`material-symbols-outlined text-slate-muted transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-royal-blue' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                {isOpen && (
                  <div className="px-space-md pb-space-md font-body-md text-body-md text-on-surface-variant animate-fadeIn border-t border-border-subtle/50 pt-2">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
