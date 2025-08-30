// src/components/Navbar.js
import React, { useState, useRef, useEffect } from "react";
import { Bell, Settings } from "lucide-react";

const notifications = [
  "Project Alpha completed",
  "New task assigned: Design Review",
  "Profile updated successfully",
];

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  return (
    <div className="w-full h-16 bg-[#1e293b] shadow-md flex items-center justify-between px-6 relative">
      <h1 className="text-xl font-bold text-[#14b8a6]">Dashboard</h1>

      <div className="flex items-center gap-4 relative" ref={dropdownRef}>
        {/* Notification Button */}
        <button
          className="relative p-2 rounded-full hover:bg-[#0f172a] transition"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <Bell size={20} className="text-white" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#14b8a6] rounded-full"></span>
        </button>

        {/* Settings Button */}
        <button className="p-2 rounded-full hover:bg-[#0f172a] transition">
          <Settings size={20} className="text-white" />
        </button>

        {/* User Avatar */}
        <div className="w-10 h-10 rounded-full bg-[#14b8a6] text-[#0f172a] flex items-center justify-center font-bold">
          U
        </div>

        {/* Notification Dropdown */}
        {showDropdown && (
          <div className="absolute right-0 top-16 w-72 bg-[#0f172a] shadow-lg rounded-lg overflow-hidden z-50 animate-slideDown">
            <div className="p-3 border-b border-gray-700 font-semibold text-white">
              Notifications
            </div>
            <ul>
              {notifications.slice(0, 1).map((note, idx) => (
                <li
                  key={idx}
                  className="px-4 py-2 hover:bg-[#1e293b] text-[#14b8a6] cursor-pointer transition"
                >
                  {note}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
