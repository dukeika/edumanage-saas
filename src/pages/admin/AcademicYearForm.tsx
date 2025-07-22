// src/pages/admin/AcademicYearForm.tsx
import React, { useState } from "react";
import { Box, Button, Grid, TextField, Alert } from "@mui/material";
import { generateClient } from "@aws-amplify/api";
import { createAcademicYear } from "../../graphql/mutations";
import { useCurrentUser } from "../../utils/useCurrentUser";

const client = generateClient();

const AcademicYearForm: React.FC<{ schoolID: string }> = ({ schoolID }) => {
  const [yearLabel, setYearLabel] = useState("");
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { user } = useCurrentUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    try {
      const { data } = (await client.graphql({
        query: createAcademicYear,
        variables: {
          input: {
            yearLabel,
            schoolID,
          },
        },
      })) as any;
      setSuccess(
        `Academic Year "${data.createAcademicYear.yearLabel}" created!`
      );
      setYearLabel("");
    } catch (err: any) {
      setError("Failed to create Academic Year");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            label="Academic Year Label"
            value={yearLabel}
            onChange={(e) => setYearLabel(e.target.value)}
            required
            fullWidth
          />
        </Grid>
      </Grid>
      <Box mt={2}>
        <Button type="submit" variant="contained">
          Add Academic Year
        </Button>
      </Box>
      {success && (
        <Alert severity="success" sx={{ mt: 2 }}>
          {success}
        </Alert>
      )}
      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}
    </Box>
  );
};

export default AcademicYearForm;
