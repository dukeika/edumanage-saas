// src/pages/school/SchoolLandingPage.tsx
import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/api";
import { schoolsBySubdomain } from "../../graphql/queries";
// 1. Change this import to get the correct API type
import { School } from "../../API";

const client = generateClient();

const SchoolLandingPage = () => {
  // 2. Update the type used in useState
  const [school, setSchool] = useState<School | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSchool = async () => {
      const host = window.location.hostname;
      const subdomain = host.split(".")[0];

      if (!subdomain) {
        // ... (rest of your logic is correct)
        setError("Could not determine subdomain.");
        setLoading(false);
        return;
      }

      try {
        const response = await client.graphql({
          query: schoolsBySubdomain,
          variables: { subdomain: subdomain },
          authMode: "apiKey",
        });

        // The type of schoolData now correctly matches the 'school' state
        const schoolData = response.data.schoolsBySubdomain.items[0];

        if (schoolData) {
          setSchool(schoolData); // This will now work without a type error
        } else {
          setError("School not found for this subdomain.");
        }
      } catch (err) {
        console.error("Error fetching school:", err);
        setError("An error occurred while fetching school data.");
      } finally {
        setLoading(false);
      }
    };

    fetchSchool();
  }, []);

  // ... (rest of your component)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!school) return <p>School not found.</p>;

  return (
    <div>
      <h1>{school.name}</h1>
      <p>{school.description}</p>
    </div>
  );
};

export default SchoolLandingPage;
