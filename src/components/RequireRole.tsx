import React from "react";
import { useCurrentUser } from "../hooks/useCurrentUser";

interface RequireRoleProps {
  roles: string[];
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const RequireRole: React.FC<RequireRoleProps> = ({
  roles,
  children,
  fallback = null,
}) => {
  const { user } = useCurrentUser();

  if (!user) return null;

  // Ensure userRole is defined before using includes
  return user.userRole && roles.includes(user.userRole) ? (
    <>{children}</>
  ) : (
    <>{fallback}</>
  );
};

export default RequireRole;
