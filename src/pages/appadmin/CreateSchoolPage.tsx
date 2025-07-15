import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Paper,
  Stack,
  TextField,
  Alert,
  CircularProgress,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { generateClient } from "@aws-amplify/api";
import { createSchool } from "../../graphql/mutations";
import { useNavigate } from "react-router-dom";
import { useCurrentUser } from "../../hooks/useCurrentUser";

export default function CreateSchoolPage() {
  const { user } = useCurrentUser();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    subdomain: "",
    address: "",
    contactEmail: "",
    phone: "",
    website: "",
    description: "",
    calendarStart: null as Date | null,
    calendarEnd: null as Date | null,
    calendarMessage: "",
    news: "",
    logoURL: "",
    heroImageURL: "",
    schoolAdmin: user?.id ?? "",
    admins: user?.id ? [user.id] : [],
  });

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSaving(true);

    // stringify calendar JSON
    const calendarInfo = JSON.stringify({
      start: form.calendarStart
        ? form.calendarStart.toISOString().slice(0, 10)
        : null,
      end: form.calendarEnd
        ? form.calendarEnd.toISOString().slice(0, 10)
        : null,
      message: form.calendarMessage,
    });

    try {
      const client = generateClient();
      await client.graphql({
        query: createSchool,
        variables: {
          input: {
            name: form.name,
            subdomain: form.subdomain,
            address: form.address,
            contactEmail: form.contactEmail,
            phone: form.phone,
            website: form.website,
            description: form.description,
            news: form.news,
            logoURL: form.logoURL,
            heroImageURL: form.heroImageURL,
            calendarInfo,
            schoolAdmin: form.schoolAdmin,
            admins: form.admins,
          },
        },
        // force Cognito auth for mutation:
        authMode: "userPool",
      });
      navigate("/app-admin/schools");
    } catch (err: any) {
      console.error("createSchool error:", err);
      const msg =
        err.errors?.[0]?.message || err.message || "Failed to create school";
      setError(msg);
    } finally {
      setSaving(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 650, mx: "auto", p: 3 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h5" mb={3}>
          Create School
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              label="School Name"
              name="name"
              value={form.name}
              onChange={handleInput}
              required
            />
            <TextField
              label="Subdomain"
              name="subdomain"
              value={form.subdomain}
              onChange={handleInput}
              required
              helperText="Unique subdomain (e.g. springfield)"
            />
            <TextField
              label="Address"
              name="address"
              value={form.address}
              onChange={handleInput}
              required
            />
            <TextField
              label="Contact Email"
              name="contactEmail"
              type="email"
              value={form.contactEmail}
              onChange={handleInput}
            />
            <TextField
              label="Phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleInput}
            />
            <TextField
              label="Website"
              name="website"
              value={form.website}
              onChange={handleInput}
            />
            <TextField
              label="Description"
              name="description"
              value={form.description}
              onChange={handleInput}
              multiline
              minRows={2}
            />

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <DatePicker
                  label="Calendar Start"
                  value={form.calendarStart}
                  onChange={(d) => setForm((f) => ({ ...f, calendarStart: d }))}
                  slotProps={{ textField: { fullWidth: true } }}
                />
                <DatePicker
                  label="Calendar End"
                  value={form.calendarEnd}
                  onChange={(d) => setForm((f) => ({ ...f, calendarEnd: d }))}
                  slotProps={{ textField: { fullWidth: true } }}
                />
              </Stack>
            </LocalizationProvider>
            <TextField
              label="Calendar Message"
              name="calendarMessage"
              value={form.calendarMessage}
              onChange={handleInput}
              multiline
              minRows={2}
            />

            <TextField
              label="Latest News"
              name="news"
              value={form.news}
              onChange={handleInput}
              multiline
              minRows={2}
            />

            <TextField
              label="Logo URL"
              name="logoURL"
              value={form.logoURL}
              onChange={handleInput}
              helperText="Hosted image URL"
            />
            <TextField
              label="Hero Image URL"
              name="heroImageURL"
              value={form.heroImageURL}
              onChange={handleInput}
              helperText="Hosted banner URL"
            />

            <TextField
              label="School Admin (user id)"
              name="schoolAdmin"
              value={form.schoolAdmin}
              onChange={handleInput}
              required
            />

            <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
              <Button
                type="submit"
                variant="contained"
                disabled={saving}
                startIcon={saving && <CircularProgress size={16} />}
              >
                {saving ? "Creating..." : "Create School"}
              </Button>
              <Button
                variant="outlined"
                onClick={() => navigate(-1)}
                disabled={saving}
              >
                Cancel
              </Button>
            </Stack>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
}
