import React, { useState, useEffect } from 'react';
import MobileApp from './mobile/MobileApp';

export default function DeviceFrameWrapper() {
  const [currentTime, setCurrentTime] = useState('9:41');
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  // Update real-time clock (or standard 9:41)
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

  // Detect screen size: If on real mobile device (<768px), render 100% native fullscreen
  useEffect(() => {
    const checkScreen = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  // Real mobile viewports: native full screen with no mockup bezels
  if (!isLargeScreen) {
    return (
      <div className="w-full h-screen overflow-hidden bg-surface">
        <MobileApp />
      </div>
    );
  }

  // DESKTOP: COMPLETELY BLANK SCREEN WITH CENTERED PHONE (Exact 2nd image reference)
  return (
    <div className="min-h-screen w-full bg-[#080d1a] flex items-center justify-center p-2 sm:p-4 select-none overflow-hidden">
      
      {/* PHONE DEVICE CHASSIS (Centered, no external text or controls) */}
      <div className="relative">
        
        {/* Hardware Side Buttons */}
        {/* Left Action Button */}
        <div className="absolute -left-[4px] top-[110px] w-[4px] h-[26px] bg-[#2d3240] rounded-l-sm border-l border-y border-[#3e4556]"></div>
        {/* Left Volume Up */}
        <div className="absolute -left-[4px] top-[150px] w-[4px] h-[50px] bg-[#2d3240] rounded-l-sm border-l border-y border-[#3e4556]"></div>
        {/* Left Volume Down */}
        <div className="absolute -left-[4px] top-[212px] w-[4px] h-[50px] bg-[#2d3240] rounded-l-sm border-l border-y border-[#3e4556]"></div>
        {/* Right Power Button */}
        <div className="absolute -right-[4px] top-[165px] w-[4px] h-[72px] bg-[#2d3240] rounded-r-sm border-r border-y border-[#3e4556]"></div>

        {/* Outer Phone Bezel */}
        <div className="relative w-[390px] h-[min(844px,calc(100vh-24px))] bg-[#141824] p-[10px] rounded-[52px] shadow-[0_30px_90px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.08),inset_0_0_0_2px_rgba(255,255,255,0.05)] border border-[#232938] flex flex-col overflow-hidden">
          
          {/* Inner Phone Screen Container */}
          <div className="relative w-full h-full bg-surface rounded-[42px] overflow-hidden flex flex-col shadow-inner">
            
            {/* Top iOS Status Bar with Dynamic Island */}
            <div className="w-full h-10 px-6 pt-1 flex items-center justify-between text-on-surface shrink-0 bg-surface z-40 select-none">
              {/* Clock */}
              <span className="text-[13px] font-bold tracking-tight pl-1 text-on-surface">
                {currentTime}
              </span>

              {/* Dynamic Island Capsule */}
              <div className="w-24 h-6 bg-black rounded-full mx-auto flex items-center justify-between px-2.5 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-[#111] opacity-60"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#0a1224] ring-1 ring-[#1a233a] flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-[#1b2b4f]"></div>
                </div>
              </div>

              {/* Status Icons: Cellular, Wifi, Battery */}
              <div className="flex items-center gap-1.5 text-[11px] pr-1 text-on-surface">
                <span className="material-symbols-outlined text-[15px] leading-none">signal_cellular_alt</span>
                <span className="material-symbols-outlined text-[15px] leading-none">wifi</span>
                <div className="w-5 h-2.5 border border-on-surface rounded-sm p-0.5 flex items-center">
                  <div className="w-full h-full bg-on-surface rounded-2xs"></div>
                </div>
              </div>
            </div>

            {/* UPIC Labs Mobile Application */}
            <div className="flex-1 w-full overflow-hidden relative flex flex-col">
              <MobileApp />
            </div>

            {/* iOS Bottom Home Indicator Bar */}
            <div className="w-full h-4 bg-surface-card flex items-center justify-center shrink-0 z-40">
              <div className="w-32 h-1 bg-on-surface/30 rounded-full"></div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}



