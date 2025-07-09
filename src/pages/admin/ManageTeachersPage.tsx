import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const ManageTeachersPage: React.FC = () => (
  <Paper sx={{ p: 4 }}>
    <Typography variant="h6" gutterBottom>
      Manage Teachers
    </Typography>
    <Box component="form" sx={{ display: "flex", gap: 2, mb: 2 }}>
      <TextField label="Teacher Name" size="small" />
      <TextField label="Email" size="small" />
      <Button variant="contained" color="primary">
        Add Teacher
      </Button>
    </Box>
    {/* Table/List of teachers goes here */}
    <Typography color="text.secondary">Teacher list (placeholder)</Typography>
  </Paper>
);

export default ManageTeachersPage;
