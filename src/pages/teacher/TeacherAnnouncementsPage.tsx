import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const TeacherAnnouncementsPage: React.FC = () => (
  <Paper sx={{ p: 4 }}>
    <Typography variant="h6" gutterBottom>
      Announcements
    </Typography>
    <Box component="form" sx={{ display: "flex", gap: 2, mb: 2 }}>
      <TextField label="Title" size="small" />
      <TextField
        label="Message"
        size="small"
        multiline
        rows={2}
        sx={{ flex: 1 }}
      />
      <Button variant="contained" color="primary">
        Post
      </Button>
    </Box>
    <Typography color="text.secondary">
      Announcement feed (placeholder)
    </Typography>
  </Paper>
);

export default TeacherAnnouncementsPage;
