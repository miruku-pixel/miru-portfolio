import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-blue-100 text-xs text-secondary text-center p-5">
      &copy; {currentYear} Miruku Pixel. All rights reserved.
    </div>
  );
};

export default Footer;
