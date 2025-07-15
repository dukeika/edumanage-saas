import { useState, useEffect } from "react";
import { getCurrentUser, fetchAuthSession } from "@aws-amplify/auth";

export interface CurrentUser {
  id: string;
  name: string;
  userRole?: string;
  groups: string[];
  email?: string;
  schoolID?: string;
  classID?: string;
  subjectID?: string;
  termID?: string;
  assessmentID?: string;
  [key: string]: any;
}

export const useCurrentUser = () => {
  const [user, setUser] = useState<CurrentUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const cognitoUser = await getCurrentUser();
        const session = await fetchAuthSession();
        const idToken = session.tokens?.idToken?.payload || {};

        const id = typeof idToken.sub === "string" ? idToken.sub : "";
        const name =
          typeof idToken.name === "string"
            ? idToken.name
            : typeof cognitoUser.username === "string"
            ? cognitoUser.username
            : "";
        const email =
          typeof idToken.email === "string"
            ? idToken.email
            : typeof cognitoUser.signInDetails?.loginId === "string"
            ? cognitoUser.signInDetails.loginId
            : "";

        let groups: string[] = [];
        const rawGroups = idToken["cognito:groups"];
        if (Array.isArray(rawGroups)) {
          groups = rawGroups.filter((g) => typeof g === "string") as string[];
        } else if (typeof rawGroups === "string") {
          groups = [rawGroups];
        }

        // Now extract all custom/extra fields as strings (or undefined)
        const userRole =
          typeof idToken["custom:role"] === "string"
            ? idToken["custom:role"]
            : undefined;
        const schoolID =
          typeof idToken["custom:schoolID"] === "string"
            ? idToken["custom:schoolID"]
            : undefined;
        const classID =
          typeof idToken["custom:classID"] === "string"
            ? idToken["custom:classID"]
            : undefined;
        const subjectID =
          typeof idToken["custom:subjectID"] === "string"
            ? idToken["custom:subjectID"]
            : undefined;
        const termID =
          typeof idToken["custom:termID"] === "string"
            ? idToken["custom:termID"]
            : undefined;
        const assessmentID =
          typeof idToken["custom:assessmentID"] === "string"
            ? idToken["custom:assessmentID"]
            : undefined;

        if (!cancelled) {
          setUser({
            id,
            name,
            email,
            groups,
            userRole,
            schoolID,
            classID,
            subjectID,
            termID,
            assessmentID,
          });
        }
      } catch {
        if (!cancelled) setUser(null);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return { user, loading };
};
