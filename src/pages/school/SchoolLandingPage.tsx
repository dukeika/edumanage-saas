import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  CircularProgress,
  Paper,
  Button,
} from "@mui/material";
import { generateClient } from "@aws-amplify/api";
import { schoolsBySubdomain } from "../../graphql/queries";
import { useParams, Link } from "react-router-dom";

const client = generateClient();

export default function SchoolLandingPage() {
  const { subdomain } = useParams();
  const [school, setSchool] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (subdomain) {
      client
        .graphql({
          query: schoolsBySubdomain,
          variables: { subdomain },
          authMode: "apiKey",
        })
        .then((resp) => {
          const items = resp.data?.schoolsBySubdomain?.items || [];
          setSchool(items[0] || null);
        })
        .finally(() => setLoading(false));
    }
  }, [subdomain]);

  if (loading) {
    return (
      <Box className="flex justify-center items-center h-screen">
        <CircularProgress />
      </Box>
    );
  }

  if (!school) {
    return (
      <Box className="flex justify-center items-center h-screen">
        <Typography variant="h6">School not found.</Typography>
      </Box>
    );
  }

  return (
    <Box className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <Box
        className="w-full h-[400px] bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${school.heroImageURL})` }}
      >
        <Paper className="p-4 opacity-90" elevation={8}>
          <img
            src={school.logoURL}
            alt={school.name}
            className="h-32 w-32 mx-auto rounded-full object-cover"
          />
          <Typography
            variant="h4"
            className="mt-4 text-center font-bold text-gray-800"
          >
            {school.name}
          </Typography>
        </Paper>
      </Box>

      {/* Main Content */}
      <Box className="flex-1 container mx-auto px-4 py-8">
        <Typography variant="h5" className="mb-4 text-gray-700 font-semibold">
          About Us
        </Typography>
        <Typography variant="body1" className="mb-6 text-gray-600">
          {school.description}
        </Typography>

        {/* Announcements Section */}
        {school.news?.length > 0 && (
          <Box className="mt-10">
            <Typography
              variant="h6"
              className="mb-4 text-gray-700 font-semibold"
            >
              Latest Announcements
            </Typography>
            {school.news.map((item, index) => (
              <Paper key={index} className="p-4 mb-4" elevation={3}>
                <Typography variant="subtitle1" className="font-bold">
                  {item.title}
                </Typography>
                <Typography variant="body2" className="mt-2">
                  {item.message}
                </Typography>
                <Typography variant="caption" className="text-gray-500">
                  {item.date}
                </Typography>
              </Paper>
            ))}
          </Box>
        )}

        {/* Login Button */}
        <Box className="mt-10 text-center">
          <Button
            component={Link}
            to={`/login?school=${subdomain}`}
            variant="contained"
            color="primary"
            className="px-8 py-2"
          >
            School Portal Login
          </Button>
        </Box>
      </Box>

      {/* Footer */}
      <Box className="bg-gray-900 text-gray-300 p-4">
        <Typography variant="body2" className="text-center">
          © {new Date().getFullYear()} {school.name}. All rights reserved.
        </Typography>
        <Typography variant="body2" className="text-center">
          Address: {school.address || "Not provided"}
        </Typography>
        <Typography variant="body2" className="text-center">
          Contact: {school.contactEmail || school.phone || "Not provided"}
        </Typography>
      </Box>
    </Box>
  );
}
