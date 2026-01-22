interface MessageBoxProps {
  value: string;
  onChange: (value: string) => void;
}

export default function MessageBox({ value, onChange }: MessageBoxProps) {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        Message
      </label>
      <textarea
        rows={6}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none font-sans text-sm placeholder-gray-400 dark:placeholder-gray-500"
        placeholder="Type your message here..."
      />
    </div>
  );
}
