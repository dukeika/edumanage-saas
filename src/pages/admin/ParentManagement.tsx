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
  Divider,
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
  Phone as PhoneIcon,
  Assignment as AssignmentIcon,
  TrendingUp as TrendingUpIcon,
  Print as PrintIcon,
  CreditCard as CardIcon,
  FilterList as FilterIcon,
  Male as MaleIcon,
  Female as FemaleIcon,
  Menu as MenuIcon,
  FamilyRestroom as FamilyIcon,
  ChildCare as ChildIcon,
  Link as LinkIcon,
  Key as KeyIcon,
  Notifications as NotificationsIcon,
  Block as BlockIcon,
} from "@mui/icons-material";
import { generateClient } from "aws-amplify/api";
import { listStudents } from "../../graphql/queries";
import { DataTable, Column } from "../../components/common/DataTable";
import { useNotification } from "../../components/NotificationProvider";
import { ConfirmDialog } from "../../components/common/ConfirmDialog";
import ParentFormDialog from "../../components/users/ParentFormDialog";
import BulkImportDialog from "../../components/users/BulkImportDialog";
import ParentDetailsDialog from "../../components/users/ParentDetailsDialog";
import LinkChildrenDialog from "../../components/users/LinkChildrenDialog";
import { Student } from "../../API";
import { useCurrentUser } from "../../hooks/useCurrentUser";

const client = generateClient();

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
  __typename?: "Parent";
}

// Extended Student interface with additional fields
interface ExtendedStudent extends Student {
  // These fields are now in the base Student type from the API
  // Only add truly additional fields here
}

// Parent with additional computed fields
interface ParentData extends Parent {
  childrenData?: ExtendedStudent[];
  linkedChildren?: number;
}

