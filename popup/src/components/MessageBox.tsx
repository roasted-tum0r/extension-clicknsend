import { useRef } from "react";
import TagHighlighter from "./TagHighlighter";

interface MessageBoxProps {
  value: string;
  onChange: (value: string) => void;
  showHighlighter?: boolean;
  onTagClick?: (tag: string) => void;
}

export default function MessageBox({ value, onChange, showHighlighter = false, onTagClick }: MessageBoxProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        Message
      </label>
      <div className="highlighter-container">
        {showHighlighter && (
          <TagHighlighter
            text={value}
            className="overlay-textarea"
            syncScrollRef={textareaRef}
            onTagClick={onTagClick}
          />
        )}
        <textarea
          ref={textareaRef}
          rows={6}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`
                        w-full p-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md
                        text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none
                        font-sans text-sm placeholder-gray-400 dark:placeholder-gray-500
                        ${showHighlighter ? "highlighter-input" : ""}
                    `}
          placeholder="Type your message here..."
        />
      </div>
    </div>
  );
}
