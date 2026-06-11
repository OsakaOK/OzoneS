import type { SVGProps } from "react";

export function Penguin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" {...props}>
      <ellipse cx="24" cy="60" rx="8" ry="3" className="fill-amber-500" />
      <ellipse cx="40" cy="60" rx="8" ry="3" className="fill-amber-500" />
      <ellipse
        cx="13"
        cy="38"
        rx="5"
        ry="14"
        transform="rotate(-20 13 38)"
        className="fill-zinc-900 dark:fill-zinc-100"
      />
      <ellipse
        cx="51"
        cy="38"
        rx="5"
        ry="14"
        transform="rotate(20 51 38)"
        className="fill-zinc-900 dark:fill-zinc-100"
      />
      <ellipse cx="32" cy="38" rx="20" ry="24" className="fill-zinc-900 dark:fill-zinc-100" />
      <ellipse cx="32" cy="42" rx="13" ry="18" className="fill-white dark:fill-zinc-900" />
      <circle cx="32" cy="16" r="14" className="fill-zinc-900 dark:fill-zinc-100" />
      <ellipse cx="32" cy="19" rx="9" ry="8" className="fill-white dark:fill-zinc-900" />
      <circle cx="28" cy="16" r="1.6" className="fill-zinc-900 dark:fill-zinc-100" />
      <circle cx="36" cy="16" r="1.6" className="fill-zinc-900 dark:fill-zinc-100" />
      <path d="M29 20 L35 20 L32 25 Z" className="fill-amber-500" />
    </svg>
  );
}
