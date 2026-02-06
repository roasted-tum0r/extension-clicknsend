import { useState, useRef, useEffect } from "react";

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
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (menuRef.current && !menuRef.current.contains(target) && triggerRef.current && !triggerRef.current.contains(target)) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("pointerdown", handleClickOutside);
    return () => document.removeEventListener("pointerdown", handleClickOutside);
  }, []);
  return (
    <header
      id="clicksend-header"
      className="mb-0 text-center relative flex flex-col items-center cursor-grab active:cursor-grabbing select-none bg-slate-200/60 backdrop-blur-xl dark:bg-gray-800/50 rounded-t-xl -m-6 p-6 pb-2"
      title="Drag to move"
    >
      {/* Top Controls Row */}
      <div className="absolute top-0 w-full flex justify-between items-start -mt-2">

        {/* Left: Burger Menu */}
        <div className="relative">
          <button
            ref={triggerRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`relative z-50 p-2 transition-all duration-200 cursor-pointer -ml-2 w-10 h-10 flex items-center justify-center rounded-xl
                            ${isMenuOpen ? 'bg-gray-200 dark:bg-gray-700 text-slate-800 dark:text-white' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800'}
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
              {/* Backdrop Overlay */}
              <div
                className="fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-md cursor-default"
                onClick={() => setIsMenuOpen(false)}
              />

              {/* Dropdown Panel */}
              <div ref={menuRef} className="absolute left-0 top-12 w-64 origin-top-left animate-dropdown-enter z-50 text-left cursor-default">
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
                        className="relative h-10 w-full bg-slate-200 dark:bg-slate-800 rounded-full p-1 cursor-pointer transition-colors duration-300 shadow-inner flex items-center"
                      >
                        {/* Icons Background */}
                        <div className="absolute inset-0 flex justify-between items-center px-3 pointer-events-none">
                          <span className="text-base">☀️</span>
                          <span className="text-sm">🌙</span>
                        </div>

                        {/* Sliding Thumb */}
                        <div className={`
                                                    relative w-1/2 h-full bg-white dark:bg-slate-600 rounded-full shadow-md transform transition-transform duration-300 ease-spring
                                                    flex items-center justify-center
                                                    ${theme === 'dark' ? 'translate-x-full' : 'translate-x-0'}
                                                `}>
                          <span className="text-sm">{theme === 'dark' ? '🌙' : '☀️'}</span>
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
                          title="Click to Reset"
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
                        onDoubleClick={() => handleZoomChange(1.0)}
                        className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500 hover:accent-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
                      />
                      <div className="flex justify-between mt-1 px-1">
                        <button onClick={() => handleZoomChange(Math.max(0.8, localZoom - 0.1))} className="text-[10px] font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">A-</button>
                        <button onClick={() => handleZoomChange(Math.min(1.5, localZoom + 0.1))} className="text-[10px] font-bold text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">A+</button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
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
          className="p-2 text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors text-2xl font-bold cursor-pointer -mr-2 leading-none rounded-xl hover:bg-gray-200 dark:hover:bg-gray-800 w-10 h-10 flex items-center justify-center"
          aria-label="Close"
          title="Close"
        >
          ×
        </button>
      </div>

      <div className="mt-8 flex justify-center">
        <svg width="300" height="40" viewBox="0 0 300 40" className="drop-shadow-sm">
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
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
            fill="url(#logoGradient)"
            style={{
              fontSize: '30px',
              fontWeight: 800,
              fontFamily: 'Inter, system-ui, sans-serif'
            }}
          >
            Open SesamE-mail
          </text>
        </svg>
      </div>
      <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
        Send emails faster, without thinking twice
      </p>
    </header>
  );
}
