import React from "react";
import { Box, Button, Typography, Stack } from "@mui/material";
import { useNavigate, Outlet } from "react-router-dom";

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Box
        sx={{
          width: 250,
          bgcolor: "background.paper",
          p: 2,
          borderRight: "1px solid #ccc",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Admin Dashboard
        </Typography>
        <Stack spacing={1}>
          <Button
            onClick={() => navigate("/admin/create-school")}
            variant="outlined"
          >
            Create School
          </Button>
          <Button
            onClick={() => navigate("/admin/create-academic-year")}
            variant="outlined"
          >
            Create Academic Year
          </Button>
          <Button
            onClick={() => navigate("/admin/create-term")}
            variant="outlined"
          >
            Create Term
          </Button>
          <Button
            onClick={() => navigate("/admin/create-class")}
            variant="outlined"
          >
            Create Class
          </Button>
          <Button
            onClick={() => navigate("/admin/add-subject")}
            variant="outlined"
          >
            Add Subject
          </Button>
          <Button
            onClick={() => navigate("/admin/add-student")}
            variant="outlined"
          >
            Add Student
          </Button>
          <Button
            onClick={() => navigate("/admin/add-assessment")}
            variant="outlined"
          >
            Add Assessment
          </Button>
          <Button
            onClick={() => navigate("/admin/add-grade")}
            variant="outlined"
          >
            Add Grade
          </Button>
          <Button
            onClick={() => navigate("/admin/add-attendance")}
            variant="outlined"
          >
            Add Attendance
          </Button>
          <Button
            onClick={() => navigate("/admin/add-announcement")}
            variant="outlined"
          >
            Add Announcement
          </Button>
          <Button
            onClick={() => navigate("/admin/list-students")}
            variant="outlined"
          >
            List Students
          </Button>
          <Button
            onClick={() => navigate("/admin/list-teachers")}
            variant="outlined"
          >
            List Teachers
          </Button>
          <Button
            onClick={() => navigate("/admin/list-classes")}
            variant="outlined"
          >
            List Classes
          </Button>
          <Button
            onClick={() => navigate("/admin/list-parents")}
            variant="outlined"
          >
            List Parents
          </Button>
        </Stack>
      </Box>

      {/* Main Content */}
      <Box sx={{ flex: 1, p: 4 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminDashboard;
