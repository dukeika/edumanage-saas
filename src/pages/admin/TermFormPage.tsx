import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import RequireRole from "../../components/RequireRole";

const TermFormPage: React.FC = () => {
  const [termLabel, setTermLabel] = useState("");

  const handleSave = () => {
    alert("Term saved!");
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        New Term
      </Typography>

      <RequireRole roles={["Admin"]}>
        <TextField
          fullWidth
          label="Term Label"
          value={termLabel}
          onChange={(e) => setTermLabel(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" onClick={handleSave}>
          Save Term
        </Button>
      </RequireRole>
    </Box>
  );
};

export default TermFormPage;
