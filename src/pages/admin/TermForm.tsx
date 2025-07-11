// src/pages/admin/TermForm.tsx
import React, { useState } from "react";
import { Box, Button, Grid, TextField, Alert } from "@mui/material";
import { generateClient } from "@aws-amplify/api";
import { createTerm } from "../../graphql/mutations";

const client = generateClient();

const TermForm: React.FC<{ academicYearID: string }> = ({ academicYearID }) => {
  const [termLabel, setTermLabel] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(null);
    setError(null);
    try {
      const { data } = (await client.graphql({
        query: createTerm,
        variables: {
          input: {
            termLabel,
            startDate,
            endDate,
            academicYearID,
          },
        },
      })) as any;
      setSuccess(`Term "${data.createTerm.termLabel}" created!`);
      setTermLabel("");
      setStartDate("");
      setEndDate("");
    } catch (err: any) {
      setError("Failed to create Term.");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            label="Term Label"
            value={termLabel}
            onChange={(e) => setTermLabel(e.target.value)}
            required
            fullWidth
          />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <TextField
            label="Start Date"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
        </Grid>
        <Grid size={{ xs: 12, md: 3 }}>
          <TextField
            label="End Date"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
            InputLabelProps={{ shrink: true }}
            fullWidth
          />
        </Grid>
      </Grid>
      <Box mt={2}>
        <Button type="submit" variant="contained">
          Add Term
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

export default TermForm;
