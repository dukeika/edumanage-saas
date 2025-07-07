// src/components/RoleBasedRedirect.tsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useCurrentUser } from "../utils/useCurrentUser";
import { Box, CircularProgress } from "@mui/material";

const RoleBasedRedirect: React.FC = () => {
  const { user, loading } = useCurrentUser();
  
  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <CircularProgress />
      </Box>
    );
  }
  
  if (!user) {
    // If not authenticated, the Authenticator component will handle this
    return null;
  }
  
  const role = user.userRole?.toLowerCase();
  switch (role) {
    case "admin":
      return <Navigate to="/admin" replace />;
    case "teacher":
      return <Navigate to="/teacher" replace />;
    case "student":
      return <Navigate to="/student" replace />;
    case "parent":
      return <Navigate to="/parent" replace />;
    default:
      return <Navigate to="/unauthorized" replace />;
  }
};

export default RoleBasedRedirect;