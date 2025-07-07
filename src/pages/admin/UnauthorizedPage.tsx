// src/pages/UnauthorizedPage.tsx
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const UnauthorizedPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        p: 2,
      }}
    >
      <Typography variant="h3" gutterBottom>
        🚫 Unauthorized
      </Typography>
      <Typography variant="body1" gutterBottom>
        You don’t have permission to view this page.
      </Typography>
      <Button
        variant="contained"
        onClick={() => navigate(-1)} // ← this goes back one entry in history
        sx={{ mt: 3 }}
      >
        Go Back
      </Button>
    </Box>
  );
};

export default UnauthorizedPage;
