// src/layouts/TeacherLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import BaseLayout from "./BaseLayout";

const TeacherLayout: React.FC = () => {
  return (
    <BaseLayout title="Teacher">
      <Outlet />
    </BaseLayout>
  );
};

export default TeacherLayout;
