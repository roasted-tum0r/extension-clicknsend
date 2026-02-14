import { useState, useRef, useEffect, type JSX } from "react";
import { motion } from "framer-motion";
import GmailIcon from "../assets/icons/gmail";
import OutLookIcon from "../assets/icons/outlook";
import YahooIcon from "../assets/icons/yahoo";
import { type ThemeMode } from "../constants/theme";
import { SendIcon } from "../assets/icons/SendIcon";

export type EmailProvider = "gmail" | "outlook" | "yahoo" | "default";

interface UnifiedSendButtonProps {
    provider: EmailProvider;
    onProviderChange: (provider: EmailProvider) => void;
    onSend: () => void;
    disabled: boolean;
    theme: ThemeMode;
    loading?: boolean;
}

const providers: { id: EmailProvider; name: string; icon: string | JSX.Element }[] = [
    { id: "gmail", name: "Gmail", icon: <GmailIcon /> },
    { id: "outlook", name: "Outlook", icon: <OutLookIcon /> },
    { id: "yahoo", name: "Yahoo", icon: <YahooIcon /> },
    { id: "default", name: "Default", icon: "🖥️" },
];

export default function UnifiedSendButton({
    provider,
    onProviderChange,
    onSend,
    disabled,
    theme,
    loading
}: UnifiedSendButtonProps) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const selected = providers.find((p) => p.id === provider) || providers[0];

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            const path = event.composedPath();
            if (dropdownRef.current && !path.includes(dropdownRef.current)) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const providerNames: Record<EmailProvider, string> = {
        gmail: "Gmail",
        outlook: "Outlook",
        yahoo: "Yahoo",
        default: "Email App",
    };

    return (
        <div className="flex items-center w-full gap-0 relative" ref={dropdownRef}>
            {/* Split Button Container */}
            <div className={`
                flex items-stretch w-full h-12 rounded-xl overflow-hidden border transition-all duration-300
                ${theme === 'dark'
                    ? 'bg-slate-900/40 border-slate-800 focus-within:border-blue-500/50'
                    : 'bg-white border-slate-200 focus-within:border-blue-400 shadow-sm'
                }
                ${disabled ? 'opacity-60 grayscale' : 'hover:shadow-lg'}
            `}>
                {/* Left Side: Provider Selector */}
                <button
                    type="button"
                    disabled={disabled || loading}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`
                        flex items-center gap-1.5 px-3 border-r transition-colors
                        ${theme === 'dark' ? 'border-slate-800 hover:bg-slate-800' : 'border-slate-100 hover:bg-slate-50'}
                    `}
                >
                    <span className="text-xl flex-shrink-0">{selected.icon}</span>
                    <svg className={`w-3 h-3 text-slate-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                {/* Right Side: Send Action */}
                <motion.button
                    type="button"
                    disabled={disabled || loading}
                    onClick={onSend}
                    initial="rest"
                    whileHover="hover"
                    whileTap="active"
                    className="flex-1 relative flex items-center justify-center overflow-hidden active:scale-[0.98] group/send"
                >
                    {/* Content Container that handles the sliding/reveal */}
                    <div className="flex items-center gap-3 px-4">
                        {/* The Icon - Slides premiumly */}
                        <motion.div
                            variants={{
                                rest: { x: 0, scale: 1, rotate: 0 },
                                hover: { x: -4, scale: 1.1, rotate: 15 },
                                active: { scale: 0.95 }
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        >
                            <SendIcon />
                        </motion.div>

                        {/* The Text - Senior Reveal Mechanism */}
                        <div className="flex overflow-hidden relative">
                            <motion.div
                                variants={{
                                    rest: { width: 0, opacity: 0, x: 10 },
                                    hover: { width: "auto", opacity: 1, x: 0 }
                                }}
                                transition={{
                                    width: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
                                    opacity: { duration: 0.4 },
                                    x: { duration: 0.4, ease: "easeOut" }
                                }}
                                className="whitespace-nowrap flex items-center h-full"
                            >
                                <span className={`
                                    text-sm font-extrabold tracking-tight
                                    ${theme === 'dark'
                                        ? 'text-indigo-300'
                                        : 'text-indigo-900'
                                    }
                                `}>
                                    {`Send with ${providerNames[provider]}`}
                                </span>
                            </motion.div>
                        </div>
                    </div>

                    {/* Subtle Shine Effect on hover */}
                    <motion.div
                        variants={{
                            rest: { x: "-100%" },
                            hover: { x: "100%" }
                        }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
                    />
                </motion.button>
            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
                <div className={`
                    absolute bottom-full left-0 mb-2 w-48 rounded-xl shadow-2xl border overflow-hidden z-[100] animate-in slide-in-from-bottom-2 duration-200
                    ${theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}
                `}>
                    <div className="p-1 px-3 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-white/5">
                        Choose Client
                    </div>
                    {providers.map((p) => (
                        <button
                            key={p.id}
                            onClick={() => {
                                onProviderChange(p.id);
                                setIsDropdownOpen(false);
                            }}
                            className={`
                                w-full flex items-center gap-3 px-3 py-2.5 text-left transition-colors
                                ${provider === p.id
                                    ? (theme === 'dark' ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-50 text-blue-600')
                                    : (theme === 'dark' ? 'text-slate-300 hover:bg-slate-800' : 'text-slate-600 hover:bg-slate-50')
                                }
                            `}
                        >
                            <span className="text-lg">{p.icon}</span>
                            <span className="text-sm font-semibold">{p.name}</span>
                            {provider === p.id && <span className="ml-auto text-xs">✓</span>}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
