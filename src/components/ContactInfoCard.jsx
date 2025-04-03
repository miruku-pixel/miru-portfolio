import React from "react";

const ContactInfoCard = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-5 bg-blue-100 rounded-xl border border-blue-100 px-4 py-3 mb-5">
      <div className="w-10 h-10 text-xl text-white flex items-center justify-center bg-gradient-to-r from-blue-300 to-blue-200 rounded-lg">
        {icon}
      </div>

      <p className="text-blue-700 text-xs md:text-sm">{text}</p>
    </div>
  );
};

export default ContactInfoCard;
