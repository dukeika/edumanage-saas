// src/pages/appadmin/AppAdminUsersPage.tsx

import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Paper,
  CircularProgress,
  IconButton,
  Button,
  Chip,
  Stack,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { generateClient } from "@aws-amplify/api";
import { listUsers } from "../../graphql/queries";
import EditIcon from "@mui/icons-material/Edit";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import EmailIcon from "@mui/icons-material/Email";
import EditUserDialog, {
  UserInput,
} from "../../components/appadmin/EditUserDialog";

export default function AppAdminUsersPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Dialog state
  const [editOpen, setEditOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserInput | null>(null);
  const [inviteOpen, setInviteOpen] = useState(false);

  useEffect(() => {
    async function fetchUsers() {
      setLoading(true);
      setError(null);
      try {
        const client = generateClient();
        const resp: any = await client.graphql({ query: listUsers });
        setUsers(resp.data?.listUsers?.items ?? []);
      } catch (err: any) {
        setError("Failed to load users.");
        console.error("AppAdminUsersPage error:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  // Handle edit or invite user submission
  const handleUserSave = async (input: UserInput) => {
    setEditOpen(false);
    setInviteOpen(false);
    // TODO: Save/update the user using a mutation!
    // (e.g. createUser or updateUser mutation)
    // await client.graphql({ mutation: ..., variables: { input } })
    // For now, just refetch:
    setLoading(true);
    const client = generateClient();
    const resp: any = await client.graphql({ query: listUsers });
    setUsers(resp.data?.listUsers?.items ?? []);
    setLoading(false);
  };

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      flex: 1.2,
      minWidth: 150,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1.3,
      minWidth: 200,
      renderCell: (params) =>
        params.value ? (
          <Stack direction="row" alignItems="center" spacing={1}>
            <EmailIcon fontSize="small" />
            <Typography variant="body2">{params.value}</Typography>
          </Stack>
        ) : (
          "—"
        ),
    },
    {
      field: "role",
      headerName: "Role",
      flex: 1,
      minWidth: 100,
      renderCell: (params) =>
        params.value ? (
          <Chip
            label={params.value.charAt(0).toUpperCase() + params.value.slice(1)}
            color={
              params.value === "applicationadmins"
                ? "primary"
                : params.value === "admins"
                ? "success"
                : params.value === "teachers"
                ? "warning"
                : params.value === "students"
                ? "info"
                : params.value === "parents"
                ? "secondary"
                : "default"
            }
            size="small"
            sx={{ fontWeight: 600 }}
          />
        ) : (
          "—"
        ),
    },
    {
      field: "schoolID",
      headerName: "School ID",
      flex: 1,
      minWidth: 120,
      valueGetter: (params: any) => params.row?.schoolID ?? "—",
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 0.7,
      minWidth: 100,
      sortable: false,
      filterable: false,
      renderCell: (params) => (
        <IconButton
          color="primary"
          size="small"
          onClick={() => {
            setSelectedUser(params.row);
            setEditOpen(true);
          }}
        >
          <EditIcon />
        </IconButton>
      ),
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Users
      </Typography>
      <Button
        variant="contained"
        startIcon={<PersonAddIcon />}
        sx={{ mb: 2 }}
        onClick={() => setInviteOpen(true)}
      >
        Invite User
      </Button>
      <Paper sx={{ p: 2 }}>
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", p: 3 }}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Typography color="error" sx={{ p: 2 }}>
            {error}
          </Typography>
        ) : (
          <DataGrid
            rows={users}
            columns={columns}
            getRowId={(row) => row.id}
            autoHeight
            pageSizeOptions={[10, 20, 50]}
            disableRowSelectionOnClick
            sx={{
              bgcolor: "#fff",
              borderRadius: 2,
              mt: 1,
            }}
          />
        )}
      </Paper>
      {/* Edit dialog */}
      <EditUserDialog
        open={editOpen}
        onClose={() => {
          setEditOpen(false);
          setSelectedUser(null);
        }}
        onSave={handleUserSave}
        user={selectedUser}
      />
      {/* Invite dialog */}
      <EditUserDialog
        open={inviteOpen}
        onClose={() => setInviteOpen(false)}
        onSave={handleUserSave}
        user={null}
      />
    </Box>
  );
}
