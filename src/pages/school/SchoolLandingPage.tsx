import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { generateClient } from "@aws-amplify/api";
import { listSchools } from "../../graphql/queries";

function parseDynamoArr(arr: any[]): any[] {
  if (!Array.isArray(arr)) return [];
  return arr.map((item) => {
    if (item && typeof item === "object" && !item.M) return item;
    if (!item?.M) return {};
    const out: any = {};
    for (const [k, v] of Object.entries(item.M)) {
      const vv = v as any;
      out[k] = vv.S ?? vv.N ?? vv.BOOL ?? null;
    }
    return out;
  });
}

function cleanUrl(url: string | null | undefined) {
  if (!url) return "";
  return url.split("?")[0]; // Remove signed query params if any
}

export default function SchoolLandingPage() {
  const { schoolDomain } = useParams<{ schoolDomain: string }>();
  const [school, setSchool] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!schoolDomain) return;
    setLoading(true);
    const fetchSchool = async () => {
      try {
        const client = generateClient();
        const res: any = await client.graphql({
          query: listSchools,
          variables: { filter: { subdomain: { eq: schoolDomain } } },
          authMode: "apiKey", // Or use correct mode if you have different setup
        });
        const item =
          res?.data?.listSchools?.items?.find((s: any) => !!s) || null;
        if (!item) {
          setError("School not found.");
        } else {
          setSchool(item);
        }
      } catch (err) {
        setError("Failed to load school info.");
      } finally {
        setLoading(false);
      }
    };
    fetchSchool();
  }, [schoolDomain]);

  if (loading)
    return (
      <Box p={8} display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    );

  if (error)
    return (
      <Box p={8} display="flex" justifyContent="center">
        <Alert severity="error">{error}</Alert>
      </Box>
    );

  if (!school) return null;

  // Parse arrays if needed
  const calendar = parseDynamoArr(school.calendar);
  const news = parseDynamoArr(school.news);

  return (
    <Box bgcolor="#f7faff" minHeight="100vh">
      {/* Logo top-right */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          p: 2,
        }}
      >
        {school.logoURL && (
          <img
            src={cleanUrl(school.logoURL)}
            alt={school.name}
            style={{
              height: 60,
              width: 60,
              objectFit: "contain",
              borderRadius: 10,
              background: "#fff",
              boxShadow: "0 2px 10px 0 rgba(0,0,0,0.03)",
            }}
          />
        )}
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        px={2}
      >
        <Typography
          variant="h2"
          align="center"
          fontWeight={700}
          color="primary"
          mb={2}
        >
          {school.name}
        </Typography>
        {/* Hero Image */}
        {school.heroImageURL && (
          <Paper
            elevation={5}
            sx={{
              width: "100%",
              maxWidth: 900,
              mb: 4,
              borderRadius: 3,
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={cleanUrl(school.heroImageURL)}
              alt="School Hero"
              style={{
                width: "100%",
                maxHeight: 350,
                objectFit: "cover",
                borderRadius: 10,
              }}
            />
          </Paper>
        )}

        <Paper
          sx={{
            p: { xs: 2, md: 4 },
            mb: 4,
            width: "100%",
            maxWidth: 800,
            borderRadius: 3,
            boxShadow: 2,
          }}
        >
          <Typography
            variant="h5"
            align="center"
            color="secondary"
            mb={1}
            fontWeight={600}
          >
            Welcome to {school.name}
          </Typography>
          <Typography
            variant="body1"
            align="center"
            mb={2}
            color="text.secondary"
          >
            {school.description}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="/login"
            sx={{ display: "block", mx: "auto", mt: 2, minWidth: 200 }}
          >
            LOGIN TO SCHOOL PORTAL
          </Button>
        </Paper>

        {/* Announcements */}
        {news.length > 0 && (
          <Paper sx={{ p: 3, mb: 4, maxWidth: 800, width: "100%" }}>
            <Typography variant="h6" color="primary" mb={2}>
              Latest Announcements
            </Typography>
            {news.map((item, idx) => (
              <Box key={idx} mb={1}>
                <Typography variant="subtitle1" fontWeight={700}>
                  {item.title}{" "}
                  <span style={{ color: "#888", fontWeight: 400 }}>
                    ({item.date})
                  </span>
                </Typography>
                <Typography variant="body2" mb={1}>
                  {item.message}
                </Typography>
              </Box>
            ))}
          </Paper>
        )}

        {/* Academic Calendar */}
        {calendar.length > 0 && (
          <Paper sx={{ p: 3, mb: 4, maxWidth: 800, width: "100%" }}>
            <Typography variant="h6" color="primary" mb={2}>
              Academic Calendar
            </Typography>
            {calendar.map((entry, idx) => (
              <Box key={idx} mb={2}>
                <Typography variant="subtitle1" fontWeight={700}>
                  {entry.label}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {entry.start} — {entry.end}
                </Typography>
                <Typography variant="body2">{entry.message}</Typography>
              </Box>
            ))}
          </Paper>
        )}

        {/* Footer */}
        <Box mt={8} bgcolor="#f0f3f9" p={2} textAlign="center" borderRadius={2}>
          <Typography variant="body2" color="textSecondary">
            &copy; {new Date().getFullYear()} {school.name}. All rights
            reserved.
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Address: {school.address || "Not provided"} | Contact:{" "}
            {school.contactEmail || school.phone || "Not provided"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
