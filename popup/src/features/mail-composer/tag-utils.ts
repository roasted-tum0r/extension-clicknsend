/**
 * Utility functions for handling {{tag}} placeholders in templates.
 */

/**
 * Regex to match tags like {{tag_name}} or {{Ticket ID}}.
 * Matches everything between {{ and }} non-greedily.
 */
export const TAG_REGEX = /\{\{([^}]+)\}\}/g;

/**
 * Extracts all unique tag names from a string.
 * Returns an array of tag names (without the braces).
 */
export function extractTags(text: string): string[] {
    const matches = text.matchAll(TAG_REGEX);
    const tags = new Set<string>();
    for (const match of matches) {
        tags.add(match[1].trim());
    }
    return Array.from(tags);
}

/**
 * Replaces tags in a string with values from a provided record.
 * If a tag is not in the record, it remains as {{tag}}.
 */
export function replaceTags(text: string, values: Record<string, string>): string {
    return text.replace(TAG_REGEX, (match, tagName) => {
        const trimmedTag = tagName.trim();
        return values[trimmedTag] !== undefined ? values[trimmedTag] : match;
    });
}

/**
 * Checks if a string contains any unfilled {{tag}} placeholders.
 */
export function hasUnfilledTags(text: string): boolean {
    return TAG_REGEX.test(text);
}

export type Token = { type: 'text'; value: string } | { type: 'tag'; name: string };

/**
 * Splits a template string into tokens of text and tags.
 * Ensures whitespace and formatting are preserved by using a split that includes delimiters.
 */
export function tokenize(text: string): Token[] {
    if (!text) return [];

    // The () in the regex means the split will include the captured tag parts
    // We use a modified regex to capture the whole {{tag}} for easier identification
    const tokenRegex = /({{[^}]+}})/g;
    const parts = text.split(tokenRegex);

    return parts.map((part): Token => {
        if (part.startsWith('{{') && part.endsWith('}}')) {
            const tagName = part.slice(2, -2).trim();
            return { type: 'tag', name: tagName };
        }
        return { type: 'text', value: part };
    }).filter(t => t.type === 'tag' || t.value !== '');
}
