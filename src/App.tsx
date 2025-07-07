// src/App.tsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Authenticator, ThemeProvider } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import AutoRedirect from "./components/AutoRedirect";
import ProtectedRoute from "./components/ProtectedRoute";
import Unauthorized from "./components/Unauthorized";

import {
  AdminLayout,
  TeacherLayout,
  StudentLayout,
  ParentLayout,
} from "./layouts";
import AdminDashboard from "./pages/admin/AdminDashboard";
import TeacherDashboard from "./pages/teacher/TeacherDashboard";
import StudentDashboard from "./pages/student/StudentDashboard";
import ParentDashboard from "./pages/parent/ParentDashboard";

const myTheme = {
  name: "my-theme",
  tokens: {
    colors: {
      brand: {
        primary: { 10: "#E3F2FD", 80: "#1976D2", 90: "#1565C0" },
      },
    },
  },
};

const App: React.FC = () => (
  <ThemeProvider theme={myTheme}>
    <Authenticator>
      {({ signOut, user }) => {
        const doSignOut = signOut ?? (() => {});

        return (
          <BrowserRouter>
            {/* Redirect “/” → /<role> on first load */}
            <AutoRedirect />

            <Routes>
              {/* Admin */}
              <Route
                path="/admin/*"
                element={
                  <ProtectedRoute allowedRoles={["Admin"]}>
                    <AdminLayout signOut={doSignOut} user={user!}>
                      <Routes>
                        <Route
                          index
                          element={
                            <AdminDashboard user={user!} signOut={doSignOut} />
                          }
                        />
                        {/* more admin subroutes here... */}
                      </Routes>
                    </AdminLayout>
                  </ProtectedRoute>
                }
              />

              {/* Teacher */}
              <Route
                path="/teacher/*"
                element={
                  <ProtectedRoute allowedRoles={["Teacher"]}>
                    <TeacherLayout signOut={doSignOut} user={user!}>
                      <Routes>
                        <Route
                          index
                          element={
                            <TeacherDashboard
                              user={user!}
                              signOut={doSignOut}
                            />
                          }
                        />
                      </Routes>
                    </TeacherLayout>
                  </ProtectedRoute>
                }
              />

              {/* Student */}
              <Route
                path="/student/*"
                element={
                  <ProtectedRoute allowedRoles={["Student"]}>
                    <StudentLayout signOut={doSignOut} user={user!}>
                      <Routes>
                        <Route
                          index
                          element={
                            <StudentDashboard
                              user={user!}
                              signOut={doSignOut}
                            />
                          }
                        />
                      </Routes>
                    </StudentLayout>
                  </ProtectedRoute>
                }
              />

              {/* Parent */}
              <Route
                path="/parent/*"
                element={
                  <ProtectedRoute allowedRoles={["Parent"]}>
                    <ParentLayout signOut={doSignOut} user={user!}>
                      <Routes>
                        <Route
                          index
                          element={
                            <ParentDashboard user={user!} signOut={doSignOut} />
                          }
                        />
                      </Routes>
                    </ParentLayout>
                  </ProtectedRoute>
                }
              />

              {/* Catch-all */}
              <Route path="/unauthorized" element={<Unauthorized />} />
              <Route
                path="*"
                element={<Navigate to="/unauthorized" replace />}
              />
            </Routes>
          </BrowserRouter>
        );
      }}
    </Authenticator>
  </ThemeProvider>
);

export default App;
