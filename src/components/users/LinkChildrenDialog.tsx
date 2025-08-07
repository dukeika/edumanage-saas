import React, { useState, useMemo } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox,
  TextField,
  InputAdornment,
  Chip,
  Avatar,
  Alert,
  Divider,
  Stack,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Close as CloseIcon,
  Search as SearchIcon,
  Link as LinkIcon,
  ChildCare as ChildIcon,
  School as SchoolIcon,
  CheckCircle as CheckCircleIcon,
  Warning as WarningIcon,
  FilterList as FilterIcon,
} from "@mui/icons-material";

// Define interfaces
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

interface ExtendedStudent {
  id: string;
  name?: string | null;
  firstName?: string;
  lastName?: string;
  classID: string;
  schoolID: string;
  studentID?: string;
  dateOfBirth?: string;
  createdAt?: string | null;
  updatedAt?: string | null;
}

interface LinkChildrenDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (selectedChildIds: string[]) => void;
  parent: Parent;
  allStudents: ExtendedStudent[];
  linkedStudents: ExtendedStudent[];
}

interface LinkDetails {
  relationship: string;
  isPrimaryContact: boolean;
  hasPickupRights: boolean;
  hasAccessToGrades: boolean;
  hasAccessToAttendance: boolean;
  legalCustody: boolean;
}

