import type { VariantProps } from "class-variance-authority";

import { badgeVariants } from "@/components/ui/badge";
import type { ProjectStatus } from "@/data/projects";

export type ProjectStatusBadgeVariant = NonNullable<
  VariantProps<typeof badgeVariants>["variant"]
>;

export function statusBadgeVariant(
  status: ProjectStatus,
): ProjectStatusBadgeVariant {
  switch (status) {
    case "Completed":
      return "default";
    case "Maintainance":
      return "maintainance";
    case "In Progress":
      return "secondary";
  }
}
