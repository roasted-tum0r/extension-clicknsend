import type { EmailProvider } from "./ProviderSelect";

interface SendButtonProps {
  onClick: () => void;
  provider: EmailProvider;
  disabled: boolean;
  theme: string;
}

const providerNames: Record<EmailProvider, string> = {
  gmail: "Gmail",
  outlook: "Outlook",
  yahoo: "Yahoo",
  default: "Email App",
};

export default function SendButton({ onClick, provider, disabled, theme }: SendButtonProps) {
  const buttonText = `Send with ${providerNames[provider]}`;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`
        flex-1 py-3 px-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700
        text-base rounded-lg shadow-md border border-gray-200 dark:border-gray-700
        transition-all duration-200 transform active:scale-95
        focus:ring-4 focus:ring-blue-500/20 flex items-center justify-center gap-2 cursor-pointer h-12
        disabled:opacity-50 disabled:cursor-not-allowed disabled:grayscale
      `}
    >
      <span className={disabled ? "opacity-50" : ""}>🚀</span>
      <svg width="180" height="24" viewBox="0 0 180 24" className="overflow-visible flex-shrink-0">
        <defs>
          <linearGradient id="btnGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={theme === 'dark' ? '#a5b4fc' : '#3730a3'} />
            <stop offset="50%" stopColor={theme === 'dark' ? '#c084fc' : '#7e22ce'} />
            <stop offset="100%" stopColor={theme === 'dark' ? '#818cf8' : '#312e81'} />
          </linearGradient>
        </defs>
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="url(#btnGradient)"
          style={{
            fontSize: '15px',
            fontWeight: 800,
            fontFamily: 'Inter, system-ui, sans-serif'
          }}
        >
          {buttonText}
        </text>
      </svg>
    </button>
  );
}
