"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { PenguinToggle } from "@/components/penguin-toggle";
import { Penguin } from "@/components/penguin";

const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="group flex items-center gap-2 font-display text-lg font-bold tracking-tight"
        >
          <Penguin className="size-6 transition-transform group-hover:-rotate-12" />
          OZONES
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-accent dark:text-zinc-400 dark:hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
          <PenguinToggle />
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <PenguinToggle />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex size-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 dark:border-zinc-800 dark:text-zinc-400"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-zinc-200 px-6 py-4 md:hidden dark:border-zinc-800">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-zinc-600 transition-colors hover:text-accent dark:text-zinc-400 dark:hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
