// src/utils/getCurrentUserInfo.ts

import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth";

export type CurrentUser = {
  id: string;
  email: string;
  name: string;
  schoolID?: string;
  classID?: string;
  subjectID?: string;
  academicYearID?: string;
  termID?: string;
  assessmentID?: string;
  userRole?: string;
};

export const getCurrentUserInfo = async (): Promise<CurrentUser | null> => {
  try {
    const user = await getCurrentUser();
    const session = await fetchAuthSession();

    const idToken = session.tokens?.idToken?.toString();
    if (!idToken) throw new Error("No ID token found");

    const base64Payload = idToken.split(".")[1];
    const payload = JSON.parse(atob(base64Payload));
    console.log("✅ Decoded ID Token payload: ", payload);

    return {
      id: user.userId,
      email: payload["email"],
      name: payload["name"] || payload["cognito:username"],
      schoolID: payload["custom:schoolID"],
      classID: payload["custom:classID"], // Must be the actual class ID
      subjectID: payload["custom:subjectID"],
      academicYearID: payload["custom:academicYearID"],
      termID: payload["custom:termID"],
      assessmentID: payload["custom:assessmentID"],
      userRole: payload["custom:userRole"],
    };
  } catch (error) {
    console.error("❌ Error fetching user info", error);
    return null;
  }
};
