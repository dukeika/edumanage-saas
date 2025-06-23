import React from "react";
import ClassList from "./ClassList";
import { useCurrentUser } from "../../utils/useCurrentUser";

const ClassListPage = () => {
  const { user, loading } = useCurrentUser();

  if (loading) return <div>Loading...</div>;
  if (!user?.schoolID) return <div>School ID not available</div>;

  return <ClassList schoolID={user.schoolID} />;
};

export default ClassListPage;
