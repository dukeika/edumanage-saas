import React from "react";
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
} from "@mui/material";
import {
  Close as CloseIcon,
  Person as PersonIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  Home as HomeIcon,
  Work as WorkIcon,
  Warning as WarningIcon,
  School as SchoolIcon,
  ChildCare as ChildIcon,
  Edit as EditIcon,
  Print as PrintIcon,
  FamilyRestroom as FamilyIcon,
  CalendarToday as CalendarIcon,
  CreditCard as CardIcon,
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

interface ParentDetailsDialogProps {
  open: boolean;
  onClose: () => void;
  parent: Parent;
  linkedChildren: ExtendedStudent[];
}

const ParentDetailsDialog: React.FC<ParentDetailsDialogProps> = ({
  open,
  onClose,
  parent,
  linkedChildren,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const getRelationshipColor = (type: string) => {
    switch (type) {
      case "Father":
        return "primary";
      case "Mother":
        return "secondary";
      case "Guardian":
        return "warning";
      default:
        return "default";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
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
            <Typography variant="h6">Parent Details</Typography>
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
          {/* Parent Header */}
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
                    bgcolor:
                      parent.relationshipType === "Father"
                        ? "primary.main"
                        : parent.relationshipType === "Mother"
                        ? "secondary.main"
                        : "warning.main",
                    fontSize: "2rem",
                  }}
                >
                  {parent.firstName[0]}
                  {parent.lastName[0]}
                </Avatar>
                <Box flex={1} textAlign={isMobile ? "center" : "left"}>
                  <Typography variant="h5" gutterBottom>
                    {`${parent.firstName} ${parent.lastName}`}
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={1}
                    justifyContent={isMobile ? "center" : "flex-start"}
                    flexWrap="wrap"
                  >
                    <Chip
                      label={parent.relationshipType}
                      color={getRelationshipColor(parent.relationshipType)}
                      icon={<FamilyIcon />}
                    />
                    {parent.isEmergencyContact && (
                      <Chip
                        label={`Emergency Contact - Priority ${parent.emergencyContactPriority}`}
                        color="error"
                        icon={<WarningIcon />}
                      />
                    )}
                    <Chip
                      label={`${linkedChildren.length} ${
                        linkedChildren.length === 1 ? "Child" : "Children"
                      }`}
                      icon={<ChildIcon />}
                    />
                  </Stack>
                </Box>
              </Stack>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Contact Information
                  </Typography>
                  <List dense>
                    <ListItem>
                      <ListItemIcon>
                        <EmailIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Email" secondary={parent.email} />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <PhoneIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Phone" secondary={parent.phone} />
                    </ListItem>
                    {parent.alternatePhone && (
                      <ListItem>
                        <ListItemIcon>
                          <PhoneIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary="Alternate Phone"
                          secondary={parent.alternatePhone}
                        />
                      </ListItem>
                    )}
                    {parent.address && (
                      <ListItem>
                        <ListItemIcon>
                          <HomeIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText
                          primary="Address"
                          secondary={parent.address}
                        />
                      </ListItem>
                    )}
                  </List>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Employment Information
                  </Typography>
                  <List dense>
                    <ListItem>
                      <ListItemIcon>
                        <WorkIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Occupation"
                        secondary={parent.occupation || "Not specified"}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <WorkIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Employer"
                        secondary={parent.employer || "Not specified"}
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Linked Children */}
          <Card sx={{ mt: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Linked Children
              </Typography>
              {linkedChildren.length === 0 ? (
                <Box textAlign="center" py={3}>
                  <Typography color="text.secondary">
                    No children linked to this parent
                  </Typography>
                </Box>
              ) : (
                <Grid container spacing={2}>
                  {linkedChildren.map((child) => (
                    <Grid item xs={12} sm={6} key={child.id}>
                      <Card variant="outlined">
                        <CardContent>
                          <Stack
                            direction="row"
                            spacing={2}
                            alignItems="center"
                          >
                            <Avatar sx={{ bgcolor: "primary.light" }}>
                              <SchoolIcon />
                            </Avatar>
                            <Box flex={1}>
                              <Typography variant="subtitle1" fontWeight="bold">
                                {child.firstName ||
                                  child.name?.split(" ")[0] ||
                                  ""}{" "}
                                {child.lastName ||
                                  child.name?.split(" ").slice(1).join(" ") ||
                                  ""}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                Student ID:{" "}
                                {child.studentID || `STU-${child.id}`}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                Class: {child.classID}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                DOB:{" "}
                                {formatDate(child.dateOfBirth || "2010-01-01")}
                              </Typography>
                            </Box>
                          </Stack>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              )}
            </CardContent>
          </Card>

          {/* System Information */}
          <Card sx={{ mt: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                System Information
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <List dense>
                    <ListItem>
                      <ListItemIcon>
                        <CalendarIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Registration Date"
                        secondary={formatDate(
                          parent.createdAt || new Date().toISOString()
                        )}
                      />
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <List dense>
                    <ListItem>
                      <ListItemIcon>
                        <CardIcon />
                      </ListItemIcon>
                      <ListItemText primary="Parent ID" secondary={parent.id} />
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
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

export default ParentDetailsDialog;
