// src/pages/admin/AddStudentForm.tsx
import React, { useState } from "react";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { generateClient } from "aws-amplify/api";
import { customCreateStudent } from "../../graphql/customMutations";

const client = generateClient();

const AddStudentForm: React.FC = () => {
  const [name, setName] = useState("");
  const [classID, setClassID] = useState("");
  const [schoolID, setSchoolID] = useState("");
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      if (!name || !classID || !schoolID) {
        alert("Please fill all fields.");
        setSaving(false);
        return;
      }

      const result = await client.graphql({
        query: customCreateStudent,
        variables: { input: { name, classID, schoolID } },
        authMode: "userPool",
      });

      console.log("Student created:", result);
      alert("Student created!");
      setName("");
      setClassID("");
      setSchoolID("");
    } catch (error: any) {
      // Show actual error!
      console.error("CreateStudent ERROR:", error, JSON.stringify(error));
      alert(
        error?.errors?.[0]?.message || error.message || JSON.stringify(error)
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <Paper sx={{ maxWidth: 400, margin: "auto", p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Add Student
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Student Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Class ID"
          value={classID}
          onChange={(e) => setClassID(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="School ID"
          value={schoolID}
          onChange={(e) => setSchoolID(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" fullWidth disabled={saving}>
          {saving ? "Saving..." : "Add Student"}
        </Button>
      </form>
    </Paper>
  );
};

export default AddStudentForm;
