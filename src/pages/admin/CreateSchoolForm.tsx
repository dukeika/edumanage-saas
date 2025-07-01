// src/pages/admin/CreateSchoolForm.tsx
import React, { useState } from "react";
import { Paper, Typography, Box, TextField, Button } from "@mui/material";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { client } from "../../lib/graphqlClient";
import { customCreateSchool } from "../../graphql/customMutations";
import { GraphQLResult } from "aws-amplify/api";

type CreateSchoolResp = { createSchool: { id: string; name: string } };

const CreateSchoolForm: React.FC = () => {
  const { user } = useAuthenticator((ctx) => [ctx.user]);
  const [name, setName] = useState("");
  const [saving, setSaving] = useState(false);

  const handleSubmit = async () => {
    if (!user) return alert("Please sign in first");

    try {
      setSaving(true);

      const result = (await client.graphql<CreateSchoolResp>({
        query: customCreateSchool,
        variables: { input: { name } },
        authMode: "userPool",
      })) as GraphQLResult<CreateSchoolResp>;

      console.log("Created school:", result.data?.createSchool);
      setName("");
      alert("School created ✓");
    } catch (err) {
      console.error(err);
      alert("Something went wrong – see console");
    } finally {
      setSaving(false);
    }
  };

  return (
    <Paper sx={{ maxWidth: 480, m: "auto", p: 4 }}>
      <Typography variant="h5" gutterBottom>
        Create School
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="School Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
        />
        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={!name.trim() || saving}
        >
          {saving ? "Saving…" : "Submit"}
        </Button>
      </Box>
    </Paper>
  );
};

export default CreateSchoolForm;
