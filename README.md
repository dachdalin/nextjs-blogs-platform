# 📝 Next.js Blogs Platform

A modern, full-featured blogging platform built with **Next.js 16**, **React 19**, and **TypeScript**. Featuring a premium glassmorphism UI, dark mode support, SEO optimization, contact form with email integration, and more.

---

## 🛠️ Tech Stack

| Category           | Technology                                                           |
| ------------------ | -------------------------------------------------------------------- |
| **Framework**      | [Next.js 16](https://nextjs.org/) (App Router)                      |
| **Language**       | [TypeScript 5](https://www.typescriptlang.org/)                     |
| **UI Library**     | [React 19](https://react.dev/)                                      |
| **Styling**        | [Tailwind CSS 4](https://tailwindcss.com/) + CSS Modules            |
| **UI Components**  | [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/) |
| **Icons**          | [Lucide React](https://lucide.dev/)                                 |
| **Form Validation**| [Zod](https://zod.dev/)                                             |
| **Email Service**  | [Resend](https://resend.com/)                                       |
| **Notifications**  | [Sonner](https://sonner.emilkowal.dev/)                             |
| **Theme**          | [next-themes](https://github.com/pacocoursey/next-themes)           |
| **Syntax Highlight**| [Prism.js](https://prismjs.com/)                                   |
| **Linting**        | [ESLint 9](https://eslint.org/)                                     |

---

## 📁 Project Structure

```
nextjs-blogs-platform/
├── app/                          # Next.js App Router
│   ├── api/                      # API Routes
│   │   ├── contact/              #   └── Contact form endpoint
│   │   └── subscribe/            #   └── Newsletter subscription endpoint
│   ├── auth/                     # Authentication pages
│   ├── blog/                     # Blog listing & detail pages
│   ├── contact/                  # Contact page
│   ├── privacy/                  # Privacy policy page
│   ├── term/                     # Terms of service page
│   ├── error.tsx                 # Global error boundary
│   ├── globals.css               # Global styles & Tailwind directives
│   ├── layout.tsx                # Root layout
│   ├── not-found.tsx             # Custom 404 page
│   ├── page.tsx                  # Home page
│   ├── robots.ts                 # SEO robots.txt generation
│   └── sitemap.ts                # SEO sitemap generation
│
├── components/                   # Reusable UI Components
│   ├── auth/                     # Authentication components (FormInput, etc.)
│   ├── blog/                     # Blog-specific components
│   ├── contact/                  # Contact page components
│   ├── examples/                 # Example/demo components
│   ├── layout/                   # Layout components (Header, Footer)
│   ├── ui/                       # Base UI primitives (Button, Input, Skeleton, etc.)
│   ├── hero-section.tsx          # Landing hero section
│   ├── feature.tsx               # Feature showcase
│   ├── Testimonials.tsx          # Testimonials section
│   ├── newsletter-section.tsx    # Newsletter CTA section
│   ├── statistics.tsx            # Statistics display
│   └── ...                       # Other shared components
│
├── lib/                          # Utilities & Business Logic
│   ├── api/                      # API client utilities
│   ├── auth/                     # Auth configuration
│   ├── config/                   # App configuration
│   ├── errors/                   # Error handling utilities
│   ├── middleware/                # Custom middleware
│   ├── server/                   # Server-side utilities
│   ├── services/                 # Service layer (email, etc.)
│   ├── utils/                    # General utility functions
│   ├── validations/              # Zod validation schemas
│   ├── blog-utils.ts             # Blog helper functions
│   ├── constants.ts              # App-wide constants
│   └── utils.ts                  # Core utilities (cn, etc.)
│
├── data/                         # Static Data
│   ├── faq-data.ts               # FAQ content
│   └── posts.ts                  # Blog posts data
│
├── types/                        # TypeScript Type Definitions
│   └── post.ts                   # Post type interface
│
├── public/                       # Static Assets
│   ├── next.svg
│   ├── vercel.svg
│   └── ...
│
├── .env.example                  # Environment variables template
├── components.json               # shadcn/ui configuration
├── eslint.config.mjs             # ESLint configuration
├── next.config.ts                # Next.js configuration
├── postcss.config.mjs            # PostCSS configuration
├── tailwind.config.ts            # Tailwind CSS configuration (v4)
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies & scripts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.x
- **npm**, **yarn**, **pnpm**, or **bun**

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/nextjs-blogs-platform.git
cd nextjs-blogs-platform
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Configure Environment Variables

Copy the example environment file and fill in your values:

```bash
cp .env.example .env
```

Open `.env` and configure the following:

```env
# Resend API Configuration (Required for contact form)
RESEND_API_KEY=your_resend_api_key_here

# Email Configuration (Optional – defaults provided)
EMAIL_FROM=contact@yourdomain.com
EMAIL_OWNER=your-email@example.com
EMAIL_REPLY_TO=your-reply@example.com
OWNER_NAME=Your Name
```

> **Note:** Get your Resend API key at [resend.com/api-keys](https://resend.com/api-keys). The contact form will not work without it.

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production

```bash
npm run build
npm run start
```

---

## 📜 Available Scripts

| Command          | Description                          |
| ---------------- | ------------------------------------ |
| `npm run dev`    | Start development server             |
| `npm run build`  | Create optimized production build     |
| `npm run start`  | Start production server               |
| `npm run lint`   | Run ESLint to check code quality      |

---

## 🌐 Deploy on Vercel

The easiest way to deploy is with [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Add your environment variables in the Vercel dashboard
4. Deploy 🚀

Check the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs) – Features and API reference
- [Learn Next.js](https://nextjs.org/learn) – Interactive tutorial
- [Tailwind CSS Docs](https://tailwindcss.com/docs) – Utility-first CSS framework
- [Radix UI Docs](https://www.radix-ui.com/docs) – Accessible component primitives
- [shadcn/ui Docs](https://ui.shadcn.com/docs) – Re-usable component library
