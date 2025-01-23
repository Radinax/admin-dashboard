import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useCurrentUser } from "@/features/auth/api";
import { Outlet } from "react-router-dom";
import { CustomTrigger } from "@/components/sidebar/app-sidebar-trigger";

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
          <CustomTrigger />
          <div className="p-6">
            <Outlet />
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
}
