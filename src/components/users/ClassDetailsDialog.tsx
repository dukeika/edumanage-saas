import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Grid,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  IconButton,
  Card,
  CardContent,
  Stack,
  useTheme,
  useMediaQuery,
  Tab,
  Tabs,
  LinearProgress,
  Paper,
} from "@mui/material";
import {
  Close as CloseIcon,
  Class as ClassIcon,
  Person as PersonIcon,
  School as SchoolIcon,
  Book as BookIcon,
  Assessment as AssessmentIcon,
  Edit as EditIcon,
  Print as PrintIcon,
  Groups as GroupsIcon,
  CheckCircle as CheckCircleIcon,
  TrendingUp as TrendingUpIcon,
  Schedule as ScheduleIcon,
  Email as EmailIcon,
  Male as MaleIcon,
  Female as FemaleIcon,
} from "@mui/icons-material";
import { Class, Student, Subject, User } from "../../API";

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
      id={`class-tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 2 }}>{children}</Box>}
    </div>
  );
}

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

interface ClassDetailsDialogProps {
  open: boolean;
  onClose: () => void;
  classData: ClassData;
  students: Student[];
  subjects: Subject[];
  teacher?: User | null;
}

interface ClassStats {
  totalStudents: number;
  maleStudents: number;
  femaleStudents: number;
  avgAge: number;
  performance: number;
  attendance: number;
}

const ClassDetailsDialog: React.FC<ClassDetailsDialogProps> = ({
  open,
  onClose,
  classData,
  students,
  subjects,
  teacher,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // Calculate statistics
  const stats: ClassStats = {
    totalStudents: students.length,
    maleStudents: students.filter((s) => s.gender === "Male").length,
    femaleStudents: students.filter((s) => s.gender === "Female").length,
    avgAge:
      students.length > 0
        ? Math.round(
            students.reduce((sum, s) => {
              const age =
                new Date().getFullYear() -
                new Date(s.dateOfBirth).getFullYear();
              return sum + age;
            }, 0) / students.length
          )
        : 0,
    performance: Math.floor(Math.random() * 20) + 75, // Mock data
    attendance: Math.floor(Math.random() * 10) + 85, // Mock data
  };

  // Get performance color
  const getPerformanceColor = (value: number) => {
    if (value >= 85) return "success";
    if (value >= 70) return "warning";
    return "error";
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
            <ClassIcon />
            <Typography variant="h6">Class Details</Typography>
          </Box>
          <Box>
            <IconButton size="small" sx={{ mr: 1 }}>
              <EditIcon />
            </IconButton>
            <IconButton size="small" sx={{ mr: 1 }}>
              <PrintIcon />
            </IconButton>
            <IconButton onClick={onClose} size="small">
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
      </DialogTitle>

      <DialogContent dividers>
        <Box sx={{ mt: 2 }}>
          {/* Class Header */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Stack
                direction={isMobile ? "column" : "row"}
                spacing={3}
                alignItems={isMobile ? "center" : "flex-start"}
              >
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    bgcolor: "primary.main",
                    fontSize: "2rem",
                  }}
                >
                  <ClassIcon sx={{ fontSize: 40 }} />
                </Avatar>
                <Box flex={1} textAlign={isMobile ? "center" : "left"}>
                  <Typography variant="h5" gutterBottom>
                    {classData.name}
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={1}
                    justifyContent={isMobile ? "center" : "flex-start"}
                    flexWrap="wrap"
                  >
                    <Chip
                      label={teacher ? teacher.name : "No Teacher Assigned"}
                      color={teacher ? "primary" : "warning"}
                      icon={<PersonIcon />}
                    />
                    <Chip
                      label={`${stats.totalStudents} Students`}
                      icon={<GroupsIcon />}
                    />
                    <Chip
                      label={`${subjects.length} Subjects`}
                      icon={<BookIcon />}
                    />
                  </Stack>
                </Box>
              </Stack>
            </CardContent>
          </Card>

          {/* Statistics Overview */}
          <Grid container spacing={2} sx={{ mb: 3 }}>
            <Grid item xs={6} sm={3}>
              <Paper sx={{ p: 2, textAlign: "center" }}>
                <Stack direction="row" justifyContent="center" spacing={1}>
                  <Avatar
                    sx={{ bgcolor: "primary.light", width: 24, height: 24 }}
                  >
                    <MaleIcon sx={{ fontSize: 16 }} />
                  </Avatar>
                  <Avatar
                    sx={{ bgcolor: "secondary.light", width: 24, height: 24 }}
                  >
                    <FemaleIcon sx={{ fontSize: 16 }} />
                  </Avatar>
                </Stack>
                <Typography variant="h6" sx={{ mt: 1 }}>
                  {stats.maleStudents}/{stats.femaleStudents}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Gender Ratio
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper sx={{ p: 2, textAlign: "center" }}>
                <Avatar
                  sx={{
                    bgcolor: "info.light",
                    mx: "auto",
                    width: 32,
                    height: 32,
                  }}
                >
                  <SchoolIcon sx={{ fontSize: 20 }} />
                </Avatar>
                <Typography variant="h6" sx={{ mt: 1 }}>
                  {stats.avgAge} yrs
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Average Age
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper sx={{ p: 2, textAlign: "center" }}>
                <Box sx={{ position: "relative", display: "inline-flex" }}>
                  <CircularProgressWithLabel
                    value={stats.performance}
                    color={getPerformanceColor(stats.performance)}
                  />
                </Box>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  display="block"
                  sx={{ mt: 1 }}
                >
                  Performance
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper sx={{ p: 2, textAlign: "center" }}>
                <Box sx={{ position: "relative", display: "inline-flex" }}>
                  <CircularProgressWithLabel
                    value={stats.attendance}
                    color={getPerformanceColor(stats.attendance)}
                  />
                </Box>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  display="block"
                  sx={{ mt: 1 }}
                >
                  Attendance
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          {/* Tabs */}
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              variant={isMobile ? "fullWidth" : "standard"}
            >
              <Tab
                label={`Students (${students.length})`}
                icon={<GroupsIcon />}
                iconPosition="start"
              />
              <Tab
                label={`Subjects (${subjects.length})`}
                icon={<BookIcon />}
                iconPosition="start"
              />
              <Tab label="Teacher" icon={<PersonIcon />} iconPosition="start" />
              <Tab
                label="Schedule"
                icon={<ScheduleIcon />}
                iconPosition="start"
              />
            </Tabs>
          </Box>

          {/* Students Tab */}
          <TabPanel value={tabValue} index={0}>
            <List>
              {students.length === 0 ? (
                <Box textAlign="center" py={4}>
                  <Typography color="text.secondary">
                    No students enrolled in this class
                  </Typography>
                </Box>
              ) : (
                students.slice(0, 10).map((student, index) => (
                  <ListItem
                    key={student.id}
                    divider={index < Math.min(students.length - 1, 9)}
                  >
                    <ListItemIcon>
                      <Avatar
                        sx={{
                          bgcolor:
                            student.gender === "Male"
                              ? "primary.light"
                              : "secondary.light",
                        }}
                      >
                        {student.firstName[0]}
                        {student.lastName[0]}
                      </Avatar>
                    </ListItemIcon>
                    <ListItemText
                      primary={`${student.firstName} ${student.lastName}`}
                      secondary={`Student ID: ${student.studentID}`}
                    />
                    <Chip
                      label={student.gender}
                      size="small"
                      color={
                        student.gender === "Male" ? "primary" : "secondary"
                      }
                      variant="outlined"
                    />
                  </ListItem>
                ))
              )}
              {students.length > 10 && (
                <Box textAlign="center" py={2}>
                  <Typography variant="body2" color="text.secondary">
                    And {students.length - 10} more students...
                  </Typography>
                </Box>
              )}
            </List>
          </TabPanel>

          {/* Subjects Tab */}
          <TabPanel value={tabValue} index={1}>
            <List>
              {subjects.length === 0 ? (
                <Box textAlign="center" py={4}>
                  <Typography color="text.secondary">
                    No subjects assigned to this class
                  </Typography>
                </Box>
              ) : (
                subjects.map((subject, index) => (
                  <ListItem
                    key={subject.id}
                    divider={index < subjects.length - 1}
                  >
                    <ListItemIcon>
                      <Avatar sx={{ bgcolor: "primary.light" }}>
                        <BookIcon />
                      </Avatar>
                    </ListItemIcon>
                    <ListItemText
                      primary={subject.name}
                      secondary={`${
                        Math.floor(Math.random() * 5) + 3
                      } periods per week`}
                    />
                  </ListItem>
                ))
              )}
            </List>
          </TabPanel>

          {/* Teacher Tab */}
          <TabPanel value={tabValue} index={2}>
            {teacher ? (
              <Card>
                <CardContent>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar
                      sx={{ width: 60, height: 60, bgcolor: "primary.main" }}
                    >
                      {teacher.name.charAt(0)}
                    </Avatar>
                    <Box flex={1}>
                      <Typography variant="h6">{teacher.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {teacher.email}
                      </Typography>
                      <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
                        <Chip
                          label="Class Teacher"
                          size="small"
                          color="primary"
                        />
                        <Chip
                          label={`Since ${new Date(
                            classData.updatedAt || ""
                          ).getFullYear()}`}
                          size="small"
                        />
                      </Stack>
                    </Box>
                    <IconButton color="primary">
                      <EmailIcon />
                    </IconButton>
                  </Stack>

                  <Divider sx={{ my: 2 }} />

                  <Typography variant="subtitle2" gutterBottom>
                    Teacher Responsibilities
                  </Typography>
                  <List dense>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon color="success" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Manage class attendance" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon color="success" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Monitor student performance" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon color="success" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Communicate with parents" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon color="success" fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary="Coordinate with subject teachers" />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            ) : (
              <Box textAlign="center" py={4}>
                <Typography color="text.secondary" gutterBottom>
                  No teacher assigned to this class
                </Typography>
                <Button variant="contained" sx={{ mt: 2 }}>
                  Assign Teacher
                </Button>
              </Box>
            )}
          </TabPanel>

          {/* Schedule Tab */}
          <TabPanel value={tabValue} index={3}>
            <Box textAlign="center" py={4}>
              <ScheduleIcon
                sx={{ fontSize: 60, color: "text.secondary", mb: 2 }}
              />
              <Typography color="text.secondary" gutterBottom>
                Class schedule feature coming soon
              </Typography>
              <Typography variant="body2" color="text.secondary">
                View and manage daily timetables, subject periods, and special
                activities
              </Typography>
            </Box>
          </TabPanel>
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <Button onClick={onClose} variant="outlined">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

// Helper component for circular progress
function CircularProgressWithLabel(props: { value: number; color: any }) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <Box
        sx={{
          position: "absolute",
          width: 48,
          height: 48,
          borderRadius: "50%",
          bgcolor: `${props.color}.light`,
          opacity: 0.3,
        }}
      />
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 48,
          height: 48,
        }}
      >
        <Typography
          variant="body2"
          component="div"
          color="text.secondary"
          fontWeight="bold"
        >
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

export default ClassDetailsDialog;
