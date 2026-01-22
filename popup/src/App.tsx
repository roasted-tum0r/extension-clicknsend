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

  useEffect(() => {
    console.log("useEffect applying theme:", theme);
    localStorage.setItem("theme", theme);
    // Apply theme to root element for tailwind 'class' mode
    // Since we want it scoped to this component tree, we apply it to the container.
    // However, tailwind 'dark' variant looks up the tree. 
    // If we put 'dark' on this div, children can use 'dark:'.
  }, [theme]);

  const toggleTheme = () => {
    console.log("toggleTheme called. Current theme:", theme);
    setTheme((prev) => {
      const newTheme = prev === "dark" ? "light" : "dark";
      console.log("Setting theme to:", newTheme);
      return newTheme;
    });
  };

  return (
    <div className={`w-full h-full flex flex-col font-sans overflow-hidden relative transition-colors duration-200 ${theme === 'dark' ? 'dark' : ''}`}>
      {/* Actual Background Container */}
      <div className="w-full h-full flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        <div className="border-b border-gray-200 dark:border-gray-800 p-6 pb-4 shrink-0 transition-colors">
          <Header theme={theme} toggleTheme={toggleTheme} />
        </div>
        <div className="flex-1 overflow-y-auto px-6 pb-6 scrollbar-thin">
          <EmailForm initialEmail={initialEmail} />
        </div>
      </div>
    </div>
  );
}

export default App;
