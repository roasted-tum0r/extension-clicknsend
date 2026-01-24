interface HeaderProps {
  theme?: string;
  toggleTheme?: () => void;
  zoom?: number;
  onZoomChange?: (zoom: number) => void;
}

export default function Header({ theme, toggleTheme, zoom = 1, onZoomChange }: HeaderProps) {
  return (
    <header
      id="clicksend-header"
      className="mb-0 text-center relative flex flex-col items-center cursor-grab active:cursor-grabbing select-none bg-gray-100 dark:bg-gray-800/50 rounded-t-xl -m-6 p-6 pb-2"
      title="Drag to move"
    >

      {/* Top Controls Row */}
      <div className="absolute top-0 w-full flex justify-between items-start -mt-2">
        <div className="flex items-center">
          {/* Theme Toggle */}
          {toggleTheme && (
            <button
              onClick={() => {
                console.log("Header toggle button clicked");
                toggleTheme?.();
              }}
              className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors rounded-full -ml-2 hover:bg-gray-200 dark:hover:bg-gray-800"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          )}

          {/* Zoom Controls */}
          {onZoomChange && (
            <div className="flex items-center gap-0.5 ml-1">
              <button
                onClick={() => onZoomChange(Math.max(0.8, zoom - 0.1))}
                className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 text-xs font-bold"
                title="Zoom Out"
              >
                A-
              </button>
              <button
                onClick={() => onZoomChange(1.0)}
                className="px-1 text-[10px] text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors rounded hover:bg-gray-200 dark:hover:bg-gray-800 font-medium"
                title="Reset Zoom"
              >
                {Math.round(zoom * 100)}%
              </button>
              <button
                onClick={() => onZoomChange(Math.min(1.5, zoom + 0.1))}
                className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 text-xs font-bold"
                title="Zoom In"
              >
                A+
              </button>
            </div>
          )}
        </div>

        {/* Close Button */}
        <button
          onClick={() => {
            if (document.getElementById('icon-root')) {
              window.close();
            } else {
              window.dispatchEvent(new CustomEvent('CLICKSEND_REQ_CLOSE'));
            }
          }}
          className="p-2 text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors text-2xl font-bold cursor-pointer -mr-2 leading-none rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 w-10 h-10 flex items-center justify-center"
          aria-label="Close"
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
