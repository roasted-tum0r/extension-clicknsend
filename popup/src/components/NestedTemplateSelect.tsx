import { useState, useMemo, useRef, useEffect } from "react";
import { FULL_REGISTRY, TEMPLATE_LIBRARY, CATEGORY_LABELS } from "../features/mail-composer/templates";
import type { TemplateCategory } from "../features/mail-composer/types";
import NoResults from "../assets/icons/noresults";

interface NestedTemplateSelectProps {
    value: string;
    onChange: (value: string) => void;
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
}

// Helper for highlighting text
const HighlightText = ({ text, search }: { text: string; search: string }) => {
    if (!search) return <>{text}</>;

    const parts = text.split(new RegExp(`(${search})`, 'gi'));
    return (
        <>
            {parts.map((part, i) =>
                part.toLowerCase() === search.toLowerCase() ? (
                    <span key={i} className="bg-yellow-200 dark:bg-yellow-500/30 text-slate-900 dark:text-yellow-100 font-bold rounded-[2px] px-[1px]">
                        {part}
                    </span>
                ) : (
                    <span key={i}>{part}</span>
                )
            )}
        </>
    );
};

export default function NestedTemplateSelect({ value, onChange, isOpen, onOpenChange }: NestedTemplateSelectProps) {
    const [search, setSearch] = useState("");
    const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
    const containerRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);

    // Close when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            const path = event.composedPath();
            if (containerRef.current && !path.includes(containerRef.current)) {
                onOpenChange(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [onOpenChange]);

    // Focus search when opened
    useEffect(() => {
        if (isOpen && searchInputRef.current) {
            setTimeout(() => {
                searchInputRef.current?.focus();
            }, 100);
        }
    }, [isOpen]);

    const toggleCategory = (cat: string) => {
        setExpandedCategories(prev => {
            // Exclusive accordion: close others if we are opening one
            if (!prev[cat]) {
                const newState: Record<string, boolean> = {};
                // Keep keeping others closed, just open this one
                newState[cat] = true;
                return newState;
            }
            // If closing, just toggle it off
            return {
                ...prev,
                [cat]: false
            };
        });
    };

    const filteredLibrary = useMemo(() => {
        if (!search) return TEMPLATE_LIBRARY;

        const filtered: any = {};
        const searchLower = search.toLowerCase();

        Object.entries(TEMPLATE_LIBRARY).forEach(([cat, templates]) => {
            const matchingTemplates = Object.entries(templates).filter(([_, t]) =>
                t.meta.label.toLowerCase().includes(searchLower) ||
                t.meta.description?.toLowerCase().includes(searchLower)
            );

            if (matchingTemplates.length > 0) {
                filtered[cat] = Object.fromEntries(matchingTemplates);
            }
        });

        return filtered;
    }, [search]);

    // If searching, expand all categories that have results
    useEffect(() => {
        if (search) {
            const newExpanded: Record<string, boolean> = {};
            Object.keys(filteredLibrary).forEach(cat => {
                newExpanded[cat] = true;
            });
            setExpandedCategories(newExpanded);
        }
    }, [search, filteredLibrary]);

    const selectedTemplate = value ? FULL_REGISTRY[value as keyof typeof FULL_REGISTRY] : null;

    return (
        <div className="relative mb-6" ref={containerRef}>
            <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2 px-1">
                Select Email Template
            </label>

            {/* Trigger Button */}
            <button
                onClick={() => onOpenChange(!isOpen)}
                className={`group w-full flex items-center justify-between p-3.5 
                    bg-slate-50 dark:bg-slate-900 
                    border transition-all duration-200 ease-in-out
                    rounded-xl text-left 
                    ${isOpen
                        ? 'border-blue-500 shadow-md ring-2 ring-blue-500/10'
                        : 'border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-slate-700 hover:shadow-md'
                    }
                `}
            >
                <div className="flex flex-col overflow-hidden gap-0.5">
                    <span className={`text-sm font-semibold truncate transition-colors duration-200 ${isOpen ? 'text-blue-600 dark:text-blue-400' : 'text-slate-800 dark:text-slate-100'
                        }`}>
                        {selectedTemplate ? selectedTemplate.meta.label : "Choose a template..."}
                    </span>
                    {selectedTemplate && (
                        <span className="text-[11px] font-medium text-slate-500 dark:text-slate-500 uppercase tracking-wider truncate">
                            {CATEGORY_LABELS[selectedTemplate.meta.category]}
                        </span>
                    )}
                </div>
                <div className={`
                    w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200
                    ${isOpen ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'bg-white dark:bg-slate-800 text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300 shadow-sm'}
                `}>
                    <svg
                        className={`w-4 h-4 transition-transform duration-300 ease-out ${isOpen ? 'rotate-180' : ''}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </button>

            {/* Dropdown Panel */}
            {isOpen && (
                <div className="absolute z-50 mt-2 w-full origin-top transform transition-all duration-200 ease-out animate-dropdown-enter">
                    <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xl overflow-hidden ring-1 ring-black/5 dark:ring-white/5">

                        {/* Search Header */}
                        <div className="p-3 border-b border-slate-100 dark:border-slate-800 sticky top-0 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md z-10">
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg className="h-4 w-4 text-slate-400 group-focus-within:text-blue-500 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <input
                                    ref={searchInputRef}
                                    type="text"
                                    placeholder="Find a template..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-full pl-9 pr-4 py-2.5 
                                        bg-slate-50 dark:bg-slate-800/80 
                                        border border-transparent focus:border-blue-200 dark:focus:border-blue-900/50
                                        rounded-lg text-sm font-medium
                                        placeholder-slate-400 dark:placeholder-slate-500
                                        text-slate-900 dark:text-white
                                        focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-900/30 
                                        focus:bg-white dark:focus:bg-slate-800
                                        transition-all duration-200 outline-none"
                                />
                            </div>
                        </div>

                        {/* List Content */}
                        <div className="max-h-[350px] overflow-y-auto custom-scrollbar">
                            {Object.keys(filteredLibrary).length === 0 ? (
                                <div className="py-8 px-4 text-center flex flex-col items-center justify-center animate-in fade-in duration-300">
                                    <div className="flex justify-center mb-4 opacity-80 scale-90">
                                        <div style={{ width: '120px', height: '120px' }}>
                                            <NoResults />
                                        </div>
                                    </div>
                                    <h3 className="text-slate-800 dark:text-slate-200 font-bold mb-1">No templates found</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-xs">
                                        We couldn't find anything matching "<span className="font-semibold text-slate-700 dark:text-slate-300">{search}</span>"
                                    </p>
                                </div>
                            ) : (
                                <div className="p-2 space-y-1">
                                    {Object.entries(filteredLibrary).map(([cat, templates]) => (
                                        <div key={cat} className="overflow-hidden rounded-lg bg-white dark:bg-transparent">
                                            <button
                                                onClick={() => toggleCategory(cat)}
                                                className={`
                                                    w-full flex items-center justify-between px-3 py-2.5 
                                                    rounded-lg transition-all duration-200
                                                    ${expandedCategories[cat]
                                                        ? 'bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-slate-200 shadow-sm'
                                                        : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/30 hover:text-slate-700 dark:hover:text-slate-300'
                                                    }
                                                `}
                                            >
                                                <div className="flex items-center gap-2.5">
                                                    <span className={`
                                                        w-1.5 h-1.5 rounded-full transition-all duration-200
                                                        ${expandedCategories[cat] ? 'bg-blue-500 scale-125 shadow-glow' : 'bg-slate-300 dark:bg-slate-600'}
                                                    `}></span>
                                                    <span className="text-xs font-bold uppercase tracking-wider">
                                                        {CATEGORY_LABELS[cat as TemplateCategory]}
                                                    </span>
                                                </div>
                                                <svg
                                                    className={`w-3.5 h-3.5 transition-transform duration-200 ${expandedCategories[cat] ? 'rotate-180 text-blue-500' : 'text-slate-400'}`}
                                                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>

                                            <div className={`
                                                overflow-hidden transition-all duration-300 ease-in-out
                                                ${expandedCategories[cat] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
                                            `}>
                                                <div className="relative pt-1 pb-2 space-y-0.5">
                                                    {/* Vertical Guidelines */}
                                                    <div className="absolute left-[18px] top-0 bottom-3 w-px bg-gradient-to-b from-slate-200 via-slate-200 to-transparent dark:from-slate-700 dark:via-slate-700"></div>

                                                    {Object.entries(templates as any).map(([id, t]: [string, any]) => (
                                                        <button
                                                            key={id}
                                                            onClick={() => {
                                                                onChange(id);
                                                                onOpenChange(false);
                                                            }}
                                                            className={`
                                                                relative w-[calc(100%-12px)] ml-3 group text-left px-4 py-2.5 rounded-lg 
                                                                transition-all duration-200 flex flex-col border border-transparent
                                                                ${value === id
                                                                    ? "bg-blue-50 dark:bg-blue-500/10 border-blue-100 dark:border-blue-500/20 translate-x-1"
                                                                    : "hover:bg-slate-50 dark:hover:bg-slate-800/80 hover:translate-x-1"
                                                                }
                                                            `}
                                                        >
                                                            {/* Active Indicator Bar */}
                                                            {value === id && (
                                                                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-blue-500 rounded-r-full shadow-sm"></div>
                                                            )}

                                                            <div className="flex items-center justify-between gap-2 z-10">
                                                                <span className={`text-sm tracking-tight transition-colors ${value === id
                                                                    ? 'text-blue-700 dark:text-blue-300 font-bold'
                                                                    : 'text-slate-700 dark:text-slate-200 font-medium group-hover:text-slate-900 dark:group-hover:text-white'
                                                                    }`}>
                                                                    <HighlightText text={t.meta.label} search={search} />
                                                                </span>
                                                                {t.meta.isPopular && (
                                                                    <span className={`
                                                                        px-1.5 py-[2px] rounded text-[9px] font-black uppercase tracking-wider
                                                                        ${value === id
                                                                            ? 'bg-blue-100 dark:bg-blue-400/20 text-blue-700 dark:text-blue-300'
                                                                            : 'bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300'}
                                                                    `}>
                                                                        Hot
                                                                    </span>
                                                                )}
                                                            </div>

                                                            {t.meta.description && (
                                                                <span className={`
                                                                    mt-0.5 text-xs line-clamp-1 transition-colors z-10
                                                                    ${value === id
                                                                        ? 'text-blue-600/80 dark:text-blue-300/60'
                                                                        : 'text-slate-500 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-400'
                                                                    }
                                                                `}>
                                                                    <HighlightText text={t.meta.description} search={search} />
                                                                </span>
                                                            )}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Footer decorative line */}
                        <div className="h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-20 dark:opacity-40"></div>
                    </div>
                </div>
            )}
        </div>
    );
}
