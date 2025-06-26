// src/pages/admin/AdminDashboard.tsx
import React, { useEffect, useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { generateClient } from "aws-amplify/api";
import {
  listClasses,
  listStudents,
  listAnnouncements,
} from "../../graphql/queries";
import { useCurrentUser } from "../../utils/useCurrentUser";

const client = generateClient();

const AdminDashboard: React.FC = () => {
  const { user, loading: userLoading } = useCurrentUser();
  const [counts, setCounts] = useState({
    classes: 0,
    students: 0,
    announcements: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.schoolID) {
      Promise.all([
        client.graphql({
          query: listClasses,
          variables: { filter: { schoolID: { eq: user.schoolID } } },
        }),
        client.graphql({
          query: listStudents,
          variables: { filter: { schoolID: { eq: user.schoolID } } },
        }),
        client.graphql({
          query: listAnnouncements,
          variables: { filter: { schoolID: { eq: user.schoolID } } },
        }),
      ])
        .then(([cRes, sRes, aRes]: any[]) => {
          const cls = cRes.data.listClasses.items || [];
          const stu = sRes.data.listStudents.items || [];
          const ann = aRes.data.listAnnouncements.items || [];
          setCounts({
            classes: cls.length,
            students: stu.length,
            announcements: ann.length,
          });
        })
        .finally(() => setLoading(false));
    }
  }, [user]);

  if (userLoading || loading) {
    return <Typography>Loading dashboard…</Typography>;
  }

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Welcome, {user?.name}
      </Typography>
      <Grid container spacing={3}>
        {[
          { label: "Classes", count: counts.classes },
          { label: "Students", count: counts.students },
          { label: "Announcements", count: counts.announcements },
        ].map(({ label, count }) => (
          <Grid size={{ xs: 12, md: 6 }} key={label}>
            <Paper sx={{ p: 3, textAlign: "center" }}>
              <Typography variant="h5">{count}</Typography>
              <Typography>{label}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AdminDashboard;
