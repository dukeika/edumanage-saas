// src/pages/admin/CreateClassForm.tsx

import React, { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/api";
import { customCreateClass } from "../../graphql/customMutations";
import { listUsers, listSchools } from "../../graphql/queries";
import {
  Box,
  Button,
  TextField,
  Typography,
  Snackbar,
  Alert,
  MenuItem,
} from "@mui/material";
import * as APITypes from "../../API";

const client = generateClient();

const CreateClassForm: React.FC = () => {
  const [name, setName] = useState("");
  const [teacherID, setTeacherID] = useState("");
  const [schoolID, setSchoolID] = useState("");
  const [schools, setSchools] = useState<APITypes.School[]>([]);
  const [teachers, setTeachers] = useState<APITypes.User[]>([]);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  useEffect(() => {
    const fetchSchoolsAndTeachers = async () => {
      try {
        const schoolsResult = await client.graphql({
          query: listSchools,
        });
        const teachersResult = await client.graphql({
          query: listUsers,
        });

        const fetchedSchools = (schoolsResult as any).data.listSchools.items;
        const fetchedTeachers = (
          teachersResult as any
        ).data.listUsers.items.filter((user: any) => user.role === "Teacher");

        setSchools(fetchedSchools);
        setTeachers(fetchedTeachers);
      } catch (error) {
        console.error("Error fetching schools or teachers:", error);
      }
    };
    fetchSchoolsAndTeachers();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !schoolID || !teacherID) {
      setSnackbar({
        open: true,
        message: "Please fill in all required fields.",
        severity: "error",
      });
      return;
    }

    try {
      const input: APITypes.CreateClassInput = {
        name,
        schoolID,
        teacherID,
      };

      await client.graphql({
        query: customCreateClass,
        variables: { input },
      });

      setSnackbar({
        open: true,
        message: "Class created successfully!",
        severity: "success",
      });

      setName("");
      setTeacherID("");
      setSchoolID("");
    } catch (error) {
      console.error("Error creating class:", error);
      setSnackbar({
        open: true,
        message: "Error creating class.",
        severity: "error",
      });
    }
  };

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Create New Class
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Class Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          select
          label="Select School"
          value={schoolID}
          onChange={(e) => setSchoolID(e.target.value)}
          fullWidth
          margin="normal"
          required
        >
          {schools.map((school) => (
            <MenuItem key={school.id} value={school.id}>
              {school.name}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Select Teacher"
          value={teacherID}
          onChange={(e) => setTeacherID(e.target.value)}
          fullWidth
          margin="normal"
          required
        >
          {teachers.map((teacher) => (
            <MenuItem key={teacher.id} value={teacher.id}>
              {teacher.name}
            </MenuItem>
          ))}
        </TextField>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Create Class
        </Button>
      </form>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert severity={snackbar.severity as "success" | "error"}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default CreateClassForm;
