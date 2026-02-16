"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-python";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-json";
import "prismjs/components/prism-sql";

import { BLOG_POSTS } from "@/lib/constants";

/* Sample post data - replace with real API fetch */
const samplePost = BLOG_POSTS[0];

const relatedPosts = [
  {
    slug: "react-server-components",
    title: "Understanding React Server Components",
    description: "A deep dive into React Server Components and how they work.",
    type: "tutorial",
    readTime: "10 min",
  },
  {
    slug: "tailwind-css-tips",
    title: "Advanced Tailwind CSS Tips",
    description: "Level up your Tailwind CSS skills with advanced techniques.",
    type: "code",
    readTime: "8 min",
  },
  {
    slug: "typescript-guide",
    title: "TypeScript for Beginners",
    description: "Learn TypeScript fundamentals in this complete guide.",
    type: "tutorial",
    readTime: "15 min",
  },
];

const popularPosts = [
  {
    slug: "react-hooks",
    title: "Complete Guide to React Hooks",
    views: 8234,
  },
  {
    slug: "js-async-await",
    title: "Mastering async/await in JavaScript",
    views: 6521,
  },
  {
    slug: "state-management",
    title: "State Management Patterns",
    views: 5890,
  },
];

function copyToClipboard() {
  navigator.clipboard.writeText(window.location.href);
  alert("Link copied to clipboard!");
}

function shareArticle() {
  if (navigator.share) {
    navigator.share({
      title: samplePost.title,
      url: window.location.href,
    });
  }
}

