// how to use this file
// import {  } from "./constants";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const FOOTER_LINKS = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const SOCIAL_LINKS = [
  { href: "#", label: "Twitter", icon: "" },
  { href: "#", label: "Facebook", icon: "" },
  { href: "#", label: "Instagram", icon: "" },
  { href: "#", label: "LinkedIn", icon: "" },
];

export const CATEGORIES = [
  { href: "/blog", label: "All" },
  { href: "/blog/category/web-development", label: "Web Development" },
  { href: "/blog/category/mobile-development", label: "Mobile Development" },
  { href: "/blog/category/data-science", label: "Data Science" },
  { href: "/blog/category/machine-learning", label: "Machine Learning" },
  { href: "/blog/category/artificial-intelligence", label: "Artificial Intelligence" },
  { href: "/blog/category/cloud-computing", label: "Cloud Computing" },
  { href: "/blog/category/cybersecurity", label: "Cybersecurity" },
  { href: "/blog/category/blockchain", label: "Blockchain" },
  { href: "/blog/category/internet-of-things", label: "Internet of Things" },
  { href: "/blog/category/virtual-reality", label: "Virtual Reality" },
  { href: "/blog/category/augmented-reality", label: "Augmented Reality" },
  { href: "/blog/category/game-development", label: "Game Development" },
  { href: "/blog/category/ui-ux-design", label: "UI/UX Design" },
  { href: "/blog/category/product-management", label: "Product Management" },
  { href: "/blog/category/agile-methodologies", label: "Agile Methodologies" },
  { href: "/blog/category/devops", label: "DevOps" },
  { href: "/blog/category/testing", label: "Testing" },
  { href: "/blog/category/performance-optimization", label: "Performance Optimization" },
  { href: "/blog/category/accessibility", label: "Accessibility" },
  { href: "/blog/category/web-performance", label: "Web Performance" },
];

export const TESTIMONIALS = [
  {
    name: "Alice Johnson",
    role: "Senior Frontend Engineer at TechCorp",
    quote: "This platform has been a game-changer for my team. The tutorials are in-depth, easy to follow, and cover the latest industry trends.",
    bg: "bg-blue-500",
  },
  {
    name: "Bob Smith",
    role: "Full Stack Developer at Innovate Solutions",
    quote: "I've learned so much from the articles here. The code examples are practical and immediately applicable to real-world projects.",
    bg: "bg-green-500",
  },
  {
    name: "Charlie Brown",
    role: "Lead Developer at Creative Agency",
    quote: "The community is fantastic! I've been able to connect with other developers, share ideas, and get help whenever I'm stuck.",
    bg: "bg-purple-500",
  },
];

export const FEATURES = [
  {
    title: "Real-World Projects",
    description: "Learn by building actual projects, not just theory.",
    icon: "🚀",
  },
  {
    title: "Expert Mentors",
    description: "Learn from industry leaders with years of experience.",
    icon: "👨‍🏫",
  },
  {
    title: "24/7 Support",
    description: "Get help whenever you need it, day or night.",
    icon: "⏰",
  },
  {
    title: "Community Forum",
    description: "Connect with thousands of developers worldwide.",
    icon: "👥",
  },
  {
    title: "Career Services",
    description: "Get help with your resume, portfolio, and interviews.",
    icon: "💼",
  },
  {
    title: "Certifications",
    description: "Earn certificates to showcase your skills to employers.",
    icon: "🎓",
  },
];

export const PRICING_PLANS = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for beginners getting started with web development.",
    features: [
      "Access to all blog posts",
      "Community forum access",
      "Email support",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19/month",
    description: "For developers who want to take their skills to the next level.",
    features: [
      "Everything in Free plan",
      "Access to premium tutorials",
      "Priority support",
      "Exclusive content",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$49/month",
    description: "For teams and organizations needing advanced features.",
    features: [
      "Everything in Pro plan",
      "Team management",
      "Custom onboarding",
      "Dedicated account manager",
    ],
    highlighted: false,
  },
];

export const CTA_CONTENT = {
  title: "Ready to Become a Full Stack Developer?",
  description: "Join thousands of successful developers who have transformed their careers with our comprehensive courses and mentorship program.",
  buttonText: "Enroll Now",
  buttonLink: "/pricing",
  image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1950&q=80",
};

