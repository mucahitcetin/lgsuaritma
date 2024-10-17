import React, { useRef, useEffect, useState } from "react";
import { IoChevronDown } from "react-icons/io5";

const DropdownMenu = ({ label, options, isOpen, onClick }) => {
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  // Açılma/Kapanma durumunda yüksekliği ayarla
  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight); // İçeriğin yüksekliğini alır
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="relative">
      <button
        onClick={onClick}
        className="flex items-center gap-1 text-lg font-semibold transition-all duration-200 hover:text-secondary cursor-pointer"
      >
        {label}
        <IoChevronDown className="text-xl" />
      </button>

      {/* Dropdown içerik */}
      <div
        ref={contentRef}
        style={{ height }}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          window.innerWidth >= 1024 ? "absolute bg-white shadow-lg mt-2" : ""
        }`}
      >
        <ul className="p-2 bg-red-300 z-40">
          {options.map((option, index) => (
            <li
              key={index}
              className="p-2 text-primary hover:bg-primary hover:text-white rounded cursor-pointer transition-all duration-200"
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
