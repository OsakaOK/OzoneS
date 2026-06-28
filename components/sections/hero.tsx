import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/icons";
import { personalInfo } from "@/lib/data";

export function Hero() {
  return (
    <section className="hero-glow relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 text-zinc-300/40 dot-grid mask-[radial-gradient(40rem_30rem_at_20%_0%,black,transparent)] dark:text-zinc-700/30"
      />
      <div className="hero-rise relative mx-auto flex max-w-5xl flex-col items-start gap-5 px-6 py-24 sm:py-32">
        <p
          style={{ "--i": 0 } as CSSProperties}
          className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-sm font-medium text-accent"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-accent" />
          </span>
          Hi, my name is
        </p>
        <h1
          style={{ "--i": 1 } as CSSProperties}
          className="font-display text-4xl font-bold tracking-tight sm:text-6xl"
        >
          {personalInfo.name.split(" ")[0]}{" "}
          <span className="bg-linear-to-r from-accent to-accent-bright bg-clip-text text-transparent">
            {personalInfo.name.split(" ").slice(1).join(" ")}
          </span>
        </h1>
        <p
          style={{ "--i": 3 } as CSSProperties}
          className="max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400"
        >
          {personalInfo.tagline}
        </p>

        <div
          style={{ "--i": 4 } as CSSProperties}
          className="flex flex-wrap gap-4 pt-2"
        >
          <Link
            href="/projects"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-accent/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30"
          >
            View Projects
          </Link>
          <Link
            href="/#contact"
            className="group flex items-center gap-2 rounded-full border border-zinc-200 px-5 py-2.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent dark:border-zinc-800"
          >
            Get in Touch
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div
          style={{ "--i": 5 } as CSSProperties}
          className="flex items-center gap-4 pt-4 text-zinc-500 dark:text-zinc-400"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-all hover:-translate-y-0.5 hover:text-accent"
          >
            <GithubIcon className="size-5" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-all hover:-translate-y-0.5 hover:text-accent"
          >
            <LinkedinIcon className="size-5" />
          </a>
          <a
            href={personalInfo.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-all hover:-translate-y-0.5 hover:text-accent"
          >
            <InstagramIcon className="size-5" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
            className="transition-all hover:-translate-y-0.5 hover:text-accent"
          >
            <Mail className="size-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
