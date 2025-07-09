import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const stats = [
  { title: "Students", value: 120, subtitle: "+12% this month" },
  { title: "Teachers", value: 12, subtitle: "+2 new" },
  { title: "Classes", value: 8, subtitle: "Stable" },
  { title: "Announcements", value: 5, subtitle: "1 new" },
];

const AdminStatsBar: React.FC = () => (
  <Grid container spacing={2}>
    {stats.map(({ title, value, subtitle }) => (
      <Grid size={{ xs: 12, sm: 6, md: 3 }} key={title}>
        <Card variant="outlined" sx={{ bgcolor: "white" }}>
          <CardContent>
            <Typography variant="h5" fontWeight="bold" color="primary.main">
              {value}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {title}
            </Typography>
            {subtitle && (
              <Box mt={1}>
                <Typography variant="caption" color="success.main">
                  {subtitle}
                </Typography>
              </Box>
            )}
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);

export default AdminStatsBar;
