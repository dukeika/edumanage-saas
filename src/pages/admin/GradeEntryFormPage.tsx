import React from "react";
import GradeEntryForm from "./GradeEntryForm";
import { useCurrentUser } from "../../utils/useCurrentUser";

// TEMP hardcoded or passed via props, context, or state
const GradeEntryFormPage = () => {
  const { user, loading } = useCurrentUser();

  // Replace these with actual values from your app's context/router/state
  const classID = "your-class-id";
  const assessmentID = "your-assessment-id";

  if (loading) return <div>Loading...</div>;
  if (!user || !classID || !assessmentID)
    return <div>Missing required data</div>;

  return <GradeEntryForm classID={classID} assessmentID={assessmentID} />;
};

export default GradeEntryFormPage;
