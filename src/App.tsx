import React from "react";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from "@aws-amplify/ui-react";
import AuthContent from "./components/AuthContent";

const App: React.FC = () => (
  // Authenticator shows its sign-in form until you’re logged in,
  // then renders its children (<AuthContent />).
  <Authenticator>
    <AuthContent />
  </Authenticator>
);

export default App;
