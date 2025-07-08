// src/components/RequireAuth.tsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useCurrentUser } from "../utils/useCurrentUser";
import { Box, CircularProgress } from "@mui/material";

interface RequireAuthProps {
  allowedRoles: string[]; // e.g. ["admins"], ["teachers"], ["students"], ["parents"]
  children: React.ReactNode;
}

const RequireAuth: React.FC<RequireAuthProps> = ({
  allowedRoles,
  children,
}) => {
  const { user, loading } = useCurrentUser();
  const location = useLocation();

  // 1) Still checking auth status?
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

  // 2) Not signed in → bounce to login
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // 3) Normalize everything to lowercase for safe comparison
  const normalizedAllowed = allowedRoles.map((r) => r.toLowerCase());
  const roleMatch = normalizedAllowed.includes(user.userRole.toLowerCase());
  const groupMatch = user.groups?.some((g) =>
    normalizedAllowed.includes(g.toLowerCase())
  );

  // 4) Signed in but neither your custom:userRole nor any Cognito group matches
  if (!roleMatch && !groupMatch) {
    return <Navigate to="/unauthorized" replace />;
  }

  // 5) You’re good!
  return <>{children}</>;
};

export default RequireAuth;
