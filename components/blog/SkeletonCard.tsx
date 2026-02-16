"use client";

export default function SkeletonCard() {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      {/* Image skeleton */}
      <div className="relative h-48 animate-pulse bg-gradient-to-br from-gray-200 to-gray-300" />

      <div className="flex flex-1 flex-col p-5">
        {/* Meta skeleton */}
        <div className="mb-3 flex items-center justify-between">
          <div className="h-6 w-20 animate-pulse rounded-full bg-gray-200" />
          <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
        </div>

        {/* Title skeleton */}
        <div className="mb-2 space-y-2">
          <div className="h-5 w-full animate-pulse rounded bg-gray-200" />
          <div className="h-5 w-3/4 animate-pulse rounded bg-gray-200" />
        </div>

        {/* Description skeleton */}
        <div className="mb-4 flex-1 space-y-2">
          <div className="h-4 w-full animate-pulse rounded bg-gray-100" />
          <div className="h-4 w-full animate-pulse rounded bg-gray-100" />
          <div className="h-4 w-2/3 animate-pulse rounded bg-gray-100" />
        </div>

        {/* Tags skeleton */}
        <div className="mb-4 flex gap-1.5">
          <div className="h-6 w-16 animate-pulse rounded-full bg-gray-200" />
          <div className="h-6 w-20 animate-pulse rounded-full bg-gray-200" />
        </div>

        {/* Footer skeleton */}
        <div className="flex items-center justify-between border-t pt-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 animate-pulse rounded-full bg-gray-200" />
            <div className="space-y-1">
              <div className="h-3 w-20 animate-pulse rounded bg-gray-200" />
              <div className="h-3 w-16 animate-pulse rounded bg-gray-100" />
            </div>
          </div>
          <div className="flex gap-1">
            <div className="h-8 w-8 animate-pulse rounded bg-gray-200" />
            <div className="h-8 w-8 animate-pulse rounded bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
}
