import { Hero } from "@/components/sections/hero";
import { ProjectsTeaser } from "@/components/sections/projects-teaser";
import { QuickFacts } from "@/components/sections/quick-facts";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsTeaser />
      <QuickFacts />
      <Contact />
    </>
  );
}
