import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useCurrentUser } from "../utils/useCurrentUser";

const AutoRedirect: React.FC = () => {
  const { user, loading } = useCurrentUser();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (loading || !user || pathname !== "/") return;

    // Use groups for routing, fallback to userRole
    const groups = user.groups || [];
    let dest = "/unauthorized";
    if (groups.includes("admins")) dest = "/admin";
    else if (groups.includes("teachers")) dest = "/teacher";
    else if (groups.includes("parents")) dest = "/parent";
    else if (groups.includes("students")) dest = "/student";
    else if (user.userRole) dest = `/${user.userRole}`;
    else dest = "/unauthorized";

    console.log("Redirecting to:", dest);
    navigate(dest, { replace: true });
  }, [user, loading, pathname, navigate]);

  return null;
};

export default AutoRedirect;