export const FAQ_CONTENT = [
  {
    question: "What prerequisites do I need to enroll?",
    answer: "No prior coding experience is required. Our beginner-friendly courses start from the fundamentals and guide you step by step.",
  },
  {
    question: "How long does it take to complete the program?",
    answer: "Most students complete the full stack development program in 6-9 months, depending on their pace. You can learn at your own schedule.",
  },
  {
    question: "Do you offer job placement assistance?",
    answer: "Yes! We have a dedicated career services team that helps with resume building, interview preparation, and connecting you with top tech companies.",
  },
  {
    question: "Can I switch courses after enrolling?",
    answer: "Yes, you can switch to any other course within the first 30 days of enrollment. No questions asked.",
  },
  {
    question: "Are the courses up to date with industry standards?",
    answer: "Absolutely! Our curriculum is updated quarterly to include the latest technologies, frameworks, and best practices in the industry.",
  },
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    slug: "getting-started-with-react-hooks",
    excerpt: "Learn how to use React Hooks to manage state and side effects in your functional components.",
    content: "# Getting Started with React Hooks\n\nReact Hooks allow you to use state and other React features without writing a class. Here's how to get started:\n\n## useState\n\nThe `useState` hook lets you add state to functional components:\n\n```javascript\nimport { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}\n```\n\n## useEffect\n\nThe `useEffect` hook lets you perform side effects in functional components:\n\n```javascript\nimport { useState, useEffect } from 'react';\n\nfunction Timer() {\n  const [count, setCount] = useState(0);\n\n  useEffect(() => {\n    const id = setInterval(() => {\n      setCount(count + 1);\n    }, 1000);\n    return () => clearInterval(id);\n  }, [count]);\n\n  return <div>Count: {count}</div>;\n}\n```",
    author: "Alice Johnson",
    date: "2023-10-26",
    category: "Web Development",
    tags: ["react", "javascript", "frontend"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9537aa97?auto=format&fit=crop&w=800&q=80",
    readingTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Mastering CSS Grid Layout",
    slug: "mastering-css-grid-layout",
    excerpt: "A comprehensive guide to CSS Grid Layout for building complex responsive layouts.",
    content: "# Mastering CSS Grid Layout\n\nCSS Grid Layout is a powerful two-dimensional layout system for the web. Here's how to master it:\n\n## Basic Grid\n\n```css\n.container {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 100px 100px;\n  gap: 10px;\n}\n```\n\n## Grid Template Areas\n\n```css\n.container {\n  display: grid;\n  grid-template-areas:\n    'header header header'\n    'main sidebar main'\n    'footer footer footer';\n}\n\n.header { grid-area: header; }\n.main { grid-area: main; }\n.sidebar { grid-area: sidebar; }\n.footer { grid-area: footer; }\n```",
    author: "Bob Smith",
    date: "2023-10-25",
    category: "Web Development",
    tags: ["css", "frontend", "layout"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    readingTime: "7 min read",
    featured: true,
  },
  {
    id: 3,
    title: "Introduction to Machine Learning",
    slug: "introduction-to-machine-learning",
    excerpt: "An overview of machine learning concepts and how to get started with ML projects.",
    content: "# Introduction to Machine Learning\n\nMachine learning is a subset of AI that enables systems to learn from data and improve over time. Here's an introduction:\n\n## What is Machine Learning?\n\nMachine learning involves training algorithms on data to make predictions or decisions without being explicitly programmed.\n\n## Types of Machine Learning\n\n### Supervised Learning\n\n```python\n# Supervised learning example\nfrom sklearn.linear_model import LinearRegression\n\nX = [[1], [2], [3], [4]]\ny = [2, 4, 6, 8]\n\nmodel = LinearRegression()\nmodel.fit(X, y)\n\nprint(model.predict([[5]]))  # Output: [10]\n```\n\n### Unsupervised Learning\n\n```python\n# Unsupervised learning example\nfrom sklearn.cluster import KMeans\n\nX = [[1, 2], [1.5, 1.8], [5, 8], [8, 8], [1, 0.6], [9, 11]]\n\nkmeans = KMeans(n_clusters=2)\nkmeans.fit(X)\n\nprint(kmeans.labels_)  # Output: [0, 0, 1, 1, 0, 1]\n```",
    author: "Charlie Brown",
    date: "2023-10-24",
    category: "Machine Learning",
    tags: ["machine-learning", "python", "data-science"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    readingTime: "8 min read",
    featured: true,
  },
];

export const TERMSECTION = [
  {
      title: "1. Acceptance of Terms",
      content:
        "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service. We reserve the right to modify these terms at any time without notice.",
    },
    {
      title: "2. Use License",
      content:
        "Permission is granted to temporarily download one copy of the materials (information or software) on our website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modifying or copying the materials; using the materials for any commercial purpose or for any public display; attempting to decompile or reverse engineer any software contained on the website; removing any copyright or other proprietary notations from the materials; or transferring the materials to another person or 'mirroring' the materials on any other server.",
    },
    {
      title: "3. Disclaimer",
      content:
        "The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
    },
    {
      title: "4. Limitations",
      content:
        "In no event shall our company or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if we or our authorized representative has been notified orally or in writing of the possibility of such damage.",
    },
    {
      title: "5. Accuracy of Materials",
      content:
        "The materials appearing on our website could include technical, typographical, or photographic errors. Our company does not warrant that any of the materials on our website are accurate, complete, or current. We may make changes to the materials contained on our website at any time without notice.",
    },
    {
      title: "6. Links",
      content:
        "We have not reviewed all of the sites linked to our website and are not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user's own risk. If you decide to leave our website and access third-party content, you do so at your own risk and subject to the terms and conditions of use for such websites.",
    },
    {
      title: "7. Modifications",
      content:
        "Our company may revise these terms of service for our website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service. We will notify users of changes via email or prominent notice on the website.",
    },
    {
      title: "8. Governing Law",
      content:
        "These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which we operate, and you irrevocably submit to the exclusive jurisdiction of the courts in that location. If any portion of these terms is found to be unenforceable, the remaining portion shall remain in full force and effect.",
    },
    {
      title: "9. User Responsibilities",
      content:
        "You agree to use this website only for lawful purposes and in a way that does not infringe upon the rights of others or restrict their use and enjoyment of the website. Prohibited behavior includes: harassing or causing distress or inconvenience to any person; transmitting obscene or offensive content or disrupting the normal flow of dialogue within our website; and attempting to gain unauthorized access to our systems.",
    },
    {
      title: "10. Intellectual Property Rights",
      content:
        "All content on this website, including text, graphics, logos, images, and software, is the property of our company or our content suppliers and is protected by international copyright laws. Unauthorized use, reproduction, or distribution of any content is strictly prohibited and may result in legal action.",
    },
];

export const PRIVACYSECTIONS = [
    {
      title: "1. Information We Collect",
      content:
        "We collect information you provide directly to us, such as when you fill out a form, subscribe to our newsletter, or contact us. This may include your name, email address, phone number, and any other information you choose to provide. We also automatically collect certain information about your device and how you interact with our website, including IP address, browser type, pages visited, and time spent on pages.",
    },
    {
      title: "2. How We Use Your Information",
      content:
        "We use the information we collect to provide, maintain, and improve our services, to communicate with you about updates and changes, to respond to your inquiries and support requests, to send promotional information and newsletters (which you can opt out of anytime), and to comply with legal obligations. We analyze usage patterns to enhance user experience and develop new features.",
    },
    {
      title: "3. Data Security",
      content:
        "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption of sensitive data, secure password policies, and regular security audits. However, no method of transmission over the Internet or electronic storage is completely secure.",
    },
    {
      title: "4. Sharing Your Information",
      content:
        "We do not sell or rent your personal information to third parties. We may share your information with service providers who assist us in operating our website and conducting our business, such as payment processors, hosting providers, and customer support platforms. We require these service providers to maintain the confidentiality and security of your information.",
    },
    {
      title: "5. Cookies and Tracking Technologies",
      content:
        "We use cookies and similar tracking technologies to enhance your browsing experience, remember your preferences, and understand how you use our website. You can control cookie settings through your browser preferences, but disabling cookies may affect some functionality of our site.",
    },
    {
      title: "6. Your Rights and Choices",
      content:
        "Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your data. You can opt out of marketing communications at any time by clicking the unsubscribe link in our emails. To exercise these rights, please contact us using the information provided below.",
    },
    {
      title: "7. Children's Privacy",
      content:
        "Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected information from a child under 13, we will take steps to delete such information promptly.",
    },
    {
      title: "8. Changes to This Privacy Policy",
      content:
        "We may update this privacy policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website and updating the effective date. Your continued use of our website constitutes your acceptance of the updated policy.",
    },
  ];

