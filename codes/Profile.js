// src/pages/Profile.js
import React, { useState } from "react";
import { User, Mail, Lock } from "lucide-react";

export default function Profile() {
  const [name, setName] = useState("Admin");
  const [email, setEmail] = useState("Admin@example.com");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState(null);

  const handleSave = () => {
    console.log("Saved:", { name, email, password });
    alert("Profile saved!");
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setAvatar(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="px-6 mt-4">
      <h1 className="text-3xl font-bold text-[#14b8a6] mb-8">Profile</h1>

      <div className="bg-gray-900 p-10 rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-teal-500/50 space-y-10">
        {/* Avatar */}
        <div className="flex flex-col items-center">
          <label className="cursor-pointer">
            <div className="w-32 h-32 rounded-full bg-teal-600 text-white text-6xl flex items-center justify-center mb-5 overflow-hidden transition-transform duration-300 hover:scale-110 hover:shadow-lg">
              {avatar ? (
                <img
                  src={avatar}
                  alt="avatar"
                  className="w-full h-full object-cover transition-all duration-300"
                />
              ) : (
                name[0]
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              className="hidden"
            />
          </label>
          <p className="text-gray-300 mt-1 text-lg">{email}</p>
        </div>

        {/* Form Fields */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 bg-gray-800 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-teal-500 transition-all duration-300">
            <User size={20} className="text-teal-400" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-transparent text-white outline-none placeholder-gray-400"
              placeholder="Name"
            />
          </div>

          <div className="flex items-center gap-3 bg-gray-800 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-teal-500 transition-all duration-300">
            <Mail size={20} className="text-teal-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent text-white outline-none placeholder-gray-400"
              placeholder="Email"
            />
          </div>

          <div className="flex items-center gap-3 bg-gray-800 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-teal-500 transition-all duration-300">
            <Lock size={20} className="text-teal-400" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent text-white outline-none placeholder-gray-400"
              placeholder="New Password"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="px-8 py-3 bg-teal-500 text-white rounded-xl font-semibold hover:bg-teal-400 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
