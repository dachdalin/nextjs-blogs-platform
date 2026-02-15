import { NextRequest } from "next/server";
import { contactFormSchema, isSuspiciousEmail } from "@/lib/validations/contact";
import { EmailService } from "@/lib/services/email.service";
import { SpamDetectionService } from "@/lib/services/spam-detection.service";
import { contactRateLimiter } from "@/lib/middleware/rate-limiter";
import { successResponse, handleApiError } from "@/lib/utils/api-response";
import { ValidationError } from "@/lib/errors/api-errors";

/**
 * POST /api/contact
 * Handle contact form submissions with validation, spam detection, and email notifications
 */
export async function POST(request: NextRequest) {
  try {
    // 1. Rate limiting check
    contactRateLimiter.check(request);

    // 2. Parse and validate request body
    const body = await request.json();
    const validatedData = contactFormSchema.parse(body);

    // 3. Additional email validation
    if (isSuspiciousEmail(validatedData.email)) {
      throw new ValidationError(
        "Please use a valid email address. Temporary or disposable email addresses are not allowed."
      );
    }

    // 4. Spam detection
    SpamDetectionService.validateFormData(validatedData);

    // 5. Send emails (with retry logic)
    const emailService = new EmailService();
    await emailService.sendContactEmailsWithRetry(validatedData);

    // 6. Log successful submission (structured logging)
    console.log({
      level: "info",
      message: "Contact form submission processed successfully",
      data: {
        email: validatedData.email,
        subject: validatedData.subject,
        timestamp: new Date().toISOString(),
      },
    });

    // 7. Return success response
    return successResponse(
      undefined,
      "Thank you for reaching out! We've received your message and will get back to you soon."
    );
  } catch (error) {
    // Centralized error handling
    console.error({
      level: "error",
      message: "Contact form submission failed",
      error: error instanceof Error ? error.message : "Unknown error",
      timestamp: new Date().toISOString(),
    });

    return handleApiError(error);
  }
}
