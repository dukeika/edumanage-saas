import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  Button,
  Box,
  Typography,
  Paper,
} from "@mui/material";
import { generateClient } from "aws-amplify/api";
import { createCognitoUser } from "../../graphql/mutations";
import awsconfig from "../../aws-exports";

const client = generateClient();

const roles = ["Teacher", "Student", "Parent"];

const UserCreationForm = ({ schoolID }: { schoolID: string }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("Teacher");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    const input = {
      email,
      name,
      role,
      schoolID,
      userPoolId: awsconfig.aws_user_pools_id,
    };

    try {
      const response = await client.graphql({
        query: createCognitoUser,
        variables: { input },
      });
      setMessage(
        `User "${response.data.createCognitoUser.email}" created successfully!`
      );
      setEmail("");
      setName("");
    } catch (err: any) {
      console.error(err);
      setMessage("Error: " + err.errors?.[0]?.message || "Unknown error");
    }
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6">Create New User</Typography>
      <Paper sx={{ mt: 2, p: 3 }}>
        <TextField
          label="Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          select
          label="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        >
          {roles.map((r) => (
            <MenuItem key={r} value={r}>
              {r}
            </MenuItem>
          ))}
        </TextField>
        <Button variant="contained" onClick={handleSubmit}>
          Create User
        </Button>
        {message && (
          <Typography sx={{ mt: 2 }} color="green">
            {message}
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default UserCreationForm;
