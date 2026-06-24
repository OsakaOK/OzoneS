import { Mail } from "lucide-react";
import { Section } from "@/components/section";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { personalInfo } from "@/lib/data";

const contactLinks = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/osakakpv",
    href: personalInfo.linkedin,
    icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    value: "github.com/OsakaOK",
    href: personalInfo.github,
    icon: GithubIcon,
  },
];

export function Contact() {
  return (
    <Section id="contact" index="06" title="Get In Touch">
      <p className="max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
        I&apos;m currently looking for new opportunities. Whether you have a
        question or just want to say hi, my inbox is always open.
      </p>
      <div className="mt-6 flex flex-wrap gap-4">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent dark:border-zinc-800"
          >
            <link.icon className="size-4" />
            {link.value}
          </a>
        ))}
      </div>
    </Section>
  );
}
