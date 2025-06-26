// src/layouts/TeacherLayout.tsx
import React from "react";
import { Outlet, Link } from "react-router-dom";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  IconButton,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuthenticator } from "@aws-amplify/ui-react";

const TeacherLayout: React.FC = () => {
  const { signOut } = useAuthenticator();
  const [value, setValue] = React.useState(0);
  const handleChange = (_: any, newValue: number) => setValue(newValue);

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Teacher Portal
          </Typography>
          <IconButton color="inherit" onClick={signOut}>
            <LogoutIcon />
          </IconButton>
        </Toolbar>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Dashboard" component={Link} to="/teacher" />
          <Tab label="My Classes" component={Link} to="/teacher/classes" />
          <Tab label="Attendance" component={Link} to="/teacher/attendance" />
        </Tabs>
      </AppBar>

      <Box sx={{ p: 2 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default TeacherLayout;
