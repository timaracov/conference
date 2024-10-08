import React from "react";
import "./Popup.css";

type Props = {
  isOpen: boolean;
  onClose: any;
  children: any;
};

const Popup = ({ isOpen, onClose, children }: Props) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        {/* <button className="close-button" onClick={onClose}>Закрыть</button> */}
        {children}
      </div>
    </div>
  );
};

export default Popup;
