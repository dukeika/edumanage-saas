// src/pages/admin/AdminDashboard.tsx
import React, { useEffect, useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import { useCurrentUser } from "../../utils/useCurrentUser";

interface Counts {
  students: number;
  classes: number;
  announcements: number;
  attendance: number;
}

const AdminDashboard: React.FC = () => {
  const { user, loading } = useCurrentUser(); // your hook
  const [busy, setBusy] = useState(true);
  const [counts, setCounts] = useState<Counts>({
    students: 0,
    classes: 0,
    announcements: 0,
    attendance: 0,
  });

  useEffect(() => {
    // once auth is ready…
    if (!loading) {
      setBusy(false);

      if (user?.schoolID) {
        // if/when you have a schoolID and AppSync seeded, you can re-enable this:
        /*
        setBusy(true);
        const client = generateClient();
        Promise.all([
          client.graphql({ query: listStudents,     variables:{ filter:{ schoolID:{ eq:user.schoolID } } } }),
          client.graphql({ query: listClasses,      variables:{ filter:{ schoolID:{ eq:user.schoolID } } } }),
          client.graphql({ query: listAnnouncements,variables:{ filter:{ schoolID:{ eq:user.schoolID } } } }),
          client.graphql({ query: listAttendances,  variables:{ filter:{ classID:{ beginsWith:user.schoolID } } } }),
        ])
        .then(([sRes, cRes, aRes, atRes]: any) => {
          setCounts({
            students:    sRes.data.listStudents.items.length,
            classes:     cRes.data.listClasses.items.length,
            announcements:aRes.data.listAnnouncements.items.length,
            attendance:  atRes.data.listAttendances.items.length,
          });
        })
        .catch(console.error)
        .finally(() => setBusy(false));
        */
      } else {
        console.warn("No schoolID present; showing default zero counts.");
      }
    }
  }, [loading, user]);

  if (loading || busy) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography variant="h5">Loading dashboard…</Typography>
      </Box>
    );
  }

  const cards = [
    { label: "Students", count: counts.students },
    { label: "Classes", count: counts.classes },
    { label: "Announcements", count: counts.announcements },
    { label: "Attendance", count: counts.attendance },
  ];

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Welcome, {user?.name || "Admin"}
      </Typography>

      <Box
        sx={{
          display: "grid",
          gap: 3,
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        }}
      >
        {cards.map(({ label, count }) => (
          <Paper key={label} sx={{ p: 3, textAlign: "center" }}>
            <Typography variant="h3">{count}</Typography>
            <Typography>{label}</Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default AdminDashboard;
