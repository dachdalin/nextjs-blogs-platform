"use client";
import Image from "next/image";
import Link from "next/link";

export default function BlogCard({post}: {post: any}) {
  return (
    <article
      key={post.slug}
      className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-lg"
    >
      {post.isNew && (
        <span className="absolute -right-1 -top-1 z-10 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
          &#9889; New
        </span>
      )}

      <div className="mb-3 flex items-center justify-between">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${
            post.type === "tutorial" ? "bg-purple-600" : "bg-gray-800"
          }`}
        >
          {post.type.charAt(0).toUpperCase() + post.type.slice(1)}
        </span>
        <span className="text-xs text-gray-400">{post.date}</span>
      </div>

      <h3 className="mb-2 line-clamp-2 font-bold text-gray-900 group-hover:text-blue-600">
        <Link
          href={`/blog/${post.slug}`}
          className="after:absolute after:inset-0"
        >
          {post.title}
        </Link>
      </h3>

      <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-gray-500">
        {post.description}
      </p>

      <div className="flex items-center justify-between border-t pt-4 text-sm">
        <div className="flex items-center gap-2">
          <Image
            src={`https://ui-avatars.com/api/?name=${post.author.avatar}&background=6366f1&color=fff&size=28`}
            alt={post.author.name}
            width={28}
            height={28}
            className="rounded-full"
          />
          <div>
            <p className="font-medium text-gray-900">{post.author.name}</p>
            <p className="text-xs text-gray-400">{post.readTime}</p>
          </div>
        </div>
        <span className="text-xs text-gray-400">
          {post.views.toLocaleString()} views
        </span>
      </div>
    </article>
  );
}
