import { GraduationCap } from "lucide-react";
import { Section } from "@/components/section";
import { education } from "@/lib/data";

export function Education() {
  return (
    <Section
      id="education"
      index="05"
      title="Education"
      className="bg-zinc-50 dark:bg-zinc-900/40"
    >
      <div className="space-y-4">
        {education.map((item) => (
          <div
            key={item.school}
            className="group flex items-start gap-4 rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 dark:border-zinc-800 dark:bg-zinc-950"
          >
            <span className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <GraduationCap className="size-5" />
            </span>
            <div>
              <h3 className="font-display font-semibold">{item.school}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {item.degree}
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-500">
                {item.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
