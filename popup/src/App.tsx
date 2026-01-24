import { useEffect, useState } from "react";
import EmailForm from "./components/EmailForm";
import Header from "./components/Header";

function App({ initialEmail }: { initialEmail?: string }) {
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
      <div className="w-full h-full flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        <div className="border-b border-gray-200 dark:border-gray-800 p-6 pb-4 shrink-0 transition-colors">
          <Header theme={theme} toggleTheme={toggleTheme} zoom={zoom} onZoomChange={setZoom} />
        </div>
        <div className="flex-1 overflow-y-auto px-6 pb-6 scrollbar-thin">
          <EmailForm initialEmail={initialEmail} />
        </div>
      </div>
    </div>
  );
}

export default App;
