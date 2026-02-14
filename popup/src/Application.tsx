import { useState } from "react";
import EmailForm from "./components/EmailForm";
import Header from "./components/Header";
import { useExtensionData } from "./ExtensionDataContext";
import { useTheme } from "./context/ThemeContext";

import type { TemplateTypeNew } from "./features/mail-composer/types";

export default function Application({ initialTemplate, initialEmail: overrideEmail }: { initialTemplate?: TemplateTypeNew, initialEmail?: string }) {
  const { initialEmail: contextEmail, rawText } = useExtensionData();
  const initialEmail = overrideEmail || contextEmail;
  const { theme, toggleTheme, activeTheme } = useTheme();
  const [zoom, setZoom] = useState(1);

  return (
    <div
      className={`clicksend-wrapper h-full w-full overflow-auto transition-colors duration-300 ${theme}`}
      style={{
        backgroundColor: activeTheme.bg,
        color: activeTheme.text
      }}
    >
      <div
        id="clicksend-root"
        className="flex flex-col h-full w-full mx-auto relative transition-all duration-300 overflow-visible"
        style={{
          zoom: zoom,
          width: '100%',
          height: '100%',
          backgroundColor: activeTheme.bg,
          color: activeTheme.text
        } as React.CSSProperties}
      >
        <div className="flex-none relative z-[80]">
          <Header theme={theme} toggleTheme={toggleTheme} zoom={zoom} onZoomChange={setZoom} />
        </div>
        <div className="flex-1 overflow-y-auto px-6 pb-6 scrollbar-thin overflow-x-hidden">
          <EmailForm initialEmail={initialEmail} rawText={rawText} theme={theme} initialTemplate={initialTemplate} />
        </div>
      </div>
    </div>
  );
}

