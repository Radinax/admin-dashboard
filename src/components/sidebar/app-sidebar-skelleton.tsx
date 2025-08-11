// components/sidebar/SidebarSkeleton.tsx
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";

export function SidebarSkeleton() {
  return (
    <Sidebar collapsible="icon">
      {/* Header Skeleton */}
      <SidebarHeader className="p-4 border-b">
        <Skeleton className="h-8 w-32 rounded" /> {/* Logo placeholder */}
      </SidebarHeader>

      {/* Main Nav Skeleton */}
      <SidebarContent className="p-2">
        <SidebarMenu>
          {Array.from({ length: 5 }).map((_, i) => (
            <SidebarMenuItem key={i}>
              <Skeleton className="h-10 w-full rounded-md" />
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      {/* Footer/User Section Skeleton */}
      <SidebarFooter className="p-4">
        <div className="flex items-center gap-3">
          <Skeleton className="h-10 w-10 rounded-full" /> {/* Avatar */}
          <div className="flex flex-col gap-1.5 flex-1">
            <Skeleton className="h-4 w-20 rounded" /> {/* Name */}
            <Skeleton className="h-3 w-28 rounded" /> {/* Email */}
          </div>
          <Skeleton className="h-8 w-8 rounded-md" /> {/* Dropdown icon */}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
