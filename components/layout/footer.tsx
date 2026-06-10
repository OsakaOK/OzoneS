import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { personalInfo } from "@/lib/data";

const links = [
  { label: "GitHub", href: personalInfo.github, icon: GithubIcon },
  { label: "LinkedIn", href: personalInfo.linkedin, icon: LinkedinIcon },
  { label: "Email", href: `mailto:${personalInfo.email}`, icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:justify-between dark:text-zinc-400">
        <p>
          &copy; {new Date().getFullYear()} {personalInfo.name}
        </p>
        <div className="flex items-center gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={link.label}
              className="transition-colors hover:text-zinc-950 dark:hover:text-zinc-50"
            >
              <link.icon className="size-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
