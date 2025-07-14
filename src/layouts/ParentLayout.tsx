import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import RoleSidebar, { SidebarLink } from "../components/RoleSidebar";
import TopNavbar from "../components/TopNavbar";

const parentLinks: SidebarLink[] = [
  { to: "/parent", label: "Dashboard" },
  { to: "/parent/announcements", label: "Announcements" },
  { to: "/parent/fee-balance", label: "Fee Balance" },
  // Add more as needed
];

const ParentLayout: React.FC = () => (
  <Box sx={{ display: "flex", minHeight: "100vh" }}>
    <RoleSidebar title="Parent" links={parentLinks} />
    <Box sx={{ flex: 1, ml: "240px", bgcolor: "#f1f5f9", minHeight: "100vh" }}>
      <TopNavbar />
      <Box sx={{ p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  </Box>
);

export default ParentLayout;
