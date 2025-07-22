import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const stats = [
  { title: "Children", value: 2 },
  { title: "Outstanding Fees", value: "₦15,000" },
  { title: "Attendance %", value: "98%" },
  { title: "Unread Announcements", value: 1 },
];

const ParentStatsBar: React.FC = () => (
  <Grid container spacing={2}>
    {stats.map(({ title, value }) => (
      <Grid item xs={12} sm={6} md={3} key={title}>
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

export default ParentStatsBar;
