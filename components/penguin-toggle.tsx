"use client";

import { Eye, EyeOff } from "lucide-react";
import { usePathname } from "next/navigation";

export function PenguinToggle() {
  const pathname = usePathname();

  if (pathname?.startsWith("/blog")) return null;

  const handleClick = () => {
    const hidden = document.documentElement.classList.toggle("penguin-hidden");
    localStorage.setItem("penguin-hidden", String(hidden));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Toggle penguin mascot"
      className="flex size-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
    >
      <Eye className="size-4 penguin-hidden:hidden" />
      <EyeOff className="hidden size-4 penguin-hidden:block" />
    </button>
  );
}
