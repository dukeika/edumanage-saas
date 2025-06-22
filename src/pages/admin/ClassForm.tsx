import React, { useState } from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import { generateClient } from "aws-amplify/api";
import { createClass } from "../../graphql/mutations";

const client = generateClient();

const ClassForm = ({ schoolID }: { schoolID: string }) => {
  const [className, setClassName] = useState("");
  const [teacherID, setTeacherID] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async () => {
    try {
      const input = { name: className, schoolID, teacherID };
      const response = await client.graphql({
        query: createClass,
        variables: { input },
      });
      setSuccess(`Class "${response.data.createClass.name}" created!`);
      setClassName("");
      setTeacherID("");
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6">Create Class & Assign Teacher</Typography>
      <Paper sx={{ mt: 2, p: 3 }}>
        <TextField
          label="Class Name (e.g., JSS1A)"
          fullWidth
          value={className}
          onChange={(e) => setClassName(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Teacher ID (Cognito User ID)"
          fullWidth
          value={teacherID}
          onChange={(e) => setTeacherID(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Create Class
        </Button>
        {success && (
          <Typography sx={{ mt: 2 }} color="green">
            {success}
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default ClassForm;
