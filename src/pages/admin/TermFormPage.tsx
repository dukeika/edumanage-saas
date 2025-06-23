import React from "react";
import TermForm from "./TermForm";
import { useCurrentUser } from "../../utils/useCurrentUser";

const TermFormPage = () => {
  const { user, loading } = useCurrentUser();

  if (loading) return <div>Loading...</div>;
  if (!user?.academicYearID) return <div>Academic Year ID not found</div>;

  return <TermForm academicYearID={user.academicYearID} />;
};

export default TermFormPage;
