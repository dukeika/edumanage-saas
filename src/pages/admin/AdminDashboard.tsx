// src/pages/admin/AdminDashboard.tsx
import React, { useEffect, useState } from "react";
import { Box, Paper, Typography, Grid } from "@mui/material";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { generateClient } from "@aws-amplify/api";
import {
  listStudents,
  listClasses,
  listAnnouncements,
  listAttendances,
} from "../../graphql/queries";

interface Counts {
  students: number;
  classes: number;
  announcements: number;
  attendance: number;
}

const AdminDashboard: React.FC = () => {
  // pull `user` and `route` from Amplify's hook
  const { user, route } = useAuthenticator((ctx) => [ctx.user, ctx.route]);
  const [counts, setCounts] = useState<Counts>({
    students: 0,
    classes: 0,
    announcements: 0,
    attendance: 0,
  });
  const [fetched, setFetched] = useState(false);

  // cast user to any so TS stops complaining
  const attrs = (user as any)?.attributes as Record<string, string> | undefined;
  const schoolID = attrs?.["custom:schoolID"];

  useEffect(() => {
    // once we're authenticated, and have a schoolID, fetch data
    if (route === "authenticated" && schoolID && !fetched) {
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
  }, [route, schoolID, fetched]);

  // show a spinner/text until Amplify has finished bootstrapping
  if (route !== "authenticated") {
    return (
      <Box sx={{ p: 4 }}>
        <Typography variant="h5">Authenticating…</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Welcome, {attrs?.name || attrs?.email || "Admin"}
      </Typography>

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
