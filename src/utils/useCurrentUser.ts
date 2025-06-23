import { useEffect, useState } from "react";
import { getCurrentUserInfo, CurrentUser } from "./getCurrentUserInfo";

export const useCurrentUser = () => {
  const [user, setUser] = useState<CurrentUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const userInfo = await getCurrentUserInfo();
        setUser(userInfo); // ✅ Now types match
      } catch (error) {
        console.error("Error loading user info:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  return { user, loading };
};
