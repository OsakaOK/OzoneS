import { Section } from "@/components/section";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <Section id="experience" index="04" title="Experience">
      <div className="space-y-8">
        {experience.map((item) => (
          <div
            key={`${item.role}-${item.company}`}
            className="relative border-l-2 border-zinc-200 pl-6 before:absolute before:-left-1.75 before:top-1.5 before:size-3 before:rounded-full before:border-2 before:border-accent before:bg-background before:transition-colors hover:border-accent/60 dark:border-zinc-800"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-display font-semibold">
                {item.role} · {item.company}
              </h3>
              <span className="text-sm text-zinc-500 dark:text-zinc-400">
                {item.period}
              </span>
            </div>
            <p className="text-sm text-zinc-500 dark:text-zinc-500">
              {item.location}
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-4 text-sm text-zinc-600 dark:text-zinc-400">
              {item.bullets.map((bullet) => (
                <li key={bullet.slice(0, 32)}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
