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
  Box,
  FormControl,
  InputLabel,
  Select,
  InputAdornment,
  Typography,
  IconButton,
  Alert,
  Tabs,
  Tab,
  Divider,
} from "@mui/material";
import {
  Close as CloseIcon,
  Person,
  Email,
  Phone,
  School,
  Home,
  CalendarToday,
  LocalHospital,
  FamilyRestroom,
  Badge,
} from "@mui/icons-material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Class } from "../../API";

interface StudentFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  student?: any;
  classes?: Class[];
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`student-tabpanel-${index}`}
      aria-labelledby={`student-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

const BLOOD_GROUPS = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const STATES = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "FCT",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
];

const StudentFormDialog: React.FC<StudentFormDialogProps> = ({
  open,
  onClose,
  onSubmit,
  student,
  classes = [],
}) => {
  const [tabValue, setTabValue] = useState(0);
  const [formData, setFormData] = useState({
    // Basic Information
    name: "",
    admissionNumber: "",
    classID: "",
    gender: "",
    dateOfBirth: null as Date | null,
    bloodGroup: "",
    status: "Active",

    // Contact Information
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",

    // Parent/Guardian Information
    parentName: "",
    parentEmail: "",
    parentPhone: "",
    parentOccupation: "",
    parentAddress: "",
    relationship: "Father",

    // Medical Information
    medicalConditions: "",
    allergies: "",
    medications: "",
    emergencyContact: "",
    emergencyPhone: "",
    doctorName: "",
    doctorPhone: "",

    // Academic Information
    previousSchool: "",
    previousClass: "",
    transferReason: "",
    academicStrengths: "",
    academicWeaknesses: "",
    specialNeeds: "",
  });

  const [errors, setErrors] = useState<any>({});

  useEffect(() => {
    if (student) {
      setFormData({
        name: student.name || "",
        admissionNumber: student.admissionNumber || "",
        classID: student.classID || "",
        gender: student.gender || "",
        dateOfBirth: student.dateOfBirth ? new Date(student.dateOfBirth) : null,
        bloodGroup: student.bloodGroup || "",
        status: student.status || "Active",
        email: student.email || "",
        phone: student.phone || "",
        address: student.address || "",
        city: student.city || "",
        state: student.state || "",
        parentName: student.parentName || "",
        parentEmail: student.parentEmail || "",
        parentPhone: student.parentPhone || "",
        parentOccupation: student.parentOccupation || "",
        parentAddress: student.parentAddress || "",
        relationship: student.relationship || "Father",
        medicalConditions: student.medicalConditions || "",
        allergies: student.allergies || "",
        medications: student.medications || "",
        emergencyContact: student.emergencyContact || "",
        emergencyPhone: student.emergencyPhone || "",
        doctorName: student.doctorName || "",
        doctorPhone: student.doctorPhone || "",
        previousSchool: student.previousSchool || "",
        previousClass: student.previousClass || "",
        transferReason: student.transferReason || "",
        academicStrengths: student.academicStrengths || "",
        academicWeaknesses: student.academicWeaknesses || "",
        specialNeeds: student.specialNeeds || "",
      });
    } else {
      // Generate admission number for new students
      const year = new Date().getFullYear();
      const randomNum = Math.floor(Math.random() * 1000);
      setFormData((prev) => ({
        ...prev,
        admissionNumber: `STU/${year}/${String(randomNum).padStart(3, "0")}`,
      }));
    }
    setErrors({});
  }, [student]);

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

  const handleDateChange = (date: Date | null) => {
    setFormData((prev) => ({
      ...prev,
      dateOfBirth: date,
    }));
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const validate = () => {
    const newErrors: any = {};

    // Basic Information validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.classID) {
      newErrors.classID = "Class is required";
    }
    if (!formData.gender) {
      newErrors.gender = "Gender is required";
    }
    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = "Date of birth is required";
    }

    // Parent Information validation
    if (!formData.parentName.trim()) {
      newErrors.parentName = "Parent/Guardian name is required";
    }
    if (!formData.parentPhone.trim()) {
      newErrors.parentPhone = "Parent/Guardian phone is required";
    }
    if (formData.parentEmail && !/\S+@\S+\.\S+/.test(formData.parentEmail)) {
      newErrors.parentEmail = "Invalid email format";
    }

    // Contact validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      // Calculate age from date of birth
      const age = formData.dateOfBirth
        ? new Date().getFullYear() - formData.dateOfBirth.getFullYear()
        : 0;

      onSubmit({
        ...formData,
        age,
        dateOfBirth: formData.dateOfBirth?.toISOString().split("T")[0],
      });
    } else {
      // Switch to the first tab if there are errors
      setTabValue(0);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">
            {student ? "Edit Student" : "Add New Student"}
          </Typography>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent dividers>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            aria-label="student form tabs"
          >
            <Tab label="Basic Info" />
            <Tab label="Parent/Guardian" />
            <Tab label="Medical" />
            <Tab label="Academic" />
          </Tabs>
        </Box>

        {/* Basic Information Tab */}
        <TabPanel value={tabValue} index={0}>
          <Grid container spacing={3}>
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
                label="Admission Number"
                name="admissionNumber"
                value={formData.admissionNumber}
                onChange={handleChange}
                disabled={!!student}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Badge />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth error={!!errors.classID}>
                <InputLabel>Class</InputLabel>
                <Select
                  name="classID"
                  value={formData.classID}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      classID: e.target.value,
                    }))
                  }
                  label="Class"
                  required
                >
                  {classes.map((cls) => (
                    <MenuItem key={cls.id} value={cls.id}>
                      {cls.name}
                    </MenuItem>
                  ))}
                </Select>
                {errors.classID && (
                  <Typography variant="caption" color="error">
                    {errors.classID}
                  </Typography>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth error={!!errors.gender}>
                <InputLabel>Gender</InputLabel>
                <Select
                  name="gender"
                  value={formData.gender}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, gender: e.target.value }))
                  }
                  label="Gender"
                  required
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                </Select>
                {errors.gender && (
                  <Typography variant="caption" color="error">
                    {errors.gender}
                  </Typography>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Date of Birth"
                  value={formData.dateOfBirth}
                  onChange={handleDateChange}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      error: !!errors.dateOfBirth,
                      helperText: errors.dateOfBirth,
                      required: true,
                      InputProps: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <CalendarToday />
                          </InputAdornment>
                        ),
                      },
                    },
                  }}
                />
              </LocalizationProvider>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Blood Group</InputLabel>
                <Select
                  name="bloodGroup"
                  value={formData.bloodGroup}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      bloodGroup: e.target.value,
                    }))
                  }
                  label="Blood Group"
                >
                  {BLOOD_GROUPS.map((group) => (
                    <MenuItem key={group} value={group}>
                      {group}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Divider sx={{ my: 1 }}>Contact Information</Divider>
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
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Phone />
                    </InputAdornment>
                  ),
                }}
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
                    <InputAdornment position="start">
                      <Home />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>State</InputLabel>
                <Select
                  name="state"
                  value={formData.state}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, state: e.target.value }))
                  }
                  label="State"
                >
                  {STATES.map((state) => (
                    <MenuItem key={state} value={state}>
                      {state}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select
                  name="status"
                  value={formData.status}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, status: e.target.value }))
                  }
                  label="Status"
                >
                  <MenuItem value="Active">Active</MenuItem>
                  <MenuItem value="Inactive">Inactive</MenuItem>
                  <MenuItem value="Suspended">Suspended</MenuItem>
                  <MenuItem value="Graduated">Graduated</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </TabPanel>

        {/* Parent/Guardian Tab */}
        <TabPanel value={tabValue} index={1}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Alert severity="info">
                Parent/Guardian information is crucial for emergency contacts
                and academic discussions.
              </Alert>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Parent/Guardian Name"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                error={!!errors.parentName}
                helperText={errors.parentName}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FamilyRestroom />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Relationship</InputLabel>
                <Select
                  name="relationship"
                  value={formData.relationship}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      relationship: e.target.value,
                    }))
                  }
                  label="Relationship"
                >
                  <MenuItem value="Father">Father</MenuItem>
                  <MenuItem value="Mother">Mother</MenuItem>
                  <MenuItem value="Guardian">Guardian</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Parent/Guardian Email"
                name="parentEmail"
                type="email"
                value={formData.parentEmail}
                onChange={handleChange}
                error={!!errors.parentEmail}
                helperText={errors.parentEmail}
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
                label="Parent/Guardian Phone"
                name="parentPhone"
                value={formData.parentPhone}
                onChange={handleChange}
                error={!!errors.parentPhone}
                helperText={errors.parentPhone}
                required
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
                label="Occupation"
                name="parentOccupation"
                value={formData.parentOccupation}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Parent/Guardian Address"
                name="parentAddress"
                value={formData.parentAddress}
                onChange={handleChange}
                multiline
                rows={2}
                helperText="If different from student's address"
              />
            </Grid>
          </Grid>
        </TabPanel>

        {/* Medical Information Tab */}
        <TabPanel value={tabValue} index={2}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Alert severity="warning">
                Medical information helps us provide better care for your child
                in case of emergencies.
              </Alert>
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Medical Conditions"
                name="medicalConditions"
                value={formData.medicalConditions}
                onChange={handleChange}
                multiline
                rows={2}
                placeholder="e.g., Asthma, Diabetes, Epilepsy"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocalHospital />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Allergies"
                name="allergies"
                value={formData.allergies}
                onChange={handleChange}
                multiline
                rows={2}
                placeholder="e.g., Peanuts, Dust, Pollen"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Current Medications"
                name="medications"
                value={formData.medications}
                onChange={handleChange}
                multiline
                rows={2}
                placeholder="List any regular medications"
              />
            </Grid>

            <Grid item xs={12}>
              <Divider sx={{ my: 1 }}>Emergency Contact</Divider>
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

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Family Doctor Name"
                name="doctorName"
                value={formData.doctorName}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Doctor's Phone"
                name="doctorPhone"
                value={formData.doctorPhone}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </TabPanel>

        {/* Academic Information Tab */}
        <TabPanel value={tabValue} index={3}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Alert severity="info">
                This information helps us understand the student's academic
                background and needs.
              </Alert>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Previous School"
                name="previousSchool"
                value={formData.previousSchool}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <School />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Previous Class"
                name="previousClass"
                value={formData.previousClass}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Reason for Transfer"
                name="transferReason"
                value={formData.transferReason}
                onChange={handleChange}
                multiline
                rows={2}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Academic Strengths"
                name="academicStrengths"
                value={formData.academicStrengths}
                onChange={handleChange}
                multiline
                rows={3}
                placeholder="e.g., Mathematics, Science, Sports"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Areas Needing Improvement"
                name="academicWeaknesses"
                value={formData.academicWeaknesses}
                onChange={handleChange}
                multiline
                rows={3}
                placeholder="e.g., Reading comprehension, Handwriting"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Special Needs or Considerations"
                name="specialNeeds"
                value={formData.specialNeeds}
                onChange={handleChange}
                multiline
                rows={3}
                placeholder="Any learning disabilities, special requirements, or considerations"
              />
            </Grid>
          </Grid>
        </TabPanel>
      </DialogContent>
      <DialogActions sx={{ px: 3, py: 2 }}>
        <Button onClick={onClose} variant="outlined">
          Cancel
        </Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          {student ? "Update Student" : "Add Student"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default StudentFormDialog;
