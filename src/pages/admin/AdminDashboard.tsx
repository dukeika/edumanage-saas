import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { generateClient } from "@aws-amplify/api";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import {
  listStudents,
  listUsers, // <-- Use this for Teachers
  listClasses,
  listAnnouncements,
} from "../../graphql/queries";

const AdminDashboard: React.FC = () => {
  const { user, loading } = useCurrentUser();
  const [stats, setStats] = useState({
    students: 0,
    teachers: 0,
    classes: 0,
    announcements: 0,
  });

  useEffect(() => {
    if (!loading && user?.schoolId) {
      const client = generateClient();
      Promise.all([
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
      ]).then(
        ([studentsRes, teachersRes, classesRes, announcementsRes]: any) => {
          setStats({
            students: studentsRes.data.listStudents.items.length,
            teachers: teachersRes.data.listUsers.items.length,
            classes: classesRes.data.listClasses.items.length,
            announcements: announcementsRes.data.listAnnouncements.items.length,
          });
        }
      );
    }
  }, [user, loading]);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Welcome, {user?.name || user?.email || "Admin"}
      </Typography>
      <Grid container spacing={3}>
        {[
          ["Students", stats.students],
          ["Teachers", stats.teachers],
          ["Classes", stats.classes],
          ["Announcements", stats.announcements],
        ].map(([label, val]) => (
          <Grid item xs={12} md={6} key={label as string}>
            <Paper sx={{ p: 3, textAlign: "center" }}>
              <Typography variant="h3">{val}</Typography>
              <Typography>{label}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AdminDashboard;
