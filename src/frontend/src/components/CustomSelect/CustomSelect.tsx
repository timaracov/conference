import React, { useState } from "react";

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
    onSelect(value); // Вызов родительского метода с выбранным значением
    setIsOpen(false); // Закрытие дропдауна
  };

  return (
    <div
      className="custom-select"
      style={{ position: "relative", width: "200px" }}
    >
      <div
        onClick={toggleDropdown}
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        {selectedValue || placeholder || "Select..."}
      </div>
      {isOpen && (
        <div
          style={{
            border: "1px solid #ccc",
            position: "absolute",
            width: "100%",
            backgroundColor: "white",
            zIndex: 1,
          }}
        >
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleOptionClick(option)}
              style={{
                padding: "10px",
                cursor: "pointer",
              }}
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
