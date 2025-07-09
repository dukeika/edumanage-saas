import React from "react";

const ReportsManagement: React.FC = () => (
  <div className="bg-white p-6 rounded shadow space-y-4">
    <h2 className="text-xl font-semibold">Reports</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <button className="p-4 bg-green-100 rounded hover:bg-green-200 text-green-800">
        Generate Student Report
      </button>
      <button className="p-4 bg-blue-100 rounded hover:bg-blue-200 text-blue-800">
        Generate Attendance Report
      </button>
      <button className="p-4 bg-yellow-100 rounded hover:bg-yellow-200 text-yellow-800">
        Generate Fee Report
      </button>
      <button className="p-4 bg-purple-100 rounded hover:bg-purple-200 text-purple-800">
        Generate Custom Report
      </button>
    </div>
  </div>
);

export default ReportsManagement;
