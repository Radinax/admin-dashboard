import Sidebar from "@/components/sidebar/sidebar";
import { Outlet } from "react-router-dom";

export function DashboardLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-24">
        <Outlet />
      </div>
    </div>
  );
}
