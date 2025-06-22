import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const StudentDashboard = () => (
  <Box sx={{ p: 4 }}>
    <Typography variant="h4">Student Dashboard</Typography>
    <Paper sx={{ mt: 2, p: 3 }}>
      <Typography>
        Welcome, Student. View your attendance, announcements, and fee status
        here.
      </Typography>
    </Paper>
  </Box>
);

export default StudentDashboard;
