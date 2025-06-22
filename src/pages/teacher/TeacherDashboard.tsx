import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const TeacherDashboard = () => (
  <Box sx={{ p: 4 }}>
    <Typography variant="h4">Teacher Dashboard</Typography>
    <Paper sx={{ mt: 2, p: 3 }}>
      <Typography>
        Welcome, Teacher. You can mark attendance, post announcements, and view
        student info.
      </Typography>
    </Paper>
  </Box>
);

export default TeacherDashboard;
