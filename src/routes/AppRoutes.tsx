import React from "react";
import { Routes, Route } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import Unauthorized from "../components/Unauthorized";
import RequireAuth from "../components/RequireAuth";
import AutoRedirect from "../components/AutoRedirect";
import SchoolLandingPage from "../pages/school/SchoolLandingPage"; // Add this import

// Import your dashboard components
import AppAdminDashboard from "../pages/appadmin/AppAdminDashboard";
import AdminDashboard from "../pages/admin/AdminDashboard";
import TeacherDashboard from "../pages/teacher/TeacherDashboard";
import StudentDashboard from "../pages/student/StudentDashboard";
import ParentDashboard from "../pages/parent/ParentDashboard";

// Import your layout components
import AppAdminLayout from "../layouts/AppAdminLayout";
import AdminLayout from "../layouts/AdminLayout";
import TeacherLayout from "../layouts/TeacherLayout";
import StudentLayout from "../layouts/StudentLayout";
import ParentLayout from "../layouts/ParentLayout";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/unauthorized" element={<Unauthorized />} />

      {/* Public school landing pages */}
      <Route path="/school/:schoolDomain" element={<SchoolLandingPage />} />

      {/* Home route with auto-redirect */}
      <Route
        path="/"
        element={
          <>
            <HomePage />
            <AutoRedirect />
          </>
        }
      />

      {/* Protected routes */}
      <Route
        path="/app-admin"
        element={
          <RequireAuth allowedRoles={["applicationadmins"]}>
            <AppAdminLayout />
          </RequireAuth>
        }
      >
        <Route index element={<AppAdminDashboard />} />
      </Route>

      <Route
        path="/admin/*"
        element={
          <RequireAuth allowedRoles={["admins"]}>
            <AdminLayout />
          </RequireAuth>
        }
      >
        <Route index element={<AdminDashboard />} />
        {/* other admin routes */}
      </Route>

      <Route
        path="/teacher"
        element={
          <RequireAuth allowedRoles={["teachers"]}>
            <TeacherLayout />
          </RequireAuth>
        }
      >
        <Route index element={<TeacherDashboard />} />
      </Route>

      <Route
        path="/student"
        element={
          <RequireAuth allowedRoles={["students"]}>
            <StudentLayout />
          </RequireAuth>
        }
      >
        <Route index element={<StudentDashboard />} />
      </Route>

      <Route
        path="/parent"
        element={
          <RequireAuth allowedRoles={["parents"]}>
            <ParentLayout />
          </RequireAuth>
        }
      >
        <Route index element={<ParentDashboard />} />
      </Route>

      {/* Catch all route */}
      <Route path="*" element={<Unauthorized />} />
    </Routes>
  );
};

export default AppRoutes;
