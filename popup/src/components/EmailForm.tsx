import { useEffect, useState } from "react";
import TemplateSelect from "./TemplateSelect";
import MessageBox from "./MessageBox";
import SendButton from "./SendButton";
import { Input } from "./Input";
import ProviderSelect from "./ProviderSelect";
import type { EmailProvider } from "./ProviderSelect";
import { templates } from "../features/mail-composer/templates";
import type { TemplateType } from "../features/mail-composer/types";

export default function EmailForm({ initialEmail }: { initialEmail?: string }) {
  console.log("Initial email:", initialEmail);

  // Recipient state
  const [recipient, setRecipient] = useState(initialEmail || "");
  const [loading, setLoading] = useState(!initialEmail); // Loading state if fetching from storage

  // Provider state (still localStorage is fine for preferences, or move to chrome.storage too? Let's keep provider simple for now or sync both)
  const [provider, setProvider] = useState<EmailProvider>(() => {
    return (localStorage.getItem("clicksend_provider") as EmailProvider) || "gmail";
  });

  const [template, setTemplate] = useState<TemplateType | "">("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // Load recipient priority: Props > Chrome Storage > Local Storage
  useEffect(() => {
    // 1. If props provided (Injected mode), it wins immediately.
    if (initialEmail) {
      setRecipient(initialEmail);
      setLoading(false);
      return;
    }

    // 2. If no props (Icon mode), try Chrome Storage (freshly saved context menu selection)
    setLoading(true);
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
      chrome.storage.local.get(['clicksend_last_recipient'], (result) => {
        if (result && result.clicksend_last_recipient) {
          console.log("Loaded from Chrome Storage:", result.clicksend_last_recipient);
          setRecipient(result.clicksend_last_recipient as string);
          setLoading(false);
        } else {
          // 3. Fallback to LocalStorage (last typed in popup)
          const local = localStorage.getItem("clicksend_last_recipient");
          if (local) {
            console.log("Loaded from LocalStorage:", local);
            setRecipient(local);
          }
          setLoading(false);
        }
      });
    } else {
      // Dev fallback
      const local = localStorage.getItem("clicksend_last_recipient");
      if (local) setRecipient(local);
      setLoading(false);
    }
  }, [initialEmail]);

  // Persist recipient changes to BOTH storages
  useEffect(() => {
    if (recipient) {
      if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
        chrome.storage.local.set({ 'clicksend_last_recipient': recipient });
      }
      localStorage.setItem("clicksend_last_recipient", recipient);
    }
  }, [recipient]);

  // Persist provider changes
  useEffect(() => {
    localStorage.setItem("clicksend_provider", provider);
  }, [provider]);

  const handleTemplateChange = (val: string) => {
    const newTemplate = val as TemplateType;
    setTemplate(newTemplate);

    if (newTemplate === "custom") {
      setSubject("");
      setMessage("");
    } else if (newTemplate && newTemplate in templates) {
      const t = templates[newTemplate as Exclude<TemplateType, "custom">];
      setSubject(t.subject);
      setMessage(t.body);
    }
  };

  const handleSend = () => {
    const encode = encodeURIComponent;

    if (provider === "gmail") {
      const params = new URLSearchParams();
      params.append("view", "cm");
      params.append("fs", "1");
      if (recipient) params.append("to", recipient);
      if (subject) params.append("su", subject);
      if (message) params.append("body", message);
      window.open(`https://mail.google.com/mail/?${params.toString()}`, "_blank");
    }
    else if (provider === "outlook") {
      // Outlook Web Deep Link
      const url = `https://outlook.office.com/mail/deeplink/compose?to=${encode(recipient)}&subject=${encode(subject)}&body=${encode(message)}`;
      window.open(url, "_blank");
    }
    else if (provider === "yahoo") {
      const url = `https://compose.mail.yahoo.com/?to=${encode(recipient)}&subject=${encode(subject)}&body=${encode(message)}`;
      window.open(url, "_blank");
    }
    else {
      // Default mailto
      const url = `mailto:${encode(recipient)}?subject=${encode(subject)}&body=${encode(message)}`;
      window.open(url, "_self"); // mailto usually handled by system
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

      <TemplateSelect value={template} onChange={handleTemplateChange} />

      <Input
        label="Subject"
        value={subject}
        onChange={setSubject}
        placeholder="Email subject..."
      />

      <MessageBox value={message} onChange={setMessage} />

      <div className="flex gap-3 mt-2 items-center">
        <ProviderSelect value={provider} onChange={setProvider} />
        <SendButton
          onClick={handleSend}
          provider={provider}
          disabled={!recipient}
        />
      </div>
    </div>
  );
}
