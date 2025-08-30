// src/pages/Overview.js
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const summaryData = [
  { title: "Total Projects", value: 12 },
  { title: "Earnings", value: "$5,400" },
  { title: "Tasks Due", value: 7 },
];

const earningsData = [
  { month: "Jan", earnings: 400 },
  { month: "Feb", earnings: 800 },
  { month: "Mar", earnings: 600 },
  { month: "Apr", earnings: 700 },
  { month: "May", earnings: 500 },
  { month: "Jun", earnings: 900 },
];

const taskData = [
  { name: "Design", value: 10 },
  { name: "Development", value: 14 },
  { name: "Testing", value: 6 },
  { name: "Deployment", value: 4 },
];

const COLORS = ["#14b8a6", "#0ea5e9", "#f97316", "#eab308"];

const recentActivities = [
  "Completed Project Beta",
  "Task assigned: UI update",
  "Earnings recorded: $300",
];

// Custom Tooltip for Bar Chart
const CustomBarTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1e293b] p-2 rounded shadow-lg text-white">
        <p className="font-semibold">{label}</p>
        <p>{`Earnings: $${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

// Custom Label for Pie Chart
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="#ffffff" textAnchor="middle" dominantBaseline="central" fontSize={12} fontWeight="bold">
      {`${taskData[index].name} (${taskData[index].value})`}
    </text>
  );
};

export default function Overview() {
  return (
    <div className="space-y-8 mt-6">
      <h1 className="text-3xl font-bold text-[#14b8a6] mb-4">Overview</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {summaryData.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#1e293b] text-white p-6 rounded-xl shadow-lg flex flex-col justify-between hover:scale-105 transform transition"
          >
            <h2 className="text-gray-400 font-semibold">{item.title}</h2>
            <p className="text-2xl font-bold mt-2">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="bg-[#1e293b] p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold text-[#14b8a6] mb-4">Monthly Earnings</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={earningsData}>
              <XAxis
                dataKey="month"
                stroke="#ffffff"
                tick={{ fill: "#ffffff" }}
              />
              <YAxis stroke="#ffffff" tick={{ fill: "#ffffff" }} />
              <Tooltip content={<CustomBarTooltip />} />
              <Bar dataKey="earnings" fill="#14b8a6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
<div className="bg-[#1e293b] p-6 rounded-xl shadow-lg">
  <h2 className="text-xl font-bold text-[#14b8a6] mb-4">Task Types</h2>
  <ResponsiveContainer width="100%" height={250}>
    <PieChart>
      <Pie
        data={taskData}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={80}
        innerRadius={40}
        label={false}
        labelLine={false}
      >
        {taskData.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]}
            cursor="pointer"
          />
        ))}
      </Pie>

      <Legend wrapperStyle={{ color: "#ffffff", fontWeight: "bold", fontSize: 14 }} />

      {/* Fully custom tooltip */}
      <Tooltip
        content={({ active, payload }) => {
          if (active && payload && payload.length) {
            const data = payload[0];
            return (
              <div className="bg-[#1e293b] text-white font-bold p-2 rounded shadow-lg">
                <p>{data.name}</p>
                <p>{data.value}</p>
              </div>
            );
          }
          return null;
        }}
      />
    </PieChart>
  </ResponsiveContainer>
</div>

      </div>

      {/* Recent Activity */}
      <div className="bg-[#1e293b] p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-bold text-[#14b8a6] mb-4">Recent Activity</h2>
        <ul className="space-y-2 max-h-64 overflow-auto">
          {recentActivities.map((act, idx) => (
            <li
              key={idx}
              className="p-3 bg-[#0f172a] rounded hover:bg-[#0e172a] cursor-pointer transition text-white font-medium"
            >
              {act}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
