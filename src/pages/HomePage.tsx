import { Hero } from "@/components/sections/Hero";
import { Bio } from "@/components/sections/Bio";
import { Education } from "@/components/sections/Education";
import {Job_experience} from "@/components/sections/Job_experience";
import { Skills } from "@/components/sections/Skills";
import { pageContentShellClassName } from "@/lib/utils";

export function HomePage() {
  return (
    <div className={pageContentShellClassName}>
      <Hero />
      <div id="bio"><Bio /></div>
      <div id="education"><Education /></div>
      <div id="job_experience"><Job_experience /></div>
      <div id="skills"><Skills /></div>
    </div>
  );
}
