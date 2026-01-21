import type { EmailProvider } from "./ProviderSelect";

interface SendButtonProps {
  onClick: () => void;
  provider: EmailProvider;
  disabled: boolean;
}

const providerNames: Record<EmailProvider, string> = {
  gmail: "Gmail",
  outlook: "Outlook",
  yahoo: "Yahoo",
  default: "Email App",
};

export default function SendButton({ onClick, provider, disabled }: SendButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`
        flex-1 py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 
        text-white text-base font-bold rounded-lg shadow-lg border border-transparent
        transition-all duration-200
        focus:ring-4 focus:ring-blue-500/30 flex items-center justify-center gap-2 cursor-pointer h-12
        disabled:opacity-50 disabled:cursor-not-allowed disabled:grayscale
      `}
    >
      <span className={disabled ? "opacity-50" : ""}>🚀</span>
      <span>Send with {providerNames[provider]}</span>
    </button>
  );
}
