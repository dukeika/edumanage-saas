import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography, Paper, Container } from "@mui/material";
import { useCurrentUser } from "../hooks/useCurrentUser";

const HomePage: React.FC = () => {
  const { user, loading } = useCurrentUser();

  if (loading) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        }}
      >
        <Typography variant="h6" color="white">
          Loading...
        </Typography>
      </Box>
    );
  }

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
        <Paper
          sx={{
            p: 6,
            maxWidth: 600,
            textAlign: "center",
            boxShadow: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h2" gutterBottom color="primary">
            ClassPoint
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Your comprehensive school management solution
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Streamline your school operations with our multi-tenant platform
            designed for administrators, teachers, students, and parents.
          </Typography>

          {!user ? (
            <Button
              component={Link}
              to="/login"
              variant="contained"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: "1.1rem",
                borderRadius: 2,
              }}
            >
              Access Your Portal
            </Button>
          ) : (
            <Typography variant="body1" color="text.secondary">
              Welcome back! You will be redirected to your dashboard shortly...
            </Typography>
          )}

          <Box sx={{ mt: 4 }}>
            <Typography variant="body2" color="text.secondary">
              Need help? Contact your school administrator
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default HomePage;
