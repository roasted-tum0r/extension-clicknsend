import { useEffect } from "react";
import { RoutingTable } from "./RoutingTable";
import { ExtensionDataProvider } from "./ExtensionDataContext";
import { ThemeProvider } from "./context/ThemeContext";
// import { Analytics } from "@vercel/analytics/next";
function App({ initialEmail, rawText }: { initialEmail?: string, rawText?: string }) {
  const isExtension = !!(
    (typeof chrome !== 'undefined' && chrome.runtime?.id) ||
    window.location.protocol === 'chrome-extension:' ||
    document.getElementById("clicksend-host") ||
    document.getElementById("clicksend-root")
  );

  useEffect(() => {
    document.body.setAttribute('data-context', isExtension ? 'extension' : 'web');
  }, [isExtension]);

  return (
    <ThemeProvider>
      <ExtensionDataProvider initialEmail={initialEmail} rawText={rawText} isExtension={isExtension}>
        <RoutingTable />
      </ExtensionDataProvider>
    </ThemeProvider>
  );
}



export default App;
