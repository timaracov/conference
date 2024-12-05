import React from "react";
import "./Popup.css";
import utils from "../../utils/theme";


type Props = {
  isOpen: boolean;
  onClose: any;
  children: any;
};

const Popup = ({ isOpen, onClose, children }: Props) => {
  if (!isOpen) return null;

  return (
    <div className={utils.isThemeDark() ? "popup-overlay" : "popup-overlay-dark"} onClick={onClose}>
      <div className={utils.isThemeDark() ? "popup-content" : "popup-content"} onClick={(e) => e.stopPropagation()}>
        {<button className={utils.isThemeDark() ? "close-button" : "close-button-dark"} onClick={onClose}>Закрыть</button>}
        {children}
      </div>
    </div>
  );
};

export default Popup;
