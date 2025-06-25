// src/pages/admin/SubjectForm.tsx
import React, { useState } from "react";
import { TextField, Button, Paper, Typography, Box } from "@mui/material";
import { generateClient } from "aws-amplify/api";
import { customCreateSubject } from "../../graphql/customMutations";

const client = generateClient();

type SubjectFormProps = {
  classID: string;
};

const SubjectForm: React.FC<SubjectFormProps> = ({ classID }) => {
  const [name, setName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!classID) {
      alert("❌ Class ID is missing.");
      return;
    }

    try {
      const result = await client.graphql({
        query: customCreateSubject,
        variables: {
          input: {
            name,
            classID,
          },
        },
      });

      console.log("✅ Subject created:", result);
      alert("Subject created successfully!");
      setName("");
    } catch (err) {
      console.error("❌ Error creating subject:", err);
      alert("Error creating subject");
    }
  };

  return (
    <Paper sx={{ p: 4, mt: 2 }}>
      <Typography variant="h6" gutterBottom>
        Add New Subject
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Subject Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
        />
        <Button type="submit" variant="contained">
          Create Subject
        </Button>
      </Box>
    </Paper>
  );
};

export default SubjectForm;
