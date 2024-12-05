import React, { useState } from "react";

import "./CustomSelect.css"

// Определение типов для пропсов
interface CustomSelectProps {
  options: string[];
  onSelect: (value: string) => void;
  placeholder?: string;
  theme: string,
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  onSelect,
  placeholder,
  theme
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
      className={theme === "l" ? "custom_select" : "custom_select-dark"} 
	>
      <div
        className={theme === "l" ? "select__top" : "select__top-dark"}
		onClick={toggleDropdown}
      >
        {selectedValue || placeholder || "Select..."}
      </div>
      {isOpen && (
        <div
          className={theme === "l" ? "select_opened" : "select_opened-dark"} 
		>
          {options.map((option) => (
            <div
              className={theme === "l" ? "select_ok" : "select_ok-dark"} 
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
