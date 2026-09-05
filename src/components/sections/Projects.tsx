import { sectionEnterClass } from "@/lib/section-motion"
import { PROJECTS } from "@/data/projects"
import { groupProjectsByCategory } from "@/lib/project-categories"
import { cn } from "@/lib/utils"
import { ProjectCard } from "./ProjectCard"

export function Projects() {
  const groups = groupProjectsByCategory(PROJECTS)

  return (
    <section className={cn("py-12", sectionEnterClass("delay-100"))}>
      <div className="section-projects-frame px-4 py-8 sm:px-6 sm:py-10">
        <p className="section-eyebrow mb-2 text-left sm:pl-0.5">Portfolio</p>
        <div className="section-divider-gradient section-divider-gradient--start mb-8" aria-hidden />
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="flex flex-col gap-10">
          {groups.map(({ category, projects }) => (
            <section key={category.id} aria-labelledby={`projects-${category.id}`}>
              <h3
                id={`projects-${category.id}`}
                className="text-xl font-semibold tracking-tight"
              >
                {category.label}
              </h3>
              <div
                className="section-divider-gradient section-divider-gradient--start mb-6 mt-3"
                aria-hidden
              />
              <div className="flex flex-col gap-6">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  )
}
