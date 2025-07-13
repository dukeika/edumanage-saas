import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useCurrentUser } from "../hooks/useCurrentUser";

interface RequireAuthProps {
  allowedRoles: string[];
  children: React.ReactNode;
}

const RequireAuth: React.FC<RequireAuthProps> = ({
  allowedRoles,
  children,
}) => {
  const { user, loading } = useCurrentUser();
  const location = useLocation();

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
        <Typography variant="body1" sx={{ mt: 2 }}>
          Verifying permissions...
        </Typography>
      </Box>
    );
  }

  if (!user) {
    // Not signed in - redirect to login with return path
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Check groups and (optionally) userRole for access
  const userGroups = (user.groups ?? []).map((g) => g.toLowerCase());
  const userRole = user.userRole?.toLowerCase?.() || "";

  const normalizedAllowedRoles = allowedRoles.map((r) => r.toLowerCase());

  const hasRequiredRole =
    normalizedAllowedRoles.some((role) => userGroups.includes(role)) ||
    (userRole && normalizedAllowedRoles.includes(userRole));

  if (!hasRequiredRole) {
    // Signed in but doesn't have required role
    console.log(
      "Access denied. User groups:",
      userGroups,
      "UserRole:",
      userRole,
      "Required roles:",
      normalizedAllowedRoles
    );
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};

export default RequireAuth;
