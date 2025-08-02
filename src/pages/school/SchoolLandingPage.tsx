import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { generateClient } from "aws-amplify/api";
import { schoolsBySubdomain } from "../../graphql/queries";
import { School } from "../../API";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Alert,
  Paper,
  Chip,
  Divider,
  Link,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  LocationOn,
  Email,
  Phone,
  Language,
  CalendarMonth,
  Announcement,
  School as SchoolIcon,
} from "@mui/icons-material";
import { format, parseISO } from "date-fns";
import LoadingScreen from "../../components/LoadingScreen";

const client = generateClient();

const SchoolLandingPage: React.FC = () => {
  const { subdomain: urlSubdomain } = useParams<{ subdomain?: string }>();
  const [school, setSchool] = useState<School | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const fetchSchool = async () => {
      try {
        let subdomain = "";

        // First, check if subdomain is in URL params (for path-based routing)
        if (urlSubdomain) {
          subdomain = urlSubdomain;
        } else {
          // Otherwise, try to extract from hostname
          const host = window.location.hostname;
          const hostParts = host.split(".");

          // Check if we have a subdomain
          if (
            hostParts.length > 1 &&
            hostParts[0] !== "www" &&
            hostParts[0] !== "app" &&
            hostParts[0] !== "localhost" &&
            hostParts[0] !== "127"
          ) {
            subdomain = hostParts[0];
          }
        }

        if (!subdomain) {
          setError(
            "No school identifier found. Please use a school subdomain or specify the school in the URL."
          );
          setLoading(false);
          return;
        }

        const response = await client.graphql({
          query: schoolsBySubdomain,
          variables: { subdomain: subdomain },
          authMode: "apiKey",
        });

        const items = response.data.schoolsBySubdomain.items;
        if (items && items.length > 0) {
          const schoolData = items[0];
          console.log("School data:", schoolData);
          setSchool(schoolData as School);
        } else {
          setError(`School not found for identifier: ${subdomain}`);
        }
      } catch (err: any) {
        console.error("Error fetching school:", err);
        setError("An error occurred while fetching school data.");
      } finally {
        setLoading(false);
      }
    };

    fetchSchool();
  }, [urlSubdomain]);

  if (loading) {
    return <LoadingScreen message="Loading school information..." />;
  }

  if (error) {
    return (
      <Container maxWidth="sm" sx={{ mt: 8 }}>
        <Alert severity="error" variant="filled">
          {error}
        </Alert>
      </Container>
    );
  }

  if (!school) {
    return (
      <Container maxWidth="sm" sx={{ mt: 8 }}>
        <Alert severity="warning" variant="filled">
          School not found.
        </Alert>
      </Container>
    );
  }

  // Parse calendar and news arrays - handle both normal arrays and undefined
  const calendar = school.calendar
    ? Array.isArray(school.calendar)
      ? school.calendar.filter(
          (item): item is NonNullable<typeof item> => item !== null
        )
      : []
    : [];

  const news = school.news
    ? Array.isArray(school.news)
      ? school.news.filter(
          (item): item is NonNullable<typeof item> => item !== null
        )
      : []
    : [];

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      {/* Header Section */}
      <Box
        sx={{
          bgcolor: "primary.main",
          color: "primary.contrastText",
          py: 3,
          boxShadow: 2,
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems="center"
            spacing={3}
          >
            {school.logoURL && (
              <Box
                component="img"
                src={school.logoURL}
                alt={`${school.name} logo`}
                sx={{
                  width: { xs: 80, sm: 100 },
                  height: { xs: 80, sm: 100 },
                  borderRadius: 2,
                  bgcolor: "white",
                  p: 1,
                  objectFit: "contain",
                }}
                onError={(e) => {
                  console.error("Error loading logo:", e);
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            )}
            <Box flex={1}>
              <Typography variant="h3" component="h1" gutterBottom>
                {school.name}
              </Typography>
              {school.address && (
                <Stack direction="row" alignItems="center" spacing={1}>
                  <LocationOn fontSize="small" />
                  <Typography variant="body1">{school.address}</Typography>
                </Stack>
              )}
            </Box>
            <Chip
              label={school.status === "ACTIVE" ? "Active" : "Inactive"}
              color={school.status === "ACTIVE" ? "success" : "default"}
              sx={{ bgcolor: "white", fontWeight: "bold" }}
            />
          </Stack>
        </Container>
      </Box>

      {/* Hero Image */}
      {school.heroImageURL && (
        <Box
          sx={{
            width: "100%",
            height: { xs: 200, sm: 300, md: 400 },
            backgroundImage: `url(${school.heroImageURL})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              background:
                "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
              p: 3,
            }}
          >
            <Container maxWidth="lg">
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                }}
              >
                Welcome to {school.name}
              </Typography>
            </Container>
          </Box>
        </Box>
      )}

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} md={8}>
            <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
              <Stack direction="row" alignItems="center" spacing={1} mb={2}>
                <SchoolIcon color="primary" />
                <Typography variant="h5" component="h2">
                  About Our School
                </Typography>
              </Stack>
              <Typography variant="body1" paragraph>
                {school.description ||
                  "Welcome to our school. We are committed to providing quality education and nurturing young minds for a brighter future."}
              </Typography>
            </Paper>

            {/* News & Announcements */}
            {news && news.length > 0 && (
              <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
                <Stack direction="row" alignItems="center" spacing={1} mb={3}>
                  <Announcement color="primary" />
                  <Typography variant="h5" component="h2">
                    Latest News & Announcements
                  </Typography>
                </Stack>
                <Stack spacing={3}>
                  {news.map((item, index) => {
                    if (!item) return null;
                    return (
                      <Box key={index}>
                        <Typography variant="h6" gutterBottom>
                          {item.title || "Untitled"}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          gutterBottom
                        >
                          {item.date &&
                            format(parseISO(item.date), "MMMM d, yyyy")}
                        </Typography>
                        <Typography variant="body1">
                          {item.message || ""}
                        </Typography>
                        {index < news.length - 1 && <Divider sx={{ mt: 2 }} />}
                      </Box>
                    );
                  })}
                </Stack>
              </Paper>
            )}

            {/* Academic Calendar */}
            {calendar && calendar.length > 0 && (
              <Paper elevation={2} sx={{ p: 3 }}>
                <Stack direction="row" alignItems="center" spacing={1} mb={3}>
                  <CalendarMonth color="primary" />
                  <Typography variant="h5" component="h2">
                    Academic Calendar
                  </Typography>
                </Stack>
                <Stack spacing={2}>
                  {calendar.map((event, index) => {
                    if (!event) return null;
                    return (
                      <Card key={index} variant="outlined">
                        <CardContent>
                          <Typography variant="h6" gutterBottom>
                            {event.label || "Event"}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {event.start &&
                              format(parseISO(event.start), "MMM d, yyyy")}
                            {event.end &&
                              ` - ${format(
                                parseISO(event.end),
                                "MMM d, yyyy"
                              )}`}
                          </Typography>
                          {event.message && (
                            <Typography variant="body1" sx={{ mt: 1 }}>
                              {event.message}
                            </Typography>
                          )}
                        </CardContent>
                      </Card>
                    );
                  })}
                </Stack>
              </Paper>
            )}

            {/* Message when no news or calendar */}
            {(!news || news.length === 0) &&
              (!calendar || calendar.length === 0) && (
                <Paper elevation={2} sx={{ p: 3 }}>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    align="center"
                  >
                    No announcements or calendar events at this time.
                  </Typography>
                </Paper>
              )}
          </Grid>

          {/* Contact Information Sidebar */}
          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 3, position: "sticky", top: 20 }}>
              <Typography variant="h5" component="h2" gutterBottom>
                Contact Information
              </Typography>
              <Stack spacing={2} mt={3}>
                {school.contactEmail && (
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Email color="primary" />
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Email
                      </Typography>
                      <Link href={`mailto:${school.contactEmail}`}>
                        {school.contactEmail}
                      </Link>
                    </Box>
                  </Stack>
                )}
                {school.phone && (
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Phone color="primary" />
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Phone
                      </Typography>
                      <Link href={`tel:${school.phone}`}>{school.phone}</Link>
                    </Box>
                  </Stack>
                )}
                {school.website && (
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Language color="primary" />
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Website
                      </Typography>
                      <Link
                        href={
                          school.website.startsWith("http")
                            ? school.website
                            : `https://${school.website}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {school.website}
                      </Link>
                    </Box>
                  </Stack>
                )}
                {school.address && (
                  <Stack direction="row" alignItems="flex-start" spacing={2}>
                    <LocationOn color="primary" sx={{ mt: 0.5 }} />
                    <Box>
                      <Typography variant="body2" color="text.secondary">
                        Address
                      </Typography>
                      <Typography variant="body1">{school.address}</Typography>
                    </Box>
                  </Stack>
                )}
              </Stack>

              <Divider sx={{ my: 3 }} />

              <Box textAlign="center">
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Powered by
                </Typography>
                <Typography variant="h6" color="primary">
                  Class Point
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          bgcolor: "grey.900",
          color: "grey.100",
          py: 3,
          mt: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} {school.name}. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default SchoolLandingPage;
