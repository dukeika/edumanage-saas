import React from "react";
import { NavLink } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const links = [
  { to: "/admin", label: "Dashboard" },
  { to: "/admin/students", label: "Students" },
  { to: "/admin/teachers", label: "Teachers" },
  { to: "/admin/classes", label: "Classes" },
  { to: "/admin/announcements", label: "Announcements" },
  { to: "/admin/reports", label: "Reports" },
];

const AdminSidebarContent: React.FC<{ onClose?: () => void }> = ({
  onClose,
}) => (
  <Box
    sx={{
      width: 240,
      display: "flex",
      flexDirection: "column",
      height: "100%",
    }}
  >
    <Box sx={{ px: 2, py: 3, minHeight: 64 }}>
      <Typography variant="h6" fontWeight="bold" color="inherit">
        Admin Panel
      </Typography>
    </Box>
    <List sx={{ flexGrow: 1 }}>
      {links.map(({ to, label }) => (
        <ListItem key={to} disablePadding>
          <ListItemButton
            component={NavLink}
            to={to}
            end={to === "/admin"}
            onClick={onClose}
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
  </Box>
);

export default AdminSidebarContent;
