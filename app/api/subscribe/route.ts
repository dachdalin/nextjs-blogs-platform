import { NextRequest } from "next/server";
import { subscribeSchema, isSuspiciousEmail } from "@/lib/validations/subscribe";
import { subscribeRateLimiter } from "@/lib/middleware/rate-limiter";
import { successResponse, handleApiError } from "@/lib/utils/api-response";
import { ValidationError } from "@/lib/errors/api-errors";

/**
 * POST /api/subscribe
 * Handle newsletter subscription with validation, spam detection, and rate limiting
 */
export async function POST(request: NextRequest) {
  try {
    subscribeRateLimiter.check(request);

    const body = await request.json();
    const { email } = subscribeSchema.parse(body);

    if (isSuspiciousEmail(email)) {
      throw new ValidationError(
        "Please use a valid email address. Temporary or disposable email addresses are not allowed."
      );
    }

    // TODO: Replace with actual database persistence (e.g. Prisma, Drizzle)
    // await db.subscriber.upsert({ where: { email }, create: { email }, update: {} });

    console.log({
      level: "info",
      message: "Newsletter subscription processed",
      data: { email, timestamp: new Date().toISOString() },
    });

    return successResponse(
      { email },
      "You've been successfully subscribed! Welcome to our community."
    );
  } catch (error) {
    console.error({
      level: "error",
      message: "Newsletter subscription failed",
      error: error instanceof Error ? error.message : "Unknown error",
      timestamp: new Date().toISOString(),
    });

    return handleApiError(error);
  }
}
