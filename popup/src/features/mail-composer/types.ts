export type TemplateType = "job_application" | "follow_up" | "cold_outreach" | "custom";

export interface MailDraft {
  to: string;
  subject: string;
  body: string;
}
