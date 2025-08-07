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
} from "@mui/material";
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  Email as EmailIcon,
  Upload as UploadIcon,
  Download as DownloadIcon,
  School as SchoolIcon,
  People as PeopleIcon,
  CheckCircle as CheckCircleIcon,
  Warning as WarningIcon,
  Refresh as RefreshIcon,
  FamilyRestroom as ParentIcon,
  Assignment as AssignmentIcon,
  TrendingUp as TrendingUpIcon,
  Print as PrintIcon,
  CreditCard as CardIcon,
  FilterList as FilterIcon,
  Male as MaleIcon,
  Female as FemaleIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { generateClient } from "aws-amplify/api";
import { listStudents, listClasses } from "../../graphql/queries";
import {
  createStudent,
  updateStudent,
  deleteStudent,
} from "../../graphql/mutations";
import { DataTable, Column } from "../../components/common/DataTable";
import { useNotification } from "../../components/NotificationProvider";
import { ConfirmDialog } from "../../components/common/ConfirmDialog";
import StudentFormDialog from "../../components/users/StudentFormDialog";
import BulkImportDialog from "../../components/users/BulkImportDialog";
import StudentDetailsDialog from "../../components/users/StudentDetailsDialog";
import { Student, Class } from "../../API";
import { useCurrentUser } from "../../hooks/useCurrentUser";

const client = generateClient();

interface StudentData extends Student {
  // Additional fields not in base Student type
  age?: number;
  parentName?: string;
  parentEmail?: string;
  parentPhone?: string;
  status?: "Active" | "Inactive" | "Suspended" | "Graduated";
  admissionNumber?: string;
  address?: string;
  bloodGroup?: string;
  medicalConditions?: string;
  feeStatus?: "Paid" | "Partial" | "Unpaid";
}

