import { useEffect, useState, useRef } from "react";
import NestedTemplateSelect from "./NestedTemplateSelect";
import { FULL_REGISTRY } from "../features/mail-composer/templates";
import type { TemplateTypeNew } from "../features/mail-composer/types";
import { extractTags, replaceTags, hasUnfilledTags } from "../features/mail-composer/tag-utils";
import { getStoredTags, setStoredTags } from "../features/mail-composer/storage";
import UnifiedSendButton, { type EmailProvider } from "./UnifiedSendButton";
import TagInputs, { type TagInputsHandle } from "./TagInputs";
import TokenizedBlockEditor from "./TokenizedBlockEditor";
import EmailRecipientInput from "./EmailRecipientInput";
import { JobParser, type JobPacket } from "../utils/JobParser";
import { type ThemeMode } from "../constants/theme";

export default function EmailForm({ initialEmail, rawText, theme, initialTemplate }: { initialEmail?: string, rawText?: string, theme: ThemeMode, initialTemplate?: TemplateTypeNew }) {

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
  const [activeTab, setActiveTab] = useState<"library" | "custom">("library");
  const [storedLibraryDraft, setStoredLibraryDraft] = useState({ subject: "", message: "", template: "" as TemplateTypeNew | "" });

  const tagInputsRef = useRef<TagInputsHandle>(null);

  // Load stored tags on mount
  useEffect(() => {
    getStoredTags().then(setTagValues);
  }, []);

  // Parsing and Initial Packets
  const [packets, setPackets] = useState<JobPacket[]>([]);
  const [currentPacketIdx, setCurrentPacketIdx] = useState(0);

  // Parsing and Initial Packets - Run ONLY on mount or when rawText changes
  useEffect(() => {
    let toSet: string[] = [];
    let tagsSet: Record<string, string> = { ...tagValues };
    let tempSet: TemplateTypeNew | "" = "";
    let subSet = "";
    let msgSet = "";

    // 1. Handle explicit recipient override
    if (initialEmail) {
      toSet = [initialEmail];
    }

    // 2. Handle template or raw text initialization
    if (initialTemplate) {
      tempSet = initialTemplate;
      if (initialTemplate !== "custom") {
        const t = FULL_REGISTRY[initialTemplate as Exclude<TemplateTypeNew, "custom">];
        if (t) {
          subSet = t.draft.subject;
          msgSet = t.draft.body;
        }
      }
    } else if (rawText) {
      const foundPackets = JobParser.parse(rawText);
      setPackets(foundPackets);
      if (foundPackets.length > 0) {
        const p = foundPackets[0];
        if (p.email) toSet = [p.email];
        if (p.role) tagsSet["role"] = p.role;
        if (p.company) tagsSet["company"] = p.company;
        tempSet = "job_apply_specific_role";
        const t = FULL_REGISTRY[tempSet];
        subSet = t.draft.subject;
        msgSet = t.draft.body;
      }
    } else if (initialEmail && toSet.length === 0) {
      // Fallback if not already set by packets
      toSet = [initialEmail];
    }



    // Apply defaults if we have something
    if (toSet.length > 0) setTo(toSet);
    if (tempSet) {
      setTemplate(tempSet);
      setSubject(subSet);
      setMessage(msgSet);
      setDetectedTags(extractTags(subSet + "\n" + msgSet));
    }
    setTagValues(tagsSet);
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rawText, initialEmail, initialTemplate]); // Added initialTemplate


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

    if (newTemplate && newTemplate in FULL_REGISTRY) {
      const t = FULL_REGISTRY[newTemplate as Exclude<TemplateTypeNew, "custom">];
      newSubject = t.draft.subject;
      newMessage = t.draft.body;
    }

    setSubject(newSubject);
    setMessage(newMessage);
    const tags = extractTags(newSubject + "\n" + newMessage);
    setDetectedTags(tags);
  };

  const handleTabToggle = (tab: "library" | "custom") => {
    if (tab === activeTab) return;

    if (tab === "custom") {
      // Transitioning to Custom: Store current library state and clear
      setStoredLibraryDraft({ subject, message, template: template as TemplateTypeNew | "" });
      setSubject("");
      setMessage("");
      setTemplate("custom");
    } else {
      // Transitioning back to Library: Restore stored state
      setSubject(storedLibraryDraft.subject);
      setMessage(storedLibraryDraft.message);
      setTemplate(storedLibraryDraft.template);
    }
    setActiveTab(tab);
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
      <div className="flex flex-col gap-2">
        <label className="text-[13px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest px-1">
          Compose Method
        </label>
        <div className="flex p-1 bg-slate-100 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800">
          <button
            onClick={() => handleTabToggle("library")}
            className={`flex-1 flex items-center justify-center gap-2 py-2 text-xs font-bold rounded-lg transition-all duration-200 ${activeTab === "library"
              ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-sm shadow-blue-500/10 border border-slate-200 dark:border-slate-700"
              : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
              }`}
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Template Library
          </button>
          <button
            onClick={() => handleTabToggle("custom")}
            className={`flex-1 flex items-center justify-center gap-2 py-2 text-xs font-bold rounded-lg transition-all duration-200 ${activeTab === "custom"
              ? "bg-white dark:bg-slate-800 text-purple-600 dark:text-purple-400 shadow-sm shadow-purple-500/10 border border-slate-200 dark:border-slate-700"
              : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
              }`}
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Custom Draft
          </button>
        </div>
      </div>

      {activeTab === "library" ? (
        <NestedTemplateSelect
          value={template}
          onChange={handleTemplateChange}
          isOpen={isTemplateSelectOpen}
          onOpenChange={setIsTemplateSelectOpen}
        />
      ) : (
        <div className="p-4 rounded-xl bg-purple-50/50 dark:bg-purple-900/5 border border-purple-100 dark:border-purple-900/20 animate-in fade-in slide-in-from-top-1 duration-300">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">Blank Slate Active</h4>
              <p className="text-[11px] text-slate-500">Perfect for quick, one-off specialized responses.</p>
            </div>
          </div>
        </div>
      )}

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

      <div className="flex mt-2 items-center">
        <UnifiedSendButton
          provider={provider}
          onProviderChange={setProvider}
          onSend={handleSend}
          disabled={!isRecipientValid || (to.length === 0 && !processedMessage) || message.length < 1 || subject.length < 1 || (activeTab === "library" && template.length < 1) || hasTagsLeft}
          theme={theme}
        />
      </div>

    </div>
  );
}
