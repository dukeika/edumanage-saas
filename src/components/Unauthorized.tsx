import React from "react";
import { Box, Typography } from "@mui/material";
import SignOutButton from "./SignOutButton";

const Unauthorized: React.FC = () => (
  <Box sx={{ textAlign: "center", mt: 8 }}>
    <Typography variant="h2" color="error">
      🚫 Unauthorized
    </Typography>
    <Typography variant="body1" sx={{ mt: 2, mb: 4 }}>
      You don’t have permission to view that page.
    </Typography>
    <SignOutButton />
  </Box>
);

export default Unauthorized;
