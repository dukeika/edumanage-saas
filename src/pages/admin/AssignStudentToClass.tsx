import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
} from "@mui/material";
import { listStudents, listClasses } from "../../graphql/queries";
import { updateStudent } from "../../graphql/mutations";
import { generateClient } from "aws-amplify/api";

const client = generateClient();

const AssignStudentToClass = () => {
  const [students, setStudents] = useState<any[]>([]);
  const [classes, setClasses] = useState<any[]>([]);
  const [selectedStudent, setSelectedStudent] = useState("");
  const [selectedClass, setSelectedClass] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const studentsData = await client.graphql({ query: listStudents });
      const classesData = await client.graphql({ query: listClasses });
      setStudents(studentsData.data.listStudents.items);
      setClasses(classesData.data.listClasses.items);
    };
    fetchData();
  }, []);

  const handleAssign = async () => {
    await client.graphql({
      query: updateStudent,
      variables: {
        input: {
          id: selectedStudent,
        },
      },
    });
    alert("Student assigned to class!");
  };

  return (
    <Box p={4}>
      <Typography variant="h5">Assign Student to Class</Typography>
      <FormControl fullWidth margin="normal">
        <InputLabel>Student</InputLabel>
        <Select
          value={selectedStudent}
          onChange={(e) => setSelectedStudent(e.target.value)}
        >
          {students.map((student) => (
            <MenuItem key={student.id} value={student.id}>
              {student.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel>Class</InputLabel>
        <Select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
        >
          {classes.map((cls) => (
            <MenuItem key={cls.id} value={cls.id}>
              {cls.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button variant="contained" color="primary" onClick={handleAssign}>
        Assign
      </Button>
    </Box>
  );
};

export default AssignStudentToClass;
