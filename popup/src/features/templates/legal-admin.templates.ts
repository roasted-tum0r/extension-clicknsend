import type { StaticTemplate } from "../mail-composer/templates";
import type { LegalAdminTemplate } from "../mail-composer/types";

export const legalAdminTemplates: Record<
    LegalAdminTemplate,
    StaticTemplate
> = {
    /* ================================
       Permissions & Authorization
    ================================ */

    permission_consent: {
        meta: {
            label: "Consent Request",
            description: "Ask for permission to use or share something",
            category: "legal_admin",
        },
        draft: {
            subject: "Request for Consent: {{topic}}",
            body: `Dear {{recipient_name}},

I am writing to formally request your consent for {{action/use}}.

We intend to use {{item}} for the purpose of {{purpose}}. 

Please let us know if you have any questions or if we should proceed with a formal agreement.

Sincerely,
{{your_name}}`,
        },
    },

    permission_authorization: {
        meta: {
            label: "Authorization Request",
            description: "Request official authorization for an action",
            category: "legal_admin",
        },
        draft: {
            subject: "Formal Authorization Required: {{action}}",
            body: `To whom it may concern,

I am requesting formal authorization to perform the following action: {{action}}.

This is necessary for {{reason}}. I have attached the relevant documentation for your review.

Please let me know the next steps for approval.

Best regards,
{{your_name}}`,
        },
    },

    /* ================================
       NDAs & Privacy
    ================================ */

    nda_send: {
        meta: {
            label: "Send NDA",
            description: "Send a Non-Disclosure Agreement for signing",
            category: "legal_admin",
        },
        draft: {
            subject: "Non-Disclosure Agreement: {{company}}",
            body: `Hi {{recipient_name}},

As discussed, please find attached the Non-Disclosure Agreement (NDA) for our upcoming collaboration.

Please review, sign, and return a copy at your earliest convenience so we can move forward.

Best regards,
{{your_name}}`,
        },
    },

    nda_followup: {
        meta: {
            label: "NDA Follow-up",
            description: "Follow up on an unsigned NDA",
            category: "legal_admin",
        },
        draft: {
            subject: "Follow-up: Pending NDA for {{company}}",
            body: `Hi {{recipient_name}},

I'm following up on the NDA sent on {{date}}. 

We're eager to start our discussions and would appreciate it if you could return the signed copy as soon as possible.

Thanks,
{{your_name}}`,
        },
    },

    /* ================================
       Complaints
    ================================ */

    complaint_service: {
        meta: {
            label: "Service Complaint",
            description: "Formal complaint regarding a service issue",
            category: "legal_admin",
        },
        draft: {
            subject: "Formal Complaint: Service issue (Ref: {{ref_number}})",
            body: `To the Support Team,

I am writing to express my dissatisfaction with the service I received on {{date}}.

The issue was {{issue_description}}. I would appreciate it if you could look into this and provide a resolution.

Regards,
{{your_name}}`,
        },
    },

    complaint_product: {
        meta: {
            label: "Product Complaint",
            description: "Formal complaint regarding a defective or incorrect product",
            category: "legal_admin",
        },
        draft: {
            subject: "Complaint regarding product: {{product_name}}",
            body: `To whom it may concern,

I am writing to report an issue with the {{product_name}} I purchased on {{date}} (Order ID: {{order_id}}).

The product is {{defective/incorrect}} because {{reason}}. 

I would like to request a {{replacement/refund}}.

Sincerely,
{{your_name}}`,
        },
    },

    complaint_escalation: {
        meta: {
            label: "Complaint Escalation",
            description: "Escalate an unresolved issue to management",
            category: "legal_admin",
        },
        draft: {
            subject: "Escalation: Unresolved issue (Ticket: {{ticket_id}})",
            body: `To the Management Team,

I am writing to escalate an ongoing issue (Ticket {{ticket_id}}) that has not been resolved to my satisfaction.

I have been in contact with support since {{date}}, but the issue {{problem_details}} remains unresolved.

I look forward to your prompt response.

Regards,
{{your_name}}`,
        },
    },

    /* ================================
       Legal Documents
    ================================ */

    legal_notice_response: {
        meta: {
            label: "Legal Notice Response",
            description: "Formal response to a legal inquiry or notice",
            category: "legal_admin",
        },
        draft: {
            subject: "Response to Legal Notice (Ref: {{notice_ref}})",
            body: `Dear {{lawyer/firm_name}},

We acknowledge receipt of your notice dated {{date}}. 

We are currently reviewing the matter and will provide a formal response by {{date}}.

Sincerely,
{{your_name}}`,
        },
    },

    document_certificate: {
        meta: {
            label: "Certificate Request",
            description: "Request a formal certificate or proof",
            category: "legal_admin",
        },
        draft: {
            subject: "Request for {{certificate_type}}",
            body: `To the Admin Department,

Could you please provide me with a {{certificate_type}} for {{purpose}}?

Let me know if you need any further information or documentation from my end.

Best regards,
{{your_name}}`,
        },
    },

    document_invoice: {
        meta: {
            label: "Request Invoice",
            description: "Request a formal invoice for a transaction",
            category: "legal_admin",
        },
        draft: {
            subject: "Request for Invoice: {{service/product}}",
            body: `Hi Finance Team,

Could you please send the invoice for the {{service/product}} purchased on {{date}}?

Amount: {{amount}}
Transaction ID: {{transaction_id}}

Thanks!`,
        },
    },

    document_contract: {
        meta: {
            label: "Send Contract",
            description: "Send a formal business contract for review/signature",
            category: "legal_admin",
        },
        draft: {
            subject: "Contract for {{project/service}}: {{company}}",
            body: `Hi {{recipient_name}},

Please find the formal agreement for {{project/service}} attached.

Please let us know if you have any questions or if you're ready to proceed with the signature.

Regards,
{{your_name}}`,
        },
    },

    document_contract_clarification: {
        meta: {
            label: "Contract Clarification",
            description: "Ask a question about a specific clause in a contract",
            category: "legal_admin",
        },
        draft: {
            subject: "Question regarding {{clause_number}} in the agreement",
            body: `Hi {{recipient_name}},

I'm reviewing the contract for {{project}} and had a question about Section {{clause_number}} regarding {{topic}}.

Could you provide some clarification on this?

Thanks,
{{your_name}}`,
        },
    },
};
