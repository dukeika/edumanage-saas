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
    return <div>Loading...</div>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  const userGroups = (user.groups ?? []).map((g) => g.toLowerCase());
  const normalizedAllowedRoles = allowedRoles.map((r) => r.toLowerCase());
  const hasRequiredRole = normalizedAllowedRoles.some((role) =>
    userGroups.includes(role)
  );
  if (!hasRequiredRole) {
    return <Navigate to="/unauthorized" replace />;
  }
  return <>{children}</>;
};

export default RequireAuth;
