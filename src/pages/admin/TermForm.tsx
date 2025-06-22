import React, { useState } from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import { generateClient } from "aws-amplify/api";
import { createTerm } from "../../graphql/mutations";

const client = generateClient();

const TermForm = ({ academicYearID }: { academicYearID: string }) => {
  const [termLabel, setTermLabel] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async () => {
    try {
      const input = { academicYearID, termLabel, startDate, endDate };
      const response = await client.graphql({
        query: createTerm,
        variables: { input },
      });
      setSuccess(`Term "${response.data.createTerm.termLabel}" created!`);
      setTermLabel("");
      setStartDate("");
      setEndDate("");
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6">Add Term</Typography>
      <Paper sx={{ mt: 2, p: 3 }}>
        <TextField
          label="Term Label"
          fullWidth
          value={termLabel}
          onChange={(e) => setTermLabel(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Start Date (YYYY-MM-DD)"
          fullWidth
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          label="End Date (YYYY-MM-DD)"
          fullWidth
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Create Term
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

export default TermForm;