const ParentManagement: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const { user } = useCurrentUser();

  const [parents, setParents] = useState<ParentData[]>([]);
  const [students, setStudents] = useState<ExtendedStudent[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedParents, setSelectedParents] = useState<ParentData[]>([]);
  const [filterRelationship, setFilterRelationship] = useState<string>("all");
  const [filterStatus, setFilterStatus] = useState<string>("all");

  // Dialog states
  const [formDialogOpen, setFormDialogOpen] = useState(false);
  const [importDialogOpen, setImportDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [detailsDialogOpen, setDetailsDialogOpen] = useState(false);
  const [linkChildrenDialogOpen, setLinkChildrenDialogOpen] = useState(false);
  const [selectedParent, setSelectedParent] = useState<ParentData | null>(null);
  const [parentToDelete, setParentToDelete] = useState<ParentData | null>(null);

  // Mobile menu states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [filterAnchor, setFilterAnchor] = useState<null | HTMLElement>(null);

  const { success, error: showError, warning, info } = useNotification();

  // Fetch parents (using mock data for now)
  const fetchParents = async () => {
    setLoading(true);
    setError(null);
    try {
      // Since Parent model doesn't exist in API yet, using mock data
      const mockParents = getMockParents();
      setParents(mockParents);
    } catch (err: any) {
      console.error("Error fetching parents:", err);
      setError("Failed to load parents");
    } finally {
      setLoading(false);
    }
  };

  // Fetch students
  const fetchStudents = async () => {
    try {
      const response = await client.graphql({
        query: listStudents,
        variables: { filter: { schoolID: { eq: user?.schoolId } } },
      });

      // Extract data safely
      if ("data" in response && response.data) {
        const studentList = response.data.listStudents.items as Student[];
        setStudents(studentList);
      } else {
        setStudents(getMockStudents());
      }
    } catch (err) {
      console.error("Error fetching students:", err);
      setStudents(getMockStudents());
    }
  };

  useEffect(() => {
    // For mock development, always load mock data if no user.schoolId
    if (user?.schoolId) {
      fetchParents();
      fetchStudents();
    } else {
      // Load mock data anyway
      setParents(getMockParents());
      setStudents(getMockStudents());
    }
  }, [user?.schoolId]);

  // Mock data functions
  const getMockParents = (): ParentData[] => [
    {
      id: "1",
      firstName: "Adebayo",
      lastName: "Ogundimu",
      email: "adebayo.ogundimu@email.com",
      phone: "+234 803 456 7890",
      alternatePhone: "+234 802 345 6789",
      address: "123 Victoria Island, Lagos",
      occupation: "Business Owner",
      employer: "Ogundimu Enterprises",
      relationshipType: "Father",
      schoolID: "school1",
      isEmergencyContact: true,
      emergencyContactPriority: 1,
      linkedChildren: 2,
      createdAt: "2023-09-01T00:00:00Z",
      updatedAt: "2023-09-01T00:00:00Z",
      __typename: "Parent",
    },
    {
      id: "2",
      firstName: "Fatima",
      lastName: "Abdullahi",
      email: "fatima.abdullahi@email.com",
      phone: "+234 802 345 6789",
      address: "456 Garki, Abuja",
      occupation: "Medical Doctor",
      employer: "National Hospital Abuja",
      relationshipType: "Mother",
      schoolID: "school1",
      isEmergencyContact: true,
      emergencyContactPriority: 1,
      linkedChildren: 1,
      createdAt: "2023-09-01T00:00:00Z",
      updatedAt: "2023-09-01T00:00:00Z",
      __typename: "Parent",
    },
    {
      id: "3",
      firstName: "James",
      lastName: "Okafor",
      email: "james.okafor@email.com",
      phone: "+234 801 234 5678",
      address: "789 Ikeja, Lagos",
      occupation: "Engineer",
      employer: "Lagos State Government",
      relationshipType: "Guardian",
      schoolID: "school1",
      isEmergencyContact: false,
      linkedChildren: 1,
      createdAt: "2023-09-15T00:00:00Z",
      updatedAt: "2023-09-15T00:00:00Z",
      __typename: "Parent",
    },
  ];

  const getMockStudents = (): ExtendedStudent[] => [
    {
      id: "1",
      name: "Adebayo Ogundimu Jr.",
      firstName: "Adebayo",
      lastName: "Ogundimu Jr.",
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
    },
    {
      id: "2",
      name: "Kemi Ogundimu",
      firstName: "Kemi",
      lastName: "Ogundimu",
      classID: "jss2a",
      schoolID: "school1",
      studentID: "STU/2023/002",
      dateOfBirth: "2009-03-20",
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
    },
    {
      id: "3",
      name: "Hassan Abdullahi",
      firstName: "Hassan",
      lastName: "Abdullahi",
      classID: "jss1a",
      schoolID: "school1",
      studentID: "STU/2023/003",
      dateOfBirth: "2011-03-20",
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
    },
  ];

  const getLinkedChildren = (parentId: string): ExtendedStudent[] => {
    // Mock implementation - in real app, use parentStudentLinks
    if (parentId === "1") {
      return students.filter((s) => s.id === "1" || s.id === "2");
    } else if (parentId === "2") {
      return students.filter((s) => s.id === "3");
    }
    return [];
  };

  const filteredParents = parents.filter((parent) => {
    if (
      filterRelationship !== "all" &&
      parent.relationshipType !== filterRelationship
    )
      return false;
    if (filterStatus !== "all") {
      if (filterStatus === "emergency" && !parent.isEmergencyContact)
        return false;
      if (filterStatus === "non-emergency" && parent.isEmergencyContact)
        return false;
    }
    return true;
  });

  // Mobile-optimized columns
  const columns: Column<ParentData>[] = isMobile
    ? [
        {
          id: "firstName",
          label: "Parent",
          format: (value, row) => (
            <Box>
              <Stack direction="row" spacing={1} alignItems="center">
                <Avatar
                  sx={{
                    width: 32,
                    height: 32,
                    bgcolor:
                      row.relationshipType === "Father"
                        ? "primary.main"
                        : row.relationshipType === "Mother"
                        ? "secondary.main"
                        : "warning.main",
                  }}
                >
                  {row.firstName[0]}
                  {row.lastName[0]}
                </Avatar>
                <Box>
                  <Typography variant="body2" fontWeight={500}>
                    {`${row.firstName} ${row.lastName}`}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    display="block"
                  >
                    {row.email}
                  </Typography>
                  <Stack direction="row" spacing={0.5} mt={0.5}>
                    <Chip
                      label={row.relationshipType}
                      size="small"
                      color={
                        row.relationshipType === "Father"
                          ? "primary"
                          : row.relationshipType === "Mother"
                          ? "secondary"
                          : "default"
                      }
                    />
                    {row.isEmergencyContact && (
                      <Chip
                        label="Emergency"
                        size="small"
                        color="error"
                        variant="outlined"
                      />
                    )}
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
          id: "firstName",
          label: "Parent Name",
          format: (value, row) => (
            <Stack direction="row" spacing={2} alignItems="center">
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={
                  row.isEmergencyContact ? (
                    <WarningIcon
                      sx={{ width: 12, height: 12, color: "error.main" }}
                    />
                  ) : null
                }
              >
                <Avatar
                  sx={{
                    width: 40,
                    height: 40,
                    bgcolor:
                      row.relationshipType === "Father"
                        ? "primary.main"
                        : row.relationshipType === "Mother"
                        ? "secondary.main"
                        : "warning.main",
                  }}
                >
                  {row.firstName[0]}
                  {row.lastName[0]}
                </Avatar>
              </Badge>
              <Box>
                <Typography variant="body2" fontWeight={500}>
                  {`${row.firstName} ${row.lastName}`}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {row.occupation || "Not specified"}
                </Typography>
              </Box>
            </Stack>
          ),
        },
        {
          id: "relationshipType",
          label: "Relationship",
          format: (value) => (
            <Chip
              label={value}
              size="small"
              color={
                value === "Father"
                  ? "primary"
                  : value === "Mother"
                  ? "secondary"
                  : "default"
              }
              variant="outlined"
            />
          ),
        },
        {
          id: "email",
          label: "Contact",
          format: (value, row) => (
            <Box>
              <Typography variant="body2">{value}</Typography>
              <Typography variant="caption" color="text.secondary">
                {row.phone}
              </Typography>
            </Box>
          ),
        },
        {
          id: "linkedChildren",
          label: "Children",
          format: (value, row) => {
            const children = getLinkedChildren(row.id);
            return (
              <Stack direction="row" spacing={0.5} alignItems="center">
                <Chip
                  label={`${children.length} ${
                    children.length === 1 ? "child" : "children"
                  }`}
                  size="small"
                  icon={<ChildIcon />}
                />
                {children.length === 0 && (
                  <Tooltip title="No linked children">
                    <WarningIcon fontSize="small" color="warning" />
                  </Tooltip>
                )}
              </Stack>
            );
          },
          numeric: true,
        },
        {
          id: "isEmergencyContact",
          label: "Emergency Contact",
          format: (value, row) => {
            if (!value)
              return <Chip label="No" size="small" variant="outlined" />;
            return (
              <Stack direction="row" spacing={0.5}>
                <Chip
                  label={`Priority ${row.emergencyContactPriority || 1}`}
                  size="small"
                  color="error"
                  icon={<PhoneIcon />}
                />
              </Stack>
            );
          },
        },
        {
          id: "createdAt",
          label: "Registration Date",
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
    setSelectedParent(null);
    setFormDialogOpen(true);
  };

  const handleView = (parent: ParentData) => {
    setSelectedParent(parent);
    setDetailsDialogOpen(true);
  };

  const handleEdit = (parent: ParentData) => {
    setSelectedParent(parent);
    setFormDialogOpen(true);
  };

  const handleDelete = (parent: ParentData) => {
    setParentToDelete(parent);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (!parentToDelete) return;

    try {
      setParents(parents.filter((p) => p.id !== parentToDelete.id));
      showError(
        `${parentToDelete.firstName} ${parentToDelete.lastName} has been removed`
      );
      setDeleteDialogOpen(false);
      setParentToDelete(null);
    } catch (err) {
      showError("Failed to delete parent");
    }
  };

  const handleBulkDelete = (selected: ParentData[]) => {
    if (window.confirm(`Delete ${selected.length} parents?`)) {
      const selectedIds = selected.map((p) => p.id);
      setParents(parents.filter((p) => !selectedIds.includes(p.id)));
      showError(`${selected.length} parents removed`);
    }
  };

  const handleBulkEmail = (selected: ParentData[]) => {
    const emails = selected.map((p) => p.email).join(", ");
    warning(`Opening email client for: ${emails}`);
    window.location.href = `mailto:${emails}`;
  };

  const handleLinkChildren = (parent: ParentData) => {
    setSelectedParent(parent);
    setLinkChildrenDialogOpen(true);
  };

  const handleSendCredentials = (parent: ParentData) => {
    success(`Login credentials sent to ${parent.email}`);
  };

  const handleContactParent = (parent: ParentData) => {
    if (parent.email) {
      window.location.href = `mailto:${parent.email}`;
    }
  };

  const handleFormSubmit = async (data: any) => {
    try {
      if (selectedParent) {
        const updatedParent = { ...selectedParent, ...data };
        setParents(
          parents.map((p) => (p.id === selectedParent.id ? updatedParent : p))
        );
        success("Parent updated successfully");
      } else {
        const newParent: ParentData = {
          ...data,
          id: Date.now().toString(),
          schoolID: user?.schoolId || "school1",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          __typename: "Parent",
        };
        setParents([...parents, newParent]);
        success("Parent added successfully");
      }
      setFormDialogOpen(false);
    } catch (err) {
      showError("Failed to save parent");
    }
  };

  const handleImport = (importedParents: any[]) => {
    const newParents = importedParents.map((p, index) => ({
      ...p,
      id: `imported-${Date.now()}-${index}`,
      schoolID: user?.schoolId || "school1",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      __typename: "Parent" as const,
    }));
    setParents([...parents, ...newParents]);
    success(`${importedParents.length} parents imported successfully`);
    setImportDialogOpen(false);
  };

  const handleExportTemplate = () => {
    const template =
      "First Name,Last Name,Email,Phone,Alternate Phone,Address,Occupation,Employer,Relationship Type,Is Emergency Contact,Emergency Priority\n" +
      "John,Doe,john.doe@email.com,+234 803 456 7890,+234 802 345 6789,123 Main Street Lagos,Business Owner,ABC Company,Father,Yes,1\n";

    const blob = new Blob([template], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "parent_import_template.csv";
    link.click();
    window.URL.revokeObjectURL(url);
  };

  const handleLinkChildrenSubmit = (selectedChildIds: string[]) => {
    if (selectedParent) {
      info(
        `Linked ${selectedChildIds.length} children to ${selectedParent.firstName} ${selectedParent.lastName}`
      );
      setLinkChildrenDialogOpen(false);
    }
  };

  // Statistics
  const stats = {
    total: parents.length,
    fathers: parents.filter((p) => p.relationshipType === "Father").length,
    mothers: parents.filter((p) => p.relationshipType === "Mother").length,
    guardians: parents.filter((p) => p.relationshipType === "Guardian").length,
    emergencyContacts: parents.filter((p) => p.isEmergencyContact).length,
    withoutChildren: parents.filter((p) => getLinkedChildren(p.id).length === 0)
      .length,
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
          <ListItemText primary="Add Parent" />
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
          <ListItemText primary="Import Parents" />
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
          <ListItemText primary="Filter Parents" />
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
          Parent Management
        </Typography>
        {!isMobile && (
          <Typography variant="body1" color="text.secondary">
            Manage parent information, emergency contacts, and student
            relationships
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
                    Total Parents
                  </Typography>
                  <Typography variant={isMobile ? "h5" : "h4"}>
                    {stats.total}
                  </Typography>
                  <Typography variant="caption" color="success.main">
                    {stats.emergencyContacts} emergency
                  </Typography>
                </Box>
                {!isMobile && (
                  <Avatar sx={{ bgcolor: "primary.light" }}>
                    <FamilyIcon />
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
                    By Type
                  </Typography>
                  <Stack direction="row" spacing={1}>
                    <Box>
                      <Typography
                        variant={isMobile ? "body1" : "h6"}
                        color="primary.main"
                      >
                        {stats.fathers}F
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        variant={isMobile ? "body1" : "h6"}
                        color="secondary.main"
                      >
                        {stats.mothers}M
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        variant={isMobile ? "body1" : "h6"}
                        color="warning.main"
                      >
                        {stats.guardians}G
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
                    Emergency Contacts
                  </Typography>
                  <Typography
                    variant={isMobile ? "h5" : "h4"}
                    color="error.main"
                  >
                    {stats.emergencyContacts}
                  </Typography>
                  <Typography variant="caption">Quick access</Typography>
                </Box>
                {!isMobile && (
                  <Avatar sx={{ bgcolor: "error.light" }}>
                    <PhoneIcon />
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
                    Unlinked
                  </Typography>
                  <Typography variant={isMobile ? "h5" : "h4"}>
                    {stats.withoutChildren}
                  </Typography>
                  <Typography variant="caption" color="warning.main">
                    Need linking
                  </Typography>
                </Box>
                {!isMobile && (
                  <Avatar sx={{ bgcolor: "warning.light" }}>
                    <LinkIcon />
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
            Filter Parents
          </Button>
          {(filterRelationship !== "all" || filterStatus !== "all") && (
            <Chip
              label="Filters Active"
              color="primary"
              size="small"
              sx={{ ml: 2 }}
              onDelete={() => {
                setFilterRelationship("all");
                setFilterStatus("all");
              }}
            />
          )}
        </Box>
      )}

      {/* Data Table */}
      <Paper sx={{ overflow: "hidden" }}>
        <DataTable<ParentData>
          title={isMobile ? "" : "Parents"}
          columns={columns}
          data={filteredParents}
          loading={loading}
          error={error}
          selectable={!isMobile}
          onSelectionChange={setSelectedParents}
          actions={{
            onView: handleView,
            onEdit: !isMobile ? handleEdit : undefined,
            onDelete: !isMobile ? handleDelete : undefined,
            custom: isMobile
              ? []
              : [
                  {
                    icon: <LinkIcon fontSize="small" />,
                    label: "Link Children",
                    onClick: handleLinkChildren,
                  },
                  {
                    icon: <KeyIcon fontSize="small" />,
                    label: "Send Credentials",
                    onClick: handleSendCredentials,
                  },
                  {
                    icon: <EmailIcon fontSize="small" />,
                    label: "Contact",
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
                    label: "Add Parent",
                    onClick: handleAdd,
                    color: "primary",
                  },
                  {
                    icon: <UploadIcon />,
                    label: "Import Parents",
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
          onRefresh={fetchParents}
          pagination
          rowsPerPageOptions={isMobile ? [5, 10] : [10, 25, 50, 100]}
          defaultRowsPerPage={isMobile ? 5 : 10}
          stickyHeader
          maxHeight={isMobile ? "calc(100vh - 400px)" : "600px"}
          dense={isMobile}
          emptyMessage="No parents found"
          emptyAction={{
            label: "Add First Parent",
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
          <Typography variant="subtitle2">Filter by Relationship</Typography>
        </MenuItem>
        <MenuItem
          onClick={() => {
            setFilterRelationship("all");
            setFilterAnchor(null);
          }}
        >
          All Relationships
        </MenuItem>
        {["Father", "Mother", "Guardian", "Other"].map((rel) => (
          <MenuItem
            key={rel}
            onClick={() => {
              setFilterRelationship(rel);
              setFilterAnchor(null);
            }}
          >
            {rel}
          </MenuItem>
        ))}
        <Divider />
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
        <MenuItem
          onClick={() => {
            setFilterStatus("emergency");
            setFilterAnchor(null);
          }}
        >
          Emergency Contacts Only
        </MenuItem>
        <MenuItem
          onClick={() => {
            setFilterStatus("non-emergency");
            setFilterAnchor(null);
          }}
        >
          Non-Emergency Only
        </MenuItem>
      </Menu>

      {/* Dialogs */}
      {formDialogOpen && (
        <ParentFormDialog
          open={formDialogOpen}
          onClose={() => setFormDialogOpen(false)}
          onSubmit={handleFormSubmit}
          parent={selectedParent}
        />
      )}

      {detailsDialogOpen && selectedParent && (
        <ParentDetailsDialog
          open={detailsDialogOpen}
          onClose={() => setDetailsDialogOpen(false)}
          parent={selectedParent}
          linkedChildren={getLinkedChildren(selectedParent.id)}
        />
      )}

      {linkChildrenDialogOpen && selectedParent && (
        <LinkChildrenDialog
          open={linkChildrenDialogOpen}
          onClose={() => setLinkChildrenDialogOpen(false)}
          onSubmit={handleLinkChildrenSubmit}
          parent={selectedParent}
          allStudents={students}
          linkedStudents={getLinkedChildren(selectedParent.id)}
        />
      )}

      {importDialogOpen && (
        <BulkImportDialog
          open={importDialogOpen}
          onClose={() => setImportDialogOpen(false)}
          onImport={handleImport}
          type="parents"
        />
      )}

      <ConfirmDialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
        onConfirm={confirmDelete}
        title="Delete Parent"
        message={`Are you sure you want to delete ${parentToDelete?.firstName} ${parentToDelete?.lastName}? This will remove all parent-student relationships.`}
        confirmText="Delete"
        cancelText="Cancel"
        severity="error"
        showAlert
        alertMessage="This action cannot be undone. Consider deactivating the parent account instead."
      />
    </Container>
  );
};

export default ParentManagement;
