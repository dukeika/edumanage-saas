// src/pages/admin/AddGradeForm.tsx
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
import { customCreateGrade } from "../../graphql/customMutations";
import { listStudents, listAssessments } from "../../graphql/queries";

const client = generateClient();

const AddGradeForm: React.FC = () => {
  const [studentID, setStudentID] = useState("");
  const [assessmentID, setAssessmentID] = useState("");
  const [score, setScore] = useState("");
  const [students, setStudents] = useState<{ id: string; name: string }[]>([]);
  const [assessments, setAssessments] = useState<
    { id: string; title: string }[]
  >([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const s: any = await client.graphql(graphqlOperation(listStudents));
      setStudents(s.data.listStudents.items);
      const a: any = await client.graphql(graphqlOperation(listAssessments));
      setAssessments(a.data.listAssessments.items);
    })();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await client.graphql(
        graphqlOperation(customCreateGrade, {
          input: {
            studentID,
            assessmentID,
            score: parseFloat(score),
          },
        })
      );
      setOpen(true);
      setStudentID("");
      setAssessmentID("");
      setScore("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box component={Paper} p={4} m={4} maxWidth={500} mx="auto" elevation={3}>
      <Typography variant="h5" gutterBottom>
        Add Grade
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
          label="Assessment"
          value={assessmentID}
          onChange={(e) => setAssessmentID(e.target.value)}
          required
        >
          {assessments.map((a) => (
            <MenuItem key={a.id} value={a.id}>
              {a.title}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Score"
          type="number"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          required
        />
        <Button type="submit" variant="contained">
          Add
        </Button>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={2500}
        onClose={() => setOpen(false)}
        message="Grade recorded!"
      />
    </Box>
  );
};

export default AddGradeForm;
