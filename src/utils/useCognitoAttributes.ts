import { useState, useEffect } from "react";
import { getCurrentUser, fetchUserAttributes } from "aws-amplify/auth";

export const useCognitoAttributes = () => {
  const [attributes, setAttributes] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;
    getCurrentUser()
      .then(() => fetchUserAttributes())
      .then((attrs) => {
        if (!ignore) setAttributes(attrs as any);
      })
      .catch(() => setAttributes({}))
      .finally(() => setLoading(false));
    return () => {
      ignore = true;
    };
  }, []);

  return { attributes, loading };
};
