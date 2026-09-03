import { cn, pageContentShellClassName } from "@/lib/utils"

const SITE_SINCE = 2025
const SITE_LOCATION = "Hong Kong SAR · Shenzhen"

export function SiteFooter() {
  return (
    <footer className="relative z-0 shrink-0 border-t border-border/60 py-5">
      <div
        className={cn(
          pageContentShellClassName,
          "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
        )}
      >
        <p className="text-xs text-muted-foreground">
          {SITE_SINCE} — Present · v{__APP_VERSION__}
        </p>
        <div className="flex items-center gap-3">
          <img
            src="/vite.svg"
            alt=""
            aria-hidden
            className="size-6 shrink-0"
          />
          <div className="min-w-0">
            <p className="text-sm font-semibold leading-tight text-foreground">
              Felix So
            </p>
            <p className="text-xs text-muted-foreground">{SITE_LOCATION}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
