import React, { useState } from "react";
import { TextField, Button, Box, Paper, Typography } from "@mui/material";
import { createAcademicYear } from "../../graphql/mutations";
import { generateClient } from "aws-amplify/api";
import { useCurrentUser } from "../../utils/useCurrentUser";

const client = generateClient();

export interface AcademicYearFormProps {
  schoolID: string;
}

const AcademicYearForm = ({ schoolID }: AcademicYearFormProps) => {
  const { user, loading } = useCurrentUser();
  const [yearLabel, setYearLabel] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await client.graphql({
        query: createAcademicYear,
        variables: {
          input: {
            yearLabel,
            schoolID,
          },
        },
      });

      setYearLabel("");
      alert("Academic year created successfully");
    } catch (error) {
      console.error("Error creating academic year:", error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>Not authenticated</div>;

  return (
    <Paper sx={{ p: 4, mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Create Academic Year
      </Typography>
      <Box component="form" onSubmit={handleSubmit} display="flex" gap={2}>
        <TextField
          label="Year Label"
          value={yearLabel}
          onChange={(e) => setYearLabel(e.target.value)}
          required
        />
        <Button type="submit" variant="contained">
          Create
        </Button>
      </Box>
    </Paper>
  );
};

export default AcademicYearForm;
