const axios = require("axios");

const endpoint = "https://ftrdns136f.execute-api.eu-west-2.amazonaws.com/dev/updateuser";

// Demo data — replace with real IDs if needed
const students = [
  {
    email: "student1@school.com",
    updates: {
      schoolID: "abc123",
      classID: "xyz456",
      userRole: "Student"
    }
  },
  {
    email: "student2@school.com",
    updates: {
      schoolID: "abc123",
      classID: "xyz456",
      userRole: "Student"
    }
  },
  {
    email: "student3@school.com",
    updates: {
      schoolID: "abc123",
      classID: "xyz456",
      userRole: "Student"
    }
  },
];

const run = async () => {
  for (const student of students) {
    try {
      const res = await axios.post(endpoint, student);
      console.log(`✅ Updated: ${student.email}`, res.data);
    } catch (err) {
      console.error(`❌ Failed: ${student.email}`, err.response?.data || err.message);
    }
  }
};

run();
