// src/pages/admin/RecordAttendance.tsx
import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { generateClient } from "aws-amplify/api";
import { listClasses, listStudents } from "../../graphql/queries";
import { createAttendance } from "../../graphql/mutations";
import { getCurrentUserInfo } from "../../utils/auth";

const client = generateClient();

const RecordAttendance = () => {
  const [selectedClassId, setSelectedClassId] = useState("");
  const [classes, setClasses] = useState<any[]>([]);
  const [students, setStudents] = useState<any[]>([]);
  const [attendanceData, setAttendanceData] = useState<{
    [studentId: string]: string;
  }>({});
  const [schoolID, setSchoolID] = useState("");

  useEffect(() => {
    const fetchUserSchool = async () => {
      const userInfo = await getCurrentUserInfo();
      setSchoolID(userInfo?.id || "");
    };
    fetchUserSchool();
  }, []);

  useEffect(() => {
    if (!schoolID) return;
    const fetchClasses = async () => {
      const response = await client.graphql({
        query: listClasses,
        variables: {
          filter: { schoolID: { eq: schoolID } },
        },
      });
      setClasses(response.data.listClasses.items);
    };
    fetchClasses();
  }, [schoolID]);

  useEffect(() => {
    if (!selectedClassId) return;
    const fetchStudents = async () => {
      const response = await client.graphql({
        query: listStudents,
        variables: {
          filter: { classID: { eq: selectedClassId } },
        },
      });
      setStudents(response.data.listStudents.items);
    };
    fetchStudents();
  }, [selectedClassId]);

  const handleAttendanceChange = (studentId: string, status: string) => {
    setAttendanceData({ ...attendanceData, [studentId]: status });
  };

  const handleSubmit = async () => {
    const date = new Date().toISOString().split("T")[0];
    for (const student of students) {
      await client.graphql({
        query: createAttendance,
        variables: {
          input: {
            studentID: student.id,
            classID: selectedClassId,
            date,
            status: attendanceData[student.id] || "Absent",
          },
        },
      });
    }
    alert("Attendance recorded successfully!");
  };

  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        Record Attendance
      </Typography>

      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel>Class</InputLabel>
        <Select
          value={selectedClassId}
          onChange={(e) => setSelectedClassId(e.target.value)}
        >
          {classes.map((cls) => (
            <MenuItem key={cls.id} value={cls.id}>
              {cls.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormGroup>
        {students.map((student) => (
          <FormControlLabel
            key={student.id}
            control={
              <Checkbox
                checked={attendanceData[student.id] === "Present"}
                onChange={(e) =>
                  handleAttendanceChange(
                    student.id,
                    e.target.checked ? "Present" : "Absent"
                  )
                }
              />
            }
            label={student.name}
          />
        ))}
      </FormGroup>

      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        sx={{ mt: 3 }}
      >
        Submit Attendance
      </Button>
    </Paper>
  );
};

export default RecordAttendance;
