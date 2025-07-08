import { useAuthenticator } from "@aws-amplify/ui-react";

export interface CurrentUser {
  id: string;
  name: string;
  userRole: string;
  groups: string[];
  email?: string;
  [key: string]: any; // For extra fields
}

function getIdTokenPayload() {
  // Find the correct key in localStorage
  const key = Object.keys(localStorage).find(
    (k) => k.includes("idToken") && !k.endsWith(".info")
  );
  if (!key) return {};
  try {
    const token = localStorage.getItem(key);
    if (!token) return {};
    // Decode JWT
    const payload = token.split(".")[1];
    return JSON.parse(atob(payload));
  } catch {
    return {};
  }
}

export const useCurrentUser = () => {
  const { user, route, signOut } = useAuthenticator((ctx) => [
    ctx.user,
    ctx.route,
    ctx.signOut,
  ]);
  const loading = route !== "authenticated";

  let currentUser: CurrentUser | null = null;

  if (!loading) {
    // Always prefer token payload (most reliable)
    const payload = getIdTokenPayload();
    const groups: string[] = Array.isArray(payload["cognito:groups"])
      ? payload["cognito:groups"].map((g: string) => g.toLowerCase())
      : [];
    const userRole = (
      payload["custom:userRole"] ||
      groups[0] ||
      "student"
    ).toLowerCase();

    currentUser = {
      id: payload["sub"] || user?.username || "",
      name: payload["name"] || user?.username || "",
      userRole,
      groups,
      email: payload["email"],
      // ...add other fields from payload as needed
    };

    // Debug output
    console.log("TOKEN PAYLOAD:", payload);
    console.log("Current user object:", currentUser);
  }

  return { user: currentUser, loading, signOut };
};
