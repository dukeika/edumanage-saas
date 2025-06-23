import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { generateClient } from "aws-amplify/api";
import { listUsers } from "../../graphql/queries";

const client = generateClient();

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  schoolID: string;
};

const UserList = ({ schoolID }: { schoolID: string }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [roleFilter, setRoleFilter] = useState<string>("All");

  const fetchUsers = async () => {
    try {
      const response: any = await client.graphql({
        query: listUsers,
        variables: {
          filter: {
            schoolID: { eq: schoolID },
          },
        },
      });

      const allUsers = response.data.listUsers.items;
      setUsers(allUsers);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [schoolID]);

  const filteredUsers =
    roleFilter === "All"
      ? users
      : users.filter((user) => user.role === roleFilter);

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6">User List</Typography>

      <FormControl fullWidth sx={{ my: 2 }}>
        <InputLabel id="role-filter-label">Filter by Role</InputLabel>
        <Select
          labelId="role-filter-label"
          value={roleFilter}
          label="Filter by Role"
          onChange={(e) => setRoleFilter(e.target.value)}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Teacher">Teacher</MenuItem>
          <MenuItem value="Student">Student</MenuItem>
          <MenuItem value="Parent">Parent</MenuItem>
        </Select>
      </FormControl>

      <Paper sx={{ p: 2 }}>
        <List>
          {filteredUsers.map((user, idx) => (
            <React.Fragment key={user.id}>
              <ListItem>
                <ListItemText
                  primary={`${user.name} (${user.role})`}
                  secondary={`Email: ${user.email}`}
                />
              </ListItem>
              {idx < filteredUsers.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default UserList;
