import { useRef } from "react";
import TagHighlighter from "./TagHighlighter";
import { TAG_REGEX } from "../features/mail-composer/tag-utils";

interface TokenEditorProps {
    value: string;
    tagValues: Record<string, string>;
    onChange: (newValue: string) => void;
    onTagClick?: (tagName: string) => void;
    label?: string;
    rows?: number;
    placeholder?: string;
}

/**
 * A specialized editor that overlays interactive highlights behind a transparent textarea.
 * Perfect font synchronization prevents "ghosting" while allowing clickable inline tags.
 */
export default function TokenEditor({
    value,
    tagValues,
    onChange,
    onTagClick,
    label,
    rows = 4,
    placeholder
}: TokenEditorProps) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const tagsInText = Array.from(new Set(value.match(TAG_REGEX) || []));

    return (
        <div className="mb-4">
            {label && (
                <div className="flex items-center justify-between mb-1.5 px-0.5">
                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        {label}
                    </label>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                        Inline Editor
                    </span>
                </div>
            )}

            {/* Master Grid Stack */}
            <div className="editor-master-container group border border-gray-300 dark:border-gray-700 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-blue-500/50 bg-white dark:bg-gray-800/30 transition-shadow shadow-sm focus-within:shadow-md">

                {/* 1. Behind: The Highlighter Overlay */}
                <TagHighlighter
                    text={value}
                    onTagClick={onTagClick}
                    syncScrollRef={textareaRef}
                />

                {/* 2. Above: The Standard Textarea (Transparent) */}
                <textarea
                    ref={textareaRef}
                    rows={rows}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    className="editor-shared-styles editor-textarea custom-scrollbar placeholder-gray-400 dark:placeholder-gray-600"
                />
            </div>

            {/* Bottom Status Tray - Quick Actions */}
            {tagsInText.length > 0 && (
                <div className="mt-2.5 flex flex-wrap gap-1.5">
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
                                    flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all
                                    ${isFilled
                                        ? "bg-green-100/50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800/30"
                                        : "bg-amber-100/50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-700/50 animate-pulse-soft"
                                    }
                                    hover:scale-105 active:scale-95
                                `}
                            >
                                <span className="opacity-60">{tagName}:</span>
                                <span className="truncate max-w-[100px]">{isFilled ? tagValue : "???"}</span>
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
