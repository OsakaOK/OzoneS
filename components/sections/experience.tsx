import { Section } from "@/components/section";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-8">
        {experience.map((item) => (
          <div
            key={`${item.role}-${item.company}`}
            className="border-l-2 border-zinc-200 pl-6 dark:border-zinc-800"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-semibold">
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
