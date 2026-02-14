import { TERMSECTION } from "@/lib/constants";

export default function Term() {
  const termsSections = TERMSECTION;
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 py-24 lg:py-32">
        <div className="absolute inset-0 opacity-5">
          <svg
            className="h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <defs>
              <pattern
                id="grid"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a1 1 0 1 0 2 0V4a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v12a1 1 0 1 0 2 0V4z" />
              </svg>
              <span className="font-medium">Legal Document</span>
            </div>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Terms of Service
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-gray-300">
              Last updated: {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white p-8 shadow-lg lg:p-12">
            {termsSections.map((section, index) => (
              <div key={index} className="mb-8 last:mb-0">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">
                  {section.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
