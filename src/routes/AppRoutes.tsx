import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminDashboard from "../pages/admin/AdminDashboard";
import TeacherDashboard from "../pages/teacher/TeacherDashboard";
import StudentDashboard from "../pages/student/StudentDashboard";
import ParentDashboard from "../pages/parent/ParentDashboard";
import SchoolSetup from "../pages/admin/SchoolSetup";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/teacher" element={<TeacherDashboard />} />
      <Route path="/student" element={<StudentDashboard />} />
      <Route path="/parent" element={<ParentDashboard />} />
      <Route path="*" element={<Navigate to="/admin" />} />
      <Route path="/admin/setup" element={<SchoolSetup />} />
    </Routes>
  );
};

export default AppRoutes;
