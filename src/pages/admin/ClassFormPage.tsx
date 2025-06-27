import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import RequireRole from "../../components/RequireRole";

const ClassFormPage: React.FC = () => {
  const [name, setName] = useState("");

  const handleSave = () => {
    // your save logic…
    alert("Class saved!");
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        {name ? "Edit Class" : "New Class"}
      </Typography>

      {/* Only Admins see the form */}
      <RequireRole roles={["Admin"]}>
        <TextField
          fullWidth
          label="Class Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" onClick={handleSave}>
          Save Class
        </Button>
      </RequireRole>
    </Box>
  );
};

export default ClassFormPage;
