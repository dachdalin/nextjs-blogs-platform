"use client";
import Link from "next/link";
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-700">
      <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-12">

          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white backdrop-blur">
              <svg
                className="h-4 w-4 text-amber-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
              </svg>
              Shared by Developers
            </span>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Master <span className="text-amber-300">Modern</span>
              <br />
              Web Development
            </h1>

            <p className="mt-6 max-w-xl text-lg text-indigo-100">
              Join <strong className="text-amber-300">10,000+</strong>{" "}
              developers learning cutting-edge programming techniques,
              frameworks, and best practices through our comprehensive tutorials
              and guides.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center rounded-lg bg-amber-400 px-6 py-3 text-sm font-bold text-gray-900 shadow-lg transition hover:bg-amber-300"
              >
                Explore Tutorials
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/40 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Get in Touch
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-indigo-200">
              <span className="flex items-center gap-1.5">
                <svg
                  className="h-4 w-4 text-amber-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906zM10 15a3 3 0 00-3 3v3h6v-3a3 3 0 00-3-3z" />
                </svg>
                500+ Developers
              </span>
              <span className="flex items-center gap-1.5">
                <svg
                  className="h-4 w-4 text-amber-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
                150+ Articles
              </span>
              <span className="flex items-center gap-1.5">
                <svg
                  className="h-4 w-4 text-amber-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Expert Content
              </span>
            </div>
          </div>

          <div className="hidden lg:col-span-5 lg:block">
            <div className="relative mx-auto max-w-sm">
              <div className="rounded-xl bg-gray-900 p-5 shadow-2xl">
                <div className="mb-4 flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <pre className="text-sm leading-relaxed">
                  <code>
                    <span className="text-purple-400">function</span>{" "}
                    <span className="text-amber-300">learnDev</span>
                    {"() {\n"}
                    {"  "}
                    <span className="text-cyan-400">const</span>{" "}
                    <span className="text-amber-300">skills</span> ={" "}
                    <span className="text-green-400">{`['React','Next.js','TS']`}</span>
                    {";\n"}
                    {"  "}
                    <span className="text-cyan-400">return</span>{" "}
                    <span className="text-amber-300">skills</span>.
                    <span className="text-green-400">map</span>(
                    <span className="text-orange-300">s =&gt; practice(s)</span>
                    );
                    {"\n}"}
                  </code>
                </pre>
              </div>
              <span className="absolute -left-4 -top-3 animate-bounce rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-gray-900 shadow">
                HTML5
              </span>
              <span className="absolute -bottom-3 -right-4 animate-bounce rounded-full bg-cyan-500 px-3 py-1 text-xs font-bold text-white shadow [animation-delay:0.5s]">
                JavaScript
              </span>
            </div>
          </div>
        </div>
      </div>

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
  );
}
