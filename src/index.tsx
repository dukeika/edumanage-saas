// src/index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// ① Pull in Amplify UI’s default stylesheet:
import "@aws-amplify/ui-react/styles.css";

import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import App from "./App";

// ② Pull in MUI theming:
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

Amplify.configure(awsExports);

const muiTheme = createTheme({
  // your overrides here, e.g.
  palette: {
    mode: "light",
    primary: { main: "#1976d2" },
    secondary: { main: "#dc004e" },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* ③ Wrap in your MUI ThemeProvider + CssBaseline */}
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
