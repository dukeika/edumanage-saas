import React from "react";

interface DashboardCardProps {
  title: string;
  count: number | string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, count }) => (
  <div className="bg-white rounded shadow p-4">
    <h3 className="text-gray-700">{title}</h3>
    <p className="text-2xl font-bold">{count}</p>
  </div>
);

export default DashboardCard;