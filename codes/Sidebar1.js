// src/components/Sidebar.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, FolderKanban, User } from "lucide-react";

function Sidebar() {
  const location = useLocation();

  const links = [
    { to: "/", label: "Overview", icon: <LayoutDashboard size={20} /> },
    { to: "/projects", label: "Projects", icon: <FolderKanban size={20} /> },
    { to: "/profile", label: "Profile", icon: <User size={20} /> },
  ];

  return (
    <div className="w-64 h-screen bg-[#0f172a] text-white flex flex-col p-6">
      <h2 className="text-3xl font-extrabold mb-8 text-[#14b8a6]">Admin Panel</h2>
      <nav className="flex flex-col gap-3">
        {links.map((link) => {
          const isActive = location.pathname === link.to;
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`flex items-center gap-3 p-3 rounded-lg transition-colors duration-300 ${
                isActive
                  ? "bg-[#14b8a6] font-semibold text-[#0f172a] shadow-lg"
                  : "hover:bg-[#1e293b] hover:text-[#14b8a6]"
              }`}
            >
              {link.icon}
              <span className="text-lg">{link.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto p-3 bg-[#1e293b] rounded-lg flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#14b8a6] flex items-center justify-center font-bold text-[#0f172a]">
          U
        </div>
        <div>
          <p className="text-sm font-semibold">John Doe</p>
          <p className="text-xs text-gray-400">Admin</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
