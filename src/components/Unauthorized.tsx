// src/components/Unauthorized.tsx (Updated)
import React from "react";
import { Box, Typography, Button, Paper, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { useCurrentUser } from "../hooks/useCurrentUser";

const Unauthorized: React.FC = () => {
  const { user } = useCurrentUser();

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        }}
      >
        <Paper sx={{ p: 6, textAlign: "center", maxWidth: 500 }}>
          <Typography variant="h4" gutterBottom color="error">
            Access Denied
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }} color="text.secondary">
            {user
              ? "You don't have permission to access this page. Please contact your administrator if you believe this is an error."
              : "You need to be logged in to access this page."}
          </Typography>

          {user && (
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Your current role:{" "}
                {user.groups?.join(", ") || "No role assigned"}
              </Typography>
            </Box>
          )}

          <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
            <Button component={Link} to="/" variant="contained" color="primary">
              Go Home
            </Button>
            {!user && (
              <Button
                component={Link}
                to="/login"
                variant="outlined"
                color="primary"
              >
                Login
              </Button>
            )}
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Unauthorized;
