import React, { useState } from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import { generateClient } from "aws-amplify/api";
import { createSchool } from "../../graphql/mutations";

const client = generateClient();

const SchoolSetup = () => {
  const [schoolName, setSchoolName] = useState("");
  const [address, setAddress] = useState("");
  const [success, setSuccess] = useState("");

  const handleCreateSchool = async () => {
    try {
      const input = { name: schoolName, address };
      const response = await client.graphql({
        query: createSchool,
        variables: { input },
      });
      setSuccess(
        `School "${response.data.createSchool.name}" created successfully!`
      );
      setSchoolName("");
      setAddress("");
    } catch (error) {
      console.error("Error creating school:", error);
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5">School Setup</Typography>
      <Paper sx={{ mt: 2, p: 3 }}>
        <TextField
          label="School Name"
          fullWidth
          value={schoolName}
          onChange={(e) => setSchoolName(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Address"
          fullWidth
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" onClick={handleCreateSchool}>
          Create School
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

export default SchoolSetup;
