import type { MailDraft, TemplateCategory, TemplateType, TemplateTypeNew } from "./types";
import { jobCareerTemplates } from "../templates/job-career.templates";
import { salesBusinessTemplates } from "../templates/sales-business.templates";
import { customerSupportTemplates } from "../templates/customer-support.templates";
import { productSaasTemplates } from "../templates/product-saas.templates";
import { hrInternalTemplates } from "../templates/hr-internal.templates";
import { meetingTemplates } from "../templates/meetings.templates";
import { personalProfessionalTemplates } from "../templates/personal-professional.templates";
import { legalAdminTemplates } from "../templates/legal-admin.templates";
import { marketingGrowthTemplates } from "../templates/marketing-growth.templates";
import { financeOperationsTemplates } from "../templates/finance-operations.templates";
import { educationTemplates } from "../templates/education.templates";
import { miscTemplates } from "../templates/misc.templates";

/**
 * Flat Registry for O(1) lookups by Template ID.
 * Use this when you already have the specific template key.
 */
export const FULL_REGISTRY: Record<
  Exclude<TemplateTypeNew, "custom">,
  StaticTemplate
> = {
  ...jobCareerTemplates,
  ...salesBusinessTemplates,
  ...customerSupportTemplates,
  ...productSaasTemplates,
  ...hrInternalTemplates,
  ...meetingTemplates,
  ...personalProfessionalTemplates,
  ...legalAdminTemplates,
  ...marketingGrowthTemplates,
  ...financeOperationsTemplates,
  ...educationTemplates,
  ...miscTemplates,
};

/**
 * Nested Library for Tree/Sidebar UI navigation.
 * Root -> Category (Branch) -> Template (Leaf).
 */
export const TEMPLATE_LIBRARY: Record<
  TemplateCategory,
  Record<string, StaticTemplate>
> = {
  job_career: jobCareerTemplates,
  sales_business: salesBusinessTemplates,
  customer_support: customerSupportTemplates,
  product_saas: productSaasTemplates,
  hr_internal: hrInternalTemplates,
  meetings: meetingTemplates,
  personal_professional: personalProfessionalTemplates,
  legal_admin: legalAdminTemplates,
  marketing_growth: marketingGrowthTemplates,
  finance_operations: financeOperationsTemplates,
  education: educationTemplates,
  misc: miscTemplates,
};

/**
 * Human-readable labels for template categories.
 */
export const CATEGORY_LABELS: Record<TemplateCategory, string> = {
  job_career: "Job & Career",
  sales_business: "Sales & Business",
  customer_support: "Customer Support",
  product_saas: "Product & SaaS",
  hr_internal: "HR & Internal",
  meetings: "Meetings & Scheduling",
  personal_professional: "Personal & Professional",
  legal_admin: "Legal & Admin",
  marketing_growth: "Marketing & Growth",
  finance_operations: "Finance & Operations",
  education: "Education & Learning",
  misc: "Miscellaneous",
};

// --- Interfaces (Re-exported for convenience) ---

export interface TemplateMeta {
  label: string;
  description?: string;
  category: TemplateCategory;
  isPopular?: boolean; // Highlight common/famous templates
}

export interface StaticTemplate {
  meta: TemplateMeta;
  draft: {
    subject: string;
    body: string;
  };
}
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