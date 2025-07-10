import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const AssignAdminPage: React.FC = () => (
  <Paper sx={{ p: 4 }}>
    <Typography variant="h6" fontWeight="bold">
      Assign School Admin
    </Typography>
    <Typography>Form to assign an admin to a school will go here.</Typography>
  </Paper>
);

export default AssignAdminPage;
