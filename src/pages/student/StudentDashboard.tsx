import React from "react";
import { Box, Typography } from "@mui/material";
import SignOutButton from "../../components/SignOutButton"; // Adjust the import path as necessary

const StudentDashboard: React.FC = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4">Student Dashboard</Typography>
      <Box sx={{ mt: 3 }}>
        <SignOutButton />
      </Box>
    </Box>
  );
};

export default StudentDashboard;
