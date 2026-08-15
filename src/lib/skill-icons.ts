import type { IconType } from "@icons-pack/react-simple-icons"
import {
  SiAndroid,
  SiC,
  SiCplusplus,
  SiCss,
  SiCursor,
  SiDocker,
  SiFigma,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiKotlin,
  SiLangchain,
  SiLanggraph,
  SiNodedotjs,
  SiNumpy,
  SiOpenjdk,
  SiPandas,
  SiPython,
  SiPytorch,
  SiReact,
  SiScikitlearn,
  SiShadcnui,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from "@icons-pack/react-simple-icons"
import {
  BookOpen,
  Brain,
  ChartColumn,
  Clock,
  Database,
  FileSpreadsheet,
  Puzzle,
  ShieldCheck,
  Shuffle,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react"

export type SkillIconDescriptor =
  | {
      kind: "brand"
      Icon: IconType
      color: string
      useCurrentColor?: boolean
    }
  | {
      kind: "lucide"
      Icon: LucideIcon
    }

const brand = (
  Icon: IconType,
  color: string,
  useCurrentColor = false,
): SkillIconDescriptor => ({
  kind: "brand",
  Icon,
  color,
  useCurrentColor,
})

const lucide = (Icon: LucideIcon): SkillIconDescriptor => ({
  kind: "lucide",
  Icon,
})

export const skillIcons: Record<string, SkillIconDescriptor> = {
  Python: brand(SiPython, "#3776AB"),
  TypeScript: brand(SiTypescript, "#3178C6"),
  JavaScript: brand(SiJavascript, "#F7DF1E"),
  C: brand(SiC, "#A8B9CC"),
  "C++": brand(SiCplusplus, "#00599C"),
  SQL: lucide(Database),
  HTML: brand(SiHtml5, "#E34F26"),
  CSS: brand(SiCss, "#663399"),
  Android: brand(SiAndroid, "#3DDC84"),
  Kotlin: brand(SiKotlin, "#7F52FF"),
  Java: brand(SiOpenjdk, "#437291"),
  React: brand(SiReact, "#61DAFB"),
  "Node.js": brand(SiNodedotjs, "#5FA04E"),
  "Tailwind CSS": brand(SiTailwindcss, "#06B6D4"),
  "Shadcn/ui": brand(SiShadcnui, "#000000", true),
  Figma: brand(SiFigma, "#F24E1E"),
  Tableau: lucide(ChartColumn),
  "Microsoft Office": lucide(FileSpreadsheet),
  Git: brand(SiGit, "#F05032"),
  Docker: brand(SiDocker, "#2496ED"),
  PyTorch: brand(SiPytorch, "#EE4C2C"),
  Pandas: brand(SiPandas, "#150458"),
  NumPy: brand(SiNumpy, "#013243"),
  "Scikit-learn": brand(SiScikitlearn, "#F7931E"),
  Cursor: brand(SiCursor, "#000000", true),
  LangChain: brand(SiLangchain, "#1C3C3C"),
  LangGraph: brand(SiLanggraph, "#1C3C3C"),
  "Spring Boot": brand(SiSpringboot, "#6DB33F"),
  "Problem Solving": lucide(Puzzle),
  "Team Collaboration": lucide(Users),
  Responsibility: lucide(ShieldCheck),
  Adaptability: lucide(Shuffle),
  "Time Management": lucide(Clock),
  "Eager to Learn": lucide(BookOpen),
  "Fast Learner": lucide(Zap),
  "Critical Thinking": lucide(Brain),
}

export function getSkillIcon(name: string): SkillIconDescriptor | undefined {
  return skillIcons[name]
}
