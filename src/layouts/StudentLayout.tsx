import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import RoleSidebar, { SidebarLink } from "../components/RoleSidebar";
import TopNavbar from "../components/TopNavbar";

const studentLinks: SidebarLink[] = [
  { to: "/student", label: "Dashboard" },
  { to: "/student/announcements", label: "Announcements" },
  { to: "/student/attendance-history", label: "Attendance History" },
  // Add more as needed
];

const StudentLayout: React.FC = () => (
  <Box sx={{ display: "flex", minHeight: "100vh" }}>
    <RoleSidebar title="Student" links={studentLinks} />
    <Box sx={{ flex: 1, ml: "240px", bgcolor: "#f1f5f9", minHeight: "100vh" }}>
      <TopNavbar />
      <Box sx={{ p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  </Box>
);

export default StudentLayout;
