import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import RequireAuth from "../components/RequireAuth";

import AdminLayout from "../layouts/AdminLayout";
import TeacherLayout from "../layouts/TeacherLayout";
import StudentLayout from "../layouts/StudentLayout";
import ParentLayout from "../layouts/ParentLayout";

import AdminDashboard from "../pages/admin/AdminDashboard";
import SchoolSetup from "../pages/admin/SchoolSetup";
import ClassListPage from "../pages/admin/ClassListPage";

import TeacherDashboard from "../pages/teacher/TeacherDashboard";
import StudentDashboard from "../pages/student/StudentDashboard";
import ParentDashboard from "../pages/parent/ParentDashboard";

const AppRoutes: React.FC = () => (
  <Routes>
    {/* ADMIN */}
    <Route
      path="/admin/*"
      element={
        <RequireAuth allowedRoles={["Admin"]}>
          <AdminLayout />
        </RequireAuth>
      }
    >
      <Route index element={<AdminDashboard />} />
      <Route path="setup" element={<SchoolSetup />} />
      <Route path="class-list" element={<ClassListPage />} />
      <Route path="*" element={<Navigate to="/admin" replace />} />
    </Route>

    {/* TEACHER */}
    <Route
      path="/teacher/*"
      element={
        <RequireAuth allowedRoles={["Teacher"]}>
          <TeacherLayout />
        </RequireAuth>
      }
    >
      <Route index element={<TeacherDashboard />} />
      <Route path="*" element={<Navigate to="/teacher" replace />} />
    </Route>

    {/* STUDENT */}
    <Route
      path="/student/*"
      element={
        <RequireAuth allowedRoles={["Student"]}>
          <StudentLayout />
        </RequireAuth>
      }
    >
      <Route index element={<StudentDashboard />} />
      <Route path="*" element={<Navigate to="/student" replace />} />
    </Route>

    {/* PARENT */}
    <Route
      path="/parent/*"
      element={
        <RequireAuth allowedRoles={["Parent"]}>
          <ParentLayout />
        </RequireAuth>
      }
    >
      <Route index element={<ParentDashboard />} />
      <Route path="*" element={<Navigate to="/parent" replace />} />
    </Route>

    {/* CATCH-ALL: send back to whatever landing page we fell into */}
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default AppRoutes;
