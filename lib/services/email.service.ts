import { Resend } from "resend";
import { ContactFormData } from "@/lib/validations/contact";
import { EmailServiceError } from "@/lib/errors/api-errors";
import { emailConfig } from "@/lib/config/email.config";
import EmailOwn from "@/components/contact/email-own";
import EmailClient from "@/components/contact/email-client";

/**
 * Email service for sending contact form notifications
 */
export class EmailService {
  private resend: Resend;

  constructor() {
    this.resend = new Resend(emailConfig.apiKey);
  }

  /**
   * Send notification email to the site owner
   */
  private async sendOwnerNotification(data: ContactFormData): Promise<void> {
    const fullName = `${data.firstName} ${data.lastName}`;

    try {
      await this.resend.emails.send({
        from: emailConfig.fromEmail,
        to: emailConfig.ownerEmail,
        replyTo: data.email,
        subject: `New Contact Form: ${data.subject}`,
        react: EmailOwn({
          name: fullName,
          email: data.email,
          subject: data.subject,
          message: data.message,
        }),
      });
    } catch (error) {
      console.error("Failed to send owner notification:", error);
      throw new EmailServiceError(
        "Failed to send notification to site owner",
        error
      );
    }
  }

  /**
   * Send confirmation email to the client
   */
  private async sendClientConfirmation(data: ContactFormData): Promise<void> {
    const fullName = `${data.firstName} ${data.lastName}`;

    try {
      await this.resend.emails.send({
        from: emailConfig.fromEmail,
        to: data.email,
        replyTo: emailConfig.replyToEmail,
        subject: `Thank you for contacting us - ${data.subject}`,
        react: EmailClient({
          name: fullName,
          email: data.email,
          subject: data.subject,
          message: data.message,
        }),
      });
    } catch (error) {
      // Log but don't throw - client confirmation is not critical
      console.error("Failed to send client confirmation:", error);
    }
  }

  /**
   * Send both owner notification and client confirmation emails
   * Owner notification is critical, client confirmation is best-effort
   */
  async sendContactEmails(data: ContactFormData): Promise<void> {
    // Send owner notification (critical - will throw on failure)
    await this.sendOwnerNotification(data);

    // Send client confirmation (best-effort - won't throw on failure)
    await this.sendClientConfirmation(data);
  }

  /**
   * Send contact emails with retry logic
   */
  async sendContactEmailsWithRetry(
    data: ContactFormData,
    maxRetries: number = 3
  ): Promise<void> {
    let lastError: unknown;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        await this.sendContactEmails(data);
        return; // Success
      } catch (error) {
        lastError = error;
        console.error(`Email send attempt ${attempt} failed:`, error);

        // Don't retry on the last attempt
        if (attempt < maxRetries) {
          // Exponential backoff: 1s, 2s, 4s
          const delay = Math.pow(2, attempt - 1) * 1000;
          await new Promise((resolve) => setTimeout(resolve, delay));
        }
      }
    }

    // All retries failed
    throw new EmailServiceError(
      "Failed to send email after multiple attempts",
      lastError
    );
  }
}
