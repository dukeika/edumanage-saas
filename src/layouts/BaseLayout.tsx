// src/layouts/BaseLayout.tsx (Common layout component)
import React from "react";
import { Outlet } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
} from "@mui/material";
import { signOut } from "aws-amplify/auth";
import { useCurrentUser } from "../hooks/useCurrentUser";

interface BaseLayoutProps {
  title: string;
  children?: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ title, children }) => {
  const { user } = useCurrentUser();

  const handleSignOut = async () => {
    try {
      await signOut();
      window.location.replace("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {/* Top Navigation */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ClassPoint - {title}
          </Typography>
          <Typography variant="body2" sx={{ mr: 2 }}>
            {user?.name || user?.email}
          </Typography>
          <Button color="inherit" onClick={handleSignOut}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container component="main" sx={{ flexGrow: 1, py: 3 }}>
        {children || <Outlet />}
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 2,
          px: 2,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Typography variant="body2" color="text.secondary" align="center">
          © 2025 ClassPoint. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default BaseLayout;
