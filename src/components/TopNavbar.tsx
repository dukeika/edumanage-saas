// src/components/TopNavbar.tsx
import React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { signOut } from "@aws-amplify/auth";
import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "../hooks/useCurrentUser";

const NAV_BG = "#1e293b"; // same as sidebar

const TopNavbar: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useCurrentUser();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate("/", { replace: true });
    } catch {
      navigate("/", { replace: true });
    }
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: NAV_BG,
        color: "#fff",
        borderBottom: "1px solid #172235",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: 1 }}>
          ClassPoint
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            {user?.name || user?.email || "User"}
          </Typography>
          <Button
            variant="outlined"
            color="inherit"
            onClick={handleSignOut}
            sx={{
              borderColor: "#fff",
              color: "#fff",
              "&:hover": {
                background: "#334155",
                borderColor: "#fff",
              },
            }}
          >
            Sign Out
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavbar;
