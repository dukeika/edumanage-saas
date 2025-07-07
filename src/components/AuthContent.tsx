import React from "react";
import { useCurrentUser } from "../utils/useCurrentUser";
import AppRoutes from "../routes/AppRoutes";
import { Box, Button, CircularProgress } from "@mui/material";

const AuthContent: React.FC = () => {
  const { user, loading, signOut } = useCurrentUser();

  // Show loading indicator while authentication is being checked
  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <CircularProgress />
      </Box>
    );
  }

  // If not authenticated, the Authenticator component will handle this
  if (!user) {
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
