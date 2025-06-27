// src/routes/AppRoutes.tsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import AdminDashboard from "../pages/admin/AdminDashboard";

const AppRoutes: React.FC = () => (
  <Routes>
    {/* ‣ All “/admin/*” URLs */}
    <Route path="/admin/*" element={<AdminLayout />}>
      <Route index element={<AdminDashboard />} />
      {/* catch invalid under /admin → back to dashboard */}
      <Route path="*" element={<Navigate to="/admin" replace />} />
    </Route>

    {/* ‣ Root → redirect into /admin */}
    <Route path="/" element={<Navigate to="/admin" replace />} />

    {/* ‣ Anything else → back to root */}
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default AppRoutes;
