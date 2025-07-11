import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { generateClient } from "@aws-amplify/api";
import { schoolsBySubdomain } from "../../graphql/queries";
import { Box, Typography, Grid, Button, Paper, Divider } from "@mui/material";

// Amplify v6 API client
const client = generateClient();

interface School {
  id: string;
  name: string;
  address?: string | null;
  subdomain: string;
  logoURL?: string | null;
  heroImageURL?: string | null;
  description?: string | null;
  contactEmail?: string | null;
  phone?: string | null;
  website?: string | null;
  calendarInfo?: string | null; // AWSJSON
}

const SchoolLandingPage: React.FC = () => {
  const { schoolDomain } = useParams<{ schoolDomain: string }>();
  const [school, setSchool] = useState<School | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSchool() {
      setLoading(true);
      try {
        if (!schoolDomain) throw new Error("No school domain in URL");

        const { data } = (await client.graphql({
          query: schoolsBySubdomain,
          variables: { subdomain: schoolDomain },
          authMode: "aws_iam" as any, // Allow public/unauth access
        })) as any;

        const found = data?.schoolsBySubdomain?.items?.[0] ?? null;
        setSchool(found);
      } catch (err) {
        setSchool(null);
      }
      setLoading(false);
    }
    fetchSchool();
  }, [schoolDomain]);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="60vh"
      >
        <Typography variant="h6">Loading school...</Typography>
      </Box>
    );
  }
  if (!school) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="60vh"
      >
        <Typography variant="h6" color="error">
          School not found.
        </Typography>
      </Box>
    );
  }

  return (
    <Box minHeight="100vh" sx={{ background: "#f5f6fa", py: 4 }}>
      {/* Header & Hero Section */}
      <Box
        sx={{
          maxWidth: 960,
          mx: "auto",
          mb: 4,
          p: 3,
          background: "#fff",
          borderRadius: 3,
          boxShadow: 2,
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid size={{ xs: 12, md: 3 }}>
            {school.logoURL ? (
              <img
                src={school.logoURL}
                alt="School Logo"
                style={{ width: "100%", maxHeight: 100, objectFit: "contain" }}
              />
            ) : (
              <Box
                width="100%"
                height={100}
                bgcolor="#eee"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize={28}
                fontWeight={700}
                color="#999"
                borderRadius={2}
              >
                No Logo
              </Box>
            )}
          </Grid>
          <Grid size={{ xs: 12, md: 9 }}>
            <Typography variant="h3" fontWeight={700} gutterBottom>
              {school.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {school.address}
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Hero Image or Description */}
      {school.heroImageURL ? (
        <Box
          sx={{
            maxWidth: 960,
            mx: "auto",
            mb: 3,
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: 1,
          }}
        >
          <img
            src={school.heroImageURL}
            alt="School Hero"
            style={{ width: "100%", maxHeight: 300, objectFit: "cover" }}
          />
        </Box>
      ) : null}

      {/* School Description & Info */}
      <Box
        sx={{
          maxWidth: 960,
          mx: "auto",
          p: 3,
          background: "#fff",
          borderRadius: 3,
          boxShadow: 2,
        }}
      >
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography variant="h5" gutterBottom>
              About {school.name}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {school.description || "No school description yet."}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography variant="subtitle1" fontWeight={600}>
              Contact Information
            </Typography>
            <Typography variant="body2">
              <strong>Email:</strong> {school.contactEmail || "N/A"}
            </Typography>
            <Typography variant="body2">
              <strong>Phone:</strong> {school.phone || "N/A"}
            </Typography>
            <Typography variant="body2">
              <strong>Website:</strong>{" "}
              {school.website ? (
                <a
                  href={school.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {school.website}
                </a>
              ) : (
                "N/A"
              )}
            </Typography>
          </Grid>

          {/* School Calendar (simple JSON to table if available) */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              School Calendar
            </Typography>
            <Paper sx={{ p: 2, minHeight: 120 }}>
              {school.calendarInfo ? (
                <CalendarDisplay calendarInfo={school.calendarInfo} />
              ) : (
                <Typography variant="body2" color="text.secondary">
                  No calendar data available.
                </Typography>
              )}
            </Paper>
            {/* Login button */}
            <Box mt={3} textAlign="center">
              <Button
                variant="contained"
                size="large"
                href="/login"
                sx={{ fontWeight: 700, borderRadius: 2 }}
              >
                Login
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

// Helper to display calendar JSON as a table
function CalendarDisplay({ calendarInfo }: { calendarInfo: string }) {
  let items: { event: string; date: string }[] = [];
  try {
    const data = JSON.parse(calendarInfo);
    items = Array.isArray(data) ? data : [];
  } catch {
    return <Typography variant="body2">Invalid calendar format.</Typography>;
  }
  if (!items.length)
    return (
      <Typography variant="body2" color="text.secondary">
        No upcoming events.
      </Typography>
    );
  return (
    <Box component="table" sx={{ width: "100%", fontSize: 14 }}>
      <tbody>
        {items.map((event, i) => (
          <tr key={i}>
            <td>
              <strong>{event.event}</strong>
            </td>
            <td style={{ paddingLeft: 8 }}>{event.date}</td>
          </tr>
        ))}
      </tbody>
    </Box>
  );
}

export default SchoolLandingPage;
