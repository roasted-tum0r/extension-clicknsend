// sales-business.templates.ts

import type { SalesBusinessTemplate } from "../mail-composer/types";
import type { MailDraft } from "../mail-composer/types";


export const salesBusinessTemplates: Record<
    SalesBusinessTemplate,
    Omit<MailDraft, "to">
> = {
    /* ================================
       Cold Outreach
    ================================ */

    sales_cold_intro: {
        subject: "Quick question about {{company}}",
        body:
            "Hi {{recipient_name}},\n\n" +
            "I came across {{company}} and noticed {{personalized_observation}}.\n\n" +
            "We work with teams like yours to help {{value_proposition}}.\n\n" +
            "Would you be open to a brief conversation to see if this is relevant?\n\n" +
            "Best regards,\n" +
            "{{your_name}}",
    },

    sales_cold_soft_cta: {
        subject: "Thought this might be useful",
        body:
            "Hi {{recipient_name}},\n\n" +
            "I wanted to share a quick note in case this is helpful.\n\n" +
            "We support teams in {{industry_or_role}} by helping them {{value_proposition}}.\n\n" +
            "No rush at all — happy to connect if and when it makes sense.\n\n" +
            "Best regards,\n" +
            "{{your_name}}",
    },

    sales_cold_direct_cta: {
        subject: "Let’s discuss {{specific_problem}}",
        body:
            "Hi {{recipient_name}},\n\n" +
            "I’m reaching out because we help companies like {{company}} address {{specific_problem}}.\n\n" +
            "If this is something you’re currently evaluating, I’d appreciate the chance to explain how we do it.\n\n" +
            "Are you available for a short call this week?\n\n" +
            "Best regards,\n" +
            "{{your_name}}",
    },

    sales_problem_solution: {
        subject: "Reducing {{problem_area}} at {{company}}",
        body:
            "Hi {{recipient_name}},\n\n" +
            "Many teams we work with struggle with {{problem_area}}.\n\n" +
            "We’ve helped similar companies improve this by {{solution_approach}}.\n\n" +
            "If this resonates, I’d be glad to share a few examples.\n\n" +
            "Best regards,\n" +
            "{{your_name}}",
    },

    sales_personalized_followup: {
        subject: "Following up on my note",
        body:
            "Hi {{recipient_name}},\n\n" +
            "I wanted to follow up on my earlier message regarding {{topic_or_problem}}.\n\n" +
            "Let me know if this is something worth exploring or if I should reconnect at a later time.\n\n" +
            "Best regards,\n" +
            "{{your_name}}",
    },

    /* ================================
       Follow-ups
    ================================ */

    sales_followup_first: {
        subject: "Quick follow-up",
        body:
            "Hi {{recipient_name}},\n\n" +
            "Just following up on my previous email in case it got missed.\n\n" +
            "Happy to provide more context or answer any questions.\n\n" +
            "Best regards,\n" +
            "{{your_name}}",
    },

    sales_followup_second: {
        subject: "Checking back in",
        body:
            "Hi {{recipient_name}},\n\n" +
            "I wanted to check back in regarding my earlier note.\n\n" +
            "Please let me know if this is a priority right now or if there’s a better time to reconnect.\n\n" +
            "Best regards,\n" +
            "{{your_name}}",
    },

    sales_followup_final: {
        subject: "Closing the loop",
        body:
            "Hi {{recipient_name}},\n\n" +
            "I haven’t heard back, so I’ll assume now isn’t the right time.\n\n" +
            "Feel free to reach out in the future if this becomes relevant.\n\n" +
            "Best regards,\n" +
            "{{your_name}}",
    },

    sales_checking_in: {
        subject: "Checking in",
        body:
            "Hi {{recipient_name}},\n\n" +
            "Just checking in to see if there have been any updates since we last connected.\n\n" +
            "Happy to continue the conversation if useful.\n\n" +
            "Best regards,\n" +
            "{{your_name}}",
    },

    sales_no_response: {
        subject: "Following up one last time",
        body:
            "Hi {{recipient_name}},\n\n" +
            "I wanted to follow up once more regarding {{topic}}.\n\n" +
            "If this isn’t a fit right now, no worries at all — just wanted to close the loop.\n\n" +
            "Best regards,\n" +
            "{{your_name}}",
    },

    sales_post_demo: {
        subject: "Thanks for your time today",
        body:
            "Hi {{recipient_name}},\n\n" +
            "Thank you for taking the time to attend the demo today.\n\n" +
            "As discussed, we believe {{product_or_solution}} can help with {{key_benefit}}.\n\n" +
            "Please let me know if you have any questions or would like to discuss next steps.\n\n" +
            "Best regards,\n" +
            "{{your_name}}",
    },

    /* ================================
       Proposals & Pricing
    ================================ */

    proposal_send: {
        subject: "Proposal for {{project_or_scope}}",
        body:
            "Hi {{recipient_name}},\n\n" +
            "As discussed, please find attached the proposal for {{project_or_scope}}.\n\n" +
            "I’ve outlined the scope, timelines, and next steps for your review.\n\n" +
            "Happy to walk through it together if helpful.\n\n" +
            "Best regards,\n" +
            "{{your_name}}",
    },

    pricing_custom: {
        subject: "Custom pricing discussion",
        body:
            "Hi {{recipient_name}},\n\n" +
            "Based on your requirements, I’ve put together a custom pricing approach.\n\n" +
            "I’d be glad to walk through the details and adjust as needed.\n\n" +
            "Best regards,\n" +
            "{{your_name}}",
    },

    pricing_quote_followup: {
        subject: "Following up on pricing quote",
        body:
            "Hi {{recipient_name}},\n\n" +
            "I wanted to follow up on the pricing quote shared earlier.\n\n" +
            "Please let me know if you have any questions or need additional information.\n\n" +
            "Best regards,\n" +
            "{{your_name}}",
    },

    pricing_negotiation: {
        subject: "Pricing discussion",
        body:
            "Hi {{recipient_name}},\n\n" +
            "Thank you for sharing your thoughts on pricing.\n\n" +
            "I’m open to discussing options that align with your budget and requirements.\n\n" +
            "Best regards,\n" +
            "{{your_name}}",
    },

    pricing_discount: {
        subject: "Updated pricing details",
        body:
            "Hi {{recipient_name}},\n\n" +
            "As discussed, I’ve applied an updated pricing structure reflecting the agreed discount.\n\n" +
            "Please let me know if everything looks good from your end.\n\n" +
            "Best regards,\n" +
            "{{your_name}}",
    },

    pricing_renewal: {
        subject: "Upcoming renewal discussion",
        body:
            "Hi {{recipient_name}},\n\n" +
            "I wanted to reach out regarding the upcoming renewal for {{product_or_service}}.\n\n" +
            "Happy to review usage, value, and next steps together.\n\n" +
            "Best regards,\n" +
            "{{your_name}}",
    },

    /* ================================
       Partnerships
    ================================ */

    partnership_proposal: {
        subject: "Partnership opportunity",
        body:
            "Hi {{recipient_name}},\n\n" +
            "I’d like to explore a potential partnership between {{your_company}} and {{company}}.\n\n" +
            "I believe there may be strong alignment in how we serve our customers.\n\n" +
            "Let me know if you’d be open to a conversation.\n\n" +
            "Best regards,\n" +
            "{{your_name}}",
    },

    collaboration_request: {
        subject: "Exploring collaboration",
        body:
            "Hi {{recipient_name}},\n\n" +
            "I’m reaching out to explore a possible collaboration around {{collaboration_area}}.\n\n" +
            "If this sounds interesting, I’d be glad to discuss further.\n\n" +
            "Best regards,\n" +
            "{{your_name}}",
    },

    affiliate_request: {
        subject: "Affiliate partnership inquiry",
        body:
            "Hi {{recipient_name}},\n\n" +
            "I wanted to inquire about potential affiliate opportunities with {{company}}.\n\n" +
            "I believe our audiences may align well and create mutual value.\n\n" +
            "Best regards,\n" +
            "{{your_name}}",
    },

    influencer_outreach: {
        subject: "Collaboration opportunity",
        body:
            "Hi {{recipient_name}},\n\n" +
            "I’ve been following your work and wanted to reach out regarding a possible collaboration.\n\n" +
            "We think there may be an opportunity to work together on {{campaign_or_topic}}.\n\n" +
            "Best regards,\n" +
            "{{your_name}}",
    },

    sponsorship_proposal: {
        subject: "Sponsorship opportunity",
        body:
            "Hi {{recipient_name}},\n\n" +
            "I’m reaching out to explore a potential sponsorship opportunity with {{event_or_platform}}.\n\n" +
            "I believe this could be a strong fit for both sides.\n\n" +
            "Best regards,\n" +
            "{{your_name}}",
    },

    co_marketing: {
        subject: "Co-marketing opportunity",
        body:
            "Hi {{recipient_name}},\n\n" +
            "I wanted to explore a possible co-marketing initiative between our teams.\n\n" +
            "If this is something you’re open to, I’d be glad to discuss ideas.\n\n" +
            "Best regards,\n" +
            "{{your_name}}",
    },
};
