"use client";

import NewsletterForm from "@/components/NewsletterForm";

export default function Newsletter() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-700 py-20">
      <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle,white_1px,transparent_1px)] [background-size:20px_20px]" />
      <div className="relative mx-auto max-w-3xl px-4 text-center text-white sm:px-6">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/20">
          <svg
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
        </div>

        <h2 className="text-3xl font-extrabold sm:text-4xl">
          Join Our Developer Community
        </h2>
        <p className="mt-4 text-lg text-indigo-100">
          Get exclusive tutorials, code snippets, and industry insights
          delivered straight to your inbox. Join{" "}
          <strong className="text-amber-300">10,000+</strong> developers who
          trust our content.
        </p>

        <div className="mt-8">
          <NewsletterForm variant="section" />
        </div>

        <div className="mt-10 grid gap-4 text-left sm:grid-cols-3">
          {["Weekly Tutorials", "Exclusive Content", "No Spam Ever"].map(
            (benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-3 text-indigo-100"
              >
                <svg
                  className="h-5 w-5 shrink-0 text-amber-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium">{benefit}</span>
              </div>
            ),
          )}
        </div>

        <div className="mt-10 border-t border-white/20 pt-6">
          <p className="mb-3 text-sm text-indigo-200">
            Trusted by developers from these companies:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Google", "Microsoft", "Facebook", "Netflix"].map((co) => (
              <span
                key={co}
                className="rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white"
              >
                {co}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
