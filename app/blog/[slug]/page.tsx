"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef, useMemo } from "react";
import { useParams } from "next/navigation";
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
import {
  generateTableOfContents,
  getRelatedPosts,
  calculateReadingTime,
} from "@/lib/blog-utils";
import ReadingProgress from "@/components/blog/ReadingProgress";
import TableOfContents from "@/components/blog/TableOfContents";
import ShareButtons from "@/components/blog/ShareButtons";
import CommentSection from "@/components/blog/CommentSection";

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [copied, setCopied] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Find the current post
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  // Generate table of contents
  const tableOfContents = useMemo(
    () => (post ? generateTableOfContents(post.content) : []),
    [post],
  );

  // Get related posts
  const relatedPosts = useMemo(
    () => (post ? getRelatedPosts(post.slug, 3) : []),
    [post],
  );

  // Calculate actual reading time from content
  const actualReadingTime = useMemo(
    () => (post ? calculateReadingTime(post.content) : ""),
    [post],
  );

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
  }, [post]);

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            404 - Post Not Found
          </h1>
          <p className="mb-6 text-gray-600">
            The blog post you're looking for doesn't exist.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
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
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <ReadingProgress />

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
                  Blog
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-600">
                {post.title.substring(0, 50)}
                {post.title.length > 50 && "..."}
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
                      post.type === "tutorial" ? "bg-green-600" : "bg-cyan-600"
                    }`}
                  >
                    {post.type.charAt(0).toUpperCase() + post.type.slice(1)}
                  </span>
                  {post.tags.map((tag) => (
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
                  {post.title}
                </h1>
                <p className="mb-6 text-lg text-gray-600">{post.description}</p>

                {/* Metadata */}
                <div className="mb-6 flex flex-wrap gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-3">
                    <Image
                      src={`https://ui-avatars.com/api/?name=${post.author.avatar}&background=6366f1&color=fff&size=40`}
                      alt={post.author.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-medium text-gray-900">
                        {post.author.name}
                      </p>
                      <p className="text-xs text-gray-500">{post.author.bio}</p>
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
                    <div>{post.createdAt}</div>
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
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <div>{actualReadingTime}</div>
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
                    <div>{post.views.toLocaleString()} views</div>
                  </div>
                </div>

                {/* Share Buttons */}
                <ShareButtons title={post.title} />
              </header>

              <hr className="mb-10" />

              {/* Article Content */}
              <div
                ref={contentRef}
                className="prose prose-lg mb-10 max-w-none space-y-6 text-gray-700"
              >
                {post.content.map((section, idx) => {
                  if (section.type === "heading") {
                    return (
                      <h2
                        key={idx}
                        id={`heading-${idx}`}
                        className="mb-4 mt-8 scroll-mt-24 text-2xl font-bold text-gray-900 first:mt-0"
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
                          <span className="text-xs font-medium uppercase text-gray-400">
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
                  return null;
                })}
              </div>

              <hr className="my-10" />

              {/* Comment Section */}
              <CommentSection />

              <hr className="my-10" />

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <section>
                  <h2 className="mb-6 text-2xl font-bold text-gray-900">
                    Related Articles
                  </h2>
                  <div className="grid gap-6 md:grid-cols-3">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.slug}
                        href={`/blog/${relatedPost.slug}`}
                        className="flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
                      >
                        <span
                          className={`mb-2 inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold text-white ${
                            relatedPost.type === "tutorial"
                              ? "bg-green-600"
                              : "bg-cyan-600"
                          }`}
                        >
                          {relatedPost.type.charAt(0).toUpperCase() +
                            relatedPost.type.slice(1)}
                        </span>
                        <h4 className="mb-3 line-clamp-2 font-bold text-gray-900">
                          {relatedPost.title}
                        </h4>
                        <p className="mb-4 line-clamp-2 flex-1 text-sm text-gray-600">
                          {relatedPost.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">
                            {relatedPost.readTime}
                          </span>
                          <span className="text-xs font-medium text-blue-600">
                            Read More →
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6 lg:sticky lg:top-24 lg:h-fit">
              {/* Table of Contents */}
              <TableOfContents items={tableOfContents} />

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
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c1.313 0 2.625 1.313 2.625 2.625v6.75A2.625 2.625 0 0 1 6.375 24h-2.25A1.125 1.125 0 0 1 3 22.875v-9.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c1.313 0 2.625 1.313 2.625 2.625v12.75c0 1.035-.84 1.875-1.875 1.875h-2.25A1.125 1.125 0 0 1 9.75 22.875V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C21.16 3 22.5 4.34 22.5 5.625v17.25c0 1.035-.84 1.875-1.875 1.875h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                    />
                  </svg>
                  Article Stats
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Views</span>
                    <span className="font-bold text-blue-600">
                      {post.views.toLocaleString()}
                    </span>
                  </div>
                  <div className="border-t"></div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Read Time</span>
                    <span className="font-bold text-green-600">
                      {actualReadingTime}
                    </span>
                  </div>
                  <div className="border-t"></div>
                  <div className="text-xs text-gray-500">
                    <p>Published: {post.createdAt}</p>
                    {post.updatedAt !== post.createdAt && (
                      <p>Updated: {post.updatedAt}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Author Card */}
              <div className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="mb-4 font-bold text-gray-900">About Author</h3>
                <div className="flex flex-col items-center text-center">
                  <Image
                    src={`https://ui-avatars.com/api/?name=${post.author.avatar}&background=6366f1&color=fff&size=100`}
                    alt={post.author.name}
                    width={80}
                    height={80}
                    className="mb-3 rounded-full"
                  />
                  <h4 className="mb-1 font-bold text-gray-900">
                    {post.author.name}
                  </h4>
                  <p className="mb-4 text-sm text-gray-600">
                    {post.author.bio}
                  </p>
                  <div className="flex gap-2">
                    <a
                      href="#"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 text-gray-700 transition hover:bg-gray-100"
                      aria-label="Twitter"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 text-gray-700 transition hover:bg-gray-100"
                      aria-label="LinkedIn"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-gray-300 text-gray-700 transition hover:bg-gray-100"
                      aria-label="GitHub"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
