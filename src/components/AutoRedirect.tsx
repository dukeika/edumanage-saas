// src/components/AutoRedirect.tsx
import React from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Navigate } from "react-router-dom";

const AutoRedirect: React.FC = () => {
  const { route, user } = useAuthenticator((ctx) => [ctx.route, ctx.user]);

  // 1) Wait until the user is fully authenticated
  if (route !== "authenticated" || !user) {
    return null;
  }

  // 2) Pull your custom:userRole straight from user.attributes
  const rawRole = (user as any).attributes?.["custom:userRole"] || "";
  const role = rawRole.toString().toLowerCase();

  // 3) Navigate immediately to the correct dashboard
  switch (role) {
    case "admin":
      return <Navigate to="/admin" replace />;
    case "teacher":
      return <Navigate to="/teacher" replace />;
    case "student":
      return <Navigate to="/student" replace />;
    case "parent":
      return <Navigate to="/parent" replace />;
    default:
      // Fallback if the role is somehow missing or unexpected
      return <Navigate to="/unauthorized" replace />;
  }
};

export default AutoRedirect;
