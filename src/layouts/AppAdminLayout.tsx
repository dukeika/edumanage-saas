// src/layouts/AppAdminLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import BaseLayout from "./BaseLayout";

const AppAdminLayout: React.FC = () => {
  return (
    <BaseLayout title="Application Admin">
      <Outlet />
    </BaseLayout>
  );
};

export default AppAdminLayout;
