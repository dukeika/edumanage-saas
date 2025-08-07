import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Chip,
  Avatar,
  Stack,
  Paper,
  Grid,
  Card,
  CardContent,
  IconButton,
  Menu,
  MenuItem,
  Badge,
  Tooltip,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Fab,
  LinearProgress,
  Divider,
} from "@mui/material";
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  Upload as UploadIcon,
  Download as DownloadIcon,
  School as SchoolIcon,
  People as PeopleIcon,
  CheckCircle as CheckCircleIcon,
  Warning as WarningIcon,
  Refresh as RefreshIcon,
  Assignment as AssignmentIcon,
  Person as PersonIcon,
  Schedule as ScheduleIcon,
  Book as BookIcon,
  Menu as MenuIcon,
  Class as ClassIcon,
  Groups as GroupsIcon,
  Assessment as AssessmentIcon,
  Insights as InsightsIcon,
  MoreVert as MoreVertIcon,
} from "@mui/icons-material";
import { generateClient } from "aws-amplify/api";
import FilterIcon from "@mui/icons-material/FilterList";
import {
  listClasses,
  listStudents,
  listUsers,
  listSubjects,
} from "../../graphql/queries";
import { createClass, updateClass, deleteClass } from "../../graphql/mutations";
import { DataTable, Column } from "../../components/common/DataTable";
import { useNotification } from "../../components/NotificationProvider";
import { ConfirmDialog } from "../../components/common/ConfirmDialog";
import ClassFormDialog from "../../components/users/ClassFormDialogue";
import ClassDetailsDialog from "../../components/users/ClassDetailsDialog";
import AssignTeacherDialog from "../../components/users/AssignTeacherDialog";
import { Class, Student, User, Subject } from "../../API";
import { useCurrentUser } from "../../hooks/useCurrentUser";

const client = generateClient();

interface ClassData {
  // Base Class properties
  id: string;
  name: string;
  schoolID: string;
  teacherID?: string | null;
  owner?: string | null;
  admins?: (string | null)[] | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  __typename?: "Class";

  // Additional computed fields
  studentCount?: number;
  teacherName?: string;
  subjectCount?: number;
  performance?: number;
  attendance?: number;
}

