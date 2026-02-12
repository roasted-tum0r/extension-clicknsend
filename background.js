chrome.runtime.onInstalled.addListener(() => {
  // Parent Item
  chrome.contextMenus.create({
    id: "send-email-parent",
    title: "Use Open SesamE-mail",
    contexts: ["selection"]
  });

  // Child: Open Generator
  chrome.contextMenus.create({
    id: "send-email-open",
    parentId: "send-email-parent",
    title: "Open Generator",
    contexts: ["selection"]
  });

  // Child: Save Only
  chrome.contextMenus.create({
    id: "send-email-save",
    parentId: "send-email-parent",
    title: "Use email (Save for later)",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  const emailRegex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;

  if (!info.selectionText) return;
  const rawText = info.selectionText;
  const emailMatch = rawText.match(emailRegex);
  const email = emailMatch ? emailMatch[0] : "";

  if (email || rawText.length > 10) {
    // ALWAYS save to storage first
    if (email) {
      chrome.storage.local.set({ 'clicksend_last_recipient': [email] }, () => {
        console.log('Saved email to storage:', email);
      });
    }

    // Handle Actions
    if (info.menuItemId === "send-email-open") {
      // Open the popup
      chrome.tabs.sendMessage(tab.id, {
        type: "OPEN_REACT_POPUP",
        payload: { email, rawText }
      });
    } else if (info.menuItemId === "send-email-save") {
      // Just visually confirm? maybe a small notification if possible, or just console
      console.log("Email saved for later use.");
    }
  }
});
