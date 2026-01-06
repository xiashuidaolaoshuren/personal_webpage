import type { ProjectItem } from "./ProjectCard";
import { ProjectCard } from "./ProjectCard";

const projects: ProjectItem[] = [
  {
    title: "Personal Portfolio",
    status: "In Progress",
    description: "A personal webpage built with React, Vite, and Tailwind CSS to showcase my skills and projects.",
    repoUrl: "https://github.com/xiashuidaolaoshuren/personal_webpage",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    image: "https://placehold.co/600x400/png?text=Portfolio",
  },
  {
    title: "Project Alpha",
    status: "Completed",
    description: "An innovative solution for automating daily tasks using Python scripts.",
    repoUrl: "https://github.com/xiashuidaolaoshuren/project-alpha", // Placeholder
    techStack: ["Python", "Automation", "Scripting"],
    image: "https://placehold.co/600x400/png?text=Project+Alpha",
  },
  {
    title: "Task Master",
    status: "Maintainance",
    description: "A task management application featuring drag-and-drop functionality.",
    repoUrl: "https://github.com/xiashuidaolaoshuren/task-master", // Placeholder
    techStack: ["React", "Redux", "Node.js"],
    image: "https://placehold.co/600x400/png?text=Task+Master",
  },
];

export function Projects() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="flex flex-col gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
