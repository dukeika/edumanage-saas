import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Stack,
  Button,
  MenuItem,
  CircularProgress,
  InputLabel,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { uploadData } from "@aws-amplify/storage";
import { generateClient } from "@aws-amplify/api";
import { createSchool, updateSchool } from "../../graphql/mutations";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {
  open: boolean;
  onClose: () => void;
  onSaved: () => void;
  initialData?: any;
}

const STATUS_OPTIONS = [
  { value: "ACTIVE", label: "Active" },
  { value: "NOT_ACTIVE", label: "Not Active" },
];

const emptyCalendar = { label: "", start: null, end: null, message: "" };
const emptyNews = { title: "", message: "", date: null };

export default function CreateEditSchoolDialog({
  open,
  onClose,
  onSaved,
  initialData,
}: Props) {
  const editing = !!initialData;

  const [form, setForm] = useState<any>({
    name: "",
    subdomain: "",
    address: "",
    contactEmail: "",
    phone: "",
    website: "",
    description: "",
    logoURL: "",
    heroImageURL: "",
    schoolAdmin: "",
    admins: [],
    status: "ACTIVE",
    calendar: [emptyCalendar],
    news: [emptyNews],
  });

  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [heroFile, setHeroFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Parse DynamoDB Map arrays if present
  function parseDynamoArr(arr: any[]): any[] {
    if (!Array.isArray(arr)) return [];
    return arr.map((item) => {
      if (item && typeof item === "object" && !item.M) return item;
      if (!item?.M) return {};
      const out: any = {};
      for (const [k, v] of Object.entries(item.M)) {
        const vv = v as any;
        out[k] = vv.S ?? vv.N ?? vv.BOOL ?? null;
      }
      return out;
    });
  }

  useEffect(() => {
    if (editing && initialData) {
      setForm({
        ...initialData,
        calendar: parseDynamoArr(initialData.calendar).length
          ? parseDynamoArr(initialData.calendar)
          : [emptyCalendar],
        news: parseDynamoArr(initialData.news).length
          ? parseDynamoArr(initialData.news)
          : [emptyNews],
      });
    } else {
      setForm({
        name: "",
        subdomain: "",
        address: "",
        contactEmail: "",
        phone: "",
        website: "",
        description: "",
        logoURL: "",
        heroImageURL: "",
        schoolAdmin: "",
        admins: [],
        status: "ACTIVE",
        calendar: [emptyCalendar],
        news: [emptyNews],
      });
      setLogoFile(null);
      setHeroFile(null);
    }
  }, [editing, initialData, open]);

  // Handlers
  const handleInput = (e: any) => {
    const { name, value } = e.target;
    setForm((f: any) => ({
      ...f,
      [name]: value,
    }));
  };

  const handleCalendarChange = (idx: number, field: string, value: any) => {
    setForm((f: any) => {
      const arr = [...f.calendar];
      arr[idx] = { ...arr[idx], [field]: value };
      return { ...f, calendar: arr };
    });
  };

  const handleNewsChange = (idx: number, field: string, value: any) => {
    setForm((f: any) => {
      const arr = [...f.news];
      arr[idx] = { ...arr[idx], [field]: value };
      return { ...f, news: arr };
    });
  };

  const addCalendar = () =>
    setForm((f: any) => ({
      ...f,
      calendar: [...f.calendar, { ...emptyCalendar }],
    }));

  const removeCalendar = (idx: number) =>
    setForm((f: any) => ({
      ...f,
      calendar:
        f.calendar.length > 1
          ? f.calendar.filter((_: any, i: number) => i !== idx)
          : f.calendar,
    }));

  const addNews = () =>
    setForm((f: any) => ({
      ...f,
      news: [...f.news, { ...emptyNews }],
    }));

  const removeNews = (idx: number) =>
    setForm((f: any) => ({
      ...f,
      news:
        f.news.length > 1
          ? f.news.filter((_: any, i: number) => i !== idx)
          : f.news,
    }));

  // Upload file to S3 and return the public URL (not a signed URL)
  async function uploadImage(file: File, prefix: string) {
    const ext = file.name.split(".").pop();
    const filename = `${prefix}/${Date.now()}-${Math.random()
      .toString(36)
      .slice(2)}.${ext}`;
    setUploading(true);
    await uploadData({
      path: `public/${filename}`,
      data: file,
    });
    setUploading(false);
    // Direct public URL:
    const s3Bucket =
      process.env.REACT_APP_S3_BUCKET ||
      "classpoint-school-media-1234ca37e-dev"; // fallback: change to your bucket!
    const s3Region = process.env.REACT_APP_S3_REGION || "eu-west-2"; // fallback: change if needed
    return `https://${s3Bucket}.s3.${s3Region}.amazonaws.com/public/${filename}`;
  }

  // Submit
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError(null);
    setSaving(true);

    let logoURL = form.logoURL;
    let heroImageURL = form.heroImageURL;
    try {
      if (logoFile) {
        logoURL = await uploadImage(logoFile, "school-logos");
      }
      if (heroFile) {
        heroImageURL = await uploadImage(heroFile, "school-hero");
      }
    } catch (err) {
      setError("Image upload failed");
      setSaving(false);
      return;
    }

    // Prepare calendar/news arrays for API
    const calendarArr = form.calendar.map((c: any) => ({
      label: c.label || "",
      start: c.start
        ? c.start instanceof Date
          ? c.start.toISOString().slice(0, 10)
          : c.start
        : null,
      end: c.end
        ? c.end instanceof Date
          ? c.end.toISOString().slice(0, 10)
          : c.end
        : null,
      message: c.message || "",
    }));

    const newsArr = form.news.map((n: any) => ({
      title: n.title,
      message: n.message,
      date: n.date
        ? n.date instanceof Date
          ? n.date.toISOString().slice(0, 10)
          : n.date
        : null,
    }));

    const input: any = {
      name: form.name,
      subdomain: form.subdomain,
      address: form.address,
      contactEmail: form.contactEmail,
      phone: form.phone,
      website: form.website,
      description: form.description,
      logoURL,
      heroImageURL,
      calendar: calendarArr,
      news: newsArr,
      schoolAdmin: form.schoolAdmin || "admin@example.com",
      admins: form.admins?.length
        ? form.admins
        : [form.schoolAdmin || "admin@example.com"],
      status: form.status,
    };
    if (editing) input.id = initialData.id;

    try {
      const client = generateClient();
      if (editing) {
        await client.graphql({
          query: updateSchool,
          variables: { input },
        });
      } else {
        await client.graphql({
          query: createSchool,
          variables: { input },
        });
      }
      onSaved();
      onClose();
    } catch (err: any) {
      setError(err.message || "Failed to save school");
    } finally {
      setSaving(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{editing ? "Edit School" : "Create School"}</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2} mt={1}>
            {error && (
              <Typography color="error" variant="body2">
                {error}
              </Typography>
            )}
            <TextField
              label="School Name"
              name="name"
              value={form.name}
              onChange={handleInput}
              required
              fullWidth
            />
            <TextField
              label="Subdomain"
              name="subdomain"
              value={form.subdomain}
              onChange={handleInput}
              required
              helperText="e.g. fls for fls.classpoint.com"
              fullWidth
            />
            <TextField
              label="Address"
              name="address"
              value={form.address}
              onChange={handleInput}
              fullWidth
            />
            <TextField
              label="Contact Email"
              name="contactEmail"
              value={form.contactEmail}
              onChange={handleInput}
              fullWidth
            />
            <TextField
              label="Phone"
              name="phone"
              value={form.phone}
              onChange={handleInput}
              fullWidth
            />
            <TextField
              label="Website"
              name="website"
              value={form.website}
              onChange={handleInput}
              fullWidth
            />
            <TextField
              label="Description"
              name="description"
              value={form.description}
              onChange={handleInput}
              multiline
              minRows={2}
              fullWidth
            />
            {/* Logo */}
            <Box>
              <InputLabel sx={{ mb: 0.5 }}>
                School Logo (PNG/JPG, 1:1)
              </InputLabel>
              <input
                type="file"
                accept="image/png, image/jpeg"
                onChange={(e) => setLogoFile(e.target.files?.[0] ?? null)}
              />
              {form.logoURL && (
                <img
                  src={form.logoURL}
                  alt="Logo"
                  style={{ height: 40, marginLeft: 8, verticalAlign: "middle" }}
                />
              )}
            </Box>
            {/* Hero */}
            <Box>
              <InputLabel sx={{ mb: 0.5 }}>
                Hero Image (PNG/JPG, wide banner)
              </InputLabel>
              <input
                type="file"
                accept="image/png, image/jpeg"
                onChange={(e) => setHeroFile(e.target.files?.[0] ?? null)}
              />
              {form.heroImageURL && (
                <img
                  src={form.heroImageURL}
                  alt="Hero"
                  style={{ height: 40, marginLeft: 8, verticalAlign: "middle" }}
                />
              )}
            </Box>
            {/* Calendar */}
            <Box>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                Academic Calendar
                <IconButton onClick={addCalendar} size="small" sx={{ ml: 1 }}>
                  <AddIcon />
                </IconButton>
              </Typography>
              <Stack spacing={2}>
                {form.calendar.map((c: any, i: number) => (
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    alignItems="center"
                    key={i}
                  >
                    <TextField
                      label="Label"
                      value={c.label}
                      onChange={(e) =>
                        handleCalendarChange(i, "label", e.target.value)
                      }
                      fullWidth
                    />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        label="Start"
                        value={c.start ? new Date(c.start) : null}
                        onChange={(date) =>
                          handleCalendarChange(i, "start", date)
                        }
                        slotProps={{ textField: { fullWidth: true } }}
                      />
                      <DatePicker
                        label="End"
                        value={c.end ? new Date(c.end) : null}
                        onChange={(date) =>
                          handleCalendarChange(i, "end", date)
                        }
                        slotProps={{ textField: { fullWidth: true } }}
                      />
                    </LocalizationProvider>
                    <TextField
                      label="Message"
                      value={c.message}
                      onChange={(e) =>
                        handleCalendarChange(i, "message", e.target.value)
                      }
                      fullWidth
                    />
                    <IconButton
                      onClick={() => removeCalendar(i)}
                      color="error"
                      size="small"
                      disabled={form.calendar.length === 1}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Stack>
                ))}
              </Stack>
            </Box>
            {/* News */}
            <Box>
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                News / Announcements
                <IconButton onClick={addNews} size="small" sx={{ ml: 1 }}>
                  <AddIcon />
                </IconButton>
              </Typography>
              <Stack spacing={2}>
                {form.news.map((n: any, i: number) => (
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    alignItems="center"
                    key={i}
                  >
                    <TextField
                      label="Title"
                      value={n.title}
                      onChange={(e) =>
                        handleNewsChange(i, "title", e.target.value)
                      }
                      fullWidth
                    />
                    <TextField
                      label="Message"
                      value={n.message}
                      onChange={(e) =>
                        handleNewsChange(i, "message", e.target.value)
                      }
                      fullWidth
                    />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                      <DatePicker
                        label="Date"
                        value={n.date ? new Date(n.date) : null}
                        onChange={(date) => handleNewsChange(i, "date", date)}
                        slotProps={{ textField: { fullWidth: true } }}
                      />
                    </LocalizationProvider>
                    <IconButton
                      onClick={() => removeNews(i)}
                      color="error"
                      size="small"
                      disabled={form.news.length === 1}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Stack>
                ))}
              </Stack>
            </Box>
            <TextField
              select
              label="Status"
              name="status"
              value={form.status}
              onChange={handleInput}
              fullWidth
            >
              {STATUS_OPTIONS.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="School Admin Email"
              name="schoolAdmin"
              value={form.schoolAdmin}
              onChange={handleInput}
              required
              fullWidth
            />
          </Stack>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} disabled={saving || uploading}>
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          disabled={saving || uploading}
          variant="contained"
        >
          {saving || uploading ? (
            <CircularProgress size={22} />
          ) : editing ? (
            "Save Changes"
          ) : (
            "Create School"
          )}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
