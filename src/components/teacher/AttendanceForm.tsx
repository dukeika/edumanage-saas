import React, { useState, FormEvent } from "react";
import { ClassItem, AttendanceRecord } from "../../types";

interface Props {
  classes: ClassItem[];
  students: { id: string; name: string }[];
  onSubmit: (records: Omit<AttendanceRecord, "id">[]) => void;
}

const AttendanceForm: React.FC<Props> = ({ classes, students, onSubmit }) => {
  const [classId, setClassId] = useState(classes[0]?.id || "");
  const [date, setDate] = useState<string>(
    new Date().toISOString().slice(0, 10)
  );
  const [statuses, setStatuses] = useState<
    Record<string, "PRESENT" | "ABSENT">
  >({});

  const handleStatus = (studentId: string, status: "PRESENT" | "ABSENT") => {
    setStatuses((prev) => ({ ...prev, [studentId]: status }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const records = students.map((s) => ({
      studentName: s.name,
      date,
      status: statuses[s.id] || "ABSENT",
      classId,
    }));
    onSubmit(records);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow space-y-4"
    >
      <h2 className="text-xl font-semibold">Mark Attendance</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        <div>
          <label className="block text-gray-700">Date</label>
          <input
            type="date"
            className="mt-1 block w-full border rounded px-3 py-2"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
      <div>
        <h3 className="font-medium">Students</h3>
        <div className="mt-2 space-y-2 max-h-64 overflow-auto">
          {students.map((s) => (
            <div key={s.id} className="flex items-center space-x-4">
              <span className="flex-1">{s.name}</span>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name={s.id}
                  checked={statuses[s.id] === "PRESENT"}
                  onChange={() => handleStatus(s.id, "PRESENT")}
                  className="form-radio"
                />
                <span className="ml-1">P</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name={s.id}
                  checked={statuses[s.id] === "ABSENT"}
                  onChange={() => handleStatus(s.id, "ABSENT")}
                  className="form-radio"
                />
                <span className="ml-1">A</span>
              </label>
            </div>
          ))}
        </div>
      </div>
      <button
        type="submit"
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
      >
        Submit
      </button>
    </form>
  );
};

export default AttendanceForm;