export default function BlogDetailPage() {
  const [copied, setCopied] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamic import to ensure Prism is available on client side
    (async () => {
      const Prism = (await import("prismjs")).default;

      // Wait for DOM to render, then highlight
      setTimeout(() => {
        if (contentRef.current) {
          const codeBlocks = contentRef.current.querySelectorAll(
            "code[class*='language-']",
          );
          codeBlocks.forEach((block) => {
            Prism.highlightElement(block as HTMLElement);
          });
        }
      }, 0);
    })();
  }, []);

  return (
    <>
      {/* ── Breadcrumb ── */}
      <div className="border-b bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <nav aria-label="breadcrumb">
            <ol className="flex gap-2 text-sm">
              <li>
                <Link href="/" className="text-blue-600 hover:text-blue-700">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link
                  href="/blog"
                  className="text-blue-600 hover:text-blue-700"
                >
                  Blogs
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-600">
                {samplePost.title.substring(0, 50)}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* ── Article ── */}
      <div className="bg-gray-50">
        <article className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Header */}
              <header className="mb-10">
                <div className="mb-4 flex flex-wrap gap-2">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${
                      samplePost.type === "tutorial"
                        ? "bg-green-600"
                        : "bg-cyan-600"
                    }`}
                  >
                    {samplePost.type.charAt(0).toUpperCase() +
                      samplePost.type.slice(1)}
                  </span>
                  {samplePost.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog?tag=${tag}`}
                      className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-700 hover:bg-gray-50"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>

                <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900">
                  {samplePost.title}
                </h1>
                <p className="mb-6 text-lg text-gray-600">
                  {samplePost.description}
                </p>

                {/* Metadata */}
                <div className="mb-6 flex flex-wrap gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-3">
                    <Image
                      src={`https://ui-avatars.com/api/?name=${samplePost.author.avatar}&background=6366f1&color=fff&size=40`}
                      alt={samplePost.author.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-medium text-gray-900">
                        {samplePost.author.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {samplePost.author.bio}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                      />
                    </svg>
                    <div>{samplePost.createdAt}</div>
                  </div>

                  <div className="flex items-center gap-1">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5-10.5V4.5A2.25 2.25 0 0 0 16.5 2.25h-9A2.25 2.25 0 0 0 5.25 4.5v15A2.25 2.25 0 0 0 7.5 21.75h9a2.25 2.25 0 0 0 2.25-2.25V11.25A9 9 0 0 0 12 6z"
                      />
                    </svg>
                    <div>{samplePost.readTime}</div>
                  </div>

                  <div className="flex items-center gap-1">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                    <div>{samplePost.views.toLocaleString()} views</div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={shareArticle}
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                  >
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
                        d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185z"
                      />
                    </svg>
                    Share
                  </button>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }}
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                  >
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
                        d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m2.273-1.273a4.5 4.5 0 0 1 6.364 0l4.5-4.5a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5"
                      />
                    </svg>
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
              </header>

              <hr className="mb-10" />

              {/* Article Content */}
              <div
                ref={contentRef}
                className="prose prose-lg mb-10 max-w-none space-y-6 text-gray-700"
              >
                {samplePost.content.map((section, idx) => {
                  if (section.type === "heading") {
                    return (
                      <h2
                        key={idx}
                        className="mb-4 mt-8 text-2xl font-bold text-gray-900 first:mt-0"
                      >
                        {section.content}
                      </h2>
                    );
                  }
                  if (section.type === "text") {
                    return (
                      <p key={idx} className="mb-4 leading-relaxed">
                        {section.content}
                      </p>
                    );
                  }
                  if (section.type === "code") {
                    return (
                      <div
                        key={idx}
                        className="mb-6 overflow-hidden rounded-lg"
                      >
                        <div className="flex items-center justify-between bg-gray-800 px-4 py-2">
                          <span className="text-xs font-medium text-gray-400 uppercase">
                            {section.language || "code"}
                          </span>
                          <button
                            onClick={() => {
                              navigator.clipboard.writeText(section.content);
                              setCopied(true);
                              setTimeout(() => setCopied(false), 2000);
                            }}
                            className="inline-flex items-center gap-1 rounded px-2 py-1 text-xs text-gray-400 transition hover:bg-gray-700 hover:text-white"
                          >
                            <svg
                              className="h-3.5 w-3.5"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3C6.504 2.25 5.25 3.504 5.25 5v13.5A2.25 2.25 0 0 0 7.5 21h10a2.25 2.25 0 0 0 2.25-2.25V5c0-.898-.596-1.659-1.409-1.947m-1.584.255m-5.007 0H7.5a.75.75 0 0 0-.75.75V5c0 .414.336.75.75.75h3"
                              />
                            </svg>
                            {copied ? "Copied!" : "Copy"}
                          </button>
                        </div>
                        <pre className="overflow-x-auto bg-gray-900 px-4 py-2 text-sm">
                          <code
                            className={`language-${section.language || "javascript"}`}
                            style={{
                              whiteSpace: "pre-wrap",
                              wordWrap: "break-word",
                            }}
                          >
                            {section.content}
                          </code>
                        </pre>
                      </div>
                    );
                  }
                })}
              </div>

              <hr className="my-10" />

              {/* Share & Info */}
              <div className="mb-10 grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 font-bold text-gray-900">
                    Share this article
                  </h3>
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(samplePost.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M12.315 2.51a1 1 0 0 1 .82 1.315l-1.433 3.503h2.723a1 1 0 0 1 .78 1.645l-5.487 5.992a1 1 0 0 1-1.62-.86l1.433-3.503H5.75a1 1 0 0 1-.78-1.645l5.487-5.992a1 1 0 0 1 .913-.322Z" />
                      </svg>
                      Twitter
                    </a>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(location.href)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 10.5a8 8 0 1 1 15.986.75H17.5a.5.5 0 0 0-.5.5v2.798a.5.5 0 0 1-1 0v-2.798a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v2.798a.5.5 0 0 1-1 0v-2.798a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v2.798a.5.5 0 0 1-1 0V11a.5.5 0 0 0-.5-.5H2.5a.5.5 0 0 1-.5-.5v-1Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Facebook
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v11A1.5 1.5 0 0 0 2.5 17h11a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 13.5 3h-11zM4 6.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm1 2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H5z" />
                      </svg>
                      LinkedIn
                    </a>
                  </div>
                </div>

                <div className="text-right">
                  <h3 className="mb-4 font-bold text-gray-900">Article Info</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>Published: {samplePost.createdAt}</p>
                    {samplePost.updatedAt !== samplePost.createdAt && (
                      <p>Updated: {samplePost.updatedAt}</p>
                    )}
                    <p>Views: {samplePost.views.toLocaleString()}</p>
                  </div>
                </div>
              </div>

              {/* Author Bio */}
              <div className="mb-10 rounded-2xl bg-gray-100 p-6">
                <div className="flex gap-4">
                  <Image
                    src={`https://ui-avatars.com/api/?name=${samplePost.author.avatar}&background=6366f1&color=fff&size=100`}
                    alt={samplePost.author.name}
                    width={100}
                    height={100}
                    className="h-24 w-24 rounded-full"
                  />
                  <div className="flex-1">
                    <h3 className="mb-1 text-lg font-bold text-gray-900">
                      {samplePost.author.name}
                    </h3>
                    <p className="mb-4 text-sm text-gray-600">
                      {samplePost.author.bio}
                    </p>
                    <div className="flex gap-2">
                      <a
                        href="#"
                        className="inline-flex items-center justify-center rounded-lg border border-gray-300 p-2 text-gray-700 transition hover:bg-white"
                      >
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 20 3.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.072 4.072 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 17.25a11.566 11.566 0 0 0 6.29 1.84" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center justify-center rounded-lg border border-gray-300 p-2 text-gray-700 transition hover:bg-white"
                      >
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 1 1-.003-3.096 1.548 1.548 0 0 1 .003 3.096zm-1.337 9.763h2.677V5.312H3.668v10.026zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center justify-center rounded-lg border border-gray-300 p-2 text-gray-700 transition hover:bg-white"
                      >
                        <svg
                          className="h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.6 9.08h-2.89v9.3h-3.996v-9.3H7.38V5.754h1.332V4.278c0-1.141.093-2.845 2.605-2.845 1.43 0 2.742.108 2.742.108v3.082h-1.884c-1.022 0-1.379.504-1.379 1.187v1.471h3.013Z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Newsletter CTA */}
              <div className="mb-10 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-700 p-8 text-center text-white">
                <h3 className="mb-3 text-xl font-bold">
                  Stay Updated with Latest Articles
                </h3>
                <p className="mb-6">
                  Get the latest tutorials, tips, and insights delivered
                  straight to your inbox.
                </p>
                <form className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="flex-1 rounded-lg bg-white px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 sm:max-w-xs"
                  />
                  <button
                    type="submit"
                    className="rounded-lg bg-amber-400 px-6 py-3 font-bold text-gray-900 transition hover:bg-amber-300"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="mt-3 text-xs text-indigo-100">
                  No spam, unsubscribe at any time.
                </p>
              </div>

              <hr className="my-10" />

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <section>
                  <h2 className="mb-6 text-2xl font-bold text-gray-900">
                    Related Articles
                  </h2>
                  <div className="grid gap-6 md:grid-cols-3">
                    {relatedPosts.map((post) => (
                      <div
                        key={post.slug}
                        className="flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
                      >
                        <span
                          className={`mb-2 inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold text-white ${
                            post.type === "tutorial"
                              ? "bg-green-600"
                              : "bg-cyan-600"
                          }`}
                        >
                          {post.type.charAt(0).toUpperCase() +
                            post.type.slice(1)}
                        </span>
                        <h4 className="mb-3 line-clamp-2 font-bold text-gray-900">
                          {post.title}
                        </h4>
                        <p className="mb-4 line-clamp-2 flex-1 text-sm text-gray-600">
                          {post.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">
                            {post.readTime}
                          </span>
                          <Link
                            href={`/blog/${post.slug}`}
                            className="rounded-lg border border-blue-600 px-4 py-1.5 text-xs font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6 lg:sticky lg:top-24 lg:h-fit">
              {/* Table of Contents */}
              <div className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="mb-4 flex items-center gap-2 font-bold text-gray-900">
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
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                  Table of Contents
                </h3>
                <ul className="space-y-2 text-sm">
                  {samplePost.content
                    .filter((c) => c.type === "heading")
                    .map((h, idx) => (
                      <li key={idx}>
                        <a
                          href="#"
                          className="text-gray-600 hover:text-blue-600"
                        >
                          {h.content}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>

              {/* Article Stats */}
              <div className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="mb-4 flex items-center gap-2 font-bold text-gray-900">
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
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25a2.625 2.625 0 0 1 2.625 2.625v6.75A2.625 2.625 0 0 1 6.375 24h-2.25A2.625 2.625 0 0 1 3 21.375v-8.25zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25A2.625 2.625 0 0 1 15.75 10.5v15.75a2.625 2.625 0 0 1-2.625 2.625h-2.25a2.625 2.625 0 0 1-2.625-2.625V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25A2.625 2.625 0 0 1 22.5 5.25v21a2.625 2.625 0 0 1-2.625 2.625h-2.25a2.625 2.625 0 0 1-2.625-2.625V4.125z"
                    />
                  </svg>
                  Article Stats
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Views</span>
                    <span className="font-bold text-blue-600">
                      {samplePost.views.toLocaleString()}
                    </span>
                  </div>
                  <div className="border-t"></div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Read Time</span>
                    <span className="font-bold text-green-600">
                      {samplePost.readTime}
                    </span>
                  </div>
                  <div className="border-t"></div>
                  <div className="text-xs text-gray-500">
                    <p>Published: {samplePost.createdAt}</p>
                    {samplePost.updatedAt !== samplePost.createdAt && (
                      <p>Updated: {samplePost.updatedAt}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Popular Posts */}
              {popularPosts.length > 0 && (
                <div className="rounded-xl border border-gray-200 bg-white p-5">
                  <h3 className="mb-4 flex items-center gap-2 font-bold text-gray-900">
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                    </svg>
                    Popular Articles
                  </h3>
                  <div className="space-y-3">
                    {popularPosts.map((post, idx) => (
                      <div
                        key={idx}
                        className={`pb-3 ${idx !== popularPosts.length - 1 ? "border-b" : ""}`}
                      >
                        <Link
                          href={`/blog/${post.slug}`}
                          className="line-clamp-2 font-medium text-gray-900 hover:text-blue-600"
                        >
                          {post.title}
                        </Link>
                        <p className="mt-1 text-xs text-gray-500">
                          <svg
                            className="mb-0.5 inline h-3.5 w-3.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                          </svg>{" "}
                          {post.views.toLocaleString()}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Share Widget */}
              <div className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="mb-4 flex items-center gap-2 font-bold text-gray-900">
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
                      d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185z"
                    />
                  </svg>
                  Share This Article
                </h3>
                <div className="flex flex-col gap-2">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(samplePost.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 20 3.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.072 4.072 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 17.25a11.566 11.566 0 0 0 6.29 1.84" />
                    </svg>
                    Twitter
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v11A1.5 1.5 0 0 0 2.5 17h11a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 13.5 3h-11zM4 6.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm1 2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H5z" />
                    </svg>
                    Facebook
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 1 1-.003-3.096 1.548 1.548 0 0 1 .003 3.096zm-1.337 9.763h2.677V5.312H3.668v10.026zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
                    </svg>
                    LinkedIn
                  </a>
                  <button
                    onClick={copyToClipboard}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                  >
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
                        d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m2.273-1.273a4.5 4.5 0 0 1 6.364 0l4.5-4.5a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5"
                      />
                    </svg>
                    Copy Link
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}