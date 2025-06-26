const axios = require("axios");

const endpoint = "https://ftrdns136f.execute-api.eu-west-2.amazonaws.com/dev/updateuser";

const users = [
  // 👨‍🏫 Teachers
  {
    email: "teacher1@school.com",
    updates: {
      schoolID: "abc123",
      classID: "xyz456",
      subjectID: "sub789",
      userRole: "Teacher"
    }
  },
  {
    email: "teacher2@school.com",
    updates: {
      schoolID: "abc123",
      classID: "xyz456",
      subjectID: "sub101",
      userRole: "Teacher"
    }
  },

  // 👩‍🎓 Students
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

  // 👨‍👩‍👧 Parents
  {
    email: "parent1@school.com",
    updates: {
      schoolID: "abc123",
      classID: "xyz456",
      childID: "student1-id",
      userRole: "Parent"
    }
  },
  {
    email: "parent2@school.com",
    updates: {
      schoolID: "abc123",
      classID: "xyz456",
      childID: "student2-id",
      userRole: "Parent"
    }
  },

  // 🧑‍💼 Admins
  {
    email: "admin1@school.com",
    updates: {
      schoolID: "abc123",
      userRole: "Admin"
    }
  }
];

const run = async () => {
  for (const user of users) {
    try {
      const res = await axios.post(endpoint, user);
      console.log(`✅ Updated: ${user.email}`, res.data);
    } catch (err) {
      console.error(`❌ Failed: ${user.email}`, err.response?.data || err.message);
    }
  }
};

run();
