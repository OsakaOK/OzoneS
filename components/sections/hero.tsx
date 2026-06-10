import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { personalInfo } from "@/lib/data";

export function Hero() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-start gap-5 px-6 py-24 sm:py-32">
      <p className="font-mono text-sm font-medium text-accent">Hi, my name is</p>
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        {personalInfo.name}
      </h1>
      <h2 className="text-xl font-semibold text-zinc-500 sm:text-2xl dark:text-zinc-400">
        {personalInfo.title}
      </h2>
      <p className="max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
        {personalInfo.tagline}
      </p>

      <div className="flex flex-wrap gap-4 pt-2">
        <Link
          href="/#projects"
          className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          View Projects
        </Link>
        <Link
          href="/#contact"
          className="flex items-center gap-2 rounded-full border border-zinc-200 px-5 py-2.5 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-900"
        >
          Get in Touch
          <ArrowRight className="size-4" />
        </Link>
      </div>

      <div className="flex items-center gap-4 pt-4 text-zinc-500 dark:text-zinc-400">
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
        >
          <GithubIcon className="size-5" />
        </a>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
        >
          <LinkedinIcon className="size-5" />
        </a>
        <a
          href={`mailto:${personalInfo.email}`}
          aria-label="Email"
          className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
        >
          <Mail className="size-5" />
        </a>
      </div>
    </section>
  );
}
