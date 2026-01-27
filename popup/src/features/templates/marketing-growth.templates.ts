import type { StaticTemplate } from "../mail-composer/templates";
import type { MarketingTemplate } from "../mail-composer/types";

export const marketingGrowthTemplates: Record<
    MarketingTemplate,
    StaticTemplate
> = {
    campaign_promotion: {
        meta: {
            label: "Campaign Promotion",
            description: "Promote a specific campaign or limited-time event",
            category: "marketing_growth",
        },
        draft: {
            subject: "Something big is coming: {{campaign_name}}",
            body: `Hi {{recipient_name}},

We're excited to announce our latest campaign, {{campaign_name}}! 

Stay tuned for more updates on how you can get involved and what this means for you.

Cheers,
The {{company}} Team`,
        },
    },

    campaign_offer: {
        meta: {
            label: "Special Offer",
            description: "Share a special offer or deal with your audience",
            category: "marketing_growth",
        },
        draft: {
            subject: "Special Offer: {{offer_details}} just for you",
            body: `Hi {{recipient_name}},

Because you've been a valued member of our community, we're offering you {{offer_details}}.

Don't miss out! This offer ends on {{expiry_date}}.

Claim your offer: {{offer_link}}`,
        },
    },

    campaign_discount: {
        meta: {
            label: "Discount Announcement",
            description: "Announce a discount or sale to your customers",
            category: "marketing_growth",
        },
        draft: {
            subject: "Get {{discount_percent}}% off with our {{sale_name}}",
            body: `Hi {{recipient_name}},

It's time to save! We're offering a {{discount_percent}}% discount on all our services as part of our {{sale_name}}.

Use code **{{discount_code}}** at checkout.

Shop now: {{shop_link}}`,
        },
    },

    campaign_seasonal: {
        meta: {
            label: "Seasonal Campaign",
            description: "A themed campaign for holidays or specific seasons",
            category: "marketing_growth",
        },
        draft: {
            subject: "Happy {{holiday_name}} from {{company}}! 🎁",
            body: `Hi {{recipient_name}},

Wishing you a joyful {{holiday_name}}! To celebrate, we've put together some special {{products/offers}} just for you.

Check out our seasonal collection: {{collection_link}}

Warm regards,
The {{company}} Team`,
        },
    },

    newsletter_weekly: {
        meta: {
            label: "Weekly Newsletter",
            description: "A weekly digest of news and updates",
            category: "marketing_growth",
        },
        draft: {
            subject: "{{company}} Weekly: This week's top stories",
            body: `Hi {{recipient_name}},

Here is your weekly roundup of everything happening at {{company}}:

1. {{news_item_1}}
2. {{news_item_2}}
3. {{news_item_3}}

Read more on our blog: {{blog_link}}`,
        },
    },

    newsletter_monthly: {
        meta: {
            label: "Monthly Newsletter",
            description: "A monthly summary of all things {{company}}",
            category: "marketing_growth",
        },
        draft: {
            subject: "Monthly Update: What happened in {{month}}",
            body: `Hi {{recipient_name}},

It's been a busy month! Here's a look back at everything we've achieved together in {{month}}:

- {{milestone_1}}
- {{milestone_2}}
- {{milestone_3}}

Thanks for being part of our journey!`,
        },
    },

    newsletter_founder_note: {
        meta: {
            label: "Founder's Note",
            description: "A personal message from the founder to the community",
            category: "marketing_growth",
        },
        draft: {
            subject: "A personal note from our founder",
            body: `Hi {{recipient_name}},

I wanted to take a moment to personally thank you for being part of the {{company}} community. 

Our mission has always been to {{mission_statement}}, and we couldn't do it without you.

I'd love to hear your feedback on how we're doing. Feel free to reply directly to this email.

Best,
{{founder_name}}`,
        },
    },

    newsletter_community: {
        meta: {
            label: "Community Update",
            description: "Highlight community events and contributions",
            category: "marketing_growth",
        },
        draft: {
            subject: "Community Update: What's new in our circle",
            body: `Hi {{recipient_name}},

Our community is growing! Here's what's been happening:

- New Member Shoutout: {{member_name}}
- Featured Contribution: {{contribution_description}}
- Upcoming Meetup: {{meetup_date}}

Join the conversation: {{community_link}}`,
        },
    },

    event_invite: {
        meta: {
            label: "Event Invitation",
            description: "Invite your audience to an upcoming event",
            category: "marketing_growth",
        },
        draft: {
            subject: "You're Invited: {{event_title}}",
            body: `Hi {{recipient_name}},

We'd love for you to join us at {{event_title}} on {{event_date}} at {{event_location/link}}.

It's going to be a great session focused on {{topic}}.

Register here: {{registration_link}}`,
        },
    },

    event_webinar: {
        meta: {
            label: "Webinar Announcement",
            description: "Promote an upcoming online webinar",
            category: "marketing_growth",
        },
        draft: {
            subject: "Free Webinar: {{webinar_title}}",
            body: `Hi {{recipient_name}},

Join us for a free live webinar on {{webinar_title}}! 

We'll be covering:
- {{topic_1}}
- {{topic_2}}

Save your spot: {{webinar_link}}`,
        },
    },

    event_reminder: {
        meta: {
            label: "Event Reminder",
            description: "Remind registered attendees about an upcoming event",
            category: "marketing_growth",
        },
        draft: {
            subject: "Don't forget: {{event_title}} is starting soon!",
            body: `Hi {{recipient_name}},

Just a quick reminder that {{event_title}} is happening on {{event_date}}.

We look forward to seeing you there!

Event details: {{event_link}}`,
        },
    },

    event_thank_you: {
        meta: {
            label: "Event Thank You",
            description: "Thank attendees for coming to an event",
            category: "marketing_growth",
        },
        draft: {
            subject: "Thank you for attending {{event_title}}!",
            body: `Hi {{recipient_name}},

Thank you for joining us at {{event_title}}! We hope you found the session valuable.

In case you missed anything, here is the recording/deck: {{link}}

See you at the next one!`,
        },
    },
};
