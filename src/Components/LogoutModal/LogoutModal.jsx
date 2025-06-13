import React from "react";
import "./LogoutModal.scss";

const LogoutModal = ({ onCancel, onConfirm }) => {
  return (
    <div className="logout-modal-portal">
      <div className="modal-overlay">
        <div className="modal">
          <h3>Konfirmasi</h3>
          <p>Apakah Anda yakin ingin logout?</p>
          <div className="modal-buttons">
            <button className="btnOut cancel" onClick={onCancel}>
              Batal
            </button>
            <button className="btnOut confirm" onClick={onConfirm}>
              Ya, Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
