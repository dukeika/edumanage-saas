import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { generateClient } from "@aws-amplify/api";
import { schoolsBySubdomain } from "../../graphql/queries";
import { Box, Typography, CircularProgress, Paper, Alert } from "@mui/material";

const client = generateClient();

export default function SchoolLandingPage() {
  const { schoolDomain } = useParams<{ schoolDomain: string }>();
  const [school, setSchool] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!schoolDomain) {
      setError("No subdomain in URL.");
      setLoading(false);
      return;
    }
    client
      .graphql({
        query: schoolsBySubdomain,
        variables: { subdomain: schoolDomain },
        authMode: "apiKey",
      })
      .then((resp: any) => {
        const items = resp.data?.schoolsBySubdomain?.items;
        if (items?.length) setSchool(items[0]);
        else setError("School not found.");
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load school info.");
      })
      .finally(() => setLoading(false));
  }, [schoolDomain]);

  if (loading)
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  if (error)
    return (
      <Paper sx={{ m: 4, p: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Paper>
    );

  return (
    <Paper sx={{ maxWidth: 900, mx: "auto", my: 6, p: 4 }}>
      <Typography variant="h3" gutterBottom>
        {school.name}
      </Typography>
      <Typography variant="subtitle1">{school.address}</Typography>
      {/* …hero image, description, calendar, contact info… */}
    </Paper>
  );
}
