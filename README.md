# OZONES

Personal portfolio site. A quick-to-skim resume site showcasing projects, skills, experience, and education, plus a small MDX blog.

**Live:** https://ozones.one

## Tech Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** — CSS-based config in `app/globals.css`, class-based dark mode via `next-themes`
- **Typography** via `next/font`: Space Grotesk (display), Inter (body), JetBrains Mono (labels)
- **Icons:** `lucide-react`, plus custom inline SVGs for GitHub/LinkedIn/Instagram
- **Blog:** MDX files parsed with `gray-matter`, rendered with `next-mdx-remote/rsc`
- **Hosting:** Vercel

## Features

- Quick-browse homepage built for mobile visitors arriving from social links: Hero → Projects → Quick Facts (skills, experience, education) → Contact
- Dedicated `/projects` page with fuller project write-ups
- Light/dark mode toggle
- Icy-teal "penguin brand" design: numbered section headers, scroll-reveal animations, and hover-lift cards (all respecting `prefers-reduced-motion`)
- A penguin mascot that walks along the bottom as you scroll the home page (toggle in the navbar; hidden on blog pages)
- MDX blog at `/blog`
