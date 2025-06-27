// src/pages/admin/UserManagementPage.tsx
import React from "react";
import { Box, Typography } from "@mui/material";
import RequireRole from "../../components/RequireRole";
import InviteUserForm from "../../components/InviteUserForm";

const UserManagementPage: React.FC = () => (
  <Box sx={{ p: 4 }}>
    <Typography variant="h4" gutterBottom>
      Manage Users
    </Typography>

    <RequireRole roles={["Admin"]}>
      <InviteUserForm />
    </RequireRole>
  </Box>
);

export default UserManagementPage;
