import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  CircularProgress,
  Alert,
  Button,
  Grid,
  Divider,
  Paper,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { generateClient } from "@aws-amplify/api";
import { listSchools } from "../../graphql/queries";
import * as APITypes from "../../API"; // Import all API types

const client = generateClient();

// Use the types directly from APITypes if codegen works correctly
type CalendarEntry = APITypes.CalendarEntry;
type NewsEntry = APITypes.NewsEntry;

function parseDynamoArray<T = any>(arr: any): T[] {
  console.log("Parsing array:", arr);

  if (!arr) {
    console.log("Array is null/undefined");
    return [];
  }

  let parsedArr = arr; // Initialize with the original array
  if (typeof arr === "string") {
    try {
      parsedArr = JSON.parse(arr); // Attempt to parse if it's a string
      console.log("Successfully parsed string to:", parsedArr);
    } catch (e) {
      console.error("Failed to parse stringified array:", e);
      return []; // If parsing fails, return an empty array
    }
  }

  // After potential parsing, ensure the result is actually an array
  if (Array.isArray(parsedArr)) {
    return parsedArr;
  }

  console.log(
    "Unexpected type after parsing attempt; not an array:",
    typeof parsedArr
  );
  return []; // If it's still not an array (e.g., parsed to an object, or was initially a non-array, non-string value), return empty
}

const SchoolLandingPage: React.FC = () => {
  const { subdomain } = useParams<{ subdomain: string }>();
  const [school, setSchool] = useState<APITypes.School | null>(null);
  const [calendarEntries, setCalendarEntries] = useState<
    APITypes.CalendarEntry[]
  >([]);
  const [newsEntries, setNewsEntries] = useState<APITypes.NewsEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!subdomain) {
      setError("No subdomain provided.");
      setLoading(false);
      return;
    }

    const fetchSchool = async () => {
      try {
        setLoading(true);
        const schoolData = await client.graphql({
          query: listSchools,
          variables: {
            filter: { subdomain: { eq: subdomain } },
            limit: 1,
          },
        });

        const fetchedSchool = schoolData.data?.listSchools?.items?.[0] as
          | APITypes.School
          | undefined;

        if (fetchedSchool) {
          setSchool(fetchedSchool);

          // Access calendar and news directly as properties
          setCalendarEntries(
            parseDynamoArray<APITypes.CalendarEntry>(fetchedSchool.calendar)
          );
          setNewsEntries(
            parseDynamoArray<APITypes.NewsEntry>(fetchedSchool.news)
          );
        } else {
          setError("School not found for this subdomain.");
        }
      } catch (err) {
        console.error("Error fetching school:", err);
        setError("Failed to load school data.");
      } finally {
        setLoading(false);
      }
    };

    fetchSchool();
  }, [subdomain]);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 3, maxWidth: 600, mx: "auto", mt: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  if (!school) {
    return (
      <Box sx={{ p: 3, maxWidth: 600, mx: "auto", mt: 4 }}>
        <Alert severity="info">No school data available.</Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* --- TOP HEADER: LOGO AND SCHOOL NAME --- */}
      <Box
        sx={{
          bgcolor: "primary.main", // Example background color
          color: "primary.contrastText", // Example text color
          py: 2,
          px: { xs: 2, md: 3 },
          display: "flex",
          alignItems: "center",
          boxShadow: 2,
        }}
      >
        {school.logoURL && (
          <Box sx={{ mr: 2 }}>
            <img
              src={school.logoURL}
              alt={`${school.name} Logo`}
              style={{
                maxHeight: "50px", // Adjust size as needed
                maxWidth: "100%",
                borderRadius: "4px", // Subtle rounded corners for the logo
              }}
            />
          </Box>
        )}
        <Typography variant="h5" component="h1" fontWeight="bold">
          {school.name}
        </Typography>
      </Box>

      {/* --- HERO SECTION --- */}
      <Box
        sx={{
          height: 300,
          backgroundImage: `url(${
            school.heroImageURL || "https://via.placeholder.com/1500x300"
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          flexDirection: "column",
          mt: 0, // Ensure no extra margin from header
        }}
      >
        {school.description && (
          <Typography variant="h6" mt={1}>
            {school.description}
          </Typography>
        )}
      </Box>

      {/* --- MAIN CONTENT AREA --- */}
      <Box sx={{ p: 3, maxWidth: 960, mx: "auto", flexGrow: 1 }}>
        <Grid container spacing={4}>
          {/* ABOUT SECTION (with description and contact info) */}
          <Grid item xs={12} component="div">
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h5" component="h2" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body1">
                {school.description ||
                  "No detailed description provided yet. Check back soon!"}
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body2">
                Address: {school.address || "N/A"}
              </Typography>
              <Typography variant="body2">
                Email: {school.contactEmail || "N/A"}
              </Typography>
              <Typography variant="body2">
                Phone: {school.phone || "N/A"}
              </Typography>
              <Typography variant="body2">
                Website:{" "}
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
            </Paper>
          </Grid>

          {/* CALENDAR SECTION (Moved to appear before News) */}
          <Grid item xs={12} component="div">
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h5" component="h2" gutterBottom>
                School Calendar
              </Typography>
              {calendarEntries.length === 0 ? (
                <Typography variant="body2" sx={{ p: 3 }}>
                  No calendar entries yet.
                </Typography>
              ) : (
                <Grid container spacing={2}>
                  {calendarEntries.map((c, idx) => (
                    <Grid item xs={12} sm={6} key={idx} component="div">
                      <Paper elevation={2} sx={{ p: 2 }}>
                        <Typography variant="h6">{c?.label}</Typography>
                        <Typography variant="caption" sx={{ color: "#666" }}>
                          {c?.start} - {c?.end}
                        </Typography>
                        <Divider sx={{ my: 1 }} />
                        <Typography>{c?.message}</Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              )}
            </Paper>
          </Grid>

          {/* LATEST NEWS SECTION */}
          <Grid item xs={12} component="div">
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h5" component="h2" gutterBottom>
                Latest News
              </Typography>
              {newsEntries.length === 0 ? (
                <Typography variant="body2" sx={{ p: 3 }}>
                  No news entries yet.
                </Typography>
              ) : (
                <Grid container spacing={2}>
                  {newsEntries.map((n, idx) => (
                    <Grid item xs={12} sm={6} key={idx} component="div">
                      <Paper elevation={2} sx={{ p: 2 }}>
                        <Typography variant="h6">{n?.title}</Typography>
                        <Typography variant="caption" sx={{ color: "#666" }}>
                          {n?.date}
                        </Typography>
                        <Divider sx={{ my: 1 }} />
                        <Typography>{n?.message}</Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* --- FOOTER --- */}
      <Box
        sx={{
          mt: "auto",
          bgcolor: "#24292f",
          color: "#fff",
          py: 4,
          textAlign: "center",
        }}
      >
        <Typography align="center" variant="body2">
          &copy; {new Date().getFullYear()} {school.name}. Powered by
          ClassPoint.
        </Typography>
        <Typography align="center" variant="body2">
          Contact: {school.contactEmail || school.phone || "N/A"} |{" "}
          {school.address || "Address not provided"}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            href="/login" // Button now takes you to the login page
            target="_self"
            rel="noopener noreferrer"
          >
            Login to ClassPoint
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SchoolLandingPage;
