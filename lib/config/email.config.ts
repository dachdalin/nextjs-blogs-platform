import { ConfigurationError } from "@/lib/errors/api-errors";

/**
 * Email configuration interface
 */
interface EmailConfig {
  apiKey: string;
  fromEmail: string;
  ownerEmail: string;
  replyToEmail: string;
  ownerName: string;
}

/**
 * Validate and retrieve email configuration from environment variables
 */
function getEmailConfig(): EmailConfig {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.EMAIL_FROM || "contact@nextjs-blogs-platform.com";
  const ownerEmail = process.env.EMAIL_OWNER || "contact@nextjs-blogs-platform.com";
  const replyToEmail = process.env.EMAIL_REPLY_TO || "dachdalin2@gmail.com";
  const ownerName = process.env.OWNER_NAME || "Dach Dalin";

  if (!apiKey) {
    throw new ConfigurationError(
      "RESEND_API_KEY is not configured. Please set it in your environment variables."
    );
  }

  return {
    apiKey,
    fromEmail,
    ownerEmail,
    replyToEmail,
    ownerName,
  };
}

/**
 * Exported email configuration
 * Throws ConfigurationError if required environment variables are missing
 */
export const emailConfig = getEmailConfig();
