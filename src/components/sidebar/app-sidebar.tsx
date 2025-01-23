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

type MenuItem = {
  title: string;
  url: string;
  icon: React.ComponentType;
};

const menuItems: MenuItem[] = [
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
    avatar: profile.picture || profile.name,
  };

  return (
    <Sidebar collapsible="icon" className="bg-gray-900 text-white">
      <SidebarContent className="scroll-m-0">
        <SidebarGroup className="flex flex-col justify-between h-full my-4">
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="flex items-center gap-3 p-3 hover:bg-gray-800 rounded-md transition-colors duration-200"
                    >
                      <item.icon />
                      <span className="text-gray-100">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          <SidebarFooter className="border-t border-gray-800 pt-4">
            <NavUser user={user} />
          </SidebarFooter>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
