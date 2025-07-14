// src/components/admin/AdminSidebar.tsx
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  Divider,
  Paper,
  Badge,
} from "@mui/material";
import { generateClient } from "@aws-amplify/api";
import {
  listStudents,
  listUsers, // Used to get Teachers
  listClasses,
  listAnnouncements,
} from "../../graphql/queries";
import { useCurrentUser } from "../../hooks/useCurrentUser";

const navLinks = [
  { to: "/admin", label: "Dashboard" },
  { to: "/admin/students", label: "Students", key: "students" },
  { to: "/admin/teachers", label: "Teachers", key: "teachers" },
  { to: "/admin/classes", label: "Classes", key: "classes" },
  { to: "/admin/announcements", label: "Announcements", key: "announcements" },
  { to: "/admin/reports", label: "Reports" },
];

const AdminSidebar: React.FC = () => {
  const { user } = useCurrentUser();
  const [counts, setCounts] = useState({
    students: 0,
    teachers: 0,
    classes: 0,
    announcements: 0,
  });
  const location = useLocation();

  useEffect(() => {
    const fetchCounts = async () => {
      if (!user?.schoolId) return;
      const client = generateClient();

      try {
        const [studentsRes, teachersRes, classesRes, announcementsRes] =
          await Promise.all([
            client.graphql({
              query: listStudents,
              variables: { filter: { schoolID: { eq: user.schoolId } } },
            }),
            client.graphql({
              query: listUsers,
              variables: {
                filter: {
                  schoolID: { eq: user.schoolId },
                  role: { eq: "Teacher" },
                },
              },
            }),
            client.graphql({
              query: listClasses,
              variables: { filter: { schoolID: { eq: user.schoolId } } },
            }),
            client.graphql({
              query: listAnnouncements,
              variables: { filter: { schoolID: { eq: user.schoolId } } },
            }),
          ]);

        setCounts({
          students: studentsRes.data.listStudents.items.length,
          teachers: teachersRes.data.listUsers.items.length,
          classes: classesRes.data.listClasses.items.length,
          announcements: announcementsRes.data.listAnnouncements.items.length,
        });
      } catch (err) {
        setCounts({
          students: 0,
          teachers: 0,
          classes: 0,
          announcements: 0,
        });
      }
    };

    fetchCounts();
  }, [user?.schoolId]);

  return (
    <Paper
      elevation={3}
      sx={{
        width: 260,
        height: "100vh",
        p: 0,
        bgcolor: "primary.main",
        color: "#fff",
        borderRight: 0,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ p: 3, textAlign: "center" }}>
        <Typography variant="h5" fontWeight={700} sx={{ letterSpacing: 1 }}>
          Admin Panel
        </Typography>
      </Box>
      <Divider sx={{ bgcolor: "primary.light", mb: 1 }} />
      <List>
        {navLinks.map(({ to, label, key }) => (
          <ListItem disablePadding key={to}>
            <ListItemButton
              component={NavLink}
              to={to}
              selected={location.pathname === to}
              sx={{
                color: "#fff",
                "&.active, &.Mui-selected": {
                  bgcolor: "primary.dark",
                },
              }}
            >
              <ListItemText
                primary={
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    {label}
                    {key &&
                      typeof counts[key as keyof typeof counts] ===
                        "number" && (
                        <Badge
                          color="secondary"
                          badgeContent={counts[key as keyof typeof counts]}
                          sx={{ ml: 1 }}
                        />
                      )}
                  </Box>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default AdminSidebar;
