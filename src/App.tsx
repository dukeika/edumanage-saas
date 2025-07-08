// src/App.tsx
import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import AuthContent from "./components/AuthContent";

export default function App() {
  return (
    <Authenticator>
      <AuthContent />
    </Authenticator>
  );
}
