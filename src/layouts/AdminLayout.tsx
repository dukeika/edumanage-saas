import React from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

const drawerWidth = 240;

export interface LayoutProps {
  signOut: () => void;
  children: React.ReactNode;
}

export const AdminLayout: React.FC<LayoutProps> = ({ signOut, children }) => (
  <Box sx={{ display: "flex" }}>
    <AppBar position="fixed" sx={{ zIndex: (t) => t.zIndex.drawer + 1 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          EduManage Admin
        </Typography>
        <IconButton color="inherit" onClick={signOut}>
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>

    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <List>
        <ListItemButton component={NavLink} to="/admin/dashboard" end>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton component={NavLink} to="/admin/setup">
          <ListItemText primary="School Setup" />
        </ListItemButton>
        <ListItemButton component={NavLink} to="/admin/class-list">
          <ListItemText primary="Classes" />
        </ListItemButton>
      </List>
    </Drawer>

    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      {children}
    </Box>
  </Box>
);
