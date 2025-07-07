// src/App.tsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Authenticator, ThemeProvider } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import AutoRedirect from "./components/AutoRedirect";
import ProtectedRoute from "./components/ProtectedRoute";
import Unauthorized from "./components/Unauthorized";

import AdminLayout from "./layouts/AdminLayout";
import TeacherLayout from "./layouts/TeacherLayout";
import StudentLayout from "./layouts/StudentLayout";
import ParentLayout from "./layouts/ParentLayout";

import AdminDashboard from "./pages/admin/AdminDashboard";
import TeacherDashboard from "./pages/teacher/TeacherDashboard";
import StudentDashboard from "./pages/student/StudentDashboard";
import ParentDashboard from "./pages/parent/ParentDashboard";

const myTheme = {
  name: "my-theme",
  tokens: {
    colors: {
      brand: { primary: { 10: "#E3F2FD", 80: "#1976D2", 90: "#1565C0" } },
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
            <AutoRedirect />

            <Routes>
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
                        {/* ...other admin subroutes */}
                      </Routes>
                    </AdminLayout>
                  </ProtectedRoute>
                }
              />

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
