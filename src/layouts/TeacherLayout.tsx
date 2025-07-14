import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import RoleSidebar, { SidebarLink } from "../components/RoleSidebar";
import TopNavbar from "../components/TopNavbar";

const teacherLinks: SidebarLink[] = [
  { to: "/teacher", label: "Dashboard" },
  { to: "/teacher/attendance", label: "Attendance" },
  { to: "/teacher/announcements", label: "Announcements" },
  // Add more as needed
];

const TeacherLayout: React.FC = () => (
  <Box sx={{ display: "flex", minHeight: "100vh" }}>
    <RoleSidebar title="Teacher" links={teacherLinks} />
    <Box sx={{ flex: 1, ml: "240px", bgcolor: "#f1f5f9", minHeight: "100vh" }}>
      <TopNavbar />
      <Box sx={{ p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  </Box>
);

export default TeacherLayout;
