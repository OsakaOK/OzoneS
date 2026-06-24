import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

export function Section({
  id,
  title,
  index,
  children,
  className = "",
}: {
  id: string;
  title: string;
  index?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-20 py-16 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="flex items-center gap-3">
            {index && (
              <span className="font-mono text-sm font-medium text-accent">
                {index}
              </span>
            )}
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              {title}
            </h2>
            <span
              aria-hidden="true"
              className="h-px flex-1 bg-linear-to-r from-accent/40 to-transparent"
            />
          </div>
        </Reveal>
        <Reveal className="mt-8">{children}</Reveal>
      </div>
    </section>
  );
}
