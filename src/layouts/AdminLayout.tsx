// src/layouts/AdminLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import BaseLayout from "./BaseLayout";

const AdminLayout: React.FC = () => {
  return (
    <BaseLayout title="School Admin">
      <Outlet />
    </BaseLayout>
  );
};

export default AdminLayout;
