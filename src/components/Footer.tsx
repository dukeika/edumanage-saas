import React from "react";
import { signOut } from "aws-amplify/auth";

const Footer: React.FC = () => (
  <footer className="pl-64 bg-white border-t py-4 text-center">
    <button
      onClick={async () => {
        await signOut();
        localStorage.clear();
        window.location.assign("/");
      }}
      className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded shadow"
    >
      SIGN OUT
    </button>
    <p className="text-xs text-gray-500 mt-2">
      &copy; {new Date().getFullYear()} EduManage SaaS. All rights reserved.
    </p>
  </footer>
);

export default Footer;
