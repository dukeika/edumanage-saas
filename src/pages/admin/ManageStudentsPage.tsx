import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const ManageStudentsPage: React.FC = () => (
  <Paper sx={{ p: 4 }}>
    <Typography variant="h6" gutterBottom>
      Manage Students
    </Typography>
    <Box component="form" sx={{ display: "flex", gap: 2, mb: 2 }}>
      <TextField label="Student Name" size="small" />
      <TextField label="Email" size="small" />
      <Button variant="contained" color="primary">
        Add Student
      </Button>
    </Box>
    {/* Table/List of students goes here */}
    <Typography color="text.secondary">Student list (placeholder)</Typography>
  </Paper>
);

export default ManageStudentsPage;
