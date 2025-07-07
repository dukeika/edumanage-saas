import React from "react";
import { Typography } from "@mui/material";
import RequireRole from "../../components/RequireRole";
import AnnouncementForm from "./AnnouncementForm";

const AnnouncementCreatePage: React.FC = () => (
  <RequireRole roles={["Student", "Parent"]}>
    <AnnouncementForm />
  </RequireRole>
);

export default AnnouncementCreatePage;
