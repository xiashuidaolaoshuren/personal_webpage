import type { ProjectItem } from "@/data/projects";

export type ProjectCategory =
  | "llm-agents"
  | "computer-vision"
  | "audio-music"
  | "full-stack";

export interface ProjectCategoryDefinition {
  id: ProjectCategory;
  label: string;
}

/** Canonical display order for domain groups on `/projects`. */
export const PROJECT_CATEGORIES: ProjectCategoryDefinition[] = [
  { id: "llm-agents", label: "LLM & Agents" },
  { id: "computer-vision", label: "Computer Vision" },
  { id: "audio-music", label: "Audio / Music" },
  { id: "full-stack", label: "Full-stack & Web" },
];

export function projectCategoryLabel(category: ProjectCategory): string {
  return (
    PROJECT_CATEGORIES.find((entry) => entry.id === category)?.label ?? category
  );
}

export interface ProjectCategoryGroup {
  category: ProjectCategoryDefinition;
  projects: ProjectItem[];
}

/** Groups projects by domain in catalog order; omits empty categories. */
export function groupProjectsByCategory(
  projects: ProjectItem[],
): ProjectCategoryGroup[] {
  return PROJECT_CATEGORIES.map((category) => ({
    category,
    projects: projects.filter((project) => project.category === category.id),
  })).filter((group) => group.projects.length > 0);
}
