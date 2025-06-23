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
}

export const getCurrentUserInfo = async (): Promise<CurrentUser | null> => {
  try {
    const user = await getCurrentUser();
    const session = await fetchAuthSession();
    const idToken = session.tokens?.idToken?.toString();

    let payload: any = {};
    if (idToken) {
      const base64Payload = idToken.split(".")[1];
      payload = JSON.parse(atob(base64Payload));
    }

    return {
      id: user.userId,
      email: payload["email"] ?? "", // 👈 ensure it's a string
      name: payload["name"] ?? payload["cognito:username"] ?? "Unknown",
      schoolID: payload["custom:schoolID"] || "",
      classID: payload["custom:classID"],
      subjectID: payload["custom:subjectID"],
      termID: payload["custom:termID"],
      assessmentID: payload["custom:assessmentID"],
      academicYearID: payload["custom:academicYearID"],
    };
  } catch (error) {
    console.error("Error fetching user info", error);
    return null;
  }
};
