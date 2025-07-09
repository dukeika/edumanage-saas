import { useState, useEffect } from "react";
import { getCurrentUser } from "aws-amplify/auth";

export interface CurrentUser {
  id: string;
  name: string;
  email?: string;
  userRole?: string;
  schoolID?: string;
  groups?: string[];
}

export const useCurrentUser = () => {
  const [user, setUser] = useState<CurrentUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentUser()
      .then((currentUser) => {
        setUser({
          id: currentUser.userId,
          name: currentUser.username,
          email: currentUser.signInDetails?.loginId,
        });
      })
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  return { user, setUser, loading };
};
