import type { StaticTemplate } from "../mail-composer/templates";
import type { EducationTemplate } from "../mail-composer/types";

export const educationTemplates: Record<
    EducationTemplate,
    StaticTemplate
> = {
    academic_admission_inquiry: {
        meta: {
            label: "Admission Inquiry",
            description: "Inquire about admission to a course or program",
            category: "education",
        },
        draft: {
            subject: "Inquiry regarding admission to {{program_name}}",
            body: `Dear Admissions Team,

I'm writing to express my interest in the {{program_name}} at {{company}}. 

Could you please provide information regarding the admission requirements and deadlines?

Thank you,
{{your_name}}`,
        },
    },

    academic_course_enrollment: {
        meta: {
            label: "Course Enrollment",
            description: "Request to enroll in a specific academic course",
            category: "education",
        },
        draft: {
            subject: "Enrollment Request: {{course_name}} (Code: {{course_code}})",
            body: `Hi Registrar,

I'd like to enroll in the upcoming {{course_name}} (Code: {{course_code}}). 

Please let me know if there are any prerequisites or paperwork I need to complete.

Best,
{{your_name}}`,
        },
    },

    academic_assignment_submission: {
        meta: {
            label: "Assignment Submission",
            description: "Submit your academic work or project",
            category: "education",
        },
        draft: {
            subject: "Assignment Submission: {{assignment_title}} - {{your_name}}",
            body: `Dear {{recipient_name}},

Please find attached my submission for the {{assignment_title}}.

Let me know if you have any issues with the file.

Regards,
{{your_name}}`,
        },
    },

    academic_deadline_extension: {
        meta: {
            label: "Deadline Extension",
            description: "Request more time for an assignment or project",
            category: "education",
        },
        draft: {
            subject: "Request for extension: {{assignment_title}}",
            body: `Dear {{recipient_name}},

I am writing to request a brief extension for the {{assignment_title}} due on {{due_date}}.

I am requesting this because {{reason}}. Would it be possible to submit it by {{new_date}} instead?

Thank you for your consideration.

Best,
{{your_name}}`,
        },
    },

    training_invitation: {
        meta: {
            label: "Training Invitation",
            description: "Invite someone to a training session or workshop",
            category: "education",
        },
        draft: {
            subject: "Invitation: {{training_title}} training session",
            body: `Hi {{recipient_name}},

Join us for an upcoming training on {{training_title}}! 

This session will cover {{key_topics}}. Register here: {{link}}

We hope to see you there!`,
        },
    },

    training_reminder: {
        meta: {
            label: "Training Reminder",
            description: "Remind participants about an upcoming training session",
            category: "education",
        },
        draft: {
            subject: "Reminder: {{training_title}} starts tomorrow!",
            body: `Hi everyone,

This is a quick reminder that our training session on {{training_title}} is happening tomorrow at {{time}}.

See you then! 

Link: {{meeting_link}}`,
        },
    },

    training_completion_certificate: {
        meta: {
            label: "Completion Certificate",
            description: "Deliver a certificate after successful training completion",
            category: "education",
        },
        draft: {
            subject: "Congratulations! Your certificate for {{training_title}}",
            body: `Hi {{recipient_name}},

Congratulations on completing the {{training_title}} training!

Attached is your certificate of completion. Well done!

Regards,
{{training_team_name}}`,
        },
    },
};
