import React, { useState } from "react";
import { generateClient } from "aws-amplify/api";
import { createAcademicYear } from "../../graphql/mutations";
import { useCurrentUser } from "../../utils/useCurrentUser";

const AcademicYearForm: React.FC = () => {
  const { user } = useCurrentUser();
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user?.schoolID) return;
    const client = generateClient();
    try {
      await client.graphql({
        query: createAcademicYear,
        variables: {
          input: {
            name,
            startDate,
            endDate,
            schoolID: user.schoolID,
          },
        },
      });
      setMessage("Academic Year created!");
      setName("");
      setStartDate("");
      setEndDate("");
    } catch (err) {
      setMessage("Error creating academic year.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="date"
        placeholder="Start Date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        required
      />
      <input
        type="date"
        placeholder="End Date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        required
      />
      <button type="submit">Create Academic Year</button>
      {message && <div>{message}</div>}
    </form>
  );
};

export default AcademicYearForm;
