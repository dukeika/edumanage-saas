import React, { useEffect, useState } from "react";
import { Paper, Typography, Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { generateClient } from "aws-amplify/api";
import { listAssessments } from "../../graphql/queries";

const client = generateClient();
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 240 },
  { field: "title", headerName: "Title", width: 180 },
  { field: "assessmentDate", headerName: "Date", width: 180 },
  { field: "classID", headerName: "Class ID", width: 180 },
];

const ListAssessments: React.FC = () => {
  const [rows, setRows] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAssessments = async () => {
      setLoading(true);
      try {
        const { data } = await client.graphql({
          query: listAssessments,
          authMode: "userPool",
        });
        setRows(data?.listAssessments?.items ?? []);
      } catch (err) {
        console.error("Failed to fetch assessments:", err);
      }
      setLoading(false);
    };
    fetchAssessments();
  }, []);

  return (
    <Paper sx={{ m: 3, p: 3 }}>
      <Typography variant="h5" mb={2}>
        List of Assessments
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

export default ListAssessments;
