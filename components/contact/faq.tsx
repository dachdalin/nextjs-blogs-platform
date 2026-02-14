"use client";

export default function Faq({ idx, faq, openFaq, setOpenFaq }: any  ) {
  return (
    <div key={idx} className="overflow-hidden rounded-lg bg-white shadow-md">
      <button
        onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
        className="flex w-full items-center justify-between px-6 py-4 text-left font-bold text-gray-900 hover:bg-gray-50"
      >
        {faq.question}
        <svg
          className={`h-5 w-5 transition-transform ${openFaq === idx ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>
      {openFaq === idx && (
        <div className="border-t border-gray-200 px-6 py-4 text-gray-600">
          {faq.answer}
        </div>
      )}
    </div>
  );
}
