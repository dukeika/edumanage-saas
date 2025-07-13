import { useState, useEffect } from "react";
import { getCurrentUser, fetchAuthSession } from "@aws-amplify/auth";

export interface CurrentUser {
  id: string;
  email?: string;
  groups: string[];
  userRole?: string;
  name?: string;
  schoolId?: string; // <-- lower camelCase for consistency
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

        // Strictly parse all fields as string
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

        const userRole =
          typeof idToken["custom:role"] === "string"
            ? idToken["custom:role"]
            : undefined;

        if (!cancelled) {
          setUser({ id, name, email, groups, userRole });
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
