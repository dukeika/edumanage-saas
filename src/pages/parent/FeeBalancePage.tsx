import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const FeeBalancePage: React.FC = () => (
  <Paper sx={{ p: 4 }}>
    <Typography variant="h6" gutterBottom>
      Fee Balance
    </Typography>
    <Typography color="text.secondary">
      Balance details and payment actions (placeholder)
    </Typography>
  </Paper>
);

export default FeeBalancePage;
