// src/pages/admin/GradeEntryFormPage.tsx
import React from "react";
import GradeEntryForm from "./GradeEntryForm";
import { useCurrentUser } from "../../utils/useCurrentUser";

// TODO: replace with real data-fetch once your GraphQL listStudents is wired up
const dummyStudents = [
  { id: "s1", name: "Alice Johnson" },
  { id: "s2", name: "Bob Smith" },
  { id: "s3", name: "Charlie Lee" },
];

const GradeEntryFormPage: React.FC = () => {
  const { user, loading } = useCurrentUser();

  if (loading) return <div>Loading user...</div>;
  if (!user?.classID || !user?.assessmentID) {
    return <div>Missing class or assessment context</div>;
  }

  return <GradeEntryForm students={dummyStudents} />;
};

export default GradeEntryFormPage;
