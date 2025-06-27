// src/utils/useCurrentUser.ts
import { useAuthenticator } from "@aws-amplify/ui-react";

export interface CurrentUser {
  id: string;
  name: string;
  userRole: string;
  schoolID?: string;
  classID?: string;
  subjectID?: string;
  termID?: string;
  assessmentID?: string;
  studentID?: string;
  childID?: string;
  academicYearID?: string;
}

export const useCurrentUser = () => {
  const { user, route } = useAuthenticator((ctx) => [ctx.user, ctx.route]);

  const loading = route !== "authenticated";

  let currentUser: CurrentUser | null = null;
  if (!loading && user) {
    const attrs = (user as any).attributes || {};
    currentUser = {
      id: user.username,
      name: attrs.name || user.username,
      userRole: attrs["custom:userRole"],
      schoolID: attrs["custom:schoolID"],
      classID: attrs["custom:classID"],
      subjectID: attrs["custom:subjectID"],
      termID: attrs["custom:termID"],
      assessmentID: attrs["custom:assessmentID"],
      studentID: attrs["custom:studentID"],
      childID: attrs["custom:childID"],
      academicYearID: attrs["custom:academicYearID"],
    };
  }

  return { user: currentUser, loading };
};
