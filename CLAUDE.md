# My_Portfolio

## Overview
Personal portfolio site for Osaka Khamphavong (CS grad, Wilfrid Laurier University). Showcases background, skills, projects, and experience from his resume, plus a simple blog.

This is a fresh project, unrelated to the default `create-next-app` boilerplate at `/Users/orz_os/portfolio` — that project was not used or modified.

## Goals
- Showcase resume content: About, Skills, Projects, Experience, Education, Contact
- Simple MDX-based blog for project write-ups and notes

## Tech Stack
- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 (CSS-based config in `app/globals.css`, class-based dark mode via `next-themes`)
- `lucide-react` for icons; custom inline SVGs for GitHub/LinkedIn (`components/icons.tsx`) since lucide dropped brand icons
- Blog: MDX files in `content/posts/`, parsed with `gray-matter`, rendered with `next-mdx-remote/rsc`
- Deployment target: Vercel (not yet deployed)

## Planning Notes

### Current Plan
Initial build complete (single-page resume site + blog). See "Open Questions" for follow-ups.

### Decisions Log
- Built fresh in `My_Portfolio`; ignored the unused boilerplate at `/Users/orz_os/portfolio`
- Single-page layout with anchor-linked sections (Hero, About, Skills, Projects, Experience, Education, Contact) + separate `/blog` and `/blog/[slug]` routes
- Resume data lives in `lib/data.ts` as typed objects — edit this file to update content
- No backend contact form (kept scope tight); Contact section just links to email/LinkedIn/GitHub

### Open Questions
- About section bio (`lib/data.ts` → `about.paragraphs`) is a draft based on the resume — personalize as desired
- Project links in `lib/data.ts` point to `https://github.com/OsakaOK/<repo-name>` (PL-Predict, Snip, Sumly) — confirm these match the actual repo names/URLs
