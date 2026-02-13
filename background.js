chrome.runtime.onInstalled.addListener(() => {
  // Parent Item
  chrome.contextMenus.create({
    id: "send-email-parent",
    title: "Use Open SesamE-mail",
    contexts: ["selection", "link"],
    targetUrlPatterns: ["mailto:*"]
  });

  // Child: Open Generator
  chrome.contextMenus.create({
    id: "send-email-open",
    parentId: "send-email-parent",
    title: "Open Generator",
    contexts: ["selection", "link"],
    targetUrlPatterns: ["mailto:*"]
  });

  // Child: Save Only
  chrome.contextMenus.create({
    id: "send-email-save",
    parentId: "send-email-parent",
    title: "Use email (Save for later)",
    contexts: ["selection", "link"],
    targetUrlPatterns: ["mailto:*"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  const emailRegex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;

  let email = "";
  let rawText = info.selectionText || "";

  // Handle mailto: links
  if (info.linkUrl && info.linkUrl.startsWith("mailto:")) {
    // Extract everything after mailto: up to the first ?
    const mailtoContent = info.linkUrl.slice(7).split("?")[0];
    const emailMatch = mailtoContent.match(emailRegex);
    if (emailMatch) email = emailMatch[0];
  } else if (rawText) {
    const emailMatch = rawText.match(emailRegex);
    if (emailMatch) email = emailMatch[0];
  }

  if (email || rawText.length > 5) {
    // ALWAYS save to storage first
    if (email) {
      chrome.storage.local.set({ 'clicksend_last_recipient': [email] }, () => {
        console.log('Saved email to storage:', email);
      });
    }

    // Handle Actions
    if (info.menuItemId === "send-email-open") {
      chrome.tabs.sendMessage(tab.id, {
        type: "OPEN_REACT_POPUP",
        payload: { email, rawText }
      });
    } else if (info.menuItemId === "send-email-save") {
      console.log("Email saved for later use.");
    }
  }
});
