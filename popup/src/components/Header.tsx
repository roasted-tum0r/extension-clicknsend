import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import SunIcon from "../assets/icons/Sun";
import MoonIcon from "../assets/icons/Moon";

interface HeaderProps {
  theme?: string;
  toggleTheme?: () => void;
  zoom?: number;
  onZoomChange?: (zoom: number) => void;
}

export default function Header({ theme, toggleTheme, zoom = 1, onZoomChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const [uniqueLogoId] = useState(() => `logoGradient-${Math.random().toString(36).substring(2, 9)}`);

  // Debounced Zoom Logic
  const [localZoom, setLocalZoom] = useState(zoom);
  const zoomTimeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  // Sync local state if parent updates (but avoid overwriting while dragging if possible)
  useEffect(() => {
    if (Math.abs(zoom - localZoom) > 0.001) {
      setLocalZoom(zoom);
    }
  }, [zoom]);

  const handleZoomChange = (newZoom: number) => {
    setLocalZoom(newZoom);

    if (zoomTimeoutRef.current) {
      clearTimeout(zoomTimeoutRef.current);
    }

    zoomTimeoutRef.current = setTimeout(() => {
      onZoomChange?.(newZoom);
    }, 30); // 30ms throttle/debounce to prevent layout thrashing
  };

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: PointerEvent) {
      const path = event.composedPath();
      const isInsideMenu = menuRef.current && path.includes(menuRef.current);
      const isInsideTrigger = triggerRef.current && path.includes(triggerRef.current);

      if (isMenuOpen && !isInsideMenu && !isInsideTrigger) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("pointerdown", handleClickOutside as any);
    return () => document.removeEventListener("pointerdown", handleClickOutside as any);
  }, [isMenuOpen]);
  return (
    <header
      id="clicksend-header"
      className="mb-0 relative z-[70] flex flex-col bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 p-4 select-none cursor-grab active:cursor-grabbing"
      title="Drag to move"
    >
      {/* Top Controls & Logo Row */}
      <div className="flex justify-between items-center w-full gap-4">

        {/* Left: Settings */}
        <div className="relative">
          <button
            ref={triggerRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`
              relative z-50 p-2 transition-all duration-200 cursor-pointer w-10 h-10 flex items-center justify-center rounded-xl border
              ${isMenuOpen
                ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-900/50 shadow-lg shadow-blue-500/10'
                : 'bg-slate-100 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 border-transparent'}
            `}
            title="Settings"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </button>

          {/* Settings Menu State */}
          {isMenuOpen && (
            <>
              <div
                className="fixed inset-0 z-40 bg-slate-900/30 backdrop-blur-sm cursor-default"
                data-no-drag="true"
                onMouseDown={(e) => e.stopPropagation()}
                onClick={() => setIsMenuOpen(false)}
              />

              <div
                ref={menuRef}
                data-no-drag="true"
                onMouseDown={(e) => e.stopPropagation()}
                className="absolute left-0 top-12 w-64 origin-top-left animate-dropdown-enter z-50 text-left cursor-default"
              >
                <div className="bg-white/98 dark:bg-slate-900/98 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-4 ring-1 ring-black/5">
                  <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 pl-1">
                    Settings & Appearance
                  </h3>

                  {/* Theme Switcher */}
                  {toggleTheme && (
                    <div className="mb-5">
                      <div className="flex items-center justify-between mb-2 px-1">
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Theme</span>
                        <span className="text-xs text-slate-500 capitalize">{theme} Mode</span>
                      </div>
                      <div
                        onClick={() => toggleTheme()}
                        className="relative h-11 w-full bg-slate-100 dark:bg-slate-800/80 rounded-xl p-1 cursor-pointer shadow-inner flex items-center group/toggle border border-slate-200 dark:border-slate-700/50"
                      >
                        {/* Sliding Thumb Background with Framer Motion */}
                        <motion.div
                          className="absolute h-9 w-[calc(50%-4px)] bg-white dark:bg-blue-600 rounded-lg shadow-sm z-0"
                          initial={false}
                          animate={{
                            x: theme === 'dark' ? '100%' : '0%',
                            marginLeft: theme === 'dark' ? '0px' : '0px'
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30
                          }}
                        />

                        <div className="relative w-full h-full flex items-center justify-between px-1 z-10">
                          <div className={`flex-1 flex items-center justify-center gap-2 transition-all duration-300 ${theme === 'light' ? 'text-blue-600 font-bold' : 'text-slate-400'}`}>
                            <span className="text-sm"><SunIcon /></span>
                            <span className="text-[10px] uppercase tracking-wider font-extrabold">Light</span>
                          </div>
                          <div className={`flex-1 flex items-center justify-center gap-2 transition-all duration-300 ${theme === 'dark' ? 'text-white font-bold' : 'text-slate-400'}`}>
                            <span className="text-sm"><MoonIcon /></span>
                            <span className="text-[10px] uppercase tracking-wider font-extrabold">Dark</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Zoom Controls */}
                  {onZoomChange && zoom && (
                    <div>
                      <div className="flex items-center justify-between mb-2 px-1">
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Zoom Level</span>
                        <span
                          className="text-xs font-bold bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
                          onClick={() => handleZoomChange(1.0)}
                        >
                          {Math.round(localZoom * 100)}%
                        </span>
                      </div>
                      <input
                        type="range"
                        min="0.8"
                        max="1.5"
                        step="0.05"
                        value={localZoom}
                        onChange={(e) => handleZoomChange(parseFloat(e.target.value))}
                        className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                      />
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Center: Brand Logo */}
        <div className="flex-1 flex justify-center">
          <svg width="180" height="30" viewBox="0 0 300 40" className="drop-shadow-sm">
            <defs>
              <linearGradient id={uniqueLogoId} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={theme === 'dark' ? '#a5b4fc' : '#3730a3'} />
                <stop offset="50%" stopColor={theme === 'dark' ? '#c084fc' : '#7e22ce'} />
                <stop offset="100%" stopColor={theme === 'dark' ? '#818cf8' : '#312e81'} />
              </linearGradient>
            </defs>
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill={`url(#${uniqueLogoId})`}
              style={{
                fontSize: '32px',
                fontWeight: 900,
                fontFamily: 'Outfit,Inter, system-ui, sans-serif'
              }}
            >
              SesamE-mail
            </text>
          </svg>
        </div>

        {/* Right: Close Button */}
        <button
          onClick={() => {
            if (document.getElementById('icon-root')) {
              window.close();
            } else {
              window.dispatchEvent(new CustomEvent('CLICKSEND_REQ_CLOSE'));
            }
          }}
          className="p-2 bg-slate-100 dark:bg-slate-800/80 border border-transparent text-slate-400 hover:text-red-500 dark:hover:text-red-400 hover:bg-white dark:hover:bg-slate-800 transition-all text-2xl font-bold cursor-pointer leading-none rounded-xl w-10 h-10 flex items-center justify-center shadow-sm"
          aria-label="Close"
          title="Close"
        >
          &times;
        </button>
      </div>

      <p className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-2 -mb-1 opacity-80">
        Send emails faster, without thinking twice
      </p>
    </header >

  );
}
