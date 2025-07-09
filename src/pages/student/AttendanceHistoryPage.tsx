import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const AttendanceHistoryPage: React.FC = () => (
  <Paper sx={{ p: 4 }}>
    <Typography variant="h6" gutterBottom>
      Attendance History
    </Typography>
    <Typography color="text.secondary">
      Attendance records and stats (placeholder)
    </Typography>
  </Paper>
);

export default AttendanceHistoryPage;
