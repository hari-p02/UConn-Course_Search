import React from "react";
import "./CardModal.css";
const CardModal = ({ closeModal }) => {
  return (
    <div className="card-modal-background">
      <div className="card-modal-contianer" onClick={() => closeModal(false)}>
        Temp Text &times;
      </div>
    </div>
  );
};

export default CardModal;
