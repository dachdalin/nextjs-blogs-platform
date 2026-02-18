"use client";

import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({
  code,
  language = "javascript",
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  return (
    <div className="group relative my-6 overflow-hidden rounded-lg">
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2">
        <span className="text-xs font-medium uppercase tracking-wide text-gray-400">
          {language}
        </span>
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 rounded px-2 py-1 text-xs text-gray-400 transition hover:bg-gray-700 hover:text-white"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>

      <pre className="overflow-x-auto bg-gray-900 p-4 text-sm">
        <code
          className={`language-${language}`}
          style={{
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
          }}
        >
          {code}
        </code>
      </pre>

      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
        <div className="absolute right-4 top-4 rounded-lg bg-gray-900/90 px-3 py-1.5 text-xs text-white shadow-lg">
          Click to copy
        </div>
      </div>
    </div>
  );
}
