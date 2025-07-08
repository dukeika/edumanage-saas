// src/components/RedirectOnSignOut.tsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthenticator } from "@aws-amplify/ui-react";

export default function RedirectOnSignOut() {
  const { route } = useAuthenticator((ctx) => [ctx.route]);
  const navigate = useNavigate();

  useEffect(() => {
    // As soon as we're *not* in 'authenticated', jump home:
    if (route !== "authenticated") {
      navigate("/", { replace: true });
    }
  }, [route, navigate]);

  return null;
}
