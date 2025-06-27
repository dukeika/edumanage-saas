// src/components/AutoRedirect.tsx
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthenticator } from "@aws-amplify/ui-react";

const AutoRedirect: React.FC = () => {
  // Grab the Authenticator context
  const { user, route } = useAuthenticator((context) => [
    context.user,
    context.route,
  ]);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Once we’re *inside* the authenticated state, route === "authenticated"
  // and `user` will be a real AuthUser object.
  useEffect(() => {
    if (route === "authenticated" && pathname === "/") {
      // The `user` object here comes from Amplify UI
      // and you can read your custom attributes from:
      // user.getUsername()  OR
      // user.attributes['custom:userRole']
      const role =
        (user as any)?.attributes?.["custom:userRole"]?.toLowerCase() ||
        "student";
      navigate(`/${role}`, { replace: true });
    }
  }, [route, user, pathname, navigate]);

  return null;
};

export default AutoRedirect;
