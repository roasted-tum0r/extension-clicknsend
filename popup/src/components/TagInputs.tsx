import { useState, useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import { Input } from "./Input";

interface TagInputsProps {
    tags: string[];
    values: Record<string, string>;
    onChange: (tag: string, value: string) => void;
}

export interface TagInputsHandle {
    focusTag: (tag: string) => void;
}

const TagInputs = forwardRef<TagInputsHandle, TagInputsProps>(({ tags, values, onChange }, ref) => {
    const [isFilledOpen, setIsFilledOpen] = useState(false);
    const [committedTags, setCommittedTags] = useState<Set<string>>(new Set());
    const [focusedTag, setFocusedTag] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRefs = useRef<Record<string, HTMLInputElement | null>>({});

    // If a tag is already filled when we first see it (e.g. from storage), mark it as committed
    useEffect(() => {
        setCommittedTags(prev => {
            const next = new Set(prev);
            tags.forEach(t => {
                if (values[t] && t !== focusedTag) next.add(t);
            });
            return next;
        });
    }, [tags, values, focusedTag]);

    const handleFocus = (tag: string) => {
        setFocusedTag(tag);
        // If it's already committed, ensure the filled section is open
        if (committedTags.has(tag)) {
            setIsFilledOpen(true);
        }
    };

    const handleBlur = (tag: string) => {
        setFocusedTag(null);
        if (values[tag]) {
            setCommittedTags(prev => new Set(prev).add(tag));
        }
    };

    // Use only committedTags for the split, ignore focusedTag to prevent jumping
    const unfilledTags = tags.filter(t => !committedTags.has(t));
    const filledTags = tags.filter(t => committedTags.has(t));

    useImperativeHandle(ref, () => ({
        focusTag: (tag: string) => {
            if (committedTags.has(tag)) {
                setIsFilledOpen(true);
            }
            setTimeout(() => {
                const el = inputRefs.current[tag];
                if (el) {
                    el.focus();
                    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 100);
        }
    }));

    if (tags.length === 0) return null;

    return (
        <div ref={containerRef} className="flex flex-col gap-4 mb-6">
            {/* UNFILLED / ACTIVE TAGS SECTION */}
            {unfilledTags.length > 0 && (
                <div className="bg-white dark:bg-gray-800/50 rounded-2xl border border-amber-200/50 dark:border-amber-700/30 overflow-hidden shadow-sm transition-all focus-within:ring-2 focus-within:ring-amber-500/20">
                    <div className="p-4 border-b border-gray-100 dark:border-gray-700/30 bg-amber-50/30 dark:bg-amber-900/10 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                            <span className="text-amber-500 animate-pulse">✨</span>
                            <h3 className="text-xs font-bold text-gray-900 dark:text-gray-100 uppercase tracking-widest">
                                Required Personalization
                            </h3>
                        </div>
                        <span className="text-[10px] bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 px-2 py-0.5 rounded-full font-bold uppercase">
                            {unfilledTags.filter(t => !values[t]).length} Missing
                        </span>
                    </div>
                    <div className="p-4 space-y-4">
                        {unfilledTags.map((tag) => {
                            const isFilled = !!values[tag];
                            return (
                                <div key={tag} className="relative">
                                    <Input
                                        label={tag.replace(/_/g, " ")}
                                        value={values[tag] || ""}
                                        onChange={(val) => onChange(tag, val)}
                                        onFocus={() => handleFocus(tag)}
                                        onBlur={() => handleBlur(tag)}
                                        placeholder={`Enter ${tag.toLowerCase()}...`}
                                        inputRef={(el) => (inputRefs.current[tag] = el)}
                                        className={`transition-colors ${isFilled ? "bg-emerald-50/5 dark:bg-emerald-900/5 border-emerald-500/10" : "bg-amber-50/5 dark:bg-amber-900/5 border-amber-200/20"}`}
                                    />
                                    <span className={`absolute top-0 right-0 text-[9px] font-black uppercase tracking-tighter transition-opacity ${isFilled ? "text-emerald-500/60" : "text-amber-600/60"}`}>
                                        {isFilled ? "READY" : "MISSING"}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}

            {/* FILLED / COMMITTED TAGS SECTION */}
            {filledTags.length > 0 && (
                <div className="bg-white dark:bg-gray-800/30 rounded-2xl border border-gray-200 dark:border-gray-700/40 overflow-hidden shadow-sm transition-all">
                    <button
                        onClick={() => setIsFilledOpen(!isFilledOpen)}
                        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                    >
                        <div className="flex items-center gap-2.5">
                            <span className="text-emerald-500">✅</span>
                            <div className="flex flex-col items-start text-left">
                                <h3 className="text-xs font-bold text-gray-900 dark:text-gray-100 uppercase tracking-widest">
                                    Already Personalized
                                </h3>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-[10px] text-gray-400 font-bold uppercase">{filledTags.length} Filled</span>
                            <svg
                                className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isFilledOpen ? 'rotate-180' : ''}`}
                                fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </button>

                    <div className={`collapsible-content ${isFilledOpen ? 'open' : ''}`}>
                        <div className="p-4 pt-0 space-y-4">
                            {filledTags.map((tag) => (
                                <div key={tag} className="relative">
                                    <Input
                                        label={tag.replace(/_/g, " ")}
                                        value={values[tag] || ""}
                                        onChange={(val) => onChange(tag, val)}
                                        onFocus={() => handleFocus(tag)}
                                        onBlur={() => handleBlur(tag)}
                                        placeholder={`Update ${tag.toLowerCase()}...`}
                                        inputRef={(el) => (inputRefs.current[tag] = el)}
                                        className="bg-emerald-50/5 dark:bg-emerald-900/5 border-emerald-500/10"
                                    />
                                    <span className="absolute top-0 right-0 text-[9px] font-black text-emerald-600/60 dark:text-emerald-500/60 uppercase tracking-tighter">
                                        COMMITTED
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
});

export default TagInputs;
