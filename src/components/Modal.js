import React from "react";
import "./Modal.css";
import IconSuccess from "../assets/images/ic_round-check-circle.png";
import IconEmailSent from "../assets/images/icon_emailConfirm.webp";

function Modal({ handleHiddenModal, title, desc, btn1, btn2, emailSent }) {
  return (
    <>
      <div className="darkBG" onClick={handleHiddenModal} />
      <div className="centered">
        <div className="modal">
          <div className="containerModalImg">
            {emailSent ? (
              <img src={IconEmailSent} alt="modal-img" className="modalImage" />
            ) : (
              <img src={IconSuccess} alt="modal-img" className="modalImage" />
            )}
          </div>
          <div className="modalHeader">
            <h5 className="heading">{title}</h5>
          </div>
          <div className="modalContent">{desc}</div>
          <div className="modalActions">
            <button className="deleteBtn" onClick={handleHiddenModal}>
              {btn1}
            </button>
            {btn2 ? (
              <button className="cancelBtn" onClick={handleHiddenModal}>
                {btn2}
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
