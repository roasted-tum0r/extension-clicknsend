import type { StaticTemplate } from "../mail-composer/templates";
import type { SalesBusinessTemplate } from "../mail-composer/types";

export const salesBusinessTemplates: Record<
    SalesBusinessTemplate,
    StaticTemplate
> = {
    /* ================================
       Cold Outreach
    ================================ */

    sales_cold_intro: {
        meta: {
            label: "Cold Sales Intro",
            description: "Friendly first-touch outreach to a new prospect",
            category: "sales_business",
            isPopular: true,
        },
        draft: {
            subject: "Quick question about {{company}}",
            body: `Hi {{recipient_name}},

I came across {{company}} and noticed {{personalized_observation}}.

We work with teams like yours to help {{value_proposition}}.

Would you be open to a brief conversation to see if this is relevant?

Best regards,
{{your_name}}`,
        },
    },

    sales_cold_soft_cta: {
        meta: {
            label: "Soft CTA Outreach",
            description: "Low-pressure outreach focused on sharing value",
            category: "sales_business",
        },
        draft: {
            subject: "Thought this might be useful",
            body: `Hi {{recipient_name}},

I wanted to share a quick note in case this is helpful.

We support teams in {{industry_or_role}} by helping them {{value_proposition}}.

No rush at all — happy to connect if and when it makes sense.

Best regards,
{{your_name}}`,
        },
    },

    sales_cold_direct_cta: {
        meta: {
            label: "Direct CTA Outreach",
            description: "Focused outreach with a clear request for a meeting",
            category: "sales_business",
        },
        draft: {
            subject: "Let’s discuss {{specific_problem}}",
            body: `Hi {{recipient_name}},

I’m reaching out because we help companies like {{company}} address {{specific_problem}}.

If this is something you’re currently evaluating, I’d appreciate the chance to explain how we do it.

Are you available for a short call this week?

Best regards,
{{your_name}}`,
        },
    },

    sales_problem_solution: {
        meta: {
            label: "Problem-Solution Pitch",
            description: "Highlighting a common pain point and offering a solution",
            category: "sales_business",
        },
        draft: {
            subject: "Reducing {{problem_area}} at {{company}}",
            body: `Hi {{recipient_name}},

Many teams we work with struggle with {{problem_area}}.

We’ve helped similar companies improve this by {{solution_approach}}.

If this resonates, I’d be glad to share a few examples.

Best regards,
{{your_name}}`,
        },
    },

    sales_personalized_followup: {
        meta: {
            label: "Personalized Follow-up",
            description: "Follow-up message referencing specific context",
            category: "sales_business",
        },
        draft: {
            subject: "Following up on my note",
            body: `Hi {{recipient_name}},

I wanted to follow up on my earlier message regarding {{topic_or_problem}}.

Let me know if this is something worth exploring or if I should reconnect at a later time.

Best regards,
{{your_name}}`,
        },
    },

    /* ================================
       Follow-ups
    ================================ */

    sales_followup_first: {
        meta: {
            label: "First Follow-up",
            description: "Simple follow-up to ensure initial email was seen",
            category: "sales_business",
        },
        draft: {
            subject: "Quick follow-up",
            body: `Hi {{recipient_name}},

Just following up on my previous email in case it got missed.

Happy to provide more context or answer any questions.

Best regards,
{{your_name}}`,
        },
    },

    sales_followup_second: {
        meta: {
            label: "Second Follow-up",
            description: "Checking back in after multiple attempts",
            category: "sales_business",
        },
        draft: {
            subject: "Checking back in",
            body: `Hi {{recipient_name}},

I wanted to check back in regarding my earlier note.

Please let me know if this is a priority right now or if there’s a better time to reconnect.

Best regards,
{{your_name}}`,
        },
    },

    sales_followup_final: {
        meta: {
            label: "Closing the Loop",
            description: "Final outreach if no interest has been shown",
            category: "sales_business",
        },
        draft: {
            subject: "Closing the loop",
            body: `Hi {{recipient_name}},

I haven’t heard back, so I’ll assume now isn’t the right time.

Feel free to reach out in the future if this becomes relevant.

Best regards,
{{your_name}}`,
        },
    },

    sales_checking_in: {
        meta: {
            label: "Relationship Check-in",
            description: "Informal check-in with a known prospect or contact",
            category: "sales_business",
        },
        draft: {
            subject: "Checking in",
            body: `Hi {{recipient_name}},

Just checking in to see if there have been any updates since we last connected.

Happy to continue the conversation if useful.

Best regards,
{{your_name}}`,
        },
    },

    sales_no_response: {
        meta: {
            label: "Last Attempt Follow-up",
            description: "Final try to connect before moving on",
            category: "sales_business",
        },
        draft: {
            subject: "Following up one last time",
            body: `Hi {{recipient_name}},

I wanted to follow up once more regarding {{topic}}.

If this isn’t a fit right now, no worries at all — just wanted to close the loop.

Best regards,
{{your_name}}`,
        },
    },

    sales_post_demo: {
        meta: {
            label: "Post-Demo Follow-up",
            description: "Summarizing value and next steps after a product demo",
            category: "sales_business",
        },
        draft: {
            subject: "Thanks for your time today",
            body: `Hi {{recipient_name}},

Thank you for taking the time to attend the demo today.

As discussed, we believe {{product_or_solution}} can help with {{key_benefit}}.

Please let me know if you have any questions or would like to discuss next steps.

Best regards,
{{your_name}}`,
        },
    },

    /* ================================
       Proposals & Pricing
    ================================ */

    proposal_send: {
        meta: {
            label: "Send Proposal",
            description: "Delivering a formal business or project proposal",
            category: "sales_business",
        },
        draft: {
            subject: "Proposal for {{project_or_scope}}",
            body: `Hi {{recipient_name}},

As discussed, please find attached the proposal for {{project_or_scope}}.

I’ve outlined the scope, timelines, and next steps for your review.

Happy to walk through it together if helpful.

Best regards,
{{your_name}}`,
        },
    },

    pricing_custom: {
        meta: {
            label: "Custom Pricing Proposal",
            description: "Discussing tailored pricing based on specific needs",
            category: "sales_business",
        },
        draft: {
            subject: "Custom pricing discussion",
            body: `Hi {{recipient_name}},

Based on your requirements, I’ve put together a custom pricing approach.

I’d be glad to walk through the details and adjust as needed.

Best regards,
{{your_name}}`,
        },
    },

    pricing_quote_followup: {
        meta: {
            label: "Follow-up on Quote",
            description: "Checking in on a previously sent pricing quote",
            category: "sales_business",
        },
        draft: {
            subject: "Following up on pricing quote",
            body: `Hi {{recipient_name}},

I wanted to follow up on the pricing quote shared earlier.

Please let me know if you have any questions or need additional information.

Best regards,
{{your_name}}`,
        },
    },

    pricing_negotiation: {
        meta: {
            label: "Negotiate Pricing",
            description: "Discussing terms to reach a mutually beneficial agreement",
            category: "sales_business",
        },
        draft: {
            subject: "Pricing discussion",
            body: `Hi {{recipient_name}},

Thank you for sharing your thoughts on pricing.

I’m open to discussing options that align with your budget and requirements.

Best regards,
{{your_name}}`,
        },
    },

    pricing_discount: {
        meta: {
            label: "Apply Discount",
            description: "Providing updated pricing with terms applied",
            category: "sales_business",
        },
        draft: {
            subject: "Updated pricing details",
            body: `Hi {{recipient_name}},

As discussed, I’ve applied an updated pricing structure reflecting the agreed discount.

Please let me know if everything looks good from your end.

Best regards,
{{your_name}}`,
        },
    },

    pricing_renewal: {
        meta: {
            label: "Renewal Outreach",
            description: "Starting the conversation for a subscription or contract renewal",
            category: "sales_business",
        },
        draft: {
            subject: "Upcoming renewal discussion",
            body: `Hi {{recipient_name}},

I wanted to reach out regarding the upcoming renewal for {{product_or_service}}.

Happy to review usage, value, and next steps together.

Best regards,
{{your_name}}`,
        },
    },

    /* ================================
       Partnerships
    ================================ */

    partnership_proposal: {
        meta: {
            label: "Partnership Proposal",
            description: "Proposing a mutually beneficial brand or business partnership",
            category: "sales_business",
        },
        draft: {
            subject: "Partnership opportunity",
            body: `Hi {{recipient_name}},

I’d like to explore a potential partnership between {{your_company}} and {{company}}.

I believe there may be strong alignment in how we serve our customers.

Let me know if you’d be open to a conversation.

Best regards,
{{your_name}}`,
        },
    },

    collaboration_request: {
        meta: {
            label: "Collaboration Request",
            description: "Seeking a short-term or specific project collaboration",
            category: "sales_business",
        },
        draft: {
            subject: "Exploring collaboration",
            body: `Hi {{recipient_name}},

I’m reaching out to explore a possible collaboration around {{collaboration_area}}.

If this sounds interesting, I’d be glad to discuss further.

Best regards,
{{your_name}}`,
        },
    },

    affiliate_request: {
        meta: {
            label: "Affiliate Partnership Inquiry",
            description: "Proposing an affiliate relationship for promotion",
            category: "sales_business",
        },
        draft: {
            subject: "Affiliate partnership inquiry",
            body: `Hi {{recipient_name}},

I wanted to inquire about potential affiliate opportunities with {{company}}.

I believe our audiences may align well and create mutual value.

Best regards,
{{your_name}}`,
        },
    },

    influencer_outreach: {
        meta: {
            label: "Influencer Outreach",
            description: "Connecting with influencers for potential collaboration",
            category: "sales_business",
        },
        draft: {
            subject: "Collaboration opportunity",
            body: `Hi {{recipient_name}},

I’ve been following your work and wanted to reach out regarding a possible collaboration.

We think there may be an opportunity to work together on {{campaign_or_topic}}.\n\nBest regards,\n{{your_name}}`,
        },
    },

    sponsorship_proposal: {
        meta: {
            label: "Sponsorship Proposal",
            description: "Proposing a sponsorship deal for an event or platform",
            category: "sales_business",
        },
        draft: {
            subject: "Sponsorship opportunity",
            body: `Hi {{recipient_name}},

I’m reaching out to explore a potential sponsorship opportunity with {{event_or_platform}}.

I believe this could be a strong fit for both sides.

Best regards,
{{your_name}}`,
        },
    },

    co_marketing: {
        meta: {
            label: "Co-Marketing Inquiry",
            description: "Proposing combined marketing efforts between brands",
            category: "sales_business",
        },
        draft: {
            subject: "Co-marketing opportunity",
            body: `Hi {{recipient_name}},

I wanted to explore a possible co-marketing initiative between our teams.

If this is something you’re open to, I’d be glad to discuss ideas.

Best regards,
{{your_name}}`,
        },
    },
};

