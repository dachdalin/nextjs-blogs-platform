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
    this.windowMs = windowMs; // Default: 1 minute
    this.maxRequests = maxRequests; // Default: 5 requests per window
  }

  /**
   * Get client identifier from request
   */
  private getClientId(request: NextRequest): string {
    // Try to get IP from various headers (for proxies/load balancers)
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

    // Get existing requests for this client
    const clientRequests = this.requests.get(clientId) || [];

    // Filter out requests outside the current window
    const recentRequests = clientRequests.filter((time) => time > windowStart);

    // Check if limit exceeded
    if (recentRequests.length >= this.maxRequests) {
      throw new RateLimitError(
        `Rate limit exceeded. Maximum ${this.maxRequests} requests per ${this.windowMs / 1000} seconds.`
      );
    }

    // Add current request
    recentRequests.push(now);
    this.requests.set(clientId, recentRequests);

    // Cleanup old entries periodically
    if (Math.random() < 0.01) {
      // 1% chance to cleanup
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
