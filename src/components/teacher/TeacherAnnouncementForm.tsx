import React, { useState, FormEvent } from "react";
import { AudienceType } from "../../types";

interface Props {
  onCreate: (data: {
    title: string;
    body: string;
    audience: AudienceType;
  }) => void;
}

const TeacherAnnouncementForm: React.FC<Props> = ({ onCreate }) => {
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
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow space-y-4"
    >
      <h2 className="text-xl font-semibold">New Announcement</h2>
      <input
        className="w-full border rounded px-3 py-2"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className="w-full border rounded px-3 py-2"
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />
      <select
        className="w-full border rounded px-3 py-2"
        value={audience}
        onChange={(e) => setAudience(e.target.value as AudienceType)}
      >
        <option value="CLASS">Class</option>
        <option value="SCHOOL">School</option>
      </select>
      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
      >
        Post
      </button>
    </form>
  );
};

export default TeacherAnnouncementForm;
