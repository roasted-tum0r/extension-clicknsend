import { useState, useMemo, useRef, useEffect } from "react";
import { FULL_REGISTRY, TEMPLATE_LIBRARY, CATEGORY_LABELS } from "../features/mail-composer/templates";
import type { TemplateCategory } from "../features/mail-composer/types";

interface NestedTemplateSelectProps {
    value: string;
    onChange: (value: string) => void;
}

export default function NestedTemplateSelect({ value, onChange }: NestedTemplateSelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
    const containerRef = useRef<HTMLDivElement>(null);

    // Close when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleCategory = (cat: string) => {
        setExpandedCategories(prev => ({
            ...prev,
            [cat]: !prev[cat]
        }));
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
        <div className="relative mb-4" ref={containerRef}>
            <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                Select Email Template
            </label>

            {/* Trigger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-left hover:border-blue-500 transition-all shadow-sm"
            >
                <div className="flex flex-col overflow-hidden">
                    <span className="text-sm font-medium text-gray-900 dark:text-white truncate">
                        {selectedTemplate ? selectedTemplate.meta.label : "Choose a template..."}
                    </span>
                    {selectedTemplate && (
                        <span className="text-xs text-gray-500 truncate">
                            {CATEGORY_LABELS[selectedTemplate.meta.category]}
                        </span>
                    )}
                </div>
                <svg
                    className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Dropdown Panel */}
            {isOpen && (
                <div className="absolute z-50 mt-2 w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
                    {/* Search Header */}
                    <div className="p-3 border-b border-gray-100 dark:border-gray-800 sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
                        <div className="relative">
                            <svg
                                className="absolute left-3 top-2.5 h-4 w-4 text-gray-400"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                type="text"
                                autoFocus
                                placeholder="Search templates..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full pl-9 pr-4 py-2 bg-gray-50 dark:bg-gray-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>
                    </div>

                    {/* List Content */}
                    <div className="max-h-80 overflow-y-auto p-1 custom-scrollbar">
                        {Object.keys(filteredLibrary).length === 0 ? (
                            <div className="p-8 text-center text-gray-500 text-sm">
                                No templates found for "{search}"
                            </div>
                        ) : (
                            Object.entries(filteredLibrary).map(([cat, templates]) => (
                                <div key={cat} className="mb-1">
                                    <button
                                        onClick={() => toggleCategory(cat)}
                                        className="w-full flex items-center justify-between px-3 py-2 text-xs font-bold text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 uppercase tracking-widest transition-colors"
                                    >
                                        <span>{CATEGORY_LABELS[cat as TemplateCategory]}</span>
                                        <svg
                                            className={`w-3 h-3 transition-transform ${expandedCategories[cat] ? 'rotate-180' : ''}`}
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {expandedCategories[cat] && (
                                        <div className="mt-1 space-y-0.5">
                                            {Object.entries(templates as any).map(([id, t]: [string, any]) => (
                                                <button
                                                    key={id}
                                                    onClick={() => {
                                                        onChange(id);
                                                        setIsOpen(false);
                                                    }}
                                                    className={`w-full group text-left px-3 py-2 rounded-lg transition-all flex flex-col ${value === id
                                                        ? "bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-800"
                                                        : "hover:bg-gray-50 dark:hover:bg-gray-800"
                                                        }`}
                                                >
                                                    <div className="flex items-center gap-2">
                                                        <span className={`text-sm ${value === id ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-gray-700 dark:text-gray-300'}`}>
                                                            {t.meta.label}
                                                        </span>
                                                        {t.meta.isPopular && (
                                                            <span className="px-1.5 py-0.5 rounded-md bg-amber-100 dark:bg-amber-900/40 text-[10px] font-black text-amber-700 dark:text-amber-400 uppercase leading-none">
                                                                Popular
                                                            </span>
                                                        )}
                                                    </div>
                                                    {t.meta.description && (
                                                        <span className="text-xs text-gray-500 dark:text-gray-500 line-clamp-1 group-hover:line-clamp-none transition-all">
                                                            {t.meta.description}
                                                        </span>
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
