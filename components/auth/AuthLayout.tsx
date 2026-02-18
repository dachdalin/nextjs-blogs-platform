"use client";

import Link from "next/link";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  footerText: string;
  footerLinkText: string;
  footerLinkHref: string;
}

export default function AuthLayout({
  children,
  title,
  subtitle,
  footerText,
  footerLinkText,
  footerLinkHref,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-300 opacity-20 blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-300 opacity-20 blur-3xl animate-float-delayed" />
      </div>

      <div className="relative flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-white"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
                <span className="text-xl text-white">B</span>
              </div>
              BlogPlatform
            </Link>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white/80 shadow-2xl backdrop-blur-xl dark:bg-gray-800/80 animate-fade-in">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-8 text-white">
              <h1 className="text-3xl font-bold">{title}</h1>
              <p className="mt-2 text-blue-100">{subtitle}</p>
            </div>

            <div className="px-8 py-8">{children}</div>

            <div className="border-t border-gray-200 bg-gray-50 px-8 py-4 text-center dark:border-gray-700 dark:bg-gray-900/50">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {footerText}{" "}
                <Link
                  href={footerLinkHref}
                  className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  {footerLinkText}
                </Link>
              </p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/"
              className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
