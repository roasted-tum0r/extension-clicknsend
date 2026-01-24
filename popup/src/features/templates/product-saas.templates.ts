import type { StaticTemplate } from "../mail-composer/templates";
import type { ProductSaasTemplate } from "../mail-composer/types";

export const productSaasTemplates: Record<
    ProductSaasTemplate,
    StaticTemplate
> = {
    /* ================================
       Onboarding
    ================================ */

    onboarding_welcome: {
        meta: {
            label: "Welcome Email",
            description: "First greeting to a new user after signup",
            category: "product_saas",
        },
        draft: {
            subject: "Welcome to {{company_name}}! 🚀",
            body: `Hi {{user_name}},

We're thrilled to have you here! Your account is all set up.

To get started, you can {{first_action_link}}. We've also put together a quick guide to help you hit the ground running.

If you have any questions, just reply to this email.

Best,
The {{company_name}} Team`,
        },
    },

    onboarding_setup: {
        meta: {
            label: "Account Setup",
            description: "Guide user through initial configuration",
            category: "product_saas",
        },
        draft: {
            subject: "Quick tip: Finishing your account setup",
            body: `Hi {{user_name}},

You're almost there! To get the most out of {{company_name}}, we recommend completing these steps:

1. {{step_one}}
2. {{step_two}}

Complete your setup here: {{setup_link}}

Happy exploring!`,
        },
    },

    onboarding_verification: {
        meta: {
            label: "Email Verification",
            description: "Request user to verify their email address",
            category: "product_saas",
        },
        draft: {
            subject: "Verify your email for {{company_name}}",
            body: `Hi {{user_name}},

Please verify your email address to secure your account and access all our features.

Click here to verify: {{verification_link}}

If you didn't create this account, you can safely ignore this email.`,
        },
    },

    onboarding_first_login: {
        meta: {
            label: "First Login Milestones",
            description: "Congratulate user on their first successful login",
            category: "product_saas",
        },
        draft: {
            subject: "You've officially joined the club!",
            body: `Hi {{user_name}},

Great to see you logged in! We noticed you've started exploring {{feature_name}}.

How was your first experience? We'd love to hear your thoughts.

Cheers,
{{team_member_name}}`,
        },
    },

    onboarding_feature_walkthrough: {
        meta: {
            label: "Feature Walkthrough",
            description: "Introduce the core value proposition/feature",
            category: "product_saas",
        },
        draft: {
            subject: "How {{feature_name}} works",
            body: `Hi {{user_name}},

Ready to dive deeper? Today we're highlighting {{feature_name}}.

It helps you {{value_benefit}} in just a few clicks. Check out this 2-minute walkthrough: {{video_link}}

Let us know what you think!`,
        },
    },

    trial_expiry: {
        meta: {
            label: "Trial Expiry Reminder",
            description: "Notify user that their trial period is ending",
            category: "product_saas",
        },
        draft: {
            subject: "Your {{company_name}} trial ends in {{days_left}} days",
            body: `Hi {{user_name}},

Your free trial of {{company_name}} is wrapping up. We hope you've enjoyed using it for {{user_activity}}.

To keep your access and data, upgrade to a paid plan before {{expiry_date}}.

Upgrade now: {{pricing_link}}`,
        },
    },

    /* ================================
       Updates
    ================================ */

    product_new_feature: {
        meta: {
            label: "New Feature Launch",
            description: "Announce a major new capability",
            category: "product_saas",
        },
        draft: {
            subject: "Introducing {{feature_name}}: A better way to {{benefit}}",
            body: `Hi {{user_name}},

We've been working hard on something special. Say hello to {{feature_name}}!

Now you can {{feature_capability}}, helping you save time on {{task}}.

Try it out today: {{app_link}}`,
        },
    },

    product_improvement: {
        meta: {
            label: "Feature Enhancement",
            description: "Announce improvements to an existing feature",
            category: "product_saas",
        },
        draft: {
            subject: "Better, faster, stronger: Updates to {{feature_name}}",
            body: `Hi {{user_name}},

We've listened to your feedback and made some great improvements to {{feature_name}}.

What's new:
- {{improvement_one}}
- {{improvement_two}}

Check it out in the app!`,
        },
    },

    product_bugfix: {
        meta: {
            label: "Bug Fix Notice",
            description: "Inform users that a specific issue has been resolved",
            category: "product_saas",
        },
        draft: {
            subject: "Fix deployed: {{issue_description}}",
            body: `Hi everyone,

Quick update: We've resolved the issue regarding {{issue_description}} that some of you were experiencing.

Thanks for your patience and for reporting it!`,
        },
    },

    product_release_notes: {
        meta: {
            label: "Release Notes",
            description: "Monthly or weekly summary of all changes",
            category: "product_saas",
        },
        draft: {
            subject: "Release Notes: What's new in {{month_year}}",
            body: `Hi {{user_name}},

Here's everything we shipped this month:

✨ New: {{item_one}}
🔧 Improved: {{item_two}}
🐛 Fixed: {{item_three}}

Read the full details on our blog: {{blog_link}}`,
        },
    },

    product_deprecation: {
        meta: {
            label: "Feature Deprecation",
            description: "Alert users that a feature will be removed",
            category: "product_saas",
        },
        draft: {
            subject: "Notice: {{feature_name}} will be sunset on {{date}}",
            body: `Hi {{user_name}},

We're reaching out to let you know that we will be sunsetting {{feature_name}} on {{date}}.

Why? We're focusing our efforts on {{replacement_feature}} to provide a better experience.

Please let us know if you need help migrating your data.`,
        },
    },

    /* ================================
       Engagement
    ================================ */

    engagement_usage_reminder: {
        meta: {
            label: "Engagement Reminder",
            description: "Prompt inactive users to return to the product",
            category: "product_saas",
        },
        draft: {
            subject: "Missing out on {{benefit}}?",
            body: `Hi {{user_name}},

It's been a while since we saw you! Since your last visit, {{company_name}} has helped users {{stat_success}}.

Ready to jump back in? {{login_link}}`,
        },
    },

    engagement_reactivate: {
        meta: {
            label: "Reactivation Offer",
            description: "Incentivize churned users to come back",
            category: "product_saas",
        },
        draft: {
            subject: "We want you back! (Special offer inside)",
            body: `Hi {{user_name}},

We've missed you. To welcome you back, we're offering {{discount_percent}}% off your next {{duration}}.

Claim your offer: {{claim_link}}`,
        },
    },

    engagement_inactive: {
        meta: {
            label: "Inactive Account Notice",
            description: "Final warning for persistent inactivity",
            category: "product_saas",
        },
        draft: {
            subject: "Is everything okay? Your account is inactive",
            body: `Hi {{user_name}},

We noticed you haven't used {{company_name}} in over {{number}} months. Is there anything we can do to help?

If we don't hear from you, we'll assume you're moving on.`,
        },
    },

    engagement_upgrade: {
        meta: {
            label: "Upgrade Suggestion",
            description: "Suggest a higher tier based on usage",
            category: "product_saas",
        },
        draft: {
            subject: "Unlock more with {{plan_name}}",
            body: `Hi {{user_name}},

You're doing great with our {{current_plan}} plan! Did you know {{plan_name}} includes {{benefit}}?

See the difference: {{comparison_link}}`,
        },
    },

    engagement_downgrade: {
        meta: {
            label: "Plan Downgrade Confirmation",
            description: "Confirm move to a lower-tier plan",
            category: "product_saas",
        },
        draft: {
            subject: "Your plan has been updated to {{plan_name}}",
            body: `Hi {{user_name}},

This email confirms that your subscription has been moved to the {{plan_name}} tier.

You'll still have access to {{benefit}}, but some features may be limited.`,
        },
    },
};
