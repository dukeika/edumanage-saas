// src/components/RoleSidebar.tsx
import React from "react";
import { Box, List, ListItemButton, ListItemText } from "@mui/material";
import { NavLink } from "react-router-dom";

export interface SidebarLink {
  to: string;
  label: string;
}

interface RoleSidebarProps {
  title: string;
  links: SidebarLink[];
}

const SIDEBAR_BG = "#1e293b";
const SIDEBAR_WIDTH = 240;

const RoleSidebar: React.FC<RoleSidebarProps> = ({ title, links }) => (
  <Box
    sx={{
      width: SIDEBAR_WIDTH,
      bgcolor: SIDEBAR_BG,
      color: "#fff",
      height: "100vh",
      position: "fixed",
      left: 0,
      top: 0,
      display: "flex",
      flexDirection: "column",
      zIndex: 1000,
      boxShadow: 2,
    }}
  >
    <Box sx={{ px: 3, py: 4 }}>
      <span style={{ fontSize: 22, fontWeight: 700, letterSpacing: 2 }}>
        {title}
      </span>
    </Box>
    <List sx={{ flex: 1 }}>
      {links.map((l) => (
        <ListItemButton
          key={l.to}
          component={NavLink}
          to={l.to}
          sx={{
            color: "#fff",
            "&.active": {
              bgcolor: "#334155",
              color: "#61dafb",
              fontWeight: 700,
            },
            borderRadius: 1,
            mx: 1,
          }}
        >
          <ListItemText primary={l.label} />
        </ListItemButton>
      ))}
    </List>
  </Box>
);

export default RoleSidebar;
