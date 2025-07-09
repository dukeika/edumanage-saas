import React, { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/api";
import { listAnnouncements } from "../../graphql/queries";
import { useCurrentUser } from "../../utils/useCurrentUser";

type Announcement = {
  id: string;
  title: string;
  body: string;
  createdAt: string;
};

export default function AnnouncementList() {
  const { user } = useCurrentUser();
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  useEffect(() => {
    if (!user?.schoolID) return;
    const client = generateClient();
    const fetchAnnouncements = async () => {
      const res: any = await client.graphql({
        query: listAnnouncements,
        variables: { filter: { schoolID: { eq: user.schoolID } } },
      });
      setAnnouncements(res.data.listAnnouncements.items);
    };
    fetchAnnouncements();
  }, [user]);

  return (
    <div>
      <h2>School Announcements</h2>
      <ul>
        {announcements.map((a) => (
          <li key={a.id}>{a.title}</li>
        ))}
      </ul>
    </div>
  );
}
