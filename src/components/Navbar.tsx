// src/components/Navbar.tsx
import React from "react";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { Button } from "@mui/material";

interface AuthContentProps {
  children: React.ReactNode;
  signOut: () => Promise<void>;
}

const Navbar: React.FC<AuthContentProps> = ({ children, signOut }) => {
  const { user } = useCurrentUser();

  return (
    <nav>
      <span>{user?.name ?? user?.email ?? "User"}</span>
      <Button variant="contained" color="secondary" onClick={signOut}>
        Sign Out
      </Button>{" "}
    </nav>
  );
};

export default Navbar;
