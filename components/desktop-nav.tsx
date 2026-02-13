"use client";
import Link from "next/link";
export default function DesktopNav() {
  return (
    <div className="hidden items-center gap-6 lg:flex">
      <ul className="flex gap-1">
        <li>
          <Link
            href="/"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-gray-900"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-gray-900"
          >
            Blogs
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-gray-900"
          >
            About
          </Link>
        </li>
      </ul>

      <div className="flex items-center gap-2">
        <Link
          href="/login"
          className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-gray-900"
        >
          Login
        </Link>
        <Link
          href="/register"
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
