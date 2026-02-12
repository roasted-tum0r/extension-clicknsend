import { useEffect, useState, useRef } from "react";
import NestedTemplateSelect from "./NestedTemplateSelect";
import SendButton from "./SendButton";
import ProviderSelect from "./ProviderSelect";
import type { EmailProvider } from "./ProviderSelect";
import { FULL_REGISTRY } from "../features/mail-composer/templates";
import type { TemplateTypeNew } from "../features/mail-composer/types";
import { extractTags, replaceTags, hasUnfilledTags } from "../features/mail-composer/tag-utils";
import { getStoredTags, setStoredTags } from "../features/mail-composer/storage";
import TagInputs from "./TagInputs";
import type { TagInputsHandle } from "./TagInputs";
import TokenizedBlockEditor from "./TokenizedBlockEditor";
import EmailRecipientInput from "./EmailRecipientInput";
import { JobParser, type JobPacket } from "../utils/JobParser";

export default function EmailForm({ initialEmail, rawText, theme }: { initialEmail?: string, rawText?: string, theme: string }) {
  // recipient state
  const [to, setTo] = useState<string[]>([]);
  const [cc, setCc] = useState<string[]>([]);
  const [bcc, setBcc] = useState<string[]>([]);
  const [loading, setLoading] = useState(!initialEmail);
  const [provider, setProvider] = useState<EmailProvider>(() => {
    return (localStorage.getItem("clicksend_provider") as EmailProvider) || "gmail";
  });

  const [template, setTemplate] = useState<TemplateTypeNew | "">("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [detectedTags, setDetectedTags] = useState<string[]>([]);
  const [tagValues, setTagValues] = useState<Record<string, string>>({});
  const [isTemplateSelectOpen, setIsTemplateSelectOpen] = useState(false);
  const [isRecipientValid, setIsRecipientValid] = useState(true);

  const tagInputsRef = useRef<TagInputsHandle>(null);

  // Load stored tags on mount
  useEffect(() => {
    getStoredTags().then(setTagValues);
  }, []);

  // Parsing and Initial Packets
  const [packets, setPackets] = useState<JobPacket[]>([]);
  const [currentPacketIdx, setCurrentPacketIdx] = useState(0);

  useEffect(() => {
    if (rawText) {
      const foundPackets = JobParser.parse(rawText);
      setPackets(foundPackets);
      if (foundPackets.length > 0) {
        const p = foundPackets[0];
        if (p.email) setTo([p.email]);
        const newTags = { ...tagValues };
        if (p.role) newTags["role"] = p.role;
        if (p.company) newTags["company"] = p.company;
        setTagValues(newTags);
        setTemplate("job_apply_specific_role");
        const t = FULL_REGISTRY["job_apply_specific_role"];
        setSubject(t.draft.subject);
        setMessage(t.draft.body);
        setDetectedTags(extractTags(t.draft.subject + "\n" + t.draft.body));
      }
      setLoading(false);
      return;
    }

    if (initialEmail) {
      setTo([initialEmail]);
      setLoading(false);
      return;
    }
    setLoading(true);
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      chrome.storage.local.get(['clicksend_last_recipient', 'clicksend_last_cc', 'clicksend_last_bcc'], (result) => {
        if (result && result.clicksend_last_recipient) {
          const rec = result.clicksend_last_recipient;
          setTo(Array.isArray(rec) ? rec : [rec]);
        }
        if (result && Array.isArray(result.clicksend_last_cc)) setCc(result.clicksend_last_cc);
        if (result && Array.isArray(result.clicksend_last_bcc)) setBcc(result.clicksend_last_bcc);
        setLoading(false);
      });
    } else {
      const localTo = localStorage.getItem("clicksend_last_recipient");
      if (localTo) setTo([localTo]);
      setLoading(false);
    }
  }, [initialEmail, rawText, tagValues]); // Corrected dependencies

  const handlePacketSwitch = (idx: number) => {
    const p = packets[idx];
    if (!p) return;
    setCurrentPacketIdx(idx);

    // Update fields
    if (p.email) setTo([p.email]);
    const newTags = { ...tagValues };
    if (p.role) newTags["role"] = p.role;
    if (p.company) newTags["company"] = p.company;
    setTagValues(newTags);
  };

  useEffect(() => {
    if (to.length > 0) {
      if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
        chrome.storage.local.set({
          'clicksend_last_recipient': to,
          'clicksend_last_cc': cc,
          'clicksend_last_bcc': bcc
        });
      }
      localStorage.setItem("clicksend_last_recipient", to[0]); // Keep legacy compat for first
    }
  }, [to, cc, bcc]);

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
    const newValues = { ...tagValues, [tag]: value };
    setTagValues(newValues);

    // Persist to sync storage immediately (debounced implicitly by user typing)
    const tagsToSave: Record<string, string> = {};
    detectedTags.forEach(t => {
      if (newValues[t]) tagsToSave[t] = newValues[t];
    });
    setStoredTags(tagsToSave);
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

    const toStr = to.join(",");
    const ccStr = cc.join(",");
    const bccStr = bcc.join(",");

    if (provider === "gmail") {
      const params = new URLSearchParams();
      params.append("view", "cm");
      params.append("fs", "1");
      if (toStr) params.append("to", toStr);
      if (ccStr) params.append("cc", ccStr);
      if (bccStr) params.append("bcc", bccStr);
      if (finalSubject) params.append("su", finalSubject);
      if (finalMessage) params.append("body", finalMessage);
      window.open(`https://mail.google.com/mail/?${params.toString()}`, "_blank");
    } else if (provider === "outlook") {
      const url = `https://outlook.office.com/mail/deeplink/compose?to=${encode(toStr)}&cc=${encode(ccStr)}&bcc=${encode(bccStr)}&subject=${encode(finalSubject)}&body=${encode(finalMessage)}`;
      window.open(url, "_blank");
    } else if (provider === "yahoo") {
      const url = `https://compose.mail.yahoo.com/?to=${encode(toStr)}&cc=${encode(ccStr)}&bcc=${encode(bccStr)}&subject=${encode(finalSubject)}&body=${encode(finalMessage)}`;
      window.open(url, "_blank");
    } else {
      const url = `mailto:${encode(toStr)}?cc=${encode(ccStr)}&bcc=${encode(bccStr)}&subject=${encode(finalSubject)}&body=${encode(finalMessage)}`;
      window.open(url, "_self");
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {packets.length > 1 && (
        <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-xl mb-1 animate-in slide-in-from-top-2 duration-300">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">
              Multiple Jobs Detected
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Packet {currentPacketIdx + 1} of {packets.length}
            </span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => handlePacketSwitch(Math.max(0, currentPacketIdx - 1))}
              disabled={currentPacketIdx === 0}
              className="p-1.5 rounded-lg bg-white dark:bg-gray-800 border border-slate-200 dark:border-slate-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors"
            >
              <svg className="w-4 h-4 text-slate-600 dark:text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => handlePacketSwitch(Math.min(packets.length - 1, currentPacketIdx + 1))}
              disabled={currentPacketIdx === packets.length - 1}
              className="p-1.5 rounded-lg bg-white dark:bg-gray-800 border border-slate-200 dark:border-slate-700 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors"
            >
              <svg className="w-4 h-4 text-slate-600 dark:text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
      <EmailRecipientInput
        to={to}
        cc={cc}
        bcc={bcc}
        setTo={setTo}
        setCc={setCc}
        setBcc={setBcc}
        onValidationChange={setIsRecipientValid}
        loading={loading}
      />
      <NestedTemplateSelect
        value={template}
        onChange={handleTemplateChange}
        isOpen={isTemplateSelectOpen}
        onOpenChange={setIsTemplateSelectOpen}
      />

      <TagInputs
        ref={tagInputsRef}
        tags={detectedTags}
        values={tagValues}
        onChange={handleTagChange}
        hideFilled={isTemplateSelectOpen}
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
          disabled={!isRecipientValid || to.length === 0 || message.length < 1 || subject.length < 1 || template.length < 1 || hasTagsLeft}
          theme={theme}
        />
      </div>
    </div>
  );
}
