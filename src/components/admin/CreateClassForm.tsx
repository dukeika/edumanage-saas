import React, { useState, FormEvent } from "react";
import { ClassItem, Teacher } from "../../types";

interface Props {
  teachers: Teacher[];
  onCreate: (data: Omit<ClassItem, "id"> & { teacherId: string }) => void;
}

const CreateClassForm: React.FC<Props> = ({ teachers, onCreate }) => {
  const [name, setName] = useState("");
  const [teacherId, setTeacherId] = useState(teachers[0]?.id || "");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onCreate({ name, teacherId });
    setName("");
    setTeacherId(teachers[0]?.id || "");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow space-y-4"
    >
      <h2 className="text-xl font-semibold">Create Class</h2>
      <div>
        <label className="block text-gray-700">Name</label>
        <input
          className="mt-1 block w-full border rounded px-3 py-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Teacher</label>
        <select
          className="mt-1 block w-full border rounded px-3 py-2"
          value={teacherId}
          onChange={(e) => setTeacherId(e.target.value)}
        >
          {teachers.map((t) => (
            <option key={t.id} value={t.id}>
              {t.name}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
      >
        Create
      </button>
    </form>
  );
};

export default CreateClassForm;
