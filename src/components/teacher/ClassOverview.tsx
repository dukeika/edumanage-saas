import React from "react";

interface Props {
  className: string;
  students: { id: string; name: string; email: string }[];
}

const ClassOverview: React.FC<Props> = ({ className, students }) => (
  <div className="bg-white p-6 rounded shadow">
    <h2 className="text-xl font-semibold mb-4">Class: {className}</h2>
    <table className="w-full table-auto">
      <thead>
        <tr className="bg-gray-100">
          <th className="px-4 py-2 text-left">Name</th>
          <th className="px-4 py-2 text-left">Email</th>
        </tr>
      </thead>
      <tbody>
        {students.map((s) => (
          <tr key={s.id} className="border-t">
            <td className="px-4 py-2">{s.name}</td>
            <td className="px-4 py-2">{s.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default ClassOverview;
