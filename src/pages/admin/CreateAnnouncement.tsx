// src/pages/admin/CreateAnnouncement.tsx
import React, { useState } from "react";
import { TextField, Button, Paper, Box, Typography } from "@mui/material";
import { createAnnouncement } from "../../graphql/mutations";
import { generateClient } from "aws-amplify/api";
import { useCurrentUser } from "../../utils/useCurrentUser";

const client = generateClient();

const CreateAnnouncement = () => {
  const { user, loading } = useCurrentUser();
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user?.schoolID || !user?.id) return;

    try {
      await client.graphql({
        query: createAnnouncement,
        variables: {
          input: {
            title,
            message,
            schoolID: user.schoolID,
            createdBy: user.id,
            createdAt: new Date().toISOString(),
          },
        },
      });
      alert("Announcement posted");
    } catch (err) {
      console.error("Error creating announcement:", err);
    }
  };

  if (loading) return <p>Loading user...</p>;

  return (
    <Paper elevation={2} sx={{ p: 3 }}>
      <Typography variant="h6">New Announcement</Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          multiline
          label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          margin="normal"
        />
        <Button type="submit" variant="contained">
          Post
        </Button>
      </Box>
    </Paper>
  );
};

export default CreateAnnouncement;
