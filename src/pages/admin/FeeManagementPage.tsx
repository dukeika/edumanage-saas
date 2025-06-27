import React from "react";
import { Box, Typography, Button } from "@mui/material";
import RequireRole from "../../components/RequireRole";
import FeeTable from "../../components/FeeTable"; // your existing table

const FeeManagementPage: React.FC = () => (
  <Box sx={{ p: 4 }}>
    <Typography variant="h4" gutterBottom>
      Fees & Invoices
    </Typography>

    {/* Only Admins can create fee structures */}
    <RequireRole roles={["Admin"]}>
      <Button variant="contained" sx={{ mb: 2 }}>
        Create Fee Structure
      </Button>
    </RequireRole>

    {/* Render your table of fees/invoices */}
    <FeeTable />

    {/* Only Students & Parents can pay */}
    <RequireRole roles={["Student", "Parent"]}>
      <Button variant="outlined" sx={{ mt: 2 }}>
        Pay Now
      </Button>
    </RequireRole>
  </Box>
);

export default FeeManagementPage;
