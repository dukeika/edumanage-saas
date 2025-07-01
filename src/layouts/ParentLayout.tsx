import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SignOutButton from "../components/SignOutButton";
const ParentDashboard: React.FC = () => {
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
          Parent Dashboard
        </Typography>
        <Stack spacing={1}>
          <Button onClick={() => navigate("child-progress")} variant="outlined">
            Child Progress
          </Button>
          <Button onClick={() => navigate("announcements")} variant="outlined">
            Announcements
          </Button>
        </Stack>

        <Box sx={{ mt: 3 }}>
          <SignOutButton />
        </Box>
      </Box>

      {/* Main Content */}
      <Box sx={{ flex: 1, p: 4 }}>
        <Typography variant="h4">Welcome, Parent!</Typography>
        <Typography>Select an action from the menu.</Typography>
      </Box>
    </Box>
  );
};

export default ParentDashboard;
