chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "send-email",
    title: "Send Email with Click Send Em Bot",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  const emailRegex =
    /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;

  if (emailRegex.test(info.selectionText || "")) {
    chrome.storage.local.set({
      selectedEmail: info.selectionText.trim()
    });
    chrome.action.openPopup();
  }
});