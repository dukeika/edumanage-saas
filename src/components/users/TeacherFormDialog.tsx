import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Grid,
  MenuItem,
  Chip,
  Box,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  SelectChangeEvent,
  FormHelperText,
  IconButton,
  InputAdornment,
  Typography,
  Alert,
} from "@mui/material";
import {
  Close as CloseIcon,
  Visibility,
  VisibilityOff,
  Person,
  Email,
  Phone,
  School,
  Book,
} from "@mui/icons-material";
import { Class } from "../../API";

interface TeacherFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  teacher?: any;
  classes?: Class[];
}

const SUBJECTS = [
  "Mathematics",
  "English Language",
  "Physics",
  "Chemistry",
  "Biology",
  "Geography",
  "History",
  "Economics",
  "Literature",
  "Computer Science",
  "French",
  "Agricultural Science",
  "Commerce",
  "Government",
  "Christian Religious Studies",
  "Islamic Religious Studies",
  "Civic Education",
  "Further Mathematics",
  "Technical Drawing",
  "Fine Arts",
  "Music",
  "Physical Education",
];

const TeacherFormDialog: React.FC<TeacherFormDialogProps> = ({
  open,
  onClose,
  onSubmit,
  teacher,
  classes = [],
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subjects: [] as string[],
    classes: [] as string[],
    password: "",
    confirmPassword: "",
    qualifications: "",
    experience: "",
    address: "",
    emergencyContact: "",
    emergencyPhone: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    if (teacher) {
      setFormData({
        name: teacher.name || "",
        email: teacher.email || "",
        phone: teacher.phone || "",
        subjects: teacher.subjects || [],
        classes: teacher.classes || [],
        password: "",
        confirmPassword: "",
        qualifications: teacher.qualifications || "",
        experience: teacher.experience || "",
        address: teacher.address || "",
        emergencyContact: teacher.emergencyContact || "",
        emergencyPhone: teacher.emergencyPhone || "",
      });
    } else {
      // Reset form for new teacher
      setFormData({
        name: "",
        email: "",
        phone: "",
        subjects: [],
        classes: [],
        password: "",
        confirmPassword: "",
        qualifications: "",
        experience: "",
        address: "",
        emergencyContact: "",
        emergencyPhone: "",
      });
    }
    setErrors({});
  }, [teacher]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev: any) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubjectChange = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value;
    setFormData((prev) => ({
      ...prev,
      subjects: typeof value === "string" ? value.split(",") : value,
    }));
  };

  const handleClassChange = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value;
    setFormData((prev) => ({
      ...prev,
      classes: typeof value === "string" ? value.split(",") : value,
    }));
  };

  const validate = () => {
    const newErrors: any = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!teacher) {
      // Only validate password for new teachers
      if (!formData.password) {
        newErrors.password = "Password is required";
      } else if (formData.password.length < 8) {
        newErrors.password = "Password must be at least 8 characters";
      }

      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    if (formData.phone && !/^[0-9+\-\s()]+$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    if (formData.subjects.length === 0) {
      newErrors.subjects = "At least one subject is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">
            {teacher ? "Edit Teacher" : "Add New Teacher"}
          </Typography>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={3}>
          {/* Basic Information */}
          <Grid item xs={12}>
            <Typography variant="subtitle2" gutterBottom color="primary">
              Basic Information
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              required
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              required
              disabled={!!teacher} // Don't allow email change for existing teachers
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              error={!!errors.phone}
              helperText={errors.phone}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Phone />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              multiline
              rows={1}
            />
          </Grid>

          {/* Academic Information */}
          <Grid item xs={12}>
            <Typography variant="subtitle2" gutterBottom color="primary">
              Academic Information
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth error={!!errors.subjects}>
              <InputLabel>Subjects</InputLabel>
              <Select
                multiple
                value={formData.subjects}
                onChange={handleSubjectChange}
                input={<OutlinedInput label="Subjects" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} size="small" />
                    ))}
                  </Box>
                )}
              >
                {SUBJECTS.map((subject) => (
                  <MenuItem key={subject} value={subject}>
                    {subject}
                  </MenuItem>
                ))}
              </Select>
              {errors.subjects && (
                <FormHelperText>{errors.subjects}</FormHelperText>
              )}
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Assigned Classes</InputLabel>
              <Select
                multiple
                value={formData.classes}
                onChange={handleClassChange}
                input={<OutlinedInput label="Assigned Classes" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} size="small" />
                    ))}
                  </Box>
                )}
              >
                {/* Mock class data for demo */}
                {[
                  "JSS 1A",
                  "JSS 1B",
                  "JSS 2A",
                  "JSS 2B",
                  "JSS 3A",
                  "JSS 3B",
                  "SSS 1A",
                  "SSS 1B",
                  "SSS 2A",
                  "SSS 2B",
                  "SSS 3A",
                  "SSS 3B",
                  "Primary 1",
                  "Primary 2",
                  "Primary 3",
                  "Primary 4",
                  "Primary 5",
                  "Primary 6",
                ].map((cls) => (
                  <MenuItem key={cls} value={cls}>
                    {cls}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Qualifications"
              name="qualifications"
              value={formData.qualifications}
              onChange={handleChange}
              placeholder="e.g., B.Sc Mathematics, PGDE"
              multiline
              rows={2}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Years of Experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="e.g., 5 years"
            />
          </Grid>

          {/* Account Information - Only for new teachers */}
          {!teacher && (
            <>
              <Grid item xs={12}>
                <Typography variant="subtitle2" gutterBottom color="primary">
                  Account Information
                </Typography>
                <Alert severity="info" sx={{ mt: 1 }}>
                  Login credentials will be sent to the teacher's email address
                </Alert>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  error={!!errors.password}
                  helperText={errors.password}
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Confirm Password"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword}
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          edge="end"
                        >
                          {showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </>
          )}

          {/* Emergency Contact */}
          <Grid item xs={12}>
            <Typography variant="subtitle2" gutterBottom color="primary">
              Emergency Contact
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Emergency Contact Name"
              name="emergencyContact"
              value={formData.emergencyContact}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Emergency Contact Phone"
              name="emergencyPhone"
              value={formData.emergencyPhone}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions sx={{ px: 3, py: 2 }}>
        <Button onClick={onClose} variant="outlined">
          Cancel
        </Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          {teacher ? "Update Teacher" : "Add Teacher"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TeacherFormDialog;
