// src/App.tsx
import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import AppRoutes from "./routes/AppRoutes";
import ErrorBoundary from "./components/ErrorBoundary";
import "@aws-amplify/ui-react/styles.css";

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Authenticator>
        <AppRoutes />
      </Authenticator>
    </ErrorBoundary>
  );
};

export default App;
