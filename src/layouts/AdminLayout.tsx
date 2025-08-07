// src/layouts/AdminLayout.tsx
import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import RoleSidebar, { SidebarLink } from "../components/RoleSidebar";
import TopNavbar from "../components/TopNavbar";
import { useCurrentUser } from "../hooks/useCurrentUser";

const adminLinks: SidebarLink[] = [
  { to: "/admin", label: "Dashboard" },
  { to: "/admin/students", label: "Students" },
  { to: "/admin/parents", label: "Parents" }, // Added Parents tab
  { to: "/admin/teachers", label: "Teachers" },
  { to: "/admin/classes", label: "Classes" },
  { to: "/admin/announcements", label: "Announcements" },
  { to: "/admin/reports", label: "Reports" },
  // ...add more as needed
];

const AdminLayout: React.FC = () => {
  const { user } = useCurrentUser();
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <RoleSidebar title="Admin" links={adminLinks} />
      <Box
        sx={{ flex: 1, ml: "240px", bgcolor: "#f1f5f9", minHeight: "100vh" }}
      >
        <TopNavbar />
        <Box sx={{ p: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLayout;
