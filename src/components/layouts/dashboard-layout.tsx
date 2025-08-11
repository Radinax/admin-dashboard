import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import { CustomTrigger } from "@/components/sidebar/app-sidebar-trigger";
import { Skeleton } from "@/components/ui/skeleton";
import { useMemo } from "react";
import { useAuth } from "@/providers/auth.provider";

export function DashboardLayout() {
  const { currentUser, isLoading, isAuthenticated } = useAuth();

  // While loading, show skeleton
  if (isLoading) {
    return (
      <div className="flex">
        <SidebarProvider>
          <div className="w-64 p-4">
            <Skeleton className="h-10 w-32 mb-4" /> {/* Logo */}
            <Skeleton className="h-12 w-full rounded-lg" /> {/* User */}
            <Skeleton className="h-10 w-full mt-4" /> {/* Nav item */}
            <Skeleton className="h-10 w-full mt-2" />
          </div>
          <div className="flex-1 p-6">
            <Skeleton className="h-8 w-1/4 mb-4" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </SidebarProvider>
      </div>
    );
  }

  // If not authenticated and not loading, redirect (fallback)
  if (!isAuthenticated || !currentUser) {
    return null;
  }

  // Safe to render
  const profile = useMemo(() => {
    return {
      name: currentUser.username || currentUser.email?.split("@")[0] || "User",
      email: currentUser.email || "",
      avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(
        currentUser.username || currentUser.email || "User"
      )}`,
    };
  }, [currentUser]);

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
