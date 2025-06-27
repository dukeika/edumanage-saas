// src/components/Unauthorized.tsx
import React from "react";
import { Box, Typography } from "@mui/material";

const Unauthorized: React.FC = () => (
  <Box sx={{ p: 4, textAlign: "center" }}>
    <Typography variant="h4" gutterBottom>
      Unauthorized
    </Typography>
    <Typography>You don’t have permission to view this page.</Typography>
  </Box>
);

export default Unauthorized;
