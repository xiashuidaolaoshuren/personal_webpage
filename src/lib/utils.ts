import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Shared horizontal shell for main column content and the site footer. */
export const pageContentShellClassName =
  "mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20"
