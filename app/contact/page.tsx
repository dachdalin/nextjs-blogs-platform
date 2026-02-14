"use client";

import Faq from "@/components/contact/faq";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [openFaq, setOpenFaq] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      alert("Thank you! We'll be in touch soon.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  const faqs = [
    {
      question: "How quickly do you respond to inquiries?",
      answer: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly for immediate assistance.",
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes! We offer a free 30-minute consultation to discuss your project requirements and see how we can help bring your vision to life.",
    },
    {
      question: "What information should I include in my message?",
      answer: "Please include details about your project goals, timeline, budget range, and any specific requirements or features you need. The more information you provide, the better we can assist you.",
    },
    {
      question: "Do you work with international clients?",
      answer: "Absolutely! We work with clients worldwide and are experienced in managing projects across different time zones and communication preferences.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-700 py-24 lg:py-32">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="1" />
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
              Get in <span className="text-amber-300">Touch</span> We'd Love to Hear From You
            </h1>

            {/* Subheading */}
            <p className="mb-8 text-xl text-indigo-100 lg:text-2xl">
              Have a project in mind? Need technical support? Or just want to say hello?
              <br />
              <strong className="text-amber-300">We're here to help</strong> bring your ideas to life.
            </p>

            {/* Quick Features */}
            <div className="flex flex-wrap justify-center gap-6 text-indigo-100 sm:gap-8">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-12a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l2.828 2.829a1 1 0 1 0 1.415-1.415L11 9.586V6z" />
                </svg>
                <span className="font-medium">24h Response</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0 1 10 0v2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2zm8-2v2H7V7a3 3 0 0 1 6 0z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Secure & Private</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5z" />
                </svg>
                <span className="font-medium">Free Consultation</span>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-8-8a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-blue-700">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4zM3 10a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6zM14 9a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-2z" />
              </svg>
              <span className="font-medium">Send Message</span>
            </div>
            <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">Let's Start a Conversation</h2>
            <p className="text-lg text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
          </div>

          <div className="mx-auto max-w-2xl">
            <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-8 text-white">
                <div className="flex gap-4">
                  <div className="text-4xl">✉️</div>
                  <div>
                    <h3 className="text-2xl font-bold">Send us a Message</h3>
                    <p className="text-blue-100">We'd love to hear about your project</p>
                  </div>
                </div>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="space-y-6 p-8 lg:p-10">
                {/* Name Row */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-gray-900">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      placeholder="John"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-500 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-gray-900">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      placeholder="Doe"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-500 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Email & Phone Row */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-900">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="john@example.com"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-500 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-900">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (234) 567-890"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-500 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="mb-2 block text-sm font-medium text-gray-900">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your Company"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-500 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Subject Selection */}
                <div>
                  <label className="mb-4 block text-sm font-medium text-gray-900">
                    What can we help you with? <span className="text-red-500">*</span>
                  </label>
                  <div className="grid gap-3 md:grid-cols-2">
                    {[
                      { id: "web-development", label: "Web Development", icon: "💻" },
                      { id: "mobile-apps", label: "Mobile Apps", icon: "📱" },
                      { id: "consulting", label: "Consulting", icon: "💡" },
                      { id: "support", label: "Support", icon: "🎧" },
                    ].map((option) => (
                      <div key={option.id}>
                        <input
                          type="radio"
                          id={option.id}
                          name="subject"
                          value={option.id}
                          checked={formData.subject === option.id}
                          onChange={handleInputChange}
                          required
                          className="hidden"
                        />
                        <label
                          htmlFor={option.id}
                          className={`block cursor-pointer rounded-lg border-2 p-4 text-center transition ${
                            formData.subject === option.id
                              ? "border-blue-600 bg-blue-50 text-blue-900"
                              : "border-gray-300 bg-white hover:border-blue-400 text-gray-600"
                          }`}
                        >
                          <div className="text-2xl">{option.icon}</div>
                          <strong className="block">{option.label}</strong>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-900">
                    Tell us about your project <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Tell us about your project requirements, timeline, and budget..."
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-500 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Submit Button */}
                <div className="space-y-2 pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-lg bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700 disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="inline-flex items-center gap-2">
                        <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.125A59.769 59.769 0 0 1 21.94 4m0 0L18.731 20.875M21.94 4v11.55m0 0l-3.368 2.447m3.368-13.997L11.672 5.75" />
                        </svg>
                        Send Message
                      </span>
                    )}
                  </button>
                  <p className="text-center text-sm text-gray-500">
                    <svg className="mb-0.5 inline h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0 1 10 0v2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2zm8-2v2H7V7a3 3 0 0 1 6 0z" clipRule="evenodd" />
                    </svg>{" "}
                    Your information is secure and will never be shared
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-green-700">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 1 1 9.9 9.9L10 18.9l-4.95-4.95a7 7 0 0 1 0-9.9zM10 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Get in Touch</span>
            </div>
            <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">Other Ways to Reach Us</h2>
            <p className="text-lg text-gray-600">Choose the method that works best for you</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Email Card */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-lg transition hover:shadow-2xl">
              <div className="p-8 text-center">
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-blue-100 p-4">
                  <svg className="h-10 w-10 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z" />
                  </svg>
                </div>
                <h4 className="mb-3 text-xl font-bold text-gray-900">Email Us</h4>
                <p className="mb-4 text-gray-600">Send us an email and we'll respond within 24 hours</p>
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
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Email
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-lg transition hover:shadow-2xl">
              <div className="p-8 text-center">
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-green-100 p-4">
                  <svg className="h-10 w-10 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 0 1 1-1h2.153a1 1 0 0 1 .986.79l.291 1.991a1 1 0 0 1-.523 1.12l-1.854.854a15.993 15.993 0 0 0 5.396 5.396l.854-1.854a1 1 0 0 1 1.12-.523l1.991.291a1 1 0 0 1 .79.986V17a1 1 0 0 1-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h4 className="mb-3 text-xl font-bold text-gray-900">Call Us</h4>
                <p className="mb-4 text-gray-600">Speak directly with our team for immediate assistance</p>
                <a href="tel:+1234567890" className="mb-4 block font-medium text-green-600 hover:text-green-700">
                  +1 (234) 567-890
                </a>
                <a
                  href="tel:+1234567890"
                  className="inline-flex items-center gap-2 rounded-lg border border-green-600 px-4 py-2 font-medium text-green-600 transition hover:bg-green-50"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </a>
              </div>
            </div>

            {/* Chat Card */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-lg transition hover:shadow-2xl">
              <div className="p-8 text-center">
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-amber-100 p-4">
                  <svg className="h-10 w-10 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5z" />
                  </svg>
                </div>
                <h4 className="mb-3 text-xl font-bold text-gray-900">Live Chat</h4>
                <p className="mb-4 text-gray-600">Chat with us in real-time for quick questions</p>
                <div className="mb-4 inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1">
                  <span className="h-2 w-2 rounded-full bg-green-600"></span>
                  <span className="text-sm font-medium text-green-700">Online Now</span>
                </div>
                <div className="block">
                  <button
                    onClick={() => alert("Chat feature coming soon!")}
                    className="inline-flex items-center gap-2 rounded-lg border border-amber-600 px-4 py-2 font-medium text-amber-600 transition hover:bg-amber-50"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3l-4 4z" />
                    </svg>
                    Start Chat
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2 text-cyan-700">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 5v8a2 2 0 0 1-2 2h-5l-5 4v-4H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zM9 13a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Frequently Asked Questions</span>
            </div>
            <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">Quick Answers</h2>
            <p className="text-lg text-gray-600">Find answers to common questions before reaching out</p>
          </div>

          <div className="mx-auto max-w-2xl space-y-4">
            {faqs.map((faq, idx) => (
              <Faq key={idx} idx={idx} faq={faq} openFaq={openFaq} setOpenFaq={setOpenFaq} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
