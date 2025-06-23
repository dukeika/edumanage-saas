// src/pages/admin/ClassForm.tsx
import React, { useState } from "react";
import { TextField, Button, Paper, Box, Typography } from "@mui/material";
import { createClass } from "../../graphql/mutations";
import { generateClient } from "aws-amplify/api";
import { useCurrentUser } from "../../utils/useCurrentUser";

const client = generateClient();

type ClassFormProps = {
  schoolID: string;
};

const ClassForm = ({ schoolID }: ClassFormProps) => {
  const { user, loading } = useCurrentUser();
  const [name, setName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user?.schoolID) return alert("Missing schoolID");

    try {
      await client.graphql({
        query: createClass,
        variables: {
          input: {
            name,
            schoolID: user.schoolID,
          },
        },
      });
      setName("");
      alert("Class Created");
    } catch (err) {
      console.error("Error creating class:", err);
    }
  };

  if (loading) return <p>Loading user...</p>;

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
