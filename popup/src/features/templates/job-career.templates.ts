// job-career.templates.ts

import type { MailDraft } from "../mail-composer/types";
import type { JobCareerTemplate } from "../mail-composer/types";

export const jobCareerTemplates: Record<
    JobCareerTemplate,
    Omit<MailDraft, "to">
> = {
    /* ================================
       Applications
    ================================ */

    job_apply_specific_role: {
        subject: "Application for {{Role}} - {{Your Name}}",
        body:
            "Hi {{Hiring Manager}},\n\n" +
            "I am writing to express my interest in the {{Role}} position at {{Company}}.\n\n" +
            "With experience in {{Your Skills}}, I believe I would be a strong fit for this role and could contribute meaningfully to your team.\n\n" +
            "I have attached my resume for your review and would welcome the opportunity to discuss this further.\n\n" +
            "Best regards,\n" +
            "{{Your Name}}",
    },

    job_apply_cold: {
        subject: "Exploring opportunities at {{Company}}",
        body:
            "Hi {{Recipient Name}},\n\n" +
            "I hope you are doing well. I am reaching out to explore potential opportunities at {{Company}}.\n\n" +
            "I work as a {{Role}} with experience in {{Your Skills}} and would be interested in contributing if there is a suitable opening now or in the future.\n\n" +
            "Happy to share my resume or connect for a brief conversation.\n\n" +
            "Best regards,\n" +
            "{{Your Name}}",
    },

    job_apply_referral: {
        subject: "Application for {{Role}} – Referred by {{Referrer Name}}",
        body:
            "Hi {{Hiring Manager}},\n\n" +
            "I was referred by {{Referrer Name}} to apply for the {{Role}} position at {{Company}}.\n\n" +
            "Based on my background in {{Your Skills}}, I believe my experience aligns well with what your team is looking for.\n\n" +
            "I have attached my resume for your consideration and would appreciate the opportunity to discuss further.\n\n" +
            "Best regards,\n" +
            "{{Your Name}}",
    },

    job_apply_internship: {
        subject: "Internship application – {{Role}}",
        body:
            "Hi {{Hiring Manager}},\n\n" +
            "I am writing to apply for the {{Role}} internship opportunity at {{Company}}.\n\n" +
            "I am currently {{Your Current Status}} and have been building skills in {{Your Skills}}, which I am eager to apply in a practical setting.\n\n" +
            "Please find my resume attached. I would appreciate the opportunity to learn and contribute to your team.\n\n" +
            "Best regards,\n" +
            "{{Your Name}}",
    },

    job_apply_freelance: {
        subject: "Freelance support for {{Project / Role}}",
        body:
            "Hi {{Recipient Name}},\n\n" +
            "I am reaching out to explore freelance opportunities related to {{Project / Role}} at {{Company}}.\n\n" +
            "I have experience working with {{Your Skills}} and have supported similar projects in the past.\n\n" +
            "If this is of interest, I would be happy to discuss scope, timelines, and availability.\n\n" +
            "Best regards,\n" +
            "{{Your Name}}",
    },

    job_apply_remote: {
        subject: "Application for remote {{Role}}",
        body:
            "Hi {{Hiring Manager}},\n\n" +
            "I am writing to apply for the remote {{Role}} position at {{Company}}.\n\n" +
            "I have experience working remotely and collaborating across teams, with a strong background in {{Your Skills}}.\n\n" +
            "I have attached my resume and would welcome the opportunity to discuss how I could contribute.\n\n" +
            "Best regards,\n" +
            "{{Your Name}}",
    },

    job_apply_career_page_followup: {
        subject: "Following up on my application – {{Role}}",
        body:
            "Hi {{Hiring Manager}},\n\n" +
            "I recently applied for the {{Role}} position through your careers page and wanted to follow up.\n\n" +
            "I am very interested in the opportunity and believe my experience in {{Your Skills}} aligns well with the role.\n\n" +
            "Thank you for your time and consideration.\n\n" +
            "Best regards,\n" +
            "{{Your Name}}",
    },

    /* ================================
       Recruiter & HR
    ================================ */

    recruiter_initial_outreach: {
        subject: "Interest in opportunities at {{Company}}",
        body:
            "Hi {{Recruiter Name}},\n\n" +
            "I hope you are doing well. I am reaching out to express my interest in potential opportunities at {{Company}}.\n\n" +
            "I work as a {{Role}} with experience in {{Your Skills}} and would be glad to connect if there are relevant openings.\n\n" +
            "Best regards,\n" +
            "{{Your Name}}",
    },

    recruiter_response: {
        subject: "Re: Opportunity at {{Company}}",
        body:
            "Hi {{Recruiter Name}},\n\n" +
            "Thank you for reaching out. I appreciate you considering my profile.\n\n" +
            "I would be happy to share additional details or discuss how my experience in {{Your Skills}} could be a fit.\n\n" +
            "Best regards,\n" +
            "{{Your Name}}",
    },

    recruiter_open_positions: {
        subject: "Inquiry about open positions",
        body:
            "Hi {{Recruiter Name}},\n\n" +
            "I wanted to check if there are any current or upcoming openings relevant to my background in {{Your Skills}}.\n\n" +
            "Please let me know if it would be helpful to share my resume or schedule a conversation.\n\n" +
            "Best regards,\n" +
            "{{Your Name}}",
    },

    recruiter_availability: {
        subject: "Availability for discussion",
        body:
            "Hi {{Recruiter Name}},\n\n" +
            "Thank you for your message. I am available to connect on {{Available Dates / Times}}.\n\n" +
            "Please let me know what works best for you.\n\n" +
            "Best regards,\n" +
            "{{Your Name}}",
    },

    recruiter_salary_discussion: {
        subject: "Compensation discussion – {{Role}}",
        body:
            "Hi {{Recruiter Name}},\n\n" +
            "Thank you for raising the topic of compensation.\n\n" +
            "Based on my experience and market research, I am looking for a range of {{Expected Salary Range}}. I am open to discussion.\n\n" +
            "Best regards,\n" +
            "{{Your Name}}",
    },

    recruiter_location_discussion: {
        subject: "Location and work arrangement",
        body:
            "Hi {{Recruiter Name}},\n\n" +
            "Thank you for clarifying the location details for the role.\n\n" +
            "I am comfortable with {{Remote / Hybrid / On-site}} arrangements and open to discussing this further if needed.\n\n" +
            "Best regards,\n" +
            "{{Your Name}}",
    },

    /* ================================
       Interview
    ================================ */

    interview_confirmation: {
        subject: "Interview confirmation – {{Role}}",
        body:
            "Hi {{Interviewer Name}},\n\n" +
            "Thank you for the interview invitation. I would like to confirm my availability for the interview scheduled on {{Date and Time}}.\n\n" +
            "Looking forward to our conversation.\n\n" +
            "Best regards,\n" +
            "{{Your Name}}",
    },

    interview_reschedule: {
        subject: "Request to reschedule interview – {{Role}}",
        body:
            "Hi {{Interviewer Name}},\n\n" +
            "Due to an unforeseen conflict, I wanted to ask if it would be possible to reschedule the interview.\n\n" +
            "I am available on {{Alternative Dates / Times}} and apologize for any inconvenience caused.\n\n" +
            "Best regards,\n" +
            "{{Your Name}}",
    },

    interview_thank_you: {
        subject: "Thank you for the interview – {{Role}}",
        body:
            "Hi {{Interviewer Name}},\n\n" +
            "Thank you for taking the time to speak with me about the {{Role}} position.\n\n" +
            "I enjoyed learning more about the team and the work being done at {{Company}}. Our discussion further strengthened my interest in the role.\n\n" +
            "Best regards,\n" +
            "{{Your Name}}",
    },

    interview_followup: {
        subject: "Following up on interview – {{Role}}",
        body:
            "Hi {{Interviewer Name}},\n\n" +
            "I wanted to follow up regarding the interview for the {{Role}} position.\n\n" +
            "Please let me know if there are any updates or additional information I can provide.\n\n" +
            "Best regards,\n" +
            "{{Your Name}}",
    },

    interview_feedback_request: {
        subject: "Interview feedback request",
        body:
            "Hi {{Interviewer Name}},\n\n" +
            "Thank you again for the interview opportunity.\n\n" +
            "If possible, I would appreciate any feedback you could share, as it would be very helpful for my professional growth.\n\n" +
            "Best regards,\n" +
            "{{Your Name}}",
    },

    offer_followup: {
        subject: "Following up on offer discussion",
        body:
            "Hi {{Recruiter Name}},\n\n" +
            "I wanted to follow up regarding the offer discussion for the {{Role}} position.\n\n" +
            "Please let me know if there are any updates or next steps.\n\n" +
            "Best regards,\n" +
            "{{Your Name}}",
    },

    offer_acceptance: {
        subject: "Offer acceptance – {{Role}}",
        body:
            "Hi {{Recruiter Name}},\n\n" +
            "Thank you for the offer for the {{Role}} position at {{Company}}.\n\n" +
            "I am happy to accept the offer and am excited to join the team. Please let me know the next steps.\n\n" +
            "Best regards,\n" +
            "{{Your Name}}",
    },

    offer_rejection: {
        subject: "Regarding offer – {{Role}}",
        body:
            "Hi {{Recruiter Name}},\n\n" +
            "Thank you very much for the offer and for considering me for the {{Role}} position.\n\n" +
            "After careful consideration, I have decided to pursue a different opportunity. I appreciate your time and support.\n\n" +
            "Best regards,\n" +
            "{{Your Name}}",
    },

    /* ================================
       Networking
    ================================ */

    networking_cold: {
        subject: "Connecting regarding {{Field / Role}}",
        body:
            "Hi {{Recipient Name}},\n\n" +
            "I hope you are doing well. I came across your profile and wanted to connect.\n\n" +
            "I work as a {{Role}} and would value the opportunity to learn from your experience in {{Field}}.\n\n" +
            "Best regards,\n" +
            "{{Your Name}}",
    },

    networking_alumni: {
        subject: "Fellow alumni connection",
        body:
            "Hi {{Recipient Name}},\n\n" +
            "I noticed that we are both alumni of {{Institution}} and wanted to reach out.\n\n" +
            "I would be glad to connect and exchange experiences if you are open to it.\n\n" +
            "Best regards,\n" +
            "{{Your Name}}",
    },

    networking_mutual_intro: {
        subject: "Introduction via {{Mutual Contact}}",
        body:
            "Hi {{Recipient Name}},\n\n" +
            "{{Mutual Contact}} suggested that I reach out to you.\n\n" +
            "I would appreciate the opportunity to connect and learn more about your work in {{Field}}.\n\n" +
            "Best regards,\n" +
            "{{Your Name}}",
    },

    networking_referral_request: {
        subject: "Referral request – {{Role}}",
        body:
            "Hi {{Recipient Name}},\n\n" +
            "I hope you are doing well. I am currently exploring opportunities for the {{Role}} position at {{Company}}.\n\n" +
            "If you are comfortable, I would appreciate a referral or any guidance you could share.\n\n" +
            "Best regards,\n" +
            "{{Your Name}}",
    },

    networking_referral_thanks: {
        subject: "Thank you for the referral",
        body:
            "Hi {{Recipient Name}},\n\n" +
            "Thank you very much for taking the time to refer me.\n\n" +
            "I truly appreciate your support and will keep you updated.\n\n" +
            "Best regards,\n" +
            "{{Your Name}}",
    },

    networking_event_followup: {
        subject: "Great connecting at {{Event Name}}",
        body:
            "Hi {{Recipient Name}},\n\n" +
            "It was great meeting you at {{Event Name}}. I enjoyed our conversation about {{Topic}}.\n\n" +
            "I would be glad to stay in touch and continue the discussion.\n\n" +
            "Best regards,\n" +
            "{{Your Name}}",
    },
};
