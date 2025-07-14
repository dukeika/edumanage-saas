import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  Typography,
  Button,
} from "@mui/material";
import { signOut } from "aws-amplify/auth";

const navLinks = [
  { label: "Dashboard", to: "/app-admin" },
  { label: "Schools", to: "/app-admin/schools" },
  { label: "Users", to: "/app-admin/users" },
  { label: "Create School", to: "/app-admin/create-school" },
  { label: "Assign Admin", to: "/app-admin/assign-admin" },
];

const AppAdminSidebar: React.FC = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/", { replace: true });
  };

  return (
    <Box
      sx={{
        width: 240,
        minHeight: "100vh",
        background: "linear-gradient(180deg, #1e293b 0%, #334155 100%)",
        color: "#fff",
        py: 4,
        px: 2,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography
          variant="h5"
          sx={{ mb: 3, fontWeight: 700, color: "#38bdf8" }}
        >
          App Admin
        </Typography>
        <List>
          {navLinks.map(({ label, to }) => (
            <ListItemButton
              key={to}
              component={NavLink}
              to={to}
              sx={{
                borderRadius: 1,
                color: "#fff",
                mb: 1,
                "&.active": {
                  background: "#38bdf8",
                  color: "#0f172a",
                  fontWeight: 600,
                },
              }}
            >
              <ListItemText primary={label} />
            </ListItemButton>
          ))}
        </List>
        <Divider sx={{ my: 2, bgcolor: "#475569" }} />
      </Box>
      <Button
        variant="outlined"
        color="inherit"
        fullWidth
        onClick={handleSignOut}
        sx={{
          mt: 2,
          borderColor: "#38bdf8",
          color: "#38bdf8",
          "&:hover": {
            background: "#38bdf8",
            color: "#0f172a",
            borderColor: "#38bdf8",
          },
        }}
      >
        Sign Out
      </Button>
    </Box>
  );
};

export default AppAdminSidebar;
