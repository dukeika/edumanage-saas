import React from "react";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

type AdminDashboardProps = {
  user: any;
  signOut: () => void;
};

const AdminDashboard: React.FC<AdminDashboardProps> = ({ user, signOut }) => {
  const navigate = useNavigate();
  const email = user?.attributes?.email || user?.username;

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>

      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography>Welcome, {email}</Typography>
        <Button onClick={signOut} sx={{ mt: 2 }} variant="outlined">
          Sign Out
        </Button>
      </Paper>

      <Grid container spacing={2}>
        {/* Example nav buttons */}
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Button fullWidth onClick={() => navigate("/admin/class-form")}>
            Create Class
          </Button>
        </Grid>
        {/* …and so on for other pages… */}
      </Grid>
    </Box>
  );
};

export default AdminDashboard;
