import React from "react";
import { Announcement } from "../../types";

interface Props {
  announcements: Announcement[];
}

const TeacherAnnouncementsList: React.FC<Props> = ({ announcements }) => (
  <div className="bg-white p-6 rounded shadow">
    <h2 className="text-xl font-semibold mb-4">Announcements</h2>
    <ul className="space-y-3">
      {announcements.map((a) => (
        <li key={a.id} className="border-b pb-2">
          <h3 className="font-medium">{a.title}</h3>
          <p className="text-sm text-gray-600">{a.body}</p>
          <span className="text-xs text-gray-500">{a.audience}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default TeacherAnnouncementsList;
