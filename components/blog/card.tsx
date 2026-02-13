"use client";
import Link from "next/link";
import Image from "next/image";
import StarRating from "../star-rating";

export default function Card({ post, idx }: { post: any, idx: number }) {
  return (
    <article
      key={post.slug}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg"
    >
      {/* image placeholder */}
      <div className="relative flex h-52 items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
        {idx === 0 && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-gray-900">
            &#127942; Most Popular
          </span>
        )}
        <svg
          className="h-16 w-16 opacity-40"
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
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
        <span className="absolute bottom-3 right-3 rounded bg-black/60 px-2.5 py-1 text-xs text-white">
          {post.readTime}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        {/* meta */}
        <div className="mb-3 flex items-center justify-between">
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${
              post.type === "tutorial" ? "bg-green-600" : "bg-cyan-600"
            }`}
          >
            {post.type.charAt(0).toUpperCase() + post.type.slice(1)}
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
          {post.tags.map((t: string) => (
            <span
              key={t}
              className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-xs text-blue-700"
            >
              #{t}
            </span>
          ))}
        </div>

        {/* author */}
        <div className="flex items-center justify-between border-t pt-4 text-sm">
          <div className="flex items-center gap-2">
            <Image
              src={`https://ui-avatars.com/api/?name=${post.author.avatar}&background=6366f1&color=fff&size=32`}
              alt={post.author.name}
              width={32}
              height={32}
              className="rounded-full"
            />
            <div>
              <p className="font-medium text-gray-900">{post.author.name}</p>
              <p className="text-xs text-gray-400">{post.date}</p>
            </div>
          </div>
          <StarRating />
        </div>
      </div>
    </article>
  );
}
