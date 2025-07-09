import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import RequireRole from "../../components/RequireRole";
import { signUp } from "aws-amplify/auth";

const UserCreationForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signUp({
        username: email,
        password,
        options: { userAttributes: { email, name } },
      });
      setMessage(`✅ User "${email}" created!`);
      setEmail("");
      setName("");
      setPassword("");
    } catch (err: any) {
      console.error(err);
      setMessage(err.message || "❌ Error creating user");
    }
  };

  return (
    <RequireRole roles={["ADMIN"]}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ maxWidth: 400, mx: "auto" }}
      >
        <Typography variant="h6">Create New User</Typography>
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Name"
          fullWidth
          margin="normal"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Temporary Password"
          type="password"
          fullWidth
          margin="normal"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" type="submit" fullWidth>
          Create User
        </Button>
        {message && <Typography>{message}</Typography>}
      </Box>
    </RequireRole>
  );
};

export default UserCreationForm;
