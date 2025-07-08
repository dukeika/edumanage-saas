// src/components/RequireAuth.tsx

import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useCurrentUser } from "../utils/useCurrentUser";
import { Box, CircularProgress } from "@mui/material";

interface RequireAuthProps {
  allowedRoles: string[]; // e.g., ["admin"], ["teacher"], etc. (all lowercase)
  children: React.ReactNode;
}

const RequireAuth: React.FC<RequireAuthProps> = ({
  allowedRoles,
  children,
}) => {
  const { user, loading } = useCurrentUser();
  const location = useLocation();
  console.log("Full user in RequireAuth:", user);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (!user) {
    // Not signed in
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Normalize allowedRoles for safe matching
  const normalizedAllowedRoles = allowedRoles.map((r) => r.toLowerCase());

  // Check both Cognito Groups and custom:userRole
  const hasGroup = user.groups?.some((g) => normalizedAllowedRoles.includes(g));
  const hasRole = normalizedAllowedRoles.includes(user.userRole);

  if (!hasGroup && !hasRole) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};

export default RequireAuth;
