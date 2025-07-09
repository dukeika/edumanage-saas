// src/App.tsx
import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import AuthContent from "./components/AuthContent";
import AppRoutes from "./routes/AppRoutes";
import { useCurrentUser } from "./hooks/useCurrentUser";

function App() {
  const { setUser } = useCurrentUser();

  return (
    <Authenticator>
      {({ signOut }) => (
        <AuthContent
          signOut={async () => {
            // guard against undefined
            if (signOut) {
              await signOut();
            }
            setUser(null);
            localStorage.clear();
            window.location.assign("/");
          }}
        >
          <AppRoutes />
        </AuthContent>
      )}
    </Authenticator>
  );
}

export default App;
