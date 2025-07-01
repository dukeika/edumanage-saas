import React, { useEffect, useState } from "react";
import { Paper, Typography, Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { generateClient } from "aws-amplify/api";
import { listUsers } from "../../graphql/queries";

const client = generateClient();
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 240 },
  { field: "name", headerName: "Name", width: 180 },
  { field: "email", headerName: "Email", width: 220 },
  { field: "role", headerName: "Role", width: 120 },
  { field: "schoolID", headerName: "School ID", width: 180 },
];

const ListUsers: React.FC = () => {
  const [rows, setRows] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const { data } = await client.graphql({
          query: listUsers,
          authMode: "userPool",
        });
        setRows(data?.listUsers?.items ?? []);
      } catch (err) {
        console.error("Failed to fetch users:", err);
      }
      setLoading(false);
    };
    fetchUsers();
  }, []);

  return (
    <Paper sx={{ m: 3, p: 3 }}>
      <Typography variant="h5" mb={2}>
        List of Users
      </Typography>
      <Box sx={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          getRowId={(row) => row.id}
          disableRowSelectionOnClick
          loading={loading}
          pageSizeOptions={[10]}
        />
      </Box>
    </Paper>
  );
};

export default ListUsers;
