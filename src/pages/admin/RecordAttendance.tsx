// src/pages/admin/RecordAttendance.tsx
import React, { useState } from "react";
import { Box, Button, Grid, TextField, MenuItem, Alert } from "@mui/material";
import { generateClient } from "@aws-amplify/api";
import { createAttendance } from "../../graphql/mutations";

const client = generateClient();

const RecordAttendance: React.FC<{
  classID: string;
  students: { id: string; name: string }[];
}> = ({ classID, students }) => {
  const [selectedStudentId, setSelectedStudentId] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("PRESENT");
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(null);
    setError(null);
    try {
      const { data } = (await client.graphql({
        query: createAttendance,
        variables: {
          input: {
            studentID: selectedStudentId,
            classID,
            date,
            status,
          },
        },
      })) as any;
      setSuccess("Attendance recorded!");
      setSelectedStudentId("");
      setDate("");
      setStatus("PRESENT");
    } catch (err: any) {
      setError("Failed to record attendance.");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            select
            label="Student"
            value={selectedStudentId}
            onChange={(e) => setSelectedStudentId(e.target.value)}
            required
            fullWidth
          >
            {students.map((s) => (
              <MenuItem key={s.id} value={s.id}>
                {s.name}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <TextField
            type="date"
            label="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <TextField
            select
            label="Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
            fullWidth
          >
            <MenuItem value="PRESENT">Present</MenuItem>
            <MenuItem value="ABSENT">Absent</MenuItem>
          </TextField>
        </Grid>
      </Grid>
      <Box mt={2}>
        <Button type="submit" variant="contained">
          Record Attendance
        </Button>
      </Box>
      {success && (
        <Alert severity="success" sx={{ mt: 2 }}>
          {success}
        </Alert>
      )}
      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}
    </Box>
  );
};

export default RecordAttendance;
