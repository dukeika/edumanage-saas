import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Typography,
  Paper,
  Stack,
  TextField,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import { generateClient } from "@aws-amplify/api";
import { getSchool } from "../../graphql/queries";
import { updateSchool } from "../../graphql/mutations";

const EditSchoolPage: React.FC = () => {
  const { schoolId } = useParams<{ schoolId: string }>();
  const navigate = useNavigate();

  const [form, setForm] = useState<any>({
    name: "",
    subdomain: "",
    address: "",
    contactEmail: "",
    phone: "",
    website: "",
    description: "",
    calendarInfo: "",
    // schoolAdmin, admins, etc will be filled from fetch
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch school data
  useEffect(() => {
    if (!schoolId) {
      setError("No school ID provided.");
      setLoading(false);
      return;
    }
    (async () => {
      try {
        setLoading(true);
        const client = generateClient();
        const res: any = await client.graphql({
          query: getSchool,
          variables: { id: schoolId },
        });
        const school = res.data?.getSchool;
        if (!school) {
          setError("School not found.");
        } else {
          setForm({
            name: school.name ?? "",
            subdomain: school.subdomain ?? "",
            address: school.address ?? "",
            contactEmail: school.contactEmail ?? "",
            phone: school.phone ?? "",
            website: school.website ?? "",
            description: school.description ?? "",
            calendarInfo: school.calendarInfo ?? "",
            schoolAdmin: school.schoolAdmin ?? "",
            admins: school.admins ?? [],
            // ...other required fields!
          });
        }
      } catch (err: any) {
        setError("Failed to fetch school details.");
      } finally {
        setLoading(false);
      }
    })();
  }, [schoolId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f: any) => ({
      ...f,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!schoolId) {
      setError("No school ID provided.");
      return;
    }
    setSaving(true);
    try {
      // Defensive: log what you're about to save
      console.log("Saving with input:", { id: schoolId, ...form });

      const client = generateClient();
      await client.graphql({
        query: updateSchool,
        variables: {
          input: {
            id: schoolId,
            ...form,
            calendarInfo:
              form.calendarInfo && typeof form.calendarInfo === "object"
                ? JSON.stringify(form.calendarInfo)
                : form.calendarInfo,
          },
        },
      });
      navigate("/app-admin/schools");
    } catch (err: any) {
      setError(
        "Failed to update school. " +
          (err.errors?.[0]?.message || err.message || "")
      );
      console.error("Failed to update school", err);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={6}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 650, mx: "auto", p: 3 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h5" mb={3}>
          Edit School
        </Typography>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        <form onSubmit={handleSave}>
          <Stack spacing={2}>
            <TextField
              label="School Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <TextField
              label="Subdomain"
              name="subdomain"
              value={form.subdomain}
              onChange={handleChange}
              required
            />
            <TextField
              label="Address"
              name="address"
              value={form.address}
              onChange={handleChange}
              required
            />
            <TextField
              label="Contact Email"
              name="contactEmail"
              value={form.contactEmail}
              onChange={handleChange}
              type="email"
            />
            <TextField
              label="Phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              type="tel"
            />
            <TextField
              label="Website"
              name="website"
              value={form.website}
              onChange={handleChange}
            />
            <TextField
              label="Description"
              name="description"
              value={form.description}
              onChange={handleChange}
              multiline
              minRows={2}
            />
            <TextField
              label="Calendar Info"
              name="calendarInfo"
              value={form.calendarInfo}
              onChange={handleChange}
              multiline
              minRows={2}
              helperText="Eg: Semester 1: Sept–Dec; Semester 2: Jan–May"
            />
            <Box>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={saving}
              >
                {saving ? "Saving..." : "Save Changes"}
              </Button>
              <Button
                variant="outlined"
                sx={{ ml: 2 }}
                onClick={() => navigate(-1)}
                disabled={saving}
              >
                Cancel
              </Button>
            </Box>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default EditSchoolPage;
