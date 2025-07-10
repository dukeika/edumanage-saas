import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const AppAdminSchoolsPage: React.FC = () => (
  <Paper sx={{ p: 4 }}>
    <Typography variant="h6" fontWeight="bold">
      All Schools
    </Typography>
    <Typography>
      List, search, and manage all registered schools here.
    </Typography>
  </Paper>
);

export default AppAdminSchoolsPage;
