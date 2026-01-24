import { tokenize } from "../features/mail-composer/tag-utils";

interface SegmentedEditorProps {
    value: string;
    tagValues: Record<string, string>;
    onChange: (newValue: string) => void;
    onTagClick?: (tagName: string) => void;
    label?: string;
    placeholder?: string;
}

/**
 * A rock-solid "Segmented" editor.
 * Instead of contenteditable, it uses an array of stable textareas and pills.
 * Alignment is guaranteed by standard flex/flow layout.
 */
export default function SegmentedEditor({
    value,
    tagValues,
    onChange,
    onTagClick,
    label,
    placeholder
}: SegmentedEditorProps) {


    // Tokenize the full value to get structured parts
    const tokens = tokenize(value);

    const updatePart = (index: number, newText: string) => {
        // Reconstruct the value from tokens, replacing the text at 'index'
        const newValue = tokens.map((t, i) => {
            if (i === index) return newText;
            return t.type === 'tag' ? `{{${t.name}}}` : t.value;
        }).join('');
        onChange(newValue);
    };

    const removeTag = (index: number) => {
        const newValue = tokens.filter((_, i) => i !== index)
            .map(t => t.type === 'tag' ? `{{${t.name}}}` : t.value)
            .join('');
        onChange(newValue);
    };

    return (
        <div className="mb-6">
            {label && (
                <div className="flex items-center justify-between mb-2 px-1">
                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-tight">
                        {label}
                    </label>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5 bg-gray-100 dark:bg-gray-800/50 px-2 py-0.5 rounded-full">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        Segmented Editor
                    </span>
                </div>
            )}

            <div className="
                flex flex-wrap items-center gap-y-1.5 p-3 min-h-[140px]
                bg-white dark:bg-gray-800/20 border border-gray-200 dark:border-gray-700/50 
                rounded-2xl shadow-sm focus-within:ring-2 focus-within:ring-blue-500/30 
                transition-all cursor-text text-sm leading-relaxed
            ">
                {tokens.length === 0 && (
                    <div className="relative w-full h-full text-gray-400 italic pointer-events-none px-1">
                        {placeholder}
                    </div>
                )}
                {tokens.map((token, i) => (
                    <div key={i} className="inline-flex items-baseline flex-wrap">
                        {token.type === 'text' ? (
                            <div className="relative inline-block min-w-[10px] max-w-full">
                                <span className="invisible whitespace-pre-wrap px-1 py-0.5 text-sm leading-relaxed block min-h-[1.5em]">
                                    {token.value || " "}{token.value.endsWith('\n') ? ' ' : ''}
                                </span>
                                <textarea
                                    value={token.value}
                                    onChange={(e) => updatePart(i, e.target.value)}
                                    className="
                                        absolute inset-0 w-full h-full bg-transparent resize-none overflow-hidden 
                                        outline-none border-none p-0 px-1 py-0.5 m-0 text-gray-800 dark:text-gray-100
                                        text-sm leading-relaxed
                                    "
                                    rows={1}
                                />
                            </div>
                        ) : (
                            <div className="inline-flex items-center group relative mx-0.5 translate-y-[-1px]">
                                {(() => {
                                    const tagName = token.name;
                                    const tagValue = tagValues[tagName];
                                    const isFilled = !!tagValue;

                                    return (
                                        <button
                                            type="button"
                                            onClick={() => onTagClick?.(tagName)}
                                            className={`
                                                relative flex items-center gap-1.5 px-2 py-0.5 rounded-lg text-[10px] font-bold transition-all
                                                border shadow-sm hover:scale-105 active:scale-95
                                                ${isFilled
                                                    ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30"
                                                    : "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-700/50 animate-pulse-soft"
                                                }
                                            `}
                                        >
                                            <span className="opacity-60 text-[8px]">{"{{"}</span>
                                            {isFilled ? tagValue : tagName}
                                            <span className="opacity-60 text-[8px]">{"}}"}</span>
                                        </button>
                                    );
                                })()}

                                {/* Quick Delete on Hover */}
                                <button
                                    onClick={() => removeTag(i)}
                                    className="
                                        absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-red-500 text-white rounded-full 
                                        opacity-0 group-hover:opacity-100 scale-75 transition-all flex items-center justify-center
                                        hover:scale-100 shadow-md z-10
                                    "
                                    title="Remove Tag"
                                >
                                    <svg className="w-2 h-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Hint for adding tags */}
            <div className="mt-2.5 px-1 flex items-center justify-between">
                <p className="text-[10px] text-gray-500 font-medium">
                    Type <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">{"{{"}tag_name{"}}"}</code> to add a dynamic field
                </p>
                {tokens.filter(t => t.type === 'tag').length > 0 && (
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                        {tokens.filter(t => t.type === 'tag').length} {tokens.filter(t => t.type === 'tag').length === 1 ? 'tag' : 'tags'} active
                    </span>
                )}
            </div>
        </div>
    );
}
