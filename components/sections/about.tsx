import { Section } from "@/components/section";
import { about } from "@/lib/data";

export function About() {
  return (
    <Section id="about" title="About Me" className="bg-zinc-50 dark:bg-zinc-900/40">
      <div className="max-w-2xl space-y-4 text-zinc-600 dark:text-zinc-400">
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
