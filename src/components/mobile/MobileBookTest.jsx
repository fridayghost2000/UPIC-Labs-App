import React, { useState } from 'react';

export default function MobileBookTest({ initialCategory = 'workplace', onComplete, onCancel }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(() => ({
    category: initialCategory,
    testType: '10-Panel Occupational Urine Screen ($65)',
    locationType: 'clinic',
    date: '2026-11-04',
    time: '10:00 AM',
    donorName: '',
    phone: '',
    email: '',
    company: '',
    notes: '',
  }));

  const [bookingRef, setBookingRef] = useState('');

  const testOptionsByCategory = {
    workplace: [
      '10-Panel Occupational Urine Screen ($65)',
      '5-Panel Rapid Urine Screen ($50)',
      'Hair Follicle 90-Day Extended Screen ($120)',
      'Evidential Breath Alcohol Test BAT ($45)',
    ],
    dot: [
      'Federal DOT 5-Panel Safety Screen ($75)',
      'DOT Breath Alcohol (BAT) Confirmation ($45)',
      'DOT Return-to-Duty / Follow-up Panel ($85)',
    ],
    dna: [
      'Court-Ready Legal DNA Paternity 2-Person ($249)',
      'Legal DNA Paternity 3-Person Mother/Child/Father ($319)',
      'Immigration & Embassy Chain-of-Custody DNA ($395)',
    ],
    mobile: [
      '24/7 Mobile Collector Emergency Post-Accident Dispatch',
      'On-Site Group Workforce Random Testing (5+ workers)',
    ],
  };

  const handleNext = () => {
    if (step === 3) {
      if (!formData.donorName || !formData.phone) {
        alert('Please provide Donor Name and Phone number to continue.');
        return;
      }
      // Generate realistic booking reference
      const ref = 'UPIC-' + Math.floor(1000 + Math.random() * 9000) + '-BK';
      setBookingRef(ref);
      setStep(4);
      return;
    }
    setStep(step + 1);
  };

  return (
    <div className="flex flex-col w-full px-4 py-3 pb-8 space-y-3">
      {/* Wizard Header */}
      <div className="bg-surface-card rounded-2xl p-space-md border border-border-subtle shadow-sm mb-space-sm">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary-container text-on-primary flex items-center justify-center font-bold text-[14px]">
              {step < 4 ? `${step}/3` : '✓'}
            </div>
            <div>
              <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface">
                {step === 1 && 'Select Diagnostic Test'}
                {step === 2 && 'Date, Time & Facility'}
                {step === 3 && 'Donor & Contact Information'}
                {step === 4 && 'Appointment Pass Confirmed'}
              </h2>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                {step === 1 && 'Choose from accredited clinical panels'}
                {step === 2 && 'London Central Lab or Mobile Dispatch'}
                {step === 3 && 'Encrypted under HIPAA guidelines'}
                {step === 4 && 'Present this digital pass upon arrival'}
              </span>
            </div>
          </div>
          {onCancel && step < 4 && (
            <button
              type="button"
              onClick={onCancel}
              className="text-on-surface-variant hover:text-on-surface text-[12px] font-label-md"
            >
              Cancel
            </button>
          )}
        </div>

        {/* Step Progress Bar */}
        {step < 4 && (
          <div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden mt-2">
            <div
              className="bg-primary h-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        )}
      </div>

      {/* STEP 1: Test Selection */}
      {step === 1 && (
        <div className="bg-surface-card rounded-2xl p-space-md border border-border-subtle shadow-sm space-y-4">
          <div>
            <label className="font-label-caps text-label-caps text-on-surface-variant uppercase font-bold block mb-2">
              Select Testing Category
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'workplace', name: 'Workplace Drug', icon: 'biotech' },
                { id: 'dot', name: 'Federal DOT', icon: 'local_shipping' },
                { id: 'dna', name: 'Legal DNA', icon: 'fingerprint' },
                { id: 'mobile', name: 'Mobile Dispatch', icon: 'emergency' },
              ].map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => {
                    const defaultTest = testOptionsByCategory[c.id][0];
                    setFormData((prev) => ({ ...prev, category: c.id, testType: defaultTest }));
                  }}
                  className={`p-3 rounded-xl border flex items-center gap-2.5 text-left transition-all ${
                    formData.category === c.id
                      ? 'border-primary bg-surface-container text-primary font-bold shadow-sm'
                      : 'border-border-subtle bg-surface hover:bg-surface-container-low text-on-surface'
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px]">{c.icon}</span>
                  <span className="font-label-md text-label-md">{c.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="font-label-caps text-label-caps text-on-surface-variant uppercase font-bold block mb-2">
              Select Specific Panel / Service
            </label>
            <div className="space-y-2">
              {(testOptionsByCategory[formData.category] || []).map((test, idx) => (
                <label
                  key={idx}
                  className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                    formData.testType === test
                      ? 'border-primary bg-primary/5 text-primary font-bold'
                      : 'border-border-subtle bg-surface hover:bg-surface-container-low text-on-surface'
                  }`}
                >
                  <input
                    type="radio"
                    name="testType"
                    checked={formData.testType === test}
                    onChange={() => setFormData((prev) => ({ ...prev, testType: test }))}
                    className="w-4 h-4 text-primary focus:ring-primary"
                  />
                  <span className="font-body-sm text-body-sm">{test}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={handleNext}
            className="w-full py-3 bg-primary text-on-primary rounded-xl font-label-md text-label-md font-bold hover:bg-secondary transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer mt-4"
          >
            <span>Continue to Schedule</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      )}

      {/* STEP 2: Location & Time */}
      {step === 2 && (
        <div className="bg-surface-card rounded-2xl p-space-md border border-border-subtle shadow-sm space-y-4">
          <div>
            <label className="font-label-caps text-label-caps text-on-surface-variant uppercase font-bold block mb-2">
              Collection Method
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setFormData((prev) => ({ ...prev, locationType: 'clinic' }))}
                className={`p-3 rounded-xl border text-left transition-all ${
                  formData.locationType === 'clinic'
                    ? 'border-primary bg-surface-container text-primary font-bold shadow-sm'
                    : 'border-border-subtle bg-surface text-on-surface'
                }`}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="material-symbols-outlined text-[18px]">domain</span>
                  <span className="font-label-md text-label-md">London Clinic</span>
                </div>
                <span className="font-body-sm text-[11px] text-on-surface-variant block">
                  360 Spring St, Ste 2 • Dedicated Parking
                </span>
              </button>

              <button
                type="button"
                onClick={() => setFormData((prev) => ({ ...prev, locationType: 'mobile' }))}
                className={`p-3 rounded-xl border text-left transition-all ${
                  formData.locationType === 'mobile'
                    ? 'border-primary bg-surface-container text-primary font-bold shadow-sm'
                    : 'border-border-subtle bg-surface text-on-surface'
                }`}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="material-symbols-outlined text-[18px]">local_shipping</span>
                  <span className="font-label-md text-label-md">Mobile On-Site</span>
                </div>
                <span className="font-body-sm text-[11px] text-on-surface-variant block">
                  Collector dispatched to your workplace
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="font-label-caps text-label-caps text-on-surface-variant uppercase font-bold block mb-1">
                Preferred Date
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData((prev) => ({ ...prev, date: e.target.value }))}
                className="w-full p-2.5 rounded-xl border border-border-subtle bg-surface text-body-sm focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="font-label-caps text-label-caps text-on-surface-variant uppercase font-bold block mb-1">
                Preferred Time Slot
              </label>
              <select
                value={formData.time}
                onChange={(e) => setFormData((prev) => ({ ...prev, time: e.target.value }))}
                className="w-full p-2.5 rounded-xl border border-border-subtle bg-surface text-body-sm focus:outline-none focus:border-primary"
              >
                <option>09:00 AM</option>
                <option>10:00 AM</option>
                <option>11:30 AM</option>
                <option>01:00 PM</option>
                <option>02:30 PM</option>
                <option>04:00 PM</option>
                <option>Immediate Walk-In Today</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="py-3 px-4 rounded-xl border border-border-subtle font-label-md text-on-surface hover:bg-surface-container transition-colors"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="flex-1 py-3 bg-primary text-on-primary rounded-xl font-label-md text-label-md font-bold hover:bg-secondary transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Donor Details</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: Donor Details */}
      {step === 3 && (
        <div className="bg-surface-card rounded-2xl p-space-md border border-border-subtle shadow-sm space-y-3">
          <div>
            <label className="font-label-caps text-label-caps text-on-surface-variant uppercase font-bold block mb-1">
              Donor / Patient Full Legal Name *
            </label>
            <input
              type="text"
              placeholder="e.g. Johnathan Vance"
              value={formData.donorName}
              onChange={(e) => setFormData((prev) => ({ ...prev, donorName: e.target.value }))}
              className="w-full p-2.5 rounded-xl border border-border-subtle bg-surface text-body-sm focus:outline-none focus:border-primary"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="font-label-caps text-label-caps text-on-surface-variant uppercase font-bold block mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                placeholder="(606) 555-0192"
                value={formData.phone}
                onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                className="w-full p-2.5 rounded-xl border border-border-subtle bg-surface text-body-sm focus:outline-none focus:border-primary"
                required
              />
            </div>
            <div>
              <label className="font-label-caps text-label-caps text-on-surface-variant uppercase font-bold block mb-1">
                Email Address (For Secure Results)
              </label>
              <input
                type="email"
                placeholder="donor@example.com"
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                className="w-full p-2.5 rounded-xl border border-border-subtle bg-surface text-body-sm focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          <div>
            <label className="font-label-caps text-label-caps text-on-surface-variant uppercase font-bold block mb-1">
              Company / Employer / Attorney (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Appalachian Transport Logistics"
              value={formData.company}
              onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
              className="w-full p-2.5 rounded-xl border border-border-subtle bg-surface text-body-sm focus:outline-none focus:border-primary"
            />
          </div>

          <div>
            <label className="font-label-caps text-label-caps text-on-surface-variant uppercase font-bold block mb-1">
              Special Instructions / Case # / Reason
            </label>
            <textarea
              rows={2}
              placeholder="e.g. DOT Random quarterly roster screening or Court Custody Case #9410"
              value={formData.notes}
              onChange={(e) => setFormData((prev) => ({ ...prev, notes: e.target.value }))}
              className="w-full p-2.5 rounded-xl border border-border-subtle bg-surface text-body-sm focus:outline-none focus:border-primary"
            ></textarea>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="py-3 px-4 rounded-xl border border-border-subtle font-label-md text-on-surface hover:bg-surface-container transition-colors"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="flex-1 py-3 bg-primary text-on-primary rounded-xl font-label-md text-label-md font-bold hover:bg-secondary transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">verified</span>
              <span>Confirm &amp; Generate Pass</span>
            </button>
          </div>
        </div>
      )}

      {/* STEP 4: Confirmed Pass */}
      {step === 4 && (
        <div className="bg-surface-card rounded-2xl p-space-md border border-border-subtle shadow-md space-y-4 animate-fade-in">
          {/* Confirmed Ticket Header */}
          <div className="text-center pb-3 border-b border-border-subtle">
            <div className="w-12 h-12 rounded-full bg-surface-container-low text-status-compliant mx-auto flex items-center justify-center mb-2">
              <span className="material-symbols-outlined text-[28px]">check_circle</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface">
              Appointment Confirmed
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Your diagnostic collection slot has been reserved at UPIC Labs.
            </p>
          </div>

          {/* Barcode Pass Container */}
          <div className="p-4 bg-surface-canvas rounded-xl border border-border-subtle text-center space-y-3">
            <span className="font-label-caps text-[10px] uppercase text-on-surface-variant font-bold block">
              Digital Check-In Custody Pass
            </span>
            <div className="font-mono text-[20px] font-bold text-primary tracking-widest bg-white py-2 px-4 rounded-lg border border-border-subtle inline-block shadow-inner">
              {bookingRef}
            </div>

            {/* Fake barcode bars visualization */}
            <div className="flex justify-center items-center gap-1 h-10 py-1">
              {[4, 2, 6, 3, 5, 2, 4, 1, 6, 3, 2, 5, 3, 6, 2, 4, 3, 5, 2, 6, 3].map((w, idx) => (
                <div
                  key={idx}
                  className="bg-on-surface h-full"
                  style={{ width: `${w * 1.5}px` }}
                ></div>
              ))}
            </div>

            <div className="text-left bg-white p-3 rounded-lg border border-border-subtle text-[12px] space-y-1.5">
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Donor Name:</span>
                <span className="font-bold text-on-surface">{formData.donorName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Service:</span>
                <span className="font-semibold text-primary truncate max-w-[200px]">{formData.testType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Schedule:</span>
                <span className="font-semibold text-on-surface">{formData.date} at {formData.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Facility Location:</span>
                <span className="font-semibold text-on-surface">360 Spring St, Ste 2, London KY</span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="flex-1 py-2.5 bg-primary text-on-primary rounded-xl font-label-md text-label-md font-bold flex items-center justify-center gap-1.5 hover:bg-secondary transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">print</span>
              <span>Print / Save Pass</span>
            </button>
            <button
              type="button"
              onClick={() => {
                if (onComplete) onComplete();
              }}
              className="py-2.5 px-4 bg-surface-container text-primary rounded-xl font-label-md text-label-md font-bold hover:bg-surface-variant transition-colors"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
