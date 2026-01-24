import { useRef, useEffect, useState, useCallback } from "react";

interface TokenizedBlockEditorProps {
    value: string;
    tagValues: Record<string, string>;
    onChange: (newValue: string) => void;
    onTagClick?: (tagName: string) => void;
    label?: string;
    placeholder?: string;
}

/**
 * A highly interactive "Outlook-style" editor.
 * Tags are rendered as vibrant emerald green pills when filled.
 * Includes real-time autocomplete suggestions for existing tags.
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

    // Save/Restore caret position for seamless typing
    const getCaretData = () => {
        const selection = window.getSelection();
        if (!selection || selection.rangeCount === 0 || !editorRef.current) return null;

        const range = selection.getRangeAt(0);
        const preCaretRange = range.cloneRange();
        preCaretRange.selectNodeContents(editorRef.current);
        preCaretRange.setEnd(range.endContainer, range.endOffset);

        return preCaretRange.toString().length;
    };

    const setCaretPosition = (pos: number) => {
        if (!editorRef.current) return;
        const selection = window.getSelection();
        const range = document.createRange();

        let charCount = 0;
        let nodeStack: Node[] = [editorRef.current];
        let found = false;

        while (nodeStack.length > 0 && !found) {
            const node = nodeStack.pop()!;
            if (node.nodeType === Node.TEXT_NODE) {
                const nextCharCount = charCount + node.textContent!.length;
                if (pos <= nextCharCount) {
                    range.setStart(node, pos - charCount);
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

    // Helper to escape HTML
    const escapeHTML = (text: string) => {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    };

    // Parse raw template to HTML with pills
    const parseToHTML = useCallback((raw: string) => {
        if (!raw) return "";
        const tokenRegex = /({{[^}]+}})/g;
        return raw.split(tokenRegex).map(part => {
            if (part.startsWith('{{') && part.endsWith('}}')) {
                const tagName = part.slice(2, -2).trim();
                const tagValue = tagValues[tagName];
                const isFilled = !!tagValue;

                const displayValue = isFilled ? tagValue : part;
                // Use explicit Emerald colors for SUCCESS
                const pillClass = isFilled
                    ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/40 font-bold shadow-sm"
                    : "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-700/50 animate-pulse-soft";

                return `<span class="tag-token ${pillClass}" data-tag="${tagName}" contenteditable="false">${escapeHTML(displayValue)}</span>`;
            }
            return escapeHTML(part);
        }).join("");
    }, [tagValues]);

    // Value sync with Caret Preservation
    useEffect(() => {
        if (editorRef.current) {
            const currentHTML = editorRef.current.innerHTML;
            const targetHTML = parseToHTML(value);

            if (currentHTML !== targetHTML) {
                const pos = getCaretData();
                editorRef.current.innerHTML = targetHTML;
                if (isFocused && pos !== null) {
                    // Immediate restoration to avoid flickering
                    setCaretPosition(pos);
                }
            }
        }
    }, [value, parseToHTML, isFocused]);

    const handleInput = () => {
        if (editorRef.current) {
            const text = editorRef.current.innerText;
            if (text !== value) {
                onChange(text);
            }

            // Simple Autocomplete Logic
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
        }
    };

    const handleSuggestionClick = (tag: string) => {
        const selection = window.getSelection();
        if (selection && selection.rangeCount > 0 && editorRef.current) {
            const text = editorRef.current.innerText;
            const pos = getCaretData();

            if (pos !== null) {
                const preText = text.slice(0, pos);
                const lastBraces = preText.lastIndexOf("{{");
                const newText = text.slice(0, lastBraces) + `{{${tag}}}` + text.slice(pos);
                onChange(newText);
                setShowSuggestions(false);
                // We let the useEffect handle the re-render and caret sync
            }
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (label === "Subject" && e.key === "Enter") {
            e.preventDefault();
        }
        if (showSuggestions) {
            if (e.key === "Escape") {
                setShowSuggestions(false);
            }
        }
    };

    const handleClick = (e: React.MouseEvent) => {
        const target = e.target as HTMLElement;
        const tagSpan = target.closest('.tag-token');
        if (tagSpan) {
            const tagName = tagSpan.getAttribute('data-tag');
            if (tagName && onTagClick) {
                onTagClick(tagName);
                e.stopPropagation();
            }
        }
    };

    // Filter tags for the outside status tray
    const regex = /\{\{([^}]+)\}\}/g;
    const tagsInText = Array.from(new Set(value.match(regex) || []));

    return (
        <div className="mb-4">
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

            <div className="relative group">
                <div
                    ref={editorRef}
                    contentEditable
                    onInput={handleInput}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => {
                        // Allow button clicks to happen before hiding suggestions
                        setTimeout(() => {
                            setIsFocused(false);
                            setShowSuggestions(false);
                        }, 200);
                    }}
                    onKeyDown={handleKeyDown}
                    onClick={handleClick}
                    className="tokenized-editor custom-scrollbar cursor-text min-h-[120px]"
                    spellCheck={false}
                />

                {(!value || value === "\n") && !isFocused && (
                    <div className="absolute top-3 left-3 text-gray-400 pointer-events-none text-sm opacity-50">
                        {placeholder}
                    </div>
                )}

                {/* Autocomplete Popup */}
                {showSuggestions && (
                    <div className="absolute z-50 mt-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl overflow-hidden max-w-xs animate-in slide-in-from-bottom-1 duration-200">
                        <div className="p-2 border-b border-gray-100 dark:border-gray-800 text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                            Available Tags
                        </div>
                        <div className="max-h-48 overflow-y-auto custom-scrollbar">
                            {suggestions.map(tag => (
                                <button
                                    key={tag}
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
            </div>

            {/* Status Pills Tray */}
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
