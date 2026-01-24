import type { StaticTemplate } from "../mail-composer/templates";
import type { PersonalProfessionalTemplate } from "../mail-composer/types";

export const personalProfessionalTemplates: Record<
    PersonalProfessionalTemplate,
    StaticTemplate
> = {
    /* ================================
       Introductions
    ================================ */

    intro_self: {
        meta: {
            label: "Self Introduction",
            description: "Introduce yourself to a new person or contact",
            category: "personal_professional",
        },
        draft: {
            subject: "Introduction: {{your_name}}",
            body: `Hi {{recipient_name}},

I'm reaching out to introduce myself. I've been following your work on {{field/topic}} and wanted to connect.

I'm a {{your_role}} and would love to learn more about your experience with {{specific_area}}.

Looking forward to connecting!

Best,
{{your_name}}`,
        },
    },

    intro_professional: {
        meta: {
            label: "Professional Intro",
            description: "A more formal introduction for business networking",
            category: "personal_professional",
        },
        draft: {
            subject: "Professional Introduction - {{your_name}}",
            body: `Dear {{recipient_name}},

I am writing to formally introduce myself. I currently work as a {{your_role}} at {{your_company}} and have been involved in {{project/area}}.

I believe there may be alignment between our work, and I would value the opportunity to exchange professional insights.

Sincerely,
{{your_name}}`,
        },
    },

    intro_two_people: {
        meta: {
            label: "Intro Two People",
            description: "Connect two people in your network",
            category: "personal_professional",
        },
        draft: {
            subject: "Connecting {{person_a_name}} and {{person_b_name}}",
            body: `Hi {{person_a_name}} and {{person_b_name}},

I'm writing to introduce the two of you. 

{{person_a_name}}, {{person_b_name}} is a {{person_b_role}} who is doing great work in {{person_b_area}}.

{{person_b_name}}, {{person_a_name}} is a {{person_a_role}} with deep expertise in {{person_a_area}}.

I'll let you two take it from here!

Best,
{{your_name}}`,
        },
    },

    intro_new_team: {
        meta: {
            label: "New Team Introduction",
            description: "Introduce yourself to a new team you've joined",
            category: "personal_professional",
        },
        draft: {
            subject: "Hi! Introducing myself to the team",
            body: `Hi Team,

I'm excited to join you all as a {{your_role}}! 

I've previously worked on {{previous_experience}} and am looking forward to contributing to {{current_project}}.

Hope to meet you all soon!

Best,
{{your_name}}`,
        },
    },

    /* ================================
       Follow-ups
    ================================ */

    followup_after_call: {
        meta: {
            label: "After Call Follow-up",
            description: "Follow up after a discovery or catch-up call",
            category: "personal_professional",
        },
        draft: {
            subject: "Great speaking with you earlier",
            body: `Hi {{recipient_name}},

Thank you for the call earlier! I really enjoyed our discussion about {{topic}}.

As promised, here is the {{link/info}} we talked about.

Let's keep in touch!

Best,
{{your_name}}`,
        },
    },

    followup_after_meeting: {
        meta: {
            label: "After Meeting Follow-up",
            description: "Summarize a formal meeting and next steps",
            category: "personal_professional",
        },
        draft: {
            subject: "Follow-up on our meeting regarding {{topic}}",
            body: `Hi {{recipient_name}},

Thanks again for the meeting earlier today. It was great to align on {{key_outcome}}.

I'll be working on {{next_step}} and will have an update for you by {{date}}.

Best,
{{your_name}}`,
        },
    },

    followup_after_event: {
        meta: {
            label: "After Event Follow-up",
            description: "Follow up with someone you met at a conference or event",
            category: "personal_professional",
        },
        draft: {
            subject: "Great meeting you at {{event_name}}",
            body: `Hi {{recipient_name}},

It was a pleasure meeting you at {{event_name}}! I enjoyed our conversation about {{topic}}.

I'd love to stay connected and perhaps grab a coffee sometime to discuss this further.

Cheers,
{{your_name}}`,
        },
    },

    followup_gentle_reminder: {
        meta: {
            label: "Gentle Reminder",
            description: "A soft nudge for an overdue response",
            category: "personal_professional",
        },
        draft: {
            subject: "Quick nudge: {{topic}}",
            body: `Hi {{recipient_name}},

I just wanted to send a quick reminder regarding my previous email about {{topic}}.

I know things get busy, so please let me know when you have a moment to look into it.

Thanks,
{{your_name}}`,
        },
    },

    /* ================================
       Requests
    ================================ */

    request_information: {
        meta: {
            label: "Request Information",
            description: "Ask for specific details or data",
            category: "personal_professional",
        },
        draft: {
            subject: "Request for information regarding {{topic}}",
            body: `Hi {{recipient_name}},

I'm working on {{project}} and was hoping you could provide some information regarding {{specific_details}}.

This would greatly help me with {{purpose}}.

Thanks in advance!

Best,
{{your_name}}`,
        },
    },

    request_document: {
        meta: {
            label: "Request Document",
            description: "Ask for a file or document",
            category: "personal_professional",
        },
        draft: {
            subject: "Could you please send {{document_name}}?",
            body: `Hi {{recipient_name}},

Could you please share the latest version of {{document_name}} with me? 

I need it for {{reason}}.

Thank you!

Best,
{{your_name}}`,
        },
    },

    request_approval: {
        meta: {
            label: "Request Approval",
            description: "Formal request for a decision or sign-off",
            category: "personal_professional",
        },
        draft: {
            subject: "Approval Requested: {{task/item}}",
            body: `Hi {{recipient_name}},

I've completed the draft/plan for {{task/item}}. Could you please review it and provide your approval?

You can access it here: {{link}}

Please let me know if you have any feedback or if anything needs adjustment.

Best,
{{your_name}}`,
        },
    },

    request_clarification: {
        meta: {
            label: "Request Clarification",
            description: "Ask for more details on something that wasn't clear",
            category: "personal_professional",
        },
        draft: {
            subject: "Clarification needed: {{topic}}",
            body: `Hi {{recipient_name}},

Thank you for the update on {{topic}}. I just wanted to clarify {{specific_point}}.

Could you provide a bit more detail on that?

Thanks!

Best,
{{your_name}}`,
        },
    },
};
