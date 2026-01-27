import type { StaticTemplate } from "../mail-composer/templates";
import type { FinanceOperationsTemplate } from "../mail-composer/types";

export const financeOperationsTemplates: Record<
    FinanceOperationsTemplate,
    StaticTemplate
> = {
    payment_reminder: {
        meta: {
            label: "Payment Reminder",
            description: "Friendly reminder about an upcoming or recent payment",
            category: "finance_operations",
        },
        draft: {
            subject: "Upcoming Payment Reminder: {{service_name}}",
            body: `Hi {{recipient_name}},

This is a friendly reminder that your payment for {{service_name}} is due on {{due_date}}.

Amount: {{amount}}

You can manage your payments here: {{billing_link}}

Thanks!`,
        },
    },

    payment_overdue: {
        meta: {
            label: "Overdue Notice",
            description: "Alert a customer that their payment is past due",
            category: "finance_operations",
        },
        draft: {
            subject: "Urgent: Your payment for {{service_name}} is overdue",
            body: `Hi {{recipient_name}},

Our records indicate that we haven't received your payment for {{service_name}}, which was due on {{due_date}}.

Please settle the outstanding balance of {{amount}} at your earliest convenience to avoid service interruption.

Payment Link: {{payment_link}}`,
        },
    },

    payment_confirmation: {
        meta: {
            label: "Payment Confirmation",
            description: "Confirm receipt of a successful payment",
            category: "finance_operations",
        },
        draft: {
            subject: "Payment Received: Thank you!",
            body: `Hi {{recipient_name}},

This email confirms that we've successfully received your payment of {{amount}} for {{service_name}}.

Transaction ID: {{transaction_id}}

Your next payment is scheduled for {{next_date}}.

Best,
The Finance Team`,
        },
    },

    procurement_vendor_inquiry: {
        meta: {
            label: "Vendor Inquiry",
            description: "Initial inquiry to a potential vendor about products or services",
            category: "finance_operations",
        },
        draft: {
            subject: "Inquiry regarding {{product/service}} - {{company}}",
            body: `Hi {{recipient_name}},

I'm reaching out from {{company}} to inquire about your {{product/service}} offerings. 

We're interested in {{specific_details}} and would appreciate any pricing or catalog information you can share.

Looking forward to hearing from you.

Best,
{{your_name}}`,
        },
    },

    procurement_quotation: {
        meta: {
            label: "Request for Quotation",
            description: "Formal request for a price quote from a vendor",
            category: "finance_operations",
        },
        draft: {
            subject: "RFQ: {{item_description}} - {{quantity}} units",
            body: `Dear {{recipient_name}},

Please provide a formal quotation for the following items:

- {{item_1}} ({{quantity_1}})
- {{item_2}} ({{quantity_2}})

Please include lead times and delivery costs.

Regards,
{{your_name}}`,
        },
    },

    procurement_purchase_confirmation: {
        meta: {
            label: "Purchase Confirmation",
            description: "Confirm a purchase order sent to a vendor",
            category: "finance_operations",
        },
        draft: {
            subject: "Purchase Order Confirmation: PO #{{po_number}}",
            body: `Hi {{recipient_name}},

This email confirms our purchase of the items listed in PO #{{po_number}}. 

The signed purchase order is attached. Please let us know the expected delivery date.

Best,
{{your_name}}`,
        },
    },

    operations_service_request: {
        meta: {
            label: "Service Request",
            description: "A request for internal or external operational support",
            category: "finance_operations",
        },
        draft: {
            subject: "Operational Service Request: {{task_title}}",
            body: `Hi {{recipient_name}},

I'm requesting operational support for {{task_title}}. 

Details:
{{details}}

Required by: {{deadline}}

Thanks for the help!`,
        },
    },

    operations_sla_update: {
        meta: {
            label: "SLA Update",
            description: "Notify stakeholders about changes to Service Level Agreements",
            category: "finance_operations",
        },
        draft: {
            subject: "Notice: Update to our Service Level Agreement (SLA)",
            body: `Hi Team,

Please be advised that we've updated our internal SLA for {{process_name}}. 

The new response time is now {{new_time}} (previously {{old_time}}). This change is effective immediately.

Best,
Operations Team`,
        },
    },

    operations_vendor_followup: {
        meta: {
            label: "Vendor Follow-up",
            description: "Follow up with a vendor regarding an ongoing request or delivery",
            category: "finance_operations",
        },
        draft: {
            subject: "Follow-up: Update on {{request_title}} / Delivery #{{ref_no}}",
            body: `Hi {{recipient_name}},

I'm following up on the status of {{request_title}}. We're expecting {{item/delivery}} by {{expected_date}}.

Could you please provide an update on the progress?

Thanks,
{{your_name}}`,
        },
    },
};
