import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const ParentDashboard = () => (
  <Box sx={{ p: 4 }}>
    <Typography variant="h4">Parent Dashboard</Typography>
    <Paper sx={{ mt: 2, p: 3 }}>
      <Typography>
        Welcome, Parent. Track your child's progress, fees, and announcements
        here.
      </Typography>
    </Paper>
  </Box>
);

export default ParentDashboard;
