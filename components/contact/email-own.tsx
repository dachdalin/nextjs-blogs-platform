"use client";

interface EmailOwnProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}
export default function EmailOwn({
  name,
  email,
  subject,
  message,
}: EmailOwnProps) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <h2 style={{ color: "#17a2b8" }}>New Contact Form Submission</h2>
      <div
        style={{
          background: "#f8f9fa",
          padding: "20px",
          borderRadius: "8px",
          margin: "20px 0",
        }}
      >
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Subject:</strong> {subject}
        </p>
      </div>
      <div
        style={{
          background: "#ffffff",
          padding: "20px",
          border: "1px solid #dee2e6",
          borderRadius: "8px",
        }}
      >
        <h3 style={{ color: "#495057" }}>Message:</h3>
        <p style={{ lineHeight: "1.6", color: "#495057" }}>
          {message.replace(/\n/g, "<br>")}
        </p>
      </div>
      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          background: "#e9ecef",
          borderRadius: "8px",
          fontSize: "14px",
          color: "#6c757d",
        }}
      >
        <p>This email was sent from your portfolio contact form.</p>
        <p>Reply directly to this email to respond to {name}.</p>
      </div>
    </div>
  );
}
