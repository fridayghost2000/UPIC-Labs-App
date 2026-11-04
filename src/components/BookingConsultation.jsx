import React, { useState } from 'react';

export default function BookingConsultation({ initialService = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: initialService,
    company: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Update selected service if passed from parent
  React.useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate fast submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        service: '',
        company: '',
        notes: '',
      });
    }, 600);
  };

  return (
    <section className="w-full py-space-3xl bg-surface-container-low" id="consultation-booking">
      <div className="max-w-[1320px] mx-auto px-space-md lg:px-space-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
          
          {/* Left: Form Card */}
          <div className="lg:col-span-7 bg-surface-white border border-border-subtle rounded-2xl p-space-xl shadow-xl">
            <div className="flex flex-col gap-1 mb-space-lg">
              <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-royal-blue font-bold">
                Fast Appointment & Inquiries
              </span>
              <h2 className="text-2xl sm:text-[28px] text-navy-dark font-bold tracking-tight">
                Schedule a Test or Request Consultation
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Fill out this quick form. Our London clinic coordinator will confirm your specimen window or arrange on-site collector dispatch.
              </p>
            </div>

            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-surface-container-high border border-royal-blue/30 text-navy-dark flex items-start gap-3 animate-fadeIn">
                <span className="material-symbols-outlined text-status-success text-[24px] shrink-0 mt-0.5">check_circle</span>
                <div>
                  <h4 className="font-bold text-navy-dark">Thank You! Your Request Has Been Logged.</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    A UPIC specimen coordinator will call or email you within 1 business hour (or immediately for 24/7 on-call dispatch).
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-royal-blue font-label-sm text-label-sm font-semibold hover:underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-space-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-sm text-label-sm text-slate-charcoal font-semibold" htmlFor="fullName">
                    Full Name <span className="text-status-critical">*</span>
                  </label>
                  <input
                    className="w-full h-12 px-space-md rounded-lg bg-surface-clinical border border-border-subtle text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-royal-blue transition-all"
                    id="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Johnathan Doe"
                    required
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-sm text-label-sm text-slate-charcoal font-semibold" htmlFor="email">
                    Email Address <span className="text-status-critical">*</span>
                  </label>
                  <input
                    className="w-full h-12 px-space-md rounded-lg bg-surface-clinical border border-border-subtle text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-royal-blue transition-all"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    required
                    type="email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-sm text-label-sm text-slate-charcoal font-semibold" htmlFor="phone">
                    Phone Number <span className="text-status-critical">*</span>
                  </label>
                  <input
                    className="w-full h-12 px-space-md rounded-lg bg-surface-clinical border border-border-subtle text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-royal-blue transition-all"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(606) 000-0000"
                    required
                    type="tel"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-label-sm text-label-sm text-slate-charcoal font-semibold" htmlFor="service">
                    Service Needed <span className="text-status-critical">*</span>
                  </label>
                  <select
                    className="w-full h-12 px-space-md rounded-lg bg-surface-clinical border border-border-subtle text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-royal-blue transition-all"
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select Testing Category</option>
                    <option value="workplace">Workplace Drug & Alcohol Screening</option>
                    <option value="dot">DOT / Transportation Compliance Testing</option>
                    <option value="dna">Court-Admissible DNA Paternity Test</option>
                    <option value="random">Consortium Random Pool Management</option>
                    <option value="mobile">Emergency 24/7 Mobile Collector Dispatch</option>
                    <option value="other">Other Diagnostic Inquiries</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-label-sm text-label-sm text-slate-charcoal font-semibold" htmlFor="company">
                  Company or Organization Name (Optional)
                </label>
                <input
                  className="w-full h-12 px-space-md rounded-lg bg-surface-clinical border border-border-subtle text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-royal-blue transition-all"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Acme Logistics LLC"
                  type="text"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-label-sm text-label-sm text-slate-charcoal font-semibold" htmlFor="notes">
                  Notes, Number of Candidates or Schedule Preferences
                </label>
                <textarea
                  className="w-full p-space-md rounded-lg bg-surface-clinical border border-border-subtle text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-royal-blue transition-all"
                  id="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Describe the service requirements, location, or desired time slot..."
                  rows="4"
                ></textarea>
              </div>

              {/* Privacy Note */}
              <p className="font-body-sm text-body-sm text-slate-muted">
                Protected by SSL encryption. Strictly compliant with HIPAA privacy protocols. We will never disclose candidate or individual medical data.
              </p>

              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 rounded-lg bg-amber-rich hover:bg-secondary text-slate-charcoal hover:text-surface-white font-label-md text-label-md font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin rounded-full h-4 w-4 border-2 border-slate-charcoal border-t-transparent"></span>
                    Processing...
                  </span>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[20px]">send</span>
                    Submit Test Order / Request Details
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right: Laboratory Headquarters Info Card */}
          <div className="lg:col-span-5 flex flex-col gap-space-lg">
            <div className="bg-surface-white border border-border-subtle rounded-2xl p-space-xl shadow-lg flex flex-col gap-space-md">
              <div className="flex items-center gap-space-sm">
                <div className="p-1.5 rounded-xl bg-surface-white border border-border-subtle shadow-sm flex items-center justify-center shrink-0">
                  <img src="/logo.webp" alt="UPIC - United Partners In Care" className="h-10 w-auto object-contain contrast-[1.08]" />
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-navy-dark font-bold">UPIC Labs LLC</h3>
                  <p className="font-label-sm text-label-sm text-slate-muted">Headquarters & Direct Collection Site</p>
                </div>
              </div>

              <div className="space-y-space-md pt-space-xs divide-y divide-border-subtle/60">
                <div className="flex items-start gap-space-sm pt-2">
                  <span className="material-symbols-outlined text-amber-rich text-[22px] mt-0.5 shrink-0">location_on</span>
                  <div>
                    <h4 className="font-label-md text-label-md text-navy-dark font-bold">Physical Address</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      360 Spring Street, Suite 2<br />
                      London, KY 40741
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-space-sm pt-space-sm">
                  <span className="material-symbols-outlined text-amber-rich text-[22px] mt-0.5 shrink-0">phone_in_talk</span>
                  <div>
                    <h4 className="font-label-md text-label-md text-navy-dark font-bold">Telephone Hotline</h4>
                    <a className="font-headline-sm text-headline-sm text-royal-blue font-bold hover:underline" href="tel:6062600413">
                      (606) 260-0413
                    </a>
                    <p className="font-body-sm text-body-sm text-slate-muted mt-0.5">
                      Direct line to scheduling & specimen coordinators
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-space-sm pt-space-sm">
                  <span className="material-symbols-outlined text-amber-rich text-[22px] mt-0.5 shrink-0">mail</span>
                  <div>
                    <h4 className="font-label-md text-label-md text-navy-dark font-bold">Direct Clinical Email</h4>
                    <a className="font-body-md text-body-md text-royal-blue hover:underline" href="mailto:jeffhensley@upiclabs.com">
                      jeffhensley@upiclabs.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-space-sm pt-space-sm">
                  <span className="material-symbols-outlined text-amber-rich text-[22px] mt-0.5 shrink-0">schedule</span>
                  <div>
                    <h4 className="font-label-md text-label-md text-navy-dark font-bold">Facility Operating Hours</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Monday – Friday: <span className="font-semibold text-navy-dark">9:00 AM – 5:00 PM</span>
                    </p>
                    <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded bg-gold-light text-secondary font-label-sm text-label-sm font-bold">
                      <span className="w-2 h-2 rounded-full bg-status-success animate-ping"></span>
                      24/7 On-Call Support Available Anytime
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Map Card */}
            <div className="bg-surface-white border border-border-subtle rounded-2xl p-space-md shadow-lg flex flex-col gap-space-xs">
              <div className="flex items-center justify-between px-space-xs">
                <span className="font-label-md text-label-md text-navy-dark font-bold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-royal-blue text-[18px]">map</span>
                  London, Kentucky Lab Location
                </span>
                <a
                  className="text-royal-blue font-label-sm text-label-sm hover:underline font-semibold"
                  href="https://maps.google.com/?q=360+Spring+Street+Suite+2+London+KY"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Open in Maps
                </a>
              </div>
              <div
                className="w-full h-48 rounded-xl bg-cover bg-center overflow-hidden relative shadow-inner group"
                style={{
                  backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDzjeY8cnWK1MKkipvZU8lNYVcx5TU2pKJFEMcFRKwwelKEmrU2nKIWkGAqoa2SqOx2YRakd9TAiwMxNUu8sLtX3vJMpcllxjnuG3YAJKW226cRZEJZDebWwCFOlzaVY0LnqIFgR8f6ZhH5X1inlubTRbfyG72VsO-UUd5fJKDNoOByi_XVnl8b3JUZJ3NUjkMz9F2hBPcGDfuPnrH_sX5mZ-mPt9WNwwS3VS_kv2D8')`,
                }}
              >
                <div className="absolute inset-0 bg-navy-dark/15 group-hover:bg-navy-dark/5 transition-colors"></div>
                <div className="absolute bottom-2 left-2 bg-surface-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow font-label-sm text-label-sm text-navy-dark flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-amber-rich text-[16px]">pin_drop</span>
                  360 Spring St, Suite 2
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
