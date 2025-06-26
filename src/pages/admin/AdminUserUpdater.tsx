// src/pages/admin/AdminUserUpdater.tsx
import React, { useState } from "react";
import { Paper, TextField, Button, Typography, Box } from "@mui/material";

const AdminUserUpdater = () => {
  const [email, setEmail] = useState("");
  const [classID, setClassID] = useState("");
  const [assessmentID, setAssessmentID] = useState("");

  const handleUpdate = async () => {
    try {
      const res = await fetch("/admin/update-user-attributes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          updates: {
            classID,
            assessmentID,
          },
        }),
      });

      const data = await res.json();
      alert(data.message || "✅ Update complete");
    } catch (err) {
      alert("❌ Update failed");
      console.error(err);
    }
  };

  return (
    <Paper sx={{ p: 4, mt: 2 }}>
      <Typography variant="h6" gutterBottom>
        Admin: Set Cognito User Attributes
      </Typography>
      <Box display="flex" flexDirection="column" gap={2}>
        <TextField
          label="User Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="classID"
          value={classID}
          onChange={(e) => setClassID(e.target.value)}
        />
        <TextField
          label="assessmentID"
          value={assessmentID}
          onChange={(e) => setAssessmentID(e.target.value)}
        />
        <Button variant="contained" onClick={handleUpdate}>
          Update User
        </Button>
      </Box>
    </Paper>
  );
};

export default AdminUserUpdater;
