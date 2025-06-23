import React from "react";
import SubjectForm from "./SubjectForm";
import { useCurrentUser } from "../../utils/useCurrentUser";

const SubjectFormPage = () => {
  const { user, loading } = useCurrentUser();

  const classID = user?.classID;

  if (loading || !classID) return <div>Loading...</div>;

  return <SubjectForm classID={classID} />;
};

export default SubjectFormPage;
