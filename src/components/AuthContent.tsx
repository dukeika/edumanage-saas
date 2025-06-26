import React, { useEffect } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import AppRoutes from "../routes/AppRoutes";
import { useCurrentUser } from "../utils/useCurrentUser";
import { Button } from "@mui/material";

const AuthContent: React.FC = () => {
  const { signOut } = useAuthenticator();
  const { user, loading } = useCurrentUser();
  const navigate = useNavigate();

  // Imperative redirect once we know the role
  useEffect(() => {
    if (user) {
      const role = user.userRole?.toLowerCase();
      navigate(`/${role}`, { replace: true });
    }
  }, [user, navigate]);

  // Before we know the token or before sign-in, render nothing
  if (loading || !user) {
    return null;
  }

  return (
    <>
      <AppRoutes />
      <div style={{ position: "fixed", bottom: 16, right: 16 }}>
        <Button variant="contained" onClick={() => signOut?.()}>
          Sign Out
        </Button>
      </div>
    </>
  );
};

export default AuthContent;
