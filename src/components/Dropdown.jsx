import React, { useState } from "react";

export default function Dropdown({ options = [], onSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0] || "Select");

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    onSelect && onSelect(option);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-brand-500 text-brand-700 px-4 py-2 rounded-xl hover:bg-brand-300 transition-all"
      >
        {selected}
      </button>

      {isOpen && (
        <ul className="absolute z-10 mt-2 bg-white border border-brand-200 rounded-xl shadow-md w-40">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 hover:bg-brand-100 cursor-pointer transition-all"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
