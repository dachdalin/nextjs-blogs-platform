import { PRIVACYSECTIONS } from "@/lib/constants";

export default function Privacy() {
  const privacySections = PRIVACYSECTIONS;
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
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0 1 10 0v2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2zm8-2v2H7V7a3 3 0 0 1 6 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">Your Privacy Matters</span>
            </div>

            <h1 className="mb-6 text-5xl font-bold text-white lg:text-6xl">
              Privacy Policy
            </h1>

            <p className="mx-auto max-w-2xl text-xl text-gray-300 lg:text-2xl">
              Read our privacy policy to learn how we collect, use, and protect
              your personal information with the utmost care and respect
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <div className="mb-16 rounded-2xl bg-white p-8 shadow-lg">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-blue-700">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z" />
              </svg>
              <span className="font-medium">Last Updated: February 2026</span>
            </div>

            <p className="mb-4 text-gray-700">
              We are committed to protecting your privacy and ensuring you have
              a positive experience on our website. This Privacy Policy applies
              to all users of our website and explains how we collect, use,
              disclose, and safeguard your information.
            </p>

            <p className="text-gray-700">
              Please read this Privacy Policy carefully. If you do not agree
              with our policies and practices, you should not use our website.
              By accessing and using our website, you acknowledge that you have
              read, understood, and agree to be bound by all the provisions of
              this Privacy Policy.
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-6">
            {privacySections.map((section, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl bg-white shadow-lg transition hover:shadow-xl"
              >
                <div className="p-8">
                  <div className="mb-4 flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                      <span className="font-bold text-blue-600">{idx + 1}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {section.title}
                    </h2>
                  </div>

                  <p className="text-gray-700 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white shadow-xl">
            <div className="flex items-center gap-4 mb-4">
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z" />
              </svg>
              <h3 className="text-2xl font-bold">
                Questions About Our Privacy Policy?
              </h3>
            </div>

            <p className="mb-6 text-blue-100">
              If you have any questions about this Privacy Policy or our privacy
              practices, please don't hesitate to reach out to us. We're here to
              help and happy to hear from you.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-bold text-blue-600 transition hover:bg-blue-50"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Contact Us
            </a>
          </div>

          {/* Footer Info */}
          <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-8">
            <h3 className="mb-4 text-lg font-bold text-gray-900">
              Privacy Policy Information
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <svg
                  className="h-5 w-5 flex-shrink-0 text-green-600 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm3.707-9.293a1 1 0 0 0-1.414-1.414L9 10.586 7.707 9.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  <strong>Effective Date:</strong> This policy is effective as
                  of February 2026
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="h-5 w-5 flex-shrink-0 text-green-600 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm3.707-9.293a1 1 0 0 0-1.414-1.414L9 10.586 7.707 9.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  <strong>Regular Updates:</strong> We may update this policy
                  periodically. Check back regularly for the latest version
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="h-5 w-5 flex-shrink-0 text-green-600 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm3.707-9.293a1 1 0 0 0-1.414-1.414L9 10.586 7.707 9.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  <strong>Data Protection:</strong> Your information is
                  protected with industry-standard security measures
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
