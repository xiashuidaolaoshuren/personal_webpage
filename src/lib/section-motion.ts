import { cn } from "@/lib/utils"

/** Base entrance animation for main content sections (slide only; avoids opacity-0 first frame) */
const enterBase =
  "animate-in slide-in-from-bottom-3 duration-700 motion-reduce:animate-none"

/**
 * @param delayClass Tailwind delay utility, e.g. "delay-75", "delay-150"
 */
export function sectionEnterClass(delayClass?: string) {
  return cn(enterBase, delayClass)
}
