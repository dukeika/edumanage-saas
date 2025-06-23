import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import AcademicYearForm from "./AcademicYearForm";
import TermForm from "./TermForm";
import ClassForm from "./ClassForm";
import ClassList from "./ClassList";
import SubjectForm from "./SubjectForm";
import AssessmentForm from "./AssessmentForm";
import GradeEntryForm from "./GradeEntryForm";

const AdminSetupPage: React.FC = () => {
  const [schoolID, setSchoolID] = useState("demo-school-id");
  const [classID, setClassID] = useState("demo-class-id");
  const [subjectID, setSubjectID] = useState("demo-subject-id");
  const [termID, setTermID] = useState("demo-term-id");
  const [assessmentID, setAssessmentID] = useState("demo-assessment-id");

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Admin Setup Panel
      </Typography>

      <AcademicYearForm schoolID={schoolID} />
      <TermForm academicYearID={termID} />
      <ClassForm schoolID={schoolID} />
      <ClassList schoolID={schoolID} />

      <SubjectForm classID={classID} />
      <AssessmentForm classID={classID} subjectID={subjectID} termID={termID} />
      <GradeEntryForm classID={classID} assessmentID={assessmentID} />
    </Container>
  );
};

export default AdminSetupPage;
