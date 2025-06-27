import React, { useState } from "react";
import { Box, Typography, Button, MenuItem, Select } from "@mui/material";
import RequireRole from "../../components/RequireRole";
import { useCurrentUser } from "../../utils/useCurrentUser";
import { generateClient } from "@aws-amplify/api";
import { customCreateAttendance } from "../../graphql/customMutations";

interface Props {
  students: { id: string; name: string }[];
  date: string;
}

const AttendanceFormPage: React.FC<Props> = ({ students, date }) => {
  const { user } = useCurrentUser();
  const [statusMap, setStatusMap] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user?.classID) return;

    const client = generateClient();
    await Promise.all(
      students.map((s) =>
        client.graphql({
          query: customCreateAttendance,
          variables: {
            input: {
              studentID: s.id,
              classID: user.classID,
              date,
              status: statusMap[s.id] || "Present",
            },
          },
        })
      )
    );

    alert("Attendance recorded!");
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Record Attendance for {date}
      </Typography>

      <RequireRole roles={["Admin", "Teacher"]}>
        <form onSubmit={handleSubmit}>
          {students.map((s) => (
            <Box
              key={s.id}
              sx={{ mb: 2, display: "flex", alignItems: "center" }}
            >
              <Typography sx={{ width: 200 }}>{s.name}</Typography>
              <Select
                value={statusMap[s.id] || "Present"}
                onChange={(e) =>
                  setStatusMap({ ...statusMap, [s.id]: e.target.value })
                }
              >
                <MenuItem value="Present">Present</MenuItem>
                <MenuItem value="Absent">Absent</MenuItem>
                <MenuItem value="Late">Late</MenuItem>
              </Select>
            </Box>
          ))}
          <Button type="submit" variant="contained">
            Save Attendance
          </Button>
        </form>
      </RequireRole>
    </Box>
  );
};

export default AttendanceFormPage;
