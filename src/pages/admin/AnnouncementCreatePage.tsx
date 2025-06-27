import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useCurrentUser } from "../../utils/useCurrentUser";
import RequireRole from "../../components/RequireRole";
import { generateClient } from "@aws-amplify/api";
import { createAnnouncement } from "../../graphql/customMutations";

const AnnouncementCreatePage: React.FC = () => {
  const { user } = useCurrentUser();
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user?.schoolID) return;

    const client = generateClient();
    await client.graphql({
      query: createAnnouncement,
      variables: {
        input: {
          title,
          message,
          schoolID: user.schoolID,
          createdBy: user.id,
        },
      },
    });

    alert("Announcement created!");
    setTitle("");
    setMessage("");
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        New Announcement
      </Typography>

      <RequireRole roles={["Admin", "Teacher"]}>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            multiline
            minRows={4}
            label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button type="submit" variant="contained">
            Post Announcement
          </Button>
        </form>
      </RequireRole>

      <RequireRole
        roles={["Student", "Parent"]}
        fallback={
          <Typography color="textSecondary">
            You do not have permission to post announcements.
          </Typography>
        }
      >
        {/* no children */}
      </RequireRole>
    </Box>
  );
};

export default AnnouncementCreatePage;
