// src/components/AuthContent.tsx
import React from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import RedirectOnSignOut from "./RedirectOnSignOut";
import AppRoutes from "../routes/AppRoutes";
import { Box, Button } from "@mui/material";

export default function AuthContent() {
  const { route, user, signOut } = useAuthenticator((ctx) => [
    ctx.route,
    ctx.user,
    ctx.signOut,
  ]);

  // Let Amplify UI handle all pre-auth screens; only render once fully signed in:
  if (route !== "authenticated" || !user) {
    return null;
  }

  return (
    <>
      <RedirectOnSignOut />
      <AppRoutes />
      <Box sx={{ position: "fixed", bottom: 16, right: 16 }}>
        <Button variant="contained" onClick={signOut}>
          Sign Out
        </Button>
      </Box>
    </>
  );
}
