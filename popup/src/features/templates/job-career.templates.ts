import type { StaticTemplate } from "../mail-composer/templates";
import type { JobCareerTemplate } from "../mail-composer/types";

export const jobCareerTemplates: Record<
    JobCareerTemplate,
    StaticTemplate
> = {
    /* ================================
       Applications
    ================================ */

    job_apply_specific_role: {
        meta: {
            label: "Specific Role Application",
            description: "Standard application for a specific open position",
            category: "job_career",
            isPopular: true,
        },
        draft: {
            subject: "Application for {{role}} - {{your_name}}",
            body: `Hi {{recipient_name}},

I am writing to express my interest in the {{role}} position at {{company}}.

With experience in {{your_skills}}, I believe I would be a strong fit for this role and could contribute meaningfully to your team.

I have attached my resume for your review and would welcome the opportunity to discuss this further.

Best regards,
{{your_name}}`,
        },
    },

    job_apply_cold: {
        meta: {
            label: "Cold Application",
            description: "Direct inquiry for potential openings at a company",
            category: "job_career",
        },
        draft: {
            subject: "Exploring opportunities at {{company}}",
            body: `Hi {{recipient_name}},

I hope you are doing well. I am reaching out to explore potential opportunities at {{company}}.

I work as a {{role}} with experience in {{your_skills}} and would be interested in contributing if there is a suitable opening now or in the future.

Happy to share my resume or connect for a brief conversation.

Best regards,
{{your_name}}`,
        },
    },

    job_apply_referral: {
        meta: {
            label: "Referral Application",
            description: "Job application mentions a mutual contact or referral",
            category: "job_career",
        },
        draft: {
            subject: "Application for {{role}} – Referred by {{Referrer Name}}",
            body: `Hi {{recipient_name}},

I was referred by {{Referrer Name}} to apply for the {{role}} position at {{company}}.

Based on my background in {{your_skills}}, I believe my experience aligns well with what your team is looking for.

I have attached my resume for your consideration and would appreciate the opportunity to discuss further.

Best regards,
{{your_name}}`,
        },
    },

    job_apply_internship: {
        meta: {
            label: "Internship Application",
            description: "Application for an internship or trainee position",
            category: "job_career",
        },
        draft: {
            subject: "Internship application – {{role}}",
            body: `Hi {{recipient_name}},

I am writing to apply for the {{role}} internship opportunity at {{company}}.

I am currently {{Your Current Status}} and have been building skills in {{your_skills}}, which I am eager to apply in a practical setting.

Please find my resume attached. I would appreciate the opportunity to learn and contribute to your team.

Best regards,
{{your_name}}`,
        },
    },

    job_apply_freelance: {
        meta: {
            label: "Freelance/Project Inquiry",
            description: "Inquiry for short-term or contract-based project work",
            category: "job_career",
        },
        draft: {
            subject: "Freelance support for {{Project / Role}}",
            body: `Hi {{recipient_name}},

I am reaching out to explore freelance opportunities related to {{Project / Role}} at {{company}}.

I have experience working with {{your_skills}} and have supported similar projects in the past.

If this is of interest, I would be happy to discuss scope, timelines, and availability.

Best regards,
{{your_name}}`,
        },
    },

    job_apply_remote: {
        meta: {
            label: "Remote Role Application",
            description: "Applying specifically for a remote-working position",
            category: "job_career",
        },
        draft: {
            subject: "Application for remote {{role}}",
            body: `Hi {{recipient_name}},

I am writing to apply for the remote {{role}} position at {{company}}.

I have experience working remotely and collaborating across teams, with a strong background in {{your_skills}}.

I have attached my resume and would welcome the opportunity to discuss how I could contribute.

Best regards,
{{your_name}}`,
        },
    },

    job_apply_career_page_followup: {
        meta: {
            label: "Career Page Follow-up",
            description: "Checking status after applying via company portal",
            category: "job_career",
        },
        draft: {
            subject: "Following up on my application – {{role}}",
            body: `Hi {{recipient_name}},

I recently applied for the {{role}} position through your careers page and wanted to follow up.

I am very interested in the opportunity and believe my experience in {{your_skills}} aligns well with the role.

Thank you for your time and consideration.

Best regards,
{{your_name}}`,
        },
    },

    /* ================================
       Recruiter & HR
    ================================ */

    recruiter_initial_outreach: {
        meta: {
            label: "Initial Recruiter Outreach",
            description: "Starting a conversation with a talent acquisition specialist",
            category: "job_career",
        },
        draft: {
            subject: "Interest in opportunities at {{company}}",
            body: `Hi {{recipient_name}},

I hope you are doing well. I am reaching out to express my interest in potential opportunities at {{company}}.

I work as a {{role}} with experience in {{your_skills}} and would be glad to connect if there are relevant openings.

Best regards,
{{your_name}}`,
        },
    },

    recruiter_response: {
        meta: {
            label: "Response to Recruiter",
            description: "Replying to a recruiter's initial message or inquiry",
            category: "job_career",
        },
        draft: {
            subject: "Re: Opportunity at {{company}}",
            body: `Hi {{recipient_name}},

Thank you for reaching out. I appreciate you considering my profile.

I would be happy to share additional details or discuss how my experience in {{your_skills}} could be a fit.

Best regards,
{{your_name}}`,
        },
    },

    recruiter_open_positions: {
        meta: {
            label: "Check Open Positions",
            description: "Inquiring about current openings relevant to your profile",
            category: "job_career",
        },
        draft: {
            subject: "Inquiry about open positions",
            body: `Hi {{recipient_name}},

I wanted to check if there are any current or upcoming openings relevant to my background in {{your_skills}}.

Please let me know if it would be helpful to share my resume or schedule a conversation.

Best regards,
{{your_name}}`,
        },
    },

    recruiter_availability: {
        meta: {
            label: "Interview Availability",
            description: "Providing your schedule for a potential interview",
            category: "job_career",
        },
        draft: {
            subject: "Availability for discussion",
            body: `Hi {{recipient_name}},

Thank you for your message. I am available to connect on {{Available Dates / Times}}.

Please let me know what works best for you.

Best regards,
{{your_name}}`,
        },
    },

    recruiter_salary_discussion: {
        meta: {
            label: "Salary Expectations",
            description: "Discussing compensation during the hiring process",
            category: "job_career",
        },
        draft: {
            subject: "Compensation discussion – {{role}}",
            body: `Hi {{recipient_name}},

Thank you for raising the topic of compensation.

Based on my experience and market research, I am looking for a range of {{Expected Salary Range}}. I am open to discussion.

Best regards,
{{your_name}}`,
        },
    },

    recruiter_location_discussion: {
        meta: {
            label: "Work Mode Discussion",
            description: "Confirming Remote/Hybrid/On-site preferences",
            category: "job_career",
        },
        draft: {
            subject: "Location and work arrangement",
            body: `Hi {{recipient_name}},

Thank you for clarifying the location details for the role.

I am comfortable with {{Remote / Hybrid / On-site}} arrangements and open to discussing this further if needed.

Best regards,
{{your_name}}`,
        },
    },

    /* ================================
       Interview
    ================================ */

    interview_confirmation: {
        meta: {
            label: "Confirm Interview",
            description: "Finalizing the time and date for a scheduled interview",
            category: "job_career",
        },
        draft: {
            subject: "Interview confirmation – {{role}}",
            body: `Hi {{recipient_name}},

Thank you for the interview invitation. I would like to confirm my availability for the interview scheduled on {{Date and Time}}.

Looking forward to our conversation.

Best regards,
{{your_name}}`,
        },
    },

    interview_reschedule: {
        meta: {
            label: "Reschedule Interview",
            description: "Requesting a change to a previously scheduled interview",
            category: "job_career",
        },
        draft: {
            subject: "Request to reschedule interview – {{role}}",
            body: `Hi {{recipient_name}},

Due to an unforeseen conflict, I wanted to ask if it would be possible to reschedule the interview.

I am available on {{Alternative Dates / Times}} and apologize for any inconvenience caused.

Best regards,
{{your_name}}`,
        },
    },

    interview_thank_you: {
        meta: {
            label: "Post-Interview Thanks",
            description: "Sending a thank-you note shortly after an interview",
            category: "job_career",
        },
        draft: {
            subject: "Thank you for the interview – {{role}}",
            body: `Hi {{recipient_name}},

Thank you for taking the time to speak with me about the {{role}} position.

I enjoyed learning more about the team and the work being done at {{company}}. Our discussion further strengthened my interest in the role.

Best regards,
{{your_name}}`,
        },
    },

    interview_followup: {
        meta: {
            label: "Interview Status Follow-up",
            description: "Checking status after no response following an interview",
            category: "job_career",
        },
        draft: {
            subject: "Following up on interview – {{role}}",
            body: `Hi {{recipient_name}},

I wanted to follow up regarding the interview for the {{role}} position.

Please let me know if there are any updates or additional information I can provide.

Best regards,
{{your_name}}`,
        },
    },

    interview_feedback_request: {
        meta: {
            label: "Request Feedback",
            description: "Asking for constructive feedback after an interview rejection",
            category: "job_career",
        },
        draft: {
            subject: "Interview feedback request",
            body: `Hi {{recipient_name}},

Thank you again for the interview opportunity.

If possible, I would appreciate any feedback you could share, as it would be very helpful for my professional growth.

Best regards,
{{your_name}}`,
        },
    },

    offer_followup: {
        meta: {
            label: "Offer Follow-up",
            description: "Checking status when waiting for a formal offer letter",
            category: "job_career",
        },
        draft: {
            subject: "Following up on offer discussion",
            body: `Hi {{recipient_name}},

I wanted to follow up regarding the offer discussion for the {{role}} position.

Please let me know if there are any updates or next steps.

Best regards,
{{your_name}}`,
        },
    },

    offer_acceptance: {
        meta: {
            label: "Accept Offer",
            description: "Official acceptance of a provided job offer",
            category: "job_career",
        },
        draft: {
            subject: "Offer acceptance – {{role}}",
            body: `Hi {{recipient_name}},

Thank you for the offer for the {{role}} position at {{company}}.

I am happy to accept the offer and am excited to join the team. Please let me know the next steps.

Best regards,
{{your_name}}`,
        },
    },

    offer_rejection: {
        meta: {
            label: "Decline Offer",
            description: "Formally declining a job offer based on other opportunities",
            category: "job_career",
        },
        draft: {
            subject: "Regarding offer – {{role}}",
            body: `Hi {{recipient_name}},

Thank you very much for the offer and for considering me for the {{role}} position.

After careful consideration, I have decided to pursue a different opportunity. I appreciate your time and support.

Best regards,
{{your_name}}`,
        },
    },

    /* ================================
       Networking
    ================================ */

    networking_cold: {
        meta: {
            label: "Cold Networking",
            description: "Connecting with an industry professional for the first time",
            category: "job_career",
        },
        draft: {
            subject: "Connecting regarding {{Field / Role}}",
            body: `Hi {{recipient_name}},

I hope you are doing well. I came across your profile and wanted to connect.

I work as a {{role}} and would value the opportunity to learn from your experience in {{Field}}.

Best regards,
{{your_name}}`,
        },
    },

    networking_alumni: {
        meta: {
            label: "Alumni Connection",
            description: "Connecting with someone who attended the same school",
            category: "job_career",
        },
        draft: {
            subject: "Fellow alumni connection",
            body: `Hi {{recipient_name}},

I noticed that we are both alumni of {{Institution}} and wanted to reach out.

I would be glad to connect and exchange experiences if you are open to it.

Best regards,
{{your_name}}`,
        },
    },

    networking_mutual_intro: {
        meta: {
            label: "Mutual Connection Intro",
            description: "Connecting through a mutual professional contact",
            category: "job_career",
        },
        draft: {
            subject: "Introduction via {{Mutual Contact}}",
            body: `Hi {{recipient_name}},

{{Mutual Contact}} suggested that I reach out to you.

I would appreciate the opportunity to connect and learn more about your work in {{Field}}.

Best regards,
{{your_name}}`,
        },
    },

    networking_referral_request: {
        meta: {
            label: "Ask for Referral",
            description: "Requesting a job referral from a known contact",
            category: "job_career",
        },
        draft: {
            subject: "Referral request – {{role}}",
            body: `Hi {{recipient_name}},

I hope you are doing well. I am currently exploring opportunities for the {{role}} position at {{company}}.

If you are comfortable, I would appreciate a referral or any guidance you could share.

Best regards,
{{your_name}}`,
        },
    },

    networking_referral_thanks: {
        meta: {
            label: "Thank You for Referral",
            description: "Expressing gratitude after a contact referred you",
            category: "job_career",
        },
        draft: {
            subject: "Thank you for the referral",
            body: `Hi {{recipient_name}},

Thank you very much for taking the time to refer me.

I truly appreciate your support and will keep you updated.

Best regards,
{{your_name}}`,
        },
    },

    networking_event_followup: {
        meta: {
            label: "Post-Event Networking",
            description: "Following up with someone you met at an event or conference",
            category: "job_career",
        },
        draft: {
            subject: "Great connecting at {{Event Name}}",
            body: `Hi {{recipient_name}},

It was great meeting you at {{Event Name}}. I enjoyed our conversation about {{Topic}}.

I would be glad to stay in touch and continue the discussion.

Best regards,
{{your_name}}`,
        },
    },
};

