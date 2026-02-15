import { z } from "zod";

/**
 * Suspicious email patterns to detect disposable or temporary email addresses
 */
export const SUSPICIOUS_EMAIL_PATTERNS = [
  /\d{10,}@/, // Emails with 10+ consecutive digits before @
  /@tempmail\./, 
  /@10minutemail\./, 
  /@guerrillamail\./,
  /@mailinator\./,
  /@throwaway\./,
  /noreply@/, 
  /no-reply@/,
] as const;

/**
 * Contact form validation schema
 */
export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must not exceed 50 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "First name contains invalid characters"),
  
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must not exceed 50 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Last name contains invalid characters"),
  
  email: z
    .string()
    .email("Invalid email address")
    .max(100, "Email must not exceed 100 characters")
    .toLowerCase()
    .transform((email) => email.trim()),
  
  phone: z
    .string()
    .regex(/^[\d\s()+-]*$/, "Phone number contains invalid characters")
    .max(20, "Phone number must not exceed 20 characters")
    .optional()
    .or(z.literal("")),
  
  company: z
    .string()
    .max(100, "Company name must not exceed 100 characters")
    .optional()
    .or(z.literal("")),
  
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(200, "Subject must not exceed 200 characters"),
  
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message must not exceed 5000 characters"),
});

/**
 * Inferred TypeScript type from the Zod schema
 */
export type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Validate email against suspicious patterns
 */
export function isSuspiciousEmail(email: string): boolean {
  return SUSPICIOUS_EMAIL_PATTERNS.some((pattern) => pattern.test(email));
}
