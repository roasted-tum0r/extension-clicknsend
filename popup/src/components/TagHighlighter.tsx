import { useRef, useEffect } from "react";
import { TAG_REGEX } from "../features/mail-composer/tag-utils";

interface TagHighlighterProps {
    text: string;
    onTagClick?: (tag: string) => void;
    syncScrollRef?: React.RefObject<HTMLTextAreaElement | HTMLInputElement | null>;
    className?: string;
}

export default function TagHighlighter({ text, onTagClick, syncScrollRef, className = "" }: TagHighlighterProps) {
    const overlayRef = useRef<HTMLDivElement>(null);

    // Synchronize scroll on every render if ref is provided
    useEffect(() => {
        const syncScroll = () => {
            if (syncScrollRef?.current && overlayRef.current) {
                overlayRef.current.scrollTop = syncScrollRef.current.scrollTop;
                overlayRef.current.scrollLeft = syncScrollRef.current.scrollLeft;
            }
        };

        const source = syncScrollRef?.current;
        if (source) {
            source.addEventListener("scroll", syncScroll);
            // Initial sync
            syncScroll();
        }

        return () => {
            if (source) source.removeEventListener("scroll", syncScroll);
        };
    }, [syncScrollRef, text]);

    // Tokenize the text to isolate tags
    const parts = text.split(TAG_REGEX);
    const matches = text.match(TAG_REGEX) || [];

    return (
        <div
            ref={overlayRef}
            className={`editor-shared-styles editor-overlay custom-scrollbar ${className}`}
            aria-hidden="true"
        >
            {parts.map((part, i) => (
                <span key={i}>
                    {part}
                    {matches[i] && (
                        <span
                            className="tag-highlight animate-pulse-soft"
                            onClick={(e) => {
                                e.stopPropagation();
                                if (onTagClick) onTagClick(matches[i].replace(/\{\{|\}\}/g, "").trim());
                            }}
                        >
                            {matches[i]}
                        </span>
                    )}
                </span>
            ))}
            {/* Handle trailing newline behavior so scroll heights match perfectly */}
            {text.endsWith("\n") && <br />}
        </div>
    );
}
