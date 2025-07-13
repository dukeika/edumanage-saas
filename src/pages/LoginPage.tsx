// src/pages/LoginPage.tsx
import React, { useEffect } from "react";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useNavigate, useLocation } from "react-router-dom";
import { Amplify } from "aws-amplify";
import awsExports from "../aws-exports";
Amplify.configure(awsExports);

const LoginContent = () => {
  const { route } = useAuthenticator((context) => [context.route]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (route === "authenticated") {
      const from = (location.state as any)?.from?.pathname || "/";
      navigate(from, { replace: true });
    }
  }, [route, navigate, location.state]);

  return null;
};

export default function LoginPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg,#f8f9fb 40%,#dde8fd 100%)",
      }}
    >
      <Authenticator>
        <LoginContent />
      </Authenticator>
    </div>
  );
}
