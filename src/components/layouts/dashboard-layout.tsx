import { useCurrentUser } from "@/api/auth";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

export function DashboardLayout() {
  const currentUser = useCurrentUser();
  const profile = {
    name: currentUser?.username || "",
  };
  return (
    <div className="flex">
      <SidebarProvider>
        <AppSidebar profile={profile} />
        <div className="p-24 w-full">
          <SidebarTrigger />
          <Outlet />
        </div>
      </SidebarProvider>
    </div>
  );
}
