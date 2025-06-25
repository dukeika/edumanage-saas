import { Routes, Route, Navigate } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";

import AdminDashboard from "./pages/admin/AdminDashboard";
import ClassFormPage from "./pages/admin/ClassFormPage";
import ClassListPage from "./pages/admin/ClassListPage";
import AcademicYearFormPage from "./pages/admin/AcademicYearFormPage";
import SubjectFormPage from "./pages/admin/SubjectFormPage";
import AssessmentFormPage from "./pages/admin/AssessmentFormPage";
import GradeEntryFormPage from "./pages/admin/GradeEntryFormPage";

const App = () => {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <>
          <div style={{ padding: "1rem" }}>
            <button onClick={signOut}>Sign out</button>
          </div>

          <Routes>
            <Route
              path="/"
              element={<Navigate to="/admin/dashboard" replace />}
            />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/class-form" element={<ClassFormPage />} />
            <Route path="/admin/class-list" element={<ClassListPage />} />
            <Route
              path="/admin/academic-year-form"
              element={<AcademicYearFormPage />}
            />
            <Route path="/admin/subject-form" element={<SubjectFormPage />} />
            <Route
              path="/admin/assessment-form"
              element={<AssessmentFormPage />}
            />
            <Route path="/admin/grade-entry" element={<GradeEntryFormPage />} />
          </Routes>
        </>
      )}
    </Authenticator>
  );
};

export default App;
