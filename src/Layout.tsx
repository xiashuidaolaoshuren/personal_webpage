import * as React from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen={true} style={{ "--sidebar-width": "20rem" } as React.CSSProperties}>
      <AppSidebar />
      <main className="flex-1 relative overflow-auto ml-[var(--sidebar-width)]">
        {children}
      </main>
    </SidebarProvider>
  )
}
