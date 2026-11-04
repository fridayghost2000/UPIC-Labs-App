import React from 'react';

export default function EmployerHubModal({ isOpen, onClose, onScheduleRosterTest }) {
  if (!isOpen) return null;

  const rosterStats = [
    { label: 'Active Drivers / Workers', value: '148', color: 'text-primary' },
    { label: 'Random Pool Compliance', value: '100%', color: 'text-status-compliant' },
    { label: 'Completed This Quarter', value: '38', color: 'text-secondary' },
    { label: 'Upcoming Random Due', value: '4', color: 'text-status-pending' },
  ];

  const recentEmployees = [
    { name: 'Marcus Vance', id: 'EMP-1082', type: 'DOT FMCSA Random', status: 'Compliant / Passed', date: 'Yesterday' },
    { name: 'Sarah Jenkins', id: 'EMP-1144', type: 'Pre-Employment 10-Panel', status: 'Negative / Clear', date: 'Nov 2' },
    { name: 'David Miller', id: 'EMP-0981', type: 'Annual Recertification', status: 'In Analysis', date: 'Today 11:24 AM' },
    { name: 'Carlos Ramos', id: 'EMP-1205', type: 'Breath Alcohol (BAT)', status: '0.000 BrAC / Passed', date: 'Oct 29' },
  ];

  return (
    <div className="absolute inset-0 z-50 flex items-end sm:items-center justify-center p-2 bg-inverse-surface/60 backdrop-blur-sm animate-fade-in">
      <div
        className="w-full max-w-lg bg-surface-card rounded-t-2xl sm:rounded-2xl shadow-2xl border border-border-subtle max-h-[90vh] flex flex-col overflow-hidden animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 bg-primary text-on-primary flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[24px] text-tertiary-fixed">corporate_fare</span>
            <div>
              <div className="font-headline-sm text-[16px] font-bold text-on-primary">
                Employer Hub • B2B Management
              </div>
              <div className="font-body-sm text-[11px] text-surface-container opacity-90">
                Workforce Random Rosters &amp; DOT Consortium
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

        {/* Content */}
        <div className="p-4 overflow-y-auto space-y-4">
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 gap-2">
            {rosterStats.map((stat, i) => (
              <div key={i} className="p-3 bg-surface-canvas rounded-xl border border-border-subtle">
                <span className="text-[11px] font-label-caps text-on-surface-variant uppercase block">
                  {stat.label}
                </span>
                <span className={`text-[20px] font-bold ${stat.color} block mt-0.5`}>
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

          {/* DOT Consortium Notice */}
          <div className="p-3 bg-surface-container-low rounded-xl border border-primary-container/20 flex items-start gap-2.5">
            <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">verified</span>
            <div className="text-body-sm text-[12px]">
              <span className="font-bold text-primary block">FMCSA Clearinghouse &amp; Consortium Active</span>
              <p className="text-on-surface-variant mt-0.5">
                Your quarterly 50% drug / 10% alcohol random testing quotas are on track for federal compliance.
              </p>
            </div>
          </div>

          {/* Recent Roster Screenings */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-headline-sm text-[14px] font-bold text-on-surface">
                Workforce Testing Feed
              </span>
              <span className="text-[11px] font-label-caps uppercase text-secondary font-bold">
                Live Sync
              </span>
            </div>

            <div className="space-y-2">
              {recentEmployees.map((emp, idx) => (
                <div
                  key={idx}
                  className="p-2.5 bg-surface-card rounded-xl border border-border-subtle flex items-center justify-between"
                >
                  <div>
                    <div className="font-semibold text-body-sm text-[13px] text-on-surface">
                      {emp.name} <span className="text-[11px] text-on-surface-variant font-normal">({emp.id})</span>
                    </div>
                    <div className="text-[11px] text-on-surface-variant">{emp.type} • {emp.date}</div>
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-label-caps font-bold uppercase ${
                      emp.status.includes('Analysis')
                        ? 'bg-surface-container text-primary'
                        : 'bg-surface-container-low text-status-compliant'
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
        <div className="p-3 bg-surface-canvas border-t border-border-subtle flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              onClose();
              if (onScheduleRosterTest) onScheduleRosterTest();
            }}
            className="flex-1 py-2.5 px-3 bg-primary text-on-primary rounded-lg font-label-md text-label-md font-bold flex items-center justify-center gap-1.5 hover:bg-secondary transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">add_circle</span>
            <span>Order Roster Screening</span>
          </button>
          <button
            type="button"
            onClick={onClose}
            className="py-2.5 px-4 bg-surface-container text-on-surface rounded-lg font-label-md text-label-md font-semibold hover:bg-surface-variant transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
