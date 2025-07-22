import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Divider,
  Chip,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
} from "@mui/material";
import { generateClient } from "@aws-amplify/api";
import { listSchools, listUsers } from "../../graphql/queries";

export default function AppAdminDashboard() {
  const [stats, setStats] = useState({
    schools: 0,
    users: 0,
    pending: 0,
    active: 0,
  });
  const [recentSchools, setRecentSchools] = useState<any[]>([]);
  const [recentUsers, setRecentUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const client = generateClient();
    async function fetchStats() {
      try {
        // Schools
        const schoolsRes: any = await client.graphql({ query: listSchools });
        const schools = schoolsRes.data?.listSchools?.items ?? [];

        // Users
        const usersRes: any = await client.graphql({ query: listUsers });
        const users = usersRes.data?.listUsers?.items ?? [];

        setStats({
          schools: schools.length,
          users: users.length,
          pending: users.filter((u: any) => u.status === "PENDING").length,
          active: users.filter((u: any) => u.status === "ACTIVE").length,
        });
        setRecentSchools(schools.slice(-5).reverse());
        setRecentUsers(users.slice(-5).reverse());
      } catch (err) {
        // handle error
      }
      setLoading(false);
    }
    fetchStats();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 6 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Typography variant="h4" fontWeight={600} mb={2}>
        App Admin Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Summary Cards */}
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3, bgcolor: "#f0f9ff" }}>
            <Typography variant="subtitle1" color="primary">
              Total Schools
            </Typography>
            <Typography variant="h3">{stats.schools}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3, bgcolor: "#f9fafb" }}>
            <Typography variant="subtitle1" color="primary">
              Total Users
            </Typography>
            <Typography variant="h3">{stats.users}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3, bgcolor: "#f1f7ed" }}>
            <Typography variant="subtitle1" color="primary">
              Active Users
            </Typography>
            <Typography variant="h3">{stats.active}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 3, bgcolor: "#fff7ed" }}>
            <Typography variant="subtitle1" color="primary">
              Pending Users
            </Typography>
            <Typography variant="h3">{stats.pending}</Typography>
          </Paper>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      <Grid container spacing={4}>
        {/* Recent Schools */}
        <Grid item xs={12} sm={6}>
          <Paper sx={{ p: 3 }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={2}
            >
              <Typography variant="h6">Recent Schools</Typography>
              <Button href="/app-admin/schools" variant="outlined" size="small">
                Manage Schools
              </Button>
            </Box>
            <List dense>
              {recentSchools.length === 0 ? (
                <Typography variant="body2">No schools found.</Typography>
              ) : (
                recentSchools.map((school) => (
                  <ListItem key={school.id} divider>
                    <ListItemText
                      primary={school.name}
                      secondary={school.subdomain || school.address}
                    />
                    <Chip
                      label={school.status || "ACTIVE"}
                      color="success"
                      size="small"
                    />
                  </ListItem>
                ))
              )}
            </List>
          </Paper>
        </Grid>

        {/* Recent Users */}
        <Grid item xs={12} sm={6}>
          <Paper sx={{ p: 3 }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={2}
            >
              <Typography variant="h6">Recent Users</Typography>
              <Button href="/app-admin/users" variant="outlined" size="small">
                Manage Users
              </Button>
            </Box>
            <List dense>
              {recentUsers.length === 0 ? (
                <Typography variant="body2">No users found.</Typography>
              ) : (
                recentUsers.map((user) => (
                  <ListItem key={user.id} divider>
                    <ListItemText
                      primary={user.name || user.email}
                      secondary={user.role || user.status}
                    />
                    <Chip
                      label={user.status || "ACTIVE"}
                      color="primary"
                      size="small"
                    />
                  </ListItem>
                ))
              )}
            </List>
          </Paper>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      <Box mt={3} display="flex" gap={2}>
        <Button
          variant="contained"
          color="primary"
          href="/app-admin/create-school"
        >
          Add School
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          href="/app-admin/assign-admin"
        >
          Assign School Admin
        </Button>
        {/* Add more quick actions if desired */}
      </Box>
    </Box>
  );
}
