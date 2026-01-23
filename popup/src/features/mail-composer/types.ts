export type TemplateType = "job_application" | "follow_up" | "cold_outreach" | "custom";

/* ================================
   Core Mail Model
================================ */

export interface MailDraft {
   to: string;
   subject: string;
   body: string;
}

/* ================================
   High-Level Categories
   (Used for sidebar / tree UI)
================================ */

export type TemplateCategory =
   | "job_career"
   | "sales_business"
   | "customer_support"
   | "product_saas"
   | "hr_internal"
   | "meetings"
   | "personal_professional"
   | "legal_admin"
   | "marketing_growth"
   | "finance_operations"
   | "education"
   | "misc";

/* ================================
   1. Job, Hiring & Career
================================ */

export type JobCareerTemplate =
   // Applications
   | "job_apply_specific_role"
   | "job_apply_cold"
   | "job_apply_referral"
   | "job_apply_internship"
   | "job_apply_freelance"
   | "job_apply_remote"
   | "job_apply_career_page_followup"

   // Recruiter & HR
   | "recruiter_initial_outreach"
   | "recruiter_response"
   | "recruiter_open_positions"
   | "recruiter_availability"
   | "recruiter_salary_discussion"
   | "recruiter_location_discussion"

   // Interview
   | "interview_confirmation"
   | "interview_reschedule"
   | "interview_thank_you"
   | "interview_followup"
   | "interview_feedback_request"
   | "offer_followup"
   | "offer_acceptance"
   | "offer_rejection"

   // Networking
   | "networking_cold"
   | "networking_alumni"
   | "networking_mutual_intro"
   | "networking_referral_request"
   | "networking_referral_thanks"
   | "networking_event_followup";

/* ================================
   2. Sales, Business & Revenue
================================ */

export type SalesBusinessTemplate =
   // Cold Outreach
   | "sales_cold_intro"
   | "sales_cold_soft_cta"
   | "sales_cold_direct_cta"
   | "sales_problem_solution"
   | "sales_personalized_followup"

   // Follow-ups
   | "sales_followup_first"
   | "sales_followup_second"
   | "sales_followup_final"
   | "sales_checking_in"
   | "sales_no_response"
   | "sales_post_demo"

   // Proposals & Pricing
   | "proposal_send"
   | "pricing_custom"
   | "pricing_quote_followup"
   | "pricing_negotiation"
   | "pricing_discount"
   | "pricing_renewal"

   // Partnerships
   | "partnership_proposal"
   | "collaboration_request"
   | "affiliate_request"
   | "influencer_outreach"
   | "sponsorship_proposal"
   | "co_marketing";

/* ================================
   3. Customer Support & Service
================================ */

export type CustomerSupportTemplate =
   // Support
   | "support_ticket_received"
   | "support_investigating"
   | "support_request_details"
   | "support_resolved"
   | "support_escalation"
   | "support_apology"

   // Billing
   | "billing_payment_failed"
   | "billing_invoice"
   | "billing_refund_initiated"
   | "billing_refund_completed"
   | "billing_subscription_cancelled"
   | "billing_subscription_renewed"

   // Incident
   | "incident_outage"
   | "incident_partial_outage"
   | "incident_resolved"
   | "incident_maintenance";

/* ================================
   4. Product, SaaS & App
================================ */

export type ProductSaasTemplate =
   // Onboarding
   | "onboarding_welcome"
   | "onboarding_setup"
   | "onboarding_verification"
   | "onboarding_first_login"
   | "onboarding_feature_walkthrough"
   | "trial_expiry"

   // Updates
   | "product_new_feature"
   | "product_improvement"
   | "product_bugfix"
   | "product_release_notes"
   | "product_deprecation"

   // Engagement
   | "engagement_usage_reminder"
   | "engagement_reactivate"
   | "engagement_inactive"
   | "engagement_upgrade"
   | "engagement_downgrade";

/* ================================
   5. HR, Workplace & Internal
================================ */

export type HRInternalTemplate =
   // Leave & Attendance
   | "leave_sick"
   | "leave_planned"
   | "leave_emergency"
   | "leave_wfh"
   | "attendance_late"

   // Status & Reporting
   | "status_daily"
   | "status_weekly"
   | "status_task_done"
   | "status_delay"
   | "status_blocker"

   // Employment Lifecycle
   | "employment_offer_letter"
   | "employment_joining_confirmation"
   | "employment_onboarding"
   | "employment_resignation"
   | "employment_exit"
   | "employment_knowledge_transfer";

/* ================================
   6. Meetings & Scheduling
================================ */

export type MeetingTemplate =
   | "meeting_request"
   | "meeting_calendar_followup"
   | "meeting_agenda"
   | "meeting_reminder"
   | "meeting_reschedule"
   | "meeting_cancel"
   | "meeting_delay"
   | "meeting_summary"
   | "meeting_action_items"
   | "meeting_next_steps";

/* ================================
   7. Personal & Professional
================================ */

export type PersonalProfessionalTemplate =
   // Introductions
   | "intro_self"
   | "intro_professional"
   | "intro_two_people"
   | "intro_new_team"

   // Follow-ups
   | "followup_after_call"
   | "followup_after_meeting"
   | "followup_after_event"
   | "followup_gentle_reminder"

   // Requests
   | "request_information"
   | "request_document"
   | "request_approval"
   | "request_clarification";

/* ================================
   8. Legal, Formal & Admin
================================ */

export type LegalAdminTemplate =
   | "permission_consent"
   | "permission_authorization"
   | "nda_send"
   | "nda_followup"
   | "complaint_service"
   | "complaint_product"
   | "complaint_escalation"
   | "legal_notice_response"
   | "document_certificate"
   | "document_invoice"
   | "document_contract"
   | "document_contract_clarification";

/* ================================
   9. Marketing, Growth & Community
================================ */

export type MarketingTemplate =
   | "campaign_promotion"
   | "campaign_offer"
   | "campaign_discount"
   | "campaign_seasonal"
   | "newsletter_weekly"
   | "newsletter_monthly"
   | "newsletter_founder_note"
   | "newsletter_community"
   | "event_invite"
   | "event_webinar"
   | "event_reminder"
   | "event_thank_you";

/* ================================
   10. Finance & Operations
================================ */

export type FinanceOperationsTemplate =
   | "payment_reminder"
   | "payment_overdue"
   | "payment_confirmation"
   | "procurement_vendor_inquiry"
   | "procurement_quotation"
   | "procurement_purchase_confirmation"
   | "operations_service_request"
   | "operations_sla_update"
   | "operations_vendor_followup";

/* ================================
   11. Education & Learning
================================ */

export type EducationTemplate =
   | "academic_admission_inquiry"
   | "academic_course_enrollment"
   | "academic_assignment_submission"
   | "academic_deadline_extension"
   | "training_invitation"
   | "training_reminder"
   | "training_completion_certificate";

/* ================================
   12. Miscellaneous
================================ */

export type MiscTemplate =
   | "generic_thank_you"
   | "generic_apology"
   | "generic_clarification"
   | "generic_reminder"
   | "generic_appreciation"
   | "generic_farewell";

/* ================================
   Final Template Key (USE THIS)
================================ */


export type TemplateTypeNew =
   | JobCareerTemplate
   | SalesBusinessTemplate
   | CustomerSupportTemplate
   | ProductSaasTemplate
   | HRInternalTemplate
   | MeetingTemplate
   | PersonalProfessionalTemplate
   | LegalAdminTemplate
   | MarketingTemplate
   | FinanceOperationsTemplate
   | EducationTemplate
   | MiscTemplate
   | "custom";

