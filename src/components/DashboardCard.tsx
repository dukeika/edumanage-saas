import React from "react";

interface DashboardCardProps {
  title: string;
  count: number | string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, count }) => (
  <div className="flex flex-col items-center bg-white rounded-lg shadow px-6 py-4 min-w-[120px]">
    <span className="text-xs text-gray-500">{title}</span>
    <span className="text-2xl font-bold text-indigo-700">{count}</span>
  </div>
);

export default DashboardCard;
