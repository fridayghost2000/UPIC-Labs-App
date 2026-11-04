import React from 'react';

/**
 * Minimal & Responsive Chain-of-Custody (CCF) Modal
 * Clean clinical mobile card with essential custody verification details.
 */
export default function CustodyFormModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="absolute inset-0 z-50 flex items-center justify-center p-3 bg-slate-900/65 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[350px] max-h-[85%] bg-white rounded-2xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden text-slate-800 animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 1. Sleek Compact Header */}
        <div className="px-4 py-3 bg-primary text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-amber-300">verified_user</span>
            <div>
              <div className="text-[13.5px] font-bold tracking-tight leading-tight">
                Chain of Custody (CCF)
              </div>
              <div className="text-[10px] text-blue-200">
                Form ST-47 • DOT / SAMHSA Protocol
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 flex items-center justify-center text-white transition-all cursor-pointer outline-none"
            title="Close"
          >
            <span className="material-symbols-outlined text-[16px]">close</span>
          </button>
        </div>

        {/* 2. Scrollable Minimal Content */}
        <div className="p-3.5 overflow-y-auto no-scrollbar space-y-3">
          
          {/* Specimen Barcode & Status Banner */}
          <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
            <div>
              <span className="text-[9px] uppercase tracking-wider text-slate-400 font-bold block">
                Specimen Barcode
              </span>
              <span className="text-[14px] font-mono font-bold text-primary tracking-wide">
                #UPIC-8842-DK
              </span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-100/80 text-primary text-[10px] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
              <span>In Analysis</span>
            </div>
          </div>

          {/* Verification Details (Clean Key-Value Pairs) */}
          <div className="p-3 rounded-xl border border-slate-100 bg-slate-50/60 space-y-2">
            <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-500 pb-1 border-b border-slate-200/60">
              <span>Collection Verification</span>
              <span className="text-status-compliant flex items-center gap-0.5 font-bold normal-case">
                <span className="material-symbols-outlined text-[12px]">verified</span>
                Seal Verified
              </span>
            </div>

            <div className="grid grid-cols-2 gap-x-2.5 gap-y-1.5 text-[11px]">
              <div>
                <span className="text-slate-400 block text-[9.5px]">Specimen Type</span>
                <span className="font-semibold text-slate-800">10-Panel Urine (Split)</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[9.5px]">Collection Time</span>
                <span className="font-semibold text-slate-800">Nov 4, 11:24 AM EST</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[9.5px]">Facility</span>
                <span className="font-semibold text-slate-800">London HQ, Ste 2</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[9.5px]">Collector ID</span>
                <span className="font-semibold text-slate-800">DOT #KY-9042</span>
              </div>
            </div>

            {/* Physical Integrity Check Pills */}
            <div className="pt-1.5 border-t border-slate-200/60 flex items-center justify-between gap-1.5 text-[10px]">
              <div className="flex-1 px-2 py-1 bg-white rounded-lg border border-slate-200/80 flex items-center justify-between">
                <span className="text-slate-500">Temp:</span>
                <span className="font-bold text-status-compliant flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-[11px]">check_circle</span>
                  94.6°F
                </span>
              </div>
              <div className="flex-1 px-2 py-1 bg-white rounded-lg border border-slate-200/80 flex items-center justify-between">
                <span className="text-slate-500">Bottle A/B:</span>
                <span className="font-bold text-status-compliant flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-[11px]">lock</span>
                  Intact
                </span>
              </div>
            </div>
          </div>

          {/* Custody Event Log (Clean Minimal Timeline) */}
          <div className="p-3 rounded-xl border border-slate-100 bg-white space-y-2">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Custody Timeline
            </div>

            <div className="relative pl-3.5 space-y-2.5 border-l-2 border-slate-100 text-[10.5px]">
              <div className="relative">
                <div className="absolute -left-[19px] top-1 w-2 h-2 rounded-full bg-status-compliant ring-2 ring-white"></div>
                <div className="font-bold text-slate-800">11:24 AM • Collected &amp; Sealed</div>
                <div className="text-slate-500 text-[9.5px]">Certified collector bench, tamper sealed</div>
              </div>

              <div className="relative">
                <div className="absolute -left-[19px] top-1 w-2 h-2 rounded-full bg-status-compliant ring-2 ring-white"></div>
                <div className="font-bold text-slate-800">11:58 AM • Accessioned at Central Lab</div>
                <div className="text-slate-500 text-[9.5px]">SAMHSA accession bay #3, temp logged</div>
              </div>

              <div className="relative">
                <div className="absolute -left-[19px] top-1 w-2 h-2 rounded-full bg-secondary ring-2 ring-white animate-pulse"></div>
                <div className="font-bold text-primary">12:30 PM • Immunoassay Screening</div>
                <div className="text-slate-500 text-[9.5px]">Robotic analyzer running 10-panel cutoff</div>
              </div>
            </div>
          </div>

          {/* Legal Compliance Footer Line */}
          <div className="flex items-center justify-center gap-1.5 text-[9.5px] text-slate-400 py-0.5">
            <span className="material-symbols-outlined text-[12px] text-status-compliant">gavel</span>
            <span>Admissible under DOT 49 CFR Part 40 &amp; SAMHSA</span>
          </div>

        </div>

        {/* 3. Action Buttons */}
        <div className="p-2.5 bg-slate-50 border-t border-slate-100 flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => window.print()}
            className="flex-1 py-1.5 px-3 bg-primary hover:bg-secondary active:scale-95 text-white rounded-xl text-[11px] font-bold flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer outline-none"
          >
            <span className="material-symbols-outlined text-[14px]">print</span>
            <span>Print Official CCF</span>
          </button>
          
          <button
            type="button"
            onClick={onClose}
            className="py-1.5 px-3.5 bg-white hover:bg-slate-100 active:scale-95 text-slate-700 border border-slate-200 rounded-xl text-[11px] font-bold transition-all cursor-pointer outline-none"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
