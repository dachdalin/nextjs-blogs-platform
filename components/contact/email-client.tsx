"use client";

interface EmailClientProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function EmailClient({
  name,
  email,
  subject,
  message,
}: EmailClientProps) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <h2 style={{ color: "#17a2b8" }}>Thank You for Reaching Out!</h2>
      <p>Hi {name},</p>
      <p>
        Thank you for taking the time to contact me. I've received your message
        and will get back to you as soon as possible.
      </p>

      <div
        style={{
          background: "#f8f9fa",
          padding: "20px",
          borderRadius: "8px",
          margin: "20px 0",
        }}
      >
        <h3 style={{ color: "#495057" }}>Your Message Summary:</h3>
        <p>
          <strong>Subject:</strong> {subject}
        </p>
        <p>
          <strong>Message:</strong> {message.substring(0, 200)}
          {message.length > 200 ? "..." : ""}
        </p>
      </div>

      <p>
        I typically respond within 24-48 hours. If your inquiry is urgent,
        please feel free to reach out to me directly at dachdalin2@gmail.com.
      </p>

      <p>
        Best regards,
        <br />
        Dach Dalin
      </p>

      <div
        style={{
          marginTop: "30px",
          padding: "15px",
          background: "#e9ecef",
          borderRadius: "8px",
          fontSize: "14px",
          color: "#6c757d",
        }}
      >
        <p>This is an automated response. Please do not reply to this email.</p>
      </div>
    </div>
  );
}
