// src/components/AutoRedirect.tsx
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCurrentUser } from "../utils/useCurrentUser";

const AutoRedirect: React.FC = () => {
  const { user, loading } = useCurrentUser();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!loading && user) {
      // only redirect *if* we're exactly at "/"
      if (location.pathname === "/") {
        const role = user.userRole?.toLowerCase() || "student";
        navigate(`/${role}`, { replace: true });
      }
    }
  }, [user, loading, location, navigate]);

  return null;
};

export default AutoRedirect;
