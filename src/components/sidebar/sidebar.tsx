import { Link } from "react-router-dom"; // Use next/link if you're using Next.js

type ProfileProps = {
  picture?: string;
  name: string;
};

type SidebarLinkProps = {
  name: string;
  path: string;
};

type SidebarProps = {
  profile?: ProfileProps;
  links?: SidebarLinkProps[];
};

const Sidebar = ({ profile, links }: SidebarProps) => {
  return (
    <div className="flex flex-col w-64 h-screen bg-gray-800 text-white">
      <div className="p-4 text-lg font-bold">My Sidebar</div>
      <div className="flex flex-col justify-between h-full">
        <nav className="flex flex-col">
          {links &&
            links.map((link) => (
              <Link key={link.name} to={`/app${link.path}`} className="p-4 hover:bg-gray-700">
                {link.name}
              </Link>
            ))}
        </nav>
        {profile && (
          <div className="flex items-center mt-auto p-4 rounded-lg">
            <img
              src={profile.picture ?? "https://via.placeholder.com/50"}
              alt="Profile"
              className="rounded-full mr-3"
            />
            <p>{profile.name}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
