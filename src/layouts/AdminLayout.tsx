// src/layouts/AdminLayout.tsx
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Box, Typography, Stack, Button } from "@mui/material";
import { useAuthenticator } from "@aws-amplify/ui-react";

const AdminLayout: React.FC = () => {
  const nav = useNavigate();
  const { signOut } = useAuthenticator();

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Box
        sx={{
          width: 240,
          bgcolor: "background.paper",
          borderRight: 1,
          borderColor: "divider",
          p: 2,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Admin
        </Typography>
        <Stack spacing={1}>
          <Button onClick={() => nav("")}>Home</Button>
          <Button onClick={() => nav("create-school")}>Create School</Button>
          <Button onClick={() => nav("create-academic-year")}>
            Create Year
          </Button>
          <Button onClick={() => nav("create-term")}>Create Term</Button>
          <Button onClick={() => nav("create-class")}>Create Class</Button>
          <Button onClick={() => nav("add-subject")}>Add Subject</Button>
          <Button onClick={() => nav("add-student")}>Add Student</Button>
          <Button onClick={() => nav("add-assessment")}>Add Assessment</Button>
          <Button onClick={() => nav("add-grade")}>Add Grade</Button>
          <Button onClick={() => nav("add-attendance")}>Add Attendance</Button>
          <Button onClick={() => nav("add-announcement")}>
            Add Announcement
          </Button>
        </Stack>
        <Box sx={{ mt: 4 }}>
          <Button variant="contained" color="error" onClick={signOut}>
            Sign Out
          </Button>
        </Box>
      </Box>

      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminLayout;
