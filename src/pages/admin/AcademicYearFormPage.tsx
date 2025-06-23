import React from "react";
import AcademicYearForm from "./AcademicYearForm";
import { useCurrentUser } from "../../utils/useCurrentUser";

const AcademicYearFormPage = () => {
  const { user, loading } = useCurrentUser();

  if (loading) return <div>Loading...</div>;
  if (!user?.schoolID) return <div>School ID not found</div>;

  return <AcademicYearForm schoolID={user.schoolID} />;
};

export default AcademicYearFormPage;
