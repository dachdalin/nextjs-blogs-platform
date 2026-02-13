const stats = [
  { label: "Published Articles", value: "150+", color: "text-blue-600" },
  { label: "Happy Readers", value: "10,000+", color: "text-green-600" },
  { label: "Code Examples", value: "50+", color: "text-amber-500" },
  { label: "Tutorials", value: "25+", color: "text-cyan-500" },
];

const featuredPosts = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js 15 — The Complete Guide",
    description:
      "Learn everything you need to know about Next.js 15: App Router, Server Components, and more.",
    type: "tutorial" as const,
    readTime: "8 min read",
    views: 4_230,
    tags: ["Next.js", "React", "TypeScript"],
    author: { name: "Dach Dalin", avatar: "DD" },
    date: "Jan 20, 2026",
  },
  {
    slug: "tailwind-css-best-practices",
    title: "Tailwind CSS Best Practices for Large-Scale Apps",
    description:
      "Discover proven patterns and techniques for managing Tailwind CSS in production-grade applications.",
    type: "code" as const,
    readTime: "6 min read",
    views: 3_120,
    tags: ["Tailwind", "CSS"],
    author: { name: "Dach Dalin", avatar: "DD" },
    date: "Jan 15, 2026",
  },
  {
    slug: "typescript-advanced-patterns",
    title: "Advanced TypeScript Patterns Every Developer Should Know",
    description:
      "Master generics, conditional types, mapped types, and template literal types to write safer code.",
    type: "tutorial" as const,
    readTime: "10 min read",
    views: 5_870,
    tags: ["TypeScript", "JavaScript"],
    author: { name: "Dach Dalin", avatar: "DD" },
    date: "Jan 10, 2026",
  },
];

const recentPosts = [
  {
    slug: "react-server-components",
    title: "Understanding React Server Components in Depth",
    description:
      "A deep dive into how React Server Components work and when to use them.",
    type: "tutorial" as const,
    readTime: "7 min read",
    views: 2_100,
    author: { name: "Dach Dalin", avatar: "DD" },
    date: "Feb 10, 2026",
    isNew: true,
  },
  {
    slug: "building-rest-apis-node",
    title: "Building REST APIs with Node.js and Express",
    description:
      "Step-by-step guide to creating a production-ready REST API with authentication and validation.",
    type: "code" as const,
    readTime: "12 min read",
    views: 1_850,
    author: { name: "Dach Dalin", avatar: "DD" },
    date: "Feb 8, 2026",
    isNew: true,
  },
  {
    slug: "css-grid-flexbox-guide",
    title: "CSS Grid vs Flexbox — When to Use Which",
    description:
      "A practical comparison of CSS Grid and Flexbox with real-world layout examples.",
    type: "tutorial" as const,
    readTime: "5 min read",
    views: 3_400,
    author: { name: "Dach Dalin", avatar: "DD" },
    date: "Feb 5, 2026",
    isNew: false,
  },
];

const testimonials = [
  {
    quote:
      "The tutorials here are incredibly detailed and easy to follow. I've learned more in the past month than I did in my entire bootcamp!",
    name: "Sarah Johnson",
    role: "Frontend Developer at Spotify",
    bg: "bg-indigo-500",
  },
  {
    quote:
      "Amazing code examples and real-world projects. The quality of content is outstanding and always up-to-date with latest trends.",
    name: "Mike Chen",
    role: "Full Stack Developer at Airbnb",
    bg: "bg-emerald-600",
  },
  {
    quote:
      "This blog helped me land my dream job! The interview preparation articles and coding challenges are pure gold.",
    name: "Emily Rodriguez",
    role: "Software Engineer at Tesla",
    bg: "bg-red-600",
  },
];

export { stats, featuredPosts, recentPosts, testimonials };