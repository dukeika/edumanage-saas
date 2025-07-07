// src/components/ProtectedRoute.tsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthenticator } from "@aws-amplify/ui-react";

interface ProtectedRouteProps {
  allowedRoles: string[];
  children: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  allowedRoles,
  children,
}) => {
  // grab Amplify UI context
  const { route, user } = useAuthenticator((ctx) => [ctx.route, ctx.user]);
  const location = useLocation();

  // still loading/signing in?
  if (route !== "authenticated") return null;

  // pull the custom:userRole claim
  const userRole = (user as any)?.attributes?.["custom:userRole"];

  if (!userRole || !allowedRoles.includes(userRole)) {
    // not allowed → kick to /unauthorized
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  }

  // allowed
  return children;
};

export default ProtectedRoute;
