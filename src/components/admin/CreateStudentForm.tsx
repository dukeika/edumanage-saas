import React, { useState, FormEvent } from "react";
import { Student, ClassItem } from "../../types";

interface Props {
  classes: ClassItem[];
  onCreate: (data: Omit<Student, "id">) => void;
}

const CreateStudentForm: React.FC<Props> = ({ classes, onCreate }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [classId, setClassId] = useState<string>(classes[0]?.id || "");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onCreate({ firstName, lastName, email, classId });
    setFirstName("");
    setLastName("");
    setEmail("");
    setClassId(classes[0]?.id || "");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow space-y-4"
    >
      <h2 className="text-xl font-semibold">Create Student</h2>
      <div>
        <label className="block text-gray-700">First Name</label>
        <input
          className="mt-1 block w-full border rounded px-3 py-2"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">Last Name</label>
        <input
          className="mt-1 block w-full border rounded px-3 py-2"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
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
      <div>
        <label className="block text-gray-700">Class</label>
        <select
          className="mt-1 block w-full border rounded px-3 py-2"
          value={classId}
          onChange={(e) => setClassId(e.target.value)}
        >
          {classes.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
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

export default CreateStudentForm;
