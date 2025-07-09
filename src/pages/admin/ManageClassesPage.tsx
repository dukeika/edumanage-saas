import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const ManageClassesPage: React.FC = () => (
  <Paper sx={{ p: 4 }}>
    <Typography variant="h6" gutterBottom>
      Manage Classes
    </Typography>
    <Box component="form" sx={{ display: "flex", gap: 2, mb: 2 }}>
      <TextField label="Class Name" size="small" />
      <TextField label="Class Teacher" size="small" />
      <Button variant="contained" color="primary">
        Add Class
      </Button>
    </Box>
    {/* Table/List of classes goes here */}
    <Typography color="text.secondary">Class list (placeholder)</Typography>
  </Paper>
);

export default ManageClassesPage;
