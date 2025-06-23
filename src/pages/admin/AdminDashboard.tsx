import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="body1" gutterBottom>
          Welcome, Admin. Here you'll manage users, classes, fees, and
          announcements.
        </Typography>
      </Paper>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => navigate("/admin/class-form")}
          >
            Create Class
          </Button>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => navigate("/admin/class-list")}
          >
            View Classes
          </Button>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => navigate("/admin/academic-year-form")}
          >
            Academic Year
          </Button>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => navigate("/admin/subject-form")}
          >
            Add Subject
          </Button>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => navigate("/admin/assessment-form")}
          >
            New Assessment
          </Button>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => navigate("/admin/grade-entry")}
          >
            Enter Grades
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminDashboard;
