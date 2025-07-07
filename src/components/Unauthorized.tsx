// src/components/Unauthorized.tsx
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Unauthorized: React.FC = () => {
  const nav = useNavigate();
  return (
    <Box textAlign="center" mt={10}>
      <Typography variant="h4" gutterBottom>
        Unauthorized
      </Typography>
      <Typography>You don’t have permission to view this page.</Typography>
      <Button variant="contained" sx={{ mt: 2 }} onClick={() => nav(-1)}>
        Go Back
      </Button>
    </Box>
  );
};

export default Unauthorized;
