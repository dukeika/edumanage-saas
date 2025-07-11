import React, { useState } from "react";
import { useCurrentUser } from "../../utils/useCurrentUser";
import { generateClient } from "@aws-amplify/api";
import { createSchool } from "../../graphql/mutations";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Alert,
  Paper,
} from "@mui/material";

const client = generateClient();

const initialFields = {
  name: "",
  subdomain: "",
  address: "",
  logoURL: "",
  heroImageURL: "",
  description: "",
  contactEmail: "",
  phone: "",
  website: "",
  calendarInfo: "",
};

export default function CreateSchoolPage() {
  const { user } = useCurrentUser();
  const [fields, setFields] = useState(initialFields);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // --- Validate required fields ---
    if (!fields.name || !fields.subdomain || !fields.address) {
      setError("Name, subdomain, and address are required.");
      return;
    }

    // --- User must be logged in ---
    if (!user) {
      setError("You must be signed in to create a school.");
      return;
    }

    // --- Prepare input object (matches CreateSchoolInput type) ---
    const input = {
      name: fields.name,
      subdomain: fields.subdomain,
      address: fields.address,
      logoURL: fields.logoURL || undefined,
      heroImageURL: fields.heroImageURL || undefined,
      description: fields.description || undefined,
      contactEmail: fields.contactEmail || undefined,
      phone: fields.phone || undefined,
      website: fields.website || undefined,
      calendarInfo: fields.calendarInfo || undefined,
      schoolAdmin: user.id,
      admins: [user.id],
    };

    setLoading(true);
    try {
      const response = await client.graphql({
        query: createSchool,
        variables: { input },
      });
      setSuccess(`School "${fields.name}" created successfully!`);
      setFields(initialFields);
    } catch (err: any) {
      setError(
        err?.errors?.[0]?.message ||
          "Failed to create school. Check your inputs and network."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Paper sx={{ maxWidth: 700, margin: "40px auto", p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Create New School
      </Typography>
      <Box component="form" onSubmit={handleSubmit} autoComplete="off">
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              required
              name="name"
              label="School Name"
              value={fields.name}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              required
              name="subdomain"
              label="Subdomain"
              value={fields.subdomain}
              onChange={handleChange}
              fullWidth
              helperText="Unique URL, e.g. 'springfield'"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              required
              name="address"
              label="Address"
              value={fields.address}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              name="logoURL"
              label="Logo URL"
              value={fields.logoURL}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              name="heroImageURL"
              label="Hero Image URL"
              value={fields.heroImageURL}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              name="contactEmail"
              label="Contact Email"
              value={fields.contactEmail}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              name="phone"
              label="Phone"
              value={fields.phone}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <TextField
              name="website"
              label="Website"
              value={fields.website}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              name="description"
              label="School Description"
              value={fields.description}
              onChange={handleChange}
              fullWidth
              multiline
              rows={2}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              name="calendarInfo"
              label="Calendar Info (JSON)"
              value={fields.calendarInfo}
              onChange={handleChange}
              fullWidth
              multiline
              rows={2}
            />
          </Grid>
        </Grid>
        <Box sx={{ mt: 2 }}>
          <Button type="submit" variant="contained" disabled={loading}>
            {loading ? "Creating..." : "Create School"}
          </Button>
        </Box>
        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}
        {success && (
          <Alert severity="success" sx={{ mt: 2 }}>
            {success}
          </Alert>
        )}
      </Box>
    </Paper>
  );
}
