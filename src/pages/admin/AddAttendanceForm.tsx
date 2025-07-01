// src/pages/admin/AddAttendanceForm.tsx
import React, { useState, useEffect } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  MenuItem,
  Snackbar,
} from "@mui/material";
import { generateClient } from "aws-amplify/api";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { customCreateAttendance } from "../../graphql/customMutations";
import { listStudents, listClasses } from "../../graphql/queries";

const client = generateClient();

const AddAttendanceForm: React.FC = () => {
  const [studentID, setStudentID] = useState("");
  const [classID, setClassID] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("Present");
  const [students, setStudents] = useState<{ id: string; name: string }[]>([]);
  const [classes, setClasses] = useState<{ id: string; name: string }[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const s: any = await client.graphql(graphqlOperation(listStudents));
      setStudents(s.data.listStudents.items);
      const c: any = await client.graphql(graphqlOperation(listClasses));
      setClasses(c.data.listClasses.items);
    })();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await client.graphql(
        graphqlOperation(customCreateAttendance, {
          input: { studentID, classID, date, status },
        })
      );
      setOpen(true);
      setStudentID("");
      setClassID("");
      setDate("");
      setStatus("Present");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box component={Paper} p={4} m={4} maxWidth={500} mx="auto" elevation={3}>
      <Typography variant="h5" gutterBottom>
        Record Attendance
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <TextField
          select
          label="Student"
          value={studentID}
          onChange={(e) => setStudentID(e.target.value)}
          required
        >
          {students.map((s) => (
            <MenuItem key={s.id} value={s.id}>
              {s.name}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Class"
          value={classID}
          onChange={(e) => setClassID(e.target.value)}
          required
        >
          {classes.map((c) => (
            <MenuItem key={c.id} value={c.id}>
              {c.name}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
          required
        />
        <TextField
          select
          label="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        >
          <MenuItem value="Present">Present</MenuItem>
          <MenuItem value="Absent">Absent</MenuItem>
        </TextField>
        <Button type="submit" variant="contained">
          Record
        </Button>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={2500}
        onClose={() => setOpen(false)}
        message="Attendance recorded!"
      />
    </Box>
  );
};

export default AddAttendanceForm;
