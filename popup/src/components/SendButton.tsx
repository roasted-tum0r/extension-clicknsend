interface SendButtonProps {
  onClick: () => void;
}

export default function SendButton({ onClick }: SendButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-lg transition-colors focus:ring-4 focus:ring-blue-500/50 flex items-center justify-center gap-2"
    >
      <span>🚀</span> Send with Gmail
    </button>
  );
}
