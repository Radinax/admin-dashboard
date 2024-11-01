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
import { Avatar } from "@radix-ui/react-avatar";

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
};

type SidebarProps = {
  profile: ProfileProps;
};

export function AppSidebar({ profile }: SidebarProps) {
  return (
    <Sidebar>
      <SidebarContent>
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
          <SidebarFooter>
            <div className="flex gap-1 items-center">
              <Avatar className="bg-sky-600 text-white font-semibold p-2 rounded-full">
                {profile.name.slice(0, 2).toUpperCase()}
              </Avatar>
              <div>{profile.name}</div>
            </div>
          </SidebarFooter>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
