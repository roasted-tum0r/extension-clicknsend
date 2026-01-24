/**
 * Helper functions for persistent storage of tag values using chrome.storage.sync.
 */

const STORAGE_KEY = "clicksend_tag_values";

/**
 * Fetches all stored tag values from chrome.storage.sync.
 * Falls back to localStorage if chrome.storage is unavailable.
 */
export async function getStoredTags(): Promise<Record<string, string>> {
    if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.sync) {
        return new Promise((resolve) => {
            chrome.storage.sync.get([STORAGE_KEY], (result) => {
                const val = result[STORAGE_KEY];
                resolve((val && typeof val === 'object' ? val : {}) as Record<string, string>);
            });
        });
    }

    const local = localStorage.getItem(STORAGE_KEY);
    return local ? JSON.parse(local) : ({} as Record<string, string>);
}

/**
 * Merges and saves tag values to chrome.storage.sync.
 * Also syncs to localStorage for fallback.
 */
export async function setStoredTags(newTags: Record<string, string>): Promise<void> {
    const existing = await getStoredTags();
    const merged = { ...existing, ...newTags };

    if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.sync) {
        await chrome.storage.sync.set({ [STORAGE_KEY]: merged });
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
}
