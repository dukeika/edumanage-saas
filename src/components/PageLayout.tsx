// src/components/PageLayout.tsx
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useAuthenticator } from "@aws-amplify/ui-react";

export interface PageLayoutProps {
  title?: string;
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ title, children }) => {
  const { user, signOut } = useAuthenticator((ctx) => [ctx.user]);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Typography variant="h6">{title || "Admin"}</Typography>
        <Box>
          <Typography variant="body2" component="span" sx={{ mr: 2 }}>
            {user?.username}
          </Typography>
          <Button variant="outlined" onClick={signOut}>
            Sign Out
          </Button>
        </Box>
      </Box>

      <Box sx={{ p: 3 }}>{children}</Box>
    </Box>
  );
};

export default PageLayout;
