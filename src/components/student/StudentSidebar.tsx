import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const drawerWidth = 240;

const links = [
  { to: "/student", label: "Dashboard", exact: true },
  { to: "/student/announcements", label: "Announcements" },
  { to: "/student/attendance-history", label: "Attendance History" },
];

const StudentSidebar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
          bgcolor: "primary.main",
          color: "white",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Box sx={{ px: 2, py: 3, minHeight: 64 }}>
        <Typography variant="h6" fontWeight="bold" color="inherit">
          Student Panel
        </Typography>
      </Box>
      <List sx={{ flexGrow: 1 }}>
        {links.map(({ to, label }) => (
          <ListItem key={to} disablePadding>
            <ListItemButton
              component={NavLink}
              to={to}
              end={to === "/student"}
              sx={{
                color: "inherit",
                "&.active": {
                  bgcolor: "primary.light",
                  fontWeight: "bold",
                },
              }}
            >
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ px: 2, pb: 3 }}>
        <Button
          fullWidth
          variant="contained"
          color="secondary"
          onClick={() => {
            localStorage.clear();
            window.location.assign("/");
          }}
        >
          Sign Out
        </Button>
      </Box>
    </Drawer>
  );
};

export default StudentSidebar;
