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
  Typography,
  Box,
  Alert,
  IconButton,
  useTheme,
  useMediaQuery,
  Chip,
  Stack,
  Avatar,
} from "@mui/material";
import {
  Close as CloseIcon,
  Class as ClassIcon,
  Person as PersonIcon,
  Info as InfoIcon,
} from "@mui/icons-material";
import { Class, User } from "../../API";

interface ClassData {
  id: string;
  name: string;
  schoolID: string;
  teacherID?: string | null;
  owner?: string | null;
  admins?: (string | null)[] | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  __typename?: "Class";
}

interface ClassFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  classData?: ClassData | null;
  teachers: User[];
}

const ClassFormDialog: React.FC<ClassFormDialogProps> = ({
  open,
  onClose,
  onSubmit,
  classData,
  teachers,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [formData, setFormData] = useState({
    name: "",
    teacherID: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [touched, setTouched] = useState<any>({});

  // Class level options
  const classLevels = ["JSS 1", "JSS 2", "JSS 3", "SSS 1", "SSS 2", "SSS 3"];
  const classSections = ["A", "B", "C", "D"];

  useEffect(() => {
    if (classData) {
      setFormData({
        name: classData.name || "",
        teacherID: classData.teacherID || "",
      });
    } else {
      setFormData({
        name: "",
        teacherID: "",
      });
    }
    setErrors({});
    setTouched({});
  }, [classData]);

  const validateField = (name: string, value: any) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) {
          error = "Class name is required";
        } else if (!/^[A-Z]{3}\s\d[A-Z]?$/i.test(value)) {
          error = "Invalid format. Use format like 'JSS 1A' or 'SSS 2B'";
        }
        break;
    }

    setErrors((prev: any) => ({ ...prev, [name]: error }));
    return !error;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (touched[name]) {
      validateField(name, value);
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
    let isValid = true;
    if (!validateField("name", formData.name)) {
      isValid = false;
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

  // Quick class name builder
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedSection, setSelectedSection] = useState("");

  const handleQuickBuild = () => {
    if (selectedLevel && selectedSection) {
      const className = `${selectedLevel}${selectedSection}`;
      setFormData({ ...formData, name: className });
      validateField("name", className);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      fullScreen={isMobile}
    >
      <DialogTitle>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center" gap={1}>
            <ClassIcon />
            <Typography variant="h6">
              {classData ? "Edit Class" : "Add New Class"}
            </Typography>
          </Box>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent dividers>
        <Box sx={{ mt: 2 }}>
          <Alert severity="info" sx={{ mb: 3 }}>
            <Typography variant="body2">
              Classes are organized by level (JSS 1-3, SSS 1-3) and section (A,
              B, C, etc.)
            </Typography>
          </Alert>

          <Grid container spacing={2}>
            {/* Quick Class Builder */}
            {!classData && (
              <>
                <Grid item xs={12}>
                  <Typography variant="subtitle2" gutterBottom>
                    Quick Class Builder
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <FormControl fullWidth size="small">
                    <InputLabel>Select Level</InputLabel>
                    <Select
                      value={selectedLevel}
                      onChange={(e) => setSelectedLevel(e.target.value)}
                      label="Select Level"
                    >
                      {classLevels.map((level) => (
                        <MenuItem key={level} value={level}>
                          {level}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={4}>
                  <FormControl fullWidth size="small">
                    <InputLabel>Section</InputLabel>
                    <Select
                      value={selectedSection}
                      onChange={(e) => setSelectedSection(e.target.value)}
                      label="Section"
                    >
                      {classSections.map((section) => (
                        <MenuItem key={section} value={section}>
                          {section}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={2}>
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={handleQuickBuild}
                    disabled={!selectedLevel || !selectedSection}
                  >
                    Build
                  </Button>
                </Grid>
              </>
            )}

            {/* Class Name Input */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Class Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && !!errors.name}
                helperText={
                  (touched.name && errors.name) ||
                  "Format: JSS 1A, SSS 2B, etc."
                }
                required
                InputProps={{
                  startAdornment: (
                    <ClassIcon sx={{ mr: 1, color: "action.active" }} />
                  ),
                }}
              />
            </Grid>

            {/* Teacher Selection */}
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Class Teacher</InputLabel>
                <Select
                  name="teacherID"
                  value={formData.teacherID}
                  onChange={handleChange}
                  label="Class Teacher"
                  startAdornment={
                    <PersonIcon
                      sx={{ ml: 1, mr: 0.5, color: "action.active" }}
                    />
                  }
                >
                  <MenuItem value="">
                    <em>Not Assigned</em>
                  </MenuItem>
                  {teachers.map((teacher) => (
                    <MenuItem key={teacher.id} value={teacher.id}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Avatar sx={{ width: 24, height: 24 }}>
                          {teacher.name.charAt(0)}
                        </Avatar>
                        <Box>
                          <Typography variant="body2">
                            {teacher.name}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {teacher.email}
                          </Typography>
                        </Box>
                      </Stack>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* Class Information */}
            <Grid item xs={12}>
              <Alert severity="info" icon={<InfoIcon />}>
                <Typography variant="body2">
                  The class teacher will have access to:
                  <ul style={{ margin: "8px 0 0 0", paddingLeft: "20px" }}>
                    <li>Student records and attendance</li>
                    <li>Grade management for this class</li>
                    <li>Parent communication</li>
                    <li>Class announcements</li>
                  </ul>
                </Typography>
              </Alert>
            </Grid>

            {/* Preview */}
            {formData.name && (
              <Grid item xs={12}>
                <Box sx={{ p: 2, bgcolor: "grey.100", borderRadius: 1 }}>
                  <Typography variant="subtitle2" gutterBottom>
                    Preview
                  </Typography>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Chip
                      label={formData.name}
                      color="primary"
                      icon={<ClassIcon />}
                    />
                    <Chip
                      label={
                        formData.teacherID
                          ? teachers.find((t) => t.id === formData.teacherID)
                              ?.name || "Not Assigned"
                          : "No Teacher Assigned"
                      }
                      color={formData.teacherID ? "default" : "warning"}
                      variant="outlined"
                      icon={<PersonIcon />}
                    />
                  </Stack>
                </Box>
              </Grid>
            )}
          </Grid>
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <Button onClick={onClose} variant="outlined">
          Cancel
        </Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          {classData ? "Update" : "Create"} Class
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ClassFormDialog;
