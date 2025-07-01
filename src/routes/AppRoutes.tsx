import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import RequireAuth from "../components/RequireAuth";
import AutoRedirect from "../components/AutoRedirect";

// Import dashboards and forms
import AdminDashboard from "../pages/admin/AdminDashboard";
import TeacherDashboard from "../pages/teacher/TeacherDashboard";
import StudentDashboard from "../pages/student/StudentDashboard";
import ParentDashboard from "../pages/parent/ParentDashboard";

// Admin forms/lists
import CreateSchoolForm from "../pages/admin/CreateSchoolForm";
import CreateAcademicYearForm from "../pages/admin/CreateAcademicYearForm";
import CreateTermForm from "../pages/admin/CreateTermForm";
import CreateClassForm from "../pages/admin/CreateClassForm";
import AddSubjectForm from "../pages/admin/AddSubjectForm";
import AddStudentForm from "../pages/admin/AddStudentForm";
import AddAssessmentForm from "../pages/admin/AddAssessmentForm";
import AddGradeForm from "../pages/admin/AddGradeForm";
import AddAttendanceForm from "../pages/admin/AddAttendanceForm";
import AddAnnouncementForm from "../pages/admin/AddAnnouncementForm";
import ListStudents from "../pages/admin/ListStudents";
import ListTeachers from "../pages/admin/ListTeachers";
import ListClasses from "../pages/admin/ListClasses";
import ListParents from "../pages/admin/ListParents";

// Unauthorized fallback
const Unauthorized = () => (
  <div style={{ textAlign: "center", marginTop: 80 }}>
    <h1>🚫 Unauthorized</h1>
    <p>You don’t have permission to view that page.</p>
  </div>
);

const AppRoutes: React.FC = () => (
  <Routes>
    {/* Root: redirect based on role */}
    <Route
      path="/"
      element={
        <RequireAuth>
          <AutoRedirect />
        </RequireAuth>
      }
    />

    {/* ADMIN DASHBOARD & NESTED ROUTES */}
    <Route
      path="/admin"
      element={
        <RequireAuth allowedGroups={["Admins"]}>
          <AdminDashboard />
        </RequireAuth>
      }
    >
      <Route
        index
        element={
          <div>
            <h2>Welcome to the Admin Dashboard</h2>
            <p>Select an action on the left to get started.</p>
          </div>
        }
      />
      <Route path="create-school" element={<CreateSchoolForm />} />
      <Route path="create-academic-year" element={<CreateAcademicYearForm />} />
      <Route path="create-term" element={<CreateTermForm />} />
      <Route path="create-class" element={<CreateClassForm />} />
      <Route path="add-subject" element={<AddSubjectForm />} />
      <Route path="add-student" element={<AddStudentForm />} />
      <Route path="add-assessment" element={<AddAssessmentForm />} />
      <Route path="add-grade" element={<AddGradeForm />} />
      <Route path="add-attendance" element={<AddAttendanceForm />} />
      <Route path="add-announcement" element={<AddAnnouncementForm />} />
      <Route path="list-students" element={<ListStudents />} />
      <Route path="list-teachers" element={<ListTeachers />} />
      <Route path="list-classes" element={<ListClasses />} />
      <Route path="list-parents" element={<ListParents />} />
    </Route>

    {/* TEACHER DASHBOARD */}
    <Route
      path="/teacher"
      element={
        <RequireAuth allowedGroups={["Teachers"]}>
          <TeacherDashboard />
        </RequireAuth>
      }
    />

    {/* STUDENT DASHBOARD */}
    <Route
      path="/student"
      element={
        <RequireAuth allowedGroups={["Students"]}>
          <StudentDashboard />
        </RequireAuth>
      }
    />

    {/* PARENT DASHBOARD */}
    <Route
      path="/parent"
      element={
        <RequireAuth allowedGroups={["Parents"]}>
          <ParentDashboard />
        </RequireAuth>
      }
    />

    {/* Unauthorized fallback */}
    <Route path="/unauthorized" element={<Unauthorized />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default AppRoutes;
