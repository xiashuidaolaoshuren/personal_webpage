import { Projects } from "@/components/sections/Projects";
import { pageContentShellClassName } from "@/lib/utils";

export function ProjectsPage() {
  return (
    <div className={pageContentShellClassName}>
      <Projects />
    </div>
  );
}
