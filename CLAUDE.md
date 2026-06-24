# My_Portfolio

## Overview
Personal portfolio site for Osaka Khamphavong (CS grad, Wilfrid Laurier University), branded **OZONES**. Showcases background, skills, projects, and experience from his resume, plus a simple blog.

- **Live:** https://ozones-web.vercel.app
- **GitHub repo:** https://github.com/OsakaOK/OzoneS (local working dir is still named `My_Portfolio`)

This is a fresh project, unrelated to the default `create-next-app` boilerplate at `/Users/orz_os/portfolio` — that project was not used or modified.

## Goals
- Showcase resume content: About, Skills, Projects, Experience, Education, Contact
- Simple MDX-based blog for project write-ups and notes

## Tech Stack
- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 (CSS-based config in `app/globals.css`, class-based dark mode via `next-themes`)
- Typography via `next/font`: **Space Grotesk** (display headings, `font-display`), **Inter** (body, `font-sans`), **JetBrains Mono** (labels/section indices, `font-mono`)
- Brand accent is an **icy-teal** token (`--accent` / `--accent-bright` in `globals.css`); penguin favicon at `app/icon.svg`
- `lucide-react` for icons; custom inline SVGs for GitHub/LinkedIn (`components/icons.tsx`) since lucide dropped brand icons
- Blog: MDX files in `content/posts/`, parsed with `gray-matter`, rendered with `next-mdx-remote/rsc`
- **Deployed to Vercel** at https://ozones-web.vercel.app — auto-deploys on every push to `main`

## Design System (Penguin brand)
- Single accent color (icy-teal) drives links, tags, hovers, and the hero gradient/glow
- Numbered section headers (`01 — About`) rendered by `components/section.tsx`
- Scroll-reveal via `components/reveal.tsx` (IntersectionObserver; respects `prefers-reduced-motion`, with a `<noscript>` fallback in `layout.tsx`)
- Hover-lift cards (Projects, Education, Blog) and a staggered hero entrance
- **Penguin mascot** (`components/penguin*.tsx`) walks across the bottom as you scroll the home page; hidden on `/blog` routes; show/hide toggle in the navbar; the penguin doubles as the navbar logo glyph beside the OZONES wordmark

## Planning Notes

### Current Plan
Built, rebranded as OZONES, and deployed to Vercel. See "Open Questions" for follow-ups.

### Decisions Log
- Built fresh in `My_Portfolio`; ignored the unused boilerplate at `/Users/orz_os/portfolio`
- Single-page layout with anchor-linked sections (Hero, About, Skills, Projects, Experience, Education, Contact) + separate `/blog` and `/blog/[slug]` routes
- Resume data lives in `lib/data.ts` as typed objects — edit this file to update content
- No backend contact form (kept scope tight); Contact section just links to email/LinkedIn/GitHub
- **Rebranded to OZONES**: redesigned with the penguin-brand direction (new fonts, icy-teal accent, scroll-reveal + hover motion, numbered section headers, penguin logo/favicon)
- **Projects:** added **FamFunds** (React Native/Expo + Supabase shared expense tracker); removed **Snip** and **Sumly** because they haven't been started. Current projects: FamFunds, PL Predict
- **Repo moved** from `OsakaOK/My_Portfolio` to a fresh `OsakaOK/OzoneS` (history rewritten to drop the original `Co-Authored-By` trailer); old repo to be deleted

### Open Questions
- About section bio (`lib/data.ts` → `about.paragraphs`) is a draft based on the resume — personalize as desired
- Confirm the project links in `lib/data.ts` match real repos: FamFunds (`https://github.com/OsakaOK/FamFunds`) and PL Predict (`https://github.com/OsakaOK/PL-Predict`)
- Delete the old `OsakaOK/My_Portfolio` repo once the OZONES move is fully verified
