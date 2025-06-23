// src/pages/admin/AssessmentFormPage.tsx
import React from "react";
import { useCurrentUser } from "../../utils/useCurrentUser";
import AssessmentForm from "./AssessmentForm";

const AssessmentFormPage = () => {
  const { user, loading } = useCurrentUser();

  // Use test or actual IDs depending on your routing or mock data
  const classID = "test-class-id";
  const subjectID = "test-subject-id";
  const termID = "test-term-id";

  if (loading || !user) return <div>Loading...</div>;

  return (
    <AssessmentForm classID={classID} subjectID={subjectID} termID={termID} />
  );
};

export default AssessmentFormPage;
