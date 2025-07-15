import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import RoleSidebar, { SidebarLink } from "../components/RoleSidebar";
import TopNavbar from "../components/TopNavbar";
import { useCurrentUser } from "../hooks/useCurrentUser";

const appAdminLinks: SidebarLink[] = [
  { to: "/app-admin", label: "Dashboard" },
  { to: "/app-admin/schools", label: "Schools" },
  { to: "/app-admin/users", label: "Users" },
  //{ to: "/app-admin/create-school", label: "Create School" },
  // { to: "/app-admin/assign-admin", label: "Assign Admin" },
];

const AppAdminLayout: React.FC = () => {
  const { user } = useCurrentUser();
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <RoleSidebar title="App Admin" links={appAdminLinks} />
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

export default AppAdminLayout;
