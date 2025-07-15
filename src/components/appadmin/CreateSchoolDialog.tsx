// src/components/appadmin/CreateSchoolDialog.tsx
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Stack,
  Grid,
  Typography,
  MenuItem,
  InputLabel,
  Select,
  FormControl,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { uploadData } from "aws-amplify/storage"; // For S3 image upload

interface Term {
  name: string;
  start: string;
  end: string;
}

interface Announcement {
  headline: string;
}

interface CreateSchoolDialogProps {
  open: boolean;
  onClose: () => void;
  onCreate: (input: any) => void;
}

const initialTerm: Term = { name: "", start: "", end: "" };

const CreateSchoolDialog: React.FC<CreateSchoolDialogProps> = ({
  open,
  onClose,
  onCreate,
}) => {
  const [form, setForm] = useState({
    name: "",
    subdomain: "",
    address: "",
    contactEmail: "",
    phone: "",
    website: "",
    description: "",
    adminEmail: "",
    calendarMessage: "",
    logoURL: "",
    heroImageURL: "",
    terms: [initialTerm], // Array of terms/semesters
    announcements: [{ headline: "" }],
  });
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [heroFile, setHeroFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  // Image upload handler
  async function handleImageUpload(file: File, type: "logo" | "hero") {
    if (!file) return;
    setUploading(true);
    const key = `schools/${form.subdomain || "temp"}/${type}_${Date.now()}`;
    try {
      const result = await uploadData({
        key,
        data: file,
        options: { contentType: file.type },
      }).result;
      const url = `https://${process.env.REACT_APP_S3_BUCKET}.s3.amazonaws.com/${key}`;
      setForm((prev) =>
        type === "logo"
          ? { ...prev, logoURL: url }
          : { ...prev, heroImageURL: url }
      );
    } catch (err) {
      alert("Failed to upload image");
      console.error(err);
    }
    setUploading(false);
  }

  // Form change handlers
  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  // Terms (calendar) logic
  const handleTermChange = (idx: number, field: keyof Term, value: string) => {
    setForm((prev) => ({
      ...prev,
      terms: prev.terms.map((t, i) =>
        i === idx ? { ...t, [field]: value } : t
      ),
    }));
  };
  const addTerm = () =>
    setForm((prev) => ({ ...prev, terms: [...prev.terms, initialTerm] }));
  const removeTerm = (idx: number) =>
    setForm((prev) => ({
      ...prev,
      terms: prev.terms.filter((_, i) => i !== idx),
    }));

  // Announcement logic
  const handleAnnounceChange = (idx: number, value: string) =>
    setForm((prev) => ({
      ...prev,
      announcements: prev.announcements.map((a, i) =>
        i === idx ? { headline: value } : a
      ),
    }));
  const addAnnouncement = () =>
    setForm((prev) => ({
      ...prev,
      announcements: [...prev.announcements, { headline: "" }],
    }));
  const removeAnnouncement = (idx: number) =>
    setForm((prev) => ({
      ...prev,
      announcements: prev.announcements.filter((_, i) => i !== idx),
    }));

  // Submission
  const handleSubmit = async () => {
    // Optionally upload images before submit
    if (logoFile) await handleImageUpload(logoFile, "logo");
    if (heroFile) await handleImageUpload(heroFile, "hero");
    onCreate({
      ...form,
      calendar: form.terms,
      news: form.announcements.map((a) => a.headline).filter(Boolean),
    });
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>Create New School</DialogTitle>
      <DialogContent>
        <Stack spacing={2} sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                label="School Name"
                name="name"
                value={form.name}
                onChange={handleInput}
                fullWidth
                required
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                label="Subdomain"
                name="subdomain"
                value={form.subdomain}
                onChange={handleInput}
                fullWidth
                required
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                label="Address"
                name="address"
                value={form.address}
                onChange={handleInput}
                fullWidth
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                label="Contact Email"
                name="contactEmail"
                value={form.contactEmail}
                onChange={handleInput}
                type="email"
                fullWidth
                required
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                label="Phone"
                name="phone"
                value={form.phone}
                onChange={handleInput}
                fullWidth
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                label="Website"
                name="website"
                value={form.website}
                onChange={handleInput}
                fullWidth
              />
            </Grid>
          </Grid>
          <TextField
            label="School Description"
            name="description"
            value={form.description}
            onChange={handleInput}
            fullWidth
            multiline
            minRows={3}
          />
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" component="label" disabled={uploading}>
              Upload Logo
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => setLogoFile(e.target.files?.[0] || null)}
              />
            </Button>
            <Button variant="outlined" component="label" disabled={uploading}>
              Upload Hero Image
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => setHeroFile(e.target.files?.[0] || null)}
              />
            </Button>
            {form.logoURL && (
              <Typography color="success.main">Logo Uploaded</Typography>
            )}
            {form.heroImageURL && (
              <Typography color="success.main">Hero Uploaded</Typography>
            )}
          </Stack>
          <TextField
            label="School Admin Email"
            name="adminEmail"
            value={form.adminEmail}
            onChange={handleInput}
            fullWidth
          />
          <Typography variant="h6" sx={{ mt: 3 }}>
            Academic Calendar (Terms/Semesters)
          </Typography>
          {form.terms.map((term, idx) => (
            <Stack
              key={idx}
              direction="row"
              spacing={2}
              alignItems="center"
              sx={{ mb: 1 }}
            >
              <TextField
                label="Term/Semester Name"
                value={term.name}
                onChange={(e) => handleTermChange(idx, "name", e.target.value)}
                sx={{ width: 200 }}
              />
              <TextField
                label="Start Date"
                type="date"
                value={term.start}
                onChange={(e) => handleTermChange(idx, "start", e.target.value)}
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                label="End Date"
                type="date"
                value={term.end}
                onChange={(e) => handleTermChange(idx, "end", e.target.value)}
                InputLabelProps={{ shrink: true }}
              />
              <IconButton
                onClick={() => removeTerm(idx)}
                disabled={form.terms.length === 1}
              >
                <DeleteIcon />
              </IconButton>
            </Stack>
          ))}
          <Button
            startIcon={<AddIcon />}
            size="small"
            sx={{ width: 180, mb: 1 }}
            onClick={addTerm}
            disabled={form.terms.length >= 6}
          >
            Add Term/Semester
          </Button>
          <TextField
            label="Calendar Message"
            name="calendarMessage"
            value={form.calendarMessage}
            onChange={handleInput}
            fullWidth
            multiline
            minRows={2}
          />
          <Typography variant="h6" sx={{ mt: 3 }}>
            News/Announcements
          </Typography>
          <List>
            {form.announcements.map((a, idx) => (
              <ListItem key={idx} disablePadding>
                <TextField
                  value={a.headline}
                  onChange={(e) => handleAnnounceChange(idx, e.target.value)}
                  label={`Announcement #${idx + 1}`}
                  sx={{ flex: 1 }}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    onClick={() => removeAnnouncement(idx)}
                    disabled={form.announcements.length === 1}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
          <Button
            startIcon={<AddIcon />}
            size="small"
            sx={{ width: 200 }}
            onClick={addAnnouncement}
            disabled={form.announcements.length >= 8}
          >
            Add Announcement
          </Button>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="inherit">
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          disabled={!form.name || !form.subdomain || !form.contactEmail}
        >
          Create School
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateSchoolDialog;
