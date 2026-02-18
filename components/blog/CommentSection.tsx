"use client";

export default function CommentSection() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">
      <h3 className="mb-6 text-2xl font-bold text-gray-900">
        Comments <span className="text-gray-400">(3)</span>
      </h3>

      <form className="mb-8">
        <div className="mb-4">
          <label
            htmlFor="comment"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Add a comment
          </label>
          <textarea
            id="comment"
            rows={4}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Share your thoughts..."
          />
        </div>
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-500">Sign in to post a comment</p>
          <button
            type="submit"
            disabled
            className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Post Comment
          </button>
        </div>
      </form>

      <div className="space-y-6">
        {[
          {
            author: "Sarah Johnson",
            avatar: "SJ",
            time: "2 hours ago",
            comment:
              "Great article! The examples really helped me understand the concepts better. Looking forward to more content like this.",
            likes: 12,
          },
          {
            author: "Mike Chen",
            avatar: "MC",
            time: "5 hours ago",
            comment:
              "This is exactly what I was looking for. The step-by-step approach makes it easy to follow along.",
            likes: 8,
          },
          {
            author: "Emily Davis",
            avatar: "ED",
            time: "1 day ago",
            comment:
              "Excellent tutorial! I've bookmarked this for future reference. Thank you for sharing!",
            likes: 15,
          },
        ].map((comment, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-sm font-bold text-white">
              {comment.avatar}
            </div>
            <div className="flex-1">
              <div className="mb-1 flex items-center gap-2">
                <span className="font-medium text-gray-900">
                  {comment.author}
                </span>
                <span className="text-xs text-gray-500">{comment.time}</span>
              </div>
              <p className="mb-3 text-sm leading-relaxed text-gray-700">
                {comment.comment}
              </p>
              <div className="flex items-center gap-4">
                <button className="inline-flex items-center gap-1 text-xs text-gray-500 transition hover:text-blue-600">
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
                      d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                    />
                  </svg>
                  {comment.likes}
                </button>
                <button className="text-xs text-gray-500 transition hover:text-blue-600">
                  Reply
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button className="text-sm font-medium text-blue-600 transition hover:text-blue-700">
          Load more comments
        </button>
      </div>
    </div>
  );
}
