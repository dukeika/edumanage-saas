import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Chip,
  Avatar,
  Button,
  Stack,
} from "@mui/material";
import {
  Delete as DeleteIcon,
  GroupAdd as GroupAddIcon,
  Email as EmailIcon,
  Block as BlockIcon,
  CheckCircle as CheckCircleIcon,
} from "@mui/icons-material";
import { DataTable, Column } from "../../components/common/DataTable";
import { useNotification } from "../../components/NotificationProvider";

// Sample data type
interface Teacher {
  id: string;
  name: string;
  email: string;
  subject: string;
  classes: string[];
  status: "active" | "inactive";
  joinDate: string;
  avatar?: string;
}

// Sample data
const sampleTeachers: Teacher[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@school.com",
    subject: "Mathematics",
    classes: ["JSS 1A", "JSS 2B"],
    status: "active",
    joinDate: "2023-09-01",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@school.com",
    subject: "English",
    classes: ["Primary 5", "Primary 6"],
    status: "active",
    joinDate: "2023-08-15",
  },
  {
    id: "3",
    name: "Michael Johnson",
    email: "michael.j@school.com",
    subject: "Physics",
    classes: ["SSS 1", "SSS 2"],
    status: "inactive",
    joinDate: "2022-01-10",
  },
  {
    id: "4",
    name: "Sarah Williams",
    email: "sarah.w@school.com",
    subject: "Chemistry",
    classes: ["SSS 2", "SSS 3"],
    status: "active",
    joinDate: "2023-03-20",
  },
  {
    id: "5",
    name: "David Brown",
    email: "david.b@school.com",
    subject: "History",
    classes: ["JSS 3", "SSS 1"],
    status: "active",
    joinDate: "2023-06-01",
  },
];

const DataTableDemo: React.FC = () => {
  const [teachers, setTeachers] = useState<Teacher[]>(sampleTeachers);
  const [loading, setLoading] = useState(false);
  const { success, error, warning } = useNotification();

  // Define columns
  const columns: Column<Teacher>[] = [
    {
      id: "name",
      label: "Teacher Name",
      format: (value, row) => (
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar sx={{ width: 32, height: 32 }}>
            {row.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </Avatar>
          <Typography variant="body2">{value}</Typography>
        </Stack>
      ),
    },
    {
      id: "email",
      label: "Email",
    },
    {
      id: "subject",
      label: "Subject",
      format: (value) => (
        <Chip label={value} size="small" color="primary" variant="outlined" />
      ),
    },
    {
      id: "classes",
      label: "Classes",
      format: (value: string[]) => (
        <Stack direction="row" spacing={0.5}>
          {value.slice(0, 2).map((cls, index) => (
            <Chip key={index} label={cls} size="small" />
          ))}
          {value.length > 2 && (
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
      id: "status",
      label: "Status",
      format: (value) => (
        <Chip
          label={value}
          size="small"
          color={value === "active" ? "success" : "default"}
          icon={value === "active" ? <CheckCircleIcon /> : <BlockIcon />}
        />
      ),
    },
    {
      id: "joinDate",
      label: "Join Date",
      format: (value) =>
        new Date(value).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
    },
  ];

  // Handlers
  const handleView = (teacher: Teacher) => {
    success(`Viewing ${teacher.name}'s profile`);
  };

  const handleEdit = (teacher: Teacher) => {
    success(`Editing ${teacher.name}'s information`);
  };

  const handleDelete = (teacher: Teacher) => {
    if (window.confirm(`Are you sure you want to delete ${teacher.name}?`)) {
      setTeachers(teachers.filter((t) => t.id !== teacher.id));
      error(`${teacher.name} has been deleted`);
    }
  };

  const handleBulkDelete = (selected: Teacher[]) => {
    if (window.confirm(`Delete ${selected.length} teachers?`)) {
      const selectedIds = selected.map((t) => t.id);
      setTeachers(teachers.filter((t) => !selectedIds.includes(t.id)));
      error(`${selected.length} teachers deleted`);
    }
  };

  const handleBulkEmail = (selected: Teacher[]) => {
    const emails = selected.map((t) => t.email).join(", ");
    warning(`Opening email client for: ${emails}`);
  };

  const handleAddTeacher = () => {
    success("Add Teacher dialog would open here");
  };

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      success("Data refreshed successfully");
    }, 1500);
  };

  const handleAssignClass = (teacher: Teacher) => {
    success(`Assign class dialog for ${teacher.name}`);
  };

  const handleSendCredentials = (teacher: Teacher) => {
    success(`Login credentials sent to ${teacher.email}`);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        DataTable Component Demo
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        This demonstrates all the features of our reusable DataTable component.
      </Typography>

      <DataTable<Teacher>
        title="Teacher Management"
        columns={columns}
        data={teachers}
        loading={loading}
        // Selection
        selectable
        onSelectionChange={(selected) => console.log("Selected:", selected)}
        // Actions
        actions={{
          onView: handleView,
          onEdit: handleEdit,
          onDelete: handleDelete,
          custom: [
            {
              icon: <GroupAddIcon fontSize="small" />,
              label: "Assign Class",
              onClick: handleAssignClass,
            },
            {
              icon: <EmailIcon fontSize="small" />,
              label: "Send Credentials",
              onClick: handleSendCredentials,
            },
          ],
        }}
        // Bulk Actions
        bulkActions={[
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
        ]}
        // Toolbar Actions
        toolbarActions={[
          {
            icon: <GroupAddIcon />,
            label: "Add Teacher",
            onClick: handleAddTeacher,
            color: "primary",
          },
        ]}
        // Features
        searchable
        exportable
        refreshable
        onRefresh={handleRefresh}
        // Pagination
        pagination
        rowsPerPageOptions={[5, 10, 25]}
        defaultRowsPerPage={5}
        // Styling
        stickyHeader
        maxHeight="600px"
        // Row customization
        getRowId={(row) => row.id}
        isRowSelectable={(row) => row.status === "active"}
        // Empty state
        emptyMessage="No teachers found"
        emptyAction={{
          label: "Add First Teacher",
          onClick: handleAddTeacher,
        }}
      />

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Features Demonstrated:
        </Typography>
        <Stack spacing={1}>
          <Typography variant="body2">
            ✅ Sorting (click column headers)
          </Typography>
          <Typography variant="body2">
            ✅ Searching (type in search box)
          </Typography>
          <Typography variant="body2">
            ✅ Pagination (bottom controls)
          </Typography>
          <Typography variant="body2">
            ✅ Selection (checkboxes - only active teachers)
          </Typography>
          <Typography variant="body2">
            ✅ Row actions (View, Edit, Delete, More)
          </Typography>
          <Typography variant="body2">
            ✅ Bulk actions (appear when rows selected)
          </Typography>
          <Typography variant="body2">
            ✅ Export to CSV (download icon)
          </Typography>
          <Typography variant="body2">
            ✅ Refresh data (refresh icon)
          </Typography>
          <Typography variant="body2">
            ✅ Custom formatting (status chips, class chips)
          </Typography>
          <Typography variant="body2">✅ Empty state handling</Typography>
        </Stack>
      </Box>
    </Container>
  );
};

export default DataTableDemo;
