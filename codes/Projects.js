// src/pages/Projects.js
import React, { useState } from "react";

const projects = [
  { name: "Project Alpha", status: "Completed", deadline: "2025-09-01", progress: 100 },
  { name: "Project Climate", status: "In Progress", deadline: "2025-09-15", progress: 60 },
  { name: "Project DataClustring", status: "Pending", deadline: "2025-10-01", progress: 20 },
  { name: "Project Delta", status: "In Progress", deadline: "2025-10-10", progress: 45 },
  { name: "Project Amazon", status: "Completed", deadline: "2025-08-30", progress: 100 },
  { name: "Project Zeta", status: "Pending", deadline: "2025-09-20", progress: 10 },
  { name: "Project Database", status: "In Progress", deadline: "2025-10-05", progress: 50 },
  { name: "Project MarkZe", status: "Completed", deadline: "2025-08-28", progress: 100 },
  { name: "Project ReactApp", status: "In Progress", deadline: "2025-09-25", progress: 70 },
  { name: "Project Frontend", status: "Pending", deadline: "2025-10-15", progress: 5 },
  { name: "Project Content", status: "Completed", deadline: "2025-08-31", progress: 100 },
  { name: "Project GameDev", status: "In Progress", deadline: "2025-09-18", progress: 40 },
];

const statusColors = {
  Completed: "bg-green-500",
  "In Progress": "bg-yellow-500",
  Pending: "bg-red-500",
};

const getDaysRemaining = (deadline) => {
  const today = new Date();
  const end = new Date(deadline);
  const diffTime = end - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays >= 0 ? diffDays : 0;
};

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filters = ["All", "Completed", "In Progress", "Pending"];
  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.status === filter);

  return (
    <div className="px-6 mt-2">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-[#14b8a6] mb-4">Projects</h1>

      {/* Filter Buttons */}
      <div className="flex gap-3 mb-6">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-full font-semibold transition ${
              filter === f
                ? "bg-[#14b8a6] text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProjects.map((project, idx) => (
          <div
            key={idx}
            className="bg-[#111827] p-6 rounded-xl shadow-md hover:shadow-xl transform transition hover:scale-105 cursor-pointer w-full"
          >
            <h2 className="text-2xl font-bold text-white">{project.name}</h2>
            <p className="text-gray-400 mt-2 text-lg">
              Deadline: {project.deadline} (
              <span className="text-[#f97316]">{getDaysRemaining(project.deadline)} days left</span>)
            </p>

            {/* Status Badge */}
            <span
              className={`inline-block mt-4 px-4 py-1 text-sm font-semibold text-white rounded-full ${statusColors[project.status]}`}
            >
              {project.status}
            </span>

            {/* Progress Bar */}
            <div className="w-full bg-gray-800 h-4 rounded-full mt-4">
              <div
                className={`h-4 rounded-full ${statusColors[project.status]}`}
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
            <p className="text-gray-300 text-sm mt-2">{project.progress}% Complete</p>
          </div>
        ))}
      </div>
    </div>
  );
}
