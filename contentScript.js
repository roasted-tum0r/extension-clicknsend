let lastRightClick = { x: 0, y: 0 };
console.log("CS: Content Script v6 (Re-mount Stabilized) Loaded");

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

  // Check if host already exists
  const existingHost = document.getElementById("clicksend-host");
  if (existingHost) {
    console.warn("ClickSend host already exists, removing old one to re-mount cleanest way");
    existingHost.remove();
  }

  // Create host container
  const host = document.createElement("div");
  host.id = "clicksend-host";

  // Attach shadow root
  const shadow = host.attachShadow({ mode: "open" });

  // Root container (inside shadow)
  const rootDiv = document.createElement("div");
  rootDiv.id = "clicksend-root";
  rootDiv.dataset.initialEmail = email; // Backup
  shadow.appendChild(rootDiv);

  const OFFSET = 8;
  host.style.position = "fixed";

  // Position logic
  const rect = { width: 400, height: 600 }; // Estimate or use defaults
  let x = lastRightClick.x + OFFSET;
  let y = lastRightClick.y + OFFSET;

  // Simple bounds check
  if (x + 400 > window.innerWidth) x = window.innerWidth - 400 - OFFSET;
  if (y + 600 > window.innerHeight) y = window.innerHeight - 600 - OFFSET;

  const INITIAL_WIDTH = 420;
  const INITIAL_HEIGHT = 600;

  host.style.width = `${INITIAL_WIDTH}px`;
  host.style.height = `${INITIAL_HEIGHT}px`;
  host.style.top = `${y}px`;
  host.style.left = `${x}px`;
  host.style.zIndex = "2147483647"; // Max z-index
  host.style.overflow = "hidden"; // Clip content during resize
  host.style.borderRadius = "14px";
  host.style.boxShadow = "none"; // Shadow is on the rootDiv

  document.body.appendChild(host);

  // Inject a basic reset into shadow root to ensure layout parity
  const style = document.createElement("style");
  style.textContent = `
    * { box-sizing: border-box; }
    :host { 
      all: initial; 
      display: block; 
      font-family: 'Inter', system-ui, -apple-system, sans-serif !important; 
    }
    #clicksend-root {
      font-family: inherit;
      color-scheme: dark !important;
      isolation: isolate;
    }
    .clicksend-resizer {
  width: 20px; /* Increased size for easier grab */
  height: 20px;
  background: transparent; /* Change to 'red' to test hit area */
  position: absolute;
  right: 0;
  bottom: 0;
  cursor: nwse-resize;
  z-index: 2147483647;
}
    .clicksend-resizer::after {
      content: "";
      position: absolute;
      right: 3px;
      bottom: 3px;
      width: 5px;
      height: 5px;
      border-right: 2px solid rgba(156, 163, 175, 0.4);
      border-bottom: 2px solid rgba(156, 163, 175, 0.4);
    }
  `;
  shadow.appendChild(style);
  // Add Resizer
  const resizer = document.createElement("div");
  resizer.className = "clicksend-resizer";
  shadow.appendChild(resizer);


  // Load CSS into shadow root
  const cssUrl = chrome.runtime.getURL("dist/popup/index.12345678.css");
  const link = document.createElement("link");
  link.id = "clicksend-css";
  link.rel = "stylesheet";
  link.href = cssUrl;
  shadow.appendChild(link);

  // Dispatch Mount Event (Main.tsx will listen for this)
  // We avoid passing the whole 'shadowRoot' in detail to prevent potential serialization issues
  const mountEvent = new CustomEvent("CLICKSEND_SHOULD_MOUNT", {
    detail: { email, containerId: "clicksend-root" }
  });
  window.dispatchEvent(mountEvent);

  // Inject Script if not marked as loaded (Injecting into document body as it's a module)
  if (!document.getElementById("clicksend-js")) {
    const script = document.createElement("script");
    script.id = "clicksend-js";
    script.src = chrome.runtime.getURL("dist/popup/index.12345678.js");
    script.type = "module";
    script.onload = () => {
      console.log("React bundle loaded fresh");
    };
    document.body.appendChild(script);
  } else {
    console.log("React bundle already loaded, dispatched mount event");
  }

  setupOutsideClickClose(host, rootDiv);
  setupDraggable(host, shadow);
  setupResizable(host, shadow);
}

