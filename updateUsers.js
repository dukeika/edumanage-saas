const axios = require("axios");

const API_URL = "https://ftrdns136f.execute-api.eu-west-2.amazonaws.com/dev/updateuser";

const users = [
  {
    email: "admin1@school.com",
    updates: { userRole: "Admin", schoolID: "school-001" }
  },
  {
    email: "teacher1@school.com",
    updates: { userRole: "Teacher", schoolID: "school-001", classID: "class-a", subjectID: "subject-math" }
  },
  {
    email: "student1@school.com",
    updates: { userRole: "Student", schoolID: "school-001", classID: "class-a", termID: "term-1", academicYearID: "year-6" }
  },
  {
    email: "parent1@school.com",
    updates: { userRole: "Parent", schoolID: "school-001", childID: "student1-id" }
  }
];

(async () => {
  for (const user of users) {
    try {
      const res = await axios.post(API_URL, user);
      console.log(`✅ Updated: ${user.email}`, res.data.message);
    } catch (err) {
      console.error(`❌ Failed: ${user.email}`, err.response?.data || err.message);
    }
  }
})();
