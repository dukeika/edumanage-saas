// src/pages/admin/AddSubjectForm.tsx

import React, { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/api";
import { customCreateSubject } from "../../graphql/customMutations";
import { listClasses } from "../../graphql/queries";
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

const AddSubjectForm: React.FC = () => {
  const [name, setName] = useState("");
  const [classID, setClassID] = useState("");
  const [classes, setClasses] = useState<APITypes.Class[]>([]);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const result = await client.graphql({
          query: listClasses,
        });
        const fetchedClasses = (result as any).data.listClasses.items;
        setClasses(fetchedClasses);
      } catch (error) {
        console.error("Error fetching classes:", error);
      }
    };
    fetchClasses();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !classID) {
      setSnackbar({
        open: true,
        message: "Please fill in all required fields.",
        severity: "error",
      });
      return;
    }

    try {
      const input: APITypes.CreateSubjectInput = {
        name,
        classID,
      };

      await client.graphql({
        query: customCreateSubject,
        variables: { input },
      });

      setSnackbar({
        open: true,
        message: "Subject created successfully!",
        severity: "success",
      });
      setName("");
      setClassID("");
    } catch (error) {
      console.error("Error creating subject:", error);
      setSnackbar({
        open: true,
        message: "Error creating subject.",
        severity: "error",
      });
    }
  };

  return (
    <Box sx={{ maxWidth: 500, mx: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Add New Subject
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Subject Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          select
          label="Select Class"
          value={classID}
          onChange={(e) => setClassID(e.target.value)}
          fullWidth
          margin="normal"
          required
        >
          {classes.map((cls) => (
            <MenuItem key={cls.id} value={cls.id}>
              {cls.name}
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
          Add Subject
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

export default AddSubjectForm;
