"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="bg-gray-900 py-12 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h5 className="mb-3 flex items-center text-lg font-semibold text-white">
              <svg
                className="mr-2 h-5 w-5 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
                />
              </svg>
              LinBlog
            </h5>
            <p className="mb-4 text-sm">
              Sharing knowledge, tutorials, and insights about modern web
              development and technology.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition hover:text-white"
                  aria-label={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Content */}
          <div>
            <h6 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Content
            </h6>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="transition hover:text-white">
                  All Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/blog?type=tutorial"
                  className="transition hover:text-white"
                >
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  href="/blog?type=code"
                  className="transition hover:text-white"
                >
                  Code Examples
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h6 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h6>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="transition hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="transition hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/term" className="transition hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h6 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Newsletter
            </h6>
            <p className="mb-4 text-sm">
              Subscribe to get the latest articles delivered to your inbox.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                required
                className="w-full rounded-l-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-r-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} LinBlog. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Made with <span className="text-red-500">&#9829;</span> for
            developers
          </p>
        </div>
      </div>

      {/* Back to Top */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition hover:bg-blue-700"
          aria-label="Back to top"
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
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </button>
      )}
    </footer>
  );
}
