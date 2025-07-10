import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const AppAdminUsersPage: React.FC = () => (
  <Paper sx={{ p: 4 }}>
    <Typography variant="h6" fontWeight="bold">
      All Users
    </Typography>
    <Typography>
      View and manage all users, filter by role/school here.
    </Typography>
  </Paper>
);

export default AppAdminUsersPage;
