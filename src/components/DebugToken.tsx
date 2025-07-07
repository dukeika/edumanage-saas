import React from "react";
import { Paper, Typography } from "@mui/material";
import { useCurrentUser } from "../utils/useCurrentUser";

const DebugToken: React.FC = () => {
  const { user, loading } = useCurrentUser();
  if (loading) return <Typography>Loading user info…</Typography>;

  return (
    <Paper sx={{ p: 2, backgroundColor: "#f5f5f5" }}>
      <Typography variant="subtitle1">Decoded CurrentUser</Typography>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </Paper>
  );
};

export default DebugToken;
