import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Stack } from "@mui/material";

const AdminNav = () => {
  return (
    <Box p={2} bgcolor="#f0f0f0">
      <Stack direction="row" spacing={2}>
        <Button component={Link} to="/">
          Dashboard
        </Button>
        <Button component={Link} to="/academic-year">
          Academic Year
        </Button>
        <Button component={Link} to="/term">
          Term
        </Button>
        <Button component={Link} to="/class">
          Class
        </Button>
        <Button component={Link} to="/class-list">
          Class List
        </Button>
        <Button component={Link} to="/subject">
          Subject
        </Button>
        <Button component={Link} to="/assessment">
          Assessment
        </Button>
        <Button component={Link} to="/grades">
          Grade Entry
        </Button>
      </Stack>
    </Box>
  );
};

export default AdminNav;
