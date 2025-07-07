import React from "react";
import { Routes, Route } from "react-router-dom";

import AdminDashboard from "../pages/admin/AdminDashboard";
import ClassFormPage from "../pages/admin/ClassFormPage";
import ClassListPage from "../pages/admin/ClassListPage";
import AcademicYearFormPage from "../pages/admin/AcademicYearFormPage";
import SubjectFormPage from "../pages/admin/SubjectFormPage";
import AssessmentFormPage from "../pages/admin/AssessmentFormPage";
import GradeEntryFormPage from "../pages/admin/GradeEntryFormPage";
import AdminSetupPage from "../pages/admin/AdminSetupPage";
import AnnouncementCreatePage from "../pages/admin/AnnouncementCreatePage";

import TeacherDashboard from "../pages/teacher/TeacherDashboard";
import StudentDashboard from "../pages/student/StudentDashboard";
import ParentDashboard from "../pages/parent/ParentDashboard";

type AppRoutesProps = {
  user: any; // The AuthUser from Amplify UI
  signOut: () => void; // The signOut function
};

const AppRoutes: React.FC<AppRoutesProps> = ({ user, signOut }) => (
  <Routes>
    {/* Admin area */}
    <Route
      path="dashboard"
      element={<AdminDashboard user={user} signOut={signOut} />}
    />
    <Route path="setup" element={<AdminSetupPage />} />
    <Route path="class-form" element={<ClassFormPage />} />
    <Route path="class-list" element={<ClassListPage />} />
    <Route path="academic-year-form" element={<AcademicYearFormPage />} />
    <Route path="subject-form" element={<SubjectFormPage />} />
    <Route path="assessment-form" element={<AssessmentFormPage />} />
    <Route path="grade-entry" element={<GradeEntryFormPage />} />
    <Route path="announcement-create" element={<AnnouncementCreatePage />} />

    {/* Other roles */}
    <Route path="teacher" element={<TeacherDashboard />} />
    <Route path="student" element={<StudentDashboard />} />
    <Route path="parent" element={<ParentDashboard />} />
  </Routes>
);

export default AppRoutes;
