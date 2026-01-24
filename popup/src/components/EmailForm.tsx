import { useEffect, useState } from "react";
import NestedTemplateSelect from "./NestedTemplateSelect";
import MessageBox from "./MessageBox";
import SendButton from "./SendButton";
import { Input } from "./Input";
import ProviderSelect from "./ProviderSelect";
import type { EmailProvider } from "./ProviderSelect";
import { FULL_REGISTRY } from "../features/mail-composer/templates";
import type { TemplateTypeNew } from "../features/mail-composer/types";

export default function EmailForm({ initialEmail }: { initialEmail?: string }) {
  console.log("Initial email:", initialEmail);

  // Recipient state
  const [recipient, setRecipient] = useState(initialEmail || "");
  const [loading, setLoading] = useState(!initialEmail); // Loading state if fetching from storage

  // Provider state
  const [provider, setProvider] = useState<EmailProvider>(() => {
    return (localStorage.getItem("clicksend_provider") as EmailProvider) || "gmail";
  });

  const [template, setTemplate] = useState<TemplateTypeNew | "">("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // Load recipient priority... (rest of useEffect remains similar)
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

    if (newTemplate === "custom") {
      setSubject("");
      setMessage("");
    } else if (newTemplate && newTemplate in FULL_REGISTRY) {
      const t = FULL_REGISTRY[newTemplate as Exclude<TemplateTypeNew, "custom">];
      setSubject(t.draft.subject);
      setMessage(t.draft.body);
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
      const url = `https://outlook.office.com/mail/deeplink/compose?to=${encode(recipient)}&subject=${encode(subject)}&body=${encode(message)}`;
      window.open(url, "_blank");
    }
    else if (provider === "yahoo") {
      const url = `https://compose.mail.yahoo.com/?to=${encode(recipient)}&subject=${encode(subject)}&body=${encode(message)}`;
      window.open(url, "_blank");
    }
    else {
      const url = `mailto:${encode(recipient)}?subject=${encode(subject)}&body=${encode(message)}`;
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
