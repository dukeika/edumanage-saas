import { fetchAuthSession } from "aws-amplify/auth";

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
}

export const getCurrentUserInfo = async (): Promise<CurrentUser | null> => {
  try {
    const session = await fetchAuthSession();
    const idToken = session.tokens?.idToken?.toString();

    if (!idToken) throw new Error("No ID token found");

    const payload = JSON.parse(atob(idToken.split(".")[1]));

    return {
      id: payload["sub"],
      email: payload["email"] ?? "",
      name: payload["name"] ?? payload["cognito:username"] ?? "Unknown",
      schoolID: payload["custom:schoolID"],
      classID: payload["custom:classID"],
      subjectID: payload["custom:subjectID"],
      termID: payload["custom:termID"],
      assessmentID: payload["custom:assessmentID"],
      academicYearID: payload["custom:academicYearID"],
    };
  } catch (error) {
    console.error("Error fetching current user info", error);
    return null;
  }
};
