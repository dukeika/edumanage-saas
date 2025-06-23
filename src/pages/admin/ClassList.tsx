import React, { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/api";
import { listClasses } from "../../graphql/queries";
import { Box, Typography, Paper, List, ListItem, Divider } from "@mui/material";

const client = generateClient();
type ClassListProps = {
  schoolID: string;
};

type ClassItem = {
  id: string;
  name: string;
  schoolID: string;
  teacherID?: string | null;
};

const ClassList = ({ schoolID }: ClassListProps) => {
  const [classes, setClasses] = useState<ClassItem[]>([]);

  const fetchClasses = async () => {
    try {
      const response: any = await client.graphql({
        query: listClasses,
        variables: {
          filter: {
            schoolID: { eq: schoolID },
          },
        },
      });
      setClasses(response.data.listClasses.items);
    } catch (err) {
      console.error("Error fetching classes:", err);
    }
  };

  useEffect(() => {
    fetchClasses();
  }, [schoolID]);

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6">Classes</Typography>
      <Paper sx={{ mt: 2, p: 2 }}>
        <List>
          {classes.map((cls) => (
            <React.Fragment key={cls.id}>
              <ListItem>
                <strong>{cls.name}</strong> — Teacher ID:{" "}
                {cls.teacherID || "Not assigned"}
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default ClassList;
