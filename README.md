# Emily Duttinger Portfolio

A modern, performant portfolio website built with Next.js 15, React 19, TypeScript, and Tailwind CSS. Showcasing over 10 years of Frontend UX/UI Engineering work with an emphasis on clean code, accessibility, and thoughtful design.

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **React:** 19.1
- **TypeScript:** 5.x
- **Styling:** Tailwind CSS 4 + CSS Modules
- **Animations:** Framer Motion (motion/react)
- **Package Manager:** pnpm
- **Build Tool:** Turbopack

## ✨ Features

- **Server-Side Rendering** - Optimized for performance and SEO
- **Dark/Light Theme** - Theme toggle with cookie-based persistence (no hydration issues)
- **Smooth Animations** - Page transitions and scroll-based animations using Framer Motion with LazyMotion
- **Responsive Design** - Mobile-first approach with custom breakpoints
- **Type-Safe** - Full TypeScript implementation
- **Optimized Images & Videos** - Next.js Image optimization and lazy-loaded video players
- **Accessible** - Semantic HTML, ARIA labels, keyboard navigation support
- **Static Generation** - Fast page loads with `generateStaticParams` for work case studies

## 📁 Project Structure

```
src/
├── app/                      # Next.js App Router
│   ├── about/               # About page
│   ├── work/                # Work portfolio pages
│   │   └── [slug]/         # Dynamic case study pages
│   ├── contexts/           # React contexts (Theme)
│   └── layout.tsx          # Root layout with providers
├── components/
│   ├── Animation/          # Animation components (Fade, AnimationProvider)
│   ├── Container/          # Layout container
│   ├── HomeIntro/          # Home page hero section
│   ├── Icons/              # SVG icon components
│   ├── Layout/             # Header, Footer
│   ├── Navigation/         # Site navigation
│   ├── UI/                 # Reusable UI components (Button, VideoPlayer, etc.)
│   └── Work/               # Work/portfolio components
├── data/                   # Static data (work items)
└── styles/                 # Global styles and CSS variables
```

## 🎨 Design System

The project uses a hybrid styling approach:

- **CSS Variables** - Design tokens for colors, spacing, typography
- **Tailwind CSS** - Utility classes for rapid development
- **CSS Modules** - Component-specific styles
- **Dark Mode** - CSS class-based theme switching

## 🛠️ Development

### Prerequisites

- Node.js 20+ 
- pnpm (recommended)

### Installation

```bash
# Install dependencies
pnpm install

# Run development server with Turbopack
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint
```

The development server will be available at [http://localhost:3000](http://localhost:3000).

## 📄 License

Private - All rights reserved.

---

**Built by [Emily Duttinger](https://emilyduttinger.com)** - Frontend UX/UI Engineer
