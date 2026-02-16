"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useMemo } from "react";
import { BLOG_POSTS } from "@/lib/constants";

/* Sample blog data - replace with real API fetch */
const samplePosts = BLOG_POSTS;

export default function Blog() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");
  const [sort, setSort] = useState("latest");

  const filteredPosts = useMemo(() => {
    let result = samplePosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.description.toLowerCase().includes(search.toLowerCase());
      const matchesType = type === "all" || post.type === type;
      return matchesSearch && matchesType;
    });

    if (sort === "popular") {
      result.sort((a, b) => b.views - a.views);
    } else if (sort === "oldest") {
      result
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .reverse();
    }
    // else 'latest' is default

    return result;
  }, [search, type, sort]);

  const handleReset = () => {
    setSearch("");
    setType("all");
    setSort("latest");
  };

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-linear-to-br from-indigo-600 to-purple-700 py-20">
        <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:40px_40px]" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white backdrop-blur">
            <svg
              className="h-4 w-4 text-amber-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
            </svg>
            Knowledge Hub
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Discover <span className="text-amber-300">Amazing</span>
            <br />
            Development Articles
          </h1>

          <p className="mt-6 text-lg text-indigo-100">
            Explore our comprehensive collection of{" "}
            <strong className="text-amber-300">tutorials</strong>, code
            examples, and technology insights crafted by experienced developers.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-indigo-200">
            <span className="flex items-center gap-1.5">
              <svg
                className="h-4 w-4 text-amber-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
              {filteredPosts.length}+ Articles
            </span>
            <span className="flex items-center gap-1.5">
              <svg
                className="h-4 w-4 text-amber-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" />
              </svg>
              Code Examples
            </span>
            <span className="flex items-center gap-1.5">
              <svg
                className="h-4 w-4 text-amber-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.5 1.5H19a2 2 0 012 2v14a2 2 0 01-2 2H1a2 2 0 01-2-2V3.5a2 2 0 012-2h9V1h1v.5z" />
              </svg>
              Step-by-Step Tutorials
            </span>
          </div>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-white/70">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            />
          </svg>
        </div>
      </section>

      {/* ── Filters ── */}
      <section className="border-b bg-gray-50 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <form className="space-y-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end">
              {/* Search */}
              <div className="flex-1">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  <svg
                    className="mb-1 inline h-4 w-4 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.5 5.5a7.5 7.5 0 0 0 10.5 10.5Z"
                    />
                  </svg>{" "}
                  Search
                </label>
                <input
                  type="search"
                  placeholder="Search articles..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              {/* Type */}
              <div className="min-w-max">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  <svg
                    className="mb-1 inline h-4 w-4 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 12a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0z"
                    />
                  </svg>
                  Type
                </label>
                <select
                  id="type"
                  name="type"
                  title="sort by type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option value="all">All</option>
                  <option value="tutorial">Tutorials</option>
                  <option value="code">Code</option>
                </select>
              </div>

              {/* Sort */}
              <div className="min-w-max">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  <svg
                    className="mb-1 inline h-4 w-4 text-amber-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2.586a1 1 0 0 1-.293.707l-6.414 6.414a1 1 0 0 0-.293.707V17l-4-4v6.586a1 1 0 0 1-1.707.707l-6.414-6.414A1 1 0 0 1 3 7.586V4z"
                    />
                  </svg>{" "}
                  Sort
                </label>
                <select
                  id="sort"
                  name="sort"
                  value={sort}
                  title="sort"
                  onChange={(e) => setSort(e.target.value)}
                  className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option value="latest">Latest</option>
                  <option value="popular">Popular</option>
                  <option value="oldest">Oldest</option>
                </select>
              </div>

              {/* Buttons */}
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                >
                  Reset
                </button>
              </div>
            </div>

            {/* Active filters */}
            {(search || type !== "all" || sort !== "latest") && (
              <div className="flex flex-wrap gap-2 pt-2">
                {search && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-cyan-100 px-3 py-1 text-xs text-cyan-700">
                    Search: {search.substring(0, 20)}
                    <button
                      type="button"
                      onClick={() => setSearch("")}
                      className="ml-1"
                    >
                      ✕
                    </button>
                  </span>
                )}
                {type !== "all" && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                    <button
                      type="button"
                      onClick={() => setType("all")}
                      className="ml-1"
                    >
                      ✕
                    </button>
                  </span>
                )}
                {sort !== "latest" && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-xs text-amber-700">
                    {sort.charAt(0).toUpperCase() + sort.slice(1)}
                    <button
                      type="button"
                      onClick={() => setSort("latest")}
                      className="ml-1"
                    >
                      ✕
                    </button>
                  </span>
                )}
              </div>
            )}
          </form>
        </div>
      </section>

      {/* ── Articles Grid ── */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <>
              <div className="mb-10 text-center">
                <span className="inline-block rounded-full bg-green-100 px-4 py-1.5 text-sm font-medium text-green-700">
                  <svg
                    className="mb-0.5 inline h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M3 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4zM3 10a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6zM14 9a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-2z" />
                  </svg>{" "}
                  Featured Articles
                </span>
                <h2 className="mt-4 text-3xl font-extrabold text-gray-700">
                  Latest Development Insights
                </h2>
                <p className="mt-2 text-gray-600">
                  Hand-picked articles to level up your development skills
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post, idx) => (
                  <article
                    key={post.id}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg"
                  >
                    {/* Image */}
                    <div className="relative flex h-48 items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
                      {idx < 3 && (
                        <span className="absolute left-3 top-3 z-10 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-gray-900">
                          ⭐ Featured
                        </span>
                      )}
                      <svg
                        className="h-12 w-12 opacity-40"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                        />
                      </svg>
                      <span className="absolute bottom-3 right-3 rounded bg-black/60 px-2.5 py-1 text-xs text-white">
                        {post.readTime}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-5">
                      {/* meta */}
                      <div className="mb-3 flex items-center justify-between">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${
                            post.type === "tutorial"
                              ? "bg-green-600"
                              : "bg-cyan-600"
                          }`}
                        >
                          {post.type.charAt(0).toUpperCase() +
                            post.type.slice(1)}
                        </span>
                        <span className="text-xs text-gray-400">
                          {post.views.toLocaleString()} views
                        </span>
                      </div>

                      <h3 className="mb-2 line-clamp-2 text-lg font-bold text-gray-900 group-hover:text-blue-600">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="after:absolute after:inset-0"
                        >
                          {post.title}
                        </Link>
                      </h3>

                      <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-500">
                        {post.description}
                      </p>

                      {/* tags */}
                      <div className="mb-4 flex flex-wrap gap-1.5">
                        {post.tags.slice(0, 2).map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-xs text-blue-700"
                          >
                            #{t}
                          </span>
                        ))}
                        {post.tags.length > 2 && (
                          <span className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-0.5 text-xs text-gray-600">
                            +{post.tags.length - 2}
                          </span>
                        )}
                      </div>

                      {/* footer */}
                      <div className="flex items-center justify-between border-t pt-4">
                        <div className="flex items-center gap-2">
                          <Image
                            src={`https://ui-avatars.com/api/?name=${post.author.avatar}&background=6366f1&color=fff&size=32`}
                            alt={post.author.name}
                            width={32}
                            height={32}
                            className="rounded-full"
                          />
                          <div className="text-xs">
                            <p className="font-medium text-gray-900">
                              {post.author.name}
                            </p>
                            <p className="text-gray-400">{post.date}</p>
                          </div>
                        </div>

                        <div className="flex gap-1">
                          <button
                            title="d"
                            className="rounded border border-gray-200 p-1.5 text-gray-400 transition hover:bg-gray-100 hover:text-amber-500"
                          >
                            <svg
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.593 2.206a.75.75 0 0 0-1.186 0l-5.084 7.057A4.5 4.5 0 1 0 6.5 19.5a4.5 4.5 0 0 0 6.823-5.236l5.084-7.057z"
                              />
                            </svg>
                          </button>
                          <button
                            title="l"
                            className="rounded border border-gray-200 p-1.5 text-gray-400 transition hover:bg-gray-100 hover:text-blue-600"
                          >
                            <svg
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </>
          ) : (
            <div className="rounded-2xl bg-gray-50 py-16 text-center">
              <svg
                className="mx-auto mb-4 h-16 w-16 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.5 6.75a1.5 1.5 0 0 0-3 0 1.5 1.5 0 0 0 3 0zM21.5 12a1.5 1.5 0 0 0-3 0 1.5 1.5 0 0 0 3 0zM21.5 17.25a1.5 1.5 0 0 0-3 0 1.5 1.5 0 0 0 3 0zM4.5 6.75a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM4.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM4.5 17.25a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
                />
              </svg>
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                No Articles Found
              </h3>
              <p className="mb-6 text-gray-600">
                We couldn&rsquo;t find any articles matching your criteria.
                <br />
                Try adjusting your search or filter settings.
              </p>

              <div className="flex justify-center gap-3">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-2.5 font-medium text-white transition hover:bg-blue-700"
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
                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                  </svg>
                  View All Articles
                </Link>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-2.5 font-medium text-gray-700 transition hover:bg-gray-100"
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
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15"
                    />
                  </svg>
                  Clear Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
