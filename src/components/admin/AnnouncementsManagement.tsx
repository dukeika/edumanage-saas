import React, { useState, FormEvent } from "react";
import { Announcement, AudienceType } from "../../types";

interface Props {
  announcements: Announcement[];
  onCreate: (data: Omit<Announcement, "id">) => void;
}

const AnnouncementsManagement: React.FC<Props> = ({
  announcements,
  onCreate,
}) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [audience, setAudience] = useState<AudienceType>("CLASS");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onCreate({ title, body, audience });
    setTitle("");
    setBody("");
    setAudience("CLASS");
  };

  return (
    <div className="space-y-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow space-y-4"
      >
        <h2 className="text-xl font-semibold">New Announcement</h2>
        <div>
          <label className="block text-gray-700">Title</label>
          <input
            className="mt-1 block w-full border rounded px-3 py-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Body</label>
          <textarea
            className="mt-1 block w-full border rounded px-3 py-2"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Audience</label>
          <select
            className="mt-1 block w-full border rounded px-3 py-2"
            value={audience}
            onChange={(e) => setAudience(e.target.value as AudienceType)}
          >
            <option value="CLASS">Class</option>
            <option value="SCHOOL">School</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Post
        </button>
      </form>

      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">All Announcements</h2>
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
    </div>
  );
};

export default AnnouncementsManagement;
