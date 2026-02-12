export interface JobPacket {
    role: string;
    company: string;
    email: string;
    rawText: string;
}

export class JobParser {
    static parse(text: string): JobPacket[] {
        if (!text) return [];

        // 1. Extract all emails
        const emailRegex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi;
        const foundEmails = Array.from(new Set(text.match(emailRegex) || []));

        if (foundEmails.length === 0) return [];

        // 2. Segment text by email occurrences to find proximity context
        // We'll treat each email as a potential job packet
        const packets: JobPacket[] = foundEmails.map(email => {
            const emailIndex = text.indexOf(email);
            // Look at ~500 chars around the email
            const context = text.slice(Math.max(0, emailIndex - 250), Math.min(text.length, emailIndex + 250));

            return {
                email,
                role: this.extractRole(context),
                company: this.extractCompany(context),
                rawText: text
            };
        });

        return packets;
    }

    private static extractRole(context: string): string {
        // Look for common job title patterns
        const rolePatterns = [
            /(?:looking for a|hiring a|opening for a|role:?|position:?)\s+([^.\n,]{2,40})/i,
            /([^.\n,]{2,40})\s+(?:role|position|opportunity|developer|engineer|manager|lead|specialist)/i
        ];

        for (const pattern of rolePatterns) {
            const match = context.match(pattern);
            if (match && match[1]) {
                return this.cleanLabel(match[1]);
            }
        }
        return "";
    }

    private static extractCompany(context: string): string {
        // Look for "at [Company]" or "[Company] is hiring"
        const companyPatterns = [
            /(?:at|with|joining)\s+([A-Z][A-Za-z0-9\s&]{1,30})(?:\.|\s|,|$)/,
            /([A-Z][A-Za-z0-9\s&]{1,30})\s+(?:is hiring|team is)/
        ];

        for (const pattern of companyPatterns) {
            const match = context.match(pattern);
            if (match && match[1]) {
                const cleaned = this.cleanLabel(match[1]);
                if (cleaned && !["We", "I", "The"].includes(cleaned)) return cleaned;
            }
        }

        // Fallback: try to find something that looks like a company name if 'at' is missing
        return "";
    }

    private static cleanLabel(text: string): string {
        return text
            .replace(/^(a|an|the|is|are|for)\s+/i, "")
            .replace(/\s+/g, " ")
            .trim();
    }
}
