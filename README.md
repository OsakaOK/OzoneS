# OZONES

Personal portfolio site for **Osaka Khamphavong** — Computer Science graduate (Wilfrid Laurier University). A single-page resume site showcasing about, skills, projects, experience, and education, plus a small MDX blog.

**Live:** https://ozones-web.vercel.app

## Tech Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** — CSS-based config in `app/globals.css`, class-based dark mode via `next-themes`
- **Typography** via `next/font`: Space Grotesk (display), Inter (body), JetBrains Mono (labels)
- **Icons:** `lucide-react`, plus custom inline SVGs for GitHub/LinkedIn
- **Blog:** MDX files in `content/posts/`, parsed with `gray-matter`, rendered with `next-mdx-remote/rsc`
- **Hosting:** Vercel (auto-deploys on push to `main`)

## Features

- Single-page layout with anchor-linked sections (Hero, About, Skills, Projects, Experience, Education, Contact)
- Light/dark mode toggle
- Icy-teal "penguin brand" design: numbered section headers, scroll-reveal animations, and hover-lift cards (all respecting `prefers-reduced-motion`)
- A penguin mascot that walks along the bottom as you scroll the home page (toggle in the navbar; hidden on blog pages)
- MDX blog at `/blog`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Project Structure

```
app/                  # App Router pages, layout, global styles, favicon (icon.svg)
  blog/               # /blog and /blog/[slug] routes
components/
  sections/           # Hero, About, Skills, Projects, Experience, Education, Contact
  layout/             # Navbar, Footer
  penguin*.tsx        # Mascot, toggle, and SVG
  reveal.tsx          # Scroll-reveal wrapper (IntersectionObserver)
  section.tsx         # Numbered section header + reveal wrapper
content/posts/        # Blog posts (MDX with frontmatter)
lib/data.ts           # Resume content (about, skills, projects, experience, education)
```

## Editing Content

- **Resume content** (about, skills, projects, experience, education) lives in [`lib/data.ts`](lib/data.ts) as typed objects — edit this single file to update the site.
- **Blog posts** are MDX files in [`content/posts/`](content/posts/); each needs frontmatter (title, date, excerpt).

## Deployment

Hosted on [Vercel](https://vercel.com). The `main` branch is connected to the project, so every push automatically builds and deploys to https://ozones-web.vercel.app. Pull requests get their own preview URLs.
