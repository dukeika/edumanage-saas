// ----------- src/pages/appadmin/AppAdminSchoolsPage.tsx -----------
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
import { deleteSchool, updateSchool } from "../../graphql/mutations";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddIcon from "@mui/icons-material/Add";
import CreateEditSchoolDialog from "../../components/appadmin/CreateEditSchoolDialog";

export default function AppAdminSchoolsPage() {
  const [schools, setSchools] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [editing, setEditing] = useState<any>(null);
  const [statusLoadingId, setStatusLoadingId] = useState<string | null>(null);

  useEffect(() => {
    fetchSchools();
  }, []);

  async function fetchSchools() {
    setLoading(true);
    try {
      const client = generateClient();
      const res: any = await client.graphql({ query: listSchools });
      // filter out null items and any that failed schema
      const items = (res.data?.listSchools?.items || []).filter(Boolean);
      setSchools(items);
    } catch (err: any) {
      console.error("Fetch schools error:", err);
    } finally {
      setLoading(false);
    }
  }

  const filtered = schools.filter(
    (s) =>
      s.name?.toLowerCase().includes(search.toLowerCase()) ||
      s.subdomain?.toLowerCase().includes(search.toLowerCase())
  );

  const toggleStatus = async (row: any) => {
    setStatusLoadingId(row.id);
    try {
      const client = generateClient();
      await client.graphql({
        query: updateSchool,
        variables: {
          input: {
            id: row.id,
            status: row.status === "ACTIVE" ? "NOT_ACTIVE" : "ACTIVE",
          },
        },
      });
      await fetchSchools();
    } catch (err) {
      console.error(err);
    } finally {
      setStatusLoadingId(null);
    }
  };

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
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1, minWidth: 150 },
    { field: "subdomain", headerName: "Subdomain", flex: 1, minWidth: 120 },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      minWidth: 130,
      renderCell: (params: any) => (
        <Button
          size="small"
          variant="contained"
          color={params.value === "ACTIVE" ? "success" : "warning"}
          disabled={statusLoadingId === params.row.id}
          onClick={() => toggleStatus(params.row)}
        >
          {statusLoadingId === params.row.id ? (
            <CircularProgress color="inherit" size={18} />
          ) : (
            params.value
          )}
        </Button>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      minWidth: 150,
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
    <Box sx={{ p: 3 }}>
      <Paper
        sx={{
          mb: 2,
          p: 2,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6">All Schools</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => {
            setEditing(null);
            setOpenDialog(true);
          }}
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
            rows={filtered}
            columns={columns}
            getRowId={(r) => r.id}
            autoHeight
            pageSizeOptions={[10, 20, 50]}
            disableRowSelectionOnClick
          />
        )}
      </Paper>

      <CreateEditSchoolDialog
        open={openDialog || Boolean(editing)}
        initialData={editing}
        onClose={() => setOpenDialog(false)}
        onSaved={() => {
          fetchSchools();
          setOpenDialog(false);
          setEditing(null);
        }}
      />
    </Box>
  );
}
