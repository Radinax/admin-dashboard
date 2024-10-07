import { useCurrentUser } from "@/api/auth";
import Sidebar from "@/components/sidebar/sidebar";
import { Outlet } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Profile", path: "/profile" },
];

export function DashboardLayout() {
  const currentUser = useCurrentUser();
  const profile = {
    name: currentUser?.username || "",
  };
  return (
    <div className="flex">
      <Sidebar profile={profile} links={links} />
      <div className="p-24">
        <Outlet />
      </div>
    </div>
  );
}
