import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ClassFormPage from "./pages/admin/ClassFormPage";
import ClassListPage from "./pages/admin/ClassListPage";
import AcademicYearFormPage from "./pages/admin/AcademicYearFormPage";
import SubjectFormPage from "./pages/admin/SubjectFormPage";
import AssessmentFormPage from "./pages/admin/AssessmentFormPage";
import GradeEntryFormPage from "./pages/admin/GradeEntryFormPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ Default route for "/" */}
        <Route path="/" element={<Navigate to="/admin/dashboard" replace />} />

        {/* ✅ Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/class-form" element={<ClassFormPage />} />
        <Route path="/admin/class-list" element={<ClassListPage />} />
        <Route
          path="/admin/academic-year-form"
          element={<AcademicYearFormPage />}
        />
        <Route path="/admin/subject-form" element={<SubjectFormPage />} />
        <Route path="/admin/assessment-form" element={<AssessmentFormPage />} />
        <Route path="/admin/grade-entry" element={<GradeEntryFormPage />} />
      </Routes>
    </Router>
  );
}

export default App;
