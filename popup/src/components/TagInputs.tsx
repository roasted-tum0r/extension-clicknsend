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
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRefs = useRef<Record<string, HTMLInputElement | null>>({});

    // Auto-open if there are empty tags when a new template is selected
    useEffect(() => {
        if (tags.length > 0) {
            const hasEmpty = tags.some(t => !values[t]);
            if (hasEmpty) setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, [tags.join(",")]);

    useImperativeHandle(ref, () => ({
        focusTag: (tag: string) => {
            setIsOpen(true);
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
        <div ref={containerRef} className="bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700/50 mb-4 overflow-hidden shadow-sm transition-all focus-within:ring-1 focus-within:ring-blue-500/20">
            {/* Header */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 bg-gray-50/50 dark:bg-gray-900/20 hover:bg-gray-50 dark:hover:bg-gray-800/80 transition-colors border-b border-gray-100 dark:border-gray-700/30"
            >
                <div className="flex items-center gap-3">
                    <span className="text-blue-500">✨</span>
                    <div className="flex flex-col items-start text-left">
                        <h3 className="text-xs font-bold text-gray-900 dark:text-gray-100 uppercase tracking-widest">
                            Personalize Template
                        </h3>
                        <span className="text-[10px] text-gray-500 font-medium">
                            {tags.length} template {tags.length === 1 ? 'tag' : 'tags'} detected
                        </span>
                    </div>
                </div>
                <svg
                    className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Content */}
            <div className={`collapsible-content ${isOpen ? 'open' : ''}`}>
                <div className="p-4 space-y-4">
                    {tags.map((tag) => {
                        const isFilled = !!values[tag];
                        return (
                            <div key={tag} className="relative">
                                <Input
                                    label={tag.replace(/_/g, " ")}
                                    value={values[tag] || ""}
                                    onChange={(val) => onChange(tag, val)}
                                    placeholder={`Enter ${tag.toLowerCase()}...`}
                                    inputRef={(el) => (inputRefs.current[tag] = el)}
                                    className={`transition-all ${!isFilled ? "bg-amber-50/10 dark:bg-amber-900/5 border-amber-200/30 dark:border-amber-800/20" : ""}`}
                                />
                                {!isFilled && (
                                    <span className="absolute top-0 right-0 text-[10px] font-bold text-amber-600 dark:text-amber-500 uppercase">
                                        Required
                                    </span>
                                )}
                                {isFilled && (
                                    <span className="absolute top-0 right-1 text-[10px] font-bold text-green-500 dark:text-green-600 uppercase">
                                        Done
                                    </span>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
});

export default TagInputs;
