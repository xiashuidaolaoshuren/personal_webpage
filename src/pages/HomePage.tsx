import { Hero } from "@/components/sections/Hero";
import { Bio } from "@/components/sections/Bio";
import { Education } from "@/components/sections/Education";
import { Projects } from "@/components/sections/Projects";

export function HomePage() {
  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <Hero />
      <div id="bio"><Bio /></div>
      <div id="education"><Education /></div>
      <div id="projects"><Projects /></div>
    </div>
  );
}
