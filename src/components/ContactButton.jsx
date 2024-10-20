import React from 'react';
import { FaPhoneVolume } from "react-icons/fa6";


const ContactButton = () => {
  const handlePhoneCall = () => {
    window.location.href = 'tel:05061234567';
  };

  return (
    <button
      onClick={handlePhoneCall}
      className="fixed bottom-10 md:right-8 right-6 bg-red-500 text-white md:text-xl md:py-4 md:px-8 py-3 px-6 rounded-full shadow-md hover:bg-red-600 transition flex items-center gap-2 font-bold hover:-translate-y-1" 
      style={{ zIndex: 1000 }} 
    >

      Çağrı Merkezi
      <FaPhoneVolume />
    </button>
  );
};

export default ContactButton;
