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
  Radio,
  TextField,
  InputAdornment,
  Chip,
  Avatar,
  Alert,
  Stack,
  IconButton,
  useTheme,
  useMediaQuery,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import {
  Close as CloseIcon,
  Search as SearchIcon,
  Person as PersonIcon,
  School as SchoolIcon,
  Email as EmailIcon,
  Check as CheckIcon,
  Class as ClassIcon,
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

interface AssignTeacherDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (teacherId: string) => void;
  classData: ClassData;
  teachers: User[];
  currentTeacherId?: string | null;
}

const AssignTeacherDialog: React.FC<AssignTeacherDialogProps> = ({
  open,
  onClose,
  onSubmit,
  classData,
  teachers,
  currentTeacherId,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [selectedTeacherId, setSelectedTeacherId] = useState<string>(
    currentTeacherId || ""
  );
  const [searchQuery, setSearchQuery] = useState("");

  // Filter teachers
  const availableTeachers = useMemo(() => {
    return teachers.filter((teacher) => {
      const matchesSearch =
        teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        teacher.email.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesSearch;
    });
  }, [teachers, searchQuery]);

  const handleSubmit = () => {
    if (selectedTeacherId) {
      onSubmit(selectedTeacherId);
    }
  };

  const currentTeacher = teachers.find((t) => t.id === currentTeacherId);
  const selectedTeacher = teachers.find((t) => t.id === selectedTeacherId);

  // Mock data for teacher load (number of classes they're teaching)
  const getTeacherLoad = (teacherId: string): number => {
    // In real implementation, this would count actual classes
    return Math.floor(Math.random() * 5) + 1;
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
            <PersonIcon />
            <Typography variant="h6">
              Assign Teacher to {classData.name}
            </Typography>
          </Box>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent dividers>
        <Box sx={{ mb: 2 }}>
          {/* Current Teacher Info */}
          {currentTeacher && (
            <Alert severity="info" sx={{ mb: 2 }}>
              <Typography variant="body2">
                Current teacher: <strong>{currentTeacher.name}</strong>
              </Typography>
            </Alert>
          )}

          {/* Search */}
          <TextField
            fullWidth
            size="small"
            placeholder="Search teachers by name or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{ mb: 2 }}
          />

          {/* Selected Teacher Preview */}
          {selectedTeacher && selectedTeacher.id !== currentTeacherId && (
            <Card
              sx={{
                mb: 2,
                bgcolor: (alpha) => alpha.palette.primary.main + "10",
              }}
            >
              <CardContent sx={{ py: 1 }}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar sx={{ bgcolor: "primary.main" }}>
                    {selectedTeacher.name.charAt(0)}
                  </Avatar>
                  <Box flex={1}>
                    <Typography variant="subtitle2">
                      Selected: {selectedTeacher.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      This teacher will be assigned to {classData.name}
                    </Typography>
                  </Box>
                  <CheckIcon color="primary" />
                </Stack>
              </CardContent>
            </Card>
          )}

          {/* Teachers List */}
          <Typography variant="subtitle2" gutterBottom>
            Available Teachers ({availableTeachers.length})
          </Typography>

          <List sx={{ maxHeight: 400, overflow: "auto" }}>
            {availableTeachers.length === 0 ? (
              <Box textAlign="center" py={4}>
                <Typography color="text.secondary">
                  No teachers found matching your criteria
                </Typography>
              </Box>
            ) : (
              availableTeachers.map((teacher) => {
                const isSelected = selectedTeacherId === teacher.id;
                const isCurrent = currentTeacherId === teacher.id;
                const teacherLoad = getTeacherLoad(teacher.id);

                return (
                  <ListItem
                    key={teacher.id}
                    disablePadding
                    sx={{
                      bgcolor: isSelected ? "action.selected" : "transparent",
                    }}
                  >
                    <ListItemButton
                      onClick={() => setSelectedTeacherId(teacher.id)}
                      disabled={isCurrent}
                    >
                      <ListItemIcon>
                        <Radio
                          edge="start"
                          checked={isSelected}
                          tabIndex={-1}
                          disableRipple
                          disabled={isCurrent}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={
                          <Stack
                            direction="row"
                            spacing={1}
                            alignItems="center"
                          >
                            <Avatar sx={{ width: 32, height: 32 }}>
                              {teacher.name.charAt(0)}
                            </Avatar>
                            <Box>
                              <Typography
                                variant="body2"
                                fontWeight={isSelected ? "bold" : "normal"}
                              >
                                {teacher.name}
                              </Typography>
                              <Typography
                                variant="caption"
                                color="text.secondary"
                              >
                                {teacher.email}
                              </Typography>
                            </Box>
                          </Stack>
                        }
                        secondary={
                          <Stack direction="row" spacing={1} sx={{ mt: 0.5 }}>
                            <Chip
                              label={`${teacherLoad} ${
                                teacherLoad === 1 ? "class" : "classes"
                              }`}
                              size="small"
                              icon={<ClassIcon />}
                              color={teacherLoad > 4 ? "warning" : "default"}
                            />
                            {isCurrent && (
                              <Chip
                                label="Current Teacher"
                                size="small"
                                color="primary"
                                icon={<CheckIcon />}
                              />
                            )}
                          </Stack>
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                );
              })
            )}
          </List>

          <Divider sx={{ my: 2 }} />

          {/* Information */}
          <Alert severity="info" icon={<InfoIcon />}>
            <Typography variant="body2">
              <strong>Teacher Responsibilities:</strong>
              <ul style={{ margin: "8px 0 0 0", paddingLeft: "20px" }}>
                <li>Take daily attendance</li>
                <li>Monitor student progress</li>
                <li>Communicate with parents</li>
                <li>Manage class discipline</li>
                <li>Coordinate with subject teachers</li>
              </ul>
            </Typography>
          </Alert>
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
          disabled={
            !selectedTeacherId || selectedTeacherId === currentTeacherId
          }
        >
          Assign Teacher
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AssignTeacherDialog;
