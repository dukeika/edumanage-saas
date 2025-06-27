import React from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";

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
  const { user, route } = useAuthenticator((ctx) => [ctx.user, ctx.route]);

  // only render once fully signed in
  if (route !== "authenticated") return null;

  const role = (user as any).attributes["custom:userRole"];
  return roles.includes(role) ? <>{children}</> : <>{fallback}</>;
};

export default RequireRole;
