import React, { useState } from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import { generateClient } from "aws-amplify/api";
import { createAcademicYear } from "../../graphql/mutations";

const client = generateClient();

const AcademicYearForm = ({ schoolID }: { schoolID: string }) => {
  const [yearLabel, setYearLabel] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async () => {
    try {
      const input = { yearLabel, schoolID };
      const response = await client.graphql({
        query: createAcademicYear,
        variables: { input },
      });
      setSuccess(
        `Academic Year "${response.data.createAcademicYear.yearLabel}" created!`
      );
      setYearLabel("");
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6">Add Academic Year</Typography>
      <Paper sx={{ mt: 2, p: 3 }}>
        <TextField
          label="Academic Year (e.g., 2024/2025)"
          fullWidth
          value={yearLabel}
          onChange={(e) => setYearLabel(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Create Academic Year
        </Button>
        {success && (
          <Typography sx={{ mt: 2 }} color="green">
            {success}
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default AcademicYearForm;
