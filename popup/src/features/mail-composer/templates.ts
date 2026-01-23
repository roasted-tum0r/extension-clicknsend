import type { MailDraft, TemplateCategory, TemplateType, TemplateTypeNew } from "./types";

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
export interface TemplateMeta {
  label: string;              // Human readable
  description?: string;       // Tooltip / preview
  category: TemplateCategory; // Sidebar grouping
}

export interface StaticTemplate {
  meta: TemplateMeta;
  draft: Omit<MailDraft, "to">;
}
export type TemplateRegistry = Record<
  Exclude<TemplateTypeNew, "custom">,
  StaticTemplate
>;

// export const templatesNew: TemplateRegistry = {
//   /* =====================================================
//      JOB / CAREER
//   ====================================================== */

//   job_apply_specific_role: {
//     meta: {
//       label: "Apply for a specific role",
//       description: "Formal application for a known job opening",
//       category: "job_career",
//     },
//     draft: {
//       subject: "Application for {{role}} – {{your_name}}",
//       body: `Hi {{hiring_manager}},

// I’m writing to apply for the {{role}} position at {{company}}.

// With {{years_experience}} years of experience in {{skills}}, I believe I can contribute effectively to your team.

// I’ve attached my resume for your review and would welcome the opportunity to discuss this further.

// Best regards,
// {{your_name}}`,
//     },
//   },

//   job_apply_cold: {
//     meta: {
//       label: "Cold job application",
//       description: "Applying without a listed opening",
//       category: "job_career",
//     },
//     draft: {
//       subject: "Exploring opportunities at {{company}}",
//       body: `Hi {{recipient_name}},

// I hope you’re doing well. I’m reaching out to explore potential opportunities at {{company}}.

// I work as a {{role}} with experience in {{skills}} and would love to contribute if there’s a relevant opening now or in the future.

// Happy to share my resume or have a quick conversation.

// Best,
// {{your_name}}`,
//     },
//   },

//   interview_thank_you: {
//     meta: {
//       label: "Thank you after interview",
//       description: "Send within 24 hours after interview",
//       category: "job_career",
//     },
//     draft: {
//       subject: "Thank you for the interview – {{role}}",
//       body: `Hi {{interviewer_name}},

// Thank you for taking the time to speak with me about the {{role}} position.

// I enjoyed learning more about {{team_or_product}} and the challenges you’re solving. Our conversation reinforced my interest in the role.

// Looking forward to next steps.

// Best regards,
// {{your_name}}`,
//     },
//   },

//   /* =====================================================
//      SALES / BUSINESS
//   ====================================================== */

//   sales_cold_intro: {
//     meta: {
//       label: "Cold sales introduction",
//       description: "First-touch cold email",
//       category: "sales_business",
//     },
//     draft: {
//       subject: "Quick question about {{company}}",
//       body: `Hi {{recipient_name}},

// I came across {{company}} and noticed {{personalized_observation}}.

// We help teams like yours {{value_proposition}}. I was wondering if this is something you’re currently exploring.

// Open to a quick chat?

// Best,
// {{your_name}}`,
//     },
//   },

//   sales_followup_first: {
//     meta: {
//       label: "First sales follow-up",
//       description: "Gentle follow-up after no response",
//       category: "sales_business",
//     },
//     draft: {
//       subject: "Following up on my note",
//       body: `Hi {{recipient_name}},

// Just wanted to follow up on my previous email in case it got buried.

// Happy to share more context or step aside if this isn’t a priority right now.

// Thanks,
// {{your_name}}`,
//     },
//   },

//   /* =====================================================
//      CUSTOMER SUPPORT
//   ====================================================== */

//   support_ticket_received: {
//     meta: {
//       label: "Ticket received acknowledgment",
//       description: "Confirm issue receipt",
//       category: "customer_support",
//     },
//     draft: {
//       subject: "We’ve received your request (Ticket #{{ticket_id}})",
//       body: `Hi {{customer_name}},

// Thanks for reaching out. We’ve received your request and our support team is reviewing it.

// Ticket ID: {{ticket_id}}

// We’ll keep you updated shortly.

// Best regards,
// {{company_support_team}}`,
//     },
//   },

//   support_resolved: {
//     meta: {
//       label: "Issue resolved confirmation",
//       description: "Notify customer issue is fixed",
//       category: "customer_support",
//     },
//     draft: {
//       subject: "Your issue has been resolved",
//       body: `Hi {{customer_name}},

// We’re happy to let you know that your issue has been resolved.

// If you notice anything else or have further questions, feel free to reply to this email.

// Thanks for your patience,
// {{company_support_team}}`,
//     },
//   },

//   /* =====================================================
//      MISC
//   ====================================================== */

//   generic_thank_you: {
//     meta: {
//       label: "Thank you (generic)",
//       description: "Simple appreciation email",
//       category: "misc",
//     },
//     draft: {
//       subject: "Thank you",
//       body: `Hi {{recipient_name}},

// Just wanted to say thank you for {{reason}}.

// Really appreciate it.

// Best,
// {{your_name}}`,
//     },
//   },
// };
