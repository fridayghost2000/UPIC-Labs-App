import React from 'react';

export default function NotificationsDropdown({ isOpen, onClose, onSelectNotification }) {
  if (!isOpen) return null;

  const notifications = [
    {
      id: 1,
      title: 'Specimen #UPIC-8842-DK in Analysis',
      time: '12 mins ago',
      desc: '10-Panel Rapid screen moved to automated immunoassay analyzer.',
      unread: true,
      icon: 'biotech',
    },
    {
      id: 2,
      title: 'DOT Consortium Audit Notice',
      time: '2 hours ago',
      desc: 'Quarter 4 random roster quotas are at 100% compliance.',
      unread: true,
      icon: 'local_shipping',
    },
    {
      id: 3,
      title: 'Court DNA Certificate Released',
      time: 'Yesterday',
      desc: 'Record #UPIC-7910-LN findings signed by Forensic Director.',
      unread: false,
      icon: 'verified',
    },
  ];

  return (
    <div
      className="absolute top-16 right-4 w-80 sm:w-88 bg-surface-card rounded-2xl shadow-2xl border border-border-subtle z-50 overflow-hidden animate-fade-in"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="p-3 bg-surface-canvas border-b border-border-subtle flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="font-headline-sm text-[14px] font-bold text-on-surface">
            Lab Alerts &amp; Updates
          </span>
          <span className="px-1.5 py-0.2 rounded-full bg-status-alert text-white text-[10px] font-bold">
            2 new
          </span>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="text-on-surface-variant hover:text-on-surface text-[12px] font-medium"
        >
          Close
        </button>
      </div>

      <div className="divide-y divide-border-subtle max-h-80 overflow-y-auto">
        {notifications.map((n) => (
          <div
            key={n.id}
            onClick={() => {
              if (onSelectNotification) onSelectNotification(n);
              onClose();
            }}
            className={`p-3 flex items-start gap-2.5 transition-colors cursor-pointer ${
              n.unread ? 'bg-primary/5 hover:bg-primary/10' : 'bg-surface-card hover:bg-surface-container-low'
            }`}
          >
            <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0 mt-0.5">
              <span className="material-symbols-outlined text-[18px]">{n.icon}</span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-body-sm text-[12px] text-on-surface truncate">
                  {n.title}
                </span>
                {n.unread && <span className="w-1.5 h-1.5 rounded-full bg-status-alert shrink-0 ml-1"></span>}
              </div>
              <p className="text-[11px] text-on-surface-variant mt-0.5 leading-snug">
                {n.desc}
              </p>
              <span className="text-[10px] text-outline mt-1 block">{n.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

