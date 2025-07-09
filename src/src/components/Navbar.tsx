import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "aws-amplify/auth";
import { useCurrentUser } from "../hooks/useCurrentUser";

interface NavbarProps { title: string; }

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  const navigate = useNavigate();
  const { user } = useCurrentUser();

  const handleLogout = async () => {
    try {
      await signOut();
      localStorage.clear();
      window.location.assign("/");
    } catch {
      console.error("Error signing out");
    }
  };

  return (
    <header className="flex items-center justify-between bg-white px-6 py-4 border-b shadow-sm">
      <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
      <div className="flex items-center space-x-4">
        <span className="text-gray-600">{user?.name ?? user?.email ?? "User"}</span>
        <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Navbar;