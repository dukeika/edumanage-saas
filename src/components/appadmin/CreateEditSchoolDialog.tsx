import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Stack,
  Typography,
  IconButton,
  InputLabel,
  CircularProgress,
} from "@mui/material";
import { generateClient } from "@aws-amplify/api";
import { createSchool, updateSchool } from "../../graphql/mutations";
import { uploadData, getUrl } from "@aws-amplify/storage";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

// --- Types for form state ---
type CalendarEntryForm = {
  label: string;
  start: Date | null;
  end: Date | null;
  message: string;
};
type NewsEntryForm = {
  title: string;
  message: string;
  date: Date | null;
};
type SchoolForm = {
  id?: string;
  name: string;
  subdomain: string;
  status: string;
  logoURL: string;
  heroImageURL: string;
  address: string;
  contactEmail: string;
  phone: string;
  website: string;
  description: string;
  calendar: CalendarEntryForm[];
  news: NewsEntryForm[];
  schoolAdmin: string;
  admins: string[];
};

interface CreateEditSchoolDialogProps {
  open: boolean;
  onClose: () => void;
  onSaved: () => void;
  initialData?: Partial<SchoolForm> | null;
}

export default function CreateEditSchoolDialog({
  open,
  onClose,
  onSaved,
  initialData = null,
}: CreateEditSchoolDialogProps) {
  const editing = !!(initialData && initialData.id);

  // Form state
  const [form, setForm] = useState<SchoolForm>({
    name: "",
    subdomain: "",
    status: "ACTIVE",
    logoURL: "",
    heroImageURL: "",
    address: "",
    contactEmail: "",
    phone: "",
    website: "",
    description: "",
    calendar: [{ label: "", start: null, end: null, message: "" }],
    news: [{ title: "", message: "", date: null }],
    schoolAdmin: "",
    admins: [],
  });

  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [heroFile, setHeroFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  // Load for edit mode
  useEffect(() => {
    if (editing && initialData) {
      setForm({
        ...form, // for defaults
        ...initialData,
        calendar:
          Array.isArray(initialData.calendar) && initialData.calendar.length
            ? initialData.calendar.map((c) => ({
                label: c.label || "",
                start: c.start
                  ? typeof c.start === "string"
                    ? new Date(c.start)
                    : c.start
                  : null,

                end: c.end
                  ? typeof c.end === "string"
                    ? new Date(c.end)
                    : c.end
                  : null,
                message: c.message || "",
              }))
            : [{ label: "", start: null, end: null, message: "" }],
        news:
          Array.isArray(initialData.news) && initialData.news.length
            ? initialData.news.map((n) => ({
                title: n.title || "",
                message: n.message || "",
                date: n.date
                  ? typeof n.date === "string"
                    ? new Date(n.date)
                    : n.date
                  : null,
              }))
            : [{ title: "", message: "", date: null }],
      });
    } else {
      setForm({
        name: "",
        subdomain: "",
        status: "ACTIVE",
        logoURL: "",
        heroImageURL: "",
        address: "",
        contactEmail: "",
        phone: "",
        website: "",
        description: "",
        calendar: [{ label: "", start: null, end: null, message: "" }],
        news: [{ title: "", message: "", date: null }],
        schoolAdmin: "",
        admins: [],
      });
      setLogoFile(null);
      setHeroFile(null);
    }
    // eslint-disable-next-line
  }, [open, editing, initialData]);

  const handleInput = (field: keyof SchoolForm, value: any) =>
    setForm((f) => ({ ...f, [field]: value }));

  // Upload file
  async function uploadImage(file: File, prefix: string) {
    const key = `${prefix}/${Date.now()}-${file.name}`;
    setUploading(true);
    await uploadData({ data: file, path: `public/${key}` });
    const { url } = await getUrl({ path: `public/${key}` });
    setUploading(false);
    return url.toString();
  }

  // Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let logoURL = form.logoURL;
    let heroImageURL = form.heroImageURL;
    if (logoFile) logoURL = await uploadImage(logoFile, "school-logos");
    if (heroFile) heroImageURL = await uploadImage(heroFile, "school-hero");

    const calendarArr = form.calendar.map((c) => ({
      label: c.label,
      start: c.start ? c.start.toISOString().slice(0, 10) : null,
      end: c.end ? c.end.toISOString().slice(0, 10) : null,
      message: c.message,
    }));

    const newsArr = form.news.map((n) => ({
      title: n.title,
      message: n.message,
      date: n.date ? n.date.toISOString().slice(0, 10) : null,
    }));

    const input: any = {
      ...form,
      logoURL,
      heroImageURL,
      calendar: calendarArr,
      news: newsArr,
    };
    if (editing && initialData?.id) input.id = initialData.id;

    // Required: schoolAdmin/admins
    if (!input.schoolAdmin) input.schoolAdmin = "admin@example.com";
    if (!input.admins || !input.admins.length)
      input.admins = [input.schoolAdmin];

    const client = generateClient();
    if (editing) {
      await client.graphql({ query: updateSchool, variables: { input } });
    } else {
      await client.graphql({ query: createSchool, variables: { input } });
    }
    onSaved && onSaved();
    onClose && onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{editing ? "Edit School" : "Create School"}</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2} mt={1}>
            <TextField
              label="School Name"
              value={form.name}
              onChange={(e) => handleInput("name", e.target.value)}
              required
            />
            <TextField
              label="Subdomain"
              value={form.subdomain}
              onChange={(e) => handleInput("subdomain", e.target.value)}
              required
            />
            <TextField
              label="Address"
              value={form.address}
              onChange={(e) => handleInput("address", e.target.value)}
            />
            <TextField
              label="Contact Email"
              value={form.contactEmail}
              onChange={(e) => handleInput("contactEmail", e.target.value)}
            />
            <TextField
              label="Phone"
              value={form.phone}
              onChange={(e) => handleInput("phone", e.target.value)}
            />
            <TextField
              label="Website"
              value={form.website}
              onChange={(e) => handleInput("website", e.target.value)}
            />
            <TextField
              label="Description"
              value={form.description}
              onChange={(e) => handleInput("description", e.target.value)}
              multiline
              minRows={2}
            />

            {/* Calendar */}
            <Typography variant="subtitle1" sx={{ mt: 1 }}>
              Calendar Entries
              <IconButton
                onClick={() =>
                  setForm((f) => ({
                    ...f,
                    calendar: [
                      ...f.calendar,
                      { label: "", start: null, end: null, message: "" },
                    ],
                  }))
                }
              >
                <AddIcon />
              </IconButton>
            </Typography>
            {form.calendar.map((c, idx) => (
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                key={idx}
              >
                <TextField
                  label="Label"
                  value={c.label}
                  onChange={(e) => {
                    const arr = [...form.calendar];
                    arr[idx].label = e.target.value;
                    setForm((f) => ({ ...f, calendar: arr }));
                  }}
                />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Start"
                    value={c.start}
                    onChange={(date) => {
                      const arr = [...form.calendar];
                      arr[idx].start = date as Date;
                      setForm((f) => ({ ...f, calendar: arr }));
                    }}
                  />
                  <DatePicker
                    label="End"
                    value={c.end}
                    onChange={(date) => {
                      const arr = [...form.calendar];
                      arr[idx].end = date as Date;
                      setForm((f) => ({ ...f, calendar: arr }));
                    }}
                  />
                </LocalizationProvider>
                <TextField
                  label="Message"
                  value={c.message}
                  onChange={(e) => {
                    const arr = [...form.calendar];
                    arr[idx].message = e.target.value;
                    setForm((f) => ({ ...f, calendar: arr }));
                  }}
                />
                <IconButton
                  onClick={() =>
                    setForm((f) => ({
                      ...f,
                      calendar: f.calendar.filter((_, i) => i !== idx),
                    }))
                  }
                  disabled={form.calendar.length === 1}
                >
                  <DeleteIcon />
                </IconButton>
              </Stack>
            ))}

            {/* News */}
            <Typography variant="subtitle1" sx={{ mt: 1 }}>
              News / Announcements
              <IconButton
                onClick={() =>
                  setForm((f) => ({
                    ...f,
                    news: [...f.news, { title: "", message: "", date: null }],
                  }))
                }
              >
                <AddIcon />
              </IconButton>
            </Typography>
            {form.news.map((n, idx) => (
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                key={idx}
              >
                <TextField
                  label="Title"
                  value={n.title}
                  onChange={(e) => {
                    const arr = [...form.news];
                    arr[idx].title = e.target.value;
                    setForm((f) => ({ ...f, news: arr }));
                  }}
                />
                <TextField
                  label="Message"
                  value={n.message}
                  onChange={(e) => {
                    const arr = [...form.news];
                    arr[idx].message = e.target.value;
                    setForm((f) => ({ ...f, news: arr }));
                  }}
                />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Date"
                    value={n.date}
                    onChange={(date) => {
                      const arr = [...form.news];
                      arr[idx].date = date as Date;
                      setForm((f) => ({ ...f, news: arr }));
                    }}
                  />
                </LocalizationProvider>
                <IconButton
                  onClick={() =>
                    setForm((f) => ({
                      ...f,
                      news: f.news.filter((_, i) => i !== idx),
                    }))
                  }
                  disabled={form.news.length === 1}
                >
                  <DeleteIcon />
                </IconButton>
              </Stack>
            ))}

            {/* Image Uploads */}
            <Stack direction="row" spacing={2} alignItems="center">
              <InputLabel htmlFor="logo-upload">School Logo</InputLabel>
              <input
                id="logo-upload"
                type="file"
                accept="image/png, image/jpeg"
                onChange={(e) => setLogoFile(e.target.files?.[0] || null)}
              />
              {form.logoURL && (
                <img
                  src={form.logoURL}
                  alt="logo"
                  height={32}
                  style={{ borderRadius: 4, marginLeft: 8 }}
                />
              )}
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center">
              <InputLabel htmlFor="hero-upload">Hero Image</InputLabel>
              <input
                id="hero-upload"
                type="file"
                accept="image/png, image/jpeg"
                onChange={(e) => setHeroFile(e.target.files?.[0] || null)}
              />
              {form.heroImageURL && (
                <img
                  src={form.heroImageURL}
                  alt="hero"
                  height={32}
                  style={{ borderRadius: 4, marginLeft: 8 }}
                />
              )}
            </Stack>
          </Stack>
        </form>
        {uploading && <CircularProgress sx={{ mt: 2 }} />}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} disabled={uploading}>
          Cancel
        </Button>
        <Button onClick={handleSubmit} variant="contained" disabled={uploading}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
