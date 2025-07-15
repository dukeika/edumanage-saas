import React, { useState } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import { useCurrentUser } from "../../utils/useCurrentUser";
import RequireRole from "../../components/RequireRole";
import { generateClient } from "@aws-amplify/api";
import { createGrade } from "../../graphql/mutations";

interface Props {
  students: { id: string; name: string }[];
}

const GradeEntryForm: React.FC<Props> = ({ students }) => {
  const { user } = useCurrentUser();
  const [scores, setScores] = useState<Record<string, number>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user?.classID || !user?.assessmentID) {
      alert("Missing classID or assessmentID");
      return;
    }

    const client = generateClient();
    await Promise.all(
      students.map((s) =>
        client.graphql({
          query: createGrade,
          variables: {
            input: {
              studentID: s.id,
              classID: user.classID ?? "",
              assessmentID: user.assessmentID ?? "",
              score: scores[s.id] ?? 0,
            },
          },
        })
      )
    );

    alert("Grades submitted!");
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Enter Grades
      </Typography>

      <RequireRole roles={["Admin", "Teacher"]}>
        <form onSubmit={handleSubmit}>
          {students.map((s) => (
            <Box key={s.id} sx={{ mb: 2 }}>
              <Typography>{s.name}</Typography>
              <TextField
                type="number"
                value={scores[s.id] ?? ""}
                onChange={(e) =>
                  setScores({
                    ...scores,
                    [s.id]: parseFloat(e.target.value) || 0,
                  })
                }
              />
            </Box>
          ))}
          <Button type="submit" variant="contained">
            Save Grades
          </Button>
        </form>
      </RequireRole>
    </Box>
  );
};

export default GradeEntryForm;