const ClassManagement: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const { user } = useCurrentUser();

  const [classes, setClasses] = useState<ClassData[]>([]);
  const [students, setStudents] = useState<Student[]>([]);
  const [teachers, setTeachers] = useState<User[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedClasses, setSelectedClasses] = useState<ClassData[]>([]);
  const [filterLevel, setFilterLevel] = useState<string>("all");

  // Dialog states
  const [formDialogOpen, setFormDialogOpen] = useState(false);
  const [detailsDialogOpen, setDetailsDialogOpen] = useState(false);
  const [assignTeacherDialogOpen, setAssignTeacherDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState<ClassData | null>(null);
  const [classToDelete, setClassToDelete] = useState<ClassData | null>(null);

  // Mobile menu states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [filterAnchor, setFilterAnchor] = useState<null | HTMLElement>(null);

  const { success, error: showError, warning, info } = useNotification();

  // Fetch classes with enriched data
  const fetchClasses = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await client.graphql({
        query: listClasses,
        variables: user?.schoolId
          ? { filter: { schoolID: { eq: user.schoolId } } }
          : {},
      });

      if ("data" in response && response.data) {
        const classList = response.data.listClasses.items as Class[];

        // Enrich class data with additional fields
        const enrichedClasses: ClassData[] = classList.map((cls) => ({
          id: cls.id,
          name: cls.name,
          schoolID: cls.schoolID,
          teacherID: cls.teacherID,
          owner: cls.owner,
          admins: cls.admins,
          createdAt: cls.createdAt,
          updatedAt: cls.updatedAt,
          __typename: cls.__typename,
          studentCount: 0, // Will be calculated from students
          teacherName: "Not Assigned",
          subjectCount: 0, // Will be calculated from subjects
          performance: Math.floor(Math.random() * 20) + 75, // Mock performance
          attendance: Math.floor(Math.random() * 10) + 85, // Mock attendance
        }));

        if (enrichedClasses.length === 0) {
          setClasses(getMockClasses());
        } else {
          setClasses(enrichedClasses);
        }
      } else {
        setClasses(getMockClasses());
      }
    } catch (err: any) {
      console.error("Error fetching classes:", err);
      setError("Failed to load classes");
      setClasses(getMockClasses());
    } finally {
      setLoading(false);
    }
  };

  // Fetch students to count per class
  const fetchStudents = async () => {
    try {
      const response = await client.graphql({
        query: listStudents,
        variables: user?.schoolId
          ? { filter: { schoolID: { eq: user.schoolId } } }
          : {},
      });

      if ("data" in response && response.data) {
        const studentList = response.data.listStudents.items as Student[];
        setStudents(studentList);

        // Update class student counts
        const studentCounts = studentList.reduce((acc, student) => {
          acc[student.classID] = (acc[student.classID] || 0) + 1;
          return acc;
        }, {} as Record<string, number>);

        setClasses((prevClasses) =>
          prevClasses.map((cls) => ({
            ...cls,
            studentCount: studentCounts[cls.id] || 0,
          }))
        );
      }
    } catch (err) {
      console.error("Error fetching students:", err);
    }
  };

  // Fetch teachers
  const fetchTeachers = async () => {
    try {
      const response = await client.graphql({
        query: listUsers,
        variables: {
          filter: {
            schoolID: { eq: user?.schoolId || "school1" },
            role: { eq: "Teacher" },
          },
        },
      });

      if ("data" in response && response.data) {
        const teacherList = response.data.listUsers.items as User[];
        setTeachers(teacherList);

        // Update class teacher names
        const teacherMap = teacherList.reduce((acc, teacher) => {
          acc[teacher.id] = teacher.name;
          return acc;
        }, {} as Record<string, string>);

        setClasses((prevClasses) =>
          prevClasses.map((cls) => ({
            ...cls,
            teacherName: cls.teacherID
              ? teacherMap[cls.teacherID] || "Not Assigned"
              : "Not Assigned",
          }))
        );
      }
    } catch (err) {
      console.error("Error fetching teachers:", err);
    }
  };

  // Fetch subjects
  const fetchSubjects = async () => {
    try {
      const response = await client.graphql({
        query: listSubjects,
      });

      if ("data" in response && response.data) {
        const subjectList = response.data.listSubjects.items as Subject[];
        setSubjects(subjectList);

        // Update class subject counts
        const subjectCounts = subjectList.reduce((acc, subject) => {
          acc[subject.classID] = (acc[subject.classID] || 0) + 1;
          return acc;
        }, {} as Record<string, number>);

        setClasses((prevClasses) =>
          prevClasses.map((cls) => ({
            ...cls,
            subjectCount: subjectCounts[cls.id] || 0,
          }))
        );
      }
    } catch (err) {
      console.error("Error fetching subjects:", err);
    }
  };

  useEffect(() => {
    fetchClasses();
    fetchStudents();
    fetchTeachers();
    fetchSubjects();
  }, [user?.schoolId]);

  // Mock data
  const getMockClasses = (): ClassData[] => [
    {
      id: "1",
      name: "JSS 1A",
      schoolID: "school1",
      teacherID: "teacher1",
      owner: null,
      admins: null,
      createdAt: "2023-09-01T00:00:00Z",
      updatedAt: "2023-09-01T00:00:00Z",
      __typename: "Class",
      studentCount: 32,
      teacherName: "Mr. John Doe",
      subjectCount: 8,
      performance: 85,
      attendance: 92,
    },
    {
      id: "2",
      name: "JSS 1B",
      schoolID: "school1",
      teacherID: "teacher2",
      owner: null,
      admins: null,
      createdAt: "2023-09-01T00:00:00Z",
      updatedAt: "2023-09-01T00:00:00Z",
      __typename: "Class",
      studentCount: 30,
      teacherName: "Mrs. Jane Smith",
      subjectCount: 8,
      performance: 88,
      attendance: 94,
    },
    {
      id: "3",
      name: "JSS 2A",
      schoolID: "school1",
      teacherID: null,
      owner: null,
      admins: null,
      createdAt: "2023-09-01T00:00:00Z",
      updatedAt: "2023-09-01T00:00:00Z",
      __typename: "Class",
      studentCount: 28,
      teacherName: "Not Assigned",
      subjectCount: 9,
      performance: 82,
      attendance: 90,
    },
    {
      id: "4",
      name: "SSS 1A",
      schoolID: "school1",
      teacherID: "teacher3",
      owner: null,
      admins: null,
      createdAt: "2023-09-01T00:00:00Z",
      updatedAt: "2023-09-01T00:00:00Z",
      __typename: "Class",
      studentCount: 25,
      teacherName: "Mr. Ahmed Hassan",
      subjectCount: 12,
      performance: 90,
      attendance: 95,
    },
  ];

  // Extract class level for filtering
  const getClassLevel = (className: string): string => {
    if (className.includes("JSS 1")) return "JSS 1";
    if (className.includes("JSS 2")) return "JSS 2";
    if (className.includes("JSS 3")) return "JSS 3";
    if (className.includes("SSS 1")) return "SSS 1";
    if (className.includes("SSS 2")) return "SSS 2";
    if (className.includes("SSS 3")) return "SSS 3";
    return "Other";
  };

  const filteredClasses = classes.filter((cls) => {
    if (filterLevel === "all") return true;
    return getClassLevel(cls.name) === filterLevel;
  });

  // Get performance color
  const getPerformanceColor = (performance: number) => {
    if (performance >= 85) return "success";
    if (performance >= 70) return "warning";
    return "error";
  };

  // Mobile-optimized columns
  const columns: Column<ClassData>[] = isMobile
    ? [
        {
          id: "name",
          label: "Class",
          format: (value, row) => (
            <Box>
              <Stack direction="row" spacing={1} alignItems="center">
                <Avatar
                  sx={{
                    width: 32,
                    height: 32,
                    bgcolor: "primary.main",
                  }}
                >
                  <ClassIcon fontSize="small" />
                </Avatar>
                <Box>
                  <Typography variant="body2" fontWeight={500}>
                    {value}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    display="block"
                  >
                    {row.studentCount} students
                  </Typography>
                  <Stack direction="row" spacing={0.5} mt={0.5}>
                    <Chip
                      label={row.teacherName}
                      size="small"
                      color={
                        row.teacherName === "Not Assigned"
                          ? "warning"
                          : "default"
                      }
                    />
                    <Chip
                      label={`${row.performance}%`}
                      size="small"
                      color={getPerformanceColor(row.performance || 0)}
                    />
                  </Stack>
                </Box>
              </Stack>
            </Box>
          ),
        },
      ]
    : [
        // Desktop columns
        {
          id: "name",
          label: "Class Name",
          format: (value, row) => (
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar
                sx={{
                  width: 40,
                  height: 40,
                  bgcolor: "primary.main",
                }}
              >
                <ClassIcon />
              </Avatar>
              <Box>
                <Typography variant="body2" fontWeight={500}>
                  {value}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {getClassLevel(value)}
                </Typography>
              </Box>
            </Stack>
          ),
        },
        {
          id: "teacherName",
          label: "Class Teacher",
          format: (value) => (
            <Box display="flex" alignItems="center" gap={1}>
              <PersonIcon fontSize="small" color="action" />
              <Chip
                label={value}
                size="small"
                color={value === "Not Assigned" ? "warning" : "default"}
                variant={value === "Not Assigned" ? "outlined" : "filled"}
              />
            </Box>
          ),
        },
        {
          id: "studentCount",
          label: "Students",
          format: (value) => (
            <Stack direction="row" spacing={1} alignItems="center">
              <GroupsIcon fontSize="small" color="action" />
              <Typography variant="body2">{value}</Typography>
            </Stack>
          ),
          numeric: true,
        },
        {
          id: "subjectCount",
          label: "Subjects",
          format: (value) => (
            <Stack direction="row" spacing={1} alignItems="center">
              <BookIcon fontSize="small" color="action" />
              <Typography variant="body2">{value}</Typography>
            </Stack>
          ),
          numeric: true,
        },
        {
          id: "performance",
          label: "Performance",
          format: (value) => (
            <Box>
              <Box display="flex" alignItems="center" gap={1}>
                <LinearProgress
                  variant="determinate"
                  value={value}
                  sx={{
                    width: 60,
                    height: 6,
                    borderRadius: 3,
                    bgcolor: "grey.300",
                    "& .MuiLinearProgress-bar": {
                      bgcolor:
                        value >= 85
                          ? "success.main"
                          : value >= 70
                          ? "warning.main"
                          : "error.main",
                    },
                  }}
                />
                <Typography variant="body2" fontWeight={500}>
                  {value}%
                </Typography>
              </Box>
            </Box>
          ),
          numeric: true,
        },
        {
          id: "attendance",
          label: "Attendance",
          format: (value) => (
            <Chip
              label={`${value}%`}
              size="small"
              color={
                value >= 90 ? "success" : value >= 80 ? "warning" : "error"
              }
              icon={<CheckCircleIcon />}
            />
          ),
          numeric: true,
        },
        {
          id: "createdAt",
          label: "Created",
          format: (value) =>
            new Date(value).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            }),
        },
      ];

  // Handlers
  const handleAdd = () => {
    setSelectedClass(null);
    setFormDialogOpen(true);
  };

  const handleView = (cls: ClassData) => {
    setSelectedClass(cls);
    setDetailsDialogOpen(true);
  };

  const handleEdit = (cls: ClassData) => {
    setSelectedClass(cls);
    setFormDialogOpen(true);
  };

  const handleDelete = (cls: ClassData) => {
    setClassToDelete(cls);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (!classToDelete) return;

    try {
      await client.graphql({
        query: deleteClass,
        variables: { input: { id: classToDelete.id } },
      });

      setClasses(classes.filter((c) => c.id !== classToDelete.id));
      showError(`${classToDelete.name} has been deleted`);
      setDeleteDialogOpen(false);
      setClassToDelete(null);
    } catch (err) {
      showError("Failed to delete class");
    }
  };

  const handleAssignTeacher = (cls: ClassData) => {
    setSelectedClass(cls);
    setAssignTeacherDialogOpen(true);
  };

  const handleViewSchedule = (cls: ClassData) => {
    info(`Opening schedule for ${cls.name}`);
  };

  const handleViewPerformance = (cls: ClassData) => {
    info(`Opening performance report for ${cls.name}`);
  };

  const handleFormSubmit = async (data: any) => {
    try {
      if (selectedClass) {
        const updateData = {
          id: selectedClass.id,
          name: data.name,
          teacherID: data.teacherID,
        };

        await client.graphql({
          query: updateClass,
          variables: { input: updateData },
        });

        const updatedClass = {
          ...selectedClass,
          ...data,
          teacherName: data.teacherID
            ? teachers.find((t) => t.id === data.teacherID)?.name ||
              "Not Assigned"
            : "Not Assigned",
        };
        setClasses(
          classes.map((c) => (c.id === selectedClass.id ? updatedClass : c))
        );
        success("Class updated successfully");
      } else {
        const newClassData = {
          name: data.name,
          schoolID: user?.schoolId || "school1",
          teacherID: data.teacherID,
        };

        const response = await client.graphql({
          query: createClass,
          variables: { input: newClassData },
        });

        if ("data" in response && response.data) {
          const createdClass = response.data.createClass;
          const newClass: ClassData = {
            id: createdClass.id,
            name: createdClass.name,
            schoolID: createdClass.schoolID,
            teacherID: createdClass.teacherID,
            owner: createdClass.owner,
            admins: createdClass.admins,
            createdAt: createdClass.createdAt,
            updatedAt: createdClass.updatedAt,
            __typename: createdClass.__typename,
            studentCount: 0,
            teacherName: data.teacherID
              ? teachers.find((t) => t.id === data.teacherID)?.name ||
                "Not Assigned"
              : "Not Assigned",
            subjectCount: 0,
            performance: 0,
            attendance: 0,
          };
          setClasses([...classes, newClass]);
          success("Class created successfully");
        }
      }
      setFormDialogOpen(false);
    } catch (err) {
      showError("Failed to save class");
    }
  };

  const handleAssignTeacherSubmit = async (teacherId: string) => {
    if (!selectedClass) return;

    try {
      await client.graphql({
        query: updateClass,
        variables: {
          input: {
            id: selectedClass.id,
            teacherID: teacherId,
          },
        },
      });

      const teacherName =
        teachers.find((t) => t.id === teacherId)?.name || "Not Assigned";
      setClasses(
        classes.map((c) =>
          c.id === selectedClass.id
            ? { ...c, teacherID: teacherId, teacherName }
            : c
        )
      );
      success(`Teacher assigned to ${selectedClass.name}`);
      setAssignTeacherDialogOpen(false);
    } catch (err) {
      showError("Failed to assign teacher");
    }
  };

  // Statistics
  const stats = {
    total: classes.length,
    withTeacher: classes.filter((c) => c.teacherName !== "Not Assigned").length,
    totalStudents: classes.reduce((sum, c) => sum + (c.studentCount || 0), 0),
    avgPerformance: Math.round(
      classes.reduce((sum, c) => sum + (c.performance || 0), 0) / classes.length
    ),
  };

  // Mobile Action Menu
  const MobileActionMenu = () => (
    <Drawer
      anchor="bottom"
      open={mobileMenuOpen}
      onClose={() => setMobileMenuOpen(false)}
    >
      <List sx={{ pt: 2, pb: 2 }}>
        <ListItem
          button
          onClick={() => {
            handleAdd();
            setMobileMenuOpen(false);
          }}
        >
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary="Add Class" />
        </ListItem>
        <ListItem
          button
          onClick={(e) => {
            setFilterAnchor(e.currentTarget);
            setMobileMenuOpen(false);
          }}
        >
          <ListItemIcon>
            <FilterIcon />
          </ListItemIcon>
          <ListItemText primary="Filter Classes" />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            fetchClasses();
            setMobileMenuOpen(false);
          }}
        >
          <ListItemIcon>
            <RefreshIcon />
          </ListItemIcon>
          <ListItemText primary="Refresh" />
        </ListItem>
      </List>
    </Drawer>
  );

  return (
    <Container
      maxWidth="lg"
      sx={{ mt: isMobile ? 2 : 4, mb: isMobile ? 8 : 4, px: isMobile ? 1 : 3 }}
    >
      {/* Header */}
      <Box mb={3}>
        <Typography variant={isMobile ? "h5" : "h4"} gutterBottom>
          Class Management
        </Typography>
        {!isMobile && (
          <Typography variant="body1" color="text.secondary">
            Manage classes, assign teachers, and monitor class performance
          </Typography>
        )}
      </Box>

      {/* Statistics Cards */}
      <Grid container spacing={isMobile ? 1 : 3} mb={3}>
        <Grid item xs={6} sm={6} md={3}>
          <Card>
            <CardContent sx={{ p: isMobile ? 1.5 : 2 }}>
              <Stack
                direction={isMobile ? "column" : "row"}
                justifyContent="space-between"
                alignItems={isMobile ? "flex-start" : "center"}
              >
                <Box>
                  <Typography
                    color="text.secondary"
                    variant={isMobile ? "caption" : "body2"}
                  >
                    Total Classes
                  </Typography>
                  <Typography variant={isMobile ? "h5" : "h4"}>
                    {stats.total}
                  </Typography>
                  <Typography variant="caption" color="success.main">
                    {stats.withTeacher} assigned
                  </Typography>
                </Box>
                {!isMobile && (
                  <Avatar sx={{ bgcolor: "primary.light" }}>
                    <ClassIcon />
                  </Avatar>
                )}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Card>
            <CardContent sx={{ p: isMobile ? 1.5 : 2 }}>
              <Stack
                direction={isMobile ? "column" : "row"}
                justifyContent="space-between"
                alignItems={isMobile ? "flex-start" : "center"}
              >
                <Box>
                  <Typography
                    color="text.secondary"
                    variant={isMobile ? "caption" : "body2"}
                  >
                    Total Students
                  </Typography>
                  <Typography variant={isMobile ? "h5" : "h4"}>
                    {stats.totalStudents}
                  </Typography>
                  <Typography variant="caption">Across all classes</Typography>
                </Box>
                {!isMobile && (
                  <Avatar sx={{ bgcolor: "info.light" }}>
                    <GroupsIcon />
                  </Avatar>
                )}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Card>
            <CardContent sx={{ p: isMobile ? 1.5 : 2 }}>
              <Stack
                direction={isMobile ? "column" : "row"}
                justifyContent="space-between"
                alignItems={isMobile ? "flex-start" : "center"}
              >
                <Box>
                  <Typography
                    color="text.secondary"
                    variant={isMobile ? "caption" : "body2"}
                  >
                    Avg Performance
                  </Typography>
                  <Typography
                    variant={isMobile ? "h5" : "h4"}
                    color={getPerformanceColor(stats.avgPerformance) + ".main"}
                  >
                    {stats.avgPerformance}%
                  </Typography>
                  <Typography variant="caption">School average</Typography>
                </Box>
                {!isMobile && (
                  <Avatar sx={{ bgcolor: "success.light" }}>
                    <InsightsIcon />
                  </Avatar>
                )}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Card>
            <CardContent sx={{ p: isMobile ? 1.5 : 2 }}>
              <Stack
                direction={isMobile ? "column" : "row"}
                justifyContent="space-between"
                alignItems={isMobile ? "flex-start" : "center"}
              >
                <Box>
                  <Typography
                    color="text.secondary"
                    variant={isMobile ? "caption" : "body2"}
                  >
                    Teachers Needed
                  </Typography>
                  <Typography
                    variant={isMobile ? "h5" : "h4"}
                    color="warning.main"
                  >
                    {stats.total - stats.withTeacher}
                  </Typography>
                  <Typography variant="caption">
                    Classes without teachers
                  </Typography>
                </Box>
                {!isMobile && (
                  <Avatar sx={{ bgcolor: "warning.light" }}>
                    <PersonIcon />
                  </Avatar>
                )}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Filter Button - Mobile/Desktop */}
      {!isMobile && (
        <Box sx={{ mb: 2 }}>
          <Button
            variant="outlined"
            startIcon={<FilterIcon />}
            onClick={(e) => setFilterAnchor(e.currentTarget)}
          >
            Filter Classes
          </Button>
          {filterLevel !== "all" && (
            <Chip
              label={`Level: ${filterLevel}`}
              color="primary"
              size="small"
              sx={{ ml: 2 }}
              onDelete={() => setFilterLevel("all")}
            />
          )}
        </Box>
      )}

      {/* Data Table */}
      <Paper sx={{ overflow: "hidden" }}>
        <DataTable<ClassData>
          title={isMobile ? "" : "Classes"}
          columns={columns}
          data={filteredClasses}
          loading={loading}
          error={error}
          selectable={!isMobile}
          onSelectionChange={setSelectedClasses}
          actions={{
            onView: handleView,
            onEdit: !isMobile ? handleEdit : undefined,
            onDelete: !isMobile ? handleDelete : undefined,
            custom: isMobile
              ? []
              : [
                  {
                    icon: <PersonIcon fontSize="small" />,
                    label: "Assign Teacher",
                    onClick: handleAssignTeacher,
                  },
                  {
                    icon: <ScheduleIcon fontSize="small" />,
                    label: "View Schedule",
                    onClick: handleViewSchedule,
                  },
                  {
                    icon: <AssessmentIcon fontSize="small" />,
                    label: "View Performance",
                    onClick: handleViewPerformance,
                  },
                ],
          }}
          toolbarActions={
            isMobile
              ? []
              : [
                  {
                    icon: <AddIcon />,
                    label: "Add Class",
                    onClick: handleAdd,
                    color: "primary",
                  },
                ]
          }
          searchable
          exportable={!isMobile}
          refreshable
          onRefresh={fetchClasses}
          pagination
          rowsPerPageOptions={isMobile ? [5, 10] : [10, 25, 50, 100]}
          defaultRowsPerPage={isMobile ? 5 : 10}
          stickyHeader
          maxHeight={isMobile ? "calc(100vh - 400px)" : "600px"}
          dense={isMobile}
          emptyMessage="No classes found"
          emptyAction={{
            label: "Create First Class",
            onClick: handleAdd,
          }}
        />
      </Paper>

      {/* Mobile Floating Action Button */}
      {isMobile && (
        <Fab
          color="primary"
          aria-label="actions"
          sx={{
            position: "fixed",
            bottom: 16,
            right: 16,
            zIndex: 1000,
          }}
          onClick={() => setMobileMenuOpen(true)}
        >
          <MenuIcon />
        </Fab>
      )}

      {/* Mobile Action Menu */}
      {isMobile && <MobileActionMenu />}

      {/* Filter Menu */}
      <Menu
        anchorEl={filterAnchor}
        open={Boolean(filterAnchor)}
        onClose={() => setFilterAnchor(null)}
      >
        <MenuItem disabled>
          <Typography variant="subtitle2">Filter by Level</Typography>
        </MenuItem>
        <MenuItem
          onClick={() => {
            setFilterLevel("all");
            setFilterAnchor(null);
          }}
        >
          All Levels
        </MenuItem>
        {["JSS 1", "JSS 2", "JSS 3", "SSS 1", "SSS 2", "SSS 3"].map((level) => (
          <MenuItem
            key={level}
            onClick={() => {
              setFilterLevel(level);
              setFilterAnchor(null);
            }}
          >
            {level}
          </MenuItem>
        ))}
      </Menu>

      {/* Dialogs */}
      {formDialogOpen && (
        <ClassFormDialog
          open={formDialogOpen}
          onClose={() => setFormDialogOpen(false)}
          onSubmit={handleFormSubmit}
          classData={selectedClass}
          teachers={teachers}
        />
      )}

      {detailsDialogOpen && selectedClass && (
        <ClassDetailsDialog
          open={detailsDialogOpen}
          onClose={() => setDetailsDialogOpen(false)}
          classData={selectedClass}
          students={students.filter((s) => s.classID === selectedClass.id)}
          subjects={subjects.filter((s) => s.classID === selectedClass.id)}
          teacher={teachers.find((t) => t.id === selectedClass.teacherID)}
        />
      )}

      {assignTeacherDialogOpen && selectedClass && (
        <AssignTeacherDialog
          open={assignTeacherDialogOpen}
          onClose={() => setAssignTeacherDialogOpen(false)}
          onSubmit={handleAssignTeacherSubmit}
          classData={selectedClass}
          teachers={teachers}
          currentTeacherId={selectedClass.teacherID}
        />
      )}

      <ConfirmDialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        onConfirm={confirmDelete}
        title="Delete Class"
        message={`Are you sure you want to delete ${
          classToDelete?.name
        }? This will affect ${
          classToDelete?.studentCount || 0
        } students and all associated records.`}
        confirmText="Delete"
        cancelText="Cancel"
        severity="error"
        showAlert
        alertMessage="This action cannot be undone. All students in this class will need to be reassigned."
      />
    </Container>
  );
};

export default ClassManagement;
