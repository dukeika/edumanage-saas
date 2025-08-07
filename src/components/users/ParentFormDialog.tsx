import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Switch,
  Typography,
  Box,
  Divider,
  Alert,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Close as CloseIcon,
  Person as PersonIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  Home as HomeIcon,
  Work as WorkIcon,
  Warning as WarningIcon,
} from "@mui/icons-material";

// Define Parent interface since it's not in the API yet
interface Parent {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string | null;
  alternatePhone?: string | null;
  address?: string | null;
  occupation?: string | null;
  employer?: string | null;
  relationshipType: string;
  schoolID: string;
  isEmergencyContact?: boolean | null;
  emergencyContactPriority?: number | null;
  userID?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
}

interface ParentFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  parent?: Parent | null;
}

const ParentFormDialog: React.FC<ParentFormDialogProps> = ({
  open,
  onClose,
  onSubmit,
  parent,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    alternatePhone: "",
    address: "",
    occupation: "",
    employer: "",
    relationshipType: "Father",
    isEmergencyContact: false,
    emergencyContactPriority: 1,
  });

  const [errors, setErrors] = useState<any>({});
  const [touched, setTouched] = useState<any>({});

  useEffect(() => {
    if (parent) {
      setFormData({
        firstName: parent.firstName || "",
        lastName: parent.lastName || "",
        email: parent.email || "",
        phone: parent.phone || "",
        alternatePhone: parent.alternatePhone || "",
        address: parent.address || "",
        occupation: parent.occupation || "",
        employer: parent.employer || "",
        relationshipType: parent.relationshipType || "Father",
        isEmergencyContact: parent.isEmergencyContact || false,
        emergencyContactPriority: parent.emergencyContactPriority || 1,
      });
    } else {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        alternatePhone: "",
        address: "",
        occupation: "",
        employer: "",
        relationshipType: "Father",
        isEmergencyContact: false,
        emergencyContactPriority: 1,
      });
    }
    setErrors({});
    setTouched({});
  }, [parent]);

  const validateField = (name: string, value: any) => {
    let error = "";

    switch (name) {
      case "firstName":
      case "lastName":
        if (!value.trim()) {
          error = "This field is required";
        } else if (!/^[a-zA-Z\s-']+$/.test(value)) {
          error = "Only letters, spaces, hyphens and apostrophes allowed";
        }
        break;
      case "email":
        if (!value.trim()) {
          error = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Invalid email format";
        }
        break;
      case "phone":
        if (!value.trim()) {
          error = "Phone number is required";
        } else if (
          !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,7}$/.test(
            value.replace(/\s/g, "")
          )
        ) {
          error = "Invalid phone number format";
        }
        break;
      case "alternatePhone":
        if (
          value &&
          !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,7}$/.test(
            value.replace(/\s/g, "")
          )
        ) {
          error = "Invalid phone number format";
        }
        break;
      case "emergencyContactPriority":
        if (formData.isEmergencyContact && (!value || value < 1 || value > 5)) {
          error = "Priority must be between 1 and 5";
        }
        break;
    }

    setErrors((prev: any) => ({ ...prev, [name]: error }));
    return !error;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any
  ) => {
    const { name, value, checked } = e.target;
    const newValue = e.target.type === "checkbox" ? checked : value;

    setFormData({ ...formData, [name]: newValue });

    if (touched[name]) {
      validateField(name, newValue);
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    validateField(name, value);
  };

  const validateForm = () => {
    const newErrors: any = {};
    let isValid = true;

    // Validate required fields
    ["firstName", "lastName", "email", "phone"].forEach((field) => {
      if (!validateField(field, formData[field as keyof typeof formData])) {
        isValid = false;
      }
    });

    // Validate optional fields if they have values
    if (formData.alternatePhone) {
      validateField("alternatePhone", formData.alternatePhone);
    }

    if (formData.isEmergencyContact) {
      validateField(
        "emergencyContactPriority",
        formData.emergencyContactPriority
      );
    }

    return isValid;
  };

  const handleSubmit = () => {
    const allTouched: any = {};
    Object.keys(formData).forEach((key) => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      fullScreen={isMobile}
    >
      <DialogTitle>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center" gap={1}>
            <PersonIcon />
            <Typography variant="h6">
              {parent ? "Edit Parent" : "Add New Parent"}
            </Typography>
          </Box>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent dividers>
        <Box sx={{ mt: 2 }}>
          {/* Personal Information Section */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Personal Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.firstName && !!errors.firstName}
                  helperText={touched.firstName && errors.firstName}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.lastName && !!errors.lastName}
                  helperText={touched.lastName && errors.lastName}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Relationship Type</InputLabel>
                  <Select
                    name="relationshipType"
                    value={formData.relationshipType}
                    onChange={handleChange}
                    label="Relationship Type"
                  >
                    <MenuItem value="Father">Father</MenuItem>
                    <MenuItem value="Mother">Mother</MenuItem>
                    <MenuItem value="Guardian">Guardian</MenuItem>
                    <MenuItem value="Step-Father">Step-Father</MenuItem>
                    <MenuItem value="Step-Mother">Step-Mother</MenuItem>
                    <MenuItem value="Grandfather">Grandfather</MenuItem>
                    <MenuItem value="Grandmother">Grandmother</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Contact Information Section */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Contact Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  InputProps={{
                    startAdornment: (
                      <EmailIcon sx={{ mr: 1, color: "action.active" }} />
                    ),
                  }}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.phone && !!errors.phone}
                  helperText={touched.phone && errors.phone}
                  InputProps={{
                    startAdornment: (
                      <PhoneIcon sx={{ mr: 1, color: "action.active" }} />
                    ),
                  }}
                  placeholder="+234 803 456 7890"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Alternate Phone"
                  name="alternatePhone"
                  value={formData.alternatePhone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.alternatePhone && !!errors.alternatePhone}
                  helperText={touched.alternatePhone && errors.alternatePhone}
                  InputProps={{
                    startAdornment: (
                      <PhoneIcon sx={{ mr: 1, color: "action.active" }} />
                    ),
                  }}
                  placeholder="+234 802 345 6789"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  multiline
                  rows={2}
                  InputProps={{
                    startAdornment: (
                      <HomeIcon sx={{ mr: 1, color: "action.active" }} />
                    ),
                  }}
                />
              </Grid>
            </Grid>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Employment Information Section */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Employment Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Occupation"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <WorkIcon sx={{ mr: 1, color: "action.active" }} />
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Employer"
                  name="employer"
                  value={formData.employer}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Emergency Contact Section */}
          <Box>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Emergency Contact Settings
            </Typography>
            <Alert severity="info" sx={{ mb: 2 }}>
              Emergency contacts will be called first in case of emergencies
            </Alert>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={6}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={formData.isEmergencyContact}
                      onChange={handleChange}
                      name="isEmergencyContact"
                      color="error"
                    />
                  }
                  label={
                    <Box display="flex" alignItems="center" gap={1}>
                      <WarningIcon color="error" />
                      Emergency Contact
                    </Box>
                  }
                />
              </Grid>
              {formData.isEmergencyContact && (
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Priority Level"
                    name="emergencyContactPriority"
                    type="number"
                    value={formData.emergencyContactPriority}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      touched.emergencyContactPriority &&
                      !!errors.emergencyContactPriority
                    }
                    helperText={
                      (touched.emergencyContactPriority &&
                        errors.emergencyContactPriority) ||
                      "1 = Primary, 2 = Secondary, etc."
                    }
                    inputProps={{ min: 1, max: 5 }}
                  />
                </Grid>
              )}
            </Grid>
          </Box>
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <Button onClick={onClose} variant="outlined">
          Cancel
        </Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          {parent ? "Update" : "Add"} Parent
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ParentFormDialog;
