import React from "react";
import { Container, Typography } from "@mui/material";
import AcademicYearForm from "./AcademicYearForm";
import TermForm from "./TermForm";
import ClassForm from "./ClassForm";
import ClassList from "./ClassList";

const AdminSetupPage = () => {
  const schoolID = "your-school-id"; // Replace this with dynamic value

  const academicYearID = "your-academic-year-id"; // For TermForm

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Admin Setup Panel
      </Typography>
      <AcademicYearForm schoolID={schoolID} />
      <TermForm academicYearID={academicYearID} />
      <ClassForm schoolID={schoolID} />
      <ClassList schoolID={schoolID} />
    </Container>
  );
};

export default AdminSetupPage;
