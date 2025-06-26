import { useState, useEffect } from "react";
import { getCurrentUserInfo, CurrentUser } from "./getCurrentUserInfo";

export const useCurrentUser = () => {
  const [user, setUser] = useState<CurrentUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentUserInfo()
      .then((u) => setUser(u))
      .finally(() => setLoading(false));
  }, []);

  return { user, loading };
};
