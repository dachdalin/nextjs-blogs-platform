"use client";

import Link from "next/link";
import { BLOG_POSTS } from "@/lib/constants";

export default function NotFoundPage() {
  const recentPosts = BLOG_POSTS.slice(0, 3);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 px-4 py-12">
      <div className="w-full max-w-4xl animate-fade-in">
        <div className="mb-8 text-center">
          <div className="relative inline-block">
            <h1 className="animate-bounce-slow text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 sm:text-[12rem]">
              404
            </h1>

            <div className="absolute -right-8 top-0 h-16 w-16 animate-float rounded-full bg-blue-400 opacity-20 blur-xl"></div>
            <div
              className="absolute -left-8 bottom-0 h-20 w-20 animate-float-delayed rounded-full bg-purple-400 opacity-20 blur-xl"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-2xl">
          <div className="p-8 text-center sm:p-12">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Page Not Found
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              Oops! The page you're looking for seems to have wandered off into
              the digital void. Let's get you back on track.
            </p>

            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl"
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
                Back to Home
              </Link>

              <Link
                href="/blog"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-blue-600 bg-white px-8 py-4 font-semibold text-blue-600 transition hover:bg-blue-50"
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
                    d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                  />
                </svg>
                Browse Blog
              </Link>
            </div>

            <div className="mb-10 border-t border-gray-200 pt-8">
              <h3 className="mb-4 text-lg font-semibold text-gray-900">
                Popular Pages
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/"
                  className="group flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                >
                  <span className="text-lg">🏠</span>
                  <span>Home</span>
                </Link>
                <Link
                  href="/blog"
                  className="group flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                >
                  <span className="text-lg">📚</span>
                  <span>Blog</span>
                </Link>
                <Link
                  href="/contact"
                  className="group flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                >
                  <span className="text-lg">📧</span>
                  <span>Contact</span>
                </Link>
                <Link
                  href="/privacy"
                  className="group flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                >
                  <span className="text-lg">🔒</span>
                  <span>Privacy</span>
                </Link>
              </div>
            </div>

            {recentPosts.length > 0 && (
              <div className="border-t border-gray-200 pt-8">
                <h3 className="mb-6 text-lg font-semibold text-gray-900">
                  Check Out Our Latest Posts
                </h3>
                <div className="grid gap-4 sm:grid-cols-3">
                  {recentPosts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group rounded-lg border border-gray-200 bg-gray-50 p-4 text-left transition hover:border-blue-300 hover:bg-blue-50 hover:shadow-md"
                    >
                      <span
                        className={`mb-2 inline-block rounded-full px-2 py-1 text-xs font-semibold text-white ${
                          post.type === "tutorial"
                            ? "bg-green-600"
                            : "bg-cyan-600"
                        }`}
                      >
                        {post.type.charAt(0).toUpperCase() + post.type.slice(1)}
                      </span>
                      <h4 className="mb-2 line-clamp-2 font-semibold text-gray-900 group-hover:text-blue-700">
                        {post.title}
                      </h4>
                      <p className="mb-2 line-clamp-2 text-sm text-gray-600">
                        {post.description}
                      </p>
                      <span className="text-xs text-gray-500">
                        {post.readTime}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          Still can't find what you're looking for?{" "}
          <Link
            href="/contact"
            className="font-medium text-blue-600 hover:text-blue-700"
          >
            Contact us
          </Link>{" "}
          and we'll help you out.
        </p>
      </div>
    </div>
  );
}
