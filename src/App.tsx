import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import AppRoutes from "./routes/AppRoutes";

// don’t wrap in BrowserRouter here (we do that in index.tsx),
// and don’t use a render‐prop—just pass your routes as plain children.
const App: React.FC = () => (
  <Authenticator>
    <AppRoutes />
  </Authenticator>
);

export default App;
