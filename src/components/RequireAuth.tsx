import React, { useEffect, useState } from "react";
import { fetchAuthSession } from "@aws-amplify/auth";
import { Navigate } from "react-router-dom";

interface RequireAuthProps {
  allowedGroups?: string[];
  children: React.ReactNode;
}

const RequireAuth: React.FC<RequireAuthProps> = ({
  allowedGroups,
  children,
}) => {
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuthorization = async () => {
      try {
        const session = await fetchAuthSession();
        const idToken = session.tokens?.idToken;

        if (!idToken) {
          setIsAuthorized(false);
          return;
        }

        const groups = (idToken.payload["cognito:groups"] as string[]) || [];
        console.log("User groups:", groups, "Allowed:", allowedGroups);

        if (
          !allowedGroups ||
          allowedGroups.some((group) => groups.includes(group))
        ) {
          setIsAuthorized(true);
        } else {
          setIsAuthorized(false);
        }
      } catch (error) {
        console.error("Authorization error:", error);
        setIsAuthorized(false);
      }
    };

    checkAuthorization();
  }, [allowedGroups]);

  if (isAuthorized === null) return <div>Checking permissions...</div>;
  if (!isAuthorized) return <Navigate to="/unauthorized" replace />;

  return <>{children}</>;
};

export default RequireAuth;
