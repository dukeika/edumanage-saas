import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Typography,
  Paper,
  Stack,
  IconButton,
  TextField,
  CircularProgress,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { generateClient } from "@aws-amplify/api";
import { listSchools } from "../../graphql/queries";
import { deleteSchool } from "../../graphql/mutations";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddIcon from "@mui/icons-material/Add";
import CreateEditSchoolDialog from "../../components/appadmin/CreateEditSchoolDialog";

export default function AppAdminSchoolsPage() {
  const [schools, setSchools] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [createOpen, setCreateOpen] = useState(false);
  const [editing, setEditing] = useState<any>(null);

  // Fetch schools from API
  async function fetchSchools() {
    setLoading(true);
    try {
      const client = generateClient();
      const res: any = await client.graphql({ query: listSchools });
      setSchools(res.data.listSchools.items || []);
    } catch (err) {
      console.error("Failed to fetch schools:", err);
      setSchools([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchSchools();
  }, []);

  const filteredSchools = schools.filter(
    (s) =>
      s?.name?.toLowerCase().includes(search.toLowerCase()) ||
      s?.subdomain?.toLowerCase().includes(search.toLowerCase())
  );

  // Delete
  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this school?")) return;
    setLoading(true);
    try {
      const client = generateClient();
      await client.graphql({
        query: deleteSchool,
        variables: { input: { id } },
      });
      await fetchSchools();
    } catch {
      // Optionally handle error
    }
    setLoading(false);
  };

  // Columns
  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1, minWidth: 150 },
    { field: "subdomain", headerName: "Subdomain", flex: 1, minWidth: 120 },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      minWidth: 120,
      renderCell: (params: any) => (
        <Typography
          color={params.value === "ACTIVE" ? "green" : "orange"}
          fontWeight={500}
        >
          {params.value}
        </Typography>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      minWidth: 180,
      sortable: false,
      filterable: false,
      renderCell: (params: any) => (
        <Stack direction="row" spacing={1}>
          <IconButton
            color="primary"
            size="small"
            onClick={() => setEditing(params.row)}
            title="Edit"
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="error"
            size="small"
            onClick={() => handleDelete(params.row.id)}
            title="Delete"
          >
            <DeleteIcon />
          </IconButton>
          <IconButton
            color="info"
            size="small"
            href={`/school/${params.row.subdomain}`}
            title="View"
          >
            <VisibilityIcon />
          </IconButton>
        </Stack>
      ),
    },
  ];

  return (
    <Box sx={{ p: { xs: 1, md: 3 } }}>
      <Paper
        sx={{
          mb: 2,
          p: 2,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" fontWeight={600}>
          All Schools
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setCreateOpen(true)}
        >
          Create School
        </Button>
      </Paper>

      <TextField
        label="Search"
        size="small"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 2, width: 300 }}
      />

      <Paper sx={{ p: 2 }}>
        {loading ? (
          <Box display="flex" justifyContent="center" py={5}>
            <CircularProgress />
          </Box>
        ) : (
          <DataGrid
            rows={filteredSchools}
            columns={columns}
            getRowId={(r) => r.id}
            autoHeight
            pageSizeOptions={[10, 20, 50]}
            disableRowSelectionOnClick
          />
        )}
      </Paper>

      {/* Create Dialog */}
      <CreateEditSchoolDialog
        open={createOpen}
        onClose={() => setCreateOpen(false)}
        onSaved={() => {
          fetchSchools();
          setCreateOpen(false);
        }}
      />

      {/* Edit Dialog */}
      <CreateEditSchoolDialog
        open={!!editing}
        initialData={editing}
        onClose={() => setEditing(null)}
        onSaved={() => {
          setEditing(null);
          fetchSchools();
        }}
      />
    </Box>
  );
}
