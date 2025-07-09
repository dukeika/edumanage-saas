import React, { useEffect, useState } from "react";
import RequireRole from "../../components/RequireRole";
import { useCurrentUser } from "../../utils/useCurrentUser";
import { generateClient } from "aws-amplify/api";
import { listStudents, listClasses } from "../../graphql/queries";
import { createAttendance } from "../../graphql/mutations";

const client = generateClient();

type StudentType = { id: string; firstName: string; lastName: string };
type ClassType = { id: string; name: string };

const RecordAttendance: React.FC = () => {
  const { user } = useCurrentUser();
  const [students, setStudents] = useState<StudentType[]>([]);
  const [classes, setClasses] = useState<ClassType[]>([]);
  const [selectedStudentId, setSelectedStudentId] = useState<string>("");
  const [selectedClassId, setSelectedClassId] = useState<string>("");
  const [date, setDate] = useState<string>(
    new Date().toISOString().slice(0, 10)
  );
  const [status, setStatus] = useState<"PRESENT" | "ABSENT">("PRESENT");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    if (!user?.schoolID) return;

    // Fetch classes for this school
    client
      .graphql({
        query: listClasses,
        variables: { filter: { schoolID: { eq: user.schoolID } } },
      })
      .then((res: any) => setClasses(res.data.listClasses.items))
      .catch(console.error);

    // Fetch students for this school
    client
      .graphql({
        query: listStudents,
        variables: { filter: { schoolID: { eq: user.schoolID } } },
      })
      .then((res: any) => setStudents(res.data.listStudents.items))
      .catch(console.error);
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user?.schoolID || !selectedStudentId || !selectedClassId) return;

    try {
      await client.graphql({
        query: createAttendance,
        variables: {
          input: {
            studentID: selectedStudentId,
            classID: selectedClassId,
            date,
            status,
            schoolID: user.schoolID,
          },
        },
      });
      setMessage("✅ Attendance recorded");
      // Optionally clear selection or keep for next entry
      setSelectedStudentId("");
      setStatus("PRESENT");
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to record attendance");
    }
  };

  return (
    <RequireRole roles={["ADMIN"]}>
      {message && <div>{message}</div>}
      <form onSubmit={handleSubmit}>
        <label>
          Class:
          <select
            value={selectedClassId}
            onChange={(e) => setSelectedClassId(e.target.value)}
            required
          >
            <option value="">-- Select class --</option>
            {classes.map((cls) => (
              <option key={cls.id} value={cls.id}>
                {cls.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Student:
          <select
            value={selectedStudentId}
            onChange={(e) => setSelectedStudentId(e.target.value)}
            required
          >
            <option value="">-- Select student --</option>
            {students.map((s) => (
              <option key={s.id} value={s.id}>
                {s.firstName} {s.lastName}
              </option>
            ))}
          </select>
        </label>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <label>
          Status:
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as any)}
          >
            <option value="PRESENT">Present</option>
            <option value="ABSENT">Absent</option>
          </select>
        </label>
        <button type="submit">Record Attendance</button>
      </form>
    </RequireRole>
  );
};

export default RecordAttendance;
