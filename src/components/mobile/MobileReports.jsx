import React, { useState } from 'react';

export default function MobileReports({ onOpenCustodyForm }) {
  const [searchId, setSearchId] = useState('UPIC-8842-DK');
  const [selectedReport, setSelectedReport] = useState(null);

  const sampleReports = [
    {
      id: 'UPIC-8842-DK',
      test: '10-Panel Rapid Urine Screen (DOT Protocol)',
      date: 'Nov 4, 2026',
      status: 'In Analysis',
      statusColor: 'bg-surface-container text-primary',
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
      statusColor: 'bg-surface-container-low text-status-compliant',
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
      statusColor: 'bg-surface-container-low text-status-compliant',
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
        <div className="flex items-center gap-1.5 mb-1">
          <span className="font-label-caps text-[10px] text-primary tracking-wider uppercase font-bold">
            HIPAA Compliant Portal
          </span>
          <span className="text-slate-300 text-[10px]">•</span>
          <span className="text-[10px] text-status-compliant font-bold">
            ● 256-Bit Encrypted
          </span>
        </div>
        <h2 className="text-lg font-bold text-on-surface tracking-tight">
          Diagnostic Reports &amp; Custody
        </h2>
        <p className="text-xs text-on-surface-variant mt-0.5">
          Access verified laboratory results and legal chain-of-custody documentation.
        </p>
      </div>

      {/* Specimen Search Bar */}
      <div className="bg-surface-card rounded-2xl p-3 border border-border-subtle shadow-sm">
        <label className="text-[10px] font-bold text-on-surface-variant uppercase block mb-1">
          Track Specimen Barcode or ID
        </label>
        <div className="flex items-center gap-1.5">
          <div className="relative flex-1">
            <span className="material-symbols-outlined absolute left-2.5 top-2 text-on-surface-variant text-[18px]">
              search
            </span>
            <input
              type="text"
              placeholder="e.g. UPIC-8842-DK"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              className="w-full pl-8 pr-2 py-1.5 rounded-xl border border-border-subtle bg-surface text-xs font-mono uppercase focus:outline-none focus:border-primary"
            />
          </div>
          <button
            type="button"
            className="px-3 py-1.5 bg-primary text-white rounded-xl text-xs font-bold hover:bg-secondary transition-colors"
          >
            Lookup
          </button>
        </div>
      </div>

      {/* Active Specimen Summary Card */}
      {currentActive && (
        <div className="bg-surface-card rounded-2xl p-space-md border border-border-subtle shadow-sm mb-4 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-border-subtle">
            <div>
              <span className="text-[10px] font-label-caps text-on-surface-variant uppercase font-bold block">
                Target Record
              </span>
              <span className="font-mono text-headline-sm text-primary font-bold">
                #{currentActive.id}
              </span>
            </div>
            <span className={`px-2.5 py-1 rounded-full text-[11px] font-label-caps font-bold uppercase ${currentActive.statusColor}`}>
              {currentActive.status}
            </span>
          </div>

          <div>
            <h3 className="font-headline-sm text-[16px] font-bold text-on-surface">
              {currentActive.test}
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
              Specimen Received: <strong className="text-on-surface">{currentActive.date}</strong> • {currentActive.standards}
            </p>
          </div>

          <div className="p-3 bg-surface-canvas rounded-xl border border-border-subtle">
            <span className="text-[10px] font-label-caps text-on-surface-variant uppercase block font-bold mb-1">
              Physician / MRO Determination
            </span>
            <div className="font-headline-sm text-[15px] font-semibold text-primary">
              {currentActive.result}
            </div>
            <div className="text-[11px] text-on-surface-variant mt-0.5">
              Certified by: {currentActive.mro}
            </div>
          </div>

          {/* Quick Action row */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <button
              type="button"
              onClick={() => setSelectedReport(currentActive)}
              className="flex-1 py-2 px-3 bg-primary text-on-primary rounded-xl font-label-md text-label-md font-bold flex items-center justify-center gap-1.5 hover:bg-secondary transition-colors shadow-sm cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">description</span>
              <span>View Certified Certificate</span>
            </button>
            <button
              type="button"
              onClick={onOpenCustodyForm}
              className="py-2 px-3 bg-surface-container text-primary rounded-xl font-label-md text-label-md font-bold hover:bg-surface-variant transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">verified_user</span>
              <span>Custody Form</span>
            </button>
          </div>
        </div>
      )}

      {/* Recent Laboratory Records History */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="font-headline-sm text-[15px] font-bold text-on-surface">
            Authorized Account Records
          </span>
          <span className="text-[11px] font-label-caps uppercase text-secondary font-bold">
            {sampleReports.length} Available
          </span>
        </div>

        <div className="space-y-2.5">
          {sampleReports.map((item) => (
            <div
              key={item.id}
              onClick={() => setSearchId(item.id)}
              className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                currentActive?.id === item.id
                  ? 'bg-surface-card border-primary shadow-sm'
                  : 'bg-surface-card border-border-subtle hover:bg-surface-container-low'
              }`}
            >
              <div className="min-w-0 pr-2">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="font-mono text-body-sm font-bold text-primary">#{item.id}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-label-caps font-bold uppercase ${item.statusColor}`}>
                    {item.status}
                  </span>
                </div>
                <div className="font-semibold text-body-sm text-on-surface truncate">
                  {item.test}
                </div>
                <div className="text-[11px] text-on-surface-variant">
                  {item.date} • {item.result}
                </div>
              </div>
              <span className="material-symbols-outlined text-outline-variant text-[20px] shrink-0">
                chevron_right
              </span>
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
            <div className="p-4 bg-primary text-on-primary flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[24px] text-tertiary-fixed">verified</span>
                <div>
                  <div className="font-headline-sm text-[16px] font-bold text-on-primary">
                    Official Diagnostic Laboratory Certificate
                  </div>
                  <div className="font-body-sm text-[11px] text-surface-container opacity-90">
                    UPIC Labs • London KY Facility • CLIA / SAMHSA
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedReport(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            {/* Certificate Body */}
            <div className="p-4 overflow-y-auto space-y-3.5 text-on-surface text-body-sm text-[12px]">
              <div className="border-b border-border-subtle pb-3 flex justify-between items-center">
                <div>
                  <span className="text-[10px] font-label-caps uppercase text-on-surface-variant block">Record Number</span>
                  <span className="font-mono text-[16px] font-bold text-primary">#{selectedReport.id}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-label-caps uppercase text-on-surface-variant block">Date Released</span>
                  <span className="font-bold text-on-surface">{selectedReport.date}</span>
                </div>
              </div>

              <div>
                <span className="text-[10px] font-label-caps uppercase text-on-surface-variant block font-bold mb-1">
                  Assay / Test Methodology
                </span>
                <span className="font-semibold text-on-surface text-[14px]">{selectedReport.test}</span>
              </div>

              {/* Cutoff / Panel Table */}
              <div className="border border-border-subtle rounded-xl overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-surface-canvas text-[11px] font-label-caps uppercase text-on-surface-variant border-b border-border-subtle">
                    <tr>
                      <th className="p-2">Analyte / Marker</th>
                      <th className="p-2">Cutoff Level</th>
                      <th className="p-2 text-right">Result Finding</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border-subtle text-[12px]">
                    {selectedReport.panels.map((p, idx) => (
                      <tr key={idx} className="hover:bg-surface-container-low">
                        <td className="p-2 font-medium">{p.drug}</td>
                        <td className="p-2 text-on-surface-variant">{p.cutoff}</td>
                        <td className="p-2 text-right font-bold text-status-compliant">{p.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Certification Stamp */}
              <div className="p-3 bg-surface-canvas rounded-xl border border-border-subtle flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-label-caps uppercase text-on-surface-variant font-bold block">
                    Medical Review Officer Sign-Off
                  </span>
                  <span className="font-semibold text-on-surface">{selectedReport.mro}</span>
                  <div className="text-[10px] text-status-compliant font-bold mt-0.5">
                    ✓ Cryptographically Signed &amp; Tamper-Evident
                  </div>
                </div>
                <div className="w-14 h-14 rounded-full border-2 border-primary-container/30 flex flex-col items-center justify-center text-center p-1 bg-white">
                  <span className="material-symbols-outlined text-[18px] text-primary">verified</span>
                  <span className="text-[7px] font-bold uppercase tracking-tighter text-primary">UPIC SEAL</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-3 bg-surface-canvas border-t border-border-subtle flex items-center gap-2">
              <button
                type="button"
                onClick={() => window.print()}
                className="flex-1 py-2 px-3 bg-primary text-on-primary rounded-xl font-label-md text-label-md font-bold flex items-center justify-center gap-1.5 hover:bg-secondary transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">download</span>
                <span>Download Certified PDF</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedReport(null)}
                className="py-2 px-4 bg-surface-container text-on-surface rounded-xl font-label-md text-label-md font-semibold hover:bg-surface-variant transition-colors"
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

