import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import AuthContent from "./components/AuthContent";

// don't wrap in BrowserRouter here (we do that in index.tsx)
const App: React.FC = () => (
  <Authenticator>
    <AuthContent />
  </Authenticator>
);

export default App;
