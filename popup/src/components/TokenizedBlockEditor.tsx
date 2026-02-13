import { useRef, useEffect, useState, useCallback } from "react";

interface TokenizedBlockEditorProps {
    value: string;
    tagValues: Record<string, string>;
    onChange: (newValue: string) => void;
    onTagClick?: (tagName: string) => void;
    label?: string;
    placeholder?: string;
    isShadowRoot?: boolean;
}

/**
 * A highly interactive "Outlook-style" editor.
 * Uses structured DOM reconstruction to ensure template integrity.
 */
export default function TokenizedBlockEditor({
    value,
    tagValues,
    onChange,
    onTagClick,
    label,
    placeholder
}: TokenizedBlockEditorProps) {
    const editorRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [hasMounted, setHasMounted] = useState(false);

    // Save/Restore caret position for seamless typing
    const getCaretData = () => {
        const root = editorRef.current?.getRootNode() as ShadowRoot | Document;

        // Use active selection from the correct root
        const selection = (root instanceof ShadowRoot)
            ? (root as any).getSelection?.() || window.getSelection()
            : window.getSelection();

        if (!selection || selection.rangeCount === 0 || !editorRef.current) return null;

        const range = selection.getRangeAt(0);
        const preCaretRange = range.cloneRange();
        preCaretRange.selectNodeContents(editorRef.current);
        preCaretRange.setEnd(range.endContainer, range.endOffset);

        return preCaretRange.toString().length;
    };

    const setCaretPosition = (pos: number) => {
        if (!editorRef.current) return;
        const root = editorRef.current.getRootNode() as ShadowRoot | Document;
        const selection = (root instanceof ShadowRoot)
            ? (root as any).getSelection?.() || window.getSelection()
            : window.getSelection();

        const range = document.createRange();

        let charCount = 0;
        let nodeStack: Node[] = [editorRef.current];
        let found = false;

        while (nodeStack.length > 0 && !found) {
            const node = nodeStack.pop()!;
            if (node.nodeType === Node.TEXT_NODE) {
                const nextCharCount = charCount + node.textContent!.length;
                if (pos <= nextCharCount) {
                    range.setStart(node, Math.max(0, pos - charCount));
                    range.collapse(true);
                    found = true;
                }
                charCount = nextCharCount;
            } else {
                let i = node.childNodes.length;
                while (i--) {
                    nodeStack.push(node.childNodes[i]);
                }
            }
        }

        if (selection) {
            selection.removeAllRanges();
            selection.addRange(range);
        }
    };

    // Manual DOM synchronization to bypass TrustedHTML Sanitization
    const syncDOM = useCallback((raw: string) => {
        if (!editorRef.current) return;

        const container = editorRef.current;
        const normalized = raw.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
        const tokenRegex = /({{[^}]+}})/g;
        const parts = normalized.split(tokenRegex);

        const fragment = document.createDocumentFragment();

        parts.forEach(part => {
            if (part === "\n") {
                fragment.appendChild(document.createElement('br'));
                return;
            }
            if (!part) return;

            if (part.startsWith('{{') && part.endsWith('}}')) {
                const tagName = part.slice(2, -2).trim();
                const tagValuesRecord = tagValues as Record<string, string>;
                const tagValue = tagValuesRecord[tagName];
                const isFilled = !!tagValue;
                const displayValue = isFilled ? tagValue : part;

                const span = document.createElement('span');
                const pillClass = isFilled
                    ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/40 font-bold shadow-sm"
                    : "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-700/50 animate-pulse-soft";

                span.className = `open-sesame-anirban-tag-pill ${pillClass}`;
                span.setAttribute('data-raw-tag', part);
                span.setAttribute('data-tag-name', tagName);
                span.setAttribute('data-sesame-pill', 'true');
                span.setAttribute('contenteditable', 'false');
                span.textContent = displayValue;

                fragment.appendChild(span);
            } else {
                const textParts = part.split("\n");
                textParts.forEach((tp, i) => {
                    if (tp) fragment.appendChild(document.createTextNode(tp));
                    if (i < textParts.length - 1) fragment.appendChild(document.createElement('br'));
                });
            }
        });

        // Use replaceChildren to bypass innerHTML TrustedHTML policies
        container.replaceChildren(fragment);
    }, [tagValues]);

    // Value sync with Caret Preservation
    useEffect(() => {
        if (editorRef.current) {
            // Force critical styles that LinkedIn might try to override
            editorRef.current.style.setProperty('white-space', 'pre-wrap', 'important');
            editorRef.current.style.setProperty('-webkit-user-modify', 'read-write', 'important');

            const currentTemplate = reconstructTemplate();

            // Sync if value changed OR on mount OR if tagValues changed
            // We force sync on tagValues change because pills might need to update color/text
            if (value !== currentTemplate || !hasMounted || true) {
                const pos = getCaretData();
                syncDOM(value);
                // Restore caret if we were focused
                if (isFocused && pos !== null) {
                    setTimeout(() => setCaretPosition(pos), 2000);
                }
            }
            if (!hasMounted) setHasMounted(true);
        }
    }, [value, syncDOM, isFocused, hasMounted, tagValues]);

    // Reconstruct the template string from the DOM
    const reconstructTemplate = () => {
        if (!editorRef.current) return "";
        let result = "";

        const traverse = (node: Node) => {
            if (node.nodeType === Node.TEXT_NODE) {
                result += node.textContent;
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                const el = node as HTMLElement;
                if (el.getAttribute('data-sesame-pill') === 'true' || el.classList.contains('open-sesame-anirban-tag-pill')) {
                    result += el.getAttribute('data-raw-tag') || "";
                } else if (el.tagName === 'BR') {
                    result += "\n";
                } else if (el.tagName === 'DIV' || el.tagName === 'P') {
                    // Handle cases where browsers use divs or paragraphs for new lines
                    if (result.length > 0 && !result.endsWith("\n")) {
                        result += "\n";
                    }
                    Array.from(node.childNodes).forEach(traverse);
                } else {
                    Array.from(node.childNodes).forEach(traverse);
                }
            }
        };

        Array.from(editorRef.current.childNodes).forEach(traverse);
        return result;
    };

    const handleInput = () => {
        const template = reconstructTemplate();
        if (template !== value) {
            onChange(template);
        }

        // Autocomplete Logic
        const selection = window.getSelection();
        if (selection && selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            const preCaretText = range.startContainer.textContent?.slice(0, range.startOffset) || "";
            const lastBraces = preCaretText.lastIndexOf("{{");

            if (lastBraces !== -1 && !preCaretText.includes("}}", lastBraces)) {
                const query = preCaretText.slice(lastBraces + 2).toLowerCase();
                const allTags = Object.keys(tagValues);
                const filtered = allTags.filter(t => t.toLowerCase().includes(query));
                if (filtered.length > 0) {
                    setSuggestions(filtered);
                    setShowSuggestions(true);
                    return;
                }
            }
        }
        setShowSuggestions(false);
    };

    const handleSuggestionClick = (tag: string) => {
        const text = reconstructTemplate();
        const pos = getCaretData();

        if (pos !== null) {
            const preText = text.slice(0, pos);
            const lastBraces = preText.lastIndexOf("{{");
            const newText = text.slice(0, lastBraces) + `{{${tag}}}` + text.slice(pos);
            onChange(newText);
            setShowSuggestions(false);

            // Re-render and restore caret
            setTimeout(() => {
                if (editorRef.current) {
                    syncDOM(newText);
                    setCaretPosition(lastBraces + tag.length + 4); // +4 for {{ and }}
                }
            }, 0);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            if (label === "Subject") {
                e.preventDefault();
            } else {
                // Manually handle enter to ensure consistency
                document.execCommand('insertLineBreak');
                e.preventDefault();
                handleInput();
            }
        }

        if (showSuggestions && e.key === "Escape") {
            setShowSuggestions(false);
        }
    };

    const handleClick = (e: React.MouseEvent) => {
        const target = e.target as HTMLElement;
        const tagSpan = target.closest('[data-sesame-pill="true"]');
        if (tagSpan) {
            const tagName = tagSpan.getAttribute('data-tag-name');
            if (tagName && onTagClick) {
                onTagClick(tagName);
                e.preventDefault();
                e.stopPropagation();
            }
        }
    };

    const regex = /\{\{([^}]+)\}\}/g;
    const tagsInText = Array.from(new Set(value.match(regex) || []));

    return (
        <div className="open-sesame-samaddar-editor-container relative mb-4">
            {label && (
                <div className="flex items-center justify-between mb-1.5 px-0.5">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        {label}
                    </label>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                        Smart Editor
                    </span>
                </div>
            )}

            <div
                ref={editorRef}
                contentEditable
                onInput={handleInput}
                onFocus={() => setIsFocused(true)}
                onBlur={() => {
                    setTimeout(() => {
                        setIsFocused(false);
                        setShowSuggestions(false);
                    }, 500); // Small delay to allow click on suggestion
                }}
                onKeyDown={handleKeyDown}
                onClick={handleClick}
                className="
                    open-sesame-ultimate-editor-area open-sesame-smooth-magic-scrollbar cursor-text min-h-[140px] 
                    p-3 bg-white dark:bg-gray-800/10 border border-gray-200 dark:border-gray-700/50 
                    rounded-2xl transition-all text-sm leading-relaxed
                    focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:focus:ring-blue-500/20
                "
                spellCheck={false}
            />

            {(!value || value === "\n") && !isFocused && (
                <div className="absolute top-10 left-3 text-gray-400 pointer-events-none text-sm opacity-50">
                    {placeholder}
                </div>
            )}

            {showSuggestions && (
                <div className="open-sesame-suggestions-dropdown-anirban absolute z-[9999] mt-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl overflow-hidden max-w-xs transition-all">
                    <div className="p-2 border-b border-gray-100 dark:border-gray-800 text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                        Existing Tags
                    </div>
                    <div className="max-h-48 overflow-y-auto open-sesame-smooth-magic-scrollbar">
                        {suggestions.map(tag => (
                            <button
                                key={tag}
                                type="button"
                                onMouseDown={(e) => e.stopPropagation()} // Prevent blur before click
                                onClick={() => handleSuggestionClick(tag)}
                                className="w-full text-left px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center justify-between group"
                            >
                                <span>{`{{${tag}}}`}</span>
                                <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity font-bold text-blue-500">Insert ⏎</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {tagsInText.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                    {tagsInText.map((tagWithBraces, i) => {
                        const tagName = tagWithBraces.replace(/\{\{|\}\}/g, "").trim();
                        const tagValue = tagValues[tagName];
                        const isFilled = !!tagValue;

                        return (
                            <button
                                key={i}
                                type="button"
                                onClick={() => onTagClick?.(tagName)}
                                className={`
                                    flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all
                                    ${isFilled
                                        ? "bg-emerald-100/30 dark:bg-emerald-600/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shadow-sm"
                                        : "bg-amber-100/30 dark:bg-amber-900/20 text-amber-600 dark:text-amber-500 border border-amber-200/50 dark:border-amber-700/50 animate-pulse-soft"
                                    }
                                    hover:scale-105 active:scale-95 hover:shadow-md
                                `}
                            >
                                <span className="opacity-60">{tagName}:</span>
                                <span className="truncate max-w-[120px]">{isFilled ? tagValue : "REQUIRED"}</span>
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
