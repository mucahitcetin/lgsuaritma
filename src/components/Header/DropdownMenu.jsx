import React, { useState, useRef, useEffect } from 'react';
import { IoChevronDown } from 'react-icons/io5';

const DropdownMenu = ({ label, options, isOpen, onClick }) => {
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="relative">
      <button
        onClick={onClick}
        className="cursor-pointer flex items-center text-lg font-semibold mt-4 lg:mt-0 gap-1 hover:text-secondary transition-all duration-200"
      >
        {label}
        <IoChevronDown />
      </button>
      <div
        ref={contentRef}
        style={{ height }}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="mt-2 bg-primary text-white shadow-md rounded p-2">
          {options.map((option, index) => (
            <li key={index} className="dropdown-item">
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
