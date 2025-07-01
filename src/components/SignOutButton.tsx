import React from "react";
import { Button } from "@mui/material";
import { signOut } from "@aws-amplify/auth";
import { useNavigate } from "react-router-dom";

const SignOutButton: React.FC = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate("/", { replace: true }); // Redirect to home on sign-out
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <Button variant="contained" color="primary" onClick={handleSignOut}>
      Sign Out
    </Button>
  );
};

export default SignOutButton;
