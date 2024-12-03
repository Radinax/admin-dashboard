import { Home, Inbox, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavUser } from "@/components/sidebar/app-sidebar-nav-user";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/app",
    icon: Home,
  },
  {
    title: "Products",
    url: "/app/products",
    icon: Inbox,
  },
  {
    title: "Profile",
    url: "#",
    icon: Settings,
  },
];

type ProfileProps = {
  picture?: string;
  name: string;
  email?: string;
};

type SidebarProps = {
  profile: ProfileProps;
};

export function AppSidebar({ profile }: SidebarProps) {
  const user = {
    name: profile.name,
    email: profile.email,
    avatar: profile.name,
  };
  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="scroll-m-0">
        <SidebarGroup className="flex justify-between h-full my-4">
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          <SidebarFooter className="border-t border-sidebar-border">
            <NavUser user={user} />
          </SidebarFooter>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
