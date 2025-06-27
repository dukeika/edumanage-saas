// src/pages/admin/AdminSetupPage.tsx
import React from "react";
import { Container } from "@mui/material";
import SubjectForm from "./SubjectForm";
import AssessmentForm from "./AssessmentForm";
import GradeEntryForm from "./GradeEntryForm";
import { useCurrentUser } from "../../utils/useCurrentUser";

// dummy data for now; replace with your actual fetch
const dummyStudents = [
  { id: "s1", name: "Alice" },
  { id: "s2", name: "Bob" },
];

const AdminSetupPage: React.FC = () => {
  const { user } = useCurrentUser();
  const classID = user?.classID ?? "";
  const subjectID = user?.subjectID ?? "";
  const termID = user?.termID ?? "";

  return (
    <Container sx={{ p: 4 }}>
      <SubjectForm classID={classID} />
      <AssessmentForm classID={classID} subjectID={subjectID} termID={termID} />
      <GradeEntryForm students={dummyStudents} />
    </Container>
  );
};

export default AdminSetupPage;
