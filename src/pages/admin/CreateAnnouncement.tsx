import React, { useState } from "react";
import RequireRole from "../../components/RequireRole";
import { useCurrentUser } from "../../utils/useCurrentUser";
import { generateClient } from "aws-amplify/api";
import { customCreateAnnouncement } from "../../graphql/customMutations";

const client = generateClient();

const CreateAnnouncement: React.FC = () => {
  const { user } = useCurrentUser();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [audience, setAudience] = useState<"SCHOOL" | "CLASS">("SCHOOL");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user?.schoolID) return;

    try {
      await client.graphql({
        query: customCreateAnnouncement,
        variables: {
          input: {
            title,
            body,
            audience,
            schoolID: user.schoolID,
            createdBy: user.id,
            createdAt: new Date().toISOString(),
          },
        },
      });
      setMessage("✅ Announcement created!");
      setTitle("");
      setBody("");
    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to create announcement");
    }
  };

  return (
    <RequireRole roles={["ADMIN"]}>
      {message && <div>{message}</div>}
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <select
          value={audience}
          onChange={(e) => setAudience(e.target.value as any)}
        >
          <option value="SCHOOL">School</option>
          <option value="CLASS">Class</option>
        </select>
        <button type="submit">Create Announcement</button>
      </form>
    </RequireRole>
  );
};

export default CreateAnnouncement;
