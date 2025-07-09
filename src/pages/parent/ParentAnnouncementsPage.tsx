import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const ParentAnnouncementsPage: React.FC = () => (
  <Paper sx={{ p: 4 }}>
    <Typography variant="h6" gutterBottom>
      Announcements
    </Typography>
    <Typography color="text.secondary">
      Announcement feed (placeholder)
    </Typography>
  </Paper>
);

export default ParentAnnouncementsPage;
