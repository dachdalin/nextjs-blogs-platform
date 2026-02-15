import { ContactFormData } from "@/lib/validations/contact";
import { SpamError } from "@/lib/errors/api-errors";

/**
 * Spam keywords to detect in form submissions
 */
const SPAM_KEYWORDS = [
  "viagra",
  "casino",
  "lottery",
  "winner",
  "congratulations",
  "urgent",
  "limited time",
  "act now",
  "free money",
  "click here",
  "buy now",
  "discount",
  "offer expires",
  "investment opportunity",
  "work from home",
  "make money fast",
  "bitcoin",
  "cryptocurrency investment",
  "forex trading",
  "get rich quick",
] as const;

/**
 * Spam detection service
 */
export class SpamDetectionService {
  /**
   * Check if text contains spam keywords
   */
  private static containsSpamKeywords(text: string): boolean {
    const lowerText = text.toLowerCase();
    return SPAM_KEYWORDS.some((keyword) => lowerText.includes(keyword));
  }

  /**
   * Check for excessive capitalization (common in spam)
   */
  private static hasExcessiveCapitalization(text: string): boolean {
    const letters = text.replace(/[^a-zA-Z]/g, "");
    if (letters.length < 10) return false;

    const capitalLetters = text.replace(/[^A-Z]/g, "");
    const ratio = capitalLetters.length / letters.length;

    return ratio > 0.7; // More than 70% capitals
  }

  /**
   * Check for excessive special characters (common in spam)
   */
  private static hasExcessiveSpecialChars(text: string): boolean {
    const specialChars = text.replace(/[a-zA-Z0-9\s]/g, "");
    const ratio = specialChars.length / text.length;

    return ratio > 0.3; // More than 30% special characters
  }

  /**
   * Check for repeated characters (common in spam)
   */
  private static hasRepeatedCharacters(text: string): boolean {
    return /(.)\1{4,}/.test(text); // Same character repeated 5+ times
  }

  /**
   * Validate contact form data for spam
   * @throws {SpamError} if spam is detected
   */
  static validateFormData(data: ContactFormData): void {
    const { firstName, lastName, subject, message } = data;

    // Check for spam keywords in all text fields
    const textFields = [firstName, lastName, subject, message];
    if (textFields.some((field) => this.containsSpamKeywords(field))) {
      throw new SpamError("Spam content detected in form submission");
    }

    // Check message for spam patterns
    if (this.hasExcessiveCapitalization(message)) {
      throw new SpamError("Excessive capitalization detected");
    }

    if (this.hasExcessiveSpecialChars(message)) {
      throw new SpamError("Excessive special characters detected");
    }

    if (this.hasRepeatedCharacters(message)) {
      throw new SpamError("Suspicious repeated characters detected");
    }

    // Check for very short messages with URLs (common spam pattern)
    const urlPattern = /(https?:\/\/[^\s]+)/gi;
    const urls = message.match(urlPattern) || [];
    if (message.length < 50 && urls.length > 0) {
      throw new SpamError("Suspicious URL pattern detected");
    }
  }
}
