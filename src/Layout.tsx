import type { CSSProperties, ReactNode } from "react"
import { useLocation } from "react-router-dom"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { cn } from "@/lib/utils"

export default function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  const projectsAmbient = pathname.startsWith("/projects")
  const mobileTitle = pathname.startsWith("/projects") ? "Projects" : "About Me"

  return (
    <SidebarProvider
      defaultOpen={true}
      style={{ "--sidebar-width": "20rem" } as CSSProperties}
    >
      <AppSidebar />
      <SidebarInset
        className={cn(
          "relative isolate min-h-svh flex-1 overflow-x-hidden overflow-y-auto [scrollbar-gutter:stable]",
          "ambient-main-surface",
          projectsAmbient && "ambient-main-surface--projects"
        )}
      >
        <header className="sticky top-0 z-30 flex items-center gap-3 border-b border-border/60 bg-background/80 px-3 py-2 backdrop-blur-md md:hidden">
          <SidebarTrigger className="shrink-0" />
          <span className="truncate text-sm font-semibold text-foreground">{mobileTitle}</span>
        </header>
        <div
          className="ambient-motion-layer pointer-events-none absolute -right-[12%] -top-[8%] h-[min(45vh,380px)] w-[min(72vw,480px)] rounded-full bg-primary/10 blur-3xl"
          aria-hidden
        />
        <div className="relative z-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}
