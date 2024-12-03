import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useCurrentUser } from "@/features/auth/api";
import { Outlet } from "react-router-dom";

export function DashboardLayout() {
  const currentUser = useCurrentUser();
  const profile = {
    name: currentUser?.username || "",
    email: currentUser?.email,
  };
  return (
    <div className="flex">
      <SidebarProvider>
        <AppSidebar profile={profile} />
        <div className="w-full">
          <SidebarTrigger />
          <div className="p-6">
            <Outlet />
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
}
