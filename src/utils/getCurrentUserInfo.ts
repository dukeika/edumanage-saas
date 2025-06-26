// src/utils/getCurrentUserInfo.ts
import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";

export interface CurrentUser {
  id: string;
  email: string;
  name: string;
  userRole?: string;
  schoolID?: string;
  classID?: string;
  academicYearID?: string;
  termID?: string;
  subjectID?: string;
  assessmentID?: string;
  studentID?: string;
  teacherID?: string;
  childID?: string;
}

export const getCurrentUserInfo = async (): Promise<CurrentUser | null> => {
  try {
    const user = await getCurrentUser();
    const session = await fetchAuthSession();
    const idToken = session.tokens?.idToken?.toString() || "";
    const payload = JSON.parse(atob(idToken.split(".")[1]));

    return {
      id: payload.sub,
      email: payload.email,
      name: payload.name || payload["cognito:username"],
      userRole: payload["custom:userRole"],
      schoolID: payload["custom:schoolID"],
      classID: payload["custom:classID"],
      academicYearID: payload["custom:academicYearID"],
      termID: payload["custom:termID"],
      subjectID: payload["custom:subjectID"],
      assessmentID: payload["custom:assessmentID"],
      studentID: payload["custom:studentID"],
      teacherID: payload["custom:teacherID"],
      childID: payload["custom:childID"],
    };
  } catch {
    return null;
  }
};