const LinkChildrenDialog: React.FC<LinkChildrenDialogProps> = ({
  open,
  onClose,
  onSubmit,
  parent,
  allStudents,
  linkedStudents,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [selectedIds, setSelectedIds] = useState<string[]>(
    linkedStudents.map((s) => s.id)
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [classFilter, setClassFilter] = useState<string>("all");
  const [linkDetails, setLinkDetails] = useState<Record<string, LinkDetails>>(
    {}
  );

  // Get unique classes
  const classes = useMemo(() => {
    const uniqueClasses = new Set(allStudents.map((s) => s.classID));
    return Array.from(uniqueClasses);
  }, [allStudents]);

  // Filter students
  const filteredStudents = useMemo(() => {
    return allStudents.filter((student) => {
      const firstName = student.firstName || student.name?.split(" ")[0] || "";
      const lastName =
        student.lastName || student.name?.split(" ").slice(1).join(" ") || "";
      const studentId = student.studentID || `STU-${student.id}`;

      const matchesSearch =
        firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        studentId.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesClass =
        classFilter === "all" || student.classID === classFilter;

      return matchesSearch && matchesClass;
    });
  }, [allStudents, searchQuery, classFilter]);

  // Initialize link details for already linked students
  React.useEffect(() => {
    const initialDetails: Record<string, LinkDetails> = {};
    linkedStudents.forEach((student) => {
      initialDetails[student.id] = {
        relationship: parent.relationshipType,
        isPrimaryContact: true,
        hasPickupRights: true,
        hasAccessToGrades: true,
        hasAccessToAttendance: true,
        legalCustody: true,
      };
    });
    setLinkDetails(initialDetails);
  }, [linkedStudents, parent.relationshipType]);

  const handleToggle = (studentId: string) => {
    const currentIndex = selectedIds.indexOf(studentId);
    const newSelected = [...selectedIds];

    if (currentIndex === -1) {
      newSelected.push(studentId);
      // Initialize link details for new selection
      if (!linkDetails[studentId]) {
        setLinkDetails({
          ...linkDetails,
          [studentId]: {
            relationship: parent.relationshipType,
            isPrimaryContact: false,
            hasPickupRights: true,
            hasAccessToGrades: true,
            hasAccessToAttendance: true,
            legalCustody: false,
          },
        });
      }
    } else {
      newSelected.splice(currentIndex, 1);
      // Remove link details
      const newDetails = { ...linkDetails };
      delete newDetails[studentId];
      setLinkDetails(newDetails);
    }

    setSelectedIds(newSelected);
  };

  const handleSubmit = () => {
    // In a real implementation, you would also pass linkDetails
    onSubmit(selectedIds);
  };

  const isLinked = (studentId: string) => {
    return linkedStudents.some((s) => s.id === studentId);
  };

  const getStudentAge = (dateOfBirth?: string) => {
    if (!dateOfBirth) return "N/A";
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
    return `${age} years`;
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
            <LinkIcon />
            <Typography variant="h6">
              Link Children to {parent.firstName} {parent.lastName}
            </Typography>
          </Box>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent dividers>
        <Box sx={{ mb: 2 }}>
          <Alert severity="info" sx={{ mb: 2 }}>
            Select the children to link with this parent. You can configure
            access permissions for each child.
          </Alert>

          {/* Search and Filter */}
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} sm={8}>
              <TextField
                fullWidth
                size="small"
                placeholder="Search by name or student ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth size="small">
                <InputLabel>Filter by Class</InputLabel>
                <Select
                  value={classFilter}
                  onChange={(e) => setClassFilter(e.target.value)}
                  label="Filter by Class"
                  startAdornment={
                    <FilterIcon sx={{ mr: 1, color: "action.active" }} />
                  }
                >
                  <MenuItem value="all">All Classes</MenuItem>
                  {classes.map((cls) => (
                    <MenuItem key={cls} value={cls}>
                      {cls}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          {/* Summary */}
          <Card variant="outlined" sx={{ mb: 2 }}>
            <CardContent sx={{ py: 1 }}>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="body2" color="text.secondary">
                  {selectedIds.length} children selected
                </Typography>
                <Stack direction="row" spacing={1}>
                  <Chip
                    label={`${linkedStudents.length} already linked`}
                    size="small"
                    color="success"
                    icon={<CheckCircleIcon />}
                  />
                  <Chip
                    label={`${selectedIds.length - linkedStudents.length} new`}
                    size="small"
                    color="primary"
                    icon={<ChildIcon />}
                  />
                </Stack>
              </Stack>
            </CardContent>
          </Card>

          {/* Students List */}
          <List sx={{ maxHeight: 400, overflow: "auto" }}>
            {filteredStudents.length === 0 ? (
              <Box textAlign="center" py={4}>
                <Typography color="text.secondary">
                  No students found matching your criteria
                </Typography>
              </Box>
            ) : (
              filteredStudents.map((student) => {
                const isChecked = selectedIds.includes(student.id);
                const wasLinked = isLinked(student.id);
                const firstName =
                  student.firstName || student.name?.split(" ")[0] || "";
                const lastName =
                  student.lastName ||
                  student.name?.split(" ").slice(1).join(" ") ||
                  "";
                const studentId = student.studentID || `STU-${student.id}`;
                const dateOfBirth = student.dateOfBirth || "2010-01-01";

                return (
                  <React.Fragment key={student.id}>
                    <ListItem
                      disablePadding
                      sx={{
                        bgcolor: isChecked ? "action.selected" : "transparent",
                      }}
                    >
                      <ListItemButton
                        onClick={() => handleToggle(student.id)}
                        dense
                      >
                        <ListItemIcon>
                          <Checkbox
                            edge="start"
                            checked={isChecked}
                            tabIndex={-1}
                            disableRipple
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems="center"
                            >
                              <Avatar
                                sx={{
                                  width: 32,
                                  height: 32,
                                  bgcolor: "primary.light",
                                }}
                              >
                                <SchoolIcon fontSize="small" />
                              </Avatar>
                              <Box>
                                <Typography variant="body2" fontWeight="medium">
                                  {firstName} {lastName}
                                </Typography>
                                <Typography
                                  variant="caption"
                                  color="text.secondary"
                                >
                                  ID: {studentId} | Class: {student.classID} |
                                  Age: {getStudentAge(dateOfBirth)}
                                </Typography>
                              </Box>
                            </Stack>
                          }
                        />
                        <ListItemSecondaryAction>
                          <Stack
                            direction="row"
                            spacing={1}
                            alignItems="center"
                          >
                            {wasLinked && (
                              <Chip
                                label="Already Linked"
                                size="small"
                                color="success"
                                icon={<CheckCircleIcon />}
                              />
                            )}
                          </Stack>
                        </ListItemSecondaryAction>
                      </ListItemButton>
                    </ListItem>

                    {/* Permissions Section (shown when selected) */}
                    {isChecked && linkDetails[student.id] && (
                      <Box
                        sx={{ pl: 7, pr: 2, py: 1, bgcolor: "action.hover" }}
                      >
                        <Grid container spacing={1}>
                          <Grid item xs={12} sm={6}>
                            <FormControl
                              fullWidth
                              size="small"
                              variant="outlined"
                            >
                              <InputLabel>Relationship</InputLabel>
                              <Select
                                value={linkDetails[student.id].relationship}
                                onChange={(e) =>
                                  setLinkDetails({
                                    ...linkDetails,
                                    [student.id]: {
                                      ...linkDetails[student.id],
                                      relationship: e.target.value,
                                    },
                                  })
                                }
                                label="Relationship"
                              >
                                <MenuItem value="Father">Father</MenuItem>
                                <MenuItem value="Mother">Mother</MenuItem>
                                <MenuItem value="Guardian">Guardian</MenuItem>
                                <MenuItem value="Step-Father">
                                  Step-Father
                                </MenuItem>
                                <MenuItem value="Step-Mother">
                                  Step-Mother
                                </MenuItem>
                                <MenuItem value="Other">Other</MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Stack direction="row" spacing={1} flexWrap="wrap">
                              <Chip
                                label="Primary Contact"
                                size="small"
                                color={
                                  linkDetails[student.id].isPrimaryContact
                                    ? "primary"
                                    : "default"
                                }
                                onClick={() =>
                                  setLinkDetails({
                                    ...linkDetails,
                                    [student.id]: {
                                      ...linkDetails[student.id],
                                      isPrimaryContact:
                                        !linkDetails[student.id]
                                          .isPrimaryContact,
                                    },
                                  })
                                }
                              />
                              <Chip
                                label="Pickup Rights"
                                size="small"
                                color={
                                  linkDetails[student.id].hasPickupRights
                                    ? "success"
                                    : "default"
                                }
                                onClick={() =>
                                  setLinkDetails({
                                    ...linkDetails,
                                    [student.id]: {
                                      ...linkDetails[student.id],
                                      hasPickupRights:
                                        !linkDetails[student.id]
                                          .hasPickupRights,
                                    },
                                  })
                                }
                              />
                              <Chip
                                label="Legal Custody"
                                size="small"
                                color={
                                  linkDetails[student.id].legalCustody
                                    ? "error"
                                    : "default"
                                }
                                onClick={() =>
                                  setLinkDetails({
                                    ...linkDetails,
                                    [student.id]: {
                                      ...linkDetails[student.id],
                                      legalCustody:
                                        !linkDetails[student.id].legalCustody,
                                    },
                                  })
                                }
                              />
                            </Stack>
                          </Grid>
                        </Grid>
                      </Box>
                    )}
                    <Divider />
                  </React.Fragment>
                );
              })
            )}
          </List>
        </Box>
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <Button onClick={onClose} variant="outlined">
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          startIcon={<LinkIcon />}
        >
          Update Links ({selectedIds.length})
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LinkChildrenDialog;
