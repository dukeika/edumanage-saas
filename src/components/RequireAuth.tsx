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
  console.log("RequireAuth: allowedRoles", allowedRoles);
  console.log("RequireAuth: user", user);

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

  // 3) Normalize for comparison
  const normalizedAllowed = allowedRoles.map((r) => r.toLowerCase());

  // Match on userRole (custom attr) or any Cognito group (all lowercased)
  const roleMatch =
    user.userRole && normalizedAllowed.includes(user.userRole.toLowerCase());
  const groupMatch =
    Array.isArray(user.groups) &&
    user.groups
      .map((g: string) => g.toLowerCase())
      .some((g) => normalizedAllowed.includes(g));

  if (!roleMatch && !groupMatch) {
    // 4) Signed in, but not authorized
    return <Navigate to="/unauthorized" replace />;
  }

  // 5) Authorized!
  return <>{children}</>;
};

export default RequireAuth;
