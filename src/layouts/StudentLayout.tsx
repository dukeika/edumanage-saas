// src/layouts/StudentLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import BaseLayout from "./BaseLayout";

const StudentLayout: React.FC = () => {
  return (
    <BaseLayout title="Student">
      <Outlet />
    </BaseLayout>
  );
};

export default StudentLayout;
