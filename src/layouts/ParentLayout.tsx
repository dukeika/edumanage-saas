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
import RequireRole from "../components/RequireRole";

const drawerWidth = 240;

const ParentLayout: React.FC = () => {
  const { signOut } = useAuthenticator();

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" sx={{ zIndex: (t) => t.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            EduManage Parent
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
          <RequireRole roles={["Parent"]}>
            <ListItemButton
              component={NavLink}
              to="/parent"
              end
              sx={{ "&.active": { backgroundColor: "action.selected" } }}
            >
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </RequireRole>

          <RequireRole roles={["Parent"]}>
            <ListItemButton
              component={NavLink}
              to="/parent/child-profile"
              sx={{ "&.active": { backgroundColor: "action.selected" } }}
            >
              <ListItemText primary="Child Profile" />
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

export default ParentLayout;
