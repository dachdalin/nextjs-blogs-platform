"use client";
import Link from "next/link";
import Image from "next/image";
import StarRating from "./star-rating";
import Card from "./blog/card";

export default function Featured({featuredPosts}: {featuredPosts: any[]}) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700">
            &#9733; Featured Content
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Most Popular Articles
          </h2>
          <p className="mt-3 text-lg text-gray-500">
            Discover our most popular and comprehensive guides that have helped
            thousands of developers
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post, idx) => (
            <Card key={post.slug} post={post} idx={idx} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-lg border border-blue-600 px-6 py-2.5 text-sm font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white"
          >
            View All Articles &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
