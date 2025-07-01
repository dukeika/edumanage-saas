import React, { useEffect, useState } from "react";
import { Paper, Typography, Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { generateClient } from "aws-amplify/api";
import { listAttendances } from "../../graphql/queries";

const client = generateClient();
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 240 },
  { field: "studentID", headerName: "Student ID", width: 180 },
  { field: "classID", headerName: "Class ID", width: 180 },
  { field: "date", headerName: "Date", width: 180 },
  { field: "status", headerName: "Status", width: 120 },
];

const ListAttendance: React.FC = () => {
  const [rows, setRows] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAttendance = async () => {
      setLoading(true);
      try {
        const { data } = await client.graphql({
          query: listAttendances,
          authMode: "userPool",
        });
        setRows(data?.listAttendances?.items ?? []);
      } catch (err) {
        console.error("Failed to fetch attendance:", err);
      }
      setLoading(false);
    };
    fetchAttendance();
  }, []);

  return (
    <Paper sx={{ m: 3, p: 3 }}>
      <Typography variant="h5" mb={2}>
        List of Attendance
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

export default ListAttendance;
