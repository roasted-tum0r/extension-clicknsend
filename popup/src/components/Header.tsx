interface HeaderProps {
  theme?: string;
  toggleTheme?: () => void;
}

export default function Header({ theme, toggleTheme }: HeaderProps) {
  return (
    <header className="mb-0 text-center relative flex flex-col items-center">

      {/* Top Controls Row */}
      <div className="absolute top-0 w-full flex justify-between items-start -mt-2">
        {/* Theme Toggle */}
        {toggleTheme && (
          <button
            onClick={toggleTheme}
            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors rounded-full -ml-2 hover:bg-gray-200 dark:hover:bg-gray-800"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        )}

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

      <div className="mt-8">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent pb-1">
          Open SesamE-mail
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
          Send emails faster, without thinking twice
        </p>
      </div>
    </header>
  );
}
