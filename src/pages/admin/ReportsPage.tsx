import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const ReportsPage: React.FC = () => (
  <Paper sx={{ p: 4 }}>
    <Typography variant="h6" gutterBottom>
      Reports & Analytics
    </Typography>
    {/* Reports content goes here */}
    <Typography color="text.secondary">
      Reports and analytics content (placeholder)
    </Typography>
  </Paper>
);

export default ReportsPage;
