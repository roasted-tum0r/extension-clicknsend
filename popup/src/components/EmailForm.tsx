import { useEffect, useState, useRef } from "react";
import NestedTemplateSelect from "./NestedTemplateSelect";
import SendButton from "./SendButton";
import { Input } from "./Input";
import ProviderSelect from "./ProviderSelect";
import type { EmailProvider } from "./ProviderSelect";
import { FULL_REGISTRY } from "../features/mail-composer/templates";
import type { TemplateTypeNew } from "../features/mail-composer/types";
import { extractTags, replaceTags, hasUnfilledTags } from "../features/mail-composer/tag-utils";
import { getStoredTags, setStoredTags } from "../features/mail-composer/storage";
import TagInputs from "./TagInputs";
import type { TagInputsHandle } from "./TagInputs";
import TokenizedBlockEditor from "./TokenizedBlockEditor";

export default function EmailForm({ initialEmail, theme }: { initialEmail?: string, theme: string }) {
  // recipient state
  const [recipient, setRecipient] = useState(initialEmail || "");
  const [loading, setLoading] = useState(!initialEmail);
  const [provider, setProvider] = useState<EmailProvider>(() => {
    return (localStorage.getItem("clicksend_provider") as EmailProvider) || "gmail";
  });

  const [template, setTemplate] = useState<TemplateTypeNew | "">("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [detectedTags, setDetectedTags] = useState<string[]>([]);
  const [tagValues, setTagValues] = useState<Record<string, string>>({});

  const tagInputsRef = useRef<TagInputsHandle>(null);

  // Load stored tags on mount
  useEffect(() => {
    getStoredTags().then(setTagValues);
  }, []);

  // Recipient sync (omitted for brevity in this call, but keep logic)
  useEffect(() => {
    if (initialEmail) {
      setRecipient(initialEmail);
      setLoading(false);
      return;
    }
    setLoading(true);
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      chrome.storage.local.get(['clicksend_last_recipient'], (result) => {
        if (result && result.clicksend_last_recipient) {
          setRecipient(result.clicksend_last_recipient as string);
        } else {
          const local = localStorage.getItem("clicksend_last_recipient");
          if (local) setRecipient(local);
        }
        setLoading(false);
      });
    } else {
      const local = localStorage.getItem("clicksend_last_recipient");
      if (local) setRecipient(local);
      setLoading(false);
    }
  }, [initialEmail]);

  useEffect(() => {
    if (recipient) {
      if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
        chrome.storage.local.set({ 'clicksend_last_recipient': recipient });
      }
      localStorage.setItem("clicksend_last_recipient", recipient);
    }
  }, [recipient]);

  useEffect(() => {
    localStorage.setItem("clicksend_provider", provider);
  }, [provider]);

  const handleTemplateChange = (val: string) => {
    const newTemplate = val as TemplateTypeNew;
    setTemplate(newTemplate);
    let newSubject = "";
    let newMessage = "";
    if (newTemplate === "custom") {
      newSubject = "";
      newMessage = "";
    } else if (newTemplate && newTemplate in FULL_REGISTRY) {
      const t = FULL_REGISTRY[newTemplate as Exclude<TemplateTypeNew, "custom">];
      newSubject = t.draft.subject;
      newMessage = t.draft.body;
    }
    setSubject(newSubject);
    setMessage(newMessage);
    const tags = extractTags(newSubject + "\n" + newMessage);
    setDetectedTags(tags);
  };

  // Real-time tag detection
  useEffect(() => {
    const allText = subject + "\n" + message;
    const tags = extractTags(allText);

    // Only update if the tag list has actually changed to avoid unnecessary re-renders
    setDetectedTags(prev => {
      const isSame = prev.length === tags.length && prev.every(t => tags.includes(t));
      return isSame ? prev : tags;
    });
  }, [subject, message]);

  const handleTagChange = (tag: string, value: string) => {
    setTagValues((prev) => ({ ...prev, [tag]: value }));
  };

  const handleTagClick = (tag: string) => {
    if (tagInputsRef.current) {
      tagInputsRef.current.focusTag(tag);
    }
  };

  const processedSubject = replaceTags(subject, tagValues);
  const processedMessage = replaceTags(message, tagValues);
  const hasTagsLeft = hasUnfilledTags(processedSubject) || hasUnfilledTags(processedMessage);

  const handleSend = () => {
    const tagsToSave: Record<string, string> = {};
    detectedTags.forEach(tag => {
      if (tagValues[tag]) tagsToSave[tag] = tagValues[tag];
    });
    setStoredTags(tagsToSave);
    const encode = encodeURIComponent;
    const finalSubject = processedSubject;
    const finalMessage = processedMessage;
    if (provider === "gmail") {
      const params = new URLSearchParams();
      params.append("view", "cm");
      params.append("fs", "1");
      if (recipient) params.append("to", recipient);
      if (finalSubject) params.append("su", finalSubject);
      if (finalMessage) params.append("body", finalMessage);
      window.open(`https://mail.google.com/mail/?${params.toString()}`, "_blank");
    } else if (provider === "outlook") {
      const url = `https://outlook.office.com/mail/deeplink/compose?to=${encode(recipient)}&subject=${encode(finalSubject)}&body=${encode(finalMessage)}`;
      window.open(url, "_blank");
    } else if (provider === "yahoo") {
      const url = `https://compose.mail.yahoo.com/?to=${encode(recipient)}&subject=${encode(finalSubject)}&body=${encode(finalMessage)}`;
      window.open(url, "_blank");
    } else {
      const url = `mailto:${encode(recipient)}?subject=${encode(finalSubject)}&body=${encode(finalMessage)}`;
      window.open(url, "_self");
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <Input
        label="Recipient"
        value={loading ? "Loading..." : recipient}
        onChange={setRecipient}
        placeholder={loading ? "Loading email..." : "Type the email here! Example: [EMAIL_ADDRESS]"}
        type="email"
      />
      <NestedTemplateSelect value={template} onChange={handleTemplateChange} />

      <TagInputs
        ref={tagInputsRef}
        tags={detectedTags}
        values={tagValues}
        onChange={handleTagChange}
      />

      <TokenizedBlockEditor
        label="Subject"
        value={subject}
        tagValues={tagValues}
        onChange={setSubject}
        onTagClick={handleTagClick}
        placeholder="Email subject..."
      />

      <TokenizedBlockEditor
        label="Message"
        value={message}
        tagValues={tagValues}
        onChange={setMessage}
        onTagClick={handleTagClick}
        placeholder="Type your message here..."
      />

      {/* Live Preview Card */}
      {(processedSubject !== subject || processedMessage !== message) && (
        <div className="mb-4 p-4 rounded-xl bg-gray-100 dark:bg-gray-800/20 border border-gray-200 dark:border-gray-700/50 animate-in fade-in duration-300">
          <div className="flex items-center gap-2 mb-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest sticky top-0">
            <span>Live Preview</span>
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
          </div>
          <div className="max-h-40 overflow-y-auto pr-2 custom-scrollbar">
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 break-words">
                {processedSubject}
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 whitespace-pre-wrap leading-relaxed">
                {processedMessage}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="flex gap-3 mt-2 items-center">
        <ProviderSelect value={provider} onChange={setProvider} />
        <SendButton
          onClick={handleSend}
          provider={provider}
          disabled={!recipient || message.length < 1 || subject.length < 1 || template.length < 1 || hasTagsLeft}
          theme={theme}
        />
      </div>
    </div>
  );
}
