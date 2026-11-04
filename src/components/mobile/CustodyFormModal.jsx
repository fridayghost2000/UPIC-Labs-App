import React from 'react';

export default function CustodyFormModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-50 flex items-end sm:items-center justify-center p-2 bg-inverse-surface/60 backdrop-blur-sm animate-fade-in">
      <div
        className="w-full max-w-lg bg-surface-card rounded-t-2xl sm:rounded-2xl shadow-2xl border border-border-subtle max-h-[90vh] flex flex-col overflow-hidden animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 bg-primary text-on-primary flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[22px] text-tertiary-fixed">verified_user</span>
            <div>
              <div className="font-headline-sm text-[16px] font-bold text-on-primary">
                Custody &amp; Control Record (CCF)
              </div>
              <div className="font-body-sm text-[11px] text-surface-container opacity-90">
                Form ST-47 • DOT / Federal SAMHSA Protocol
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Scrollable Document Content */}
        <div className="p-4 overflow-y-auto space-y-3.5 text-on-surface">
          {/* Specimen Barcode & Status Banner */}
          <div className="p-3 bg-surface-canvas rounded-xl border border-border-subtle flex items-center justify-between">
            <div>
              <span className="text-[10px] font-label-caps uppercase text-on-surface-variant font-bold block">
                Specimen Barcode Identification
              </span>
              <span className="text-[17px] font-mono font-bold text-primary tracking-wide">
                #UPIC-8842-DK
              </span>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-surface-container font-label-caps text-label-caps text-primary uppercase font-bold">
              In Analysis
            </span>
          </div>

          {/* Section 1: Donor & Order Details */}
          <div className="border border-border-subtle rounded-xl p-3 bg-surface-card">
            <div className="text-[11px] font-label-caps uppercase text-primary font-bold mb-2 pb-1 border-b border-border-subtle flex items-center justify-between">
              <span>Step 1: Collection Verification</span>
              <span className="text-status-compliant font-bold">● Seal Verified</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-body-sm text-[12px]">
              <div>
                <span className="text-on-surface-variant block text-[10px]">Collection Facility</span>
                <span className="font-semibold text-on-surface">London Testing HQ, Suite 2</span>
              </div>
              <div>
                <span className="text-on-surface-variant block text-[10px]">Collection Date &amp; Time</span>
                <span className="font-semibold text-on-surface">Nov 4, 11:24 AM EST</span>
              </div>
              <div>
                <span className="text-on-surface-variant block text-[10px]">Specimen Type</span>
                <span className="font-semibold text-on-surface">10-Panel Urine (Split A/B)</span>
              </div>
              <div>
                <span className="text-on-surface-variant block text-[10px]">Collector Certification</span>
                <span className="font-semibold text-on-surface">DOT Collector #KY-9042</span>
              </div>
            </div>
          </div>

          {/* Section 2: Chain of Custody Integrity & Temp Check */}
          <div className="border border-border-subtle rounded-xl p-3 bg-surface-card">
            <div className="text-[11px] font-label-caps uppercase text-primary font-bold mb-2 pb-1 border-b border-border-subtle">
              Step 2: Chain of Custody Physical Integrity
            </div>
            <div className="space-y-2 text-body-sm text-[12px]">
              <div className="flex items-center justify-between py-1 bg-surface-container-low px-2 rounded">
                <span className="text-on-surface-variant font-medium">Temperature at Collection (90°-100°F):</span>
                <span className="font-bold text-status-compliant flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">check_circle</span>
                  94.6°F [IN SPEC]
                </span>
              </div>
              <div className="flex items-center justify-between py-1 bg-surface-container-low px-2 rounded">
                <span className="text-on-surface-variant font-medium">Bottle A Tamper Seal:</span>
                <span className="font-bold text-status-compliant flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">verified</span>
                  INTACT &amp; INITIALED
                </span>
              </div>
              <div className="flex items-center justify-between py-1 bg-surface-container-low px-2 rounded">
                <span className="text-on-surface-variant font-medium">Bottle B Split Seal:</span>
                <span className="font-bold text-status-compliant flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">verified</span>
                  STORED SECURELY
                </span>
              </div>
            </div>
          </div>

          {/* Section 3: Laboratory Tracking Trail */}
          <div className="border border-border-subtle rounded-xl p-3 bg-surface-card">
            <div className="text-[11px] font-label-caps uppercase text-primary font-bold mb-2 pb-1 border-b border-border-subtle">
              Step 3: Custody Event Log
            </div>
            <ol className="relative border-l border-primary-container/30 ml-2 space-y-3 text-[11px]">
              <li className="ml-3">
                <div className="absolute -left-1.5 mt-0.5 w-3 h-3 rounded-full bg-status-compliant border-2 border-white"></div>
                <div className="font-bold text-on-surface">11:24 AM - Collected &amp; Sealed</div>
                <div className="text-on-surface-variant">Primary collector London KY certified bench</div>
              </li>
              <li className="ml-3">
                <div className="absolute -left-1.5 mt-0.5 w-3 h-3 rounded-full bg-status-compliant border-2 border-white"></div>
                <div className="font-bold text-on-surface">11:58 AM - Accessioned into Central Lab</div>
                <div className="text-on-surface-variant">SAMHSA accession bay #3, temperature logged</div>
              </li>
              <li className="ml-3">
                <div className="absolute -left-1.5 mt-0.5 w-3 h-3 rounded-full bg-primary-container border-2 border-white animate-pulse"></div>
                <div className="font-bold text-primary">12:30 PM - Immunoassay Screening (In Progress)</div>
                <div className="text-on-surface-variant">Automated robotic analyzer running 10-panel cutoff</div>
              </li>
            </ol>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-3 bg-surface-canvas border-t border-border-subtle flex items-center gap-2">
          <button
            type="button"
            onClick={() => window.print()}
            className="flex-1 py-2 px-3 bg-primary text-on-primary rounded-lg font-label-md text-label-md font-semibold flex items-center justify-center gap-1.5 hover:bg-primary-container transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">print</span>
            <span>Print Official CCF</span>
          </button>
          <button
            type="button"
            onClick={onClose}
            className="py-2 px-4 bg-surface-container text-on-surface rounded-lg font-label-md text-label-md font-semibold hover:bg-surface-variant transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

