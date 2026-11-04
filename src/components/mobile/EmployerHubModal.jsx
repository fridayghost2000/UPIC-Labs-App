import React from 'react';

export default function EmployerHubModal({ isOpen, onClose, onScheduleRosterTest }) {
  if (!isOpen) return null;

  const rosterStats = [
    { label: 'Active Drivers / Workers', value: '148', color: 'text-primary' },
    { label: 'Random Pool Compliance', value: '100%', color: 'text-status-compliant' },
    { label: 'Completed This Quarter', value: '38', color: 'text-secondary' },
    { label: 'Upcoming Random Due', value: '4', color: 'text-amber-600' },
  ];

  const recentEmployees = [
    { name: 'Marcus Vance', id: 'EMP-1082', type: 'DOT FMCSA Random', status: 'Compliant / Passed', date: 'Yesterday' },
    { name: 'Sarah Jenkins', id: 'EMP-1144', type: 'Pre-Employment 10-Panel', status: 'Negative / Clear', date: 'Nov 2' },
    { name: 'David Miller', id: 'EMP-0981', type: 'Annual Recertification', status: 'In Analysis', date: 'Today 11:24 AM' },
    { name: 'Carlos Ramos', id: 'EMP-1205', type: 'Breath Alcohol (BAT)', status: '0.000 BrAC / Passed', date: 'Oct 29' },
  ];

  return (
    <div className="absolute inset-0 z-50 flex items-end sm:items-center justify-center p-2.5 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div
        className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 max-h-[88vh] flex flex-col overflow-hidden animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-3.5 bg-primary text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px] text-amber-300">corporate_fare</span>
            <div>
              <div className="text-xs font-bold text-white leading-tight">
                Employer Hub • B2B Management
              </div>
              <div className="text-[10px] text-blue-100 mt-0.5">
                Workforce Random Rosters &amp; DOT Consortium
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-3.5 overflow-y-auto space-y-3 text-slate-800">
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 gap-2">
            {rosterStats.map((stat, i) => (
              <div key={i} className="p-2.5 bg-slate-50/80 rounded-xl border border-slate-100">
                <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wide block leading-tight">
                  {stat.label}
                </span>
                <span className={`text-lg font-bold ${stat.color} block mt-1 leading-none`}>
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

          {/* DOT Consortium Notice */}
          <div className="p-2.5 bg-blue-50/60 rounded-xl border border-blue-100/80 flex items-start gap-2">
            <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">verified</span>
            <div className="text-xs">
              <span className="font-semibold text-primary block leading-tight">FMCSA Clearinghouse &amp; Consortium Active</span>
              <p className="text-[11px] text-slate-600 mt-0.5 leading-relaxed">
                Your quarterly 50% drug / 10% alcohol random testing quotas are on track for federal compliance.
              </p>
            </div>
          </div>

          {/* Recent Roster Screenings */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wide">
                Workforce Testing Feed
              </span>
              <span className="text-[10px] font-semibold uppercase text-emerald-600 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Live Sync
              </span>
            </div>

            <div className="space-y-1.5">
              {recentEmployees.map((emp, idx) => (
                <div
                  key={idx}
                  className="p-2.5 bg-white rounded-xl border border-slate-100 shadow-xs flex items-center justify-between hover:bg-slate-50/60 transition-colors"
                >
                  <div className="min-w-0 pr-2">
                    <div className="font-medium text-xs text-slate-800 truncate">
                      {emp.name} <span className="text-[10px] text-slate-400 font-normal">({emp.id})</span>
                    </div>
                    <div className="text-[10px] text-slate-500 mt-0.5 truncate">{emp.type} • {emp.date}</div>
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[9px] font-semibold uppercase tracking-wide shrink-0 ${
                      emp.status.includes('Analysis')
                        ? 'bg-blue-50 text-primary border border-blue-200/60'
                        : 'bg-emerald-50 text-emerald-700 border border-emerald-200/60'
                    }`}
                  >
                    {emp.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => {
              onClose();
              if (onScheduleRosterTest) onScheduleRosterTest();
            }}
            className="flex-1 py-2 px-3 bg-primary text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-secondary transition-colors shadow-sm cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">add_circle</span>
            <span>Order Roster Screening</span>
          </button>
          <button
            type="button"
            onClick={onClose}
            className="py-2 px-4 bg-white border border-slate-200 text-slate-700 rounded-xl text-xs font-medium hover:bg-slate-100 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
