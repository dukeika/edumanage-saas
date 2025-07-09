import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const stats = [
  { title: "Today’s Classes", value: 4 },
  { title: "Students", value: 90 },
  { title: "Attendance Pending", value: 2 },
  { title: "Announcements", value: 3 },
];

const TeacherStatsBar: React.FC = () => (
  <Grid container spacing={2}>
    {stats.map(({ title, value }) => (
      <Grid size={{ xs: 12, sm: 6, md: 3 }} key={title}>
        <Card variant="outlined" sx={{ bgcolor: "white" }}>
          <CardContent>
            <Typography variant="h5" fontWeight="bold" color="primary.main">
              {value}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {title}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);

export default TeacherStatsBar;
