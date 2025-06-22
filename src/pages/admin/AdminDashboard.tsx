import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const AdminDashboard = () => (
  <Box sx={{ p: 4 }}>
    <Typography variant="h4">Admin Dashboard</Typography>
    <Paper sx={{ mt: 2, p: 3 }}>
      <Typography>
        Welcome, Admin. Here you’ll manage users, classes, fees, and
        announcements.
      </Typography>
    </Paper>
  </Box>
);

export default AdminDashboard;
