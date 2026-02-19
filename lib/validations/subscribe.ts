import { z } from "zod";

/**
 * Suspicious email patterns to detect disposable or temporary email addresses
 */
export const SUSPICIOUS_EMAIL_PATTERNS = [
  /\d{10,}@/,
  /@tempmail\./,
  /@10minutemail\./,
  /@guerrillamail\./,
  /@mailinator\./,
  /@throwaway\./,
  /@yopmail\./,
  /@trashmail\./,
  /@fakeinbox\./,
  /@sharklasers\./,
  /@guerrillamailblock\./,
  /@grr\.la/,
  /@dispostable\./,
  /@maildrop\./,
  /noreply@/,
  /no-reply@/,
] as const;

/**
 * Subscribe form validation schema
 */
export const subscribeSchema = z.object({
  email: z
    .string()
    .min(1, "Email address is required")
    .email("Please enter a valid email address")
    .max(100, "Email must not exceed 100 characters")
    .toLowerCase()
    .transform((email) => email.trim()),
});

/**
 * Inferred TypeScript type from the Zod schema
 */
export type SubscribeFormData = z.infer<typeof subscribeSchema>;

/**
 * Validate email against suspicious/disposable email patterns
 */
export function isSuspiciousEmail(email: string): boolean {
  return SUSPICIOUS_EMAIL_PATTERNS.some((pattern) => pattern.test(email));
}
