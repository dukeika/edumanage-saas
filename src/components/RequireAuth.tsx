import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useCurrentUser } from "../utils/useCurrentUser";

interface RequireAuthProps {
  allowedRoles: string[];
  children: ReactNode;
}

const RequireAuth: React.FC<RequireAuthProps> = ({
  allowedRoles,
  children,
}) => {
  const { user, loading } = useCurrentUser();
  if (loading) return <div>Checking authentication…</div>;
  if (!user) return <Navigate to="/" replace />;
  if (!allowedRoles.includes(user.userRole || "")) {
    return (
      <div style={{ padding: 20, textAlign: "center" }}>
        <h2>Unauthorized</h2>
        <p>You don’t have permission to view this page.</p>
      </div>
    );
  }
  return <>{children}</>;
};

export default RequireAuth;
