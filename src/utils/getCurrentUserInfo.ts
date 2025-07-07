import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";

export interface CurrentUser {
  id: string;
  email: string;
  name: string;
  schoolID?: string;
  classID?: string;
  subjectID?: string;
  termID?: string;
  assessmentID?: string;
  academicYearID?: string;
  userRole?: string; // ← ensure this is here
}

export const getCurrentUserInfo = async (): Promise<CurrentUser | null> => {
  try {
    const cognitoUser = await getCurrentUser();
    const session = await fetchAuthSession();
    const idToken = session.tokens?.idToken?.toString() || "";
    const payload = idToken ? JSON.parse(atob(idToken.split(".")[1])) : {};

    return {
      id: cognitoUser.userId,
      email: payload.email || "",
      name: payload.name || payload["cognito:username"] || "Unknown",
      schoolID: payload["custom:schoolID"],
      classID: payload["custom:classID"],
      subjectID: payload["custom:subjectID"],
      termID: payload["custom:termID"],
      assessmentID: payload["custom:assessmentID"],
      academicYearID: payload["custom:academicYearID"],
      userRole: payload["custom:userRole"], // ← grab it here
    };
  } catch (error) {
    console.error("Error fetching user info", error);
    return null;
  }
};
