import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Stack,
  TextField,
  Alert,
  CircularProgress,
  InputLabel,
  Box,
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { uploadData, getUrl } from "@aws-amplify/storage";
import { generateClient } from "@aws-amplify/api";
import { createSchool } from "../../graphql/mutations";
import { useCurrentUser } from "../../hooks/useCurrentUser";

interface Props {
  open: boolean;
  onClose: () => void;
  onCreate: () => Promise<void>;
}

export default function CreateSchoolDialog({ open, onClose, onCreate }: Props) {
  const { user } = useCurrentUser();

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
    schoolAdmin: user?.email ?? "",
    logoURL: "",
    heroImageURL: "",
  });

  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [heroFile, setHeroFile] = useState<File | null>(null);
  const [uploadingLogo, setUploadingLogo] = useState(false);
  const [uploadingHero, setUploadingHero] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  // Reset form/dialog state when opened
  React.useEffect(() => {
    if (open) {
      setForm({
        name: "",
        subdomain: "",
        address: "",
        contactEmail: "",
        phone: "",
        website: "",
        description: "",
        calendarStart: null,
        calendarEnd: null,
        calendarMessage: "",
        news: "",
        schoolAdmin: user?.email ?? "",
        logoURL: "",
        heroImageURL: "",
      });
      setLogoFile(null);
      setHeroFile(null);
      setError(null);
      setSaving(false);
      setUploadingLogo(false);
      setUploadingHero(false);
    }
    // eslint-disable-next-line
  }, [open]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLogoFile(e.target.files[0]);
    }
  };

  const handleHeroChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setHeroFile(e.target.files[0]);
    }
  };

  async function uploadImage(file: File, prefix: string) {
    const ext = file.name.split(".").pop();
    const key = `${prefix}/${Date.now()}-${Math.random()
      .toString(36)
      .slice(2)}.${ext}`;
    await uploadData({
      key,
      data: file,
      options: { contentType: file.type, accessLevel: "guest" },
    }).result;
    const { url } = await getUrl({ key, options: { accessLevel: "guest" } });
    return url.toString();
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSaving(true);

    try {
      let logoURL = form.logoURL;
      let heroImageURL = form.heroImageURL;

      if (logoFile) {
        setUploadingLogo(true);
        logoURL = await uploadImage(logoFile, "school-logos");
        setUploadingLogo(false);
      }
      if (heroFile) {
        setUploadingHero(true);
        heroImageURL = await uploadImage(heroFile, "school-hero");
        setUploadingHero(false);
      }

      const calendarInfo = JSON.stringify({
        start: form.calendarStart
          ? form.calendarStart.toISOString().slice(0, 10)
          : null,
        end: form.calendarEnd
          ? form.calendarEnd.toISOString().slice(0, 10)
          : null,
        message: form.calendarMessage,
      });

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
            calendarInfo,
            news: form.news,
            logoURL,
            heroImageURL,
            schoolAdmin: form.schoolAdmin || user?.email || "",
            admins: [],
          },
        },
      });

      onClose();
      await onCreate(); // Refresh school list after creation
    } catch (err: any) {
      setError(err.message || "Failed to create school");
    } finally {
      setSaving(false);
      setUploadingLogo(false);
      setUploadingHero(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Create School</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ pt: 1 }}>
            {error && <Alert severity="error">{error}</Alert>}
            <TextField
              label="School Name"
              name="name"
              value={form.name}
              onChange={handleInputChange}
              required
              fullWidth
            />
            <TextField
              label="Subdomain"
              name="subdomain"
              value={form.subdomain}
              onChange={handleInputChange}
              required
              helperText="Unique subdomain (e.g., a3 for a3.classpoint.com)"
              fullWidth
            />
            <TextField
              label="Address"
              name="address"
              value={form.address}
              onChange={handleInputChange}
              required
              fullWidth
            />
            <TextField
              label="Contact Email"
              name="contactEmail"
              value={form.contactEmail}
              onChange={handleInputChange}
              type="email"
              fullWidth
            />
            <TextField
              label="Phone"
              name="phone"
              value={form.phone}
              onChange={handleInputChange}
              type="tel"
              fullWidth
            />
            <TextField
              label="Website"
              name="website"
              value={form.website}
              onChange={handleInputChange}
              fullWidth
            />
            <TextField
              label="Description"
              name="description"
              value={form.description}
              onChange={handleInputChange}
              multiline
              minRows={2}
              fullWidth
            />

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <DatePicker
                  label="Calendar Start"
                  value={form.calendarStart}
                  onChange={(date) =>
                    setForm((f) => ({ ...f, calendarStart: date }))
                  }
                  slotProps={{ textField: { fullWidth: true } }}
                />
                <DatePicker
                  label="Calendar End"
                  value={form.calendarEnd}
                  onChange={(date) =>
                    setForm((f) => ({ ...f, calendarEnd: date }))
                  }
                  slotProps={{ textField: { fullWidth: true } }}
                />
              </Stack>
            </LocalizationProvider>
            <TextField
              label="Calendar Message"
              name="calendarMessage"
              value={form.calendarMessage}
              onChange={handleInputChange}
              multiline
              minRows={2}
              helperText="e.g. School opens in September, breaks in December."
              fullWidth
            />

            <TextField
              label="Latest News / Announcement"
              name="news"
              value={form.news}
              onChange={handleInputChange}
              multiline
              minRows={2}
              helperText="Optional: Show on the public school page."
              fullWidth
            />

            <TextField
              label="School Admin Email"
              name="schoolAdmin"
              value={form.schoolAdmin}
              onChange={handleInputChange}
              required
              helperText="Set who will be the school admin (email or user ID)."
              fullWidth
            />

            {/* Logo Upload */}
            <Box>
              <InputLabel htmlFor="logo-upload" sx={{ mb: 0.5 }}>
                School Logo (Square, 300x300px, PNG/JPG)
              </InputLabel>
              <input
                id="logo-upload"
                type="file"
                accept="image/png, image/jpeg"
                onChange={handleLogoChange}
                style={{ display: "block", marginBottom: 8 }}
                disabled={uploadingLogo}
              />
              {logoFile && (
                <Typography variant="caption">
                  {logoFile.name}
                  {uploadingLogo ? " (Uploading…)" : " (Ready)"}
                </Typography>
              )}
            </Box>

            {/* Hero Image Upload */}
            <Box>
              <InputLabel htmlFor="hero-upload" sx={{ mb: 0.5 }}>
                Hero Image (Wide, 1200x400px, PNG/JPG)
              </InputLabel>
              <input
                id="hero-upload"
                type="file"
                accept="image/png, image/jpeg"
                onChange={handleHeroChange}
                style={{ display: "block", marginBottom: 8 }}
                disabled={uploadingHero}
              />
              {heroFile && (
                <Typography variant="caption">
                  {heroFile.name}
                  {uploadingHero ? " (Uploading…)" : " (Ready)"}
                </Typography>
              )}
            </Box>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={saving || uploadingLogo || uploadingHero}
          >
            {saving ? "Creating..." : "Create School"}
          </Button>
          <Button onClick={onClose} variant="outlined" disabled={saving}>
            Cancel
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
