import React, { useState, FormEvent } from "react";
import { Teacher, ClassItem } from "../../types";

interface Props {
  classes: ClassItem[];
  onCreate: (data: Omit<Teacher, "id">) => void;
}

const CreateTeacherForm: React.FC<Props> = ({ classes, onCreate }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [classIds, setClassIds] = useState<string[]>([]);

  const handleCheckbox = (id: string) => {
    setClassIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onCreate({ name, email, classIds });
    setName("");
    setEmail("");
    setClassIds([]);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow space-y-4"
    >
      <h2 className="text-xl font-semibold">Create Teacher</h2>
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
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          className="mt-1 block w-full border rounded px-3 py-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <fieldset>
        <legend className="block text-gray-700">Assign to Classes</legend>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {classes.map((c) => (
            <label key={c.id} className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={classIds.includes(c.id)}
                onChange={() => handleCheckbox(c.id)}
              />
              <span className="ml-2">{c.name}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
      >
        Create
      </button>
    </form>
  );
};

export default CreateTeacherForm;
