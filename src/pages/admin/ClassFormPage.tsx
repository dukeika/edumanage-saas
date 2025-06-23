import React from "react";
import ClassForm from "./ClassForm";
import { useCurrentUser } from "../../utils/useCurrentUser";

const ClassFormPage = () => {
  const { user, loading } = useCurrentUser();

  if (loading) return <div>Loading...</div>;
  if (!user?.schoolID) return <div>School ID not available</div>;

  return <ClassForm schoolID={user.schoolID} />;
};

export default ClassFormPage;
