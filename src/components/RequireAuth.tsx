// src/components/RequireAuth.tsx
import { useAuthenticator } from "@aws-amplify/ui-react";
import React from "react";

const RequireAuth: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { authStatus } = useAuthenticator();

  if (authStatus !== "authenticated") {
    return <div>Redirecting to login...</div>;
  }

  return <>{children}</>;
};

export default RequireAuth;
