// src/components/AuthLayout.tsx
import React from "react";
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

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  const { user } = useCurrentUser();

  const handleSignOut = async () => {
    try {
      await signOut();
      window.location.replace("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const getRoleDisplayName = (groups: string[]) => {
    if (groups.includes("applicationadmins")) return "Application Admin";
    if (groups.includes("admins")) return "Admin";
    if (groups.includes("teachers")) return "Teacher";
    if (groups.includes("students")) return "Student";
    if (groups.includes("parents")) return "Parent";
    return "User";
  };

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      {/* Top Navigation */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ClassPoint - {getRoleDisplayName(user?.groups || [])}
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
        {children}
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

export default AuthLayout;
