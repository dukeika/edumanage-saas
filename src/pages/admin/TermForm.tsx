// src/pages/admin/TermForm.tsx
import React, { useState } from "react";
import { TextField, Button, Paper, Box, Typography } from "@mui/material";
import { createTerm } from "../../graphql/mutations";
import { generateClient } from "aws-amplify/api";

const client = generateClient();

type TermFormProps = {
  academicYearID: string;
};

const TermForm = ({ academicYearID }: TermFormProps) => {
  const [termLabel, setTermLabel] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await client.graphql({
        query: createTerm,
        variables: {
          input: {
            termLabel,
            startDate,
            endDate,
            academicYearID,
          },
        },
      });
      alert("Term created successfully");
    } catch (err) {
      console.error("Error creating term:", err);
    }
  };

  return (
    <Paper elevation={2} sx={{ p: 3 }}>
      <Typography variant="h6">Add Term</Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Term Label"
          value={termLabel}
          onChange={(e) => setTermLabel(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          type="date"
          label="Start Date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          fullWidth
          type="date"
          label="End Date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
        <Button type="submit" variant="contained">
          Create
        </Button>
      </Box>
    </Paper>
  );
};

export default TermForm;
