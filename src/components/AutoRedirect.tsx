// src/components/AutoRedirect.tsx
import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuthenticator } from "@aws-amplify/ui-react";

const AutoRedirect: React.FC = () => {
  const { route, user } = useAuthenticator((ctx) => [ctx.route, ctx.user]);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (route === "authenticated" && pathname === "/") {
      const role =
        (user as any)?.attributes?.["custom:userRole"]?.toLowerCase() ||
        "unauthorized";
      navigate(`/${role}`, { replace: true });
    }
  }, [route, user, pathname, navigate]);

  return null;
};

export default AutoRedirect;
