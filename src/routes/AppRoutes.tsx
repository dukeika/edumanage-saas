// src/routes/AppRoutes.tsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import TeacherLayout from "../layouts/TeacherLayout";
import StudentLayout from "../layouts/StudentLayout";
import ParentLayout from "../layouts/ParentLayout";
import AdminDashboard from "../pages/admin/AdminDashboard";
import TeacherDashboard from "../pages/teacher/TeacherDashboard";
import StudentDashboard from "../pages/student/StudentDashboard";
import ParentDashboard from "../pages/parent/ParentDashboard";
import RoleBasedRedirect from "../components/RoleBasedRedirect";
import Unauthorized from "../components/Unauthorized";
import RequireAuth from "../components/RequireAuth";

const AppRoutes: React.FC = () => (
  <Routes>
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
      {/* catch invalid under /admin → back to dashboard */}
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
      {/* catch invalid under /teacher → back to dashboard */}
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
      {/* catch invalid under /student → back to dashboard */}
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
      {/* catch invalid under /parent → back to dashboard */}
      <Route path="*" element={<Navigate to="/parent" replace />} />
    </Route>

    {/* Root path with role-based redirect */}
    <Route path="/" element={<RoleBasedRedirect />} />

    {/* Unauthorized access page */}
    <Route path="/unauthorized" element={<Unauthorized />} />

    {/* Catch-all */}
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default AppRoutes;
