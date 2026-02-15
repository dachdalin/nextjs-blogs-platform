/**
 * Base API Error class
 */
export class ApiError extends Error {
  constructor(
    public statusCode: number,
    public message: string,
    public code?: string
  ) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Validation Error - 400 Bad Request
 */
export class ValidationError extends ApiError {
  constructor(message: string, public details?: unknown) {
    super(400, message, "VALIDATION_ERROR");
  }
}

/**
 * Spam Detection Error - 400 Bad Request
 */
export class SpamError extends ApiError {
  constructor(message: string = "Spam content detected") {
    super(400, message, "SPAM_DETECTED");
  }
}

/**
 * Email Service Error - 500 Internal Server Error
 */
export class EmailServiceError extends ApiError {
  constructor(message: string = "Failed to send email", public originalError?: unknown) {
    super(500, message, "EMAIL_SERVICE_ERROR");
  }
}

/**
 * Configuration Error - 500 Internal Server Error
 */
export class ConfigurationError extends ApiError {
  constructor(message: string) {
    super(500, message, "CONFIGURATION_ERROR");
  }
}

/**
 * Rate Limit Error - 429 Too Many Requests
 */
export class RateLimitError extends ApiError {
  constructor(message: string = "Too many requests. Please try again later.") {
    super(429, message, "RATE_LIMIT_EXCEEDED");
  }
}
