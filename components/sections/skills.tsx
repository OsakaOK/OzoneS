import { Section } from "@/components/section";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <Section id="skills" index="02" title="Skills">
      <div className="grid gap-8 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              {group.category}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-700 transition-colors hover:border-accent hover:text-accent dark:border-zinc-800 dark:text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
