export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: "How quickly can you respond to my inquiry?",
    answer: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly and we'll do our best to assist you immediately.",
  },
  {
    question: "What information should I include in my message?",
    answer: "Please provide as much detail as possible about your project, including your goals, timeline, budget range, and any specific requirements. This helps us provide you with the most accurate and helpful response.",
  },
  {
    question: "Do you offer free consultations?",
    answer: "Yes! We offer a free initial consultation to discuss your project needs and determine how we can best help you. This is a great opportunity to ask questions and get expert advice without any commitment.",
  },
  {
    question: "What types of projects do you work on?",
    answer: "We work on a wide range of projects including web development, mobile applications, consulting services, and technical support. Whether you need a simple website or a complex enterprise solution, we're here to help.",
  },
  {
    question: "Is my information secure?",
    answer: "Absolutely. We take your privacy seriously and use industry-standard security measures to protect your information. Your data will never be shared with third parties and is only used to respond to your inquiry.",
  },
  {
    question: "Can I schedule a call instead of filling out the form?",
    answer: "Of course! You can call us directly at the phone number listed on this page, or fill out the form and mention your preferred time for a call in the message field. We'll reach out to schedule a convenient time.",
  },
];
