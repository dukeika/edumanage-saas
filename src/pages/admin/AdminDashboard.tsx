// src/pages/admin/AdminDashboard.tsx
import React, { useEffect, useState } from "react";
import { Box, Paper, Typography, Grid, Button } from "@mui/material";
import { generateClient } from "@aws-amplify/api";
import {
  listStudents,
  listClasses,
  listAnnouncements,
  listAttendances,
} from "../../graphql/queries";
import { signOut } from "@aws-amplify/auth";
import { useCurrentUser } from "../../hooks/useCurrentUser";

interface Counts {
  students: number;
  classes: number;
  announcements: number;
  attendance: number;
}

const AdminDashboard: React.FC = () => {
  const { user, loading } = useCurrentUser();
  const [counts, setCounts] = useState<Counts>({
    students: 0,
    classes: 0,
    announcements: 0,
    attendance: 0,
  });
  const [fetched, setFetched] = useState(false);

  // schoolID should be present on the user (update as per your token structure)
  const schoolID = user?.schoolId;

  useEffect(() => {
    if (!loading && user && schoolID && !fetched) {
      const client = generateClient();
      Promise.all([
        client.graphql({
          query: listStudents,
          variables: { filter: { schoolID: { eq: schoolID } } },
        }),
        client.graphql({
          query: listClasses,
          variables: { filter: { schoolID: { eq: schoolID } } },
        }),
        client.graphql({
          query: listAnnouncements,
          variables: { filter: { schoolID: { eq: schoolID } } },
        }),
        client.graphql({
          query: listAttendances,
          variables: { filter: { classID: { beginsWith: schoolID } } },
        }),
      ])
        .then(([s, c, a, at]: any) => {
          setCounts({
            students: s.data.listStudents.items.length,
            classes: c.data.listClasses.items.length,
            announcements: a.data.listAnnouncements.items.length,
            attendance: at.data.listAttendances.items.length,
          });
          setFetched(true);
        })
        .catch(console.error);
    }
  }, [loading, user, schoolID, fetched]);

  if (loading) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography variant="h5">Loading…</Typography>
      </Box>
    );
  }

  if (!user) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography variant="h5" color="error">
          Unauthorized. Please log in.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="h4" gutterBottom>
          Welcome, {user.name ?? user.email ?? "Admin"}
        </Typography>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => signOut().then(() => window.location.replace("/"))}
        >
          Logout
        </Button>
      </Box>

      <Grid container spacing={3}>
        {[
          ["Students", counts.students],
          ["Classes", counts.classes],
          ["Announcements", counts.announcements],
          ["Attendance", counts.attendance],
        ].map(([label, val]) => (
          <Grid size={{ xs: 12, md: 6 }} key={label}>
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
