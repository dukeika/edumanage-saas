import React from "react";
import { Link } from "react-router-dom";

interface SidebarProps {
  links: { to: string; label: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ links }) => (
  <aside className="w-64 bg-white shadow">
    <nav className="p-4">
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className="block p-2 hover:bg-gray-200 rounded"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  </aside>
);

export default Sidebar;
