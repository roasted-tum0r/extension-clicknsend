import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const mount = (containerId: string, initialEmail?: string) => {
  const rootElement = document.getElementById(containerId);
  if (rootElement) {
    createRoot(rootElement).render(
      <StrictMode>
        <App initialEmail={initialEmail} />
      </StrictMode>,
    );
  } else {
    console.error(`Root element #${containerId} not found`);
  }
};

// 1. Check for standard extension popup (Icon Click)
if (document.getElementById("icon-root")) {
  mount("icon-root");
}

// 2. Check for initial injection (Content Script first load)
const injectedRoot = document.getElementById("clicksend-root");
if (injectedRoot) {
  // Use dataset if present
  mount("clicksend-root", injectedRoot.dataset.initialEmail);
}

// 3. Listen for re-mount requests (Content Script re-opens popup)
// Define CustomEvent interface for TypeScript if needed, or cast to any
interface MountEventDetail {
  email?: string;
  containerId: string;
}

window.addEventListener("CLICKSEND_SHOULD_MOUNT", (e: Event) => {
  const detail = (e as CustomEvent<MountEventDetail>).detail;
  console.log("Received CLICKSEND_SHOULD_MOUNT event", detail);
  mount(detail.containerId, detail.email);
});
