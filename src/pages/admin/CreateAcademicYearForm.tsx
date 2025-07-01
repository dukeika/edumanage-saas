// src/pages/admin/CreateAcademicYearForm.tsx
import React, { useState } from "react";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { generateClient } from "aws-amplify/api";
import { customCreateAcademicYear } from "../../graphql/customMutations";

const client = generateClient();

const CreateAcademicYearForm: React.FC = () => {
  // Track year label and schoolID in state!
  const [yearLabel, setYearLabel] = useState("");
  const [schoolID, setSchoolID] = useState(""); // or prefill from context/session
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      // Check your state is not empty
      if (!yearLabel || !schoolID) {
        alert("Please enter all fields");
        setSaving(false);
        return;
      }

      const result = await client.graphql({
        query: customCreateAcademicYear,
        variables: { input: { yearLabel, schoolID } },
        authMode: "userPool",
      });

      console.log("GraphQL result:", result);
      alert("Academic year created!");
      setYearLabel("");
      setSchoolID("");
    } catch (error: any) {
      // Print out error for debugging
      console.error("CreateAcademicYear ERROR:", error, JSON.stringify(error));
      alert(
        "Error: " +
          (error?.errors?.[0]?.message ||
            error.message ||
            JSON.stringify(error))
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <Paper sx={{ maxWidth: 400, margin: "auto", p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Create Academic Year
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Academic Year Label"
          value={yearLabel}
          onChange={(e) => setYearLabel(e.target.value)}
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
          {saving ? "Saving..." : "Create"}
        </Button>
      </form>
    </Paper>
  );
};

export default CreateAcademicYearForm;
