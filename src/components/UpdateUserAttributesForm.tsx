// src/components/UpdateUserAttributesForm.tsx
import React, { useState } from "react";
import { TextField, Button, Box, Typography, Paper, Grid } from "@mui/material";
import axios from "axios";

const UpdateUserAttributesForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [schoolID, setSchoolID] = useState("");
  const [classID, setClassID] = useState("");
  const [subjectID, setSubjectID] = useState("");
  const [termID, setTermID] = useState("");
  const [assessmentID, setAssessmentID] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://ftrdns136f.execute-api.eu-west-2.amazonaws.com/dev/updateuser",
        {
          email,
          updates: {
            schoolID,
            classID,
            subjectID,
            termID,
            assessmentID,
          },
        }
      );

      const resData = response.data as { message: string };
      setMessage(resData.message || "✅ Updated successfully");
    } catch (err: any) {
      console.error("❌ Error updating user:", err);
      setMessage(err.response?.data?.message || "❌ Error updating user");
    }
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Update Cognito User Attributes
      </Typography>
      <Box display="flex" flexDirection="column" gap={2}>
        <TextField
          label="User Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="School ID"
          value={schoolID}
          onChange={(e) => setSchoolID(e.target.value)}
        />
        <TextField
          label="Class ID"
          value={classID}
          onChange={(e) => setClassID(e.target.value)}
        />
        <TextField
          label="Subject ID"
          value={subjectID}
          onChange={(e) => setSubjectID(e.target.value)}
        />
        <TextField
          label="Term ID"
          value={termID}
          onChange={(e) => setTermID(e.target.value)}
        />
        <TextField
          label="Assessment ID"
          value={assessmentID}
          onChange={(e) => setAssessmentID(e.target.value)}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Update User
        </Button>
        {message && (
          <Typography
            variant="body2"
            color={message.startsWith("✅") ? "green" : "error"}
          >
            {message}
          </Typography>
        )}
      </Box>
    </Paper>
  );
};

export default UpdateUserAttributesForm;
