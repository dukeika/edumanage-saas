// src/pages/admin/CreateTermForm.tsx
import React, { useState, useEffect } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  MenuItem,
  Snackbar,
} from "@mui/material";
import { generateClient } from "aws-amplify/api";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { customCreateTerm } from "../../graphql/customMutations";
import { listAcademicYears } from "../../graphql/queries";

const client = generateClient();

const CreateTermForm: React.FC = () => {
  const [termLabel, setTermLabel] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [academicYearID, setAcademicYearID] = useState("");
  const [years, setYears] = useState<{ id: string; yearLabel: string }[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const result: any = await client.graphql(
        graphqlOperation(listAcademicYears)
      );
      setYears(result.data.listAcademicYears.items);
    })();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await client.graphql(
        graphqlOperation(customCreateTerm, {
          input: { termLabel, startDate, endDate, academicYearID },
        })
      );
      setOpen(true);
      setTermLabel("");
      setStartDate("");
      setEndDate("");
      setAcademicYearID("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box component={Paper} p={4} m={4} maxWidth={500} mx="auto" elevation={3}>
      <Typography variant="h5" gutterBottom>
        Create Term
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <TextField
          label="Term Label (e.g. Term 1)"
          value={termLabel}
          onChange={(e) => setTermLabel(e.target.value)}
          required
        />
        <TextField
          label="Start Date"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
          required
        />
        <TextField
          label="End Date"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
          required
        />
        <TextField
          select
          label="Academic Year"
          value={academicYearID}
          onChange={(e) => setAcademicYearID(e.target.value)}
          required
        >
          {years.map((y) => (
            <MenuItem key={y.id} value={y.id}>
              {y.yearLabel}
            </MenuItem>
          ))}
        </TextField>
        <Button type="submit" variant="contained">
          Create
        </Button>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={2500}
        onClose={() => setOpen(false)}
        message="Term created!"
      />
    </Box>
  );
};

export default CreateTermForm;
