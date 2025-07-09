import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from "../layouts/AdminLayout";
import TeacherLayout from "../layouts/TeacherLayout";
import StudentLayout from "../layouts/StudentLayout";
import ParentLayout from "../layouts/ParentLayout";

import AdminDashboard from "../pages/admin/AdminDashboard";
import ManageStudentsPage from "../pages/admin/ManageStudentsPage";
import ManageTeachersPage from "../pages/admin/ManageTeachersPage";
import ManageClassesPage from "../pages/admin/ManageClassesPage";
import AnnouncementsPage from "../pages/admin/AnnouncementsPage";
import ReportsPage from "../pages/admin/ReportsPage";

import TeacherDashboard from "../pages/teacher/TeacherDashboard";
import StudentDashboard from "../pages/student/StudentDashboard";
import ParentDashboard from "../pages/parent/ParentDashboard";

import RoleBasedRedirect from "../components/RoleBasedRedirect";
import Unauthorized from "../components/Unauthorized";
import RequireAuth from "../components/RequireAuth";

import AttendancePage from "../pages/teacher/AttendancePage";
import TeacherAnnouncementsPage from "../pages/teacher/TeacherAnnouncementsPage";
import StudentAnnouncementsPage from "../pages/student/StudentAnnouncementsPage";
import AttendanceHistoryPage from "../pages/student/AttendanceHistoryPage";
import ParentAnnouncementsPage from "../pages/parent/ParentAnnouncementsPage";
import FeeBalancePage from "../pages/parent/FeeBalancePage";

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
      <Route path="students" element={<ManageStudentsPage />} />
      <Route path="teachers" element={<ManageTeachersPage />} />
      <Route path="classes" element={<ManageClassesPage />} />
      <Route path="announcements" element={<AnnouncementsPage />} />
      <Route path="reports" element={<ReportsPage />} />
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
      <Route path="attendance" element={<AttendancePage />} />
      <Route path="announcements" element={<TeacherAnnouncementsPage />} />
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
      <Route path="announcements" element={<StudentAnnouncementsPage />} />
      <Route path="attendance-history" element={<AttendanceHistoryPage />} />
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
      <Route path="announcements" element={<ParentAnnouncementsPage />} />
      <Route path="fee-balance" element={<FeeBalancePage />} />
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
