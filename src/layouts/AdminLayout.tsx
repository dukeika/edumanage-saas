import React from "react";
import { Outlet, NavLink } from "react-router-dom";
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
import { useAuthenticator } from "@aws-amplify/ui-react";
import { API, graphqlOperation } from "aws-amplify";
import RequireRole from "../components/RequireRole";

const drawerWidth = 240;

const AdminLayout: React.FC = () => {
  const { signOut } = useAuthenticator();

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" sx={{ zIndex: (t) => t.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            EduManage Admin
          </Typography>
          <IconButton color="inherit" onClick={() => signOut?.()}>
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
          <RequireRole roles={["Admin"]}>
            <ListItemButton
              component={NavLink}
              to="/admin"
              end
              sx={{ "&.active": { backgroundColor: "action.selected" } }}
            >
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </RequireRole>

          <RequireRole roles={["Admin"]}>
            <ListItemButton
              component={NavLink}
              to="/admin/setup"
              sx={{ "&.active": { backgroundColor: "action.selected" } }}
            >
              <ListItemText primary="School Setup" />
            </ListItemButton>
          </RequireRole>

          <RequireRole roles={["Admin"]}>
            <ListItemButton
              component={NavLink}
              to="/admin/class-list"
              sx={{ "&.active": { backgroundColor: "action.selected" } }}
            >
              <ListItemText primary="Classes" />
            </ListItemButton>
          </RequireRole>
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminLayout;
