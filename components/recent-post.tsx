'use client';

import Link from "next/link";
import BlogCard from "./blog/BlogCard";

export default function RecentPost({recentPosts}: {recentPosts: any[]}) {
    return (
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="inline-block rounded-full bg-green-100 px-4 py-1.5 text-sm font-medium text-green-700">
              &#128240; Latest Updates
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Recent Articles
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              Stay up-to-date with our latest tutorials, tips, and insights
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {recentPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-lg border border-blue-600 px-6 py-2.5 text-sm font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white"
            >
              Load More Articles &rarr;
            </Link>
          </div>
        </div>
      </section>
    );
}