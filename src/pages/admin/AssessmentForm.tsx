// src/pages/admin/AssessmentForm.tsx
import React, { useState } from "react";
import { TextField, Button, Paper, Box, Typography } from "@mui/material";
import { generateClient } from "aws-amplify/api";
import { customCreateAssessment } from "../../graphql/customMutations";
import { useCurrentUser } from "../../utils/useCurrentUser";

const client = generateClient();

type AssessmentFormProps = {
  classID: string;
  subjectID: string;
  termID: string;
};

const AssessmentForm: React.FC<AssessmentFormProps> = ({
  classID,
  subjectID,
  termID,
}) => {
  const [title, setTitle] = useState("");
  const [assessmentDate, setAssessmentDate] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result = await client.graphql({
        query: customCreateAssessment,
        variables: {
          input: {
            title,
            assessmentDate,
            classID,
            subjectID,
            termID,
          },
        },
      });

      console.log("✅ Assessment created:", result);
      alert("Assessment created successfully");
      setTitle("");
      setAssessmentDate("");
    } catch (error) {
      console.error("❌ Error creating assessment:", error);
    }
  };

  return (
    <Paper sx={{ p: 4, mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Create Assessment
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        display="flex"
        flexDirection="column"
        gap={2}
      >
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <TextField
          label="Assessment Date"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={assessmentDate}
          onChange={(e) => setAssessmentDate(e.target.value)}
          required
        />
        <Button type="submit" variant="contained">
          Create
        </Button>
      </Box>
    </Paper>
  );
};

export default AssessmentForm;
