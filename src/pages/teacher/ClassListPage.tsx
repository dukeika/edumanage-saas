import React, { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/api";
import { listClasses } from "../../graphql/queries";
import { useCurrentUser } from "../../utils/useCurrentUser";

// Match your schema: only fields actually on Class
type ClassType = {
  id: string;
  name: string;
  schoolID: string;
  termID: string;
};

const ClassListPage: React.FC = () => {
  const { user } = useCurrentUser();
  const [classes, setClasses] = useState<ClassType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.schoolID) return;
    const client = generateClient();
    const fetchClasses = async () => {
      setLoading(true);
      try {
        const res: any = await client.graphql({
          query: listClasses,
          variables: { filter: { schoolID: { eq: user.schoolID } } },
        });
        setClasses(res.data.listClasses.items);
      } catch (err) {
        console.error("Error fetching classes:", err);
        setClasses([]);
      }
      setLoading(false);
    };
    fetchClasses();
  }, [user]);

  if (!user?.schoolID) {
    return <div>No school selected or available.</div>;
  }
  if (loading) return <div>Loading classes…</div>;

  return (
    <div>
      <h2>Classes</h2>
      <ul>
        {classes.length === 0 ? (
          <li>No classes found.</li>
        ) : (
          classes.map((cls) => <li key={cls.id}>{cls.name}</li>)
        )}
      </ul>
    </div>
  );
};

export default ClassListPage;
