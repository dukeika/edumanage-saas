import React from "react";
import { Box, Typography } from "@mui/material";
import SignOutButton from "../../components/SignOutButton"; // Adjust the import path as necessary

const TeacherDashboard: React.FC = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4">Teacher Dashboard</Typography>
      <Box sx={{ mt: 3 }}>
        <SignOutButton />
      </Box>
    </Box>
  );
};

export default TeacherDashboard;
