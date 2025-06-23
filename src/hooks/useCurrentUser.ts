// src/utils/useCurrentUser.ts
import { useEffect, useState } from "react";
import { fetchAuthSession } from "aws-amplify/auth";

export const useCurrentUser = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const session = await fetchAuthSession();
        const idToken = session.tokens?.idToken;
        if (idToken) {
          const claims = idToken.payload;
          setUser({
            username: claims["cognito:username"],
            email: claims.email,
            name: claims.name,
            role: claims["custom:role"], // set via postConfirmation
            schoolID: claims["custom:schoolID"], // custom claim
          });
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, []);

  return { user, loading };
};
