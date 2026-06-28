import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Section } from "@/components/section";
import { projects } from "@/lib/data";

export function ProjectsTeaser() {
  return (
    <Section
      id="projects"
      index="01"
      title="Projects"
      className="bg-zinc-50 dark:bg-zinc-900/40"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.name}
            href="/projects"
            className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 dark:border-zinc-800 dark:bg-zinc-950"
          >
            <h3 className="font-display text-lg font-semibold transition-colors group-hover:text-accent">
              {project.name}
            </h3>
            <p className="mt-2 flex-1 text-sm text-zinc-600 dark:text-zinc-400">
              {project.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-accent/10 px-2.5 py-1 font-mono text-xs font-medium text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
              Read more
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>

      <Link
        href="/projects"
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-zinc-200 px-5 py-2.5 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent dark:border-zinc-800"
      >
        View all projects
        <ExternalLink className="size-4" />
      </Link>
    </Section>
  );
}
