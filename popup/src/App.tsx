import { useEffect, useState } from "react";
import EmailForm from "./components/EmailForm";
import Header from "./components/Header";

function App({ initialEmail, rawText }: { initialEmail?: string, rawText?: string }) {
  const [theme, setTheme] = useState(() => {
    if (localStorage.getItem("theme")) {
      return localStorage.getItem("theme") || "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  const [zoom, setZoom] = useState(() => {
    const saved = localStorage.getItem("clicksend_zoom");
    return saved ? parseFloat(saved) : 1.0;
  });

  useEffect(() => {
    console.log("useEffect applying theme:", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("clicksend_zoom", zoom.toString());
  }, [zoom]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div
      className={`w-full h-full flex flex-col font-sans overflow-hidden relative transition-colors duration-200 ${theme === 'dark' ? 'dark' : ''}`}
      style={{
        transform: `scale(${zoom})`,
        transformOrigin: 'top left',
        width: `${100 / zoom}%`,
        height: `${100 / zoom}%`
      }}
    >
      {/* Actual Background Container */}
      <div className="w-full h-full flex flex-col bg-[#F8FAFC] dark:bg-[#0f172a] text-gray-900 dark:text-white transition-colors duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-500/5 dark:via-transparent dark:to-purple-500/5 pointer-events-none" />
        <div className="relative z-50 border-b border-gray-200 dark:border-gray-800 p-6 pb-4 shrink-0 transition-colors bg-white/50 dark:bg-[#0f172a]/50 backdrop-blur-xl">
          <Header theme={theme} toggleTheme={toggleTheme} zoom={zoom} onZoomChange={setZoom} />
        </div>
        <div className="flex-1 overflow-y-auto px-6 pb-6 scrollbar-thin">
          <EmailForm initialEmail={initialEmail} rawText={rawText} theme={theme} />
        </div>
      </div>
    </div>
  );
}

export default App;
