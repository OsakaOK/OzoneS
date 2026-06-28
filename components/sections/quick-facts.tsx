import { Section } from "@/components/section";
import { skills, experience, education } from "@/lib/data";

export function QuickFacts() {
  return (
    <Section id="about" index="02" title="Quick Facts">
      <div className="grid gap-10 md:grid-cols-3">
        {/* Skills */}
        <div>
          <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
            Skills
          </h3>
          <div className="mt-4 space-y-4">
            {skills.map((group) => (
              <div key={group.category}>
                <p className="text-xs font-medium text-zinc-500 dark:text-zinc-500">
                  {group.category}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-zinc-200 px-2.5 py-0.5 text-xs text-zinc-700 dark:border-zinc-800 dark:text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
            Experience
          </h3>
          <ul className="mt-4 space-y-4">
            {experience.map((item) => (
              <li key={`${item.role}-${item.company}`}>
                <p className="font-display text-sm font-semibold">
                  {item.role}
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {item.company}
                </p>
                <p className="font-mono text-xs text-zinc-500 dark:text-zinc-500">
                  {item.period}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Education */}
        <div>
          <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
            Education
          </h3>
          <ul className="mt-4 space-y-4">
            {education.map((item) => (
              <li key={item.school}>
                <p className="font-display text-sm font-semibold">
                  {item.school}
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {item.degree}
                </p>
                <p className="font-mono text-xs text-zinc-500 dark:text-zinc-500">
                  {item.location}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
