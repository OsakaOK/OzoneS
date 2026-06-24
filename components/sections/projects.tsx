import { ExternalLink } from "lucide-react";
import { Section } from "@/components/section";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <Section
      id="projects"
      index="03"
      title="Projects"
      className="bg-zinc-50 dark:bg-zinc-900/40"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.name}
            className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 dark:border-zinc-800 dark:bg-zinc-950"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-display text-lg font-semibold transition-colors group-hover:text-accent">
                {project.name}
              </h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} on GitHub`}
                className="text-zinc-400 transition-colors hover:text-accent dark:hover:text-accent"
              >
                <ExternalLink className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {project.description}
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-4 text-sm text-zinc-600 dark:text-zinc-400">
              {project.bullets.map((bullet) => (
                <li key={bullet.slice(0, 32)}>{bullet}</li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-accent/10 px-2.5 py-1 font-mono text-xs font-medium text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
