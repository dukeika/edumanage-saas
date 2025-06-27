import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import RequireRole from "../../components/RequireRole";

const AcademicYearFormPage: React.FC = () => {
  const [yearLabel, setYearLabel] = useState("");

  const handleSave = () => {
    alert("Academic year saved!");
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        New Academic Year
      </Typography>

      <RequireRole roles={["Admin"]}>
        <TextField
          fullWidth
          label="Year Label"
          value={yearLabel}
          onChange={(e) => setYearLabel(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" onClick={handleSave}>
          Save Academic Year
        </Button>
      </RequireRole>
    </Box>
  );
};

export default AcademicYearFormPage;
