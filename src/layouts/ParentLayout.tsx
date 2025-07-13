// src/layouts/ParentLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import BaseLayout from "./BaseLayout";

const ParentLayout: React.FC = () => {
  return (
    <BaseLayout title="Parent">
      <Outlet />
    </BaseLayout>
  );
};

export default ParentLayout;
