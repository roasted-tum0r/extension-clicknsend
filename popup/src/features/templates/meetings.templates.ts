import type { StaticTemplate } from "../mail-composer/templates";
import type { MeetingTemplate } from "../mail-composer/types";

export const meetingTemplates: Record<
    MeetingTemplate,
    StaticTemplate
> = {
    meeting_request: {
        meta: {
            label: "Meeting Request",
            description: "Propose a new meeting or call",
            category: "meetings",
        },
        draft: {
            subject: "Meeting Request: {{topic}}",
            body: `Hi {{recipient_name}},

I'd like to schedule a brief meeting to discuss {{topic}}.

Are you available on {{suggested_date}} at {{suggested_time}}? Alternatively, please let me know a time that works best for you.

Best regards,
{{your_name}}`,
        },
    },

    meeting_calendar_followup: {
        meta: {
            label: "Calendar Follow-up",
            description: "Follow up after sending a calendar invite",
            category: "meetings",
        },
        draft: {
            subject: "Follow-up: Calendar invite for {{meeting_title}}",
            body: `Hi {{recipient_name}},

Just following up on the calendar invite I sent for our {{meeting_title}} session.

Please let me know if the time works for you or if we need to adjust anything.

Best,
{{your_name}}`,
        },
    },

    meeting_agenda: {
        meta: {
            label: "Meeting Agenda",
            description: "Share the topics to be covered in an upcoming meeting",
            category: "meetings",
        },
        draft: {
            subject: "Agenda for our meeting on {{topic}}",
            body: `Hi Team,

Ahead of our meeting on {{date}}, here is the proposed agenda:

1. {{agenda_item_1}}
2. {{agenda_item_2}}
3. {{agenda_item_3}}

Please let me know if there's anything else you'd like to add.

See you then,
{{your_name}}`,
        },
    },

    meeting_reminder: {
        meta: {
            label: "Meeting Reminder",
            description: "Gently remind participants about an upcoming session",
            category: "meetings",
        },
        draft: {
            subject: "Reminder: {{meeting_title}} starting in {{time_delta}}",
            body: `Hi everyone,

Just a quick reminder that our meeting regarding {{topic}} is starting in {{time_delta}}.

Join link: {{meeting_link}}

Looking forward to it!`,
        },
    },

    meeting_reschedule: {
        meta: {
            label: "Reschedule Meeting",
            description: "Request to move an existing meeting to a new time",
            category: "meetings",
        },
        draft: {
            subject: "Rescheduling: {{meeting_title}}",
            body: `Hi {{recipient_name}},

Apologies, but I have a scheduling conflict and need to move our {{meeting_title}} session.

Would {{new_date}} at {{new_time}} work for you instead?

Sorry for the inconvenience.

Best,
{{your_name}}`,
        },
    },

    meeting_cancel: {
        meta: {
            label: "Cancel Meeting",
            description: "Notify participants that a meeting has been cancelled",
            category: "meetings",
        },
        draft: {
            subject: "Cancelled: {{meeting_title}}",
            body: `Hi everyone,

Please note that the meeting regarding {{topic}} scheduled for {{date}} has been cancelled.

We will look to reschedule this at a later date.

Regards,
{{your_name}}`,
        },
    },

    meeting_delay: {
        meta: {
            label: "Meeting Delay",
            description: "Notify participants that the meeting will start late",
            category: "meetings",
        },
        draft: {
            subject: "Slight delay: Starting {{meeting_title}} at {{new_time}}",
            body: `Hi Team,

I'm running a few minutes behind. We'll start the meeting at {{new_time}} instead of {{original_time}}.

Thanks for your patience!`,
        },
    },

    meeting_summary: {
        meta: {
            label: "Meeting Summary",
            description: "Brief overview of what was discussed",
            category: "meetings",
        },
        draft: {
            subject: "Summary: {{meeting_title}} - {{date}}",
            body: `Hi Team,

Thanks for a productive session today. Here's a brief summary of what we covered:

- {{summary_point_1}}
- {{summary_point_2}}

I'll follow up shortly with specific action items.

Best,
{{your_name}}`,
        },
    },

    meeting_action_items: {
        meta: {
            label: "Action Items",
            description: "Assign tasks based on meeting outcomes",
            category: "meetings",
        },
        draft: {
            subject: "Action Items from {{meeting_title}}",
            body: `Hi everyone,

Following our meeting on {{topic}}, here are the assigned action items:

- {{task_1}} (@{{owner_1}})
- {{task_2}} (@{{owner_2}})

Please update the status of these by {{deadline}}.

Thanks!`,
        },
    },

    meeting_next_steps: {
        meta: {
            label: "Next Steps",
            description: "Outline future plans after a successful meeting",
            category: "meetings",
        },
        draft: {
            subject: "Next Steps for {{project_name}}",
            body: `Hi Team,

Great meeting today! Based on our discussion, here are the next steps:

1. {{step_1}}
2. {{step_2}}

Our next sync is scheduled for {{next_sync_date}}.

Best,
{{your_name}}`,
        },
    },
};
