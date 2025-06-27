// src/components/RequireAuth.tsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useCurrentUser } from "../utils/useCurrentUser";

interface RequireAuthProps {
  allowedRoles: string[];
  children: React.ReactNode; // ← use React.ReactNode instead of JSX.Element
}

const RequireAuth: React.FC<RequireAuthProps> = ({
  allowedRoles,
  children,
}) => {
  const { user, loading } = useCurrentUser();
  const location = useLocation();

  if (loading) {
    // still checking auth—render nothing or a spinner if you prefer
    return null;
  }

  if (!user) {
    // not signed in
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!allowedRoles.includes(user.userRole || "")) {
    // signed in but wrong role
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};

export default RequireAuth;
