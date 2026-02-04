import { useState, useRef, useEffect, type JSX } from "react";
import GmailIcon from "../assets/icons/gmail";
import OutLookIcon from "../assets/icons/outlook";
import YahooIcon from "../assets/icons/yahoo";

export type EmailProvider = "gmail" | "outlook" | "yahoo" | "default";

interface ProviderSelectProps {
    value: EmailProvider;
    onChange: (provider: EmailProvider) => void;
}

const providers: { id: EmailProvider; name: string; icon: string | JSX.Element; color: string }[] = [
    { id: "gmail", name: "Gmail", icon: <GmailIcon />, color: "text-red-500" },
    { id: "outlook", name: "Outlook", icon: <OutLookIcon />, color: "text-blue-500" },
    { id: "yahoo", name: "Yahoo", icon: <YahooIcon />, color: "text-purple-500" },
    { id: "default", name: "Default", icon: "🖥️", color: "text-gray-500" },
];

export default function ProviderSelect({ value, onChange }: ProviderSelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const selected = providers.find((p) => p.id === value) || providers[0];

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            const path = event.composedPath();
            if (dropdownRef.current && !path.includes(dropdownRef.current)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="h-12 px-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:ring-2 focus:ring-blue-500 outline-none w-[140px] justify-between"
            >
                <div className="flex items-center gap-2 overflow-hidden">
                    <span className="text-xl">{selected.icon}</span>
                    <span className="font-semibold text-sm text-gray-700 dark:text-gray-200 truncate">{selected.name}</span>
                </div>
                <span className="text-gray-400 text-xs">▼</span>
            </button>

            {isOpen && (
                <div className="absolute bottom-full left-0 mb-2 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl overflow-hidden z-50">
                    {providers.map((p) => (
                        <button
                            key={p.id}
                            onClick={() => {
                                onChange(p.id);
                                setIsOpen(false);
                            }}
                            className={`w-full flex items-center gap-3 px-3 py-2.5 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${value === p.id ? "bg-blue-50 dark:bg-blue-900/30" : ""
                                }`}
                        >
                            <span className="text-lg">{p.icon}</span>
                            <span className={`text-sm font-medium ${value === p.id ? "text-blue-600 dark:text-blue-400" : "text-gray-700 dark:text-gray-200"}`}>
                                {p.name}
                            </span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
