"use client";

import { useState } from "react";
import Faq from "@/components/contact/faq";
import { faqs } from "@/data/faq-data";

export default function ContactFAQSection() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2 text-cyan-700">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 5v8a2 2 0 0 1-2 2h-5l-5 4v-4H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zM9 13a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-medium">Frequently Asked Questions</span>
          </div>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
            Quick Answers
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions before reaching out
          </p>
        </div>

        <div className="mx-auto max-w-2xl space-y-4">
          {faqs.map((faq, idx) => (
            <Faq
              key={idx}
              idx={idx}
              faq={faq}
              openFaq={openFaq}
              setOpenFaq={setOpenFaq}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
