// src/components/appadmin/EditUserDialog.tsx
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  Stack,
} from "@mui/material";

const ROLES = [
  { value: "applicationadmins", label: "Application Admin" },
  { value: "admins", label: "School Admin" },
  { value: "teachers", label: "Teacher" },
  { value: "students", label: "Student" },
  { value: "parents", label: "Parent" },
];

export interface UserInput {
  id?: string;
  name: string;
  email: string;
  role: string;
  schoolID?: string;
}

interface EditUserDialogProps {
  open: boolean;
  onClose: () => void;
  onSave: (input: UserInput) => void;
  user?: UserInput | null;
}

const EditUserDialog: React.FC<EditUserDialogProps> = ({
  open,
  onClose,
  onSave,
  user,
}) => {
  const [form, setForm] = useState<UserInput>({
    name: "",
    email: "",
    role: "teachers",
    schoolID: "",
  });

  useEffect(() => {
    if (user) {
      setForm({
        id: user.id,
        name: user.name || "",
        email: user.email || "",
        role: user.role || "teachers",
        schoolID: user.schoolID || "",
      });
    } else {
      setForm({ name: "", email: "", role: "teachers", schoolID: "" });
    }
  }, [user, open]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.role) return;
    onSave(form);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>{user ? "Edit User" : "Invite User"}</DialogTitle>
      <DialogContent>
        <Stack spacing={2} sx={{ mt: 1 }}>
          <TextField
            label="Full Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            fullWidth
            autoFocus
          />
          <TextField
            label="Email Address"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            type="email"
            fullWidth
          />
          <TextField
            label="Role"
            name="role"
            value={form.role}
            onChange={handleChange}
            select
            fullWidth
            required
          >
            {ROLES.map((role) => (
              <MenuItem key={role.value} value={role.value}>
                {role.label}
              </MenuItem>
            ))}
          </TextField>
          {/* Optional: SchoolID (useful for multi-school setups) */}
          <TextField
            label="School ID"
            name="schoolID"
            value={form.schoolID}
            onChange={handleChange}
            fullWidth
            disabled={form.role === "applicationadmins"}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="inherit">
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          disabled={!form.name || !form.email || !form.role}
        >
          {user ? "Save Changes" : "Invite"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditUserDialog;
