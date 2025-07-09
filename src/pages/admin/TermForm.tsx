import React, { useState } from "react";
import { generateClient } from "aws-amplify/api";
import { createTerm } from "../../graphql/mutations";
import { useCurrentUser } from "../../utils/useCurrentUser";

const TermForm: React.FC = () => {
  const { user } = useCurrentUser();
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [academicYearID, setAcademicYearID] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user?.schoolID) return;
    const client = generateClient();
    try {
      await client.graphql({
        query: createTerm,
        variables: {
          input: {
            name,
            startDate,
            endDate,
            academicYearID,
            schoolID: user.schoolID,
          },
        },
      });
      setMessage("Term created!");
      setName("");
      setStartDate("");
      setEndDate("");
      setAcademicYearID("");
    } catch (err) {
      setMessage("Error creating term.");
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
      <input
        placeholder="Academic Year ID"
        value={academicYearID}
        onChange={(e) => setAcademicYearID(e.target.value)}
        required
      />
      <button type="submit">Create Term</button>
      {message && <div>{message}</div>}
    </form>
  );
};

export default TermForm;
