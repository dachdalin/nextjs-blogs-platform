import { NextRequest } from "next/server";
import { RateLimitError } from "@/lib/errors/api-errors";

/**
 * Simple in-memory rate limiter
 * For production, use Redis or a dedicated rate limiting service
 */
class RateLimiter {
  private requests: Map<string, number[]> = new Map();
  private readonly windowMs: number;
  private readonly maxRequests: number;

  constructor(windowMs: number = 60000, maxRequests: number = 5) {
    this.windowMs = windowMs;
    this.maxRequests = maxRequests;
  }

  /**
   * Get client identifier from request
   */
  private getClientId(request: NextRequest): string {
    const forwarded = request.headers.get("x-forwarded-for");
    const realIp = request.headers.get("x-real-ip");
    const ip = forwarded?.split(",")[0] || realIp || "unknown";

    return ip;
  }

  /**
   * Check if request should be rate limited
   * @throws {RateLimitError} if rate limit exceeded
   */
  check(request: NextRequest): void {
    const clientId = this.getClientId(request);
    const now = Date.now();
    const windowStart = now - this.windowMs;

    const clientRequests = this.requests.get(clientId) || [];

    const recentRequests = clientRequests.filter((time) => time > windowStart);

    if (recentRequests.length >= this.maxRequests) {
      throw new RateLimitError(
        `Rate limit exceeded. Maximum ${this.maxRequests} requests per ${this.windowMs / 1000} seconds.`
      );
    }

    recentRequests.push(now);
    this.requests.set(clientId, recentRequests);

    if (Math.random() < 0.01) {
      this.cleanup();
    }
  }

  /**
   * Clean up old entries from memory
   */
  private cleanup(): void {
    const now = Date.now();
    const windowStart = now - this.windowMs;

    for (const [clientId, requests] of this.requests.entries()) {
      const recentRequests = requests.filter((time) => time > windowStart);
      
      if (recentRequests.length === 0) {
        this.requests.delete(clientId);
      } else {
        this.requests.set(clientId, recentRequests);
      }
    }
  }
}

/**
 * Rate limiter instance for contact form
 * 5 requests per minute per IP
 */
export const contactRateLimiter = new RateLimiter(60000, 5);
