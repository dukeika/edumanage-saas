// src/routes/AppRoutes.tsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import RequireAuth from "../components/RequireAuth";
import RequireRole from "../components/RequireRole";
import AutoRedirect from "../components/AutoRedirect";
import Unauthorized from "../components/Unauthorized";

import AdminLayout from "../layouts/AdminLayout";
import TeacherLayout from "../layouts/TeacherLayout";
import StudentLayout from "../layouts/StudentLayout";
import ParentLayout from "../layouts/ParentLayout";

import AdminDashboard from "../pages/admin/AdminDashboard";
import SchoolSetup from "../pages/admin/SchoolSetup";
import ClassListPage from "../pages/admin/ClassListPage";

import TeacherDashboard from "../pages/teacher/TeacherDashboard";
import ClassesPage from "../pages/teacher/ClassesPage";
import AttendancePage from "../pages/teacher/AttendancePage";

import StudentDashboard from "../pages/student/StudentDashboard";
import ProfilePage from "../pages/student/ProfilePage";

import ParentDashboard from "../pages/parent/ParentDashboard";
import ChildProfilePage from "../pages/parent/ChildProfilePage";

const AppRoutes: React.FC = () => (
  <Routes>
    {/* 1) Root: figure out where to land based on role */}
    <Route path="/" element={<AutoRedirect />} />

    {/* 2) Unauthorized */}
    <Route path="/unauthorized" element={<Unauthorized />} />

    {/* 3) Admin & Teacher can both view /admin/* */}
    <Route
      path="/admin/*"
      element={
        <RequireAuth allowedRoles={["Admin", "Teacher"]}>
          <AdminLayout />
        </RequireAuth>
      }
    >
      <Route index element={<AdminDashboard />} />

      <Route
        path="setup"
        element={
          <RequireRole roles={["Admin"]}>
            <SchoolSetup />
          </RequireRole>
        }
      />

      <Route
        path="class-list"
        element={
          <RequireRole roles={["Admin", "Teacher"]}>
            <ClassListPage />
          </RequireRole>
        }
      />

      <Route path="*" element={<Navigate to="/admin" replace />} />
    </Route>

    {/* 4) Teacher area */}
    <Route
      path="/teacher/*"
      element={
        <RequireAuth allowedRoles={["Teacher"]}>
          <TeacherLayout />
        </RequireAuth>
      }
    >
      <Route index element={<TeacherDashboard />} />

      <Route
        path="classes"
        element={
          <RequireRole roles={["Teacher"]}>
            <ClassesPage />
          </RequireRole>
        }
      />

      <Route
        path="attendance"
        element={
          <RequireRole roles={["Teacher"]}>
            <AttendancePage />
          </RequireRole>
        }
      />

      <Route path="*" element={<Navigate to="/teacher" replace />} />
    </Route>

    {/* 5) Student area */}
    <Route
      path="/student/*"
      element={
        <RequireAuth allowedRoles={["Student"]}>
          <StudentLayout />
        </RequireAuth>
      }
    >
      <Route index element={<StudentDashboard />} />

      <Route
        path="profile"
        element={
          <RequireRole roles={["Student"]}>
            <ProfilePage />
          </RequireRole>
        }
      />

      <Route path="*" element={<Navigate to="/student" replace />} />
    </Route>

    {/* 6) Parent area */}
    <Route
      path="/parent/*"
      element={
        <RequireAuth allowedRoles={["Parent"]}>
          <ParentLayout />
        </RequireAuth>
      }
    >
      <Route index element={<ParentDashboard />} />

      <Route
        path="child-profile"
        element={
          <RequireRole roles={["Parent"]}>
            <ChildProfilePage />
          </RequireRole>
        }
      />

      <Route path="*" element={<Navigate to="/parent" replace />} />
    </Route>

    {/* 7) Finally, any other unknown path send back to root */}
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default AppRoutes;
