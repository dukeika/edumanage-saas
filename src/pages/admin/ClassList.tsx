import React, { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/api";
import { listClasses } from "../../graphql/queries";
import { useCurrentUser } from "../../utils/useCurrentUser";

type Class = { id: string; name: string; schoolID: string; termID: string };

export default function ClassList() {
  const { user } = useCurrentUser();
  const [classes, setClasses] = useState<Class[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.schoolID) return;
    const client = generateClient();
    const fetchClasses = async () => {
      setLoading(true);
      const res: any = await client.graphql({
        query: listClasses,
        variables: { filter: { schoolID: { eq: user.schoolID } } },
      });
      setClasses(res.data.listClasses.items);
      setLoading(false);
    };
    fetchClasses();
  }, [user]);

  if (loading) return <div>Loading classes…</div>;
  return (
    <div>
      <h2>Classes</h2>
      <ul>
        {classes.map((cls) => (
          <li key={cls.id}>{cls.name}</li>
        ))}
      </ul>
    </div>
  );
}
