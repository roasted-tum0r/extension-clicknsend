import type { StaticTemplate } from "../mail-composer/templates";
import type { MiscTemplate } from "../mail-composer/types";

export const miscTemplates: Record<
    MiscTemplate,
    StaticTemplate
> = {
    generic_thank_you: {
        meta: {
            label: "Thank You",
            description: "A quick and generic thank-you note",
            category: "misc",
            isPopular: true,
        },
        draft: {
            subject: "Thank you!",
            body: `Hi {{recipient_name}},

Just wanted to send a quick thank you for your help with {{topic}}. 

Really appreciate it!

Best,
{{your_name}}`,
        },
    },

    generic_apology: {
        meta: {
            label: "Apology",
            description: "A standard apology for a mistake or delay",
            category: "misc",
        },
        draft: {
            subject: "Sincere Apologies",
            body: `Hi {{recipient_name}},

Please accept my apologies for {{reason}}. I am working to ensure this doesn't happen again.

Thank you for your understanding.

Best,
{{your_name}}`,
        },
    },

    generic_clarification: {
        meta: {
            label: "Clarification Needed",
            description: "Request clarification on a general topic",
            category: "misc",
        },
        draft: {
            subject: "Question regarding {{topic}}",
            body: `Hi {{recipient_name}},

I just wanted to follow up and clarify a point regarding {{topic}}. 

Could you please provide a bit more context?

Thanks!

Best,
{{your_name}}`,
        },
    },

    generic_reminder: {
        meta: {
            label: "General Reminder",
            description: "A friendly nudge for any pending matter",
            category: "misc",
        },
        draft: {
            subject: "Friendly Reminder: {{topic}}",
            body: `Hi {{recipient_name}},

Just a quick reminder regarding {{topic}}. 

Please let me know if you've had a chance to look into it.

Best,
{{your_name}}`,
        },
    },

    generic_appreciation: {
        meta: {
            label: "Appreciation Note",
            description: "Express gratitude for someone's effort or time",
            category: "misc",
        },
        draft: {
            subject: "Appreciation: {{reason}}",
            body: `Hi {{recipient_name}},

I just wanted to express my appreciation for {{reason}}. Your effort has made a big difference!

Thanks again,
{{your_name}}`,
        },
    },

    generic_farewell: {
        meta: {
            label: "Farewell Message",
            description: "A message to say goodbye to a team or contact",
            category: "misc",
        },
        draft: {
            subject: "Farewell and Stay in Touch!",
            body: `Hi Team,

As I move on to my next chapter, I wanted to say thank you for the wonderful memories and experiences we shared.

It's been a pleasure working with you all. Let's stay in touch!

You can find me on LinkedIn here: {{linkedin_link}}

Warm regards,
{{your_name}}`,
        },
    },
};
