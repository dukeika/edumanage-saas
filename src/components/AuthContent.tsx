// src/components/AuthContent.tsx
import React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";

interface AuthContentProps {
  children: React.ReactNode;
  signOut: () => Promise<void>;
}

const AuthContent: React.FC<AuthContentProps> = ({ children, signOut }) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {/* Top bar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">My App</Typography>
        </Toolbar>
      </AppBar>

      {/* Main content */}
      <Box component="main" flexGrow={1} p={2}>
        {children}
      </Box>

      {/* Footer with Sign Out */}
      <Box
        component="footer"
        p={2}
        textAlign="center"
        bgcolor="background.paper"
        boxShadow={3}
      >
        <Button variant="contained" color="secondary" onClick={signOut}>
          Sign Out
        </Button>
      </Box>
    </Box>
  );
};

export default AuthContent;
