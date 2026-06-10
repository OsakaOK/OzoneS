import { GraduationCap } from "lucide-react";
import { Section } from "@/components/section";
import { education } from "@/lib/data";

export function Education() {
  return (
    <Section id="education" title="Education" className="bg-zinc-50 dark:bg-zinc-900/40">
      <div className="space-y-4">
        {education.map((item) => (
          <div
            key={item.school}
            className="flex items-start gap-4 rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
          >
            <GraduationCap className="mt-1 size-6 shrink-0 text-accent" />
            <div>
              <h3 className="font-semibold">{item.school}</h3>
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
