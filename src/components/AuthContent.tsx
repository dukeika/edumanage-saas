import React from "react";
import { Button } from "@mui/material";
import { useAuthenticator } from "@aws-amplify/ui-react";
import AppRoutes from "../routes/AppRoutes";

interface AuthContentProps {
  // no extra props needed here
}

const AuthContent: React.FC<AuthContentProps> = () => {
  const { signOut, user } = useAuthenticator();

  // pass both through to your routes
  return (
    <>
      <AppRoutes user={user!} signOut={signOut!} />
      <div style={{ position: "fixed", bottom: 16, right: 16 }}>
        <Button variant="contained" onClick={() => signOut?.()}>
          Sign Out
        </Button>
      </div>
    </>
  );
};

export default AuthContent;
