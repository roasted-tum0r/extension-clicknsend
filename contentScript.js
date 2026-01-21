let lastRightClick = { x: 0, y: 0 };

document.addEventListener("contextmenu", (e) => {
  lastRightClick = {
    x: e.clientX,
    y: e.clientY,
  };
  console.log("CS: Right click at:", lastRightClick);
});
chrome.runtime.onMessage.addListener((message) => {
  console.log("Message received in content script:", message);

  if (message.type === "OPEN_REACT_POPUP") {
    injectReactPopup(message.payload.email);
  }
});

function injectReactPopup(email) {
  console.log("CS: injectReactPopup called with:", email);

  // Check if root already exists
  const existingRoot = document.getElementById("clicksend-root");
  if (existingRoot) {
    console.warn("ClickSend root already exists, removing old one to re-mount cleanest way");
    existingRoot.remove();
  }

  // Check if we need to dispatch event instead of simple script injection?
  // Actually, since we are re-creating the root, we need to tell the React app to mount onto THIS new root.
  // The React bundle is likely already executed and defining its listeners or it ran once and finished.
  // If it's an IIFE/module that runs 'createRoot' immediately, it won't run again unless re-imported (hard to force) or if we exposed a function.
  // Current main.tsx runs top-level code.

  // Strategy: 
  // 1. Create root div.
  // 2. Dispatch custom event "CLICKSEND_SHOULD_MOUNT" with detail { email, containerId: 'clicksend-root' }.
  // 3. IF the script hasn't been loaded yet, we inject it. 
  //    IF it HAS, the event listener in main.tsx (which we will add) will pick it up.

  // Root container
  const rootDiv = document.createElement("div");
  rootDiv.id = "clicksend-root";
  rootDiv.dataset.initialEmail = email; // Backup

  const OFFSET = 8;
  rootDiv.style.position = "fixed";

  // Position logic
  const rect = { width: 400, height: 600 }; // Estimate or use defaults
  // Better to let CSS handle size, but positioning needs JS
  let x = lastRightClick.x + OFFSET;
  let y = lastRightClick.y + OFFSET;

  // Simple bounds check (using window since rect of unmounted div is 0)
  if (x + 400 > window.innerWidth) x = window.innerWidth - 400 - OFFSET;
  if (y + 600 > window.innerHeight) y = window.innerHeight - 600 - OFFSET;

  rootDiv.style.top = `${y}px`;
  rootDiv.style.left = `${x}px`;
  rootDiv.style.zIndex = "2147483647"; // Max z-index
  // rootDiv.style.overflow = "auto";
  document.body.appendChild(rootDiv);

  // Load CSS if not present
  if (!document.getElementById("clicksend-css")) {
    const link = document.createElement("link");
    link.id = "clicksend-css";
    link.rel = "stylesheet";
    link.href = chrome.runtime.getURL("dist/popup/index.css");
    document.head.appendChild(link);
  }

  // Dispatch Mount Event (Main.tsx will listen for this)
  const mountEvent = new CustomEvent("CLICKSEND_SHOULD_MOUNT", {
    detail: { email, containerId: "clicksend-root" }
  });
  window.dispatchEvent(mountEvent);

  // Inject Script if not marked as loaded
  if (!document.getElementById("clicksend-js")) {
    const script = document.createElement("script");
    script.id = "clicksend-js";
    // Use standard script src to execute it
    script.src = chrome.runtime.getURL("dist/popup/index.js");
    script.type = "module";
    script.onload = () => {
      console.log("React bundle loaded fresh");
      // The script itself will execute main.tsx logic
    };
    document.body.appendChild(script);
  } else {
    console.log("React bundle already loaded, dispatched mount event");
  }

  setupOutsideClickClose(rootDiv);
}

function setupOutsideClickClose(rootDiv) {
  // Delay attachment slightly to avoid capturing the initial right-click/opening event
  requestAnimationFrame(() => {
    function handleClick(e) {
      // If the click target is NOT inside the rootDiv, close it.
      if (rootDiv && !rootDiv.contains(e.target)) {
        console.log("Click outside detected, removing popup");
        closePopup();
      }
    }

    function handleEsc(e) {
      if (e.key === "Escape") {
        console.log("ESC detected, removing popup");
        closePopup();
      }
    }

    function closePopup() {
      if (rootDiv) {
        rootDiv.remove();
      }
      // Cleanup listeners
      document.removeEventListener("mousedown", handleClick, true); // Capture phase
      document.removeEventListener("keydown", handleEsc, true);
      window.removeEventListener("CLICKSEND_REQ_CLOSE", handleCloseRequest);
      window.removeEventListener("scroll", closePopup, true); // Optional: close on scroll
    }


    function handleCloseRequest() {
      console.log("Close request received from App, closing popup");
      closePopup();
    }

    // Use capture phase for mousedown to catch it before other handlers potentially stop it
    document.addEventListener("mousedown", handleClick, true);
    document.addEventListener("keydown", handleEsc, true);
    window.addEventListener("CLICKSEND_REQ_CLOSE", handleCloseRequest);

    // Also close on window resize to avoid placement issues
    window.addEventListener("resize", closePopup, { once: true });
  });
}
