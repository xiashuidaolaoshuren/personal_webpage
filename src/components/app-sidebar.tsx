import { Home, User, GraduationCap, FolderGit2, Mail, Linkedin, Github, Phone, Instagram } from "lucide-react"
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
import { Button } from "@/components/ui/button"

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

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/chun-ning-so-794375379",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/mouseman_0919",
    icon: Instagram,
  },
  {
    name: "GitHub",
    url: "https://github.com/xiashuidaolaoshuren",
    icon: Github,
  },
]

export function AppSidebar() {
  return (
    <Sidebar collapsible="none" className="shadow-lg fixed top-0 left-0 h-screen rounded- lg">
      <SidebarHeader>
        <div className="flex justify-center">
          <h2 className="text-lg font-semibold">Felix's Blog</h2>
        </div>
      </SidebarHeader>
      
      {/* Avatar Section */}
      <div className="flex justify-center py-4">
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-border shadow-md">
          <img 
            src="/images/avatar_placeholder.webp" 
            alt="Avatar" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="pl-[calc(0.5rem+1rem+0.5rem)]">Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url}>
                      <item.icon className="text-primary"/>
                      <span className="text-primary">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="pl-[calc(0.5rem+1rem+0.5rem)]">Contact Me</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="px-2 space-y-3">
              {/* Email as text */}
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4" />
                <span className="text-muted-foreground">1155192846@link.cuhk.edu.hk</span>
              </div>
              
              {/* Phone as text */}
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4" />
                <span className="text-muted-foreground">+852 66710279</span>
              </div>
              
              {/* Social buttons in a row */}
              <div className="flex gap-4 pt-2">
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    size="icon"
                    asChild
                  >
                    <a 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      title={social.name}
                    >
                      <social.icon className="w-4 h-4 text-white" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
      </SidebarFooter>
    </Sidebar>
  )
}
