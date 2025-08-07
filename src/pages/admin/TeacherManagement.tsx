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
  Block as BlockIcon,
  Refresh as RefreshIcon,
  Key as KeyIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { generateClient } from "aws-amplify/api";
import { listUsers, listClasses } from "../../graphql/queries";
import { createUser, updateUser, deleteUser } from "../../graphql/mutations";
import { DataTable, Column } from "../../components/common/DataTable";
import { useNotification } from "../../components/NotificationProvider";
import { ConfirmDialog } from "../../components/common/ConfirmDialog";
import TeacherFormDialog from "../../components/users/TeacherFormDialog";
import BulkImportDialog from "../../components/users/BulkImportDialog";
import { User, Class } from "../../API";

const client = generateClient();

interface TeacherData extends User {
  classes?: string[];
  subjects?: string[];
}

const TeacherManagement: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const [teachers, setTeachers] = useState<TeacherData[]>([]);
  const [classes, setClasses] = useState<Class[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedTeachers, setSelectedTeachers] = useState<TeacherData[]>([]);

  // Dialog states
  const [formDialogOpen, setFormDialogOpen] = useState(false);
  const [importDialogOpen, setImportDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState<TeacherData | null>(
    null
  );
  const [teacherToDelete, setTeacherToDelete] = useState<TeacherData | null>(
    null
  );

  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { success, error: showError, warning } = useNotification();

  // Fetch teachers
  const fetchTeachers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await client.graphql({
        query: listUsers,
        variables: {
          filter: { role: { eq: "Teacher" } },
        },
      });

      const teacherList = response.data.listUsers.items as TeacherData[];

      if (teacherList.length === 0) {
        setTeachers(getMockTeachers());
      } else {
        setTeachers(teacherList);
      }
    } catch (err: any) {
      console.error("Error fetching teachers:", err);
      setError("Failed to load teachers");
      setTeachers(getMockTeachers());
    } finally {
      setLoading(false);
    }
  };

  // Fetch classes
  const fetchClasses = async () => {
    try {
      const response = await client.graphql({
        query: listClasses,
      });
      setClasses(response.data.listClasses.items as Class[]);
    } catch (err) {
      console.error("Error fetching classes:", err);
    }
  };

  useEffect(() => {
    fetchTeachers();
    fetchClasses();
  }, []);

  // Mock data for demo
  const getMockTeachers = (): TeacherData[] => [
    {
      id: "1",
      email: "john.doe@school.com",
      name: "John Doe",
      role: "Teacher",
      schoolID: "school1",
      createdAt: "2023-09-01T00:00:00Z",
      updatedAt: "2023-09-01T00:00:00Z",
      classes: ["Mathematics - JSS 1A", "Mathematics - JSS 2B"],
      subjects: ["Mathematics", "Further Mathematics"],
      __typename: "User",
    },
    {
      id: "2",
      email: "jane.smith@school.com",
      name: "Jane Smith",
      role: "Teacher",
      schoolID: "school1",
      createdAt: "2023-08-15T00:00:00Z",
      updatedAt: "2023-08-15T00:00:00Z",
      classes: ["English - Primary 5", "English - Primary 6"],
      subjects: ["English Language", "Literature"],
      __typename: "User",
    },
  ];

  // Mobile-optimized columns
  const columns: Column<TeacherData>[] = isMobile
    ? [
        {
          id: "name",
          label: "Teacher",
          format: (value, row) => (
            <Box>
              <Stack direction="row" spacing={1} alignItems="center">
                <Avatar sx={{ width: 32, height: 32, bgcolor: "primary.main" }}>
                  {row.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </Avatar>
                <Box flex={1}>
                  <Typography variant="body2" fontWeight={500}>
                    {value}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    display="block"
                  >
                    {row.email}
                  </Typography>
                  <Stack direction="row" spacing={0.5} mt={0.5} flexWrap="wrap">
                    {row.subjects?.slice(0, 2).map((subject, index) => (
                      <Chip key={index} label={subject} size="small" />
                    ))}
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
          label: "Teacher Name",
          format: (value, row) => (
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar sx={{ width: 40, height: 40, bgcolor: "primary.main" }}>
                {row.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </Avatar>
              <Box>
                <Typography variant="body2" fontWeight={500}>
                  {value}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  ID: {row.id}
                </Typography>
              </Box>
            </Stack>
          ),
        },
        {
          id: "email",
          label: "Email",
          format: (value) => (
            <Typography variant="body2" sx={{ fontFamily: "monospace" }}>
              {value}
            </Typography>
          ),
        },
        {
          id: "subjects",
          label: "Subjects",
          format: (value: string[] | undefined) => (
            <Stack direction="row" spacing={0.5} flexWrap="wrap">
              {value && value.length > 0 ? (
                value
                  .slice(0, 2)
                  .map((subject, index) => (
                    <Chip
                      key={index}
                      label={subject}
                      size="small"
                      color="primary"
                      variant="outlined"
                    />
                  ))
              ) : (
                <Chip label="Not Assigned" size="small" variant="outlined" />
              )}
              {value && value.length > 2 && (
                <Chip
                  label={`+${value.length - 2}`}
                  size="small"
                  variant="outlined"
                />
              )}
            </Stack>
          ),
          sortable: false,
        },
        {
          id: "classes",
          label: "Classes",
          format: (value: string[] | undefined) => (
            <Stack direction="row" spacing={0.5}>
              {value && value.length > 0 ? (
                <>
                  {value.slice(0, 1).map((cls, index) => (
                    <Chip key={index} label={cls} size="small" />
                  ))}
                  {value.length > 1 && (
                    <Chip
                      label={`+${value.length - 1} more`}
                      size="small"
                      variant="outlined"
                    />
                  )}
                </>
              ) : (
                <Chip label="No Classes" size="small" color="default" />
              )}
            </Stack>
          ),
          sortable: false,
        },
        {
          id: "createdAt",
          label: "Join Date",
          format: (value) =>
            new Date(value).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            }),
        },
        {
          id: "status",
          label: "Status",
          format: (value, row) => {
            const isActive = row.id !== "3";
            return (
              <Chip
                label={isActive ? "Active" : "Inactive"}
                size="small"
                color={isActive ? "success" : "default"}
                icon={isActive ? <CheckCircleIcon /> : <BlockIcon />}
              />
            );
          },
        },
      ];

  // Handlers
  const handleAdd = () => {
    setSelectedTeacher(null);
    setFormDialogOpen(true);
  };

  const handleEdit = (teacher: TeacherData) => {
    setSelectedTeacher(teacher);
    setFormDialogOpen(true);
  };

  const handleDelete = (teacher: TeacherData) => {
    setTeacherToDelete(teacher);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (!teacherToDelete) return;

    try {
      setTeachers(teachers.filter((t) => t.id !== teacherToDelete.id));
      showError(`${teacherToDelete.name} has been removed`);
      setDeleteDialogOpen(false);
      setTeacherToDelete(null);
    } catch (err) {
      showError("Failed to delete teacher");
    }
  };

  const handleBulkDelete = (selected: TeacherData[]) => {
    if (window.confirm(`Delete ${selected.length} teachers?`)) {
      const selectedIds = selected.map((t) => t.id);
      setTeachers(teachers.filter((t) => !selectedIds.includes(t.id)));
      showError(`${selected.length} teachers removed`);
    }
  };

  const handleBulkEmail = (selected: TeacherData[]) => {
    const emails = selected.map((t) => t.email).join(", ");
    warning(`Opening email client for: ${emails}`);
    window.location.href = `mailto:${emails}`;
  };

  const handleSendCredentials = (teacher: TeacherData) => {
    success(`Login credentials sent to ${teacher.email}`);
  };

  const handleAssignClass = (teacher: TeacherData) => {
    setSelectedTeacher(teacher);
    setFormDialogOpen(true);
  };

  const handleFormSubmit = async (data: any) => {
    try {
      if (selectedTeacher) {
        const updatedTeacher = { ...selectedTeacher, ...data };
        setTeachers(
          teachers.map((t) =>
            t.id === selectedTeacher.id ? updatedTeacher : t
          )
        );
        success("Teacher updated successfully");
      } else {
        const newTeacher: TeacherData = {
          ...data,
          id: Date.now().toString(),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          __typename: "User",
        };
        setTeachers([...teachers, newTeacher]);
        success("Teacher added successfully");
      }
      setFormDialogOpen(false);
    } catch (err) {
      showError("Failed to save teacher");
    }
  };

  const handleImport = (importedTeachers: any[]) => {
    const newTeachers = importedTeachers.map((t, index) => ({
      ...t,
      id: `imported-${Date.now()}-${index}`,
      role: "Teacher",
      schoolID: "school1",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      __typename: "User" as const,
    }));
    setTeachers([...teachers, ...newTeachers]);
    success(`${importedTeachers.length} teachers imported successfully`);
    setImportDialogOpen(false);
  };

  const handleExportTemplate = () => {
    const template =
      "Name,Email,Subject,Classes\n" +
      'John Doe,john@school.com,Mathematics,"JSS 1A, JSS 2B"\n';

    const blob = new Blob([template], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "teacher_import_template.csv";
    link.click();
    window.URL.revokeObjectURL(url);
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
          <ListItemText primary="Add Teacher" />
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
          <ListItemText primary="Import Teachers" />
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
          onClick={() => {
            fetchTeachers();
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
          Teacher Management
        </Typography>
        {!isMobile && (
          <Typography variant="body1" color="text.secondary">
            Manage teaching staff, assign classes, and track performance
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
                    Total Teachers
                  </Typography>
                  <Typography variant={isMobile ? "h5" : "h4"}>
                    {teachers.length}
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
                    Active
                  </Typography>
                  <Typography variant={isMobile ? "h5" : "h4"}>
                    {teachers.filter((t, i) => i !== 2).length}
                  </Typography>
                </Box>
                {!isMobile && (
                  <Avatar sx={{ bgcolor: "success.light" }}>
                    <CheckCircleIcon />
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
                    Classes
                  </Typography>
                  <Typography variant={isMobile ? "h5" : "h4"}>
                    {teachers.reduce(
                      (acc, t) => acc + (t.classes?.length || 0),
                      0
                    )}
                  </Typography>
                </Box>
                {!isMobile && (
                  <Avatar sx={{ bgcolor: "info.light" }}>
                    <SchoolIcon />
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
                    Avg Classes
                  </Typography>
                  <Typography variant={isMobile ? "h5" : "h4"}>
                    {teachers.length > 0
                      ? (
                          teachers.reduce(
                            (acc, t) => acc + (t.classes?.length || 0),
                            0
                          ) / teachers.length
                        ).toFixed(1)
                      : "0"}
                  </Typography>
                </Box>
                {!isMobile && (
                  <Avatar sx={{ bgcolor: "warning.light" }}>
                    <SchoolIcon />
                  </Avatar>
                )}
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Data Table */}
      <Paper sx={{ overflow: "hidden" }}>
        <DataTable<TeacherData>
          title={isMobile ? "" : "Teachers"}
          columns={columns}
          data={teachers}
          loading={loading}
          error={error}
          selectable={!isMobile}
          onSelectionChange={setSelectedTeachers}
          actions={{
            onEdit: handleEdit,
            onDelete: !isMobile ? handleDelete : undefined,
            custom: isMobile
              ? []
              : [
                  {
                    icon: <SchoolIcon fontSize="small" />,
                    label: "Assign Classes",
                    onClick: handleAssignClass,
                  },
                  {
                    icon: <KeyIcon fontSize="small" />,
                    label: "Send Credentials",
                    onClick: handleSendCredentials,
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
                    icon: <EmailIcon />,
                    label: "Email Selected",
                    onClick: handleBulkEmail,
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
                    label: "Add Teacher",
                    onClick: handleAdd,
                    color: "primary",
                  },
                  {
                    icon: <UploadIcon />,
                    label: "Import Teachers",
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
          onRefresh={fetchTeachers}
          pagination
          rowsPerPageOptions={isMobile ? [5, 10] : [10, 25, 50]}
          defaultRowsPerPage={isMobile ? 5 : 10}
          stickyHeader
          maxHeight={isMobile ? "calc(100vh - 400px)" : "600px"}
          dense={isMobile}
          emptyMessage="No teachers found"
          emptyAction={{
            label: "Add First Teacher",
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

      {/* Dialogs */}
      {formDialogOpen && (
        <TeacherFormDialog
          open={formDialogOpen}
          onClose={() => setFormDialogOpen(false)}
          onSubmit={handleFormSubmit}
          teacher={selectedTeacher}
          classes={classes}
        />
      )}

      {importDialogOpen && (
        <BulkImportDialog
          open={importDialogOpen}
          onClose={() => setImportDialogOpen(false)}
          onImport={handleImport}
          type="teachers"
        />
      )}

      <ConfirmDialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        onConfirm={confirmDelete}
        title="Delete Teacher"
        message={`Are you sure you want to delete ${teacherToDelete?.name}? This action cannot be undone.`}
        confirmText="Delete"
        cancelText="Cancel"
        severity="error"
      />
    </Container>
  );
};

export default TeacherManagement;
