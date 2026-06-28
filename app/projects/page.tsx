import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects — Osaka Khamphavong",
  description:
    "Projects by Osaka Khamphavong — full-stack apps and data-driven tools.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <Reveal>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-500 transition-colors hover:text-accent dark:text-zinc-400"
        >
          <ArrowLeft className="size-4" />
          Back home
        </Link>
      </Reveal>

      <Reveal className="mt-6">
        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Projects
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          A closer look at what I&apos;ve been building — the problem, the stack,
          and how it works.
        </p>
      </Reveal>

      <div className="mt-12 space-y-8">
        {projects.map((project) => (
          <Reveal key={project.name}>
            <article className="rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 sm:p-8 dark:border-zinc-800 dark:bg-zinc-950">
              <div className="flex items-start justify-between gap-4">
                <h2 className="font-display text-xl font-semibold sm:text-2xl">
                  {project.name}
                </h2>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-zinc-200 px-3 py-1.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent dark:border-zinc-800"
                >
                  Code
                  <ExternalLink className="size-4" />
                </a>
              </div>

              <p className="mt-3 text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>

              <ul className="mt-5 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {project.bullets.map((bullet) => (
                  <li key={bullet.slice(0, 32)}>{bullet}</li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-zinc-100 pt-5 dark:border-zinc-800/60">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent/10 px-2.5 py-1 font-mono text-xs font-medium text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
