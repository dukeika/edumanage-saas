import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { signOut } from "aws-amplify/auth";
// ...
<button onClick={() => signOut().then(() => window.location.replace("/"))}>
  Logout
</button>;

const StudentDashboard: React.FC = () => (
  <Paper sx={{ p: 4 }}>
    <Typography variant="h6" gutterBottom>
      Student Dashboard
    </Typography>
    <Box>
      <Typography color="text.secondary">
        Upcoming classes, attendance history, and notifications (placeholder)
      </Typography>
    </Box>
  </Paper>
);

export default StudentDashboard;
