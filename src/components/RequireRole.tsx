// src/components/RequireRole.tsx
import React from "react";
import { useCurrentUser } from "../utils/useCurrentUser";

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
  if (loading) return null;
  return roles.includes(user?.userRole || "") ? (
    <>{children}</>
  ) : (
    <>{fallback}</>
  );
};

export default RequireRole;
