import React, { useState, useEffect } from 'react';
import MobileApp from './mobile/MobileApp';
import { Iphone } from './magicui/iphone';

const getInitialViewMode = () => {
  if (typeof window === 'undefined') return 'desktop';
  const width = window.innerWidth;
  const ua = navigator.userAgent || '';
  const isTouchTablet =
    /iPad|Tablet|Android(?!.*Mobile)/i.test(ua) ||
    (navigator.maxTouchPoints > 1 && width >= 640 && width <= 1366);

  if (width < 640) return 'mobile';
  if ((width >= 640 && width <= 1180) || isTouchTablet) return 'tablet';
  return 'desktop';
};

export default function DeviceFrameWrapper() {
  const [currentTime, setCurrentTime] = useState('9:41');
  const [viewMode, setViewMode] = useState(getInitialViewMode);

  // Update clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      hours = hours % 12 || 12;
      setCurrentTime(`${hours}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  // Detect screen viewport: Mobile (<640px), Tablet (640px-1180px or iPad/touch tablet in DevTools), Desktop (>1180px)
  useEffect(() => {
    const checkViewport = () => {
      const width = window.innerWidth;
      const ua = navigator.userAgent || '';
      const isTouchTablet =
        /iPad|Tablet|Android(?!.*Mobile)/i.test(ua) ||
        (navigator.maxTouchPoints > 1 && width >= 640 && width <= 1366);

      if (width < 640) {
        setViewMode('mobile');
      } else if ((width >= 640 && width <= 1180) || isTouchTablet) {
        setViewMode('tablet');
      } else {
        setViewMode('desktop');
      }
    };

    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  // 1. MOBILE VIEWPORT (<640px): Full native screen, no outer frame
  if (viewMode === 'mobile') {
    return (
      <div className="w-full h-screen overflow-hidden bg-surface">
        <MobileApp isTablet={false} />
      </div>
    );
  }

  // 2. TABLET VIEWPORT (640px-1180px, iPad, Surface Pro, etc.): Full native screen, no blank screen, covers 100%
  if (viewMode === 'tablet') {
    return (
      <div className="w-full h-screen overflow-hidden bg-surface">
        <MobileApp isTablet={true} />
      </div>
    );
  }

  // 3. DESKTOP VIEWPORT (>1180px): Magic UI iPhone centered on dark canvas
  return (
    <div className="min-h-screen w-full bg-[#080d1a] flex items-center justify-center p-2 sm:p-4 select-none overflow-hidden">
      
      {/* Magic UI iPhone Container */}
      <div className="relative h-[min(850px,calc(100vh-28px))] aspect-[433/882] drop-shadow-[0_25px_60px_rgba(0,0,0,0.85)]">
        <Iphone className="size-full">
          
          {/* iOS Top Status Bar (flanking the Dynamic Island) */}
          <div className="w-full h-11 px-7 pt-2 flex items-center justify-between text-on-surface shrink-0 bg-surface z-30 select-none">
            {/* Clock */}
            <div className="w-16 flex items-center pl-1">
              <span className="text-[13px] font-bold tracking-tight text-slate-800">
                {currentTime}
              </span>
            </div>

            {/* Dynamic Island reserved clearance */}
            <div className="w-28 h-6 pointer-events-none shrink-0"></div>

            {/* Status Icons: Cellular, Wifi, Battery */}
            <div className="w-16 flex items-center justify-end gap-1.5 text-slate-800 pr-1 shrink-0 overflow-hidden">
              <span className="material-symbols-outlined text-[15px] leading-none shrink-0">signal_cellular_alt</span>
              <span className="material-symbols-outlined !text-[11px] leading-none shrink-0" style={{ fontSize: '11px' }}>wifi</span>
              <div className="w-5 h-2.5 border border-slate-700 rounded-sm p-0.5 flex items-center shrink-0">
                <div className="w-full h-full bg-slate-800 rounded-2xs"></div>
              </div>
            </div>
          </div>

          {/* UPIC Labs Mobile Application (Mobile layout inside the iPhone frame) */}
          <div className="flex-1 w-full overflow-hidden relative flex flex-col">
            <MobileApp isTablet={false} />
          </div>

        </Iphone>
      </div>

    </div>
  );
}
