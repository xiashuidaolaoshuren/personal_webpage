import { Badge } from "@/components/ui/badge"
import { getSkillIcon } from "@/lib/skill-icons"
import { cn } from "@/lib/utils"

interface SkillBadgeProps {
  name: string
  className?: string
}

export function SkillBadge({ name, className }: SkillBadgeProps) {
  const icon = getSkillIcon(name)

  return (
    <Badge
      variant="secondary"
      className={cn(
        "gap-1.5 border-primary/20 bg-primary/10 py-1 px-3 text-sm font-medium text-primary hover:bg-primary/15",
        className,
      )}
    >
      {icon ? (
        icon.kind === "brand" ? (
          <icon.Icon
            aria-hidden="true"
            color={icon.useCurrentColor ? "currentColor" : icon.color}
            size={14}
          />
        ) : (
          <icon.Icon aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
        )
      ) : null}
      {name}
    </Badge>
  )
}