function setupResizable(host, shadow) {
  const resizer = shadow.querySelector(".clicksend-resizer");
  if (!resizer) return;

  resizer.addEventListener("mousedown", (e) => {
    // 1. Stop the event from bubbling up to the Draggable listener
    e.stopPropagation();
    e.preventDefault();

    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = parseInt(document.defaultView.getComputedStyle(host).width, 10);
    const startHeight = parseInt(document.defaultView.getComputedStyle(host).height, 10);

    document.body.style.userSelect = "none";
    document.body.style.cursor = "nwse-resize";

    const onMouseMove = (moveEvent) => {
      const dw = moveEvent.clientX - startX;
      const dh = moveEvent.clientY - startY;

      const newWidth = Math.max(300, startWidth + dw);
      const newHeight = Math.max(400, startHeight + dh);

      host.style.width = `${newWidth}px`;
      host.style.height = `${newHeight}px`;

      // Ensure the internal root fills the new host size
      const rootDiv = shadow.getElementById("clicksend-root");
      if (rootDiv) {
        rootDiv.style.width = '100%';
        rootDiv.style.height = '100%';
      }
    };

    const onMouseUp = () => {
      document.body.style.userSelect = "";
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  });
}

function setupDraggable(host, shadow) {
  console.log("Drag: setupDraggable initialized v6");
  let isDragging = false;
  let startX, startY, initialX, initialY;
  let dragController = null;

  shadow.addEventListener("mousedown", (e) => {
    const path = e.composedPath();
    const handle = path.find(el => el.id === "clicksend-header");
    const isButton = path.some(el => ["BUTTON", "INPUT", "SELECT", "A"].includes(el.tagName));

    if (handle && !isButton) {
      console.log("Drag: mousedown on handle detected");
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;

      const rect = host.getBoundingClientRect();
      initialX = rect.left;
      initialY = rect.top;

      document.body.style.userSelect = "none";
      e.preventDefault();

      // Setup window listeners with AbortController for easy cleanup
      dragController = new AbortController();
      const { signal } = dragController;

      window.addEventListener("mousemove", (e) => {
        if (!isDragging) return;

        const dx = e.clientX - startX;
        const dy = e.clientY - startY;

        let newX = initialX + dx;
        let newY = initialY + dy;

        // Boundary checks
        newX = Math.max(0, Math.min(newX, window.innerWidth - host.offsetWidth));
        newY = Math.max(0, Math.min(newY, window.innerHeight - host.offsetHeight));

        host.style.left = `${newX}px`;
        host.style.top = `${newY}px`;
      }, { signal, passive: false });

      window.addEventListener("mouseup", () => {
        if (isDragging) {
          console.log("Drag: mouseup detected, stopping");
          isDragging = false;
          document.body.style.userSelect = "";
          if (dragController) {
            dragController.abort();
            dragController = null;
          }
        }
      }, { signal });
    }
  }, { capture: true });
}

function setupOutsideClickClose(host, rootDiv) {
  // Delay attachment slightly to avoid capturing the initial right-click/opening event
  requestAnimationFrame(() => {
    function handleClick(e) {
      // For shadow DOM, e.target is the host element. We need to check the composedPath or use a different check.
      // If the click target is NOT inside the host, close it.
      if (host && !host.contains(e.target)) {
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
      if (host) {
        // Dispatch Unmount Event before removal
        console.log("CS: Dispatching CLICKSEND_SHOULD_UNMOUNT");
        window.dispatchEvent(new CustomEvent("CLICKSEND_SHOULD_UNMOUNT"));

        // Brief delay to allow React to start unmounting if needed, 
        // though CustomEvent is synchronous by default.
        host.remove();
      }
      // Cleanup listeners
      document.removeEventListener("mousedown", handleClick, true); // Capture phase
      document.removeEventListener("keydown", handleEsc, true);
      window.removeEventListener("CLICKSEND_REQ_CLOSE", handleCloseRequest);
      window.removeEventListener("resize", closePopup);
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
