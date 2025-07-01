import React, { useEffect, useState } from "react";
import { Paper, Typography, Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { generateClient } from "aws-amplify/api";
import { listTerms } from "../../graphql/queries";

const client = generateClient();
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 240 },
  { field: "termLabel", headerName: "Term", width: 180 },
  { field: "academicYearID", headerName: "Academic Year ID", width: 180 },
];

const ListTerms: React.FC = () => {
  const [rows, setRows] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTerms = async () => {
      setLoading(true);
      try {
        const { data } = await client.graphql({
          query: listTerms,
          authMode: "userPool",
        });
        setRows(data?.listTerms?.items ?? []);
      } catch (err) {
        console.error("Failed to fetch terms:", err);
      }
      setLoading(false);
    };
    fetchTerms();
  }, []);

  return (
    <Paper sx={{ m: 3, p: 3 }}>
      <Typography variant="h5" mb={2}>
        List of Terms
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

export default ListTerms;
