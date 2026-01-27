import { useRef } from "react";
import TagHighlighter from "./TagHighlighter";

interface Props {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  label?: string;
  type?: string;
  className?: string;
  showHighlighter?: boolean;
  inputRef?: (el: HTMLInputElement | null) => void;
  onTagClick?: (tag: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export function Input({
  value,
  onChange,
  placeholder,
  label,
  type = "text",
  className = "",
  showHighlighter = false,
  inputRef,
  onTagClick,
  onFocus,
  onBlur
}: Props) {
  const internalRef = useRef<HTMLInputElement>(null);

  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {label}
        </label>
      )}
      <div className="highlighter-container">
        {showHighlighter && (
          <TagHighlighter
            text={value}
            className="overlay-input"
            syncScrollRef={internalRef}
            onTagClick={onTagClick}
          />
        )}
        <input
          ref={(el) => {
            (internalRef as any).current = el;
            if (inputRef) inputRef(el);
          }}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
          className={`
                        w-full p-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md
                        text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none
                        placeholder-gray-400 dark:placeholder-gray-500 font-sans text-sm
                        ${showHighlighter ? "highlighter-input" : ""}
                    `}
        />
      </div>
    </div>
  );
}
