// src/pages/admin/GradeEntryForm.tsx
import React, { useState, useEffect } from "react";
import { TextField, Button, Paper, Typography, Box, Grid } from "@mui/material";
import { generateClient } from "aws-amplify/api";
import { listStudents } from "../../graphql/queries";
import { customCreateGrade } from "../../graphql/customMutations";
import { useCurrentUser } from "../../utils/useCurrentUser";

const client = generateClient();

const GradeEntryForm: React.FC = () => {
  const { user, loading } = useCurrentUser();
  const [students, setStudents] = useState<any[]>([]);
  const [scores, setScores] = useState<{ [studentID: string]: number }>({});

  useEffect(() => {
    const fetchStudents = async () => {
      if (!user?.classID) return;
      try {
        const res: any = await client.graphql({
          query: listStudents,
          variables: {
            filter: { classID: { eq: user.classID } },
          },
        });
        const studentList = res?.data?.listStudents?.items || [];
        studentList.sort((a: { name: string }, b: { name: string }) =>
          a.name.localeCompare(b.name)
        );
        setStudents(studentList);
      } catch (err) {
        console.error("Error fetching students:", err);
      }
    };

    fetchStudents();
  }, [user?.classID]);

  const handleScoreChange = (id: string, value: number) => {
    setScores((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user?.assessmentID || !user?.classID) {
      alert("Missing assessmentID or classID");
      return;
    }

    try {
      for (const student of students) {
        await client.graphql({
          query: customCreateGrade,
          variables: {
            input: {
              studentID: student.id,
              classID: user.classID,
              assessmentID: user.assessmentID,
              score: scores[student.id] || 0,
            },
          },
        });
      }
      alert("✅ Grades submitted successfully");
      setScores({});
    } catch (err) {
      console.error("❌ Error submitting grades:", err);
      alert("Error submitting grades");
    }
  };

  if (loading) return <div>Loading user...</div>;
  if (!user?.classID || !user?.assessmentID)
    return <div>Missing classID or assessmentID</div>;

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Enter Grades
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {students.map((student) => (
            <Grid size={{ xs: 12, md: 6 }} key={student.id}>
              <TextField
                fullWidth
                label={student.name}
                type="number"
                value={scores[student.id] ?? ""}
                onChange={(e) =>
                  handleScoreChange(student.id, Number(e.target.value))
                }
              />
            </Grid>
          ))}
        </Grid>
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Submit Grades
        </Button>
      </Box>
    </Paper>
  );
};

export default GradeEntryForm;
