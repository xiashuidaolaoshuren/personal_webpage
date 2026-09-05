import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { CV_VARIANTS } from "@/lib/cv-variants"
import { cn } from "@/lib/utils"

const downloadCvButtonClassName =
  "justify-center gap-2 border-primary/25 bg-primary/10 text-primary shadow-sm hover:border-primary/40 hover:bg-primary/20 hover:text-primary focus-visible:ring-2 focus-visible:ring-ring"

interface DownloadCvButtonProps {
  className?: string
}

export function DownloadCvButton({ className }: DownloadCvButtonProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          variant="outline"
          className={cn(downloadCvButtonClassName, className)}
        >
          <Download className="size-5 shrink-0" aria-hidden />
          Download CV
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-72">
        {CV_VARIANTS.map((variant) => (
          <DropdownMenuItem key={variant.href} asChild>
            <a href={variant.href} download={variant.download}>
              {variant.label}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
