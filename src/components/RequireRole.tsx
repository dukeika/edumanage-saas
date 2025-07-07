import React from "react";
import { useCurrentUser } from "../utils/useCurrentUser";
import { Box, CircularProgress } from "@mui/material";

interface RequireRoleProps {
  roles: string[];
  fallback?: React.ReactNode;
  children: React.ReactNode;
}

const RequireRole: React.FC<RequireRoleProps> = ({
  roles,
  fallback = null,
  children,
}) => {
  const { user, loading } = useCurrentUser();

  // Show loading indicator while checking authentication
  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <CircularProgress />
      </Box>
    );
  }

  // If not authenticated, the parent component should handle this
  if (!user) return null;

  return roles.includes(user.userRole) ? <>{children}</> : <>{fallback}</>;
};

export default RequireRole;
