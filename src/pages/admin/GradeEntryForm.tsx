import React, { useState, useEffect } from "react";
import { TextField, Button, Box, Typography, Paper, Grid } from "@mui/material";
import { generateClient } from "aws-amplify/api";
import { listStudents } from "../../graphql/queries";
import { createGrade } from "../../graphql/mutations";
import { Student } from "../../API";

const client = generateClient();

type Props = {
  classID: string;
  assessmentID: string;
};

const GradeEntryForm: React.FC<Props> = ({ classID, assessmentID }) => {
  const [students, setStudents] = useState<Student[]>([]);
  const [scores, setScores] = useState<{ [studentID: string]: number }>({});

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response: any = await client.graphql({
          query: listStudents,
          variables: {
            filter: { classID: { eq: classID } },
          },
        });
        const studentItems = response.data?.listStudents?.items ?? [];
        setStudents(studentItems);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };
    fetchStudents();
  }, [classID]);

  const handleScoreChange = (id: string, score: number) => {
    setScores((prevScores) => ({
      ...prevScores,
      [id]: score,
    }));
  };

  const handleSubmit = async () => {
    try {
      for (const student of students) {
        await client.graphql({
          query: createGrade,
          variables: {
            input: {
              assessmentID,
              studentID: student.id,
              classID,
              score: scores[student.id] || 0,
            },
          },
        });
      }
      alert("Grades submitted successfully");
    } catch (error) {
      console.error("Error submitting grades:", error);
    }
  };

  return (
    <Paper sx={{ p: 3, mb: 2 }}>
      <Typography variant="h6" gutterBottom>
        Enter Grades
      </Typography>
      <Box>
        <Grid container spacing={3}>
          {students.map((student) => (
            <Grid
              key={student.id ?? student.name}
              size={{ xs: 12, sm: 6, md: 4 }}
            >
              <TextField
                fullWidth
                label={student.name ?? "Unnamed Student"}
                type="number"
                value={scores[student.id] ?? ""}
                onChange={(e) =>
                  handleScoreChange(student.id, Number(e.target.value))
                }
              />
            </Grid>
          ))}
        </Grid>
        <Button sx={{ mt: 3 }} variant="contained" onClick={handleSubmit}>
          Submit Grades
        </Button>
      </Box>
    </Paper>
  );
};

export default GradeEntryForm;
