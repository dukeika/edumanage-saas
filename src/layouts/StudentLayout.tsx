import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SignOutButton from "../components/SignOutButton";
const StudentDashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Box
        sx={{
          width: "250px",
          bgcolor: "background.paper",
          p: 2,
          borderRight: "1px solid #ccc",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Student Dashboard
        </Typography>
        <Stack spacing={1}>
          <Button onClick={() => navigate("view-grades")} variant="outlined">
            View Grades
          </Button>
          <Button
            onClick={() => navigate("view-attendance")}
            variant="outlined"
          >
            View Attendance
          </Button>
        </Stack>

        <Box sx={{ mt: 3 }}>
          <SignOutButton />
        </Box>
      </Box>

      {/* Main Content */}
      <Box sx={{ flex: 1, p: 4 }}>
        <Typography variant="h4">Welcome, Student!</Typography>
        <Typography>Select an action from the menu.</Typography>
      </Box>
    </Box>
  );
};

export default StudentDashboard;
