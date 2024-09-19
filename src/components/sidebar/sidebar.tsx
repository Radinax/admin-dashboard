import { Link } from "react-router-dom"; // Use next/link if you're using Next.js

const Sidebar = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="flex flex-col w-64 h-screen bg-gray-800 text-white">
      <div className="p-4 text-lg font-bold">My Sidebar</div>
      <nav className="flex flex-col">
        {links.map((link) => (
          <Link key={link.name} to={link.path} className="p-4 hover:bg-gray-700">
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
