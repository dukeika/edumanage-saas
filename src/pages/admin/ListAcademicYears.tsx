import React, { useEffect, useState } from "react";
import { Paper, Typography, Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { generateClient } from "aws-amplify/api";
import { listAcademicYears } from "../../graphql/queries";

const client = generateClient();
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 240 },
  { field: "yearLabel", headerName: "Academic Year", width: 180 },
  { field: "schoolID", headerName: "School ID", width: 180 },
];

const ListAcademicYears: React.FC = () => {
  const [rows, setRows] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAcademicYears = async () => {
      setLoading(true);
      try {
        const { data } = await client.graphql({
          query: listAcademicYears,
          authMode: "userPool",
        });
        setRows(data?.listAcademicYears?.items ?? []);
      } catch (err) {
        console.error("Failed to fetch academic years:", err);
      }
      setLoading(false);
    };
    fetchAcademicYears();
  }, []);

  return (
    <Paper sx={{ m: 3, p: 3 }}>
      <Typography variant="h5" mb={2}>
        List of Academic Years
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

export default ListAcademicYears;
