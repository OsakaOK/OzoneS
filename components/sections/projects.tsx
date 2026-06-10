import { ExternalLink } from "lucide-react";
import { Section } from "@/components/section";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <Section id="projects" title="Projects" className="bg-zinc-50 dark:bg-zinc-900/40">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.name}
            className="flex flex-col rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} on GitHub`}
                className="text-zinc-400 transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
              >
                <ExternalLink className="size-5" />
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
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400"
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
