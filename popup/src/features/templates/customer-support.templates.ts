import type { StaticTemplate } from "../mail-composer/templates";
import type { CustomerSupportTemplate } from "../mail-composer/types";


export const customerSupportTemplates: Record<
    CustomerSupportTemplate,
    StaticTemplate
> = {
    /* =======================
       Support
    ======================= */

    support_ticket_received: {
        meta: {
            label: "Ticket Received",
            description: "Confirmation that support request has been received",
            category: "customer_support",
        },
        draft: {
            subject: "We’ve received your support request – {{ticket_id}}",
            body: `Hello {{customer_name}},

Thank you for reaching out to {{company_name}}. We’ve received your support request and created ticket {{ticket_id}}.

Our team will review your request and get back to you as soon as possible.

Best regards,
{{support_agent_name}}
{{company_name}} Support`,
        },
    },

    support_investigating: {
        meta: {
            label: "Investigating Issue",
            description: "Inform customer that the issue is under investigation",
            category: "customer_support",
        },
        draft: {
            subject: "Update on your support request – {{ticket_id}}",
            body: `Hello {{customer_name}},

We are currently investigating the issue you reported under ticket {{ticket_id}}.

We’ll update you once we have more information. Thank you for your patience.

Regards,
{{support_agent_name}}
{{company_name}} Support`,
        },
    },

    support_request_details: {
        meta: {
            label: "Request More Details",
            description: "Ask customer for additional information",
            category: "customer_support",
        },
        draft: {
            subject: "Additional information needed for ticket {{ticket_id}}",
            body: `Hello {{customer_name}},

To proceed with your request, we need a bit more information:

{{requested_details}}

Once we have these details, we’ll continue working on your issue.

Thank you,
{{support_agent_name}}
{{company_name}} Support`,
        },
    },

    support_resolved: {
        meta: {
            label: "Issue Resolved",
            description: "Notify customer that the issue is resolved",
            category: "customer_support",
        },
        draft: {
            subject: "Your issue has been resolved – {{ticket_id}}",
            body: `Hello {{customer_name}},

We’re happy to inform you that your issue under ticket {{ticket_id}} has been resolved.

If you experience any further issues, feel free to reply to this email.

Best regards,
{{support_agent_name}}
{{company_name}} Support`,
        },
    },

    support_escalation: {
        meta: {
            label: "Issue Escalated",
            description: "Inform customer that issue has been escalated",
            category: "customer_support",
        },
        draft: {
            subject: "Your support request has been escalated – {{ticket_id}}",
            body: `Hello {{customer_name}},

Your request has been escalated to our senior support team to ensure it’s handled appropriately.

We appreciate your patience and will keep you updated.

Regards,
{{support_agent_name}}
{{company_name}} Support`,
        },
    },

    support_apology: {
        meta: {
            label: "Apology Email",
            description: "Apologize for inconvenience or delay",
            category: "customer_support",
        },
        draft: {
            subject: "Our apologies regarding your experience",
            body: `Hello {{customer_name}},

We sincerely apologize for the inconvenience you experienced.

Your feedback is important to us, and we’re taking steps to ensure this doesn’t happen again.

Thank you for your understanding,
{{support_agent_name}}
{{company_name}} Support`,
        },
    },

    /* =======================
       Billing
    ======================= */

    billing_payment_failed: {
        meta: {
            label: "Payment Failed",
            description: "Notify customer about failed payment",
            category: "customer_support",
        },
        draft: {
            subject: "Payment issue with your {{company_name}} account",
            body: `Hello {{customer_name}},

We were unable to process your recent payment for {{service_name}}.

Please update your payment details to avoid service interruption.

Thank you,
{{company_name}} Billing Team`,
        },
    },

    billing_invoice: {
        meta: {
            label: "Invoice Sent",
            description: "Send invoice to customer",
            category: "customer_support",
        },
        draft: {
            subject: "Your invoice from {{company_name}} – {{invoice_number}}",
            body: `Hello {{customer_name}},

Attached is your invoice {{invoice_number}} for {{billing_period}}.

Please let us know if you have any questions.

Regards,
{{company_name}} Billing Team`,
        },
    },

    billing_refund_initiated: {
        meta: {
            label: "Refund Initiated",
            description: "Inform customer refund has been initiated",
            category: "customer_support",
        },
        draft: {
            subject: "Refund initiated for {{transaction_id}}",
            body: `Hello {{customer_name}},

We’ve initiated a refund for transaction {{transaction_id}}.

The amount should reflect in your account within {{refund_timeline}}.

Best regards,
{{company_name}} Billing Team`,
        },
    },

    billing_refund_completed: {
        meta: {
            label: "Refund Completed",
            description: "Confirm refund completion",
            category: "customer_support",
        },
        draft: {
            subject: "Refund completed – {{transaction_id}}",
            body: `Hello {{customer_name}},

Your refund for transaction {{transaction_id}} has been successfully completed.

Please contact us if you have any questions.

Thank you,
{{company_name}} Billing Team`,
        },
    },

    billing_subscription_cancelled: {
        meta: {
            label: "Subscription Cancelled",
            description: "Confirm subscription cancellation",
            category: "customer_support",
        },
        draft: {
            subject: "Your subscription has been cancelled",
            body: `Hello {{customer_name}},

This email confirms that your subscription has been cancelled effective {{cancellation_date}}.

We appreciate your time with {{company_name}}.

Regards,
{{company_name}} Billing Team`,
        },
    },

    billing_subscription_renewed: {
        meta: {
            label: "Subscription Renewed",
            description: "Confirm subscription renewal",
            category: "customer_support",
        },
        draft: {
            subject: "Subscription renewed successfully",
            body: `Hello {{customer_name}},

Your subscription has been successfully renewed and is valid until {{renewal_date}}.

Thank you for continuing with {{company_name}}.

Best regards,
{{company_name}} Billing Team`,
        },
    },

    /* =======================
       Incident
    ======================= */

    incident_outage: {
        meta: {
            label: "Service Outage",
            description: "Notify customers of a full outage",
            category: "customer_support",
        },
        draft: {
            subject: "Service outage notification",
            body: `Hello {{customer_name}},

We’re currently experiencing a service outage affecting {{affected_service}}.

Our team is actively working to resolve the issue.

Thank you for your patience,
{{company_name}} Team`,
        },
    },

    incident_partial_outage: {
        meta: {
            label: "Partial Outage",
            description: "Notify customers of partial service disruption",
            category: "customer_support",
        },
        draft: {
            subject: "Partial service disruption notice",
            body: `Hello {{customer_name}},

Some users may be experiencing limited access to {{affected_service}}.

We’re working to restore full functionality as soon as possible.

Regards,
{{company_name}} Team`,
        },
    },

    incident_resolved: {
        meta: {
            label: "Incident Resolved",
            description: "Notify customers incident is resolved",
            category: "customer_support",
        },
        draft: {
            subject: "Service restored",
            body: `Hello {{customer_name}},

The earlier service issue has been fully resolved.

Thank you for your patience during this time.

Best regards,
{{company_name}} Team`,
        },
    },

    incident_maintenance: {
        meta: {
            label: "Scheduled Maintenance",
            description: "Notify customers of planned maintenance",
            category: "customer_support",
        },
        draft: {
            subject: "Scheduled maintenance notification",
            body: `Hello {{customer_name}},

We’ll be performing scheduled maintenance on {{maintenance_date}} between {{start_time}} and {{end_time}}.

During this period, some services may be unavailable.

Thank you,
{{company_name}} Team`,
        },
    },
};
