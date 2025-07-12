import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { generateClient } from "aws-amplify/api";
import { schoolsBySubdomain } from "../../graphql/queries";
import { Box, Typography, CircularProgress, Paper } from "@mui/material";

const client = generateClient();

export default function SchoolLandingPage() {
  const { schoolDomain } = useParams<{ schoolDomain: string }>();
  const [school, setSchool] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSchool = async () => {
      setLoading(true);
      setError(null);

      if (!schoolDomain) {
        setError("No subdomain in URL.");
        setLoading(false);
        return;
      }

      try {
        const response: any = await client.graphql({
          query: schoolsBySubdomain,
          variables: { subdomain: schoolDomain }, // use schoolDomain for your subdomain query param
          authMode: "apiKey", // Use apiKey for public landing
        });

        const items =
          response.data?.schoolsBySubdomain?.items ||
          response.data?.schoolBySubdomain?.items;
        if (items && items.length > 0) {
          setSchool(items[0]);
        } else {
          setError("School not found.");
        }
      } catch (err: any) {
        setError("Failed to load school info.");
        console.error(err);
      }
      setLoading(false);
    };

    fetchSchool();
  }, [schoolDomain]); // watch schoolDomain, not subdomain

  if (loading)
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <CircularProgress />
      </Box>
    );

  if (error)
    return (
      <Paper sx={{ m: 4, p: 4 }}>
        <Typography color="error">{error}</Typography>
      </Paper>
    );

  return (
    <Paper sx={{ maxWidth: 900, margin: "40px auto", p: 4 }}>
      <Box sx={{ textAlign: "center" }}>
        {school?.logoURL && (
          <img
            src={school.logoURL}
            alt={`${school.name} logo`}
            style={{ maxHeight: 80 }}
          />
        )}
        <Typography variant="h3" gutterBottom>
          {school?.name}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {school?.address}
        </Typography>
        {school?.heroImageURL && (
          <img
            src={school.heroImageURL}
            alt="hero"
            style={{ width: "100%", maxHeight: 300, objectFit: "cover" }}
          />
        )}
        <Typography variant="body1" sx={{ mt: 3 }}>
          {school?.description}
        </Typography>
        {/* Render calendar info if present */}
        {school?.calendarInfo && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6">Calendar:</Typography>
            <pre>
              {(() => {
                try {
                  return JSON.stringify(
                    JSON.parse(school.calendarInfo),
                    null,
                    2
                  );
                } catch {
                  return school.calendarInfo;
                }
              })()}
            </pre>
          </Box>
        )}
        {/* Contact info */}
        <Box sx={{ mt: 2 }}>
          <Typography>Email: {school?.contactEmail}</Typography>
          <Typography>Phone: {school?.phone}</Typography>
          <Typography>Website: {school?.website}</Typography>
        </Box>
      </Box>
    </Paper>
  );
}
