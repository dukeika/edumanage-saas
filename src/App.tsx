import React from "react";
import { BrowserRouter, Navigate } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";

function App() {
  // Simulated logged-in user (replace later with Cognito)
  const currentUser = {
    role: "parent", // Change this to admin, student, parent for testing
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        {currentUser.role === "admin" ? (
          <Navigate to="/admin" />
        ) : currentUser.role === "teacher" ? (
          <Navigate to="/teacher" />
        ) : currentUser.role === "student" ? (
          <Navigate to="/student" />
        ) : (
          <Navigate to="/parent" />
        )}
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
