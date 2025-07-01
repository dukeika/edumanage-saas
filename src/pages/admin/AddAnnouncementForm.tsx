// src/pages/admin/AddAnnouncementForm.tsx
import React, { useState } from "react";
import { Box, Button, TextField, Paper, Typography } from "@mui/material";
import { generateClient } from "aws-amplify/api";
import { customCreateAnnouncement } from "../../graphql/customMutations";

const client = generateClient();

const AddAnnouncementForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [schoolID, setSchoolID] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      if (!title || !message || !schoolID || !createdBy) {
        alert("All fields are required.");
        setSaving(false);
        return;
      }

      const result = await client.graphql({
        query: customCreateAnnouncement,
        variables: { input: { title, message, schoolID, createdBy } },
        authMode: "userPool",
      });

      console.log("Announcement created:", result);
      alert("Announcement posted!");
      setTitle("");
      setMessage("");
      setSchoolID("");
      setCreatedBy("");
    } catch (error: any) {
      // MUCH more useful error!
      console.error("AddAnnouncement ERROR:", error, JSON.stringify(error));
      alert(
        error?.errors?.[0]?.message ||
          error.message ||
          JSON.stringify(error, null, 2)
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <Paper sx={{ maxWidth: 480, margin: "auto", p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Add Announcement
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          multiline
          rows={4}
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
        <TextField
          label="Created By (User ID)"
          value={createdBy}
          onChange={(e) => setCreatedBy(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" fullWidth disabled={saving}>
          {saving ? "Saving..." : "Add Announcement"}
        </Button>
      </form>
    </Paper>
  );
};

export default AddAnnouncementForm;
