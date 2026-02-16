// how to use this file
// import {  } from "./constants";

import { ContentBlock } from "./blog-utils";

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  description: string;
  type: string;
  readTime: string;
  views: number;
  tags: string[];
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  date: string;
  createdAt: string;
  updatedAt: string;
  content: ContentBlock[];
}

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

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: "react-hooks-guide",
    title: "Complete Guide to React Hooks",
    description:
      "Master React Hooks with in-depth examples covering useState, useEffect, useContext, and custom hooks.",
    type: "tutorial",
    readTime: "12 min read",
    views: 5230,
    tags: ["React", "JavaScript", "Hooks"],
    author: { 
      name: "Dach Dalin", 
      avatar: "DD",
      bio: "Full-stack developer passionate about modern web technologies"
    },
    date: "Feb 10, 2026",
    createdAt: "Feb 10, 2026",
    updatedAt: "Feb 10, 2026",
    content: [
      {
        type: "heading",
        content: "Introduction to React Hooks",
      },
      {
        type: "text",
        content:
          "React Hooks revolutionized how we write React components by allowing us to use state and other React features without writing a class. In this comprehensive guide, we'll explore the most important hooks and how to use them effectively.",
      },
      {
        type: "heading",
        content: "useState Hook",
      },
      {
        type: "text",
        content:
          "The useState hook is the most fundamental hook that lets you add state to functional components. It returns an array with two elements: the current state value and a function to update it.",
      },
      {
        type: "code",
        language: "javascript",
        content: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`,
      },
      {
        type: "heading",
        content: "useEffect Hook",
      },
      {
        type: "text",
        content:
          "The useEffect hook lets you perform side effects in functional components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount combined in class components.",
      },
      {
        type: "code",
        language: "javascript",
        content: `import { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);
    
    return () => clearInterval(id);
  }, []);

  return <div>Count: {count}</div>;
}`,
      },
    ],
  },
  {
    id: 2,
    slug: "javascript-async-await",
    title: "Mastering JavaScript: async/await vs Promises",
    description:
      "Deep dive into asynchronous JavaScript patterns, comparing promises, async/await, and error handling.",
    type: "code",
    readTime: "8 min read",
    views: 3840,
    tags: ["JavaScript", "Async"],
    author: { 
      name: "Dach Dalin", 
      avatar: "DD",
      bio: "Full-stack developer passionate about modern web technologies"
    },
    date: "Feb 8, 2026",
    createdAt: "Feb 8, 2026",
    updatedAt: "Feb 8, 2026",
    content: [
      {
        type: "heading",
        content: "Understanding Asynchronous JavaScript",
      },
      {
        type: "text",
        content:
          "Asynchronous programming is essential in JavaScript for handling operations like API calls, file reading, and timers. Let's explore the evolution from callbacks to promises to async/await.",
      },
      {
        type: "heading",
        content: "Promises",
      },
      {
        type: "text",
        content:
          "Promises provide a cleaner way to handle asynchronous operations compared to callbacks. A promise represents a value that may be available now, in the future, or never.",
      },
      {
        type: "code",
        language: "javascript",
        content: `function fetchUser(id) {
  return fetch(\`/api/users/\${id}\`)
    .then(response => response.json())
    .then(data => {
      console.log('User:', data);
      return data;
    })
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
}`,
      },
      {
        type: "heading",
        content: "async/await",
      },
      {
        type: "text",
        content:
          "The async/await syntax makes asynchronous code look and behave more like synchronous code, making it easier to read and maintain.",
      },
      {
        type: "code",
        language: "javascript",
        content: `async function fetchUser(id) {
  try {
    const response = await fetch(\`/api/users/\${id}\`);
    const data = await response.json();
    console.log('User:', data);
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}`,
      },
    ],
  },
  {
    id: 3,
    slug: "tailwind-css-responsive",
    title: "Responsive Design with Tailwind CSS",
    description:
      "Build responsive layouts using Tailwind's powerful utility-first approach and breakpoint system.",
    type: "tutorial",
    readTime: "10 min read",
    views: 4120,
    tags: ["Tailwind", "CSS", "Responsive"],
    author: { 
      name: "Dach Dalin", 
      avatar: "DD",
      bio: "Full-stack developer passionate about modern web technologies"
    },
    date: "Feb 5, 2026",
    createdAt: "Feb 5, 2026",
    updatedAt: "Feb 5, 2026",
    content: [
      {
        type: "heading",
        content: "Introduction to Tailwind CSS",
      },
      {
        type: "text",
        content:
          "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs. Its responsive design system makes it easy to create layouts that work on all screen sizes.",
      },
      {
        type: "heading",
        content: "Responsive Breakpoints",
      },
      {
        type: "text",
        content:
          "Tailwind uses a mobile-first breakpoint system. You can prefix any utility class with a breakpoint name to apply it only at that screen size and above.",
      },
      {
        type: "code",
        language: "html",
        content: `<!-- Mobile: stack vertically, Desktop: 3 columns -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="bg-blue-500 p-4">Item 1</div>
  <div class="bg-green-500 p-4">Item 2</div>
  <div class="bg-purple-500 p-4">Item 3</div>
</div>`,
      },
      {
        type: "heading",
        content: "Responsive Typography",
      },
      {
        type: "text",
        content:
          "You can also make typography responsive by using breakpoint prefixes with text size utilities.",
      },
      {
        type: "code",
        language: "html",
        content: `<h1 class="text-2xl md:text-4xl lg:text-6xl font-bold">
  Responsive Heading
</h1>

<p class="text-sm md:text-base lg:text-lg">
  This paragraph adjusts its size based on screen width.
</p>`,
      },
    ],
  },
  {
    id: 4,
    slug: "nextjs-dynamic-routes",
    title: "Dynamic Routes in Next.js 15",
    description:
      "Learn how to create flexible dynamic routes in Next.js with the App Router and practical examples.",
    type: "code",
    readTime: "9 min read",
    views: 2930,
    tags: ["Next.js", "Routing"],
    author: { 
      name: "Dach Dalin", 
      avatar: "DD",
      bio: "Full-stack developer passionate about modern web technologies"
    },
    date: "Feb 3, 2026",
    createdAt: "Feb 3, 2026",
    updatedAt: "Feb 3, 2026",
    content: [
      {
        type: "heading",
        content: "Understanding Dynamic Routes",
      },
      {
        type: "text",
        content:
          "Dynamic routes in Next.js allow you to create pages with URLs that include dynamic segments. This is perfect for blog posts, product pages, user profiles, and more.",
      },
      {
        type: "heading",
        content: "Creating a Dynamic Route",
      },
      {
        type: "text",
        content:
          "In the App Router, you create dynamic routes by wrapping a folder name in square brackets. For example, [slug] creates a dynamic segment.",
      },
      {
        type: "code",
        language: "typescript",
        content: `// app/blog/[slug]/page.tsx
export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>Blog Post: {params.slug}</h1>
    </div>
  );
}`,
      },
      {
        type: "heading",
        content: "Generating Static Params",
      },
      {
        type: "text",
        content:
          "For static site generation, you can use generateStaticParams to pre-render pages at build time.",
      },
      {
        type: "code",
        language: "typescript",
        content: `export async function generateStaticParams() {
  const posts = await getPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  
  return (
    <article>
      <h1>{post.title}</h1>
      <div>{post.content}</div>
    </article>
  );
}`,
      },
    ],
  },
  {
    id: 5,
    slug: "typescript-generics",
    title: "TypeScript Generics Explained",
    description:
      "Understand TypeScript generics with real-world examples and best practices for type safety.",
    type: "tutorial",
    readTime: "11 min read",
    views: 4560,
    tags: ["TypeScript", "Advanced"],
    author: { 
      name: "Dach Dalin", 
      avatar: "DD",
      bio: "Full-stack developer passionate about modern web technologies"
    },
    date: "Jan 28, 2026",
    createdAt: "Jan 28, 2026",
    updatedAt: "Jan 28, 2026",
    content: [
      {
        type: "heading",
        content: "What are Generics?",
      },
      {
        type: "text",
        content:
          "Generics provide a way to create reusable components that work with multiple types while maintaining type safety. They allow you to write flexible, type-safe code without sacrificing the benefits of TypeScript's type system.",
      },
      {
        type: "heading",
        content: "Basic Generic Function",
      },
      {
        type: "text",
        content:
          "Here's a simple example of a generic function that works with any type:",
      },
      {
        type: "code",
        language: "typescript",
        content: `function identity<T>(arg: T): T {
  return arg;
}

// Usage
const num = identity<number>(42);
const str = identity<string>("hello");
const obj = identity({ name: "John" });`,
      },
      {
        type: "heading",
        content: "Generic Interfaces",
      },
      {
        type: "text",
        content:
          "You can also use generics with interfaces to create flexible data structures:",
      },
      {
        type: "code",
        language: "typescript",
        content: `interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

interface User {
  id: number;
  name: string;
  email: string;
}

const userResponse: ApiResponse<User> = {
  data: { id: 1, name: "John", email: "john@example.com" },
  status: 200,
  message: "Success"
};`,
      },
    ],
  },
  {
    id: 6,
    slug: "state-management-redux",
    title: "State Management with Redux Toolkit",
    description:
      "Modern state management patterns using Redux Toolkit with practical examples and best practices.",
    type: "tutorial",
    readTime: "13 min read",
    views: 3450,
    tags: ["Redux", "State Management"],
    author: { 
      name: "Dach Dalin", 
      avatar: "DD",
      bio: "Full-stack developer passionate about modern web technologies"
    },
    date: "Jan 25, 2026",
    createdAt: "Jan 25, 2026",
    updatedAt: "Jan 25, 2026",
    content: [
      {
        type: "heading",
        content: "Why Redux Toolkit?",
      },
      {
        type: "text",
        content:
          "Redux Toolkit is the official, opinionated, batteries-included toolset for efficient Redux development. It simplifies store setup, reduces boilerplate, and includes best practices by default.",
      },
      {
        type: "heading",
        content: "Creating a Slice",
      },
      {
        type: "text",
        content:
          "A slice is a collection of Redux reducer logic and actions for a single feature. Here's how to create one:",
      },
      {
        type: "code",
        language: "typescript",
        content: `import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;`,
      },
      {
        type: "heading",
        content: "Configuring the Store",
      },
      {
        type: "text",
        content:
          "Setting up the Redux store with Redux Toolkit is straightforward:",
      },
      {
        type: "code",
        language: "typescript",
        content: `import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;`,
      },
    ],
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

