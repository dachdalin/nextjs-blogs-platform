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
    contactRateLimiter.check(request);

    const body = await request.json();
    const validatedData = contactFormSchema.parse(body);

    if (isSuspiciousEmail(validatedData.email)) {
      throw new ValidationError(
        "Please use a valid email address. Temporary or disposable email addresses are not allowed."
      );
    }

    SpamDetectionService.validateFormData(validatedData);

    const emailService = new EmailService();
    await emailService.sendContactEmailsWithRetry(validatedData);

    console.log({
      level: "info",
      message: "Contact form submission processed successfully",
      data: {
        email: validatedData.email,
        subject: validatedData.subject,
        timestamp: new Date().toISOString(),
      },
    });

    return successResponse(
      undefined,
      "Thank you for reaching out! We've received your message and will get back to you soon."
    );
  } catch (error) {
    console.error({
      level: "error",
      message: "Contact form submission failed",
      error: error instanceof Error ? error.message : "Unknown error",
      timestamp: new Date().toISOString(),
    });

    return handleApiError(error);
  }
}
