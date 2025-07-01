// src/pages/admin/AddAssessmentForm.tsx
import React, { useState, useEffect } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  MenuItem,
  Snackbar,
} from "@mui/material";
import { generateClient } from "aws-amplify/api";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { customCreateAssessment } from "../../graphql/customMutations";
import { listClasses, listSubjects, listTerms } from "../../graphql/queries";

const client = generateClient();

const AddAssessmentForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [classID, setClassID] = useState("");
  const [subjectID, setSubjectID] = useState("");
  const [termID, setTermID] = useState("");
  const [classes, setClasses] = useState<{ id: string; name: string }[]>([]);
  const [subjects, setSubjects] = useState<{ id: string; name: string }[]>([]);
  const [terms, setTerms] = useState<{ id: string; termLabel: string }[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const c: any = await client.graphql(graphqlOperation(listClasses));
      setClasses(c.data.listClasses.items);
      const s: any = await client.graphql(graphqlOperation(listSubjects));
      setSubjects(s.data.listSubjects.items);
      const t: any = await client.graphql(graphqlOperation(listTerms));
      setTerms(t.data.listTerms.items);
    })();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await client.graphql(
        graphqlOperation(customCreateAssessment, {
          input: {
            title,
            assessmentDate: date,
            classID,
            subjectID,
            termID,
          },
        })
      );
      setOpen(true);
      setTitle("");
      setDate("");
      setClassID("");
      setSubjectID("");
      setTermID("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box component={Paper} p={4} m={4} maxWidth={600} mx="auto" elevation={3}>
      <Typography variant="h5" gutterBottom>
        Add Assessment
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <TextField
          label="Assessment Date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
          required
        />
        <TextField
          select
          label="Class"
          value={classID}
          onChange={(e) => setClassID(e.target.value)}
          required
        >
          {classes.map((c) => (
            <MenuItem key={c.id} value={c.id}>
              {c.name}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Subject"
          value={subjectID}
          onChange={(e) => setSubjectID(e.target.value)}
          required
        >
          {subjects.map((s) => (
            <MenuItem key={s.id} value={s.id}>
              {s.name}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label="Term"
          value={termID}
          onChange={(e) => setTermID(e.target.value)}
          required
        >
          {terms.map((t) => (
            <MenuItem key={t.id} value={t.id}>
              {t.termLabel}
            </MenuItem>
          ))}
        </TextField>
        <Button type="submit" variant="contained">
          Add
        </Button>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={2500}
        onClose={() => setOpen(false)}
        message="Assessment added!"
      />
    </Box>
  );
};

export default AddAssessmentForm;
