# My_Portfolio

## Overview
Personal portfolio site for Osaka Khamphavong (CS grad, Wilfrid Laurier University), branded **OZONES**. Showcases background, skills, projects, and experience from his resume, plus a simple blog.

- **Live:** https://ozones.one (custom domain via Porkbun; also at ozone-s.vercel.app)
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
- **Deployed to Vercel** at https://ozones.one — auto-deploys on every push to `main`

## Design System (Penguin brand)
- Single accent color (icy-teal) drives links, tags, hovers, and the hero gradient/glow
- Numbered section headers (`01 — About`) rendered by `components/section.tsx`
- Scroll-reveal via `components/reveal.tsx` (IntersectionObserver; respects `prefers-reduced-motion`, with a `<noscript>` fallback in `layout.tsx`)
- Hover-lift cards (Projects, Education, Blog) and a staggered hero entrance
- **Penguin mascot** (`components/penguin*.tsx`) walks across the bottom as you scroll the home page; hidden on `/blog` routes; show/hide toggle in the navbar; the penguin doubles as the navbar logo glyph beside the OZONES wordmark

## Planning Notes

### Current Plan
Built, rebranded as OZONES, and deployed to Vercel. See "Open Questions" for follow-ups.

### Quick-Browse Redesign Plan (IMPLEMENTED)
Goal: site is being added to an Instagram bio, so the primary audience is now casual mobile visitors skimming for a few seconds, not just recruiters. Redesign optimizes for quick glance / quick browsing while still serving recruiters and peers who click deeper.

**Status:** Built. Homepage (`app/page.tsx`) is now `Hero → ProjectsTeaser → QuickFacts → Contact`. New `components/sections/projects-teaser.tsx` (condensed cards linking to `/projects`) and `components/sections/quick-facts.tsx` (Skills/Experience/Education in 3 columns). New `app/projects/page.tsx` with full write-ups, mapping over `projects` (scales past 2). Nav simplified to Projects · Blog · Contact. Instagram added to hero socials + Contact (`InstagramIcon` in `components/icons.tsx`, `personalInfo.instagram` in `lib/data.ts`). Old single-purpose section files (about/skills/projects/experience/education.tsx) deleted. Hero kept as the polished personal intro (CTA now → `/projects`) rather than a project-led visual, since there are no real screenshots yet.

**Remaining TODO:** set the real Instagram URL (`personalInfo.instagram` is a placeholder `https://www.instagram.com/`).

**New homepage flow** (`app/page.tsx`): Hero(project-led + short bio) → Projects teaser (condensed, both projects, no separate full About/Projects sections) → Quick Facts (single merged section, 3 columns: Skills / Experience / Education, all condensed, stacks on mobile) → Contact

- **Hero**: leads with the strongest project (FamFunds) full visual treatment, not a text bio first. A short bio line is folded directly into the hero (no standalone About section). CTA links to the new `/projects` page.
- **Projects teaser**: condensed strip showing both current projects (FamFunds, PL Predict) as compact cards, kept mid-page as a second touchpoint (not removed).
- **Quick Facts section**: merges Skills + Experience + Education into one section, three columns on desktop stacking vertically on mobile — no tabs (tabs add an extra tap, against the quick-browse goal). Each column condensed (tags for skills, short lines for experience/education) — full depth lives on resume/LinkedIn instead.
- **Contact**: keep existing email/LinkedIn/GitHub icon links, add an Instagram icon link (closes the loop since traffic originates from Instagram). No CTA copy line added.
- **Blog**: stays in nav as-is, not featured on homepage — only one placeholder post (`welcome-to-my-blog.mdx`) exists currently; revisit featuring once there's real content.

**New `/projects` page**: dedicated route, separate from the homepage teaser. Must be built to scale beyond 2 cards since more practical projects are planned soon — don't hardcode for exactly 2. Each project gets a richer write-up than the teaser: problem/motivation, tech stack, role, challenges, live demo + repo links. Ships with placeholder visuals (no real screenshots yet); swap in real images later.

**Nav** (`components/layout/navbar.tsx`): drop `/#about` (folded into hero) and `/#projects` (section removed in favor of teaser + dedicated page) anchors; add a `/projects` link pointing at the new page. Blog link stays.

**Explicitly deferred to a later pass**: blog featuring on homepage, real project screenshots, additional visual/motion polish (current penguin/scroll-reveal stays as-is for now).

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
