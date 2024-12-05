import React from "react";
import "./Popup.css";


type Props = {
  isOpen: boolean;
  onClose: any;
  children: any;
  theme: string,
};

const Popup = ({ isOpen, onClose, children, theme }: Props) => {
  if (!isOpen) return null;

  return (
    <div className={theme === "l" ? "popup-overlay" : "popup-overlay-dark"} onClick={onClose}>
      <div className={theme === "l" ? "popup-content" : "popup-content-dark"} onClick={(e) => e.stopPropagation()}>
        {<button className={theme === "l" ? "close-button" : "close-button-dark"} onClick={onClose}>X</button>}
        {children}
      </div>
    </div>
  );
};

export default Popup;
