"use client";

export default function ContactInfoCards() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-green-700">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 1 1 9.9 9.9L10 18.9l-4.95-4.95a7 7 0 0 1 0-9.9zM10 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-medium">Get in Touch</span>
          </div>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
            Other Ways to Reach Us
          </h2>
          <p className="text-lg text-gray-600">
            Choose the method that works best for you
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Email Card */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-lg transition hover:shadow-2xl">
            <div className="p-8 text-center">
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-blue-100 p-4">
                <svg
                  className="h-10 w-10 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z" />
                </svg>
              </div>
              <h4 className="mb-3 text-xl font-bold text-gray-900">Email Us</h4>
              <p className="mb-4 text-gray-600">
                Send us an email and we'll respond within 24 hours
              </p>
              <a
                href="mailto:hello@example.com"
                className="mb-4 block font-medium text-blue-600 hover:text-blue-700"
              >
                hello@example.com
              </a>
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 rounded-lg border border-blue-600 px-4 py-2 font-medium text-blue-600 transition hover:bg-blue-50"
              >
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Send Email
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-lg transition hover:shadow-2xl">
            <div className="p-8 text-center">
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-green-100 p-4">
                <svg
                  className="h-10 w-10 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 0 1 1-1h2.153a1 1 0 0 1 .986.79l.291 1.991a1 1 0 0 1-.523 1.12l-1.854.854a15.993 15.993 0 0 0 5.396 5.396l.854-1.854a1 1 0 0 1 1.12-.523l1.991.291a1 1 0 0 1 .79.986V17a1 1 0 0 1-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h4 className="mb-3 text-xl font-bold text-gray-900">Call Us</h4>
              <p className="mb-4 text-gray-600">
                Speak directly with our team for immediate assistance
              </p>
              <a
                href="tel:+1234567890"
                className="mb-4 block font-medium text-green-600 hover:text-green-700"
              >
                +1 (234) 567-890
              </a>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center gap-2 rounded-lg border border-green-600 px-4 py-2 font-medium text-green-600 transition hover:bg-green-50"
              >
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
                    d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Now
              </a>
            </div>
          </div>

          {/* Chat Card */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-lg transition hover:shadow-2xl">
            <div className="p-8 text-center">
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-amber-100 p-4">
                <svg
                  className="h-10 w-10 text-amber-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5z" />
                </svg>
              </div>
              <h4 className="mb-3 text-xl font-bold text-gray-900">
                Live Chat
              </h4>
              <p className="mb-4 text-gray-600">
                Chat with us in real-time for quick questions
              </p>
              <div className="mb-4 inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1">
                <span className="h-2 w-2 rounded-full bg-green-600"></span>
                <span className="text-sm font-medium text-green-700">
                  Online Now
                </span>
              </div>
              <div className="block">
                <button
                  onClick={() => alert("Chat feature coming soon!")}
                  className="inline-flex items-center gap-2 rounded-lg border border-amber-600 px-4 py-2 font-medium text-amber-600 transition hover:bg-amber-50"
                >
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
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3l-4 4z"
                    />
                  </svg>
                  Start Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
