import { Hero } from "@/components/sections/Hero";
import { Bio } from "@/components/sections/Bio";
import { Education } from "@/components/sections/Education";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export function HomePage() {
  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <Hero />
      <Bio />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}
