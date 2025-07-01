// src/index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import awsExports from "./aws-exports";
import AppRoutes from "./routes/AppRoutes";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(awsExports);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Authenticator>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </Authenticator>
);
