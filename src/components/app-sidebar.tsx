import { Home, User, GraduationCap, FolderGit2, Mail, Linkedin, Github } from "lucide-react"
import { Link } from "react-router-dom"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "About Me",
    url: "/",
    icon: Home,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: FolderGit2,
  },
]

const contactItems = [
  {
    title: "Email",
    url: "mailto:your.email@example.com",
    icon: Mail,
  },
  {
    title: "LinkedIn",
    url: "https://linkedin.com/in/yourprofile",
    icon: Linkedin,
  },
  {
    title: "GitHub",
    url: "https://github.com/yourusername",
    icon: Github,
  },
]

export function AppSidebar() {
  return (
    <Sidebar collapsible="none">
      <SidebarHeader>
        <div className="px-4 py-2">
          <h2 className="text-lg font-semibold">My Portfolio</h2>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="pl-[calc(0.5rem+1rem+0.5rem)]">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarGroup>
          <SidebarGroupLabel className="pl-[calc(0.5rem+1rem+0.5rem)]">Contact Me</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {contactItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  )
}
