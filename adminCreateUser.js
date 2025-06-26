const axios = require("axios");

const API_URL = "https://<your-api>/dev/createuser"; // Replace this with your actual create user endpoint

const users = [
  {
    email: "admin1@school.com",
    name: "Admin One",
    role: "Admin",
    schoolID: "school-001"
  },
  {
    email: "teacher1@school.com",
    name: "Teacher One",
    role: "Teacher",
    schoolID: "school-001"
  },
  {
    email: "student1@school.com",
    name: "Student One",
    role: "Student",
    schoolID: "school-001"
  },
  {
    email: "parent1@school.com",
    name: "Parent One",
    role: "Parent",
    schoolID: "school-001"
  }
];

(async () => {
  for (const user of users) {
    try {
      const res = await axios.post(API_URL, { input: user });
      console.log(`✅ Created: ${user.email}`, res.data);
    } catch (err) {
      console.error(`❌ Failed: ${user.email}`, err.response?.data || err.message);
    }
  }
})();
