import React, { useEffect, useState } from "react";
import { Paper, Typography, Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { generateClient } from "aws-amplify/api";
import { listSubjects } from "../../graphql/queries";

const client = generateClient();
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 240 },
  { field: "name", headerName: "Subject Name", width: 180 },
  { field: "classID", headerName: "Class ID", width: 180 },
];

const ListSubjects: React.FC = () => {
  const [rows, setRows] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSubjects = async () => {
      setLoading(true);
      try {
        const { data } = await client.graphql({
          query: listSubjects,
          authMode: "userPool",
        });
        setRows(data?.listSubjects?.items ?? []);
      } catch (err) {
        console.error("Failed to fetch subjects:", err);
      }
      setLoading(false);
    };
    fetchSubjects();
  }, []);

  return (
    <Paper sx={{ m: 3, p: 3 }}>
      <Typography variant="h5" mb={2}>
        List of Subjects
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

export default ListSubjects;
