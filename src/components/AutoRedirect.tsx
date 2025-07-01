import React, { useEffect, useState } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
import { fetchAuthSession } from "@aws-amplify/auth";

const AutoRedirect: React.FC = () => {
  const { route } = useAuthenticator();
  const navigate = useNavigate();
  const [redirected, setRedirected] = useState(false);

  useEffect(() => {
    const redirectUser = async () => {
      if (route !== "authenticated") {
        setRedirected(true);
        return;
      }

      try {
        const session = await fetchAuthSession();
        const idToken = session.tokens?.idToken;

        if (!idToken) {
          navigate("/unauthorized", { replace: true });
          return;
        }

        const groups = (idToken.payload["cognito:groups"] as string[]) || [];
        console.log("AutoRedirect: Groups", groups);

        if (groups.includes("Admins")) navigate("/admin", { replace: true });
        else if (groups.includes("Teachers"))
          navigate("/teacher", { replace: true });
        else if (groups.includes("Students"))
          navigate("/student", { replace: true });
        else if (groups.includes("Parents"))
          navigate("/parent", { replace: true });
        else navigate("/unauthorized", { replace: true });
      } catch (error) {
        console.error("AutoRedirect Error:", error);
        navigate("/unauthorized", { replace: true });
      } finally {
        setRedirected(true);
      }
    };

    redirectUser();
  }, [route, navigate]);

  if (!redirected)
    return (
      <div style={{ textAlign: "center", marginTop: 80 }}>
        Checking permissions...
      </div>
    );

  return null;
};

export default AutoRedirect;
