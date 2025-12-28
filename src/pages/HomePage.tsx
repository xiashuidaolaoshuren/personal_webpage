import { Hero } from "@/components/sections/Hero";
import { Bio } from "@/components/sections/Bio";
import { Education } from "@/components/sections/Education";

export function HomePage() {
  return (
    <div className="container mx-auto px-4 max-w-4xl">
      <Hero />
      <div id="bio"><Bio /></div>
      <div id="education"><Education /></div>
    </div>
  );
}
