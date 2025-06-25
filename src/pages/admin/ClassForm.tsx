// src/pages/admin/ClassForm.tsx
import React, { useState } from "react";
import { TextField, Button, Paper, Box, Typography } from "@mui/material";
import { generateClient } from "aws-amplify/api";
import { customCreateClass } from "../../graphql/customMutations"; // ✅ custom mutation

const client = generateClient();

type ClassFormProps = {
  schoolID: string;
};

const ClassForm = ({ schoolID }: ClassFormProps) => {
  const [name, setName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!schoolID) {
      alert("Missing schoolID");
      return;
    }

    try {
      const result = await client.graphql({
        query: customCreateClass, // ✅ use safe mutation
        variables: {
          input: {
            name,
            schoolID,
          },
        },
      });

      console.log("✅ Created class result:", result);
      alert("Class Created");
      setName("");
    } catch (err) {
      console.error("❌ Error creating class:", err);
      alert("Error creating class");
    }
  };

  return (
    <Paper elevation={2} sx={{ p: 3 }}>
      <Typography variant="h6">Create Class</Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Class Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
        />
        <Button type="submit" variant="contained">
          Create
        </Button>
      </Box>
    </Paper>
  );
};

export default ClassForm;
