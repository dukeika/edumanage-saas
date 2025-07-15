import React, { useState } from "react";
import { generateClient } from "aws-amplify/api";
import { createAnnouncement } from "../../graphql/mutations";
import { useCurrentUser } from "../../utils/useCurrentUser";

const AnnouncementCreatePage: React.FC = () => {
  const { user } = useCurrentUser();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [audience, setAudience] = useState("SCHOOL");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user?.schoolID) return;
    const client = generateClient();
    try {
      await client.graphql({
        query: createAnnouncement,
        variables: {
          input: {
            title,
            message,
            audience,
            createdBy: user.id,
            // createdAt: new Date().toISOString(),
            schoolID: user.schoolID,
          },
        },
      });
      setMessage("Announcement created!");
      setTitle("");
      setBody("");
    } catch (err) {
      setMessage("Error creating announcement.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />
      <select value={audience} onChange={(e) => setAudience(e.target.value)}>
        <option value="SCHOOL">School</option>
        <option value="CLASS">Class</option>
      </select>
      <button type="submit">Create Announcement</button>
      {message && <div>{message}</div>}
    </form>
  );
};

export default AnnouncementCreatePage;
