import React, { useState } from "react";

import "./CustomSelect.css"

// Определение типов для пропсов
interface CustomSelectProps {
  options: string[];
  onSelect: (value: string) => void;
  placeholder?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  onSelect,
  placeholder,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (value: string) => {
    setSelectedValue(value);
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <div
      className="custom_select"
    >
      <div
        className="select__top"
        onClick={toggleDropdown}
      >
        {selectedValue || placeholder || "Select..."}
      </div>
      {isOpen && (
        <div
          className="select_opened"
        >
          {options.map((option) => (
            <div
              className="select_ok"
              key={option}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
