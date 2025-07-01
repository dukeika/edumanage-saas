import React, { useEffect, useState } from "react";
import { Paper, Typography, Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { generateClient } from "aws-amplify/api";
import { listAnnouncements } from "../../graphql/queries";

const client = generateClient();
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 240 },
  { field: "title", headerName: "Title", width: 180 },
  { field: "message", headerName: "Message", width: 240 },
  { field: "schoolID", headerName: "School ID", width: 180 },
  { field: "createdBy", headerName: "Created By", width: 180 },
];

const ListAnnouncements: React.FC = () => {
  const [rows, setRows] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      setLoading(true);
      try {
        const { data } = await client.graphql({
          query: listAnnouncements,
          authMode: "userPool",
        });
        setRows(data?.listAnnouncements?.items ?? []);
      } catch (err) {
        console.error("Failed to fetch announcements:", err);
      }
      setLoading(false);
    };
    fetchAnnouncements();
  }, []);

  return (
    <Paper sx={{ m: 3, p: 3 }}>
      <Typography variant="h5" mb={2}>
        List of Announcements
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

export default ListAnnouncements;
