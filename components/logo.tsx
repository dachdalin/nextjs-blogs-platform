'use client';
import Link from "next/link";
export default function Logo() {
    return (
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold text-gray-900"
          >
            <svg
              className="h-6 w-6 text-blue-600"
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
          </Link>
    );
}