const StudentManagement: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const { user } = useCurrentUser();

  const [students, setStudents] = useState<StudentData[]>([]);
  const [classes, setClasses] = useState<Class[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedStudents, setSelectedStudents] = useState<StudentData[]>([]);
  const [filterClass, setFilterClass] = useState<string>("all");
  const [filterStatus, setFilterStatus] = useState<string>("all");

  // Dialog states
  const [formDialogOpen, setFormDialogOpen] = useState(false);
  const [importDialogOpen, setImportDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [detailsDialogOpen, setDetailsDialogOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<StudentData | null>(
    null
  );
  const [studentToDelete, setStudentToDelete] = useState<StudentData | null>(
    null
  );

  // Mobile menu states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [filterAnchor, setFilterAnchor] = useState<null | HTMLElement>(null);

  const { success, error: showError, warning, info } = useNotification();

  // Calculate age from date of birth
  const calculateAge = (dateOfBirth: string): number => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  // Fetch students
  const fetchStudents = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await client.graphql({
        query: listStudents,
        variables: user?.schoolId
          ? { filter: { schoolID: { eq: user.schoolId } } }
          : {},
      });

      if ("data" in response && response.data) {
        const studentList = response.data.listStudents.items as Student[];

        // Add calculated fields to student data
        const enrichedStudents: StudentData[] = studentList.map((student) => ({
          ...student,
          age: calculateAge(student.dateOfBirth),
          admissionNumber: student.studentID, // Use studentID as admission number
          status: "Active", // Default status
          feeStatus: "Paid", // Default fee status
        }));

        if (enrichedStudents.length === 0) {
          setStudents(getMockStudents());
        } else {
          setStudents(enrichedStudents);
        }
      } else {
        setStudents(getMockStudents());
      }
    } catch (err: any) {
      console.error("Error fetching students:", err);
      setError("Failed to load students");
      setStudents(getMockStudents());
    } finally {
      setLoading(false);
    }
  };

  // Fetch classes
  const fetchClasses = async () => {
    try {
      const response = await client.graphql({
        query: listClasses,
        variables: user?.schoolId
          ? { filter: { schoolID: { eq: user.schoolId } } }
          : {},
      });

      if ("data" in response && response.data) {
        setClasses(response.data.listClasses.items as Class[]);
      } else {
        setClasses(getMockClasses());
      }
    } catch (err) {
      console.error("Error fetching classes:", err);
      setClasses(getMockClasses());
    }
  };

  useEffect(() => {
    fetchStudents();
    fetchClasses();
  }, [user?.schoolId]);

  // Mock data functions
  const getMockStudents = (): StudentData[] => [
    {
      id: "1",
      name: "Adebayo Ogundimu",
      firstName: "Adebayo",
      lastName: "Ogundimu",
      classID: "jss1a",
      schoolID: "school1",
      studentID: "STU/2023/001",
      dateOfBirth: "2010-05-15",
      gender: "Male",
      medicalInfo: null,
      specialNeeds: null,
      dietaryRestrictions: null,
      userID: null,
      owner: null,
      admins: null,
      createdAt: "2023-09-01T00:00:00Z",
      updatedAt: "2023-09-01T00:00:00Z",
      __typename: "Student",
      // Additional fields
      admissionNumber: "STU/2023/001",
      age: 13,
      parentName: "Mr. Ogundimu",
      parentEmail: "ogundimu@email.com",
      parentPhone: "+234 803 456 7890",
      address: "123 Victoria Island, Lagos",
      status: "Active",
      feeStatus: "Paid",
      bloodGroup: "O+",
    },
    {
      id: "2",
      name: "Fatima Abdullahi",
      firstName: "Fatima",
      lastName: "Abdullahi",
      classID: "jss1a",
      schoolID: "school1",
      studentID: "STU/2023/002",
      dateOfBirth: "2011-03-20",
      gender: "Female",
      medicalInfo: null,
      specialNeeds: null,
      dietaryRestrictions: null,
      userID: null,
      owner: null,
      admins: null,
      createdAt: "2023-09-01T00:00:00Z",
      updatedAt: "2023-09-01T00:00:00Z",
      __typename: "Student",
      // Additional fields
      admissionNumber: "STU/2023/002",
      age: 12,
      parentName: "Mrs. Abdullahi",
      parentEmail: "abdullahi@email.com",
      parentPhone: "+234 802 345 6789",
      address: "456 Garki, Abuja",
      status: "Active",
      feeStatus: "Partial",
      bloodGroup: "A+",
    },
  ];

  const getMockClasses = (): Class[] => [
    {
      id: "jss1a",
      name: "JSS 1A",
      schoolID: "school1",
      teacherID: null,
      owner: null,
      admins: null,
      createdAt: "2023-09-01T00:00:00Z",
      updatedAt: "2023-09-01T00:00:00Z",
      __typename: "Class",
    },
    {
      id: "jss2a",
      name: "JSS 2A",
      schoolID: "school1",
      teacherID: null,
      owner: null,
      admins: null,
      createdAt: "2023-09-01T00:00:00Z",
      updatedAt: "2023-09-01T00:00:00Z",
      __typename: "Class",
    },
    {
      id: "sss1a",
      name: "SSS 1A",
      schoolID: "school1",
      teacherID: null,
      owner: null,
      admins: null,
      createdAt: "2023-09-01T00:00:00Z",
      updatedAt: "2023-09-01T00:00:00Z",
      __typename: "Class",
    },
  ];

  const getClassName = (classId: string): string => {
    const cls = classes.find((c) => c.id === classId);
    return cls?.name || classId;
  };

  const filteredStudents = students.filter((student) => {
    if (filterClass !== "all" && student.classID !== filterClass) return false;
    if (filterStatus !== "all" && student.status !== filterStatus) return false;
    return true;
  });

  // Mobile-optimized columns
  const columns: Column<StudentData>[] = isMobile
    ? [
        {
          id: "name",
          label: "Student",
          format: (value, row) => (
            <Box>
              <Stack direction="row" spacing={1} alignItems="center">
                <Avatar
                  sx={{
                    width: 32,
                    height: 32,
                    bgcolor:
                      row.gender === "Male" ? "primary.main" : "secondary.main",
                  }}
                >
                  {row.firstName[0]}
                  {row.lastName[0]}
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
                    {row.admissionNumber}
                  </Typography>
                  <Stack direction="row" spacing={0.5} mt={0.5}>
                    <Chip label={getClassName(row.classID)} size="small" />
                    <Chip
                      label={row.feeStatus}
                      size="small"
                      color={
                        row.feeStatus === "Paid"
                          ? "success"
                          : row.feeStatus === "Partial"
                          ? "warning"
                          : "error"
                      }
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
          label: "Student",
          format: (value, row) => (
            <Stack direction="row" spacing={2} alignItems="center">
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={
                  row.gender === "Male" ? (
                    <MaleIcon
                      sx={{ width: 12, height: 12, color: "primary.main" }}
                    />
                  ) : (
                    <FemaleIcon
                      sx={{ width: 12, height: 12, color: "secondary.main" }}
                    />
                  )
                }
              >
                <Avatar
                  sx={{
                    width: 40,
                    height: 40,
                    bgcolor:
                      row.gender === "Male" ? "primary.main" : "secondary.main",
                  }}
                >
                  {row.firstName[0]}
                  {row.lastName[0]}
                </Avatar>
              </Badge>
              <Box>
                <Typography variant="body2" fontWeight={500}>
                  {value}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {row.admissionNumber}
                </Typography>
              </Box>
            </Stack>
          ),
        },
        {
          id: "classID",
          label: "Class",
          format: (value) => (
            <Chip
              label={getClassName(value)}
              size="small"
              color="primary"
              variant="outlined"
            />
          ),
        },
        {
          id: "age",
          label: "Age",
          format: (value) => `${value} years`,
          numeric: true,
        },
        {
          id: "parentName",
          label: "Parent/Guardian",
          format: (value, row) => (
            <Box>
              <Typography variant="body2">{value}</Typography>
              <Typography variant="caption" color="text.secondary">
                {row.parentPhone}
              </Typography>
            </Box>
          ),
        },
        {
          id: "feeStatus",
          label: "Fee Status",
          format: (value) => {
            const getColor = () => {
              switch (value) {
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
              <Chip
                label={value}
                size="small"
                color={getColor()}
                variant={value === "Paid" ? "filled" : "outlined"}
              />
            );
          },
        },
        {
          id: "status",
          label: "Status",
          format: (value) => {
            const getIcon = () => {
              switch (value) {
                case "Active":
                  return <CheckCircleIcon />;
                case "Inactive":
                  return <WarningIcon />;
                default:
                  return undefined;
              }
            };
            const icon = getIcon();
            return (
              <Chip
                label={value}
                size="small"
                color={value === "Active" ? "success" : "default"}
                {...(icon && { icon })}
              />
            );
          },
        },
        {
          id: "createdAt",
          label: "Admission Date",
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
    setSelectedStudent(null);
    setFormDialogOpen(true);
  };

  const handleView = (student: StudentData) => {
    setSelectedStudent(student);
    setDetailsDialogOpen(true);
  };

  const handleEdit = (student: StudentData) => {
    setSelectedStudent(student);
    setFormDialogOpen(true);
  };

  const handleDelete = (student: StudentData) => {
    setStudentToDelete(student);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (!studentToDelete) return;

    try {
      await client.graphql({
        query: deleteStudent,
        variables: { input: { id: studentToDelete.id } },
      });

      setStudents(students.filter((s) => s.id !== studentToDelete.id));
      showError(`${studentToDelete.name} has been removed`);
      setDeleteDialogOpen(false);
      setStudentToDelete(null);
    } catch (err) {
      showError("Failed to delete student");
    }
  };

  const handleBulkDelete = (selected: StudentData[]) => {
    if (window.confirm(`Delete ${selected.length} students?`)) {
      const selectedIds = selected.map((s) => s.id);
      setStudents(students.filter((s) => !selectedIds.includes(s.id)));
      showError(`${selected.length} students removed`);
    }
  };

  const handleBulkPromote = (selected: StudentData[]) => {
    info(`Promoting ${selected.length} students to next class`);
  };

  const handlePrintIDCards = (student: StudentData) => {
    success(`Printing ID card for ${student.name}`);
  };

  const handleContactParent = (student: StudentData) => {
    if (student.parentEmail) {
      window.location.href = `mailto:${student.parentEmail}`;
    }
  };

  const handleFormSubmit = async (data: any) => {
    try {
      if (selectedStudent) {
        const updateData = {
          id: selectedStudent.id,
          name: `${data.firstName} ${data.lastName}`,
          firstName: data.firstName,
          lastName: data.lastName,
          dateOfBirth: data.dateOfBirth,
          gender: data.gender,
          studentID: data.studentID,
          classID: data.classID,
          medicalInfo: data.medicalInfo,
          specialNeeds: data.specialNeeds,
          dietaryRestrictions: data.dietaryRestrictions,
        };

        await client.graphql({
          query: updateStudent,
          variables: { input: updateData },
        });

        const updatedStudent = {
          ...selectedStudent,
          ...data,
          age: calculateAge(data.dateOfBirth),
        };
        setStudents(
          students.map((s) =>
            s.id === selectedStudent.id ? updatedStudent : s
          )
        );
        success("Student updated successfully");
      } else {
        const newStudentData = {
          name: `${data.firstName} ${data.lastName}`,
          firstName: data.firstName,
          lastName: data.lastName,
          dateOfBirth: data.dateOfBirth,
          gender: data.gender,
          studentID:
            data.studentID ||
            `STU/${new Date().getFullYear()}/${String(
              Math.floor(Math.random() * 1000)
            ).padStart(3, "0")}`,
          classID: data.classID,
          schoolID: user?.schoolId || "school1",
          medicalInfo: data.medicalInfo,
          specialNeeds: data.specialNeeds,
          dietaryRestrictions: data.dietaryRestrictions,
        };

        const response = await client.graphql({
          query: createStudent,
          variables: { input: newStudentData },
        });

        if ("data" in response && response.data) {
          const newStudent: StudentData = {
            ...response.data.createStudent,
            ...data,
            age: calculateAge(data.dateOfBirth),
            admissionNumber: newStudentData.studentID,
            status: "Active",
            feeStatus: "Unpaid",
          };
          setStudents([...students, newStudent]);
          success("Student added successfully");
        }
      }
      setFormDialogOpen(false);
    } catch (err) {
      showError("Failed to save student");
    }
  };

  const handleImport = (importedStudents: any[]) => {
    const newStudents = importedStudents.map((s, index) => ({
      ...s,
      id: `imported-${Date.now()}-${index}`,
      name: `${s.firstName} ${s.lastName}`,
      schoolID: user?.schoolId || "school1",
      studentID:
        s.studentID ||
        `STU/${new Date().getFullYear()}/${String(index + 100).padStart(
          3,
          "0"
        )}`,
      dateOfBirth: s.dateOfBirth || "2010-01-01",
      gender: s.gender || "Other",
      medicalInfo: null,
      specialNeeds: null,
      dietaryRestrictions: null,
      userID: null,
      owner: null,
      admins: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      __typename: "Student" as const,
      admissionNumber:
        s.studentID ||
        `STU/${new Date().getFullYear()}/${String(index + 100).padStart(
          3,
          "0"
        )}`,
      age: calculateAge(s.dateOfBirth || "2010-01-01"),
      status: "Active" as const,
      feeStatus: "Unpaid" as const,
    }));
    setStudents([...students, ...newStudents]);
    success(`${importedStudents.length} students imported successfully`);
    setImportDialogOpen(false);
  };

  const handleExportTemplate = () => {
    const template =
      "First Name,Last Name,Class,Date of Birth,Gender,Student ID,Parent Name,Parent Email,Parent Phone,Address\n" +
      "John,Doe,JSS 1A,2010-05-15,Male,STU/2024/001,Mr. Doe,doe@email.com,+234 803 456 7890,123 Main Street Lagos\n";

    const blob = new Blob([template], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "student_import_template.csv";
    link.click();
    window.URL.revokeObjectURL(url);
  };

  // Statistics
  const stats = {
    total: students.length,
    active: students.filter((s) => s.status === "Active").length,
    male: students.filter((s) => s.gender === "Male").length,
    female: students.filter((s) => s.gender === "Female").length,
    feePaid: students.filter((s) => s.feeStatus === "Paid").length,
    feeUnpaid: students.filter((s) => s.feeStatus === "Unpaid").length,
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
          <ListItemText primary="Add Student" />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            setImportDialogOpen(true);
            setMobileMenuOpen(false);
          }}
        >
          <ListItemIcon>
            <UploadIcon />
          </ListItemIcon>
          <ListItemText primary="Import Students" />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            handleExportTemplate();
            setMobileMenuOpen(false);
          }}
        >
          <ListItemIcon>
            <DownloadIcon />
          </ListItemIcon>
          <ListItemText primary="Download Template" />
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
          <ListItemText primary="Filter Students" />
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
          Student Management
        </Typography>
        {!isMobile && (
          <Typography variant="body1" color="text.secondary">
            Manage student enrollment, track academic progress, and maintain
            student records
          </Typography>
        )}
      </Box>

      {/* Statistics Cards - Responsive Grid */}
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
                    Total Students
                  </Typography>
                  <Typography variant={isMobile ? "h5" : "h4"}>
                    {stats.total}
                  </Typography>
                  <Typography variant="caption" color="success.main">
                    {stats.active} active
                  </Typography>
                </Box>
                {!isMobile && (
                  <Avatar sx={{ bgcolor: "primary.light" }}>
                    <PeopleIcon />
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
                    Gender
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    <Box>
                      <Typography
                        variant={isMobile ? "body1" : "h6"}
                        color="primary.main"
                      >
                        {stats.male}M
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        variant={isMobile ? "body1" : "h6"}
                        color="secondary.main"
                      >
                        {stats.female}F
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
                {!isMobile && (
                  <Avatar sx={{ bgcolor: "info.light" }}>
                    <PeopleIcon />
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
                    Fee Collection
                  </Typography>
                  <Typography
                    variant={isMobile ? "h5" : "h4"}
                    color="success.main"
                  >
                    {stats.feePaid}
                  </Typography>
                  <Typography variant="caption" color="error.main">
                    {stats.feeUnpaid} unpaid
                  </Typography>
                </Box>
                {!isMobile && (
                  <Avatar sx={{ bgcolor: "success.light" }}>
                    <AssignmentIcon />
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
                    Attendance
                  </Typography>
                  <Typography variant={isMobile ? "h5" : "h4"}>92%</Typography>
                  <Typography variant="caption" color="success.main">
                    +2% this month
                  </Typography>
                </Box>
                {!isMobile && (
                  <Avatar sx={{ bgcolor: "warning.light" }}>
                    <TrendingUpIcon />
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
            Filter Students
          </Button>
          {(filterClass !== "all" || filterStatus !== "all") && (
            <Chip
              label="Filters Active"
              color="primary"
              size="small"
              sx={{ ml: 2 }}
              onDelete={() => {
                setFilterClass("all");
                setFilterStatus("all");
              }}
            />
          )}
        </Box>
      )}

      {/* Data Table */}
      <Paper sx={{ overflow: "hidden" }}>
        <DataTable<StudentData>
          title={isMobile ? "" : "Students"}
          columns={columns}
          data={filteredStudents}
          loading={loading}
          error={error}
          selectable={!isMobile}
          onSelectionChange={setSelectedStudents}
          actions={{
            onView: handleView,
            onEdit: !isMobile ? handleEdit : undefined,
            onDelete: !isMobile ? handleDelete : undefined,
            custom: isMobile
              ? []
              : [
                  {
                    icon: <CardIcon fontSize="small" />,
                    label: "Print ID Card",
                    onClick: handlePrintIDCards,
                  },
                  {
                    icon: <ParentIcon fontSize="small" />,
                    label: "Contact Parent",
                    onClick: handleContactParent,
                  },
                ],
          }}
          bulkActions={
            isMobile
              ? []
              : [
                  {
                    icon: <DeleteIcon />,
                    label: "Delete Selected",
                    onClick: handleBulkDelete,
                    color: "error",
                  },
                  {
                    icon: <TrendingUpIcon />,
                    label: "Promote Selected",
                    onClick: handleBulkPromote,
                    color: "primary",
                  },
                ]
          }
          toolbarActions={
            isMobile
              ? []
              : [
                  {
                    icon: <AddIcon />,
                    label: "Add Student",
                    onClick: handleAdd,
                    color: "primary",
                  },
                  {
                    icon: <UploadIcon />,
                    label: "Import Students",
                    onClick: () => setImportDialogOpen(true),
                    color: "primary",
                  },
                  {
                    icon: <DownloadIcon />,
                    label: "Download Template",
                    onClick: handleExportTemplate,
                    color: "primary",
                  },
                ]
          }
          searchable
          exportable={!isMobile}
          refreshable
          onRefresh={fetchStudents}
          pagination
          rowsPerPageOptions={isMobile ? [5, 10] : [10, 25, 50, 100]}
          defaultRowsPerPage={isMobile ? 5 : 10}
          stickyHeader
          maxHeight={isMobile ? "calc(100vh - 400px)" : "600px"}
          dense={isMobile}
          emptyMessage="No students found"
          emptyAction={{
            label: "Add First Student",
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
          <Typography variant="subtitle2">Filter by Class</Typography>
        </MenuItem>
        <MenuItem
          onClick={() => {
            setFilterClass("all");
            setFilterAnchor(null);
          }}
        >
          All Classes
        </MenuItem>
        {classes.map((cls) => (
          <MenuItem
            key={cls.id}
            onClick={() => {
              setFilterClass(cls.id);
              setFilterAnchor(null);
            }}
          >
            {cls.name}
          </MenuItem>
        ))}
        <MenuItem disabled>
          <Typography variant="subtitle2">Filter by Status</Typography>
        </MenuItem>
        <MenuItem
          onClick={() => {
            setFilterStatus("all");
            setFilterAnchor(null);
          }}
        >
          All Status
        </MenuItem>
        {["Active", "Inactive", "Suspended", "Graduated"].map((status) => (
          <MenuItem
            key={status}
            onClick={() => {
              setFilterStatus(status);
              setFilterAnchor(null);
            }}
          >
            {status}
          </MenuItem>
        ))}
      </Menu>

      {/* Dialogs */}
      {formDialogOpen && (
        <StudentFormDialog
          open={formDialogOpen}
          onClose={() => setFormDialogOpen(false)}
          onSubmit={handleFormSubmit}
          student={selectedStudent}
          classes={classes}
        />
      )}

      {detailsDialogOpen && selectedStudent && (
        <StudentDetailsDialog
          open={detailsDialogOpen}
          onClose={() => setDetailsDialogOpen(false)}
          student={selectedStudent}
          className={getClassName(selectedStudent.classID)}
        />
      )}

      {importDialogOpen && (
        <BulkImportDialog
          open={importDialogOpen}
          onClose={() => setImportDialogOpen(false)}
          onImport={handleImport}
          type="students"
        />
      )}

      <ConfirmDialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        onConfirm={confirmDelete}
        title="Delete Student"
        message={`Are you sure you want to delete ${studentToDelete?.name}? This will remove all academic records for this student.`}
        confirmText="Delete"
        cancelText="Cancel"
        severity="error"
        showAlert
        alertMessage="This action cannot be undone. Consider marking the student as 'Inactive' instead."
      />
    </Container>
  );
};

export default StudentManagement;
