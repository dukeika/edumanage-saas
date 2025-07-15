import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Typography,
  Paper,
  TextField,
  CircularProgress,
  Stack,
  IconButton,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { generateClient } from "@aws-amplify/api";
import { listSchools } from "../../graphql/queries";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

export default function AppAdminSchoolsPage() {
  const [schools, setSchools] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchSchools();
  }, []);

  const fetchSchools = async () => {
    setLoading(true);
    try {
      const client = generateClient();
      const res: any = await client.graphql({
        query: listSchools,
        authMode: "apiKey", // ← force public read
      });
      setSchools(res.data?.listSchools?.items || []);
    } catch (e) {
      console.error("fetchSchools error:", e);
      setSchools([]);
    }
    setLoading(false);
  };

  const filtered = schools.filter(
    (s) =>
      s.name?.toLowerCase().includes(search.toLowerCase()) ||
      s.subdomain?.toLowerCase().includes(search.toLowerCase()) ||
      s.address?.toLowerCase().includes(search.toLowerCase())
  );

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1, minWidth: 140 },
    { field: "subdomain", headerName: "Subdomain", flex: 1, minWidth: 120 },
    {
      field: "address",
      headerName: "Address",
      flex: 1.5,
      minWidth: 160,
      valueGetter: (params: any) => params.row?.address ?? "—",
    },
    { field: "schoolAdmin", headerName: "Admin", flex: 1, minWidth: 120 },
    {
      field: "actions",
      headerName: "Actions",
      minWidth: 160,
      flex: 1,
      sortable: false,
      filterable: false,
      renderCell: ({ row }) => (
        <Stack direction="row" spacing={1}>
          <IconButton
            size="small"
            color="primary"
            onClick={() => window.open(`/school/${row.subdomain}`, "_blank")}
          >
            <VisibilityIcon />
          </IconButton>
          <IconButton
            size="small"
            color="info"
            onClick={() => navigate(`/app-admin/edit-school/${row.id}`)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            size="small"
            color="error"
            onClick={() => {
              if (window.confirm(`Delete ${row.name}?`)) {
                /* TODO: delete mutation + refetch */
              }
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Stack>
      ),
    },
  ];

  return (
    <Box sx={{ p: { xs: 1, md: 3 } }}>
      <Paper
        sx={{
          p: 3,
          mb: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" fontWeight={600}>
          All Schools
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate("/app-admin/create-school")}
        >
          Create School
        </Button>
      </Paper>

      <Box sx={{ mb: 2 }}>
        <TextField
          size="small"
          label="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ width: 300, maxWidth: "100%" }}
        />
      </Box>

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
            pageSizeOptions={[10, 25, 50]}
            disableRowSelectionOnClick
          />
        )}
      </Paper>
    </Box>
  );
}
