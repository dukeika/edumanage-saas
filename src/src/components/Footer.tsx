import React from "react";

const Footer: React.FC = () => (
  <footer className="bg-gray-100 text-center py-4">
    <p className="text-gray-600">&copy; {new Date().getFullYear()} EduManage SaaS. All rights reserved.</p>
  </footer>
);

export default Footer;