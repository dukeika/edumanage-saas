// src/routes/AppRoutes.tsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage"; // Although HomePage might be redirected by AutoRedirect
import LoginPage from "../pages/LoginPage";
import Unauthorized from "../components/Unauthorized";
import RequireAuth from "../components/RequireAuth";
import AutoRedirect from "../components/AutoRedirect";
import SchoolLandingPage from "../pages/school/SchoolLandingPage";

// Dashboard and layouts
import AppAdminDashboard from "../pages/appadmin/AppAdminDashboard";
import AdminDashboard from "../pages/admin/AdminDashboard";
import TeacherDashboard from "../pages/teacher/TeacherDashboard";
import StudentDashboard from "../pages/student/StudentDashboard";
import ParentDashboard from "../pages/parent/ParentDashboard";

import AppAdminLayout from "../layouts/AppAdminLayout";
import AdminLayout from "../layouts/AdminLayout";
import TeacherLayout from "../layouts/TeacherLayout";
import StudentLayout from "../layouts/StudentLayout";
import ParentLayout from "../layouts/ParentLayout";

// App Admin pages
import AppAdminSchoolsPage from "../pages/appadmin/AppAdminSchoolsPage";
import AppAdminUsersPage from "../pages/appadmin/AppAdminUsersPage";
import AssignAdminPage from "../pages/appadmin/AssignAdminPage";
import EditSchoolPage from "../pages/appadmin/EditSchoolPage";

const AppRoutes: React.FC = () => (
  <Routes>
    {/* Public Routes */}
    <Route path="/login" element={<LoginPage />} />
    <Route path="/unauthorized" element={<Unauthorized />} />
    <Route path="/" element={<AutoRedirect />} />

    {/* School Landing Page - CORRECTED ROUTE HERE */}
    {/* This route will now specifically match URLs like /school/fls */}
    <Route path="/school/:subdomain" element={<SchoolLandingPage />} />

    {/* App Admin Routes */}
    <Route
      path="/app-admin/*"
      element={
        <RequireAuth allowedRoles={["ApplicationAdmins"]}>
          <AppAdminLayout />
        </RequireAuth>
      }
    >
      <Route index element={<AppAdminDashboard />} />
      <Route path="schools" element={<AppAdminSchoolsPage />} />
      <Route path="users" element={<AppAdminUsersPage />} />
      <Route path="assign-admin" element={<AssignAdminPage />} />
      <Route path="edit-school/:schoolId" element={<EditSchoolPage />} />
      <Route path="*" element={<Navigate to="/app-admin" replace />} />
    </Route>

    {/* Admin Routes */}
    <Route
      path="/admin/*"
      element={
        <RequireAuth allowedRoles={["admins"]}>
          <AdminLayout />
        </RequireAuth>
      }
    >
      <Route index element={<AdminDashboard />} />
      <Route path="*" element={<Navigate to="/admin" replace />} />
    </Route>

    {/* Teacher Routes */}
    <Route
      path="/teacher/*"
      element={
        <RequireAuth allowedRoles={["teachers"]}>
          <TeacherLayout />
        </RequireAuth>
      }
    >
      <Route index element={<TeacherDashboard />} />
      <Route path="*" element={<Navigate to="/teacher" replace />} />
    </Route>

    {/* Student Routes */}
    <Route
      path="/student/*"
      element={
        <RequireAuth allowedRoles={["students"]}>
          <StudentLayout />
        </RequireAuth>
      }
    >
      <Route index element={<StudentDashboard />} />
      <Route path="*" element={<Navigate to="/student" replace />} />
    </Route>

    {/* Parent Routes */}
    <Route
      path="/parent/*"
      element={
        <RequireAuth allowedRoles={["parents"]}>
          <ParentLayout />
        </RequireAuth>
      }
    >
      <Route index element={<ParentDashboard />} />
      <Route path="*" element={<Navigate to="/parent" replace />} />
    </Route>

    {/* Fallback for unmatched routes */}
    <Route path="*" element={<Navigate to="/login" replace />} />
  </Routes>
);

export default AppRoutes;
