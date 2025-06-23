import React, { useState } from "react";
import { TextField, Button, Box, Paper, Typography } from "@mui/material";
import { generateClient } from "aws-amplify/api";
import { createSubject } from "../../graphql/mutations";

const client = generateClient();

type Props = {
  classID: string;
};

const SubjectForm: React.FC<Props> = ({ classID }) => {
  const [name, setName] = useState("");

  const handleSubmit = async () => {
    await client.graphql({
      query: createSubject,
      variables: {
        input: {
          name,
          classID,
        },
      },
    });
    setName("");
  };

  return (
    <Paper sx={{ p: 3, mb: 2 }}>
      <Typography variant="h6">Add Subject</Typography>
      <Box>
        <TextField
          fullWidth
          label="Subject Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Add Subject
        </Button>
      </Box>
    </Paper>
  );
};

export default SubjectForm;
