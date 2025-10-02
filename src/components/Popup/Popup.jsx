import React, { useEffect } from "react";
import closeIcon from "../../images/CloseIcon.png";



export default function Popup({ title, children, onClose, type }) {
 
  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") {
        onClose();
      }
    }
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  
  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <div className="popup" onMouseDown={handleOverlayClick}>
      <div
        className={`popup__container ${
          type === "image" ? "popup__container_img" : ""
        }`}
      >
        <button
          aria-label="Fechar modal"
          className="popup__close-icon"
          type="button"
          onClick={onClose}
        >
          <img src={closeIcon} alt="Fechar" />
        </button>

        {title && <h3 className="popup__title">{title}</h3>}
        {children}
      </div>
    </div>
  );
}