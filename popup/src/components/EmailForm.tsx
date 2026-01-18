import { useEffect, useState } from "react";
import TemplateSelect from "./TemplateSelect";
import MessageBox from "./MessageBox";
import SendButton from "./SendButton";
import { Input } from "./Input";
import { templates } from "../features/mail-composer/templates";
import type { TemplateType } from "../features/mail-composer/types";

export default function EmailForm() {
  const [recipient, setRecipient] = useState("");
  const [template, setTemplate] = useState<TemplateType | "">("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.local) {
      chrome.storage.local.get(["selectedEmail"], (result) => {
        if (result.selectedEmail) {
          setRecipient(result.selectedEmail as string);
        }
      });
    }
  }, []);

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
    const params = new URLSearchParams();
    params.append("view", "cm");
    params.append("fs", "1");
    if (recipient) params.append("to", recipient);
    if (subject) params.append("su", subject);
    if (message) params.append("body", message);

    const url = `https://mail.google.com/mail/?${params.toString()}`;
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col gap-4">
      <Input
        label="Recipient"
        value={recipient}
        onChange={setRecipient}
        placeholder="recipient@example.com"
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

      <SendButton onClick={handleSend} />
    </div>
  );
}
