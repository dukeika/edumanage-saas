import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useCurrentUser } from "../hooks/useCurrentUser";

const AutoRedirect: React.FC = () => {
  const { user, loading } = useCurrentUser();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    // Only redirect if we're on the home page and user is authenticated
    if (loading || !user || pathname !== "/") return;

    const groups = (user.groups ?? []).map((g) => g.toLowerCase());
    const userRole = user.userRole?.toLowerCase?.() || "";

    // Priority order, matching your Cognito group names and roles
    let destination = "/unauthorized";
    if (
      groups.includes("applicationadmins") ||
      userRole === "applicationadmins"
    ) {
      destination = "/app-admin";
    } else if (groups.includes("admins") || userRole === "admins") {
      destination = "/admin";
    } else if (groups.includes("teachers") || userRole === "teachers") {
      destination = "/teacher";
    } else if (groups.includes("students") || userRole === "students") {
      destination = "/student";
    } else if (groups.includes("parents") || userRole === "parents") {
      destination = "/parent";
    }

    console.log(
      "User groups:",
      groups,
      "UserRole:",
      userRole,
      "Redirecting to:",
      destination
    );
    navigate(destination, { replace: true });
  }, [user, loading, pathname, navigate]);

  return null;
};

export default AutoRedirect;
