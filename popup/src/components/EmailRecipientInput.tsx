import { useState, useEffect, type KeyboardEvent } from "react";
import { useTheme } from "../context/ThemeContext";

interface EmailRecipientInputProps {
    to: string[];
    cc: string[];
    bcc: string[];
    setTo: (emails: string[]) => void;
    setCc: (emails: string[]) => void;
    setBcc: (emails: string[]) => void;
    onValidationChange?: (isValid: boolean) => void;
    loading?: boolean;
}

export default function EmailRecipientInput({
    to,
    cc,
    bcc,
    setTo,
    setCc,
    setBcc,
    onValidationChange,
    loading
}: EmailRecipientInputProps) {
    const { activeTheme } = useTheme();
    const [isExpanded, setIsExpanded] = useState(false);
    const [toInput, setToInput] = useState("");
    const [ccInput, setCcInput] = useState("");
    const [bccInput, setBccInput] = useState("");
    const [error, setError] = useState<string | null>(null);

    // Notify parent of validation state
    useEffect(() => {
        const hasActiveInputError =
            (toInput && !validateEmail(toInput)) ||
            (ccInput && !validateEmail(ccInput)) ||
            (bccInput && !validateEmail(bccInput));

        const hasGeneralError = !!error;

        onValidationChange?.(!hasActiveInputError && !hasGeneralError);
    }, [toInput, ccInput, bccInput, error, onValidationChange]);

    const showError = (msg: string) => {
        setError(msg);
        setTimeout(() => setError(null), 3000);
    };

    const validateEmail = (email: string) => {
        const trimmed = email.trim();
        // Basic RFC-like regex
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return regex.test(trimmed) && !trimmed.includes("..");
    };

    const handleKeyDown = (
        e: KeyboardEvent<HTMLInputElement>,
        currentList: string[],
        updateList: (list: string[]) => void,
        currentInput: string,
        updateInput: (val: string) => void
    ) => {
        if (e.key === "Enter" || e.key === ",") {
            e.preventDefault();
            const email = currentInput.trim().replace(/,$/, "");
            if (!email) return;

            if (!validateEmail(email)) {
                showError("Invalid format. Use format like" + `"example@email.com"` + "or" + `"example@email.com, example@email.com"`);
                return;
            }

            // Check uniqueness across ALL lists with specific location
            if (to.includes(email)) {
                showError(`Email already in 'To' list`);
                return;
            }
            if (cc.includes(email)) {
                showError(`Email already in 'Cc' list`);
                return;
            }
            if (bcc.includes(email)) {
                showError(`Email already in 'Bcc' list`);
                return;
            }

            updateList([...currentList, email]);
            updateInput("");
        } else if (e.key === "Backspace" && !currentInput && currentList.length > 0) {
            updateList(currentList.slice(0, -1));
        }
    };

    const removeEmail = (
        email: string,
        currentList: string[],
        updateList: (list: string[]) => void
    ) => {
        updateList(currentList.filter((e) => e !== email));
    };

    const renderChips = (
        emails: string[],
        currentList: string[],
        updateList: (list: string[]) => void
    ) => {
        return emails.map((email) => (
            <div
                key={email}
                className="flex items-center gap-1 px-2 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-lg text-xs font-medium border border-blue-200 dark:border-blue-800/50 animate-in zoom-in-95 duration-200"
            >
                <span>{email}</span>
                <button
                    onClick={() => removeEmail(email, currentList, updateList)}
                    className="hover:text-blue-900 dark:hover:text-blue-100 transition-colors"
                >
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        ));
    };

    return (
        <div className="space-y-3 mb-4 relative pt-2">
            {/* Toast Error Message */}
            {error && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-[100] bg-red-500 text-white px-4 py-1.5 rounded-full text-[10px] font-bold shadow-lg flex items-center gap-2 whitespace-nowrap animate-bounce">
                    <span>⚠️</span>
                    {error}
                </div>
            )}
            {/* TO SECTION */}
            <div className="group">
                <div className="flex items-center justify-between mb-1.5 px-1">
                    <label className="text-[13px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                        Recipient (To)
                    </label>
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-[10px] font-bold text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 uppercase tracking-tighter transition-colors"
                    >
                        {isExpanded ? "- Hide CC/BCC" : "+ Add CC/BCC"}
                    </button>
                </div>

                <div className={`
          min-h-[42px] p-1.5 flex flex-wrap gap-2 ${activeTheme.inputClass} border border-slate-200 dark:border-slate-800 rounded-xl
          focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500/50 transition-all duration-200
          ${loading ? 'opacity-50 pointer-events-none' : ''}
        `}>
                    {renderChips(to, to, setTo)}
                    <input
                        type="text"
                        value={toInput}
                        onChange={(e) => {
                            setToInput(e.target.value);
                            if (error) setError(null);
                        }}
                        onKeyDown={(e) => handleKeyDown(e, to, setTo, toInput, setToInput)}
                        placeholder={to.length === 0 ? (loading ? "Loading..." : "Enter Recipient Email...") : ""}
                        className="flex-1 min-w-[120px] bg-transparent border-none outline-none text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-600"
                    />
                </div>
            </div>

            {/* EXPANDABLE CC/BCC */}
            <div className={`
        overflow-hidden transition-all duration-300 ease-in-out
        ${isExpanded ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}
      `}>
                <div className="space-y-3 pt-1">
                    {/* CC SECTION */}
                    <div>
                        <label className="block text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1.5 px-1">
                            Cc
                        </label>
                        <div className={`min-h-[42px] p-1.5 flex flex-wrap gap-2 ${activeTheme.inputClass} border border-slate-200 dark:border-slate-800 rounded-xl focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500/50 transition-all`}>
                            {renderChips(cc, cc, setCc)}
                            <input
                                type="text"
                                value={ccInput}
                                onChange={(e) => {
                                    setCcInput(e.target.value);
                                    if (error) setError(null);
                                }}
                                onKeyDown={(e) => handleKeyDown(e, cc, setCc, ccInput, setCcInput)}
                                placeholder={cc.length === 0 ? "Add Cc..." : ""}
                                className="flex-1 min-w-[120px] bg-transparent border-none outline-none text-sm text-slate-700 dark:text-slate-200"
                            />
                        </div>
                    </div>

                    {/* BCC SECTION */}
                    <div>
                        <label className="block text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1.5 px-1">
                            Bcc
                        </label>
                        <div className={`min-h-[42px] p-1.5 flex flex-wrap gap-2 ${activeTheme.inputClass} border border-slate-200 dark:border-slate-800 rounded-xl focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500/50 transition-all`}>
                            {renderChips(bcc, bcc, setBcc)}
                            <input
                                type="text"
                                value={bccInput}
                                onChange={(e) => {
                                    setBccInput(e.target.value);
                                    if (error) setError(null);
                                }}
                                onKeyDown={(e) => handleKeyDown(e, bcc, setBcc, bccInput, setBccInput)}
                                placeholder={bcc.length === 0 ? "Add Bcc..." : ""}
                                className="flex-1 min-w-[120px] bg-transparent border-none outline-none text-sm text-slate-700 dark:text-slate-200"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
