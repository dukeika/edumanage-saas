import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  Typography,
  Box,
  Avatar,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Paper,
  Stack,
  IconButton,
  Tab,
  Tabs,
} from "@mui/material";
import {
  Close as CloseIcon,
  Person,
  Email,
  Phone,
  Home,
  School,
  CalendarToday,
  LocalHospital,
  FamilyRestroom,
  Badge,
  Print as PrintIcon,
  Edit as EditIcon,
  Male as MaleIcon,
  Female as FemaleIcon,
  CheckCircle,
  Warning,
  Bloodtype,
  MedicalServices,
  Assignment,
  Grade,
  AttachMoney,
} from "@mui/icons-material";

interface StudentDetailsDialogProps {
  open: boolean;
  onClose: () => void;
  student: any;
  className: string;
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
      id={`student-detail-tabpanel-${index}`}
      aria-labelledby={`student-detail-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 2 }}>{children}</Box>}
    </div>
  );
}

const StudentDetailsDialog: React.FC<StudentDetailsDialogProps> = ({
  open,
  onClose,
  student,
  className,
}) => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handlePrint = () => {
    window.print();
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "success";
      case "Inactive":
        return "default";
      case "Suspended":
        return "warning";
      case "Graduated":
        return "info";
      default:
        return "default";
    }
  };

  const getFeeStatusColor = (status: string) => {
    switch (status) {
      case "Paid":
        return "success";
      case "Partial":
        return "warning";
      case "Unpaid":
        return "error";
      default:
        return "default";
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Student Details</Typography>
          <Box>
            <IconButton onClick={handlePrint} size="small">
              <PrintIcon />
            </IconButton>
            <IconButton onClick={onClose} size="small">
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
      </DialogTitle>
      <DialogContent dividers>
        {/* Student Header */}
        <Paper elevation={0} sx={{ p: 3, bgcolor: "grey.50", mb: 3 }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item>
              <Avatar
                sx={{
                  width: 100,
                  height: 100,
                  bgcolor:
                    student.gender === "Male"
                      ? "primary.main"
                      : "secondary.main",
                  fontSize: "2rem",
                }}
              >
                {student.name
                  .split(" ")
                  .map((n: string) => n[0])
                  .join("")}
                {student.gender === "Male" ? (
                  <MaleIcon
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      fontSize: 20,
                    }}
                  />
                ) : (
                  <FemaleIcon
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      fontSize: 20,
                    }}
                  />
                )}
              </Avatar>
            </Grid>
            <Grid item xs>
              <Typography variant="h5" gutterBottom>
                {student.name}
              </Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap">
                <Chip
                  icon={<Badge />}
                  label={student.admissionNumber}
                  size="small"
                  variant="outlined"
                />
                <Chip
                  icon={<School />}
                  label={className}
                  size="small"
                  color="primary"
                />
                <Chip
                  label={student.status}
                  size="small"
                  color={getStatusColor(student.status) as any}
                  icon={
                    student.status === "Active" ? <CheckCircle /> : <Warning />
                  }
                />
                <Chip
                  icon={<AttachMoney />}
                  label={`Fee: ${student.feeStatus}`}
                  size="small"
                  color={getFeeStatusColor(student.feeStatus) as any}
                />
              </Stack>
            </Grid>
          </Grid>
        </Paper>

        {/* Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={tabValue} onChange={handleTabChange}>
            <Tab label="Personal Info" />
            <Tab label="Parent/Guardian" />
            <Tab label="Medical" />
            <Tab label="Academic" />
            <Tab label="Attendance" />
          </Tabs>
        </Box>

        {/* Personal Information Tab */}
        <TabPanel value={tabValue} index={0}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <CalendarToday color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Date of Birth"
                    secondary={student.dateOfBirth || "Not provided"}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Person color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Age"
                    secondary={`${student.age} years`}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Bloodtype color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Blood Group"
                    secondary={student.bloodGroup || "Not provided"}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CalendarToday color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Admission Date"
                    secondary={new Date(student.createdAt).toLocaleDateString()}
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <Email color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Email"
                    secondary={student.email || "Not provided"}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Phone color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Phone"
                    secondary={student.phone || "Not provided"}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Home color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Address"
                    secondary={student.address || "Not provided"}
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </TabPanel>

        {/* Parent/Guardian Tab */}
        <TabPanel value={tabValue} index={1}>
          <Paper variant="outlined" sx={{ p: 2 }}>
            <Typography variant="subtitle1" gutterBottom color="primary">
              Primary Contact
            </Typography>
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <FamilyRestroom color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Parent/Guardian Name"
                  secondary={student.parentName || "Not provided"}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Email color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Parent Email"
                  secondary={student.parentEmail || "Not provided"}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Phone color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Parent Phone"
                  secondary={student.parentPhone || "Not provided"}
                />
              </ListItem>
            </List>
          </Paper>
        </TabPanel>

        {/* Other tabs content simplified for brevity */}
        <TabPanel value={tabValue} index={2}>
          <Typography>Medical information will be displayed here</Typography>
        </TabPanel>

        <TabPanel value={tabValue} index={3}>
          <Typography>Academic information will be displayed here</Typography>
        </TabPanel>

        <TabPanel value={tabValue} index={4}>
          <Typography>Attendance information will be displayed here</Typography>
        </TabPanel>
      </DialogContent>
      <DialogActions sx={{ px: 3, py: 2 }}>
        <Button onClick={onClose} variant="outlined">
          Close
        </Button>
        <Button variant="contained" startIcon={<EditIcon />}>
          Edit Student
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default StudentDetailsDialog;
