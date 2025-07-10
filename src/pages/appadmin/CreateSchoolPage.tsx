import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const CreateSchoolPage: React.FC = () => (
  <Paper sx={{ p: 4 }}>
    <Typography variant="h6" fontWeight="bold">
      Create a New School
    </Typography>
    <Typography>School creation form will go here.</Typography>
  </Paper>
);

export default CreateSchoolPage;
