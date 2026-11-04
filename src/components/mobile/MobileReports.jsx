import React, { useState } from 'react';

export default function MobileReports({ isTablet = false, onOpenCustodyForm }) {
  const [searchId, setSearchId] = useState('UPIC-8842-DK');
  const [selectedReport, setSelectedReport] = useState(null);

  const sampleReports = [
    {
      id: 'UPIC-8842-DK',
      test: '10-Panel Rapid Urine Screen (DOT Protocol)',
      date: 'Nov 4, 2026',
      status: 'In Analysis',
      statusColor: 'bg-blue-50 text-primary border border-blue-200/60',
      result: 'Pending Final GC-MS Confirmatory',
      mro: 'Dr. Evelyn Reed, MD (Review In-Progress)',
      standards: 'AABB & SAMHSA Standards',
      panels: [
        { drug: 'Amphetamines (AMP)', cutoff: '500 ng/mL', status: 'Negative' },
        { drug: 'Cocaine Metabolite (COC)', cutoff: '150 ng/mL', status: 'Negative' },
        { drug: 'Marijuana (THC-COOH)', cutoff: '50 ng/mL', status: 'Pending Review' },
        { drug: 'Opiates (Morphine/Codeine)', cutoff: '2000 ng/mL', status: 'Negative' },
        { drug: 'Phencyclidine (PCP)', cutoff: '25 ng/mL', status: 'Negative' },
      ],
    },
    {
      id: 'UPIC-7910-LN',
      test: 'Court-Admissible Legal DNA Paternity',
      date: 'Oct 28, 2026',
      status: 'Released / Verified',
      statusColor: 'bg-emerald-50 text-status-compliant border border-emerald-200/60',
      result: '99.9994% Probability of Paternity (Positive)',
      mro: 'Forensic Director H. Vance, PhD',
      standards: 'AABB Accredited • Notarized Finding',
      panels: [
        { drug: 'D3S1358 Locus', cutoff: '15, 16', status: 'Matching Allele' },
        { drug: 'vWA Locus', cutoff: '14, 18', status: 'Matching Allele' },
        { drug: 'D21S11 Locus', cutoff: '29, 31', status: 'Matching Allele' },
        { drug: 'Amelogenin (Sex)', cutoff: 'X, Y', status: 'Confirmed Male' },
      ],
    },
    {
      id: 'UPIC-6421-DT',
      test: 'Federal DOT 5-Panel Safety Screen (FMCSA)',
      date: 'Oct 15, 2026',
      status: 'Released / Verified',
      statusColor: 'bg-emerald-50 text-status-compliant border border-emerald-200/60',
      result: 'Verified Negative / DOT Compliant',
      mro: 'Dr. Raymond Scott, MD, MRO #4491',
      standards: '49 CFR Part 40 DOT Standard',
      panels: [
        { drug: 'Marijuana Metabolites (THC)', cutoff: '50 ng/mL', status: 'Negative' },
        { drug: 'Cocaine Metabolites', cutoff: '150 ng/mL', status: 'Negative' },
        { drug: 'Opioids (Codeine/Morphine/6-AM)', cutoff: '2000 ng/mL', status: 'Negative' },
        { drug: 'Phencyclidine (PCP)', cutoff: '25 ng/mL', status: 'Negative' },
        { drug: 'Amphetamines (Meth/MDMA)', cutoff: '500 ng/mL', status: 'Negative' },
      ],
    },
  ];

  const currentActive = sampleReports.find(
    (r) => r.id.toLowerCase() === searchId.replace(/^#/, '').trim().toLowerCase()
  ) || sampleReports[0];

  return (
    <div className="flex flex-col w-full px-4 py-3 pb-8 space-y-3">
      {/* Header */}
      <div>
        <h2 className="text-base font-bold text-on-surface tracking-tight">
          Diagnostic Reports &amp; Custody
        </h2>
        <p className="text-xs text-on-surface-variant mt-0.5">
          Access verified laboratory results and legal chain-of-custody documentation.
        </p>
      </div>

      {/* Specimen Search Bar */}
      <div className="bg-surface-card rounded-2xl p-3 border border-border-subtle shadow-sm">
        <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-1.5">
          Track Specimen Barcode or ID
        </label>
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <span className="material-symbols-outlined absolute left-2.5 top-2 text-slate-400 text-[16px]">
              search
            </span>
            <input
              type="text"
              placeholder="e.g. UPIC-8842-DK"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 rounded-xl border border-border-subtle bg-surface text-xs font-mono uppercase focus:outline-none focus:border-primary text-slate-800 placeholder:text-slate-400"
            />
          </div>
          <button
            type="button"
            className="px-3.5 py-1.5 bg-primary text-white rounded-xl text-xs font-semibold hover:bg-secondary transition-colors shadow-sm cursor-pointer shrink-0"
          >
            Lookup
          </button>
        </div>
      </div>

      {/* Active Specimen Summary Card */}
      {currentActive && (
        <div className="bg-surface-card rounded-2xl p-3.5 border border-border-subtle shadow-sm mb-1 space-y-2.5">
          {/* Header row */}
          <div className="flex items-center justify-between pb-2 border-b border-border-subtle/80">
            <div>
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
                Target Record
              </span>
              <span className="font-mono text-sm font-bold text-primary">
                #{currentActive.id}
              </span>
            </div>
            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide ${currentActive.statusColor}`}>
              {currentActive.status}
            </span>
          </div>

          {/* Test Name & Standards */}
          <div>
            <h3 className="text-sm font-semibold text-slate-800 leading-snug">
              {currentActive.test}
            </h3>
            <p className="text-[11px] text-slate-500 mt-1 flex items-center gap-1.5 flex-wrap">
              <span>Specimen Received: <strong className="font-semibold text-slate-700">{currentActive.date}</strong></span>
              <span className="text-slate-300">•</span>
              <span>{currentActive.standards}</span>
            </p>
          </div>

          {/* Determination Box */}
          <div className="p-2.5 bg-slate-50/80 rounded-xl border border-slate-100">
            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mb-0.5">
              Physician / MRO Determination
            </span>
            <div className="text-xs font-semibold text-primary">
              {currentActive.result}
            </div>
            <div className="text-[10px] text-slate-500 mt-0.5">
              Certified by: {currentActive.mro}
            </div>
          </div>

          {/* Quick Action row */}
          <div className="flex items-center gap-2 pt-1">
            <button
              type="button"
              onClick={() => setSelectedReport(currentActive)}
              className="flex-1 py-2 px-3 bg-primary text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-secondary transition-colors shadow-sm cursor-pointer"
            >
              <span className="material-symbols-outlined text-[15px]">description</span>
              <span>View Certificate</span>
            </button>
            <button
              type="button"
              onClick={onOpenCustodyForm}
              className="py-2 px-3 bg-blue-50/80 border border-blue-100 text-primary rounded-xl text-xs font-semibold hover:bg-blue-100/80 transition-colors flex items-center justify-center gap-1 cursor-pointer shrink-0"
            >
              <span className="material-symbols-outlined text-[15px]">verified_user</span>
              <span>Custody Form</span>
            </button>
          </div>
        </div>
      )}

      {/* Recent Laboratory Records History - Minimalist Selector */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">
            Authorized Account Records
          </span>
          <span className="text-[10px] font-semibold uppercase text-slate-400">
            {sampleReports.length} Available
          </span>
        </div>

        <div className={isTablet ? "grid grid-cols-3 gap-2" : "space-y-1.5"}>
          {sampleReports.map((item) => (
            <div
              key={item.id}
              onClick={() => setSearchId(item.id)}
              className={`px-3 py-2 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-2 ${
                currentActive?.id === item.id
                  ? 'bg-blue-50/50 border-primary shadow-xs'
                  : 'bg-white border-slate-200/80 hover:bg-slate-50'
              }`}
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-primary shrink-0">
                    #{item.id}
                  </span>
                  <span className={`px-2 py-0.5 rounded-full text-[9px] font-semibold uppercase tracking-wide shrink-0 ${item.statusColor}`}>
                    {item.status}
                  </span>
                </div>
                <div className="font-medium text-xs text-slate-700 truncate mt-0.5">
                  {item.test}
                </div>
              </div>

              <div className="flex items-center gap-1 shrink-0">
                <span className="text-[10px] text-slate-400 font-medium">
                  {item.date}
                </span>
                <span
                  className={`material-symbols-outlined text-[16px] transition-transform ${
                    currentActive?.id === item.id ? 'text-primary' : 'text-slate-300'
                  }`}
                >
                  chevron_right
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Official Certificate Modal */}
      {selectedReport && (
        <div className="absolute inset-0 z-50 flex items-center justify-center p-3 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div
            className="w-full max-w-sm bg-white rounded-2xl shadow-2xl border border-slate-200 max-h-[85vh] flex flex-col overflow-hidden animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Certificate Header */}
            <div className="p-3.5 bg-primary text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px] text-amber-300">verified</span>
                <div>
                  <div className="text-xs font-bold text-white">
                    Official Diagnostic Laboratory Certificate
                  </div>
                  <div className="text-[10px] text-blue-100">
                    UPIC Labs • London KY Facility • CLIA / SAMHSA
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedReport(null)}
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            </div>

            {/* Certificate Body */}
            <div className="p-3.5 overflow-y-auto space-y-3 text-on-surface text-xs">
              <div className="border-b border-border-subtle pb-2.5 flex justify-between items-center">
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-slate-400 font-medium block">Record Number</span>
                  <span className="font-mono text-sm font-bold text-primary">#{selectedReport.id}</span>
                </div>
                <div className="text-right">
                  <span className="text-[9px] uppercase tracking-wider text-slate-400 font-medium block">Date Released</span>
                  <span className="font-semibold text-xs text-on-surface">{selectedReport.date}</span>
                </div>
              </div>

              <div>
                <span className="text-[9px] uppercase tracking-wider text-slate-400 font-medium block mb-0.5">
                  Assay / Test Methodology
                </span>
                <span className="font-semibold text-slate-800 text-xs">{selectedReport.test}</span>
              </div>

              {/* Cutoff / Panel Table */}
              <div className="border border-border-subtle rounded-xl overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 text-[10px] uppercase tracking-wider font-semibold text-slate-500 border-b border-border-subtle">
                    <tr>
                      <th className="p-2">Analyte / Marker</th>
                      <th className="p-2">Cutoff</th>
                      <th className="p-2 text-right">Result</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-subtle text-[11px]">
                    {selectedReport.panels.map((p, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50">
                        <td className="p-2 font-medium text-slate-800">{p.drug}</td>
                        <td className="p-2 text-slate-500">{p.cutoff}</td>
                        <td className="p-2 text-right font-semibold text-status-compliant">{p.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Certification Stamp */}
              <div className="p-2.5 bg-slate-50/80 rounded-xl border border-border-subtle flex items-center justify-between">
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-slate-400 font-medium block">
                    Medical Review Officer Sign-Off
                  </span>
                  <span className="font-semibold text-xs text-slate-800">{selectedReport.mro}</span>
                  <div className="text-[9px] text-status-compliant font-medium mt-0.5">
                    ✓ Cryptographically Signed &amp; Tamper-Evident
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full border border-primary/20 flex flex-col items-center justify-center text-center p-1 bg-white shadow-xs shrink-0">
                  <span className="material-symbols-outlined text-[15px] text-primary">verified</span>
                  <span className="text-[6px] font-bold uppercase tracking-tight text-primary">UPIC SEAL</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-2.5 bg-slate-50 border-t border-border-subtle flex items-center gap-2">
              <button
                type="button"
                onClick={() => window.print()}
                className="flex-1 py-2 px-3 bg-primary text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-secondary transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[15px]">download</span>
                <span>Download PDF</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedReport(null)}
                className="py-2 px-3.5 bg-white border border-border-subtle text-slate-700 rounded-xl text-xs font-medium hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

