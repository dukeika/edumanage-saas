// src/pages/admin/SchoolSetup.tsx
import React, { useState } from "react";
import { Box, Button, Grid, TextField, Alert } from "@mui/material";
import { generateClient } from "@aws-amplify/api";
import { createSchool } from "../../graphql/mutations";

const client = generateClient();

const SchoolSetup: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    address: "",
    subdomain: "",
    schoolAdmin: "",
    logoURL: "",
    heroImageURL: "",
    description: "",
    contactEmail: "",
    phone: "",
    website: "",
    calendarInfo: "",
  });
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(null);
    setError(null);
    try {
      const input = {
        ...form,
        admins: [form.schoolAdmin], // At creation, just the admin
      };
      const response = (await client.graphql({
        query: createSchool,
        variables: { input },
      })) as any;
      setSuccess(
        `School "${response.data.createSchool.name}" created successfully!`
      );
      setForm({
        name: "",
        address: "",
        subdomain: "",
        schoolAdmin: "",
        logoURL: "",
        heroImageURL: "",
        description: "",
        contactEmail: "",
        phone: "",
        website: "",
        calendarInfo: "",
      });
    } catch (err: any) {
      setError("Failed to create school.");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            label="School Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            label="Address"
            name="address"
            value={form.address}
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            label="Subdomain"
            name="subdomain"
            value={form.subdomain}
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            label="School Admin Username/Sub"
            name="schoolAdmin"
            value={form.schoolAdmin}
            onChange={handleChange}
            required
            fullWidth
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            label="Logo URL"
            name="logoURL"
            value={form.logoURL}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            label="Hero Image URL"
            name="heroImageURL"
            value={form.heroImageURL}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextField
            label="Description"
            name="description"
            value={form.description}
            onChange={handleChange}
            fullWidth
            multiline
            minRows={3}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <TextField
            label="Contact Email"
            name="contactEmail"
            value={form.contactEmail}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <TextField
            label="Phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <TextField
            label="Website"
            name="website"
            value={form.website}
            onChange={handleChange}
            fullWidth
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextField
            label="Calendar Info (JSON)"
            name="calendarInfo"
            value={form.calendarInfo}
            onChange={handleChange}
            fullWidth
            multiline
            minRows={2}
          />
        </Grid>
      </Grid>
      <Box mt={2}>
        <Button type="submit" variant="contained">
          Create School
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

export default SchoolSetup;
