"use client";

import { useState, useCallback, useEffect } from "react";
import { toast } from "sonner";
import { Loader2, CheckCircle, Mail } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";
type FormVariant = "section" | "footer";

interface NewsletterFormProps {
  variant?: FormVariant;
}

/**
 * Reusable newsletter subscription form with two visual variants
 * - "section": Large CTA layout for homepage (horizontal on desktop)
 * - "footer": Compact inline layout for footer
 */
export default function NewsletterForm({
  variant = "section",
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (status !== "success") return;
    const timer = setTimeout(() => {
      setStatus("idle");
      setEmail("");
    }, 4000);
    return () => clearTimeout(timer);
  }, [status]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setErrorMessage("");

      const trimmed = email.trim();
      if (!trimmed) {
        setErrorMessage("Email address is required");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmed)) {
        setErrorMessage("Please enter a valid email address");
        return;
      }

      setStatus("loading");

      try {
        const res = await fetch("/api/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: trimmed }),
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(
            data.error || "Something went wrong. Please try again.",
          );
        }

        setStatus("success");
        toast.success(data.message || "Subscribed successfully!");
      } catch (err) {
        setStatus("error");
        const message =
          err instanceof Error ? err.message : "An unexpected error occurred";
        setErrorMessage(message);
        toast.error(message);
      }
    },
    [email],
  );

  if (status === "success") {
    return variant === "section" ? (
      <div className="mt-8 flex flex-col items-center gap-3 text-white">
        <CheckCircle className="h-12 w-12 text-emerald-300" />
        <p className="text-lg font-semibold">You&apos;re all set!</p>
        <p className="text-indigo-200">
          Check your inbox for a welcome message.
        </p>
      </div>
    ) : (
      <div className="flex items-center gap-2 text-emerald-400">
        <CheckCircle className="h-5 w-5" />
        <span className="text-sm font-medium">Subscribed!</span>
      </div>
    );
  }

  const isFooter = variant === "footer";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={isFooter ? "space-y-2" : ""}
    >
      <div
        className={
          isFooter
            ? "flex"
            : "flex flex-col gap-3 sm:flex-row sm:justify-center"
        }
      >
        <div
          className={
            isFooter ? "relative flex-1" : "relative w-full sm:max-w-md"
          }
        >
          {!isFooter && (
            <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          )}
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errorMessage) setErrorMessage("");
            }}
            placeholder={isFooter ? "Your email" : "Enter your email address"}
            required
            disabled={status === "loading"}
            aria-label="Email address"
            aria-invalid={!!errorMessage}
            className={
              isFooter
                ? "w-full rounded-l-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-500 transition focus:border-blue-500 focus:outline-none disabled:opacity-50"
                : `w-full rounded-lg ${!isFooter ? "pl-12" : "px-5"} py-3 text-gray-900 shadow-lg placeholder:text-gray-400 transition focus:outline-none focus:ring-2 focus:ring-amber-400 disabled:opacity-50`
            }
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className={
            isFooter
              ? "rounded-r-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 disabled:opacity-50"
              : "inline-flex items-center justify-center gap-2 rounded-lg bg-amber-400 px-6 py-3 font-bold text-gray-900 shadow-lg transition hover:bg-amber-300 disabled:opacity-50"
          }
        >
          {status === "loading" ? (
            <>
              <Loader2
                className={`animate-spin ${isFooter ? "h-4 w-4" : "h-5 w-5"}`}
              />
              {!isFooter && "Subscribing..."}
            </>
          ) : isFooter ? (
            "Subscribe"
          ) : (
            "Subscribe Free"
          )}
        </button>
      </div>

      {errorMessage && (
        <p
          role="alert"
          className={
            isFooter
              ? "mt-1 text-xs text-red-400"
              : "mt-2 text-center text-sm text-red-200"
          }
        >
          {errorMessage}
        </p>
      )}
    </form>
  );
}
