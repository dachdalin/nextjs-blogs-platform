export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-700 py-24 lg:py-32">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
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
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-white backdrop-blur">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z" />
            </svg>
            <span className="font-medium">Let's Connect</span>
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 text-5xl font-bold text-white lg:text-6xl">
            Get in <span className="text-amber-300">Touch</span> We'd Love to
            Hear From You
          </h1>

          {/* Subheading */}
          <p className="mb-8 text-xl text-indigo-100 lg:text-2xl">
            Have a project in mind? Need technical support? Or just want to say
            hello?
            <br />
            <strong className="text-amber-300">We're here to help</strong> bring
            your ideas to life.
          </p>

          {/* Quick Features */}
          <div className="flex flex-wrap justify-center gap-6 text-indigo-100 sm:gap-8">
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-amber-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-12a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l2.828 2.829a1 1 0 1 0 1.415-1.415L11 9.586V6z" />
              </svg>
              <span className="font-medium">24h Response</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-amber-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0 1 10 0v2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2zm8-2v2H7V7a3 3 0 0 1 6 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">Secure & Private</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-amber-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5z" />
              </svg>
              <span className="font-medium">Free Consultation</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="h-6 w-6 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-8-8a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
