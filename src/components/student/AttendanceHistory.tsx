import React from "react";
import { AttendanceRecord } from "../../types";

interface Props {
  history: AttendanceRecord[];
}

const AttendanceHistory: React.FC<Props> = ({ history }) => (
  <div className="bg-white p-6 rounded shadow">
    <h2 className="text-xl font-semibold mb-4">Attendance History</h2>
    <table className="w-full table-auto">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2">Date</th>
          <th className="px-4 py-2">Status</th>
        </tr>
      </thead>
      <tbody>
        {history.map((r) => (
          <tr key={r.id} className="border-t">
            <td className="px-4 py-2">
              {new Date(r.date).toLocaleDateString()}
            </td>
            <td className="px-4 py-2">{r.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default AttendanceHistory;
