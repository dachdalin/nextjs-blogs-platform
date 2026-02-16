"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Log error to error reporting service
    console.error("Error boundary caught:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 px-4 py-12">
      <div className="w-full max-w-2xl animate-fade-in">
        {/* Error Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 animate-ping rounded-full bg-red-400 opacity-20"></div>
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-orange-500 shadow-lg">
              <svg
                className="h-12 w-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="overflow-hidden rounded-2xl border border-red-100 bg-white shadow-xl">
          <div className="p-8 text-center">
            <h1 className="mb-3 text-4xl font-bold text-gray-900">
              Oops! Something went wrong
            </h1>
            <p className="mb-6 text-lg text-gray-600">
              We encountered an unexpected error. Don't worry, our team has been
              notified and we're working on it.
            </p>

            {/* Error Details Toggle */}
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="mb-6 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-gray-700"
            >
              <svg
                className={`h-4 w-4 transition-transform ${showDetails ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
              {showDetails ? "Hide" : "Show"} technical details
            </button>

            {/* Collapsible Error Details */}
            {showDetails && (
              <div className="mb-6 rounded-lg bg-gray-50 p-4 text-left">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Error Details
                </p>
                <p className="mb-2 break-words font-mono text-sm text-red-600">
                  {error.message}
                </p>
                {error.digest && (
                  <p className="font-mono text-xs text-gray-500">
                    Error ID: {error.digest}
                  </p>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button
                onClick={reset}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-red-600 to-orange-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:from-red-700 hover:to-orange-700 hover:shadow-xl"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
                Try Again
              </button>

              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition hover:border-gray-400 hover:bg-gray-50"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                Go Home
              </Link>
            </div>

            {/* Additional Navigation */}
            <div className="mt-8 border-t border-gray-200 pt-6">
              <p className="mb-4 text-sm text-gray-500">
                Or explore these sections:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/blog"
                  className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-200"
                >
                  📚 Blog
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-200"
                >
                  📧 Contact
                </Link>
                <button
                  onClick={() => window.history.back()}
                  className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-200"
                >
                  ← Go Back
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <p className="mt-6 text-center text-sm text-gray-500">
          If this problem persists, please{" "}
          <Link
            href="/contact"
            className="font-medium text-red-600 hover:text-red-700"
          >
            contact our support team
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
