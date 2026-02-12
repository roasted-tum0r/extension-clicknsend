import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

let currentRoot: any = null;

const mount = (containerId: string, initialEmail?: string, shadowRoot?: ShadowRoot, rawText?: string) => {
  const rootElement = shadowRoot
    ? shadowRoot.getElementById(containerId)
    : document.getElementById(containerId);

  if (!rootElement) {
    console.error("Mount: rootElement not found", containerId);
    return;
  }

  if (currentRoot) {
    console.log("Mount: Unmounting previous root");
    currentRoot.unmount();
    currentRoot = null;
  }

  console.log("Mount: Creating new root for", containerId);
  currentRoot = createRoot(rootElement);
  currentRoot.render(
    <StrictMode>
      <App initialEmail={initialEmail} rawText={rawText} />
    </StrictMode>,
  );
};

const unmount = () => {
  if (currentRoot) {
    console.log("Unmount: Tearing down React root");
    currentRoot.unmount();
    currentRoot = null;
  }
};

// 1. Check for standard extension popup (Icon Click)
if (document.getElementById("icon-root")) {
  mount("icon-root");
}

// 2. Check for initial injection (Content Script first load)
const host = document.getElementById("clicksend-host");
if (host && host.shadowRoot) {
  const injectedRoot = host.shadowRoot.getElementById("clicksend-root") as HTMLElement;
  if (injectedRoot) {
    mount("clicksend-root", injectedRoot.dataset.initialEmail, host.shadowRoot);
  }
}

// 3. Lifecycle Listeners
interface MountEventDetail {
  email?: string;
  containerId: string;
  shadowRoot?: ShadowRoot;
}

window.addEventListener("CLICKSEND_SHOULD_MOUNT", (e: Event) => {
  const customEvent = e as CustomEvent<MountEventDetail>;
  const detail = customEvent.detail;

  console.log("Received CLICKSEND_SHOULD_MOUNT event", detail);

  const containerId = detail?.containerId || "clicksend-root";
  const email = detail?.email;
  const rawText = (detail as any)?.rawText;

  // Fallback for shadowRoot if detail is null or missing it
  let shadowRoot = detail?.shadowRoot;
  if (!shadowRoot) {
    const host = document.getElementById("clicksend-host");
    if (host && host.shadowRoot) {
      shadowRoot = host.shadowRoot;
      console.log("Mount: Found shadowRoot via fallback");
    }
  }

  mount(containerId, email, shadowRoot, rawText);
});

window.addEventListener("CLICKSEND_SHOULD_UNMOUNT", () => {
  console.log("Received CLICKSEND_SHOULD_UNMOUNT event");
  unmount();
});
