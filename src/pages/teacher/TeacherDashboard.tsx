import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const TeacherDashboard: React.FC = () => (
  <Paper sx={{ p: 4 }}>
    <Typography variant="h6" gutterBottom>
      Teacher Dashboard
    </Typography>
    <Box>
      <Typography color="text.secondary">
        Quick stats and today’s classes (placeholder)
      </Typography>
    </Box>
  </Paper>
);

export default TeacherDashboard;
