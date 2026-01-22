import type { MailDraft, TemplateType } from "./types";

export const templates: Record<
  Exclude<TemplateType, "custom">,
  Omit<MailDraft, "to">
> = {
  job_application: {
    subject: "Application for [Role] - [Your Name]",
    body: "Hi [Hiring Manager],\n\nI am writing to express my interest in the [Role] position at [Company].\n\nI believe my skills in [Your Skills] make me a strong candidate.\n\nAttached is my CV for your review.\n\nBest regards,\n[Your Name]",
  },
  follow_up: {
    subject: "Following up: [Previous Subject]",
    body: "Hi,\n\nI wanted to quickly follow up on my previous email regarding [Subject].\n\nLooking forward to hearing from you.\n\nBest,\n[Your Name]",
  },
  cold_outreach: {
    subject: "Partnership Opportunity",
    body: "Hi,\n\nI came across [Company] and was impressed by [Something].\n\nI effectively help companies like yours to [Value Proposition].\n\nWould you be open to a quick chat?\n\nCheers,\n[Your Name]",
  },
};
