import type { StaticTemplate } from "../mail-composer/templates";
import type { HRInternalTemplate } from "../mail-composer/types";

export const hrInternalTemplates: Record<
    HRInternalTemplate,
    StaticTemplate
> = {
    /* ================================
       Leave & Attendance
    ================================ */

    leave_sick: {
        meta: {
            label: "Sick Leave",
            description: "Notify manager about unexpected illness",
            category: "hr_internal",
            isPopular: true,
        },
        draft: {
            subject: "Sick Leave Notification - {{Your Name}}",
            body: `Hi {{Manager Name}},

I'm writing to inform you that I'm feeling unwell today and will be unable to work.

I plan to check my emails occasionally if urgent, but otherwise, I'll be offline resting. I hope to be back by {{expected_return_date}}.

Best regards,
{{Your Name}}`,
        },
    },

    leave_planned: {
        meta: {
            label: "Planned Leave Request",
            description: "Request for future time off or vacation",
            category: "hr_internal",
        },
        draft: {
            subject: "Leave Request: {{start_date}} to {{end_date}}",
            body: `Hi {{Manager Name}},

I would like to request leave from {{start_date}} to {{end_date}}.

I've ensured that my current tasks are up to date, and I will hand over {{project_name}} to {{colleague_name}} before I depart.

Looking forward to your approval.

Best,
{{Your Name}}`,
        },
    },

    leave_emergency: {
        meta: {
            label: "Emergency Leave",
            description: "Urgent notification for immediate absence",
            category: "hr_internal",
        },
        draft: {
            subject: "Emergency Leave Required - {{Your Name}}",
            body: `Hi {{Manager Name}},

An urgent personal emergency has come up, and I need to take leave starting immediately.

I expect to be away for {{duration}}. I'll provide a more detailed update as soon as I can.

Regards,
{{Your Name}}`,
        },
    },

    leave_wfh: {
        meta: {
            label: "Work From Home Request",
            description: "Notify or request to work remotely for the day",
            category: "hr_internal",
        },
        draft: {
            subject: "Working from home today - {{Date}}",
            body: `Hi {{Manager Name}},

I'll be working from home today, {{Date}}, due to {{reason}}.

I am available as usual on Slack and via email.

Best,
{{Your Name}}`,
        },
    },

    attendance_late: {
        meta: {
            label: "Running Late",
            description: "Quick note to team about a delayed start",
            category: "hr_internal",
        },
        draft: {
            subject: "Running slightly late - {{Time}}",
            body: `Hi Team,

I'm running about {{minutes}} minutes late this morning due to {{reason}}.

I should be online by {{expected_time}}. Apologies for any inconvenience.

Best,
{{Your Name}}`,
        },
    },

    /* ================================
       Status & Reporting
    ================================ */

    status_daily: {
        meta: {
            label: "Daily Standup/Status",
            description: "Quick summary of yesterday's work and today's plan",
            category: "hr_internal",
        },
        draft: {
            subject: "Daily Status Update - {{Date}}",
            body: `Hi {{Manager/Team}},

Here is my update for today:

Yesterday:
- {{completed_task_1}}
- {{completed_task_2}}

Today's Plan:
- {{planned_task_1}}
- {{planned_task_2}}

Blockers: {{blockers_if_any}}

Best regards,
{{Your Name}}`,
        },
    },

    status_weekly: {
        meta: {
            label: "Weekly Progress Report",
            description: "Comprehensive summary of weekly achievements",
            category: "hr_internal",
        },
        draft: {
            subject: "Weekly Progress Report - Week of {{Date}}",
            body: `Hi {{Manager Name}},

Key highlights from this week:

Achievements:
- {{achievement_1}}
- {{achievement_2}}

Upcoming Priorities:
- {{priority_1}}
- {{priority_2}}

Everything is currently on track for {{project_name}}.

Best,
{{Your Name}}`,
        },
    },

    status_task_done: {
        meta: {
            label: "Task Completion",
            description: "Formal notification that a specific task is finished",
            category: "hr_internal",
        },
        draft: {
            subject: "Completed: {{Task Name}}",
            body: `Hi {{Recipient Name}},

I've completed the task: {{Task Name}}.

You can find the results/deliverables here: {{Link/Attachment}}

Let me know if any further changes are needed.

Best,
{{Your Name}}`,
        },
    },

    status_delay: {
        meta: {
            label: "Project/Task Delay",
            description: "Proactive notification about a missed deadline",
            category: "hr_internal",
        },
        draft: {
            subject: "Update on {{Task Name}} - Delayed",
            body: `Hi {{Recipient Name}},

I wanted to provide an update on {{Task Name}}. Unfortunately, the completion will be delayed until {{new_date}} due to {{reason}}.

I'm working to prioritize this and will keep you posted on the progress.

Regards,
{{Your Name}}`,
        },
    },

    status_blocker: {
        meta: {
            label: "Blocker Alert",
            description: "Flagging an issue that is preventing progress",
            category: "hr_internal",
        },
        draft: {
            subject: "Blocker: Assistance needed for {{Task Name}}",
            body: `Hi {{Recipient Name}},

I'm currently blocked on {{Task Name}} because {{reason}}.

Could you please help with {{specific_request}} so I can proceed?

Thanks,
{{Your Name}}`,
        },
    },

    /* ================================
       Employment Lifecycle
    ================================ */

    employment_offer_letter: {
        meta: {
            label: "Offer Letter Sent",
            description: "Formal job offer to a successful candidate",
            category: "hr_internal",
        },
        draft: {
            subject: "Job Offer: {{Role}} at {{Company Name}}",
            body: `Dear {{Candidate Name}},

We are pleased to offer you the position of {{Role}} with {{Company Name}}.

We were very impressed with your skills and believe you will be a great addition to our team. Please find the formal offer letter and employment agreement attached.

We look forward to hearing from you.

Best regards,
{{Your Name}}
{{Company Name}} HR`,
        },
    },

    employment_joining_confirmation: {
        meta: {
            label: "Joining Confirmation",
            description: "Welcome note and confirmation for a new hire's first day",
            category: "hr_internal",
        },
        draft: {
            subject: "Confirmation of Joining Date - {{Company Name}}",
            body: `Hi {{New Hire Name}},

We're excited to have you join us! This email confirms your start date as {{start_date}}.

On your first day, please report to {{location/link}} at {{time}}.

Welcome aboard!`,
        },
    },

    employment_onboarding: {
        meta: {
            label: "Onboarding Instructions",
            description: "Initial steps and links for a new employee",
            category: "hr_internal",
        },
        draft: {
            subject: "Onboarding Checklist for {{New Hire Name}}",
            body: `Hi {{New Hire Name}},

Welcome to the team! To get you started, please complete the following onboarding tasks:

1. {{task_1}}
2. {{task_2}}

You can find all necessary resources here: {{onboarding_portal_link}}

Happy to help if you have any questions!`,
        },
    },

    employment_resignation: {
        meta: {
            label: "Resignation Letter",
            description: "Formal notification of intent to leave the company",
            category: "hr_internal",
        },
        draft: {
            subject: "Resignation - {{Your Name}}",
            body: `Dear {{Manager Name}},

Please accept this email as formal notification that I am resigning from my position as {{Role}}. My last day will be {{last_day}}.

I've truly enjoyed my time at {{Company Name}} and appreciate the opportunities I've been given. I will do my best to ensure a smooth transition.

Sincerely,
{{Your Name}}`,
        },
    },

    employment_exit: {
        meta: {
            label: "Exit Process Note",
            description: "Final steps for a departing employee",
            category: "hr_internal",
        },
        draft: {
            subject: "Departure Information - {{Your Name}}",
            body: `Hi HR Team,

As my tenure with {{Company Name}} comes to a close, I'm reaching out to confirm the final steps for my exit process.

I have completed/scheduled my exit interview for {{date}}. Please let me know if there's anything else required from my side.

Best regards,
{{Your Name}}`,
        },
    },

    employment_knowledge_transfer: {
        meta: {
            label: "Knowledge Transfer (KT)",
            description: "Handing over documents and processes to a teammate",
            category: "hr_internal",
        },
        draft: {
            subject: "Knowledge Transfer: {{Project Name}}",
            body: `Hi {{Colleague Name}},

I've compiled all the relevant documentation and processes for {{Project Name}} to facilitate a smooth handover.

KT Document: {{Link}}
Meeting for Walkthrough: {{Date/Time}}

Please let me know if you have questions as you go through the materials.

Best,
{{Your Name}}`,
        },
    },
};
