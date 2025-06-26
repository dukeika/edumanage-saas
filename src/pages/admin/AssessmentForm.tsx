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
      const result: any = await client.graphql({
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

      const assessment = result?.data?.createAssessment;

      if (assessment) {
        console.log("✅ Assessment created:", assessment);
        console.log("🆔 Assessment ID:", assessment.id); // <-- This is key!
        alert("Assessment created successfully!");
      } else {
        console.warn("⚠️ No assessment returned from mutation:", result);
        alert("Assessment created but no data was returned.");
      }

      setTitle("");
      setAssessmentDate("");
    } catch (error) {
      console.error("❌ Error creating assessment:", error);
      alert("Error creating assessment");
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
