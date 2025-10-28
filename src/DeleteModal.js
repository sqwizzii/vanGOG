import React from "react";
import "./app.css";

const DeleteModal = ({ onConfirm, onCancel }) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <h3>Are you sure you want to delete this category?</h3>
                <div className="modal-buttons">
                    <button className="confirm" onClick={onConfirm}>
                        Yes
                    </button>
                    <button className="cancel" onClick={onCancel}>
                        No
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;
