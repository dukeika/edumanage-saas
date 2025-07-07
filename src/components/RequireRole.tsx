import React from "react";
import { useCognitoAttributes } from "../utils/useCognitoAttributes";

export interface RequireRoleProps {
  roles: string[];
  fallback?: React.ReactNode;
  children: React.ReactNode;
}

const RequireRole: React.FC<RequireRoleProps> = ({
  roles,
  fallback = null,
  children,
}) => {
  const { attributes, loading } = useCognitoAttributes();
  if (loading) return null;

  const userRole = attributes["custom:userRole"];
  if (!userRole || !roles.includes(userRole)) {
    return <>{fallback}</>;
  }
  return <>{children}</>;
};

export default RequireRole;
