import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const AppAdminDashboard: React.FC = () => (
  <Paper sx={{ p: 4 }}>
    <Typography variant="h5" fontWeight="bold">
      Super Admin Dashboard
    </Typography>
    <Typography variant="body1">
      System overview, school signups, and quick stats go here.
    </Typography>
  </Paper>
);

export default AppAdminDashboard;
