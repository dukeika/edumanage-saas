import React from "react";
import { UpcomingClass } from "../../types";

interface Props {
  upcoming: UpcomingClass[];
}

const StudentDashboard: React.FC<Props> = ({ upcoming }) => (
  <div className="space-y-6">
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Upcoming Classes</h2>
      <ul className="space-y-2">
        {upcoming.map((c) => (
          <li key={c.id} className="flex justify-between border-b pb-2">
            <span>{c.name}</span>
            <span className="text-gray-500">
              {new Date(c.date).toLocaleDateString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default StudentDashboard;
