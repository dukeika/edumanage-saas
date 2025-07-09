import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const AttendancePage: React.FC = () => (
  <Paper sx={{ p: 4 }}>
    <Typography variant="h6" gutterBottom>
      Mark Attendance
    </Typography>
    <Box component="form" sx={{ display: "flex", gap: 2, mb: 2 }}>
      <TextField label="Class" select size="small" sx={{ minWidth: 160 }}>
        {/* Populate options dynamically */}
        <MenuItem value="Class A">Class A</MenuItem>
        <MenuItem value="Class B">Class B</MenuItem>
      </TextField>
      <TextField
        label="Date"
        type="date"
        size="small"
        InputLabelProps={{ shrink: true }}
      />
      <Button variant="contained" color="primary">
        Mark
      </Button>
    </Box>
    <Typography color="text.secondary">
      Attendance form (placeholder)
    </Typography>
  </Paper>
);

export default AttendancePage;
